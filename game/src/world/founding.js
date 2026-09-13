import * as THREE from 'three';
import { vnoise, rng, clamp, lerp } from '../core/noise.js';
import { nrm3, cross3, makeBasis } from '../core/vecmath.js';
import { MeshBuilder, unitSphere } from '../core/meshBuilder.js';
import {
  groundY, groundSlope, waterDepthAt, distanceToWater, soilAt, LAWN_BOUNDS, TUNNEL_MOUTH,
} from './terrain.js';
import { texturedSurfaceMaterial, texturedEmissiveMaterial, dirtAlbedo, capAlbedo } from './texturing.js';
import { addLocalLight, applyNestShading, setNestPit } from './lighting.js';

/* ==========================================================================
   Founding the nest at run time (#11, #12; contract §4).

   design/boucle-de-jeu.md §0 moved the start of the game outdoors, queen
   alone, nest not yet dug. So the nest can no longer be a thing that exists
   because buildWorld() ran: it has to be dug where the player asks, while
   the game is running, without rebuilding the world.

   WHAT foundNest() DIGS, AND WHAT IT DOES NOT. One chamber and its access
   shaft. Not the gallery, not the three side rooms — those stay in
   world/underground.js as the "already founded" nest the arbitration turned
   the old start screen into. The user's instruction on scale is taken
   literally: one correct, readable, well-lit chamber beats a network.

   DIRECTION OF DEPENDENCY. The world does not know the player. foundNest()
   is called *by* player/**, never the reverse, which is what lets a
   verification harness dig a nest with no controller attached at all — and
   what scripts/verify-round6.mjs actually does.

   THE EMPTY CHAMBER (#12). The shell is dug once and never rebuilt. Being
   "inhabited" is a separate group of props that is created (hidden) at the
   same time and revealed a pile at a time by populateNest(n), each pile
   lighting its own lamp. That is design/ambiance-prologue.md §2c plans 2 to
   6 — cold daylight shaft, then dark, then one warm pool per clutch, then
   the first glow-bead — expressed as data rather than as a cutscene.
   ========================================================================== */

/* ---- shape of a founding chamber ---------------------------------------- */

const SHAFT_R = 4.2;      // a founding queen is ~2.2x a worker: 8 units across
const SHAFT_LEN = 15;     // along the axis, from the crater rim down
const ROOM_R = 14;
const ROOM_LEN = 8;       // half-extent of the chamber *along* the axis, i.e.
                          // its vertical half-height: 28 wide by 16 tall
const AXIS_TILT = 0.22;   // a plumb-vertical hole reads as a drill core
const RIM_H = 1.6;        // the crater lip stands proud of the lawn
const MOUND_R = 17;       // spoil heap around it

const MIN_WATER = 18;     // agrees with player/siteQuality.js's own MIN_WATER
const MAX_SLOPE = 0.62;   // = terrain.js's SOIL_ROCK_SLOPE, tan(32 deg)

const C_SOIL_A = new THREE.Color('#6d5130');
const C_WALL_A = new THREE.Color('#5a4226'), C_WALL_B = new THREE.Color('#332412');
const C_CHITIN = new THREE.Color('#e0a752');
const C_BROOD = new THREE.Color('#efdcb0');
const C_GLOW = new THREE.Color('#ffc46a');

const COLD_SHAFT_LIGHT = [0.55, 0.62, 0.82];   // ambiance §2c plan 2 (soie)
const WARM_MOUTH_LIGHT = [1.05, 0.62, 0.24];   // ambiance §2b: the one warm
                                               // point on the outdoor map
const BROOD_LIGHT = [0.85, 0.55, 0.22];        // ambiance §2c plan 5
const GLOW_LIGHT = [1.95, 1.20, 0.52];         // ambiance §2c plan 6

/* ---- run-time digging (#57, contract §7) --------------------------------
   A dig site is a straight, horizontal tunnel that starts on the chamber
   wall and grows outward as diggers work it. Reuses buildShell's swept-tube
   idiom (rings of a wobbled circle, wobbleAt, the earth palette) but along a
   flat horizontal axis instead of the chamber's near-vertical one, because
   contract §7 requires `dir` to be horizontal.

   SIZED AGAINST (piège #6, PROGRESS.md — the nest-bore trap happened with
   this exact shape of number before): FOUNDING_QUEEN's collision radius is
   3.3 (player/avatar.js, bodyR 1.5 * scale 2.2). containFoundedNest()'s own
   per-site clamp shrinks DIG_GALLERY_R by the same 0.82/-1.2 fudge
   containUnderground() applies to every corridor (see that function for
   why): Math.max(7.5*0.82-1.2, 2.2) = 4.95, a 1.65-unit (50%) margin over
   3.3 — comfortable, not the 0.9-unit margin the shaft (SHAFT_R=4.2) barely
   cleared. DIG_GALLERY_LEN=48 is ~3.4x the chamber's own radius (ROOM_R=14):
   long enough that growth reads as a real tunnel over many advanceDig()
   calls, short enough that a mouth chosen by canFoundAt's own slope/water
   margins is unlikely to have its far end break the surface (MAX_SLOPE=0.62
   over 48 units is a 30-unit worst-case rise — not checked against the
   terrain here, an item for visual review). */
export const DIG_SITES_MAX = 4;
export const DIG_GALLERY_LEN = 48;
export const DIG_GALLERY_R = 7.5;

/* How often advanceDig() rebuilds a site's mesh, not how often it accepts
   progress. advanceDig() is called once per digger per frame (#38's whole
   arbitrage is "several diggers on the same site go faster"), so rebuilding
   the swept tube on every call would run a ~34-ring geometry build every
   image, for every open site, for every digger on it — a vertex-count storm
   for a number nobody can see change frame to frame. Instead the mesh is
   rebuilt only when `progress` crosses one of DIG_REBUILD_STEPS equal steps
   (1/24 ≈ 2 world units of new tunnel per rebuild, roughly a queen's
   collision diameter — coarse enough to matter, fine enough to look
   continuous). A gallery dug from 0 to 1 therefore costs at most
   DIG_REBUILD_STEPS + 1 = 25 rebuilds over its whole life, however many
   diggers or frames that takes — the throttle is on distance dug, not time
   or call count. containFoundedNest() never reads the mesh: the walkable
   volume it clamps into is computed straight from `progress`, continuously,
   so a caller can never fall through the lag between "progress advanced"
   and "mesh caught up". */
const DIG_REBUILD_STEPS = 24;
function digStepOf(progress) {
  return Math.min(DIG_REBUILD_STEPS, Math.floor(clamp(progress, 0, 1) * DIG_REBUILD_STEPS + 1e-9));
}

/* Exported (and re-exported by world/index.js) because player/index.js needs
   the same number to size the brood room's capacity, and used to carry its
   own hand-copied BROOD_ROOM_CAPACITY = 6 — a silent divergence waiting to
   happen (PROGRESS.md, tour 10). One owner, one value. */
export const MAX_BROOD = 6;

/* ---- state --------------------------------------------------------------- */

let host = null;          // the THREE.Group foundNest() may add to
let nest = null;          // the founded nest, or null
let sites = new Array(DIG_SITES_MAX).fill(null); // dig sites, index-keyed, null until opened
const mixColor = (a, b, t) => new THREE.Color(a).lerp(b, clamp(t, 0, 1));

/** Called once by createWorld(): where a nest dug later should be attached. */
export function initFounding(group) { host = group; }

/** { x, z } of the founded nest, or null while nothing has been founded. */
export function nestOrigin() { return nest ? { x: nest.x, z: nest.z } : null; }

/** The whole descriptor (mouth, chamber centre and radius, floor height) for
 *  callers that need more than the origin — a camera framing the entrance, or
 *  the collision layer that will eventually let the queen walk in. */
export function getFoundedNest() { return nest; }

/**
 * Can a nest be founded here? Answers without building anything, so a HUD can
 * ask every frame. foundNest() calls this and never re-decides, so the two
 * can't drift apart.
 *
 * `reason` is a stable technical string, not a sentence for the player:
 * 'already-founded' | 'underground' | 'bounds' | 'occupied' | 'water' |
 * 'rock' | 'slope'. ('occupied' and 'bounds' are additions to the contract's
 * list — see the session report.)
 */
export function canFoundAt(x, z) {
  if (nest) return { ok: false, reason: 'already-founded' };
  if (z < TUNNEL_MOUTH) return { ok: false, reason: 'underground' };
  const B = LAWN_BOUNDS;
  if (x < B.x0 + MOUND_R || x > B.x1 - MOUND_R || z > B.z1 - MOUND_R) return { ok: false, reason: 'bounds' };
  // the gallery of the pre-existing nest runs under here
  if (Math.abs(x) < 34 && z < 34) return { ok: false, reason: 'occupied' };
  if (waterDepthAt(x, z) > 0) return { ok: false, reason: 'water' };
  if (distanceToWater(x, z) < MIN_WATER) return { ok: false, reason: 'water' };
  if (groundSlope(x, z) > MAX_SLOPE) return { ok: false, reason: 'slope' };
  if (soilAt(x, z).kind === 'rock') return { ok: false, reason: 'rock' };
  return { ok: true };
}

/* ---- the dig ------------------------------------------------------------- */

/* Same three-octave wall wobble as the gallery and the side rooms
   (world/underground.js), so a chamber dug at run time is made of the same
   earth as one built at load time — a different noise here would read as a
   different material. */
function wobbleAt(th, u, seed) {
  const n = (k, sz) => vnoise(Math.cos(th) * k + u * sz + seed + 37, Math.sin(th) * k + u * sz * 0.7 + seed + 91);
  return 0.84 + 0.20 * n(1.6, 0.10) + 0.10 * n(4.1, 0.29) + 0.05 * n(9.3, 0.62);
}

function chamberProfile(u) {
  const uEnd = SHAFT_LEN + ROOM_LEN;
  const t = (u - uEnd) / ROOM_LEN;
  if (t > -1 && t < 1) return SHAFT_R + (ROOM_R - SHAFT_R) * Math.pow(Math.sqrt(1 - t * t), 0.72);
  return SHAFT_R;
}

/**
 * Dig the shell: the shaft and the chamber, as one swept tube along a single
 * near-vertical axis. The bottom rings fall below the chamber floor and are
 * clamped up onto it, which is exactly how the main gallery gets a floor out
 * of a round tube (world/underground.js) — a flat floor the props and,
 * later, the queen can stand on, with no second surface to keep in sync.
 */
function buildShell(x, z, seed) {
  const mouthY = groundY(x, z);
  const az = (vnoise(x * 0.07, z * 0.07) - 0.5) * Math.PI * 2;
  const dir = nrm3([Math.cos(az) * AXIS_TILT, -1, Math.sin(az) * AXIS_TILT]);
  const e1 = nrm3(cross3(dir, [0, 0, 1]));
  const e2 = nrm3(cross3(dir, e1));
  const origin = [x, mouthY + RIM_H, z];
  const uMax = SHAFT_LEN + 2 * ROOM_LEN;
  const floorY = mouthY + RIM_H - (SHAFT_LEN + ROOM_LEN * 0.92);
  const ANG = 22;

  function pointAt(th, u) {
    const wob = wobbleAt(th, u, seed);
    const r = chamberProfile(u) * wob;
    const c0 = origin[0] + dir[0] * u, c1 = origin[1] + dir[1] * u, c2 = origin[2] + dir[2] * u;
    const px = c0 + (e1[0] * Math.cos(th) + e2[0] * Math.sin(th)) * r;
    const py = c1 + (e1[1] * Math.cos(th) + e2[1] * Math.sin(th)) * r;
    const pz = c2 + (e1[2] * Math.cos(th) + e2[2] * Math.sin(th)) * r;
    return [px, Math.max(py, floorY), pz, wob];
  }

  const M = new MeshBuilder();
  const rows = [];
  for (let u = 0; u <= uMax + 1e-4; u += 1.5) {
    const row = [];
    for (let a = 0; a < ANG; a++) {
      const th = 2 * Math.PI * a / ANG;
      const p = pointAt(th, u);
      const proud = clamp((p[3] - 0.84) / 0.34 + 0.45, 0, 1);
      /* Freshly turned earth, damper and darker than the old gallery's
         weathered walls: this hole was dug an hour ago. */
      const c = mixColor(C_WALL_B, C_WALL_A, proud * 0.8 + 0.10)
        .lerp(C_SOIL_A, 0.18 + proud * 0.14).multiplyScalar(0.88);
      row.push(M.addVertex(p[0], p[1], p[2], c.toArray()));
    }
    rows.push(row);
  }
  for (let r = 0; r < rows.length - 1; r++) {
    for (let a = 0; a < ANG; a++) {
      const n = (a + 1) % ANG;
      M.addQuad(rows[r][a], rows[r][n], rows[r + 1][n], rows[r + 1][a]);
    }
  }
  const last = rows[rows.length - 1];
  const capC = M.addVertex(origin[0] + dir[0] * uMax, floorY, origin[2] + dir[2] * uMax,
    mixColor(C_WALL_B, C_SOIL_A, 0.35).toArray());
  for (let a = 0; a < ANG; a++) M.addTri(capC, last[a], last[(a + 1) % ANG]);

  /* The spoil heap. It is the only part of a founded nest visible from the
     lawn, so it is also the landmark #33 asks for: a raised crater rim with
     a dark hole in it, warmed towards chitine (ambiance §2b) so it reads as
     inhabited rather than as a hole someone left open. */
  const MR = 8;
  const mound = [];
  for (let ri = 0; ri <= MR; ri++) {
    const t = ri / MR;
    const rr = lerp(SHAFT_R * 1.02, MOUND_R, t);
    const row = [];
    for (let a = 0; a <= ANG; a++) {
      const th = 2 * Math.PI * (a % ANG) / ANG;
      const px = x + Math.cos(th) * rr, pz = z + Math.sin(th) * rr;
      const lump = 0.75 + 0.5 * vnoise(px * 0.16 + seed, pz * 0.16 + seed);
      const lip = RIM_H * Math.pow(1 - t, 1.5) * lump + 0.9 * Math.sin(Math.PI * Math.min(1, t * 1.35)) * lump;
      const py = lerp(mouthY + RIM_H, groundY(px, pz), Math.pow(t, 0.7)) + (t > 0 ? lip * 0.75 : 0);
      const c = mixColor(mixColor(C_SOIL_A, C_WALL_B, 0.35 + 0.3 * (1 - t)), C_CHITIN, 0.12)
        .multiplyScalar(0.82 + 0.25 * lump);
      row.push(M.addVertex(px, py, pz, c.toArray()));
    }
    mound.push(row);
  }
  for (let ri = 0; ri < MR; ri++) {
    for (let a = 0; a < ANG; a++) M.addQuad(mound[ri][a], mound[ri][a + 1], mound[ri + 1][a + 1], mound[ri + 1][a]);
  }

  const chamberY = origin[1] + dir[1] * (SHAFT_LEN + ROOM_LEN);
  return {
    geometry: M.toBufferGeometry(),
    mouthY, floorY, origin, dir, uMax,
    chamber: {
      x: origin[0] + dir[0] * (SHAFT_LEN + ROOM_LEN),
      y: floorY,
      z: origin[2] + dir[2] * (SHAFT_LEN + ROOM_LEN),
      ceilY: chamberY + ROOM_LEN * 0.55,
      r: ROOM_R,
    },
  };
}

/* ---- what makes it inhabited (#12) --------------------------------------
   Built at founding time, hidden. populateNest(n) reveals n of them. The
   shell is never touched again. */

function buildFurnishing(shell, seed) {
  const R = rng(seed ^ 0x5bd1);
  const sphere = unitSphere(8, 5);
  const box = (sx, sy, sz, p) => makeBasis([sx, 0, 0], [0, sy, 0], [0, 0, sz], p);
  const C = shell.chamber;
  const piles = [];

  const mat = applyNestShading(new THREE.MeshStandardMaterial({
    vertexColors: true, roughness: 0.85, metalness: 0, side: THREE.DoubleSide,
  }));

  for (let i = 0; i < MAX_BROOD; i++) {
    const a = (i / MAX_BROOD) * Math.PI * 2 + R() * 0.5;
    const rad = C.r * (0.28 + R() * 0.34);
    const px = C.x + Math.cos(a) * rad, pz = C.z + Math.sin(a) * rad;
    const M = new MeshBuilder();
    const eggs = 5 + Math.floor(R() * 5);
    for (let e = 0; e < eggs; e++) {
      const ea = R() * Math.PI * 2, er = Math.sqrt(R()) * 2.6;
      const ex = px + Math.cos(ea) * er, ez = pz + Math.sin(ea) * er;
      const s = 0.75 + R() * 0.45;
      M.bake(sphere, box(s * 1.25, s * 0.85, s, [ex, C.y + s * 0.7, ez]),
        (bx, by) => mixColor(C_BROOD, C_SOIL_A, clamp(0.55 - (by - C.y) * 0.25, 0, 1)).toArray());
    }
    const mesh = new THREE.Mesh(M.toBufferGeometry(), mat);
    mesh.name = 'nest-brood-' + i;
    mesh.visible = false;
    mesh.castShadow = false;
    // Lamp added now, black. There is no way to remove a light from the local
    // pool (world/lighting.js keeps a flat array on purpose), so a pile that
    // is not yet laid contributes a lamp with no radiance instead.
    const lamp = addLocalLight([px, C.y + 2.2, pz], [0, 0, 0]);
    piles.push({ mesh, lamp, on: false });
  }

  /* The first glow-bead, hung from the ceiling, appearing with the fourth
     clutch (ambiance §2c plan 6). Emissive, like every other bead in the
     nest — it is a light source, not a lit surface. */
  const B = new MeshBuilder();
  const bx = C.x + (R() - 0.5) * 6, bz = C.z + (R() - 0.5) * 6;
  const by = C.ceilY - 3.2;
  B.bake(sphere, box(1.5, 1.8, 1.5, [bx, by, bz]), () => C_GLOW.toArray());
  const beadMesh = new THREE.Mesh(B.toBufferGeometry(), texturedEmissiveMaterial({
    map: capAlbedo(), strength: 0.7, emissive: 0.95, color: 0x777777, side: THREE.DoubleSide,
  }));
  beadMesh.name = 'nest-glow-bead';
  beadMesh.visible = false;
  const beadLamp = addLocalLight([bx, by, bz], [0, 0, 0]);

  return { piles, bead: { mesh: beadMesh, lamp: beadLamp, on: false } };
}

/* ---- the public act ------------------------------------------------------ */

/**
 * Dig the first chamber at (x, z). Same verdict as canFoundAt() — it calls
 * it. On success the meshes and lights appear immediately; nothing else in
 * the world is rebuilt.
 */
export function foundNest(x, z) {
  const verdict = canFoundAt(x, z);
  if (!verdict.ok) return verdict;

  const seed = Math.floor(Math.abs(x) * 131 + Math.abs(z) * 977) % 9973;
  const shell = buildShell(x, z, seed);

  const group = new THREE.Group();
  group.name = 'founded-nest';
  const shellMesh = new THREE.Mesh(shell.geometry, applyNestShading(texturedSurfaceMaterial({
    map: dirtAlbedo(), strength: 0.62, side: THREE.DoubleSide,
  })));
  shellMesh.name = 'founded-nest-shell';
  shellMesh.receiveShadow = true;
  group.add(shellMesh);

  const furnishing = buildFurnishing(shell, seed);
  for (const p of furnishing.piles) group.add(p.mesh);
  group.add(furnishing.bead.mesh);

  if (host) host.add(group);

  /* Two lamps at the entrance and they say opposite things on purpose. The
     cold one is the daylight falling down the shaft — the world being left
     behind; sealNest() takes it away. The warm one is the mouth seen from
     the lawn, the only warm point on an otherwise cold map. */
  const coldLight = addLocalLight([x, shell.mouthY - 4, z], COLD_SHAFT_LIGHT);
  const warmLight = addLocalLight([x, shell.mouthY + 1.0, z], WARM_MOUTH_LIGHT);

  nest = {
    x, z, group,
    mouth: { x, y: shell.mouthY + RIM_H, z, r: SHAFT_R },
    chamber: shell.chamber,
    floorY: shell.floorY,
    axis: { origin: shell.origin, dir: shell.dir, length: shell.uMax },
    brood: 0,
    sealed: false,
    _furnishing: furnishing,
    _coldLight: coldLight,
    _warmLight: warmLight,
    _coldFade: 1,
  };

  /* Tell the shader where the hole is, so the sun stops shining into it.
     The nest is at z > 0, which world/lighting.js's daylight falloff calls
     "outdoors" — without this the chamber is lit like an open field twenty
     units underground. */
  setNestPit(x, shell.mouthY + RIM_H, z, ROOM_R, SHAFT_LEN + ROOM_LEN);

  return { ok: true };
}

/**
 * How inhabited the chamber is: `n` clutches laid, 0..MAX_BROOD. Each one
 * reveals its pile and lights its own warm lamp; the fourth also brings the
 * first glow-bead down on its thread. Reveals only — the chamber shell is
 * never rebuilt, which is the whole point of #12.
 */
export function populateNest(n) {
  if (!nest) return 0;
  const count = Math.round(clamp(n, 0, MAX_BROOD));
  nest.brood = count;
  nest._furnishing.piles.forEach((p, i) => {
    const on = i < count;
    p.mesh.visible = on;
    p.on = on;
    p.lamp.c[0] = on ? BROOD_LIGHT[0] : 0;
    p.lamp.c[1] = on ? BROOD_LIGHT[1] : 0;
    p.lamp.c[2] = on ? BROOD_LIGHT[2] : 0;
  });
  const bead = nest._furnishing.bead;
  bead.on = count >= 4;
  bead.mesh.visible = bead.on;
  bead.lamp.c[0] = bead.on ? GLOW_LIGHT[0] : 0;
  bead.lamp.c[1] = bead.on ? GLOW_LIGHT[1] : 0;
  bead.lamp.c[2] = bead.on ? GLOW_LIGHT[2] : 0;
  return count;
}

/** The queen closes the entrance behind her: the cold shaft light fades out
 *  over ~3 s (ambiance §2c plan 3), leaving the darkest moment in the game. */
export function sealNest(sealed = true) {
  if (nest) nest.sealed = sealed;
}

/** Eased by world.update(); nothing else here is per-frame. */
export function updateFounding(dt) {
  if (!nest) return;
  const target = nest.sealed ? 0 : 1;
  const k = Math.min(1, dt / 3.0);
  nest._coldFade += (target - nest._coldFade) * k * 3;
  const f = clamp(nest._coldFade, 0, 1);
  nest._coldLight.c[0] = COLD_SHAFT_LIGHT[0] * f;
  nest._coldLight.c[1] = COLD_SHAFT_LIGHT[1] * f;
  nest._coldLight.c[2] = COLD_SHAFT_LIGHT[2] * f;
}

/* ---- dig sites, the public act of #57 ------------------------------------
   Four candidate directions, evenly spaced around the chamber's own circle
   (theta measured from world +X, nothing to do with wallPoint's th convention
   in world/underground.js — there is no shared wall here to be consistent
   with, this chamber's cross-section is a plain horizontal circle). Pure and
   deterministic in `i` alone: no RNG, so planDigSite(i) can be asked before
   anything is open, from a HUD, over and over, for the same answer. */
function siteAngle(i) { return (2 * Math.PI * i) / DIG_SITES_MAX + Math.PI / 4; }

function sitePlan(i) {
  const C = nest.chamber;
  const theta = siteAngle(i);
  const dir = { x: Math.cos(theta), z: Math.sin(theta) };
  return {
    id: `dig-${i}`,
    mouth: { x: C.x + dir.x * C.r, y: nest.floorY, z: C.z + dir.z * C.r },
    dir, length: DIG_GALLERY_LEN, r: DIG_GALLERY_R,
  };
}

/**
 * Describe dig site `i` around the founded chamber, without building or
 * opening anything. `null` while nothing is founded, or if `i` is out of
 * `[0, DIG_SITES_MAX)` — same nest, same `i`, same answer, always.
 */
export function planDigSite(i) {
  if (!nest || !Number.isInteger(i) || i < 0 || i >= DIG_SITES_MAX) return null;
  return { ...sitePlan(i), progress: 0 };
}

function siteView(s) {
  return { id: s.id, mouth: s.mouth, dir: s.dir, length: s.length, r: s.r, progress: s.progress };
}

/** The chantiers actually opened — digSites().length <= DIG_SITES_MAX. */
export function digSites() {
  return sites.filter(Boolean).map(siteView);
}

/**
 * Open chantier `i` at progress 0. Re-opening one already open is a no-op
 * that returns the same site (contract §7) rather than resetting it — a
 * digger arriving at an in-progress site must not undo her sisters' work.
 */
export function openDigSite(i) {
  if (!nest) return { ok: false, reason: 'not-founded' };
  if (!Number.isInteger(i) || i < 0 || i >= DIG_SITES_MAX) return { ok: false, reason: 'bad-index' };
  if (sites[i]) return { ok: true, site: siteView(sites[i]) };
  const plan = sitePlan(i);
  const site = {
    ...plan, index: i, progress: 0,
    // same seed formula as foundNest()'s own chamber seed, salted by index so
    // sibling sites don't all wobble in lockstep
    seed: Math.floor(Math.abs(nest.x) * 131 + Math.abs(nest.z) * 977 + i * 613) % 9973,
    mesh: null, _meshStep: -1,
  };
  sites[i] = site;
  return { ok: true, site: siteView(site) };
}

function findSite(id) { return sites.find((s) => s && s.id === id) || null; }

/**
 * Add `dFraction` (any sign, but the caller only ever adds — see contract
 * §7's note on where the digging *speed* lives) to a site's progress, bound
 * to [0, 1], and rebuild its mesh if that crossed a rebuild step (see
 * DIG_REBUILD_STEPS above). `reason: 'unknown-site'` covers a stale or
 * mistyped id without throwing on a caller that raced a reset.
 */
export function advanceDig(id, dFraction) {
  const site = findSite(id);
  if (!site) return { ok: false, progress: 0, done: false, reason: 'unknown-site' };
  const d = Number.isFinite(dFraction) ? dFraction : 0;
  site.progress = clamp(site.progress + d, 0, 1);
  const step = digStepOf(site.progress);
  if (step !== site._meshStep) {
    site._meshStep = step;
    rebuildGalleryMesh(site);
  }
  return { ok: true, progress: site.progress, done: site.progress >= 1 };
}

/** 0 for an id that was never opened (or is stale) — never throws. */
export function digProgress(id) {
  const site = findSite(id);
  return site ? site.progress : 0;
}

/* Rebuild (never construct twice from scratch): the mesh object and its
   material are made once per site, on the first rebuild past progress 0;
   every later rebuild only swaps the geometry, so a site's up-to-25-rebuild
   life costs 25 geometry builds and exactly one material. */
function buildGalleryGeometry(site, dugLen) {
  const dir3 = [site.dir.x, 0, site.dir.z];
  // side/up: cross(worldUp, dir) and cross(dir, side) collapse to a clean
  // (horizontal-perp, world-up) pair whenever dir itself is horizontal and
  // unit — unlike buildShell's e1/e2, this never degenerates for any dir3
  // this file ever hands it (see the session report for the derivation).
  const side = [dir3[2], 0, -dir3[0]];
  const up = [0, 1, 0];
  const floorY = site.mouth.y - site.r * 0.85;
  const ANG = 16;

  const M = new MeshBuilder();
  const rows = [];
  for (let u = 0; ; u += 1.5) {
    const uu = Math.min(u, dugLen);
    const row = [];
    const cx = site.mouth.x + dir3[0] * uu, cz = site.mouth.z + dir3[2] * uu;
    for (let a = 0; a < ANG; a++) {
      const th = (2 * Math.PI * a) / ANG;
      const wob = wobbleAt(th, uu, site.seed);
      const r = site.r * wob;
      const px = cx + (side[0] * Math.cos(th) + up[0] * Math.sin(th)) * r;
      const py = site.mouth.y + (side[1] * Math.cos(th) + up[1] * Math.sin(th)) * r;
      const pz = cz + (side[2] * Math.cos(th) + up[2] * Math.sin(th)) * r;
      // freshly dug, same earth as buildShell — this is more of the same hole
      const c = mixColor(C_WALL_B, C_WALL_A, 0.5).lerp(C_SOIL_A, 0.18).multiplyScalar(0.88);
      row.push(M.addVertex(px, Math.max(py, floorY), pz, c.toArray()));
    }
    rows.push(row);
    if (uu >= dugLen) break;
  }
  for (let r = 0; r < rows.length - 1; r++) {
    for (let a = 0; a < ANG; a++) {
      const n = (a + 1) % ANG;
      M.addQuad(rows[r][a], rows[r][n], rows[r + 1][n], rows[r + 1][a]);
    }
  }
  // the working face: a flat cap so the front of the dig reads as a wall,
  // not an open pipe
  const last = rows[rows.length - 1];
  const capC = M.addVertex(
    site.mouth.x + dir3[0] * dugLen, floorY, site.mouth.z + dir3[2] * dugLen,
    mixColor(C_WALL_B, C_SOIL_A, 0.35).toArray(),
  );
  for (let a = 0; a < ANG; a++) M.addTri(capC, last[a], last[(a + 1) % ANG]);
  return M.toBufferGeometry();
}

function rebuildGalleryMesh(site) {
  const dugLen = site.progress * site.length;
  if (dugLen < 1e-3) { if (site.mesh) site.mesh.visible = false; return; }
  const geometry = buildGalleryGeometry(site, dugLen);
  if (!site.mesh) {
    const material = applyNestShading(texturedSurfaceMaterial({ map: dirtAlbedo(), strength: 0.62, side: THREE.DoubleSide }));
    site.mesh = new THREE.Mesh(geometry, material);
    site.mesh.name = 'dig-gallery-' + site.index;
    site.mesh.receiveShadow = true;
    nest.group.add(site.mesh);
  } else {
    site.mesh.geometry.dispose();
    site.mesh.geometry = geometry;
    site.mesh.visible = true;
  }
}

/**
 * Twin of world/underground.js's containUnderground() for the chamber dug at
 * run time: clamps (x, z) into the nearest legal point of the volume actually
 * dug — the chamber's own footprint, plus each open site's tunnel *up to its
 * dug length only* (progress * length). What is not dug is not walkable: a
 * front de taille clamps like a wall, not like the end of an infinite tube.
 * `null` while nothing is founded, so a caller can tell "no nest" apart from
 * "clamped to (x0, z0)".
 *
 * Same two-tier shape and the same fudge constants as containUnderground():
 * a point already inside one specific site's own lane is clamped there first
 * (radius shrunk by the 0.82/-1.2 rule, see the DIG_GALLERY_R comment above);
 * everything else falls back to the chamber's own circular footprint, widened
 * along the arc facing each open door (the same "doorFalloff" idea
 * containUnderground applies along z, generalised here to an angle since
 * these doors sit anywhere around a circle rather than only at +-x).
 */
export function containFoundedNest(x, z) {
  if (!nest) return null;
  for (let i = 0; i < sites.length; i++) {
    const s = sites[i];
    if (!s) continue;
    const dugLen = s.progress * s.length;
    const relX = x - s.mouth.x, relZ = z - s.mouth.z;
    const u = relX * s.dir.x + relZ * s.dir.z;
    if (u <= -0.5 || u >= dugLen + 1) continue;
    const lx = relX * -s.dir.z + relZ * s.dir.x;
    const rr = Math.max(s.r * 0.82 - 1.2, 2.2);
    if (Math.abs(lx) >= rr + 3) continue;
    const uc = clamp(u, -0.5, dugLen - 0.2);
    const lxc = clamp(lx, -rr, rr);
    return [s.mouth.x + s.dir.x * uc - s.dir.z * lxc, s.mouth.z + s.dir.z * uc + s.dir.x * lxc];
  }
  const C = nest.chamber;
  const relX = x - C.x, relZ = z - C.z;
  const rho = Math.hypot(relX, relZ);
  const theta = Math.atan2(relZ, relX);
  let reach = Math.max(C.r * 0.82 - 1.6, 3);
  for (const s of sites) {
    if (!s) continue;
    const doorTheta = Math.atan2(s.dir.z, s.dir.x);
    let dth = Math.abs(theta - doorTheta) % (Math.PI * 2);
    if (dth > Math.PI) dth = Math.PI * 2 - dth;
    const arc = dth * C.r;
    const fall = clamp(1 - arc / (s.r * 2.2), 0, 1);
    if (fall <= 0) continue;
    const doorReach = lerp(reach, C.r + 1.5, fall);
    if (doorReach > reach) reach = doorReach;
  }
  const rc = clamp(rho, 0, reach);
  return [C.x + Math.cos(theta) * rc, C.z + Math.sin(theta) * rc];
}

/** Test seam only: forget the founded nest so a harness can dig again. Not
 *  gameplay — nothing in player/** should ever call this. */
export function _resetFounding() {
  if (nest && nest.group.parent) nest.group.parent.remove(nest.group);
  nest = null;
  sites = new Array(DIG_SITES_MAX).fill(null);
  setNestPit(0, 0, 0, 0, 0);
}

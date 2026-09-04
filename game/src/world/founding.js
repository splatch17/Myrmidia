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

const MAX_BROOD = 6;

/* ---- state --------------------------------------------------------------- */

let host = null;          // the THREE.Group foundNest() may add to
let nest = null;          // the founded nest, or null
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


/* ---- the first gallery (#39) --------------------------------------------
   A tunnel driven horizontally out of the chamber, revealed in one piece when
   the diggers finish. design/castes-et-micro-macro.md 1 settles that it
   appears at once rather than growing: a gallery that advances by the metre
   costs a rebuild every frame and reads as nothing at ant scale, where a gauge
   filling and then a mouth opening reads immediately.

   It runs level, not down. The shaft above it is already as steep as a
   ground-following controller can survive (that is why the laying descent is
   scripted at all, PROGRESS.md defect 7), and #40 has to make this one
   walkable — so the one piece of geometry added here is the one piece that
   does not make that problem worse.

   The direction is derived from the nest's own axis rather than chosen: the
   shaft leans one way, and driving the gallery along that lean is what makes
   the pair read as one excavation instead of two holes that happen to meet. */
const GALLERY_R = 5.0;      // wider than the shaft: this one is meant to be walked
const GALLERY_LEN = 46;
const GALLERY_SEGS = 26;
const GALLERY_ANG = 20;

function buildGallery(n, seed) {
  const c = n.chamber;
  // heading: the horizontal component of the shaft's own lean, normalised
  const dx = n.axis.dir[0], dz = n.axis.dir[2];
  const hl = Math.hypot(dx, dz) || 1;
  const hx = dx / hl, hz = dz / hl;
  // start inside the chamber wall so the two solids overlap and there is no
  // seam to see through
  const sx = c.x + hx * (ROOM_R * 0.55), sz = c.z + hz * (ROOM_R * 0.55);
  const px = -hz, pz = hx;          // horizontal perpendicular

  const M = new MeshBuilder();
  const rows = [];
  for (let i = 0; i <= GALLERY_SEGS; i++) {
    const t = i / GALLERY_SEGS;
    const u = t * GALLERY_LEN;
    // a gentle meander so it does not read as a drainpipe
    const bend = Math.sin(t * 2.4 + seed * 0.017) * 5.0 * t;
    const cx = sx + hx * u + px * bend;
    const cz = sz + hz * u + pz * bend;
    // taper the far end shut: a tunnel that stops in a flat disc reads as
    // unfinished, one that narrows reads as a face still being worked
    const r = GALLERY_R * (1 - 0.45 * Math.pow(t, 3));
    const row = [];
    for (let a = 0; a < GALLERY_ANG; a++) {
      const th = 2 * Math.PI * a / GALLERY_ANG;
      const wob = 0.88 + 0.24 * vnoise(th * 1.7 + u * 0.09, u * 0.13 + seed);
      const rr = r * wob;
      const py = c.y + GALLERY_R * 0.55 + Math.sin(th) * rr;
      row.push(M.addVertex(
        cx + px * Math.cos(th) * rr,
        Math.max(py, c.y + 0.15),
        cz + pz * Math.cos(th) * rr,
        /* Same recipe as the shaft's walls (buildShell above), so the two
           read as one excavation: freshly turned earth, damper and darker
           than the old weathered gallery. */
        mixColor(C_WALL_B, C_WALL_A, clamp((wob - 0.84) / 0.34 + 0.45, 0, 1) * 0.8 + 0.10)
          .lerp(C_SOIL_A, 0.22).multiplyScalar(0.86).toArray(),
      ));
    }
    rows.push(row);
  }
  for (let i = 0; i < GALLERY_SEGS; i++) {
    for (let a = 0; a < GALLERY_ANG; a++) {
      const b = (a + 1) % GALLERY_ANG;
      M.addQuad(rows[i][a], rows[i][b], rows[i + 1][b], rows[i + 1][a]);
    }
  }
  return {
    geometry: M.toBufferGeometry(),
    end: { x: sx + hx * GALLERY_LEN, y: c.y, z: sz + hz * GALLERY_LEN },
    heading: [hx, hz],
    start: { x: sx, z: sz },
  };
}

/** Is there a gallery yet, and where does it run? null before it is dug. */
export function getGallery() { return nest && nest.gallery ? nest.gallery : null; }

/**
 * Open the first gallery. Idempotent — calling it twice is a no-op rather
 * than a second tunnel, because the caller is a progress bar and progress
 * bars overshoot.
 */
export function digGallery() {
  if (!nest) return { ok: false, reason: 'no-nest' };
  if (nest.gallery) return { ok: true, already: true };

  const seed = Math.floor(Math.abs(nest.x) * 73 + Math.abs(nest.z) * 149) % 9973;
  const g = buildGallery(nest, seed);
  const mesh = new THREE.Mesh(g.geometry, applyNestShading(texturedSurfaceMaterial({
    map: dirtAlbedo(), strength: 0.62, side: THREE.DoubleSide,
  })));
  mesh.name = 'first-gallery';
  mesh.receiveShadow = true;
  nest.group.add(mesh);

  // one lamp at the far face, so the tunnel has somewhere to go rather than
  // fading into black two body lengths in
  addLocalLight([g.end.x, g.end.y + 3, g.end.z], WARM_MOUTH_LIGHT);

  nest.gallery = { ...g, mesh };
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

/** Test seam only: forget the founded nest so a harness can dig again. Not
 *  gameplay — nothing in player/** should ever call this. */
export function _resetFounding() {
  if (nest && nest.group.parent) nest.group.parent.remove(nest.group);
  nest = null;
  setNestPit(0, 0, 0, 0, 0);
}

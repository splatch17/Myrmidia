import * as THREE from 'three';
import { vnoise, clamp, lerp } from '../core/noise.js';
import { nrm3, cross3 } from '../core/vecmath.js';
import { MeshBuilder } from '../core/meshBuilder.js';
import { texturedSurfaceMaterial, dirtAlbedo } from './texturing.js';

/* ==========================================================================
   Underground: the gallery tube (with the queen's chamber as a bulge in it)
   plus three side rooms (granary, brood chambers, midden) branching off it.

   Ported from design/prototypes/sortie-fourmiliere.html, section 1 (world
   constants / profileR / containUnderground) and the buildBranch()+tunnel-
   ring block of buildWorld() (section 3). This round's underground scope is
   deliberately narrow (see .claude/agents/atta-render.md, "Underground" note
   for this session): tunnel profile, the three branches, wall holes and
   containment, and the door lights already agreed with Cataglyphis (#17).
   Decorative props from the old file (roots, rootlets, soil grains, fungus
   gardens, the dais, brood/resin piles, silk threads) are NOT ported this
   round — out of scope for #20/#21 (accessibility), left for a later DA
   pass once the room shells are confirmed walkable in-engine.

   COORDINATE CONVENTION for every `theta` below: it is the angle of a point
   *within a tunnel cross-section* (the local X-Y plane at a fixed world Z),
   not a horizontal (x,z) bearing. theta=0 -> local +X (the cross-section's
   "east", roughly floor-to-one-side), increasing counter-clockwise; sin(theta)
   maps into the section's Y (up), cos(theta) into local X. This is exactly
   the convention the old prototype's wallPoint(th, z) used. For horizontal
   (x,z) collision/walkability queries, use containUnderground(x, z) instead
   — it already resolves the branch-vs-main-tube geometry for you.
   ========================================================================== */

/* HOW WIDE A PASSAGE IS, IN ANTS.

   Every bore in this file was authored against the worker of
   design/prototypes/sortie-fourmiliere.html: body radius 1.5, gallery 7.2, so
   the tube was 4.8 body-radii across and a side corridor 2.2. Then #32 made
   the player a founding queen at 2.2x that body, and the bores never followed.
   The result is not tight, it is impossible: a branch corridor is 3.3 and she
   is 3.3, so the granary, brood and midden cannot be entered at all, and in
   the main gallery her gaster fills the frame with the camera clipped into
   her back.

   This is the same defect as the grass blades being wider than the queen and
   the prologue fog starting two body-lengths out: a number calibrated against
   one scale, left behind when the scale changed. So it gets the same fix — a
   single multiplier, applied to the dimensions that are measured in ants, and
   to nothing else.

   LENGTHS ARE NOT SCALED. Only bores. A gallery that is long is a gallery; a
   gallery that is narrow is a wall. Scaling z as well would have moved every
   room, every wall hole and every prop, for no gain the player can see. */
export const NEST_BORE = 2.2;     // = FOUNDING_QUEEN.scale, and that is the reason

export const TUNNEL_BACK = -166;  // back wall of the queen's chamber
export const TUNNEL_MOUTH = 0;    // where the gallery opens onto the lawn
export const TUNNEL_R = 7.2 * NEST_BORE;
export const TUNNEL_RISE = 4.0 * NEST_BORE;   // tube centre height, so the floor lands near y=0

export const CH_Z = -132, CH_R = 32;  // the chamber is a bulge in the same tube
export const START = [-9, -140];
export const QUEEN = [13, 0, -124];
export const DAIS_R = 15, DAIS_H = 2.6;

/* The gallery and the chamber are one tube whose radius swells in the middle. */
export function profileR(z) {
  const t = (z - CH_Z) / CH_R;
  if (t > -1 && t < 1) {
    return TUNNEL_R + (CH_R - TUNNEL_R) * Math.pow(Math.sqrt(1 - t * t), 0.72);
  }
  return TUNNEL_R;
}

/* Floor height underground: flat-ish noise, plus the queen's dais bump.
   Shared with terrain.js's groundY() so nothing hovers or sinks at the
   gallery mouth seam. */
export function undergroundFloor(x, z) {
  let y = 0.22 * vnoise(x * 0.11 + 11, z * 0.11 + 5);
  const d = Math.hypot(x - QUEEN[0], z - QUEEN[2]);
  if (d < DAIS_R) {
    const t = 1 - d / DAIS_R;
    y += DAIS_H * t * t * (3 - 2 * t);
  }
  return y;
}

/* ---- wall holes (side-room mouths punched through the main tube) -------- */

const WALL_HOLES = [];
const ROOM_BRANCHES = [];
const DOOR_LIGHTS = [];

/**
 * True if (theta, z) falls inside a side room's punched-out doorway — i.e.
 * there is no wall there, the main tube mesh must skip that quad, and
 * getUndergroundRadius() should report "open" rather than a wall radius.
 * theta uses the cross-section convention documented at the top of this file.
 */
export function getWallHoleAt(theta, z) {
  for (let i = 0; i < WALL_HOLES.length; i++) {
    const h = WALL_HOLES[i];
    const dth = Math.atan2(Math.sin(theta - h.th), Math.cos(theta - h.th));
    const ex = dth / h.rTh, ez = (z - h.z) / h.rZ;
    if (ex * ex + ez * ez < 1) return true;
  }
  return false;
}

/**
 * Wall radius of the main tube's cross-section at (z, theta). Returns
 * Infinity where a side room's doorway is punched through (getWallHoleAt),
 * i.e. "no wall in this direction, it's open" — otherwise the solid tube
 * radius from profileR(z). This does not vary with theta itself (the tube's
 * cross-section is theta-independent in radius, only in how X vs Y are
 * scaled from it — see riseAt/vsqAt below); theta only matters here to test
 * against the punched holes.
 */
export function getUndergroundRadius(z, theta) {
  return getWallHoleAt(theta, z) ? Infinity : profileR(z);
}

/**
 * Read-only snapshot of the three side-room branches, for callers that want
 * more than the clamp containUnderground() gives them (e.g. spawning NPCs or
 * aiming a camera at a room's centre). Keyed by name for convenience.
 */
export function getRoomBranches() {
  const byName = {};
  for (const b of ROOM_BRANCHES) byName[b.name] = b;
  return byName;
}

/**
 * The actual walkability fix for #21: clamps a candidate (x, z) into the
 * nearest legal underground footprint — either inside a side room's own
 * branch, or inside the main tube, with the main tube's clamp locally
 * widened near each branch mouth so the punched-through doorway is a real
 * continuous opening instead of an invisible wall. Ported verbatim (in
 * behaviour) from the old prototype's containUnderground(); see that
 * function's comment in design/prototypes/sortie-fourmiliere.html for the
 * full reasoning on the -0.5/+3 fudge constants below.
 */
export function containUnderground(x, z) {
  for (let i = 0; i < ROOM_BRANCHES.length; i++) {
    const br = ROOM_BRANCHES[i];
    const relX = x - br.origin[0], relZ = z - br.origin[2];
    const u = relX * br.dir[0] + relZ * br.dir[2];
    if (u <= -0.5 || u >= br.uMax + 1) continue;
    const lx = relX * br.side[0] + relZ * br.side[2];
    const rr = Math.max(br.profR(clamp(u, 0, br.uMax)) * 0.82 - 1.2, 2.2);
    if (Math.abs(lx) >= rr + 3) continue;
    const uc = clamp(u, -0.5, br.uMax - 1.2);
    const lxc = clamp(lx, -rr, rr);
    return [br.origin[0] + br.dir[0] * uc + br.side[0] * lxc,
            br.origin[2] + br.dir[2] * uc + br.side[2] * lxc];
  }
  const lim = Math.max(profileR(z) * 0.82 - 1.6, 3);
  let limPos = lim, limNeg = lim;
  for (let j = 0; j < ROOM_BRANCHES.length; j++) {
    const b2 = ROOM_BRANCHES[j];
    const fall = clamp(1 - Math.abs(z - b2.origin[2]) / b2.doorFalloff, 0, 1);
    if (fall <= 0) continue;
    const reach = lerp(lim, Math.abs(b2.origin[0]) + 1.5, fall);
    if (b2.dir[0] > 0) { if (reach > limPos) limPos = reach; }
    else { if (reach > limNeg) limNeg = reach; }
  }
  return [clamp(x, -limNeg, limPos), Math.max(z, TUNNEL_BACK + 5)];
}

/* ---- geometry ------------------------------------------------------------ */

const C_SOIL_A = new THREE.Color('#6d5130');
const C_WALL_A = new THREE.Color('#5a4226'), C_WALL_B = new THREE.Color('#332412');
const C_MOSS_A = new THREE.Color('#4c5f2f');
const C_MOLD = new THREE.Color(C_MOSS_A).lerp(C_WALL_B, 0.62).multiplyScalar(0.58);

function mixColor(a, b, t) { return new THREE.Color(a).lerp(b, clamp(t, 0, 1)); }

function wallN(th, z, k, sz) {
  return vnoise(Math.cos(th) * k + z * sz + 37, Math.sin(th) * k + z * sz * 0.7 + 91);
}
function vsqAt(r) { return 0.86 * Math.pow(TUNNEL_R / r, 0.35); }
export function riseAt(z) { const r = profileR(z); return 1.2 + r * vsqAt(r) * 0.62; }

/* Where a point on the main tube's wall sits, given cross-section angle and
   depth — same convention as getUndergroundRadius/getWallHoleAt above. */
export function wallPoint(th, z, inset) {
  const baseR = profileR(z), vsq = vsqAt(baseR);
  const wob = 0.84 + 0.20 * wallN(th, z, 1.6, 0.10)
                   + 0.10 * wallN(th, z, 4.1, 0.29)
                   + 0.05 * wallN(th, z, 9.3, 0.62);
  const rr = baseR * wob * (1 - (inset || 0));
  const px = Math.cos(th) * rr;
  const py = Math.sin(th) * rr * vsq + riseAt(z);
  const fl = undergroundFloor(px, z);
  return [px, Math.max(py, fl), z, wob];
}

/* Main-tube wall colour: ridge-vs-crevice (proud) tinted warmer near the
   chamber and in damp patches (warmth). */
function wallColor(proud, warmth) {
  const c = mixColor(C_WALL_B, C_WALL_A, proud * 0.8 + 0.12);
  return mixColor(c, C_SOIL_A, warmth);
}

/* Per-room palettes (see the DA spec in .claude/agents/atta-render.md,
   "Spec DA — salles supplémentaires"): granary stays cold/utilitarian like
   the gallery, brood extends the queen's warm chitine, midden gets the
   game's one green (mould). Each ported verbatim from its buildWorld()
   wallColorFn in the old prototype. */
function granaryColor(proud) {
  const c = mixColor(C_WALL_B, C_WALL_A, proud * 0.8 + 0.12);
  return mixColor(c, C_SOIL_A, 0.28 + proud * 0.18);
}
function broodColor(proud) {
  const c = mixColor(C_WALL_B, C_WALL_A, proud * 0.75 + 0.15);
  return mixColor(c, C_SOIL_A, 0.55);
}
function middenColor(proud) {
  const c = mixColor(C_WALL_B, C_WALL_A, proud * 0.6 + 0.08);
  return mixColor(c, C_MOLD, 0.3 + proud * 0.3);
}

/* A side room: same swept-tube technique as the main gallery (3-octave
   wobble), but branching sideways from a wall point instead of following
   world Z. th0 is 0 or PI (a clean +-X branch). Registers a hole in the
   gallery wall (WALL_HOLES) and a containment region (ROOM_BRANCHES, read by
   containUnderground() above) so the room is both visible and walkable. */
/* cavityMul darkens a room wholesale (the midden is a forgotten corner of the
   nest, 0.46). The old prototype scaled its baked per-vertex daylight term by
   it; daylight is evaluated per fragment now (world/lighting.js), so it is
   folded into the wall albedo here instead — same visual result, and it also
   correctly keeps the midden dingy under its own local lights. */
function buildBranch(name, th0, z0, corridorR, corridorLen, roomR, roomLen, angSegs, seed, cavityMul, wallColorFn, doorLightCol) {
  const mouth = wallPoint(th0, z0, 0);
  /* The branch's vertical origin is the *floor* at the mouth, not the wall
     point's own height. wallPoint(th0=0|PI) lands halfway up the gallery's
     cross-section, so anchoring there left every room's tube hanging in the
     air (8 units up for the brood chambers): the props inside, which are all
     placed on undergroundFloor(), sat on nothing, and the ant — which walks
     on the same floor function — walked underneath the room it was supposedly
     in. Anchoring to the floor makes the lower half of each ring fall below
     it and get clamped up by the Math.max(wy, fl) below, which is exactly how
     the main gallery gets its floor. The doorway punched in the gallery wall
     is re-centred to match (see WALL_HOLES below) — the (x, z) footprint the
     ant is contained to is untouched, so room accessibility (#21) is
     unaffected. */
  const origin = [mouth[0], undergroundFloor(mouth[0], mouth[2]), mouth[2]];
  const dir = nrm3([Math.cos(th0), 0, 0.0001]);
  const side = nrm3(cross3([0, 1, 0], dir));
  const uEnd = corridorLen + roomLen, uMax = corridorLen + roomLen * 2;

  function profR(u) {
    const t = (u - uEnd) / roomLen;
    if (t > -1 && t < 1) return corridorR + (roomR - corridorR) * Math.pow(Math.sqrt(1 - t * t), 0.72);
    return corridorR;
  }
  function vsq(r) { return 0.86 * Math.pow(corridorR / r, 0.35); }
  function rise(u) { const r = profR(u); return 1.1 + r * vsq(r) * 0.6; }
  function noise(th, u, k, sz) {
    return vnoise(Math.cos(th) * k + u * sz + seed + 37, Math.sin(th) * k + u * sz * 0.7 + seed + 91);
  }
  function pointAt(th, u, inset) {
    const baseR = profR(u), vs = vsq(baseR);
    const wob = 0.84 + 0.20 * noise(th, u, 1.6, 0.10) + 0.10 * noise(th, u, 4.1, 0.29) + 0.05 * noise(th, u, 9.3, 0.62);
    const rr = baseR * wob * (1 - (inset || 0));
    const lx = Math.cos(th) * rr, ly = Math.sin(th) * rr * vs + rise(u);
    const wx = origin[0] + dir[0] * u + side[0] * lx;
    const wz = origin[2] + dir[2] * u + side[2] * lx;
    const wy = origin[1] + ly;
    const fl = undergroundFloor(wx, wz);
    return [wx, Math.max(wy, fl), wz, wob];
  }

  /* The doorway sits where the corridor actually meets the wall, which since
     the branch is floor-anchored is *below* the cross-section's horizontal:
     solve for the cross-section angle whose height matches the corridor's
     axis. (Punching it at th0 flat left the door a window halfway up the
     wall with solid rock at ant height underneath it.) The angular half-width
     is unchanged — it already worked out to about one corridor diameter. */
  {
    const gR = profileR(z0), gV = vsqAt(gR);
    const aa = Math.asin(clamp((origin[1] + rise(0) - riseAt(z0)) / (gR * gV), -0.92, 0.92));
    const holeTh = th0 + (Math.cos(th0) >= 0 ? aa : -aa);
    WALL_HOLES.push({ th: holeTh, z: z0, rTh: Math.max(0.16, corridorR * 1.8 / profileR(z0)), rZ: corridorR * 1.7 });
  }
  if (doorLightCol) {
    const doorLx = origin[0] + dir[0] * 1.2, doorLz = origin[2] + dir[2] * 1.2;
    DOOR_LIGHTS.push({ p: [doorLx, undergroundFloor(doorLx, doorLz) + 2.1, doorLz], c: doorLightCol, name });
  }

  const M = new MeshBuilder();
  const SLu = 1.5, rows = [];
  for (let u = 0; u <= uMax + 0.0001; u += SLu) {
    const ring = [];
    for (let a = 0; a < angSegs; a++) {
      const th = 2 * Math.PI * a / angSegs;
      const p = pointAt(th, u, 0);
      const proud = clamp((p[3] - 0.84) / 0.34 + 0.45, 0, 1);
      ring.push(M.addVertex(p[0], p[1], p[2], wallColorFn(proud, p[0], p[1], p[2]).multiplyScalar(cavityMul).toArray()));
    }
    rows.push(ring);
  }
  for (let r1 = 0; r1 < rows.length - 1; r1++) {
    for (let a1 = 0; a1 < angSegs; a1++) {
      const a2 = (a1 + 1) % angSegs;
      M.addQuad(rows[r1][a1], rows[r1][a2], rows[r1 + 1][a2], rows[r1 + 1][a1]);
    }
  }
  const capX = origin[0] + dir[0] * uMax, capZ = origin[2] + dir[2] * uMax, capWY = origin[1] + rise(uMax) * 0.6;
  const capC = M.addVertex(capX, capWY, capZ, wallColorFn(0.2, capX, capWY, capZ).multiplyScalar(cavityMul).toArray());
  const lastRow = rows[rows.length - 1];
  for (let a4 = 0; a4 < angSegs; a4++) M.addTri(capC, lastRow[a4], lastRow[(a4 + 1) % angSegs]);

  const branch = { name, origin, dir, side, uMax, uEnd, profR, pointAt, doorFalloff: corridorR * 2.2 };
  ROOM_BRANCHES.push(branch);
  const roomWX = origin[0] + dir[0] * uEnd, roomWZ = origin[2] + dir[2] * uEnd;
  branch.center = [roomWX, undergroundFloor(roomWX, roomWZ), roomWZ];

  return { geometry: M.toBufferGeometry(), branch };
}

/* Builds the full underground group (main tube + three side rooms) and
   populates WALL_HOLES/ROOM_BRANCHES/DOOR_LIGHTS as a side effect, so the
   query functions above are meaningful once this has run. Call once. */
export function buildUnderground() {
  const group = new THREE.Group();
  group.name = 'underground';

  // Side rooms first (as in the old file) so their WALL_HOLES exist before
  // the main tube ring loop below decides which quads to skip.
  /* corridorR and roomR carry NEST_BORE; the z positions, corridor lengths and
     room lengths do not — see the note on the constant. The rooms grow more
     modestly than the corridors (x1.5 against x2.2) because they were already
     generous for a worker and the brief is explicit that the nest is not meant
     to be big; what was blocking was the doorway, not the room. */
  const granary = buildBranch('granary', Math.PI, -70, 3.3 * NEST_BORE, 9, 13 * 1.5, 10, 30, 4001, 1.0,
    (proud) => granaryColor(proud), [0.55, 0.40, 0.20]);
  const brood = buildBranch('brood', 0, -120, 4.2 * NEST_BORE, 8, 17 * 1.5, 13, 34, 5117, 1.0,
    (proud) => broodColor(proud), [0.68, 0.50, 0.25]);
  const midden = buildBranch('midden', 0, -40, 2.9 * NEST_BORE, 7, 10 * 1.5, 8, 26, 6229, 0.46,
    (proud) => middenColor(proud), [0.30, 0.44, 0.28]);

  group.add(new THREE.Mesh(granary.geometry, roomMaterial()));
  group.add(new THREE.Mesh(brood.geometry, roomMaterial()));
  group.add(new THREE.Mesh(midden.geometry, roomMaterial()));

  // main tube: gallery + queen's chamber, one continuous swept surface
  const M = new MeshBuilder();
  const ANG = 44, SL = 1.7;
  const slices = [];
  for (let z = TUNNEL_BACK; z <= 3.0001; z += SL) {
    const ring = [];
    for (let a = 0; a < ANG; a++) {
      const th = 2 * Math.PI * a / ANG;
      const p = wallPoint(th, z, 0);
      const flare = z > -14 ? 1 + Math.pow((z + 14) / 17, 2) * 0.9 : 1;
      ring.push([p[0] * flare, Math.max(p[1] * (flare * 0.5 + 0.5), undergroundFloor(p[0] * flare, z)), z, p[3]]);
    }
    slices.push(ring);
  }
  for (let si = 0; si < slices.length; si++) {
    const idxRow = [];
    for (let a2 = 0; a2 < ANG; a2++) {
      const v = slices[si][a2];
      const warmth = clamp(1 - Math.abs(v[2] - CH_Z) / (CH_R * 1.6), 0, 1);
      const proud = clamp((v[3] - 0.84) / 0.34 + 0.45, 0, 1);
      const damp2 = vnoise(v[0] * 0.13 + 3, v[2] * 0.13 + 8);
      const c = wallColor(proud, warmth * 0.45 + damp2 * 0.2);
      idxRow.push(M.addVertex(v[0], v[1], v[2], c.toArray()));
    }
    slices[si].idx = idxRow;
  }
  for (let s2 = 0; s2 < slices.length - 1; s2++) {
    for (let a3 = 0; a3 < ANG; a3++) {
      const n3 = (a3 + 1) % ANG;
      if (getWallHoleAt(2 * Math.PI * a3 / ANG, slices[s2][a3][2])) continue; // side-room mouths
      M.addQuad(slices[s2].idx[a3], slices[s2].idx[n3], slices[s2 + 1].idx[n3], slices[s2 + 1].idx[a3]);
    }
  }
  // back-cap: taper the last ring down to a point, closing the chamber
  {
    let prev = slices[0].idx;
    const steps = 4;
    for (let k = 1; k <= steps; k++) {
      const shrink = Math.cos(k / steps * Math.PI * 0.5);
      const back = TUNNEL_BACK - Math.sin(k / steps * Math.PI * 0.5) * 9;
      const row = [];
      for (let a4 = 0; a4 < ANG; a4++) {
        const th4 = 2 * Math.PI * a4 / ANG;
        const v0 = slices[0][a4];
        const lump = 0.86 + 0.28 * wallN(th4, back * 1.7, 2.3, 0.2);
        const cx4 = v0[0] * shrink * lump;
        const cy4 = riseAt(TUNNEL_BACK) + (v0[1] - riseAt(TUNNEL_BACK)) * shrink * lump;
        const cc4 = mixColor(C_WALL_B, C_WALL_A, 0.15 + lump * 0.4).multiplyScalar(0.35 + 0.3 * lump);
        row.push(M.addVertex(cx4, Math.max(cy4, undergroundFloor(cx4, back)), back, cc4.toArray()));
      }
      for (let a5 = 0; a5 < ANG; a5++) {
        const n5 = (a5 + 1) % ANG;
        M.addQuad(prev[a5], prev[n5], row[n5], row[a5]);
      }
      prev = row;
    }
    const capC = M.addVertex(0, riseAt(TUNNEL_BACK) * 0.6, TUNNEL_BACK - 10, C_WALL_B.clone().multiplyScalar(0.3).toArray());
    for (let a6 = 0; a6 < ANG; a6++) M.addTri(capC, prev[a6], prev[(a6 + 1) % ANG]);
  }

  const tunnelMesh = new THREE.Mesh(M.toBufferGeometry(), roomMaterial());
  tunnelMesh.name = 'tunnel';
  group.add(tunnelMesh);

  // Door lamps are returned as plain {p, c} descriptors, not THREE.PointLights:
  // they join the nest's local-light pool (world/lighting.js), which sends
  // only the nearest few to the shader. One THREE.PointLight per lamp would
  // instead make every lit surface shade against all of them.
  const doorLights = DOOR_LIGHTS.slice();
  // and one at the mouth, matching the old prototype's [0,5,3] hand-off lamp —
  // otherwise the tube reads as a black hole from the lawn.
  doorLights.push({ p: [0, 5, 3], c: [1.15, 1.20, 1.35], name: 'mouth' });  // cold: this one is daylight (charte §1d)

  return { group, doorLights, rooms: { granary: granary.branch, brood: brood.branch, midden: midden.branch } };
}

let _roomMaterial = null;
function roomMaterial() {
  if (!_roomMaterial) {
    // side: DoubleSide — the old prototype rendered with gl.disable(CULL_FACE)
    // globally, so this procedural tunnel/room geometry was never authored
    // with consistent outward winding. Front-face-only culling (Three.js's
    // default) makes the walls disappear when viewed from inside the tube.
    //
    // One material for the gallery and all three rooms: the per-room palette
    // lives entirely in the vertex colours, and the triplanar albedo only
    // multiplies its own variation on top of them (world/texturing.js), so
    // the granary/brood/midden identity survives being textured by the same
    // dirt — and they stay a single program with a single texture bound.
    _roomMaterial = texturedSurfaceMaterial({ map: dirtAlbedo(), strength: 0.62, side: THREE.DoubleSide });
  }
  return _roomMaterial;
}

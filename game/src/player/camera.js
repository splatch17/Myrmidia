import * as THREE from 'three';
import { clamp, damp, lerp } from '../core/noise.js';
import { profileR, groundY, getRoomBranches, QUEEN, TUNNEL_MOUTH, TUNNEL_BACK, TUNNEL_R } from '../world/index.js';
// wallPoint()/riseAt() are exported by world/underground.js but not re-exported
// by the world barrel; imported directly rather than editing world/* (Atta's
// files) this round. Asking for them on the barrel is in the round report.
import { wallPoint } from '../world/underground.js';

/* ==========================================================================
   Follow camera — ported from desiredCamera() in
   design/prototypes/sortie-fourmiliere.html (section 7), "close" (third-
   person, orbit-drag + wheel zoom) mode only. The old file's 'iso' mode and
   unoccludedFraction() are not ported (see the git history of this file and
   the agent notes for why).

   THE CONTAINMENT PROBLEM, and why this is the third rewrite:
   underground, an eye placed on a plain orbit boom is usually inside rock.
   Attempt 1 clamped it into an axis-aligned box around the ant — the box's
   corners are outside a round tunnel, so the eye still surfaced in the wall.
   Attempt 2 shortened the boom until the clamp barely moved the eye, judging
   "barely" on the *total* correction — but a low ceiling legitimately pushes
   the eye down by several units in every corridor in the game, so every boom
   length failed and the camera collapsed onto the ant's back. That is what
   the granary/brood screenshots showed: a 6-unit boom buried in the props.

   What this version does instead:
     - the cavity is modelled as its real elliptical cross-section, sampled
       from the *mesh's own* wall functions (wallPoint / branch.pointAt), not
       from a re-derived formula or a box;
     - a vertical correction is free. Being pushed under a low ceiling is
       what makes a tunnel read as a tunnel, and inside the ellipse it is
       always a legal position (the allowed height band narrows with lateral
       offset, so "top corner of the box", attempt 1's failure, cannot happen);
     - only the *horizontal* correction shortens the boom, so the camera pulls
       in when it would be pushed sideways into a wall, and nothing else.
   The upshot in a side room: the boom keeps its length and the eye slides
   down under the ceiling instead of collapsing to the ant's back.
   ========================================================================== */

// Side rooms (granary/brood/midden) are offset well off the main tube's own
// axis. Cached once populated (buildUnderground() runs before the player
// controller is created in main.js) — see getRoomBranches()'s own doc for
// the {name: {origin,dir,side,uMax,uEnd,profR,pointAt,doorFalloff}} shape.
let roomBranches = null;
function branches() {
  if (!roomBranches) roomBranches = getRoomBranches();
  return roomBranches;
}

/* Which side-room branch (x, z) sits inside, or null for "main tube" — same
   test containUnderground() uses to pick a branch before clamping into it. */
function branchAt(x, z) {
  const brs = branches();
  for (const name in brs) {
    const br = brs[name];
    const relX = x - br.origin[0], relZ = z - br.origin[2];
    const u = relX * br.dir[0] + relZ * br.dir[2];
    if (u <= -0.5 || u >= br.uMax + 1) continue;
    const lx = relX * br.side[0] + relZ * br.side[2];
    const r = br.profR(clamp(u, 0, br.uMax));
    if (Math.abs(lx) >= r * 0.82 + 2) continue;
    return br;
  }
  return null;
}

function branchU(br, x, z) {
  return (x - br.origin[0]) * br.dir[0] + (z - br.origin[2]) * br.dir[2];
}

/* buildBranch() takes corridorLen/roomLen and derives uEnd = corridorLen +
   roomLen, uMax = corridorLen + 2*roomLen; only uEnd/uMax are published, so
   the doorway-side corridor length is recovered from those two. */
function corridorLen(br) { return 2 * br.uEnd - br.uMax; }

/* Room radius at (x, z) — main tube's cross-section if not inside a branch,
   the branch's own (position-dependent, corridor-to-bulge) radius otherwise.
   Used to size the tunnel auto-tighten distance (#18's Math.max(13.5,
   room*1.5)), not to clamp position. */
function currentRoomRadius(x, z) {
  const br = branchAt(x, z);
  if (!br) return profileR(z);
  return br.profR(clamp(branchU(br, x, z), 0, br.uMax));
}

/* Ported from containUnderground()'s own door-widening loop
   (world/underground.js) — the main tube's horizontal half-widths at z,
   locally widened near each branch mouth so a punched-through doorway reads
   as a continuous opening instead of a wall the camera can get pinned
   against right at the threshold. Kept in sync by construction: same
   {origin, dir, doorFalloff} branch fields containUnderground() itself
   reads, not separately-tuned numbers. */
function mainTubeHalfWidth(z, lim) {
  let limPos = lim, limNeg = lim;
  const brs = branches();
  for (const name in brs) {
    const b2 = brs[name];
    const fall = clamp(1 - Math.abs(z - b2.origin[2]) / b2.doorFalloff, 0, 1);
    if (fall <= 0) continue;
    const reach = lerp(lim, Math.abs(b2.origin[0]) + 1.5, fall);
    if (b2.dir[0] > 0) { if (reach > limPos) limPos = reach; }
    else { if (reach > limNeg) limNeg = reach; }
  }
  return { limPos, limNeg };
}

/* ---- the cavity's real cross-section ------------------------------------
   Both the main tube and a side room are swept ellipses: wallPoint(th, z)
   and branch.pointAt(th, u) place a wall vertex at cross-section angle th
   (th=0/PI -> the two lateral extremes, at the section's axis height;
   th=PI/2 -> the crown). Sampling those two angles gives the ellipse the
   mesh actually has — wall wobble included — instead of a re-derived
   formula. `inset` (their own parameter) pulls the sample in from the
   surface, which is the eye's clearance margin. */
const EYE_INSET = 0.14;

function sectionOf(sample) {
  const pos = sample(0), neg = sample(Math.PI), top = sample(Math.PI * 0.5);
  return {
    aPos: Math.max(Math.abs(pos[0]), 1.5),
    aNeg: Math.max(Math.abs(neg[0]), 1.5),
    cy: pos[1],
    b: Math.max(top[1] - pos[1], 0.8),
  };
}

function tubeSection(z) {
  return sectionOf((th) => {
    const p = wallPoint(th, z, EYE_INSET);
    return [p[0], p[1]];
  });
}

function branchSection(br, u) {
  return sectionOf((th) => {
    const p = br.pointAt(th, u, EYE_INSET);
    // pointAt returns world space; measure laterally in the branch's own frame
    const lx = (p[0] - br.origin[0]) * br.side[0] + (p[2] - br.origin[2]) * br.side[2];
    return [lx, p[1]];
  });
}

/* Height band allowed at a given lateral offset inside a section. The band
   narrows toward the walls, which is the whole point: it is what stops the
   eye ending up in the "corner" a box clamp would have allowed. The 0.3
   floor on the shrink keeps a usable band inside a doorway, where the
   lateral clamp is deliberately wider than the section itself. */
function heightBand(sec, lx, floorY) {
  const a = lx >= 0 ? sec.aPos : sec.aNeg;
  const e = Math.min(Math.abs(lx) / a, 1);
  const hb = sec.b * Math.max(Math.sqrt(Math.max(0, 1 - e * e)), 0.3);
  const yMin = Math.max(sec.cy - hb, floorY + 1.6);
  return { yMin, yMax: Math.max(sec.cy + hb, yMin + 0.6) };
}

/* Clamps `eye` (mutated) into the cavity the ant is standing in, and returns
   how far it had to move it *horizontally* — the only component that means
   "the boom is pointing into rock" (see the header). `cav` comes from
   cavityAt(ant): always keyed on the ant, never on the eye's own tentative
   position, so branch selection stays stable frame to frame near a doorway. */
function clampEyeToCavity(eye, cav) {
  if (cav.br) {
    const br = cav.br;
    const relX = eye[0] - br.origin[0], relZ = eye[2] - br.origin[2];
    const u0 = relX * br.dir[0] + relZ * br.dir[2];
    const lx0 = relX * br.side[0] + relZ * br.side[2];
    // When the ant is inside the room bulge, the eye stays inside it too
    // (just past the door at worst). Letting the boom retreat up the narrow
    // corridor instead frames the ant through a keyhole with the room itself
    // off screen — technically legal, useless to play.
    const uMin = cav.uAnt > cav.corridorLen ? cav.corridorLen - 1 : -0.3;
    const u = clamp(u0, uMin, br.uMax - 0.3);
    const sec = branchSection(br, clamp(u, 0, br.uMax));
    const lx = clamp(lx0, -sec.aNeg, sec.aPos);
    eye[0] = br.origin[0] + br.dir[0] * u + br.side[0] * lx;
    eye[2] = br.origin[2] + br.dir[2] * u + br.side[2] * lx;
    const band = heightBand(sec, lx, groundY(eye[0], eye[2]));
    eye[1] = clamp(eye[1], band.yMin, band.yMax);
    return Math.hypot(u - u0, lx - lx0);
  }

  const z0 = eye[2], x0 = eye[0];
  const z = clamp(z0, TUNNEL_BACK + 5, TUNNEL_MOUTH + 3);
  // Near the mouth the tube flares open (buildUnderground()'s `flare`) and
  // the lawn takes over: no ellipse there, just stay above the ground.
  if (z > -14) {
    const lim = profileR(z) * 0.82 * (1 + Math.pow((z + 14) / 17, 2) * 0.9);
    const x = clamp(x0, -lim, lim);
    eye[0] = x; eye[2] = z;
    eye[1] = Math.max(eye[1], groundY(x, z) + 2.2);
    return Math.hypot(x - x0, z - z0);
  }
  const sec = tubeSection(z);
  const { limPos, limNeg } = mainTubeHalfWidth(z, Math.max(profileR(z) * 0.82 - 1.6, 3));
  const x = clamp(x0, -Math.max(limNeg, sec.aNeg), Math.max(limPos, sec.aPos));
  eye[0] = x; eye[2] = z;
  const band = heightBand(sec, x, groundY(x, z));
  eye[1] = clamp(eye[1], band.yMin, band.yMax);
  return Math.hypot(x - x0, z - z0);
}

/* The queen is a 25-unit-long body on a raised dais and the camera used to
   orbit straight through her. Pushed out radially rather than by shortening
   the boom: shortening pins the camera to the ant's back for the whole time
   the player is walking round her (the ant itself is only kept 11 units off
   her — movement.js's QUEEN_AVOID_R — so there is no room to back off), while
   a radial push simply slides the shot around her silhouette. Applied before
   the cavity clamp, which therefore still has the last word. */
const QUEEN_CAM_R = 10.5;
function pushEyeOffQueen(eye) {
  const baseY = groundY(QUEEN[0], QUEEN[2]);
  if (eye[1] > baseY + 8.5) return; // clear over her back
  const dx = eye[0] - QUEEN[0], dz = eye[2] - QUEEN[2];
  const d = Math.hypot(dx, dz);
  if (d >= QUEEN_CAM_R) return;
  if (d < 0.001) { eye[0] += QUEEN_CAM_R; return; }
  eye[0] = QUEEN[0] + (dx / d) * QUEEN_CAM_R;
  eye[2] = QUEEN[2] + (dz / d) * QUEEN_CAM_R;
}

/* Which cavity the ant is in — resolved once per desiredCamera() call and
   reused for every candidate boom length. */
function cavityAt(ant) {
  const br = branchAt(ant.x, ant.z);
  if (!br) return { br: null };
  const uAnt = branchU(br, ant.x, ant.z);
  return { br, uAnt, corridorLen: corridorLen(br) };
}

function containCameraEye(eye, ant, cav) {
  if (ant.z < TUNNEL_MOUTH - 2) {
    pushEyeOffQueen(eye);
    return clampEyeToCavity(eye, cav || cavityAt(ant));
  }
  eye[1] = Math.max(eye[1], groundY(eye[0], eye[2]) + 2.2);
  return 0;
}

/* Eye position for a given boom length, before containment. */
function eyeAt(head, camYaw, wantPitch, d) {
  return [
    head[0] - Math.sin(camYaw) * Math.cos(wantPitch) * d,
    head[1] - Math.sin(wantPitch) * d + 3.4,
    head[2] - Math.cos(camYaw) * Math.cos(wantPitch) * d,
  ];
}

/* The boom length actually used: the longest one whose eye does not have to
   be dragged sideways into place. Coarse stepping, a handful of cheap
   arithmetic evaluations a frame, no raycasts. FIT_TOL is small now that the
   vertical component is excluded (attempt 2 needed a metre of slack purely to
   absorb ceiling clamps, and still collapsed). */
const BOOM_STEPS = 8, MIN_D = 6, FIT_TOL = 0.9;

function fittedBoom(head, camYaw, wantPitch, dWant, ant, cav) {
  let bestD = dWant, bestErr = Infinity;
  for (let i = 0; i <= BOOM_STEPS; i++) {
    const d = lerp(dWant, MIN_D, i / BOOM_STEPS);
    const err = containCameraEye(eyeAt(head, camYaw, wantPitch, d), ant, cav);
    if (err <= FIT_TOL) return d;
    if (err < bestErr) { bestErr = err; bestD = d; }
  }
  return bestD;
}

export function desiredCamera(ant, camYaw, wantPitch, camDist) {
  // while climbing, ant.y is the real height on the blade/trunk — groundY
  // would look straight through it back down to the lawn
  const head = ant.climb
    ? [ant.x, ant.y + 2.0, ant.z]
    : [ant.x, groundY(ant.x, ant.z) + 2.6, ant.z];
  const inTunnel = ant.z < TUNNEL_MOUTH - 2;
  const cav = inTunnel ? cavityAt(ant) : null;
  const room = inTunnel ? currentRoomRadius(ant.x, ant.z) : TUNNEL_R;
  // resserrement automatique en tunnel étroit — constante inchangée (#18)
  const dWant = inTunnel ? Math.min(camDist, Math.max(13.5, room * 1.5)) : camDist;
  const d = inTunnel ? fittedBoom(head, camYaw, wantPitch, dWant, ant, cav) : dWant;
  const eye = eyeAt(head, camYaw, wantPitch, d);
  containCameraEye(eye, ant, cav);
  const aim = [head[0] + Math.sin(ant.yaw) * 3, head[1] + 0.4, head[2] + Math.cos(ant.yaw) * 3];
  return { eye, aim };
}

/**
 * Owns the smoothed camera state (camEye/camAim, damped toward
 * desiredCamera()'s output every frame — same rates as the old prototype)
 * and writes it into a THREE.PerspectiveCamera each update.
 */
export function createCameraRig(camera) {
  // Exposed (not just closed over) so player/movement.js can read last
  // frame's eye/aim to build camera-relative input, same ordering as the old
  // prototype's frame(): wish direction uses the *previous* frame's camEye/
  // camAim, camera itself re-targets afterwards, once the ant has moved.
  const rig = { eye: null, aim: null };

  function update(ant, camYaw, wantPitch, camDist, dt) {
    const want = desiredCamera(ant, camYaw, wantPitch, camDist);
    if (!rig.eye) { rig.eye = want.eye.slice(); rig.aim = want.aim.slice(); }
    const rate = 6.5;
    for (let c = 0; c < 3; c++) {
      rig.eye[c] = damp(rig.eye[c], want.eye[c], rate, dt);
      rig.aim[c] = damp(rig.aim[c], want.aim[c], rate * 1.4, dt);
    }
    // re-clamp *after* damping: a straight-line interpolation between two
    // legal eyes isn't itself guaranteed to be legal once rooms have real
    // (doorway-pinched, non-convex) shapes — this is what keeps the eye out
    // of geometry while turning, not just once movement settles.
    containCameraEye(rig.eye, ant);
    camera.position.set(rig.eye[0], rig.eye[1], rig.eye[2]);
    camera.lookAt(new THREE.Vector3(rig.aim[0], rig.aim[1], rig.aim[2]));
  }

  rig.update = update;
  return rig;
}

import * as THREE from 'three';
import { clamp, damp, lerp } from '../core/noise.js';
import { profileR, groundY, getRoomBranches, TUNNEL_MOUTH, TUNNEL_BACK, TUNNEL_R } from '../world/index.js';

/* ==========================================================================
   Follow camera — ported from desiredCamera() in
   design/prototypes/sortie-fourmiliere.html (section 7), "close" (third-
   person, orbit-drag + wheel zoom) mode only this round. The old file's
   'iso' mode (toggled with C) and unoccludedFraction() (a manual raycast
   against GRASS[] instances, pre-#20) are NOT ported: Atta's occlusion fix
   this round is shader-side (uOccNear/uOccFar, distance-based, no camera-side
   involvement needed — see the agent notes), and iso mode wasn't part of
   this round's brief. Both are easy to add back onto this same desiredCamera
   shape later if wanted.

   Eye containment rewrite (this session, prompted by #24's DoubleSide fix —
   see the file-bottom section for why): the eye is now clamped into the
   *actual branch/tube cavity* the ant is standing in (same {origin, dir,
   side, uMax, profR} shape world/underground.js's containUnderground() and
   getRoomBranches() use for the ant itself), not a world-axis-aligned box
   around the ant. See clampEyeToCavity() below.
   ========================================================================== */

// Side rooms (granary/brood/midden) are offset well off the main tube's own
// axis. Cached once populated (buildUnderground() runs before the player
// controller is created in main.js) — see getRoomBranches()'s own doc for
// the {name: {origin,dir,side,uMax,profR,doorFalloff}} shape.
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

/* Room radius at (x, z) — main tube's cross-section if not inside a branch,
   the branch's own (position-dependent, corridor-to-bulge) radius otherwise.
   Used to size the tunnel auto-tighten distance (#18's Math.max(13.5,
   room*1.5)), not to clamp position — see clampEyeToCavity() for that. */
function currentRoomRadius(x, z) {
  const br = branchAt(x, z);
  if (!br) return profileR(z);
  const relX = x - br.origin[0], relZ = z - br.origin[2];
  const u = relX * br.dir[0] + relZ * br.dir[2];
  return br.profR(clamp(u, 0, br.uMax));
}

/* Ported from containUnderground()'s own door-widening loop
   (world/underground.js) — the main tube's horizontal half-widths at z,
   locally widened near each branch mouth so a punched-through doorway reads
   as a continuous opening instead of a wall the camera can get pinned
   against right at the threshold. Kept in sync by construction: same
   {origin, dir, doorFalloff} branch fields containUnderground() itself
   reads, not separately-tuned numbers. */
function mainTubeHalfWidth(z) {
  const lim = Math.max(profileR(z) * 0.82 - 1.6, 3);
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

/* Vertical extent (floor/ceiling) at a given cross-section radius r, mirrors
   world/underground.js's private vsqAt/riseAt (main tube) and buildBranch()'s
   local vsq/rise closures (side rooms) — those aren't exported (see the
   header note about staying out of world/*), so the formulas are duplicated
   here rather than reached into. refR is the *reference* radius the vsq
   exponent is measured against (TUNNEL_R for the main tube, the branch's own
   corridor radius for a room — both "the narrowest this cavity gets"). The
   0.92 fudge on the crown leaves a small margin below the idealised ceiling,
   since the actual mesh has up to ~20% wobble noise on top of this formula
   (wallN() in underground.js) that could locally dip a bit lower. */
function verticalExtent(floorY, r, refR) {
  const vsq = 0.86 * Math.pow(refR / Math.max(r, 0.001), 0.35);
  const rise = 1.15 + r * vsq * 0.61; // splits the difference between the main tube's (1.2, 0.62) and a branch's (1.1, 0.6) — both call sites are already an approximation, not the exact per-vertex mesh
  return { floorClamp: floorY + 1.6, ceilClamp: floorY + rise + r * vsq * 0.92 };
}

function clampToBranch(eye, br) {
  const relX = eye[0] - br.origin[0], relZ = eye[2] - br.origin[2];
  let u = relX * br.dir[0] + relZ * br.dir[2];
  let lx = relX * br.side[0] + relZ * br.side[2];
  // stay a little inside both the doorway and the back cap, rather than
  // exactly at the boundary where the profile radius itself is at its most
  // uncertain (mesh noise, cap taper)
  u = clamp(u, -0.3, br.uMax - 0.3);
  const r = Math.max(br.profR(u) * 0.8, 3);
  lx = clamp(lx, -r, r);
  eye[0] = br.origin[0] + br.dir[0] * u + br.side[0] * lx;
  eye[2] = br.origin[2] + br.dir[2] * u + br.side[2] * lx;
  const corridorR = Math.max(br.profR(-0.3), 0.5); // this branch's own narrow-corridor radius, stands in for buildBranch()'s corridorR parameter
  const floorY = groundY(eye[0], eye[2]);
  const { floorClamp, ceilClamp } = verticalExtent(floorY, r, corridorR);
  eye[1] = clamp(eye[1], floorClamp, ceilClamp);
}

function clampToMainTube(eye) {
  eye[2] = clamp(eye[2], TUNNEL_BACK + 5, TUNNEL_MOUTH + 40); // upper bound is generous — z beyond this is the open lawn, handled by the non-tunnel branch instead
  const { limPos, limNeg } = mainTubeHalfWidth(eye[2]);
  eye[0] = clamp(eye[0], -limNeg, limPos);
  const r = Math.max(profileR(eye[2]) * 0.8, 3);
  const floorY = groundY(eye[0], eye[2]);
  const { floorClamp, ceilClamp } = verticalExtent(floorY, r, TUNNEL_R);
  eye[1] = clamp(eye[1], floorClamp, ceilClamp);
}

/* The actual containment fix: clamps `eye` (mutated in place) into whichever
   cavity (ref x, ref z) — always the ant's own position, not the eye's own
   tentative one — sits inside. Using the ant as the reference keeps branch
   selection stable frame to frame even when a dragged/damped eye briefly
   tests as "outside every branch" near a doorway threshold, and matches
   containUnderground()'s own contract (it clamps by branch membership of the
   point being contained, and the ant is what actually has to be walkable).
   Called both on desiredCamera()'s target (below) and on the *damped* rig
   eye every frame (createCameraRig.update()) — a straight-line interpolation
   between two legal points isn't guaranteed to stay legal itself once rooms
   have real (non-convex, doorway-pinched) shapes, so the damped position
   needs its own re-clamp, not just the target it's chasing. */
function clampEyeToCavity(eye, antX, antZ) {
  const br = branchAt(antX, antZ);
  if (br) clampToBranch(eye, br);
  else clampToMainTube(eye);
  return eye;
}

function containCameraEye(eye, ant) {
  const inTunnel = ant.z < TUNNEL_MOUTH - 2;
  if (inTunnel) clampEyeToCavity(eye, ant.x, ant.z);
  else eye[1] = Math.max(eye[1], groundY(eye[0], eye[2]) + 2.2);
  return eye;
}

/* Eye position for a given boom length, before containment. */
function eyeAt(head, camYaw, wantPitch, d) {
  return [
    head[0] - Math.sin(camYaw) * Math.cos(wantPitch) * d,
    head[1] - Math.sin(wantPitch) * d + 3.4,
    head[2] - Math.cos(camYaw) * Math.cos(wantPitch) * d,
  ];
}

/* How far containment had to move the eye to make it legal, squared. Zero
   means the boom fits in the cavity as-is; a large value means the eye is
   being shoved into rock, which on screen is a solid brown gradient with the
   ant nowhere in it. */
function clampErrorSq(head, camYaw, wantPitch, d, ant) {
  const want = eyeAt(head, camYaw, wantPitch, d);
  const got = containCameraEye(want.slice(), ant);
  const dx = got[0] - want[0], dy = got[1] - want[1], dz = got[2] - want[2];
  return dx * dx + dy * dy + dz * dz;
}

/* The boom length actually used. #18's Math.max(13.5, room*1.5) tightens the
   camera by the cavity radius *at the ant*, which is right in the main tube
   but not in the side rooms: a granary corridor of radius ~3.3 still gets a
   13.5-unit boom whose far end is buried in rock, and containment then
   slides the eye flat onto the wall it is buried in. Atta's #24 render pass
   hit exactly this — two of its three walked-room screenshots were solid
   brown — and it is the same failure the user reported as "je ne vois que
   les parois", from a different cause.

   Rather than tune a second radius constant, pull the boom in until it
   actually fits: the longest d whose contained eye is within TOL of where it
   wanted to be, or — when nothing in the range fits, which happens in the
   narrowest corridors — whichever d needed the least correction, since that
   is the least-buried shot available. Same intent as the old prototype's
   unoccludedFraction() pull-in (design/prototypes/sortie-fourmiliere.html
   section 7), but tested against the cavity itself rather than by raycasting
   the grass, so it covers corridors and doorways too, which the old raycast
   never had to handle. Coarse stepping keeps this to a handful of cheap
   arithmetic evaluations a frame, no raycasts.

   TOL is deliberately loose (a metre-ish): a low ceiling pushing the eye
   down is normal and reads fine — it is what makes a tunnel feel like a
   tunnel — so only a correction big enough to mean "in the wall" should
   shorten the boom. A tight tolerance reports "doesn't fit" at every length
   in every corridor and collapses the camera onto the ant's back; verified
   on screen, both ways. */
const BOOM_STEPS = 8, MIN_D = 6, FIT_TOL_SQ = 1.1 * 1.1;

function fittedBoom(head, camYaw, wantPitch, dWant, ant) {
  let bestD = dWant, bestErr = Infinity;
  for (let i = 0; i <= BOOM_STEPS; i++) {
    const d = lerp(dWant, MIN_D, i / BOOM_STEPS);
    const err = clampErrorSq(head, camYaw, wantPitch, d, ant);
    if (err <= FIT_TOL_SQ) return d;
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
  const room = inTunnel ? currentRoomRadius(ant.x, ant.z) : TUNNEL_R;
  // resserrement automatique en tunnel étroit — constante inchangée (#18)
  const dWant = inTunnel ? Math.min(camDist, Math.max(13.5, room * 1.5)) : camDist;
  const d = inTunnel ? fittedBoom(head, camYaw, wantPitch, dWant, ant) : dWant;
  const eye = eyeAt(head, camYaw, wantPitch, d);
  containCameraEye(eye, ant);
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
    // re-clamp *after* damping: the damped eye can cut the corner of a
    // doorway-pinched room even when both endpoints of the interpolation are
    // themselves legal (see clampEyeToCavity's doc comment) — this is what
    // actually keeps the eye out of geometry while turning/moving, not just
    // once movement settles.
    containCameraEye(rig.eye, ant);
    camera.position.set(rig.eye[0], rig.eye[1], rig.eye[2]);
    camera.lookAt(new THREE.Vector3(rig.aim[0], rig.aim[1], rig.aim[2]));
  }

  rig.update = update;
  return rig;
}

import * as THREE from 'three';
import { clamp, damp } from '../core/noise.js';
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
   ========================================================================== */

// Side rooms (granary/brood/midden) are offset well off the main tube's own
// axis, and the old prototype's "room" size (below) always read
// profileR(z) — the *main tube's* cross-section at that world Z, regardless
// of whether the ant/camera are actually sitting inside a much wider side
// room at that Z. Found live while verifying #21 with Playwright: the camera
// clamps this tight even once the ant has genuinely walked into e.g. midden
// (roomR up to 13-17 vs. the main tube's TUNNEL_R=7.2), crowding the shot
// right up against geometry and making an entered room look like a dead end
// on camera even though the ant is standing in it. Same containUnderground-
// style branch test (see world/underground.js), just for sizing, not clamping.
let roomBranches = null;
function currentRoomRadius(x, z) {
  if (!roomBranches) roomBranches = getRoomBranches();
  for (const name in roomBranches) {
    const br = roomBranches[name];
    const relX = x - br.origin[0], relZ = z - br.origin[2];
    const u = relX * br.dir[0] + relZ * br.dir[2];
    if (u <= -0.5 || u >= br.uMax + 1) continue;
    const lx = relX * br.side[0] + relZ * br.side[2];
    const r = br.profR(clamp(u, 0, br.uMax));
    if (Math.abs(lx) >= r * 0.82 + 2) continue;
    return r;
  }
  return profileR(z);
}

export function desiredCamera(ant, camYaw, wantPitch, camDist) {
  const head = [ant.x, groundY(ant.x, ant.z) + 2.6, ant.z];
  const inTunnel = ant.z < TUNNEL_MOUTH - 2;
  const room = inTunnel ? currentRoomRadius(ant.x, ant.z) : TUNNEL_R;
  // resserrement automatique en tunnel étroit — constante inchangée (#18)
  const d = inTunnel ? Math.min(camDist, Math.max(13.5, room * 1.5)) : camDist;
  const eye = [
    head[0] - Math.sin(camYaw) * Math.cos(wantPitch) * d,
    head[1] - Math.sin(wantPitch) * d + 3.4,
    head[2] - Math.cos(camYaw) * Math.cos(wantPitch) * d,
  ];
  if (inTunnel) {
    eye[2] = Math.max(eye[2], TUNNEL_BACK + 5);
    // the room at the camera, not at the ant — but never smaller than the
    // room the ant is actually standing in: pulling the eye back along
    // camYaw can walk it just outside a side room's own (x,z) footprint
    // even though the ant is well inside it, which under this branch-aware
    // sizing (unlike the old main-tube-only profileR(z)) can under-count and
    // clamp the eye down to a claustrophobic sliver — found live while
    // verifying #21 (the midden screenshot came back solid black).
    const here = Math.max(room, currentRoomRadius(eye[0], eye[2]));
    eye[0] = clamp(eye[0], ant.x - here * 0.72, ant.x + here * 0.72);
    eye[1] = clamp(eye[1], groundY(eye[0], eye[2]) + 1.6, 1.5 + here * 1.0);
  } else {
    eye[1] = Math.max(eye[1], groundY(eye[0], eye[2]) + 2.2);
  }
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
    camera.position.set(rig.eye[0], rig.eye[1], rig.eye[2]);
    camera.lookAt(new THREE.Vector3(rig.aim[0], rig.aim[1], rig.aim[2]));
  }

  rig.update = update;
  return rig;
}

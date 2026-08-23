import { clamp, damp } from '../core/noise.js';
import { nrm3, cross3 } from '../core/vecmath.js';
import { dampAngle } from './mathUtil.js';
import { containUnderground, groundY, QUEEN, TUNNEL_MOUTH, LAWN_BOUNDS } from '../world/index.js';

/* ==========================================================================
   Ground movement + underground/lawn containment — ported from the tail of
   frame() in design/prototypes/sortie-fourmiliere.html (section "keep the
   ant inside the playable volume"). This is where #21 (side rooms
   unreachable) actually lives: containUnderground() is Atta's, already
   fixed and unit-verified against straight-line and along-the-corridor
   approaches to all three rooms (see the session notes in
   .claude/agents/cataglyphis-gameplay.md for the diagnostic script and
   numbers) — this module's job is to *consume* it the same way the old
   prototype did and not introduce a regression of its own:
     - horizontal clamp uses containUnderground(x, z) exclusively, never
       getUndergroundRadius()/getWallHoleAt() (those are cross-section-local,
       theta-based, and easy to misapply to a walking ant whose feet sit near
       the *bottom* of the tube's cross-section rather than its centre — see
       the session notes for why that reads as "rooms are blocked" if used
       for horizontal collision instead).
     - vertical position always comes from groundY(x, z) *after* the
       horizontal clamp, so the ant never desyncs from the floor mesh
       (undergroundFloor() is the single source of truth for both).
     - queen avoidance is applied after the room/tunnel clamp, exactly like
       the old file, so it can't fight containUnderground for the same frame.
   Decor collision (rocks/mushroom caps/grass) is intentionally NOT ported
   this round — world/index.js doesn't expose ROCKS/MUSHROOMS yet, and outdoor
   grass is instanced (world/grass.js) without per-blade collision data;
   out of scope for #20/#21.
   ========================================================================== */

const QUEEN_AVOID_R = 11; // matches the old prototype's "you walk around the queen, not through her"

export function computeWishDir(intent, camEye, camAim) {
  const camFwd = nrm3([camAim[0] - camEye[0], 0, camAim[2] - camEye[2]]);
  const camRight = cross3(camFwd, [0, 1, 0]); // see issue #15 — this is the correct sign, not [camFwd[2],0,-camFwd[0]]
  return {
    wishX: camFwd[0] * intent.iy + camRight[0] * intent.ix,
    wishZ: camFwd[2] * intent.iy + camRight[2] * intent.ix,
  };
}

export function stepAnt(ant, wish, intent, dt) {
  const maxSpeed = 15 * intent.sprint;

  if (intent.mag > 0.02) {
    ant.yaw = dampAngle(ant.yaw, Math.atan2(wish.wishX, wish.wishZ), 9, dt);
    ant.speed = damp(ant.speed, maxSpeed * intent.mag, 7, dt);
  } else {
    ant.speed = damp(ant.speed, 0, 9, dt);
  }

  const step = ant.speed * dt;
  ant.x += Math.sin(ant.yaw) * step;
  ant.z += Math.cos(ant.yaw) * step;
  ant.travel += step;

  if (ant.z < TUNNEL_MOUTH) {
    const [cx, cz] = containUnderground(ant.x, ant.z);
    ant.x = cx; ant.z = cz;

    const qdx = ant.x - QUEEN[0], qdz = ant.z - QUEEN[2];
    const qd = Math.hypot(qdx, qdz);
    if (qd < QUEEN_AVOID_R && qd > 0.001) { // you walk around the queen, not through her
      const nx = qdx / qd, nz = qdz / qd;
      ant.x = QUEEN[0] + nx * QUEEN_AVOID_R;
      ant.z = QUEEN[2] + nz * QUEEN_AVOID_R;
      // slide along her, so walking straight at her never pins you
      const tx = -nz, tz = nx;
      const along = Math.sin(ant.yaw) * tx + Math.cos(ant.yaw) * tz;
      const slide = step * 0.75 * (along >= 0 ? 1 : -1);
      ant.x += tx * slide; ant.z += tz * slide;
    }
  } else {
    ant.x = clamp(ant.x, LAWN_BOUNDS.x0 + 15, LAWN_BOUNDS.x1 - 15);
    ant.z = Math.min(ant.z, LAWN_BOUNDS.z1 - 12);
  }

  ant.y = groundY(ant.x, ant.z);
  ant.bob = Math.sin(ant.travel * (Math.PI * 2 / 7.0) * 2) * 0.13 * clamp(ant.speed / 8, 0, 1);
}

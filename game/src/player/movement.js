import { clamp, damp } from '../core/noise.js';
import { nrm3, cross3 } from '../core/vecmath.js';
import { dampAngle } from './mathUtil.js';
import { containUnderground, containSurface, groundY, QUEEN, TUNNEL_MOUTH, LAWN_BOUNDS } from '../world/index.js';
import { resolveDecorCollision } from './decorCollision.js';
import { PLAYER_AVATAR, collideRadius, strideOf } from './avatar.js';

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
   Decor collision (rocks/mushroom caps/thick grass/the tree trunk) is
   resolved *before* the containment clamp (#4/#16, see decorCollision.js),
   exactly as the old prototype ordered it: containUnderground() then has the
   last word, so being pushed off a mushroom can never shove the ant through
   a wall.
   ========================================================================== */

// The old prototype's "you walk around the queen, not through her", plus the
// player's own half-width: an avatar 2.2x a worker (#32) would otherwise have
// its front half inside her dais at the same centre distance.
const QUEEN_AVOID_BASE = 11;

export function computeWishDir(intent, camEye, camAim) {
  const camFwd = nrm3([camAim[0] - camEye[0], 0, camAim[2] - camEye[2]]);
  const camRight = cross3(camFwd, [0, 1, 0]); // see issue #15 — this is the correct sign, not [camFwd[2],0,-camFwd[0]]
  return {
    wishX: camFwd[0] * intent.iy + camRight[0] * intent.ix,
    wishZ: camFwd[2] * intent.iy + camRight[2] * intent.ix,
  };
}

export function stepAnt(ant, wish, intent, dt) {
  const p = ant.profile || PLAYER_AVATAR;
  const s = ant.scale || 1;
  const bodyR = collideRadius(p);
  const maxSpeed = p.maxSpeed * (intent.sprint ? p.sprint : 1);

  if (intent.mag > 0.02) {
    ant.yaw = dampAngle(ant.yaw, Math.atan2(wish.wishX, wish.wishZ), p.turnRate, dt);
    ant.speed = damp(ant.speed, maxSpeed * intent.mag, 7, dt);
  } else {
    ant.speed = damp(ant.speed, 0, 9, dt);
  }

  const step = ant.speed * dt;
  ant.x += Math.sin(ant.yaw) * step;
  ant.z += Math.cos(ant.yaw) * step;
  ant.travel += step;

  resolveDecorCollision(ant, step);

  if (ant.z < TUNNEL_MOUTH) {
    const [cx, cz] = containUnderground(ant.x, ant.z);
    ant.x = cx; ant.z = cz;

    const avoidR = QUEEN_AVOID_BASE + bodyR;
    const qdx = ant.x - QUEEN[0], qdz = ant.z - QUEEN[2];
    const qd = Math.hypot(qdx, qdz);
    if (qd < avoidR && qd > 0.001) { // you walk around the queen, not through her
      const nx = qdx / qd, nz = qdz / qd;
      ant.x = QUEEN[0] + nx * avoidR;
      ant.z = QUEEN[2] + nz * avoidR;
      // slide along her, so walking straight at her never pins you
      const tx = -nz, tz = nx;
      const along = Math.sin(ant.yaw) * tx + Math.cos(ant.yaw) * tz;
      const slide = step * 0.75 * (along >= 0 ? 1 : -1);
      ant.x += tx * slide; ant.z += tz * slide;
    }
  } else {
    /* The west edge of the map is the river's meander, not a box (PROGRESS.md
       defect #4). containSurface() is the world's own answer to "where may
       she stand" — it follows riverEdgeAt(z) and clamps into LAWN_BOUNDS —
       and the box clamp this replaces left as little as ~3 units of dry
       ground at the worst of the meander, which for a body 3.3 units wide is
       standing in the water.

       Asked twice on purpose: once for her centre, once for her western
       flank, so what stops at the waterline is her body rather than her
       origin. That derives the margin from the world's own line instead of
       re-deriving riverEdgeAt() here, which would be the same duplication in
       a different place. */
    const zq = clamp(ant.z, LAWN_BOUNDS.z0, LAWN_BOUNDS.z1);
    ant.x = Math.max(containSurface(ant.x, zq)[0], containSurface(ant.x - bodyR, zq)[0] + bodyR);
    // north and east have no water: the map's own box is the whole answer,
    // held off by a body's width so she never stands on the meshed rim
    ant.x = Math.min(ant.x, LAWN_BOUNDS.x1 - bodyR * 2);
    ant.z = Math.min(ant.z, LAWN_BOUNDS.z1 - bodyR * 2);
  }

  ant.y = groundY(ant.x, ant.z);
  ant.bob = Math.sin(ant.travel * (Math.PI * 2 / strideOf(p)) * 2) * 0.13 * s * clamp(ant.speed / (8 * s), 0, 1);
}

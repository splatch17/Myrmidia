import { clamp, damp } from '../core/noise.js';
import { nrm3, cross3 } from '../core/vecmath.js';
import { dampAngle } from './mathUtil.js';
import { containUnderground, containSurface, groundY, QUEEN, TUNNEL_MOUTH, LAWN_BOUNDS } from '../world/index.js';
import { resolveDecorCollision } from './decorCollision.js';
import { nestFootprint, boundaryBetween, boundaryNormal } from './nest.js';
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

/* One number, used for both edges of the nest, and it is the same idea both
   ways: a change of floor height that a walking ant could not have made in one
   step is not a step, it is a fall or a wall. Everything about where the nest
   may be entered and left falls out of that — no door position is written
   down anywhere in player/**, which is what keeps this working whatever shape
   world/excavation.js decides to dig (#40/#41). */
const NEST_LEDGE = 2.0;

/* How far outside the footprint the meadow is sampled when asking whether an
   edge is a doorway. It has to be outside, and by a real distance: since #41,
   groundY() answers the *nest floor* everywhere the footprint contains, so a
   sample taken on the boundary itself compares the floor with itself, reads
   zero, and calls every wall a doorway. That is the project's recurring bug —
   a number calibrated against one definition and left behind when the
   definition changed — in its predicate form. One body width is enough to
   clear the boundary and short enough to still be the ground she would step
   onto. */
const NEST_DOOR_PROBE = 3.3;

/**
 * Keep her inside the dug nest, let her out only where it opens, and stop her
 * walking in through the roof. Returns true if she is (still) underground.
 *
 * The roof case is the one that has to be handled here rather than by the
 * world: over the chamber and the gallery, groundY() answers the floor
 * *under* the soil (world/excavation.js states this outright — a height field
 * has one height per point and roofed ground is the case it cannot express).
 * Walking onto that patch of meadow would drop her the full depth of the nest
 * in a single frame. The excavation publishes headroom() so a caller can tell
 * that patch from the open cut, and this is that caller.
 *
 * Built on contains()/floorY() only — see nest.js: no second copy of the
 * nest's geometry lives in player/**, so this behaves the same against the
 * world's own footprint and against the stand-in nest.js keeps for the case
 * where the world half is not in yet.
 */
function containNest(ant, fromX, fromZ) {
  const fp = nestFootprint();
  if (!fp) return false;
  const wasIn = fp.contains(fromX, fromZ);
  const isIn = fp.contains(ant.x, ant.z);

  if (!wasIn) {
    if (!isIn) return false;
    // coming in: only where the floor she would land on is the floor she is
    // already standing on, i.e. the open threshold of the cut and nowhere else
    if (groundY(fromX, fromZ) - fp.floorY(ant.x, ant.z) > NEST_LEDGE) {
      ant.x = fromX; ant.z = fromZ;
      return false;
    }
    return true;
  }
  if (isIn) return true;

  // going out: the edge is a wall unless the excavation reaches daylight there
  const [bx, bz] = boundaryBetween(fp, fromX, fromZ, ant.x, ant.z);
  const toX = ant.x, toZ = ant.z;
  ant.x = bx; ant.z = bz; // walled in by default; undone below if it is a door

  /* Soil overhead is the end of the argument: headroom() is finite exactly
     where the excavation is roofed and Infinity where it is an open cut, and
     no roofed edge is ever a way out however the ground outside happens to
     lie. Asked first because it is the cheap half and the one that cannot be
     fooled by a meadow that dips to the chamber's depth. */
  if (Number.isFinite(fp.headroom(bx, bz))) return true;

  /* Open cut, so the question is real: is the ground on the other side of
     this edge the floor she is standing on, or the lip of the trench above
     her? Sampled a body width past the boundary, outside the footprint, for
     the reason NEST_DOOR_PROBE is written down. */
  let ux = toX - fromX, uz = toZ - fromZ;
  const ul = Math.hypot(ux, uz);
  if (ul < 1e-6) return true;
  ux /= ul; uz /= ul;
  const ox = bx + ux * NEST_DOOR_PROBE, oz = bz + uz * NEST_DOOR_PROBE;
  if (fp.contains(ox, oz)) return true; // the edge doubles back: still inside
  if (Math.abs(groundY(ox, oz) - fp.floorY(bx, bz)) > NEST_LEDGE) return true;

  ant.x = toX; ant.z = toZ; // a door: she keeps the step she took
  return false;
}

/**
 * Slide along a nest wall instead of stopping dead against it (#49).
 *
 * Every other surface in the game slides — containSurface() follows the
 * river's meander, resolveDecorCollision() pushes off a rock and lets the walk
 * continue. The nest was the one place that did not: containNest() put her
 * back on the boundary point and that was the end of the step, so walking up a
 * curving trench while leaning on its outer wall made no progress at all.
 * That is the porter's "la remontée bug encore", and it is a movement defect
 * rather than a containment one — the containment was right, it just had
 * nothing to say about what to do next.
 *
 * The tangent is taken from a normal estimated off contains() alone, so this
 * behaves the same whatever shape the world digs.
 */
function slideAlongNestWall(ant, fp, fromX, fromZ, toX, toZ) {
  const n = boundaryNormal(fp, ant.x, ant.z);
  if (!n) return;
  const mx = toX - fromX, mz = toZ - fromZ;
  const into = mx * n[0] + mz * n[1];
  if (into <= 0) return;                       // not pushing into the wall
  // what is left of the step once the wall has taken its share
  const sx = mx - n[0] * into, sz = mz - n[1] * into;
  if (Math.hypot(sx, sz) < 1e-4) return;       // dead into the wall: no tangent
  const nx = ant.x + sx, nz = ant.z + sz;
  if (fp.contains(nx, nz)) { ant.x = nx; ant.z = nz; }
}

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
  const fromX = ant.x, fromZ = ant.z;
  ant.x += Math.sin(ant.yaw) * step;
  ant.z += Math.cos(ant.yaw) * step;
  ant.travel += step;

  resolveDecorCollision(ant, step);

  /* Underground in her own nest, and therefore under none of the rules below:
     the lawn's clamp would drag her sideways for a river she is twenty units
     beneath, and the pre-built gallery's clamp answers for a tunnel that is
     not even in the scene (world/index.js SHOW_PREBUILT_NEST). The floor
     comes from the footprint rather than from groundY() so that the walk is
     right today *and* after #41, when the two are the same number by
     construction (api-monde-gameplay.md §6). */
  if (containNest(ant, fromX, fromZ)) {
    const fp = nestFootprint();
    /* If containNest pushed her back onto the boundary, the step is not over —
       what it took away was the component into the wall, and the rest is a
       walk along it. */
    if (ant.x !== fromX + Math.sin(ant.yaw) * step || ant.z !== fromZ + Math.cos(ant.yaw) * step) {
      slideAlongNestWall(ant, fp, fromX, fromZ,
        fromX + Math.sin(ant.yaw) * step, fromZ + Math.cos(ant.yaw) * step);
    }
    /* floorY is an *override* of the terrain, and legs.js applies it to every
       foot at once (floorUnder ignores x/z when it is set) — which is right
       for a flat chamber floor and wrong on a ramp. So it is only used when
       the world's own groundY() does not know about the nest yet, i.e. for
       nest.js's stand-in. With #41 in, this stays null and the six feet each
       sample the real floor they are on. */
    ant.floorY = fp.approx ? fp.floorY(ant.x, ant.z) : null;
    ant.y = fp.floorY(ant.x, ant.z);
    ant.bob = Math.sin(ant.travel * (Math.PI * 2 / strideOf(p)) * 2) * 0.13 * s * clamp(ant.speed / (8 * s), 0, 1);
    return;
  }
  ant.floorY = null;

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

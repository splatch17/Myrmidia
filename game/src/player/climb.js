import { clamp, damp } from '../core/noise.js';
import { add3, scl3 } from '../core/vecmath.js';
import { groundY, TREE, treeTrunkRadius, treeWalkBranch, getGrassFootprints, worldIndex } from '../world/index.js';
import { bladeCurvePoint, bladeClimbBasis } from '../world/blade.js';
import { PLAYER_AVATAR } from './avatar.js';

/* ==========================================================================
   Stem/tree climbing (README "Suite" — grimpe des tiges, #5 on the old
   prototype), ported from design/prototypes/sortie-fourmiliere.html's
   climbing section (nearestClimbable/enterClimb/exitClimb/frame()'s
   ant.climb branch). legs.js's antBasis()/antMatrix()/updateLegs() consume
   ant.climb the same way the old file's did; this module only owns finding
   a target, entering/exiting, and advancing along one while held.

   THE BLADES ARE THE WORLD'S, NOT A COPY (#35). This module used to call
   createGrassField({}) a second time and keep its footprints, relying on that
   call being deterministic to stay aligned with the field world/index.js
   actually rendered — a silent coupling: changing the seed or the count of
   ONE of the two calls would have desynchronised them with no error. Now
   world/index.js publishes the very array it built (getGrassFootprints()),
   which is also what the shared spatial index's 'grass' ids point into, so
   blade i here, blade i in the index and blade i on screen cannot diverge.
   It is a live getter and not a captured array because the world fills it in
   createWorld(), after this module is imported — every read below happens
   inside a frame, long after.
   ========================================================================== */

/** The blades the world actually rendered — indexed exactly like the spatial
 *  index's 'grass' ids. Empty until createWorld() has run. */
export const grassBlades = getGrassFootprints;

// Deliberately NOT scaled with the avatar: this is about the blade's own
// stiffness (can it hold a climber at all), not about who is climbing it —
// and decorCollision.js uses the same threshold to decide which stems are
// solid, so scaling it would silently delete colliders.
export const CLIMB_MIN_H = 42;
const CLIMB_RADIUS = 4.5;   // how close to a blade's base an ant must be to grab it — reach, so it scales with the body
const CLIMB_SPEED = 20;     // arc-length units per second, worker reference; the avatar profile overrides it
const CLIMB_MAX_T = 0.93;   // stop short of the tip, where the blade gets too thin to stand on

// reach/speed for whoever is climbing (avatar.js): a queen grabs a stem from
// further out and hauls herself up it, she does not scurry
function reach(ant) { return CLIMB_RADIUS * (ant.scale || 1); }
function climbSpeed(ant) {
  const p = ant.profile || PLAYER_AVATAR;
  return (p.climbSpeed !== undefined ? p.climbSpeed : CLIMB_SPEED) * (ant.scale || 1);
}

// measured from the bark, not the trunk's centre (see treeTrunkRadius) —
// a centre-relative radius like CLIMB_RADIUS would have the ant brushing
// the bark long before it's "in range".
const TREE_CLIMB_RADIUS = 6;
// how close to the ground (as a fraction of the trunk's t) pressing the
// interact key while climbing the tree actually dismounts — higher up
// (including the whole branch) the only way down is to walk backward, so
// the height is felt on the way down instead of skipped with a teleport.
const TREE_DISMOUNT_T = 0.05;

// Straight-line chord length of the walkable branch, stood in for the old
// prototype's module-global TREE_WALK_LEN (not exported by world/tree.js,
// see its walkBranch API comment) — close enough for a climb-speed
// approximation, same spirit as grass climbing using g.h (arc length is
// also only approximated there by the blade's height).
const TREE_WALK_LEN = (() => {
  const p0 = treeWalkBranch.point(0), p1 = treeWalkBranch.tipPos;
  return Math.hypot(p1[0] - p0[0], p1[1] - p0[1], p1[2] - p0[2]);
})();

/** Nearest climbable target within range, or null — grass blades tall
 *  enough to bother with, or the tree trunk. */
export function nearestClimbable(ant) {
  const maxD = reach(ant); // plain distance, so it compares fairly against the tree's surface distance below
  // `d < maxD`, not the query's own inclusive bound: the scan this replaced
  // compared strictly, and a blade exactly at arm's length was out of range.
  const blades = grassBlades();
  const hit = worldIndex.nearest(ant.x, ant.z, maxD, 'grass',
    (i, d) => d < maxD && blades[i].h >= CLIMB_MIN_H);
  let best = hit ? { kind: 'grass', i: hit.id } : null;
  const bestD = hit ? hit.dist : maxD;
  const treeSurfaceD = Math.hypot(TREE.x - ant.x, TREE.z - ant.z) - TREE.w;
  if (treeSurfaceD < TREE_CLIMB_RADIUS * (ant.scale || 1) && treeSurfaceD < bestD) best = { kind: 'tree' };
  return best;
}

export function enterClimb(ant, target) {
  ant.climb = target.kind === 'tree'
    ? { kind: 'tree', seg: 'trunk', t: 0.02 }
    : { kind: 'grass', i: target.i, t: 0.03 };
  ant.speed = 0;
}

/* No fall physics yet: dismounting drops the ant straight back to the
   ground below wherever it let go. Only ever called from ground level or
   near it (grass: any height, an accepted simplification for blades this
   short; tree: gated to TREE_DISMOUNT_T in tryInteract(), so the drop here
   is always small even though it reuses the same no-fall logic). */
export function exitClimb(ant) {
  let p;
  if (ant.climb.kind === 'tree') {
    const tb = bladeClimbBasis(TREE, ant.climb.t);
    p = add3(bladeCurvePoint(TREE, ant.climb.t), scl3(tb.normal, treeTrunkRadius(ant.climb.t)));
  } else {
    p = bladeCurvePoint(grassBlades()[ant.climb.i], ant.climb.t);
  }
  ant.climb = null;
  ant.x = p[0]; ant.z = p[2]; ant.y = groundY(p[0], p[2]);
  ant.speed = 0;
}

/** E/interact: climb on, dismount, or (tree, part-way up) do nothing — see
 *  the old prototype's tryInteract() for why the tree only dismounts near
 *  its base. `climbTarget` should be nearestClimbable(ant) when not already
 *  climbing, or anything falsy while climbing (unused in that branch). */
export function tryInteract(ant, climbTarget) {
  if (ant.climb) {
    if (ant.climb.kind === 'grass') { exitClimb(ant); return; }
    if (ant.climb.seg === 'trunk' && ant.climb.t <= TREE_DISMOUNT_T) exitClimb(ant);
    return;
  }
  if (climbTarget) enterClimb(ant, climbTarget);
}

/** Text for a #prompt-style HUD element — not wired to the DOM this round
 *  (no such element in game/index.html yet), exposed so a later HUD pass
 *  can call it without re-deriving this logic. */
export function climbPromptText(ant, climbTarget) {
  if (ant.climb) {
    if (ant.climb.kind === 'tree') {
      const canDismount = ant.climb.seg === 'trunk' && ant.climb.t <= TREE_DISMOUNT_T;
      return canDismount ? 'redescendre du tronc' : 'reculer pour redescendre';
    }
    return 'redescendre du brin';
  }
  if (climbTarget) return climbTarget.kind === 'tree' ? 'grimper au tronc' : "grimper au brin d'herbe";
  return null;
}

/** Advance ant.climb by one frame; climbDir in [-1,1] (forward/back along
 *  the current blade/trunk/branch's own curve — left/right is unused, same
 *  as the old prototype). Call only when ant.climb is truthy. */
export function stepClimb(ant, climbDir, dt) {
  let didExit = false, segSwitch = null;

  if (ant.climb.kind === 'tree') {
    // trunk and branch are two segments of one continuous path: trunk reuses
    // the grass climb machinery on TREE (bladeCurvePoint/Basis), the branch
    // walks treeWalkBranch's own parametrization. Segment switches
    // (segSwitch) and exitClimb() are applied last (below), after
    // speed/travel, so a frame that leaves climbing still gets the same
    // "reset to 0" as grass — reordering this (exitClimb first) would let
    // ant.speed get re-damped to a nonzero value right after exitClimb()
    // just zeroed it.
    if (ant.climb.seg === 'trunk') {
      ant.climb.t = clamp(ant.climb.t + climbDir * (climbSpeed(ant) / TREE.h) * dt, 0, treeWalkBranch.splitT);
      const tb = bladeClimbBasis(TREE, ant.climb.t);
      const tp = add3(bladeCurvePoint(TREE, ant.climb.t), scl3(tb.normal, treeTrunkRadius(ant.climb.t)));
      ant.x = tp[0]; ant.y = tp[1]; ant.z = tp[2];
      if (ant.climb.t <= 0.0005 && climbDir < 0) didExit = true; // back down to the ground
      else if (ant.climb.t >= treeWalkBranch.splitT && climbDir > 0) segSwitch = 'branch'; // onto the branch
    } else {
      ant.climb.u = clamp(ant.climb.u + climbDir * (climbSpeed(ant) / TREE_WALK_LEN) * dt, 0, 1);
      const wb = treeWalkBranch.basis(ant.climb.u);
      const wp = add3(wb.pos, scl3(wb.up, treeWalkBranch.radius(ant.climb.u)));
      ant.x = wp[0]; ant.y = wp[1]; ant.z = wp[2];
      if (ant.climb.u <= 0.0005 && climbDir < 0) segSwitch = 'trunk'; // back onto the trunk
    }
  } else {
    const g = grassBlades()[ant.climb.i];
    ant.climb.t = clamp(ant.climb.t + climbDir * (climbSpeed(ant) / g.h) * dt, 0, CLIMB_MAX_T);
    const cp = bladeCurvePoint(g, ant.climb.t);
    ant.x = cp[0]; ant.y = cp[1]; ant.z = cp[2];
    if (ant.climb.t <= 0.0005 && climbDir < 0) didExit = true; // climbed back down to the ground
  }

  const cs = climbSpeed(ant);
  ant.speed = damp(ant.speed, Math.abs(climbDir) * cs, 7, dt);
  ant.travel += Math.abs(climbDir) * cs * dt;

  if (didExit) exitClimb(ant);
  else if (segSwitch === 'branch') { ant.climb.seg = 'branch'; ant.climb.u = 0; }
  else if (segSwitch === 'trunk') { ant.climb.seg = 'trunk'; ant.climb.t = treeWalkBranch.splitT; }
}

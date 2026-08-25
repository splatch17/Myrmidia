import { clamp, damp } from '../core/noise.js';
import { add3, scl3 } from '../core/vecmath.js';
import { groundY, TREE, treeTrunkRadius, treeWalkBranch } from '../world/index.js';
import { createGrassField } from '../world/grass.js';
import { bladeCurvePoint, bladeClimbBasis } from '../world/blade.js';

/* ==========================================================================
   Stem/tree climbing (README "Suite" — grimpe des tiges, #5 on the old
   prototype), ported from design/prototypes/sortie-fourmiliere.html's
   climbing section (nearestClimbable/enterClimb/exitClimb/frame()'s
   ant.climb branch). legs.js's antBasis()/antMatrix()/updateLegs() consume
   ant.climb the same way the old file's did; this module only owns finding
   a target, entering/exiting, and advancing along one while held.

   GRASS here is a second createGrassField({}) call (world/grass.js, already
   exported for the mesh) purely for its returned footprints — deterministic
   (same default seed/count world/index.js uses to build the real mesh), so
   this always matches what's rendered without needing a reference to that
   specific instance threaded through main.js. The InstancedMesh/geometry
   this second call builds is discarded immediately; a one-time startup cost,
   not per-frame, and avoids touching world/index.js or main.js to plumb an
   instance-specific value through (see the mission brief on staying out of
   Atta's files).
   ========================================================================== */

export const GRASS = createGrassField({}).footprints;

const CLIMB_MIN_H = 42;     // only sufficiently tall blades are worth climbing
const CLIMB_RADIUS = 4.5;   // how close to a blade's base an ant must be to grab it
const CLIMB_SPEED = 20;     // arc-length units per second while climbing
const CLIMB_MAX_T = 0.93;   // stop short of the tip, where the blade gets too thin to stand on

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
  let best = null, bestD = CLIMB_RADIUS; // plain distance, so it compares fairly against the tree's surface distance below
  for (let i = 0; i < GRASS.length; i++) {
    const g = GRASS[i];
    if (g.h < CLIMB_MIN_H) continue;
    const d = Math.hypot(g.x - ant.x, g.z - ant.z);
    if (d < bestD) { bestD = d; best = { kind: 'grass', i }; }
  }
  const treeSurfaceD = Math.hypot(TREE.x - ant.x, TREE.z - ant.z) - TREE.w;
  if (treeSurfaceD < TREE_CLIMB_RADIUS && treeSurfaceD < bestD) best = { kind: 'tree' };
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
    p = bladeCurvePoint(GRASS[ant.climb.i], ant.climb.t);
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
      ant.climb.t = clamp(ant.climb.t + climbDir * (CLIMB_SPEED / TREE.h) * dt, 0, treeWalkBranch.splitT);
      const tb = bladeClimbBasis(TREE, ant.climb.t);
      const tp = add3(bladeCurvePoint(TREE, ant.climb.t), scl3(tb.normal, treeTrunkRadius(ant.climb.t)));
      ant.x = tp[0]; ant.y = tp[1]; ant.z = tp[2];
      if (ant.climb.t <= 0.0005 && climbDir < 0) didExit = true; // back down to the ground
      else if (ant.climb.t >= treeWalkBranch.splitT && climbDir > 0) segSwitch = 'branch'; // onto the branch
    } else {
      ant.climb.u = clamp(ant.climb.u + climbDir * (CLIMB_SPEED / TREE_WALK_LEN) * dt, 0, 1);
      const wb = treeWalkBranch.basis(ant.climb.u);
      const wp = add3(wb.pos, scl3(wb.up, treeWalkBranch.radius(ant.climb.u)));
      ant.x = wp[0]; ant.y = wp[1]; ant.z = wp[2];
      if (ant.climb.u <= 0.0005 && climbDir < 0) segSwitch = 'trunk'; // back onto the trunk
    }
  } else {
    const g = GRASS[ant.climb.i];
    ant.climb.t = clamp(ant.climb.t + climbDir * (CLIMB_SPEED / g.h) * dt, 0, CLIMB_MAX_T);
    const cp = bladeCurvePoint(g, ant.climb.t);
    ant.x = cp[0]; ant.y = cp[1]; ant.z = cp[2];
    if (ant.climb.t <= 0.0005 && climbDir < 0) didExit = true; // climbed back down to the ground
  }

  ant.speed = damp(ant.speed, Math.abs(climbDir) * CLIMB_SPEED, 7, dt);
  ant.travel += Math.abs(climbDir) * CLIMB_SPEED * dt;

  if (didExit) exitClimb(ant);
  else if (segSwitch === 'branch') { ant.climb.seg = 'branch'; ant.climb.u = 0; }
  else if (segSwitch === 'trunk') { ant.climb.seg = 'trunk'; ant.climb.t = treeWalkBranch.splitT; }
}

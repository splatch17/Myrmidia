import { MUSHROOMS, ROCKS, mushroomCollideR, TREE, treeTrunkRadius, TUNNEL_MOUTH, containUnderground } from '../world/index.js';
import { bladeCurvePoint } from '../world/blade.js';
import { GRASS, CLIMB_MIN_H } from './climb.js';

/* ==========================================================================
   Decor non-penetration (#4/#16): the ant stops at rocks, mushroom caps,
   thick grass stems and the tree trunk instead of walking through them.
   The world already publishes every footprint this needs (world/index.js:
   MUSHROOMS/ROCKS/mushroomCollideR, world/tree.js: treeTrunkRadius,
   world/grass.js: footprints via climb.js's GRASS) — nothing here invents a
   second radius that could drift from what's drawn.

   Method, ported from the old prototype's second (fixed) version of
   resolveDecorCollision(): every overlapped obstacle contributes a
   penetration vector, and the *average* of all of them is applied once,
   rather than snapping the ant to the edge of each obstacle in turn. The
   sequential version ping-ponged inside the underground fungus clusters,
   where fungusCluster() drops 4-9 caps into a 7x7 square: resolving cap A
   pushed the ant into cap B and back again. Averaging converges on the gap
   between them instead — verified on the old file by stepping a deliberately
   wedged ant through repeated resolves (see the agent notes).
   ========================================================================== */

// Blades stiff enough to climb are stiff enough to shoulder past (climb.js's
// CLIMB_MIN_H); anything shorter is scenery the contact-bend shader already
// pushes aside (world/grass.js).
// The radius stays comfortably under climb.js's CLIMB_RADIUS (4.5): a blade
// you cannot get within grabbing distance of is a blade you can never climb,
// and w peaks around 4.5 for the tallest blades.
function grassCollideR(g) { return g.w * 0.75; }

// One trunk-sized cylinder, sampled from the same taper the climb uses, at
// roughly the height an ant's body occupies — not a second hand-tuned radius
// (#16). 0.88 keeps the stop just inside the bark's own wobble minimum
// (0.86, see buildTreeMesh) so the ant touches bark rather than thin air.
const TREE_GROUND_T = 0.01;
const TREE_BASE = bladeCurvePoint(TREE, TREE_GROUND_T);
const TREE_COLLIDE_R = treeTrunkRadius(TREE_GROUND_T) * 0.88;

/* ---- underground props vs. narrow passages ------------------------------
   A cap growing near a tunnel wall leaves a gap between itself and the rock
   that the ant fits into but cannot get out of the far side of: containment
   pushes it off the wall, the cap pushes it back, and walking forward does
   nothing. Measured on the built game, the gallery has a dozen such pockets
   under 2.4 units wide, and the harness wedged the ant in one at z=-88.
   A cap sitting in a *corridor* (the room approaches are only ~4.4 units of
   walkable width) is worse still: it pinches the one route into the room,
   which is exactly the "the rooms aren't really accessible" complaint.

   So each underground prop's radius is adjusted once, from the shape of the
   cavity around it rather than by hand:
     - if a wall is closer than the ant needs to squeeze past, the prop grows
       to swallow the pocket, and the ant simply walks around the whole cap;
     - if growing it would leave less than an ant's width on the far side,
       the prop stops colliding altogether. A glowing mushroom you can walk
       through is a much smaller problem than a corridor you cannot.
   Cheap enough to do eagerly (a few thousand containUnderground() calls,
   once), but deferred to first use because MUSHROOMS is only filled when the
   world is built, after this module is imported. */
const ANT_SQUEEZE = 2.4;   // walkable width the ant needs to pass a prop
const POCKET_GAP = 2.6;    // a gap narrower than this is a trap, not a route
const WALL_PROBE = 14;     // no wall further out than this matters

/* Distance from (x, z) to the edge of the walkable footprint along a
   direction, using containUnderground() itself as the boundary test — no
   second copy of the tunnel/room geometry. */
function freeReach(x, z, dx, dz) {
  for (let s = 0.3; s <= WALL_PROBE; s += 0.3) {
    const px = x + dx * s, pz = z + dz * s;
    const c = containUnderground(px, pz);
    if (Math.hypot(c[0] - px, c[1] - pz) > 0.05) return s;
  }
  return Infinity;
}

const DIRS = [];
for (let i = 0; i < 8; i++) DIRS.push([Math.cos(i * Math.PI / 4), Math.sin(i * Math.PI / 4)]);

function fittedRadius(x, z, r) {
  let minI = 0, minReach = Infinity;
  const reach = DIRS.map(([dx, dz], i) => {
    const d = freeReach(x, z, dx, dz);
    if (d < minReach) { minReach = d; minI = i; }
    return d;
  });
  if (minReach === Infinity || minReach - r >= POCKET_GAP) return r;
  const grown = Math.max(r, minReach + 0.3); // a cap already half-buried in the wall keeps its own radius
  const opposite = reach[(minI + 4) % 8];
  if (opposite - grown < ANT_SQUEEZE) return 0; // no room to pass either way: don't be an obstacle at all
  return grown;
}

let mushroomR = null;
function mushroomRadii() {
  if (!mushroomR || mushroomR.length !== MUSHROOMS.length) {
    mushroomR = MUSHROOMS.map((m) => fittedRadius(m.x, m.z, mushroomCollideR(m)));
  }
  return mushroomR;
}

/* Every collider that could be touching (x, z), handed one at a time to
   `fn(cx, cz, r)`. Split by region rather than iterating everything: the
   fungus gardens are all underground (z < -14) and the pebbles/grass/tree
   are all out on the lawn (z > 6), so each frame only ever walks the list it
   can actually be touching. One iterator, so the resolver and the
   verification probe can never disagree about a radius. */
function forEachCollider(x, z, fn) {
  if (z < TUNNEL_MOUTH + 6) {
    const radii = mushroomRadii();
    for (let k = 0; k < MUSHROOMS.length; k++) {
      if (radii[k] > 0) fn(MUSHROOMS[k].x, MUSHROOMS[k].z, radii[k]);
    }
  }
  if (z > TUNNEL_MOUTH - 6) {
    for (let i = 0; i < ROCKS.length; i++) fn(ROCKS[i].x, ROCKS[i].z, ROCKS[i].r);
    for (let j = 0; j < GRASS.length; j++) {
      const g = GRASS[j];
      if (g.h >= CLIMB_MIN_H) fn(g.x, g.z, grassCollideR(g));
    }
    fn(TREE_BASE[0], TREE_BASE[2], TREE_COLLIDE_R);
  }
}

/** How deep (x, z) sits inside the deepest collider it overlaps, 0 if clear.
 *  Used by scripts/verify-room-access.mjs to assert non-penetration against
 *  exactly the radii the resolver uses, rather than a copy of them. */
export function deepestPenetration(x, z) {
  let worst = 0;
  forEachCollider(x, z, (cx, cz, r) => {
    const pen = r - Math.hypot(x - cx, z - cz);
    if (pen > worst) worst = pen;
  });
  return worst;
}

/* Sum of every overlap at (ant.x, ant.z): each obstacle contributes its own
   penetration vector, and resolveDecorCollision() applies their average. */
function collectDecorPush(ant) {
  const push = { x: 0, z: 0, n: 0 };
  forEachCollider(ant.x, ant.z, (cx, cz, r) => {
    const dx = ant.x - cx, dz = ant.z - cz;
    const d = Math.hypot(dx, dz);
    if (d >= r || d < 0.001) return;
    const pen = r - d;
    push.x += (dx / d) * pen;
    push.z += (dz / d) * pen;
    push.n++;
  });
  return push;
}

/**
 * Push the ant out of any decor it has walked into, and let it slide along
 * the obstacle in the direction it was already heading (so walking straight
 * at a rock skirts it instead of pinning you against it — same idiom as the
 * queen avoidance in movement.js). `step` is this frame's travelled
 * distance, which is what bounds the slide.
 */
export function resolveDecorCollision(ant, step) {
  const push = collectDecorPush(ant);
  if (push.n === 0) return;
  const pdx = push.x / push.n, pdz = push.z / push.n;
  ant.x += pdx; ant.z += pdz;

  const d = Math.hypot(pdx, pdz);
  if (d > 0.0005) {
    const nx = pdx / d, nz = pdz / d;
    const tx = -nz, tz = nx;
    const along = Math.sin(ant.yaw) * tx + Math.cos(ant.yaw) * tz;
    const slide = step * 0.6 * (along >= 0 ? 1 : -1);
    ant.x += tx * slide; ant.z += tz * slide;
  }

  // one cleanup pass: the push+slide above can land in a *different*
  // obstacle in a dense cluster. No slide this time, so it always settles.
  const cleanup = collectDecorPush(ant);
  if (cleanup.n > 0) {
    ant.x += cleanup.x / cleanup.n;
    ant.z += cleanup.z / cleanup.n;
  }
}

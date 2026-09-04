import { MUSHROOMS, ROCKS, mushroomCollideR, TREE, treeTrunkRadius, TUNNEL_MOUTH, containUnderground, profileR, getRoomBranches } from '../world/index.js';
import { clamp } from '../core/noise.js';
import { bladeCurvePoint } from '../world/blade.js';
import { GRASS, CLIMB_MIN_H } from './climb.js';
import { PLAYER_AVATAR, collideRadius } from './avatar.js';
import { queryDisc, KIND } from './spatial.js';

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
/* Both derived from the avatar's own footprint (avatar.js) rather than left
   as the worker-sized literals they were (2.4 / 2.6): the founding queen is
   2.2x a worker, and a gap she does not fit through is a gap that has to be
   treated as a wall, not squeezed into. The visible consequence is that most
   caps standing in the middle of the 11.8-unit-wide gallery stop colliding
   for her altogether — the second branch of fittedRadius() below. That is the
   safe failure: walking through a glowing mushroom looks wrong for a moment,
   being wedged behind one ends the session. */
const ANT_SQUEEZE = collideRadius(PLAYER_AVATAR) * 2 + 0.6;
const POCKET_GAP = ANT_SQUEEZE + 0.2;
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

/* ---- props vs. a body that fills the corridor ---------------------------
   The nest was authored around a worker: containUnderground() clamps a
   walker's centre to +-(profileR*0.82 - 1.6), which is 8.6 units across the
   plain gallery. The founding queen is 6.6 units wide (avatar.js). She fits
   the corridor; she does not fit the corridor *and* a mushroom standing in
   it, and measuring it on the built game shows exactly that: the caps at
   z=-68.6 and z=-74 close the gallery for her between them, with no route
   past that does not detour through the granary doorway. Being unable to
   walk your own gallery is a far worse bug than brushing through a glowing
   cap, so a prop only collides when the cavity it stands in can hold the
   prop and the walker side by side.

   The width used is containUnderground()'s own half-width for the cavity the
   prop is in — the main tube's, or the branch's if the prop is inside a side
   room. Deliberately *not* including the door-mouth widening that
   containUnderground() adds near a branch: that widening is a hole in the
   wall to walk through, not corridor to squeeze past furniture in, and
   counting it is what makes a doorway read as a slalom. */
const LANE_MARGIN = 1.0;

let branchList = null;
function branches() {
  if (!branchList) branchList = Object.values(getRoomBranches());
  return branchList;
}

/* containUnderground()'s own branch test and half-width, kept in the same
   shape so the two can't drift. */
function laneHalfWidth(x, z) {
  for (const br of branches()) {
    const relX = x - br.origin[0], relZ = z - br.origin[2];
    const u = relX * br.dir[0] + relZ * br.dir[2];
    if (u <= -0.5 || u >= br.uMax + 1) continue;
    const lx = relX * br.side[0] + relZ * br.side[2];
    const rr = Math.max(br.profR(clamp(u, 0, br.uMax)) * 0.82 - 1.2, 2.2);
    if (Math.abs(lx) >= rr + 3) continue;
    return rr;
  }
  return Math.max(profileR(z) * 0.82 - 1.6, 3);
}

function fitsBeside(x, z, r, antR) {
  return 2 * laneHalfWidth(x, z) >= 2 * antR + 2 * r + LANE_MARGIN;
}

let mushroomR = null, mushroomRForR = null;
export function mushroomRadii(antR = collideRadius(PLAYER_AVATAR)) {
  if (!mushroomR || mushroomR.length !== MUSHROOMS.length || mushroomRForR !== antR) {
    mushroomRForR = antR;
    mushroomR = MUSHROOMS.map((m) => {
      const r = fittedRadius(m.x, m.z, mushroomCollideR(m));
      return r > 0 && fitsBeside(m.x, m.z, r, antR) ? r : 0;
    });
  }
  return mushroomR;
}

/* ---- collider lists, flattened once -------------------------------------
   {x, z, r} triples rather than the source records, built lazily on first
   use and cached: the per-collider decisions above (which caps collide at
   all, which blades are stiff enough) do not change while the game runs, so
   re-deciding them 3400 times a frame *per ant* was work that only got
   worse with #36. Flat lists are also the shape a spatial index wants
   (#35, spatial.js) — this is what gets handed to it as the candidate set.

   Keyed on the source array's length so a world rebuild (or a nest dug at
   run time, which adds caps) invalidates them rather than being missed. */
let stemList = null, stemsFor = -1;
function stems() {
  if (!stemList || stemsFor !== GRASS.length) {
    stemsFor = GRASS.length;
    stemList = [];
    for (let j = 0; j < GRASS.length; j++) {
      const g = GRASS[j];
      if (g.h >= CLIMB_MIN_H) stemList.push({ x: g.x, z: g.z, r: grassCollideR(g) });
    }
    stemList.push({ x: TREE_BASE[0], z: TREE_BASE[2], r: TREE_COLLIDE_R });
  }
  return stemList;
}

let capList = null, capsFor = -1;
function caps() {
  const radii = mushroomRadii();
  if (!capList || capsFor !== MUSHROOMS.length) {
    capsFor = MUSHROOMS.length;
    capList = [];
    for (let k = 0; k < MUSHROOMS.length; k++) {
      if (radii[k] > 0) capList.push({ x: MUSHROOMS[k].x, z: MUSHROOMS[k].z, r: radii[k] });
    }
  }
  return capList;
}

let rockList = null, rocksFor = -1;
function rocks() {
  if (!rockList || rocksFor !== ROCKS.length) {
    rocksFor = ROCKS.length;
    rockList = ROCKS.map((o) => ({ x: o.x, z: o.z, r: o.r }));
  }
  return rockList;
}

/* The widest thing in any list, so the disc query asks for a radius that
   cannot miss a collider whose *edge* reaches the ant. Recomputed with the
   list it describes. */
function maxRadius(list) {
  let m = 0;
  for (let i = 0; i < list.length; i++) if (list[i].r > m) m = list[i].r;
  return m;
}

/* Every collider that could be touching (x, z), handed one at a time to
   `fn(cx, cz, r)`. Split by region rather than iterating everything: the
   fungus gardens are all underground (z < -14) and the pebbles/grass/tree
   are all out on the lawn (z > 6), so each frame only ever walks the list it
   can actually be touching. One iterator, so the resolver and the
   verification probe can never disagree about a radius.

   Routed through spatial.js: with no index attached it walks the same lists
   in the same order as before (the fallback is the complete set, not a
   cheaper guess), and when #35 lands the same call returns only the nearby
   candidates without a line changing here. `reach` is the query radius —
   the ant's own body plus the widest collider in the list, so nothing whose
   edge touches the ant can be culled by a correct index. */
function forEachCollider(x, z, fn, antR = 0) {
  const emit = (o) => fn(o.x, o.z, o.r);
  if (z < TUNNEL_MOUTH + 6) {
    const list = caps();
    queryDisc(KIND.MUSHROOMS, x, z, antR + maxRadius(list), list, emit);
  }
  if (z > TUNNEL_MOUTH - 6) {
    const rl = rocks(), sl = stems();
    queryDisc(KIND.ROCKS, x, z, antR + maxRadius(rl), rl, emit);
    queryDisc(KIND.GRASS, x, z, antR + maxRadius(sl), sl, emit);
  }
}

/** How deep (x, z) sits inside the deepest collider it overlaps, 0 if clear.
 *  Used by scripts/verify-room-access.mjs to assert non-penetration against
 *  exactly the radii the resolver uses, rather than a copy of them. `antR`
 *  defaults to 0, i.e. "is the ant's centre inside something"; pass a body
 *  radius to ask the stricter "is any of the ant inside something". */
export function deepestPenetration(x, z, antR = 0) {
  let worst = 0;
  forEachCollider(x, z, (cx, cz, r) => {
    const pen = r + antR - Math.hypot(x - cx, z - cz);
    if (pen > worst) worst = pen;
  }, antR);
  return worst;
}

/* Sum of every overlap at (ant.x, ant.z): each obstacle contributes its own
   penetration vector, and resolveDecorCollision() applies their average. */
function collectDecorPush(ant) {
  const push = { x: 0, z: 0, n: 0 };
  // the ant is a disc, not a point: its own half-width is added to every
  // obstacle rather than baked into the obstacle radii, so the same world
  // data serves whichever body the player is in (avatar.js)
  const antR = collideRadius(ant.profile || PLAYER_AVATAR);
  forEachCollider(ant.x, ant.z, (cx, cz, r0) => {
    const r = r0 + antR;
    const dx = ant.x - cx, dz = ant.z - cz;
    const d = Math.hypot(dx, dz);
    if (d >= r || d < 0.001) return;
    const pen = r - d;
    push.x += (dx / d) * pen;
    push.z += (dz / d) * pen;
    push.n++;
  }, antR);
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

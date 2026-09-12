import * as world from '../world/index.js';

/* ==========================================================================
   The world's resource nodes, seen from the gameplay side (#29).

   Ownership, per design/api-monde-gameplay.md §3: the nodes are *world data*
   — position, mesh, remaining amount — and live in world/**. What is done
   with them is gameplay and lives here. So this module is a thin probe layer
   and nothing else: it never invents an amount, never mutates a world node
   directly, and it believes what harvestNode() returns rather than assuming
   it got what it asked for.

   Contract consumed (names are the contract's, not synonyms):
     RESOURCE_NODES -> Array<{ id, x, z, kind, amount, r }>   (a live array:
                       `amount` changes in place, an exhausted node stays in
                       it with amount 0)
     harvestNode(id, qty) -> number   units actually removed, 0 if exhausted
                                      or the id is unknown

   Read through a copy of the namespace (`const W = { ...world }`), same
   discipline as siteQuality.js: Atta writes these in parallel, so "not there
   yet" has to be a plain `undefined` to branch on, not a bundler resolution
   error.

   ---- the stand-in --------------------------------------------------------
   While RESOURCE_NODES is missing there is literally nothing to pick up, and
   a harvest loop with nothing to harvest cannot be looked at, which is the
   only way this project accepts something as finished. So this file carries
   a small authored stand-in set — scattered around the spawn on ground that
   was surveyed (see the session notes: sampled through the real
   evaluateSite()/decor colliders, all of them clear of a collider and
   walkable). It is deliberately *marked*: nodesAreProvisional() is true while
   it is in use, the HUD says so, and the day RESOURCE_NODES exists this whole
   block goes away without anything else in player/** changing — the rest of
   the code only ever sees the contract's shape.
   ========================================================================== */

const W = { ...world };

export const KINDS = ['graine', 'brindille', 'miellat'];

/** Singular, for "elle porte une graine". */
export const KIND_LABEL = {
  graine: 'graine',
  brindille: 'brindille',
  miellat: 'miellat',
};

/** How a count of that kind reads: [singular, plural]. `miellat` is a mass
 *  noun — "2 miellat" would be wrong, so it gets its own form. */
const KIND_COUNT = {
  graine: ['graine', 'graines'],
  brindille: ['brindille', 'brindilles'],
  miellat: ['dose de miellat', 'doses de miellat'],
};

export function countLabel(kind, n) {
  const f = KIND_COUNT[kind] || [kind, kind];
  return `${n} ${n > 1 ? f[1] : f[0]}`;
}

/* Stand-in nodes: (x, z) picked off a survey of the real terrain around the
   spawn (player/index.js SURFACE_START), all with zero decor penetration.
   `r` is a reach a queen 2.2x a worker can feel: she is ~15 units long, so a
   10-unit node radius is "standing over it", not "somewhere nearby". */
const STANDIN = [
  { x: 60, z: 110, kind: 'graine', amount: 3 },
  { x: 95, z: 105, kind: 'brindille', amount: 3 },
  { x: 55, z: 120, kind: 'miellat', amount: 2 },
  { x: 100, z: 125, kind: 'graine', amount: 2 },
  { x: 45, z: 115, kind: 'brindille', amount: 2 },
  { x: 85, z: 135, kind: 'miellat', amount: 2 },
  { x: 110, z: 110, kind: 'graine', amount: 2 },
  { x: 65, z: 135, kind: 'brindille', amount: 2 },
  { x: 40, z: 128, kind: 'graine', amount: 2 },
].map((n, i) => ({ id: 9000 + i, r: 10, ...n }));

let standinUsed = false;

/** The live node array. Same object identity as the world's when it exists,
 *  so `amount` decreasing over there is visible here with no syncing. */
export function resourceNodes() {
  if (Array.isArray(W.RESOURCE_NODES)) return W.RESOURCE_NODES;
  standinUsed = true;
  return STANDIN;
}

/** True while the nodes on the map are this file's stand-ins rather than the
 *  world's — the HUD says so out loud instead of letting a placeholder pass
 *  for content. */
export function nodesAreProvisional() {
  resourceNodes();
  return standinUsed;
}

/**
 * Take up to `qty` from a node. Returns what was **actually** removed, which
 * is what the caller must credit — never `qty`.
 * The world owns the node's own visual update when it owns the node; the
 * stand-in path updates its (player-side) marker through props.js instead.
 */
export function takeFromNode(node, qty) {
  if (!node) return 0;
  if (typeof W.harvestNode === 'function') return W.harvestNode(node.id, qty) || 0;
  const got = Math.max(0, Math.min(qty, node.amount));
  node.amount -= got;
  return got;
}

/**
 * Nearest node the ant can reach, or null. `bodyR` is the ant's own collision
 * radius: the node's `r` is measured from its centre, and a queen whose head
 * is already over a seed would otherwise be told she is not close enough.
 */
export function nodeInReach(x, z, bodyR = 0) {
  const nodes = resourceNodes();
  // The stand-in set above is player-side and was never inserted into the
  // shared index (#35), so it — and only it — still needs the scan.
  if (nodes !== W.RESOURCE_NODES) return scanForReach(nodes, x, z, bodyR);
  const hit = W.worldIndex.nearestWithin(x, z, bodyR * 0.6, 'resource', (i) => nodes[i].amount > 0);
  return hit ? nodes[hit.id] : null;
}

function scanForReach(nodes, x, z, bodyR) {
  let best = null, bestD = Infinity;
  for (let i = 0; i < nodes.length; i++) {
    const n = nodes[i];
    if (n.amount <= 0) continue;
    const d = Math.hypot(n.x - x, n.z - z);
    if (d <= n.r + bodyR * 0.6 && d < bestD) { bestD = d; best = n; }
  }
  return best;
}

/* PIÈGE #6, applied to a search radius rather than a body. A FIXED large
 * radius defeats the whole point of #35's grid: core/spatialIndex.js's
 * nearest() does not walk outward in rings, it computes the cell BOX that
 * covers the radius and sweeps every cell in it (see its own source, the
 * loop over cx0..cx1 / cz0..cz1) — a single query at radius 2000 with this
 * file's cellSize-12 grid visits a ~333x333 block, ~111,000 cells, to find
 * one of ~145 nodes: far more expensive than the linear scan #35 replaced.
 * (First measured in review at radius 2000: ~28,000 cells for a ~167x167
 * box — the arithmetic above is the same bound restated for the box that
 * radius actually produces; either way it is two to three orders of
 * magnitude more than the common case needs.)
 *
 * START_RADIUS is sized against the real content, not a guess: world/
 * resources.js sows on the order of 145 nodes across LAWN_BOUNDS's ~398x250
 * unit lawn (world/terrain.js), so nodes sit roughly sqrt(398*250/145) ≈ 26
 * units apart on average if they were spread evenly (they are not — denser
 * near the tree and the bowl, per world/resources.js's own placement — which
 * only means the common case is found even sooner than this). 32 clears
 * that typical spacing with a little room, and at cellSize 12 sweeps a 7x7
 * block — 49 cells, not ~28,000 — for the common case of "there is a node
 * somewhere nearby".
 *
 * HARD_CAP is the loop's own safety net, not a per-query cost: LAWN_BOUNDS is
 * 398x250, whose diagonal is ~470 units, so no two points on the lawn are
 * ever farther apart than that. 600 clears it with margin, so a forager
 * standing in one corner with the map's last remaining node in the opposite
 * corner still gets a real answer instead of the loop giving up early — and
 * because the search only WIDENS when the previous, cheaper pass found
 * nothing, this worst case is reached rarely, not on every call. */
const START_RADIUS = 32;
// Exported (not just a local const) so scripts/test-logic.mjs's equivalence
// reference can bound itself against the SAME number rather than retyping
// it — the exact discipline this file's own header already asks of every
// other caller of a world contract.
export const HARD_CAP = 600;

function scanNearest(nodes, x, z) {
  let best = null, bestD = Infinity;
  for (let i = 0; i < nodes.length; i++) {
    const n = nodes[i];
    if (n.amount <= 0) continue;
    const d = Math.hypot(n.x - x, n.z - z);
    if (d < bestD) { bestD = d; best = n; }
  }
  return best;
}

/**
 * The nearest node with anything left in it, ANYWHERE on the map — what a
 * forager (#37, player/forage.js) walks TOWARD from afar. Unlike
 * nodeInReach() (which only answers "is something already within arm's
 * reach right now", the player's own question while holding the harvest
 * key), this never filters by distance: a forager many body-lengths from
 * every node still needs a direction to walk in.
 *
 * Searched at a GROWING radius rather than one fixed large one (see the
 * constants above): nearest(x, z, r, ...) is an EXACT minimum over every
 * accepted candidate within r, so the first radius that turns up a hit is
 * provably the true global nearest — nothing closer could have been missed,
 * because "closer" would have been found (and returned) at a smaller r
 * already. Doubling means the common case (a node within START_RADIUS)
 * costs one small query; only a forager truly alone on an empty stretch of
 * lawn pays for the widening passes, and even that terminates at HARD_CAP.
 */
export function nearestNode(x, z) {
  const nodes = resourceNodes();
  if (nodes !== W.RESOURCE_NODES) return scanNearest(nodes, x, z);
  let r = START_RADIUS;
  for (;;) {
    const hit = W.worldIndex.nearest(x, z, r, 'resource', (i) => nodes[i].amount > 0);
    if (hit) return nodes[hit.id];
    if (r >= HARD_CAP) return null;
    r = Math.min(r * 2, HARD_CAP);
  }
}

/* id -> node, rebuilt whenever the array it was built from is replaced or
   changes length (nodes are never removed, only emptied — see the contract at
   the top — so that is enough to notice every change). */
const byId = new Map();
let byIdFor = null;

/** The node with that id, or null — so a caller holding an id across frames
 *  (harvest.js latches one) does not re-walk the array every frame. */
export function nodeById(id) {
  const nodes = resourceNodes();
  if (byIdFor !== nodes || byId.size !== nodes.length) {
    byIdFor = nodes;
    byId.clear();
    for (const n of nodes) byId.set(n.id, n);
  }
  return byId.get(id) || null;
}

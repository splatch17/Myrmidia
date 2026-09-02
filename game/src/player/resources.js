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
  let best = null, bestD = Infinity;
  for (let i = 0; i < nodes.length; i++) {
    const n = nodes[i];
    if (n.amount <= 0) continue;
    const d = Math.hypot(n.x - x, n.z - z);
    if (d <= n.r + bodyR * 0.6 && d < bestD) { bestD = d; best = n; }
  }
  return best;
}

/* ==========================================================================
   Egg laying and incubation (#6 §2: "la ponte" — design/boucle-de-jeu.md §2,
   design/ressources-et-fondation.md §7a).

   Pure logic — no THREE, no DOM, no import of world/** or of any other
   player/** module. Everything this file needs (whether the colony is
   founded, whether the queen is standing in the chamber, the harvest cache
   to spend from) is handed in by the caller, which is what lets
   scripts/test-logic.mjs import this file directly, with no loader hook and
   no DOM stand-in — see that script's header.

   FRONTIER WITH #36 (the entity layer). A hatch increments
   `brood.workersAvailable` and nothing else: no ant, no mesh, no AI is
   created here. #36 is expected to poll (and drain) that counter to decide
   how many worker entities to spawn — this module does not know entities
   exist.

   THE COST RULE (kept deliberately simple — see the header on §4 of the
   ticket for why this needed a decision, not a citation): an egg costs
   `EGG_COST` resource units, of *any* kind, taken out of the harvest cache
   greedily in whatever order its `items` happen to be keyed (harvest.js is
   the only owner of that bookkeeping; this file asks it to remove units, it
   never keeps a second copy of the stockpile). A graine and a brindille are
   worth the same egg-shaped nothing here — there is no cross-caste recipe
   yet (design/boucle-de-jeu.md §2's open point on "une caste au hasard vs.
   au choix" is not resolved by this round; every hatch is a plain worker).
   ========================================================================== */

/** Resource units per egg, any kind, see the module header's "cost rule".
 *  Calibrated against FOUND_STOCK (5, player/harvest.js — the stock a queen
 *  already has to reach to found at all): three units is reachable on what
 *  founded the colony but not free, so laying again means going back out
 *  (design/boucle-de-jeu.md §2: "ça garde la récolte pertinente après la
 *  fondation"). */
export const EGG_COST = 3;

/** Seconds an egg spends in the brood pile before it hatches. Tuned for a
 *  playtest session — a full incubation lands within one or two more harvest
 *  round-trips, not a real per-caste biology figure. Revisit once #7's XP
 *  pacing exists to weigh it against. */
export const EGG_INCUBATION_SECONDS = 25;

/** Fallback brood-room size when nothing more specific is known. The real
 *  ceiling lives with whoever draws the room (today: world/founding.js's
 *  MAX_BROOD, 6 — not exported by the world barrel yet, so player/index.js
 *  carries its own literal in sync with it by hand; see the session report).
 *  This module never hardcodes that number into its own logic — capacity is
 *  a parameter of the state (see createBroodState()) precisely so a bigger
 *  couvoir later is a bigger number passed in, not a rewrite here. */
export const DEFAULT_BROOD_CAPACITY = 6;

/** Stable technical refusal reasons `lay()` can return — see `layRefusalText`
 *  for the sentences. Never shown to the player as-is (discipline of
 *  player/founding.js's canFoundAt()/refusalText() split, applied here). */
export const LAY_REASON = {
  NO_NEST: 'no-nest',
  TOO_FAR: 'too-far',
  BROOD_FULL: 'brood-full',
  NOT_ENOUGH_FOOD: 'not-enough-food',
};

const LAY_REASON_TEXT = {
  [LAY_REASON.NO_NEST]: "pas encore de colonie fondée",
  [LAY_REASON.TOO_FAR]: 'trop loin du couvoir',
  [LAY_REASON.BROOD_FULL]: 'couvain plein — attendre une éclosion',
  [LAY_REASON.NOT_ENOUGH_FOOD]: `pas assez de réserve (il faut ${EGG_COST})`,
};

/** The player-facing sentence for a technical reason, same discipline as
 *  player/founding.js's refusalText(): an unknown key is shown rather than
 *  swallowed. */
export function layRefusalText(reason) {
  if (!reason) return 'impossible de pondre';
  return LAY_REASON_TEXT[reason] || `impossible de pondre (${reason})`;
}

/**
 * A fresh brood state. `capacity` is how many clutches can incubate at once
 * — the couvoir's size, a parameter rather than a constant so a bigger
 * chamber later just means a bigger number handed in here.
 */
export function createBroodState(capacity = DEFAULT_BROOD_CAPACITY) {
  return {
    capacity,
    /** { remaining } seconds left before hatching, oldest first. Currently
     *  *incubating* — this is what capacity/refusal is measured against, and
     *  it goes back down on every hatch (see `lay()`/`update()`). Kept
     *  deliberately separate from `laidTotal` below: one is "is there room
     *  right now", the other is "how far has she come", and they must never
     *  be the same number (see that field's own doc, and the session report
     *  on the bug that came from conflating them). */
    clutches: [],
    /** Eggs laid, ever — never decremented, not even by a hatch. This is
     *  what world/founding.js's populateNest(n) has to be driven by
     *  (design/ambiance-prologue.md §2c: "chaque ponte ajoute sa lampe" — a
     *  lamp lit is a permanent fact about the chamber, not a live gauge of
     *  who's still an egg). Driving populateNest() from `clutches.length`
     *  instead was tried and was exactly backwards: every hatch would have
     *  turned a lamp off, so a colony succeeding at its one job would have
     *  gone dark. */
    laidTotal: 0,
    /** hatched eggs nobody has turned into a worker entity yet (#36's job). */
    workersAvailable: 0,
    /** hatched, ever — for a HUD counter that does not reset when #36 drains
     *  workersAvailable. */
    hatchedTotal: 0,
  };
}

/** Remove `total` units from `cache` (player/harvest.js's `{ items, total }`
 *  shape), spread across whichever kinds are on hand. All-or-nothing: either
 *  the whole cost comes out, or the cache is untouched — a partially spent
 *  cache on a refusal is exactly the regression this file's tests guard. */
function spendCost(cache, total) {
  if (!cache || cache.total < total) return false;
  let left = total;
  for (const kind of Object.keys(cache.items)) {
    if (left <= 0) break;
    const have = cache.items[kind] || 0;
    if (have <= 0) continue;
    const take = Math.min(have, left);
    cache.items[kind] = have - take;
    left -= take;
  }
  cache.total -= total;
  return true;
}

/**
 * Try to lay one egg. `cache` is player/harvest.js's `{ items, total }`
 * stockpile (or null/undefined if nothing has ever been dropped yet).
 * `ctx.founded` — is there a nest at all; `ctx.inChamber` — is the queen
 * standing in it right now (design/boucle-de-jeu.md §2 ties the gesture to
 * the couvoir, not to "anywhere on the map").
 *
 * Returns `{ ok, reason? }`, `reason` one of LAY_REASON's stable technical
 * strings — never a sentence (layRefusalText() phrases it). A refusal never
 * mutates `brood` or `cache`.
 */
export function lay(brood, cache, ctx = {}) {
  const { founded = false, inChamber = false } = ctx;
  if (!founded) return { ok: false, reason: LAY_REASON.NO_NEST };
  if (!inChamber) return { ok: false, reason: LAY_REASON.TOO_FAR };
  if (brood.clutches.length >= brood.capacity) return { ok: false, reason: LAY_REASON.BROOD_FULL };
  if (!spendCost(cache, EGG_COST)) return { ok: false, reason: LAY_REASON.NOT_ENOUGH_FOOD };
  brood.clutches.push({ remaining: EGG_INCUBATION_SECONDS });
  brood.laidTotal++; // never decremented — see its field doc in createBroodState()
  return { ok: true };
}

/**
 * Advance incubation by `dt`. Any clutch whose remaining time reaches 0
 * hatches: it leaves `clutches` (freeing a capacity slot for the next lay)
 * and becomes one more unit of `workersAvailable`/`hatchedTotal`. Returns how
 * many hatched *this call*, so a caller can react once — a HUD flash, a
 * sound — without polling workersAvailable for a delta.
 */
export function update(brood, dt) {
  let hatched = 0;
  const remaining = [];
  for (const c of brood.clutches) {
    c.remaining -= dt;
    if (c.remaining > 0) remaining.push(c);
    else hatched++;
  }
  brood.clutches = remaining;
  if (hatched > 0) {
    brood.workersAvailable += hatched;
    brood.hatchedTotal += hatched;
  }
  return hatched;
}

/** Seconds until the next hatch, or null while nothing is incubating. */
export function nextHatchIn(brood) {
  if (brood.clutches.length === 0) return null;
  let best = Infinity;
  for (const c of brood.clutches) if (c.remaining < best) best = c.remaining;
  return Math.max(0, best);
}

/** How many clutches are incubating right now, 0..capacity — what a lay is
 *  refused against (LAY_REASON.BROOD_FULL), *not* what should drive
 *  world/founding.js's populateNest(n). That one wants `brood.laidTotal`
 *  (never decreasing, capped at whatever ceiling the chamber can show):
 *  a lit lamp is a permanent fact about the colony's history, this number
 *  is a temporary fact about who's still an egg right now, and driving the
 *  lamps from this one would turn one off every time a hatch succeeds — see
 *  createBroodState()'s doc on `laidTotal` for why that was tried and wrong. */
export function broodCount(brood) { return brood.clutches.length; }

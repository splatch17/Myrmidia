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
   `brood.workersAvailable[caste]` and nothing else: no ant, no mesh, no AI is
   created here. #36/#37/workers.js are expected to poll (and drain) that
   counter to decide how many entities of which caste to spawn — this module
   does not know entities exist.

   THE COST RULE (kept deliberately simple — see the header on §4 of the
   ticket for why this needed a decision, not a citation): an egg costs
   `EGG_COST` resource units, of *any* kind, taken out of the harvest cache
   greedily in whatever order its `items` happen to be keyed (harvest.js is
   the only owner of that bookkeeping; this file asks it to remove units, it
   never keeps a second copy of the stockpile). A graine and a brindille are
   worth the same egg-shaped nothing here — the cost does not depend on caste
   (design/castes-et-micro-macro.md does not ask for a different price, only
   a different body).

   #38 — CASTE AT THE POINT OF LAYING, KEPT AS A STRING. `lay(brood, cache,
   ctx, casteId)` takes a plain caste id ('worker' | 'digger' | any future
   one) rather than an avatar.js profile object, for the exact reason
   core/entities.js's own header gives for `profileId`: this file imports
   NOTHING (see above), so it cannot know avatar.js's WORKER/DIGGER objects
   exist, only agree with player/index.js on the string their `.id` happens
   to be. The default ('worker') is a literal for the same reason — it is
   not `WORKER.id`, it is the string that literal currently equals, kept in
   sync by convention rather than import (same discipline the whole entity
   layer already runs on). A whole clutch is one caste: `lay()` takes ONE
   casteId per call and every egg in that clutch hatches into that caste —
   "pondre des creuseuses, c'est ne pas pondre d'ouvrières" only holds if a
   single lay can't hedge across both.

   `workersAvailable` CHANGED SHAPE FOR #38: it used to be a plain number (a
   count of workers nobody had spawned yet). One caste per clutch means a
   hatch is not just "how many", it is "how many, of WHICH caste" — a single
   integer cannot answer that, and rounding it back down to one number here
   would erase exactly the information workers.js needs to pick DIGGER vs.
   WORKER's avatar.js profile. It is now a plain object keyed by caste id,
   `{ [casteId]: count }`, absent keys reading as zero (see
   `workersAvailableOf()`/`totalWorkersAvailable()` below rather than reading
   the object directly, so a caller never has to remember that convention
   itself). `drainHatched()` is the atomic "read everything, reset to
   nothing" a spawner needs — see its own doc for why that has to be one
   call, not a read followed by a separate reset. */

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
    /** hatched eggs nobody has turned into a body yet, PER CASTE — see the
     *  module header's #38 section for why this is an object and not a
     *  number. Read through workersAvailableOf()/totalWorkersAvailable()/
     *  drainHatched() below rather than indexed directly, so "no key yet"
     *  and "zero" never have to be told apart by the caller. */
    workersAvailable: {},
    /** hatched, ever, across every caste — for a HUD total that does not
     *  reset when workers.js drains workersAvailable. Nothing downstream has
     *  needed a per-caste lifetime total yet (only "how many bodies exist
     *  right now", which workers.js answers by counting live entities, not
     *  by asking this file) — add one the day something does, don't
     *  presuppose it here. */
    hatchedTotal: 0,
  };
}

/** Default caste for a lay() call that does not name one — the string
 *  avatar.js's WORKER.id currently equals (see the module header for why
 *  this file cannot import that constant instead). */
export const DEFAULT_CASTE = 'worker';

/** `brood.workersAvailable[casteId]`, defined as 0 rather than undefined —
 *  the one place that convention lives, so nobody else has to `|| 0` it. */
export function workersAvailableOf(brood, casteId) {
  return brood.workersAvailable[casteId] || 0;
}

/** Every hatched body currently waiting to be spawned, any caste — what a
 *  HUD total (or an "is anything due" check) wants; NOT what a spawner
 *  should drain from (see drainHatched(), which also tells you which caste
 *  each one is). */
export function totalWorkersAvailable(brood) {
  let n = 0;
  for (const k in brood.workersAvailable) n += brood.workersAvailable[k];
  return n;
}

/** Hand back the whole `{ [casteId]: count }` map and reset it to empty, in
 *  one call. ATOMIC ON PURPOSE, same reasoning as the old `n =
 *  workersAvailable; workersAvailable = 0` two-liner it replaces (see
 *  workers.js's own doc on "one hatch = one worker, never two, never zero"):
 *  a caller that read-then-reset across two statements would spawn twice
 *  for the same hatch if anything else ran between them. May return `{}` —
 *  callers should treat a missing key or an empty object identically to
 *  "nothing hatched", never throw on it. */
export function drainHatched(brood) {
  const drained = brood.workersAvailable;
  brood.workersAvailable = {};
  return drained;
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
 * Try to lay one clutch of eggs, all of them `casteId` (#38 — see the module
 * header for why a whole clutch is one caste, and why that caste is a plain
 * string rather than an avatar.js profile object). `cache` is
 * player/harvest.js's `{ items, total }` stockpile (or null/undefined if
 * nothing has ever been dropped yet). `ctx.founded` — is there a nest at
 * all; `ctx.inChamber` — is the queen standing in it right now
 * (design/boucle-de-jeu.md §2 ties the gesture to the couvoir, not to
 * "anywhere on the map").
 *
 * Returns `{ ok, reason? }`, `reason` one of LAY_REASON's stable technical
 * strings — never a sentence (layRefusalText() phrases it). A refusal never
 * mutates `brood` or `cache`.
 */
export function lay(brood, cache, ctx = {}, casteId = DEFAULT_CASTE) {
  const { founded = false, inChamber = false } = ctx;
  if (!founded) return { ok: false, reason: LAY_REASON.NO_NEST };
  if (!inChamber) return { ok: false, reason: LAY_REASON.TOO_FAR };
  if (brood.clutches.length >= brood.capacity) return { ok: false, reason: LAY_REASON.BROOD_FULL };
  if (!spendCost(cache, EGG_COST)) return { ok: false, reason: LAY_REASON.NOT_ENOUGH_FOOD };
  brood.clutches.push({ remaining: EGG_INCUBATION_SECONDS, caste: casteId });
  brood.laidTotal++; // never decremented — see its field doc in createBroodState()
  return { ok: true };
}

/**
 * Advance incubation by `dt`. Any clutch whose remaining time reaches 0
 * hatches: it leaves `clutches` (freeing a capacity slot for the next lay)
 * and becomes one more unit of `workersAvailable[clutch.caste]`/
 * `hatchedTotal`. Returns how many hatched *this call*, across every caste
 * — so a caller can react once (a HUD flash, a sound) without polling
 * workersAvailable for a delta; a caller that needs to know WHICH caste
 * hatched reads `workersAvailable`/`drainHatched()` after calling this, not
 * this return value (see the module header: a single number cannot carry
 * that, which is the whole reason workersAvailable stopped being one).
 */
export function update(brood, dt) {
  let hatched = 0;
  const remaining = [];
  for (const c of brood.clutches) {
    c.remaining -= dt;
    if (c.remaining > 0) { remaining.push(c); continue; }
    hatched++;
    const caste = c.caste || DEFAULT_CASTE; // defensive: a hand-built clutch (a test, an old save) with no caste lays as a worker, never crashes
    brood.workersAvailable[caste] = (brood.workersAvailable[caste] || 0) + 1;
  }
  brood.clutches = remaining;
  if (hatched > 0) brood.hatchedTotal += hatched;
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

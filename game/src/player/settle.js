import { lawnY } from '../world/index.js';
import { nestFootprint } from './nest.js';
import { isFounded, nestOrigin } from './founding.js';
import { testPace } from '../core/pace.js';

/* ==========================================================================
   The queen's race, and where it ends (#84 / #77, decided in
   design/fourmiliere-a-batir.md 2.1).

   Before she settles, the queen is on a clock: her RESERVES melt, faster when
   she runs or when digging is going on, slower when she stands still. At zero
   she starts losing HP (colony.state.queenHp, which has existed since #75 and
   never moved), and at zero HP the game is over. Settling is the one action
   that stops the clock: she becomes immobile for good, the workers will feed
   her (#85), and where she settled pays out.

   Everything here is numbers on `colony.state` (queenReserve, settled, age,
   maxDepth, laid) so it serialises with the rest of the colony; the DOM is
   settleUi.js and the wiring is player/index.js.

   ---- the numbers (units per REAL second, reserve is 0..100) ---------------
     rest 0.15 / walk 0.30 / hard (running, or digging underway) 0.55
   A first outing is mostly walking with a few sprints, say 0.35 on average:
   about 4.7 minutes of reserve, then 100 HP at 0.5/s is 3.3 more minutes of
   grace before the end. Test pace (core/pace.js) multiplies the drain by 2.5
   (waits there are 8x shorter, so the prologue takes ~a minute and a half:
   2.5x leaves it the same relative margin without making the HP loss the
   thing being tested).

   ---- what settling pays (documented, simple on purpose) -------------------
     depth  = entrance level above her floor, in world units
     depthF = min(1, depth / DEEP_REF)            DEEP_REF = 60
     siteF  = site score / 100                    (player/siteQuality.js)
     ponte   = +30 % * depthF + 20 % * siteF      eggs hatch that much faster,
                                                  and a clutch is laid that much
                                                  faster (hold time)
     défense = x(1 + 0.8 * depthF + 0.2 * siteF)  stored for the attacks (#9)
   e.g. 23 u at site 51: ponte +22 %, défense +41 %; the first hall (18 u):
   ponte +19 %, défense +34 %.
   ========================================================================== */

export const RESERVE_MAX = 100;
export const DRAIN = { rest: 0.15, walk: 0.30, hard: 0.55 };
export const TEST_DRAIN_K = 2.5;
export const STARVE_HP_PER_S = 0.5;
export const LOW_RESERVE = 0.25;
/* She cannot settle in the founding chamber (13.6 u under the entrance): the
   first hall (18.2 u, one generation lower) is the point, and the descent to
   it is the step before. Surveyed against the real dig (_probe84): 15 sits
   between the two (chamber 13-13.6, hall 17.6-18.2). */
export const MIN_DEPTH = 15;
export const DEEP_REF = 60;

export function settleBonuses(depth, siteScore) {
  const depthF = Math.min(1, Math.max(0, depth) / DEEP_REF);
  const siteF = Math.max(0, Math.min(1, (siteScore || 0) / 100));
  return {
    depth, siteScore,
    layBonus: 0.30 * depthF + 0.20 * siteF,
    defense: 1 + 0.8 * depthF + 0.2 * siteF,
  };
}

/** How far below her own entrance she stands, in world units (0 at the door).
 *  Measured from the entrance level, not from the lawn straight above her: the
 *  relief rises and falls over a nest (the hall's cover is thinner than the
 *  founding chamber's although it is 4.6 u lower), and digging DOWN is what
 *  the player did and what has to be paid for. */
export function depthOf(ant) {
  const o = nestOrigin();
  return Math.max(0, (o ? lawnY(o.x, o.z) : lawnY(ant.x, ant.z)) - ant.y);
}

/** Can she settle right now? { ok, reason, depth }. */
export function settleVerdict(ant, state, busy = false) {
  const depth = depthOf(ant);
  if (state.settled) return { ok: false, reason: 'Elle est déjà installée.', depth };
  if (!isFounded()) return { ok: false, reason: 'Il faut d’abord fonder la colonie.', depth };
  if (busy) return { ok: false, reason: 'Pas maintenant.', depth };
  const fp = nestFootprint();
  if (!fp || !fp.contains(ant.x, ant.z, ant.y)) {
    return { ok: false, reason: 'Elle doit être dans le nid pour s’y installer.', depth };
  }
  if (depth < MIN_DEPTH) {
    return { ok: false, reason: `Trop près de la surface : ${depth.toFixed(0)} u, il faut descendre à ${MIN_DEPTH} u.`, depth };
  }
  return { ok: true, reason: null, depth };
}

/** The state this module owns, merged into colony.state at creation. */
export function initialSettleState() {
  return {
    queenReserve: { cur: RESERVE_MAX, max: RESERVE_MAX },
    settled: null,    // { depth, siteScore, layBonus, defense, at } once settled
    dead: false,
    age: 0,           // real seconds the run has lasted
    maxDepth: 0,      // deepest the queen has stood
    laid: 0,          // ants laid (eggs)
  };
}

/** Which of the three rates applies this frame. */
export function activityOf(queenAnt, queenProfile, digging) {
  const top = (queenProfile && queenProfile.maxSpeed) || 10;
  if (digging || queenAnt.speed > top * 1.12) return 'hard';
  return queenAnt.speed > 1 ? 'walk' : 'rest';
}

/**
 * One frame of the clock. Returns true on the frame the queen dies.
 * Nothing drains once she has settled (workers feed her, #85).
 */
export function tickReserve(state, dt, activity, queenAnt) {
  if (state.dead) return false;
  state.age += dt;
  if (queenAnt && queenAnt.y !== undefined) {
    const d = depthOf(queenAnt);
    if (d > state.maxDepth) state.maxDepth = d;
  }
  if (state.settled) return false;
  const k = testPace() ? TEST_DRAIN_K : 1;
  const r = state.queenReserve;
  r.cur = Math.max(0, r.cur - DRAIN[activity] * k * dt);
  if (r.cur <= 0) {
    const hp = state.queenHp;
    hp.cur = Math.max(0, hp.cur - STARVE_HP_PER_S * dt);
    if (hp.cur <= 0) { state.dead = true; return true; }
  }
  return false;
}

export function reserveLow(state) {
  return !state.settled && state.queenReserve.cur / state.queenReserve.max <= LOW_RESERVE;
}

export function settleToastText(b) {
  const pct = (v) => `+${Math.round(v * 100)} %`;
  return `Installée à ${b.depth.toFixed(0)} u de profondeur : ponte ${pct(b.layBonus)}, défense ${pct(b.defense - 1)}`;
}

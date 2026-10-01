import { testPace } from '../core/pace.js';
import { lawnY } from '../world/index.js';
import { nestOrigin } from './founding.js';

/* ==========================================================================
   What digging costs (#85): food, and spoil that has to be carried out.

   Pure logic, numbers only (serialisable), no THREE and no DOM. Three things:

     FOOD    one store for the colony: the pile the queen lays from
             (harvest.js's cache). Foragers' deliveries now feed it (colony.js),
             a clutch, a chantier and a hand-dug bite all draw on it. `food` is
             the adapter built in player/index.js: { available(): n|null,
             spend(n), give(n) } - available() null = no pile yet = free (test).
     SPOIL   every SPOIL_CELLS cells dug leave one pellet at the face. A digger
             (the lowest id of the crew at that face) or the player's own digger
             (E) carries it to the surface and drops it at the DROP POINT by the
             entrance; the mound there grows with what was brought out
             (world/spoilMound.js). Pellets left at the face slow it.
     SLOW    a face with more than SLOW_AT pellets works at 1 / (1 + 0.25 *
             excess), never below SLOW_MIN: hauling is what keeps digging fast.

   Not counted: the hall's own walls (world faces, payDigFace) - the first
   rooms of the founding stay free; chantiers and hand digging are the economy.

   ALL THE NUMBERS ARE HERE. "Real" is the pace a player meets, "test" is
   core/pace.js's switch (costs x TEST_COST_K, a pellet every TEST_SPOIL_K
   times more cells so a test chantier stays quick).
   ========================================================================== */
export const ECON = {
  // food units per dug cell, real pace. A 600-cell room is 5 units: one clutch
  // (5), so the first plan after the hall needs a harvest first. The cost then
  // grows ROOM_COST_STEP per room (plans.js).
  FOOD_PER_CELL: { room: 1 / 120, tunnel: 1 / 200 },
  ROOM_COST_STEP: 0.25,
  HAND_FOOD_PER_CELL: 1 / 60,       // digging by hand, outside any chantier (a bite ~ 25 cells)
  TEST_COST_K: 0.2,                 // = core/pace.js TEST_COST
  SPOIL_CELLS: 120,                 // cells dug per pellet, real
  TEST_SPOIL_K: 2,                  // test pace: a pellet per 240 cells
  SLOW_AT: 3,                       // pellets lying at a face before it slows
  SLOW_PER_PELLET: 0.25,
  SLOW_MIN: 0.2,
  DROP_RADIUS: 5,                   // a hauler drops within this of the drop point
  PILE_MERGE_R: 9,                  // hand-dug spoil joins a pile this close
  HAUL_GIVE_UP: 70,                 // s: a hauler that cannot get out puts it back
  PLAYER_PICK_R: 9,
};

const spoilCells = () => ECON.SPOIL_CELLS * (testPace() ? ECON.TEST_SPOIL_K : 1);
export const foodScale = () => (testPace() ? ECON.TEST_COST_K : 1);

export function createEconomy({ food } = {}) {
  const state = {
    piles: [],            // [{ id, x, y, z, n }] pellets lying at a face
    acc: {},              // pile id -> cells dug not yet a pellet
    made: 0,              // pellets produced, ever
    out: 0,               // pellets brought out and dropped (the mound)
    cells: 0,             // cells dug, ever (counted here)
    handDebt: 0,          // fraction of a food unit owed by hand digging
    msg: null, msgT: 0,   // the last refusal, for the HUD
  };
  let seq = 1;

  const stock = () => (food ? food.available() : null);
  function say(text, s = 4) { state.msg = text; state.msgT = s; }

  /* -- spoil ------------------------------------------------------------- */
  function pileFor(id, x, y, z, merge) {
    let p = id ? state.piles.find((q) => q.id === id) : null;
    if (!p && merge) {
      p = state.piles.find((q) => Math.hypot(q.x - x, q.z - z) < ECON.PILE_MERGE_R && Math.abs(q.y - y) < 8);
    }
    if (!p) { p = { id: id || `pile-${seq++}`, x, y, z, n: 0 }; state.piles.push(p); }
    return p;
  }

  /** `cells` were just dug at (x,y,z): they become pellets at pile `id` (a
   *  chantier's id), or at the nearest hand-dug pile (id null). */
  function dug(id, cells, x, y, z) {
    if (cells <= 0) return;
    state.cells += cells;
    const p = pileFor(id, x, y, z, !id);
    state.acc[p.id] = (state.acc[p.id] || 0) + cells;
    while (state.acc[p.id] >= spoilCells()) {
      state.acc[p.id] -= spoilCells();
      p.n++; state.made++;
    }
  }

  const pileAtFace = (id) => state.piles.find((p) => p.id === id) || null;
  function lyingAt(id) { const p = pileAtFace(id); return p ? p.n : 0; }
  function totalLying() { let n = 0; for (const p of state.piles) n += p.n; return n; }

  /** Multiplier on a face's work rate: 1 until SLOW_AT pellets lie at it. */
  function slow(id) {
    const n = lyingAt(id);
    if (n <= ECON.SLOW_AT) return 1;
    return Math.max(ECON.SLOW_MIN, 1 / (1 + ECON.SLOW_PER_PELLET * (n - ECON.SLOW_AT)));
  }

  function takePellet(id) { const p = pileAtFace(id); if (!p || p.n <= 0) return false; p.n--; return true; }
  function putBack(id) { const p = pileAtFace(id); if (p) p.n++; }
  function deposit() { state.out++; }

  /** Where hauled earth goes: on the lawn by the entrance, on the side away
   *  from the nest's own ramp (world/spoilMound.js picks the same point). */
  let anchorsFn = null;
  function setAnchors(fn) { anchorsFn = fn; }          // () => { drop, mouth } | null
  function dropPoint() {
    const a = anchorsFn && anchorsFn();
    if (a) return a.drop;
    const o = nestOrigin();
    return o ? { x: o.x, z: o.z, y: lawnY(o.x, o.z) } : null;
  }
  /** Top of the ramp: the way in and out of the nest (the hauler's waypoint). */
  function mouthPoint() { const a = anchorsFn && anchorsFn(); return a ? a.mouth : null; }
  /** A point straight out along the ramp's heading, clear of the trench banks: the way
   *  from the mouth to the heap goes through it, not diagonally over the cut's edge. */
  function exitPoint() {
    const a = anchorsFn && anchorsFn();
    return a ? { x: a.mouth.x + a.dir.x * 10, z: a.mouth.z + a.dir.z * 10 } : null;
  }

  /** The nearest non-empty pile within `r` of (x, z), for the player's E. */
  function pileNear(x, z, r = ECON.PLAYER_PICK_R) {
    let best = null, bd = r;
    for (const p of state.piles) {
      if (p.n <= 0) continue;
      const d = Math.hypot(p.x - x, p.z - z);
      if (d < bd) { bd = d; best = p; }
    }
    return best;
  }

  /* -- food -------------------------------------------------------------- */
  const noFood = 'plus de nourriture';
  /** Hand digging, cells outside any chantier. false = refused. */
  function chargeHand(cells) {
    if (cells <= 0) return true;
    const s = stock();
    if (s === null) return true;                    // no pile yet: free (test)
    const owed = state.handDebt + cells * ECON.HAND_FOOD_PER_CELL * foodScale();
    const whole = Math.floor(owed);
    if (s <= 0 || s < whole) { say(`${noFood} : elle ne creuse plus à la main`); return false; }
    if (whole > 0) food.spend(whole);
    state.handDebt = owed - whole;
    return true;
  }

  function deliver(n) { if (food && n > 0) food.give(n); }

  /** Two short lines per face for the dig ring (hud.setDig), or null. */
  function faceNote(id, starved) {
    if (starved) return ['plus de', 'nourriture'];
    const n = lyingAt(id);
    if (n > ECON.SLOW_AT) return [`déblais ${n} :`, 'front ralenti'];
    return null;
  }

  function update(dt) {
    if (state.msgT > 0) { state.msgT -= dt; if (state.msgT <= 0) state.msg = null; }
  }

  return {
    state, dug, slow, lyingAt, totalLying, takePellet, putBack, deposit, pileNear, pileAtFace,
    setAnchors, dropPoint, mouthPoint, exitPoint, chargeHand, deliver, faceNote, say, update, stock,
    NO_FOOD: noFood,
  };
}

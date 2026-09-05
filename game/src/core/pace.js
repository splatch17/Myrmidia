/* ==========================================================================
   Test pace — one switch that shortens every wait in the game.

   The project is in its test-and-debug phase and the tuning is not: a clutch
   costs five hauled units, an egg takes 22 seconds, the first gallery takes 75
   digger-seconds. Those are the numbers a player should meet. They are also
   several minutes between "I changed something" and "I can see whether it
   worked", which is the wrong cost to pay dozens of times a session.

   So the durations and the prices stay where they belong — in the systems that
   own them — and this file scales them. Nothing here decides what a clutch
   costs; it decides how much of that cost is charged while we are testing.

   WHY A MULTIPLIER AND NOT A SET OF DEBUG CONSTANTS. A second set of numbers
   is a second thing to keep in step, and the one that is not being played is
   the one that silently rots. One multiplier cannot rot: if the real cost
   changes, the test cost follows it.

   ON BY DEFAULT, for now, and that is a deliberate temporary. The line that
   turns it off is one line, and PROGRESS.md records that it has to be flipped
   before anyone judges the game's actual rhythm — a five-second gallery is not
   a design, it is a debugger.
   ========================================================================== */

const STORE = 'myrmidia.testPace';

/* What the switch is worth. Costs collapse to a token amount rather than to
   zero: a free action is not the same code path as a cheap one, and the path
   worth testing is the one the player will walk. */
export const TEST_TIME = 0.12;   // waits run ~8x faster
export const TEST_COST = 0.2;    // five units becomes one

let on = true;
try {
  const raw = localStorage.getItem(STORE);
  if (raw !== null) on = raw === '1';
} catch { /* private window: keep the default */ }

export function testPace() { return on; }

export function setTestPace(v) {
  on = !!v;
  try { localStorage.setItem(STORE, on ? '1' : '0'); } catch { /* ignore */ }
}

/** Scale a duration in seconds. */
export function paceTime(seconds) { return on ? seconds * TEST_TIME : seconds; }

/** Scale a price in resource units — never below 1, so "bring something back"
 *  stays the shape of the action even at test pace. */
export function paceCost(units) {
  return on ? Math.max(1, Math.round(units * TEST_COST)) : units;
}

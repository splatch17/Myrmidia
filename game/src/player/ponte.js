import { populateNest, getFoundedNest, MAX_BROOD } from '../world/index.js';

/* ==========================================================================
   Laying eggs (design/boucle-de-jeu.md §2) — the step
   design/ressources-et-fondation.md §7a says has to be what opens the day,
   not `foundNest()` itself: "foundNest() ne déclenche pas la bascule ; il
   ouvre la séquence. La bascule est déclenchée par l'événement de ponte."
   main.js's advanceFoundedMix() used to start the fade the instant a nest
   existed — wrong per that arbitration, and fixed alongside this file by
   reading getFoundedNest().brood instead of nestOrigin().

   populateNest(n) already exists and already reveals a clutch's mesh and
   lamp (world/founding.js, #12) — nothing here touches geometry, this module
   only decides *when* n should grow and what it costs, then calls it.

   Scope cut, on purpose: an egg is laid and revealed in the same instant.
   No incubation timer, no hatching into a worker. boucle-de-jeu.md §2 wants
   the 3 prototyped worker NPCs to eventually be the *result* of a first
   clutch, but there is no spawnable worker entity to hand off to yet — a
   timer that ends in nothing would be worse than no timer. That is the next
   slice, not this one.

   Positional gate: proximity to the nest's *mouth* (surface), not its
   chamber floor deep underground. Whether the queen can actually walk down
   into a freshly founded chamber is PROGRESS.md's defect #1 — unseen,
   possibly broken, nobody has played past founding yet. Gating on the mouth
   keeps this feature's correctness independent of that unresolved question;
   move the gate underground once #1 is confirmed working on a capture.
   ========================================================================== */

export const PONTE_COST = 3;        // stored units per egg — untuned, first pass
export const PONTE_SECONDS = 2.5;   // held, same shape as harvest.js/founding.js
export const PONTE_RADIUS = 16;     // same order of magnitude as CACHE_RADIUS

/** How many clutches are down, 0 while nothing is founded. */
export function broodCount() {
  const nest = getFoundedNest();
  return nest ? nest.brood : 0;
}

/**
 * Can she lay here, now? Pure — the interaction ladder resolves it every
 * frame, same discipline as canFound()/canFoundAt(). `stock` is the
 * granary's current total (harvest.stock()), passed in rather than read
 * here so this file never reaches into harvest.js's state directly.
 */
export function canPonte(ant, stock) {
  const nest = getFoundedNest();
  if (!nest) return { ok: false, reason: 'not-founded' };
  if (nest.brood >= MAX_BROOD) return { ok: false, reason: 'full' };
  const d = Math.hypot(nest.mouth.x - ant.x, nest.mouth.z - ant.z);
  if (d > PONTE_RADIUS) return { ok: false, reason: 'far' };
  if (stock < PONTE_COST) return { ok: false, reason: 'resources' };
  return { ok: true };
}

/**
 * Commit the lay: reveal the next clutch. Caller (interaction.js) has
 * already checked canPonte() and spent PONTE_COST off the pile — this only
 * asks the world to reveal one more, and reports whether it actually did.
 */
export function layEgg() {
  const nest = getFoundedNest();
  if (!nest) return { ok: false, laid: 0 };
  const before = nest.brood;
  const after = populateNest(before + 1);
  return { ok: after > before, laid: after };
}

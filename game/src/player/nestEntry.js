/* ==========================================================================
   player/nestEntry.js — descending into / climbing back out of the founded
   nest's own shaft (#58, contract §8a/§8b: "entrer dans le nid fondé — étape
   3/4"). Atta's world/founding.js half of this ticket publishes two pure
   functions, foundedNestEntry() (a straight but TILTED segment from the
   crater rim down to the chamber floor) and foundedNestFloorY() (the one
   true floor height inside the dug volume); this file is the queen's own
   half — the state machine that decides when she is standing over the hole,
   walks (falls) her down the segment over a real duration, and later walks
   her back up it.

   PURE MODULE, same discipline as player/dig.js (#57), player/forage.js
   (#37), player/brood.js (t.10), core/spatialIndex.js and core/entities.js:
   no THREE, no DOM, no import of world/** or of any other player/** module,
   and NOTHING imported at all. Everything this file needs — the entry
   segment itself, how to clamp/floor a point once inside, how to blend back
   onto the lawn's own height on the way out, how fast this particular body
   travels the shaft — arrives through `ctx`, built fresh every frame by the
   caller (player/movement.js). That is what lets scripts/test-logic.mjs
   import this file directly and drive it against a hand-written fake entry,
   no loader hook, no world/founding.js stub — see dig.js's own header for
   why that is worth the discipline.

   THE CYCLE is OUTSIDE -> DESCENDING -> INSIDE -> ASCENDING -> OUTSIDE, four
   explicit states rather than a single "am I inside" boolean, because the
   transit itself is not instantaneous (design/boucle-de-jeu.md §4's own
   "une durée plutôt qu'instantanée", already the rule for a chantier's own
   dig — contract §8b applies the same idea to a descent) and is not steered
   by the player at all while it is happening:
     OUTSIDE     ordinary ground, nothing to do here — the caller keeps
                 driving her with its own containSurface()/groundY() branch.
                 Watches her own (x, z) against entry.top for the trigger.
     DESCENDING  x, y AND z are read directly off the segment top->bottom,
                 advanced by a real speed over a real duration (see below);
                 no lateral freedom, no player steering — she is being drawn
                 down the shaft, not walking it.
     INSIDE      ordinary steering resumes, but contain()/floorAt() (contract
                 §8a's own protocol: contain() first, floorAt() second) stand
                 in for containSurface()/groundY(). Watches her own clamped
                 (x, z) against entry.bottom for the return trigger.
     ASCENDING   the mirror of DESCENDING, t running back from 1 to 0.

   NO KEY IS SPENT ON THIS (contract's own requirement). Both transitions are
   proximity triggers — stepping into the crater's own footprint starts the
   fall, walking back under the shaft inside the chamber starts the climb —
   because the interaction ladder (player/interaction.js, E) already carries
   climb/harvest/drop/found/dig and a sixth meaning competing for the same
   key was judged worse than an automatic trigger for a transit that, once
   started, the player does not steer anyway.

   HYSTERESIS, NOT A SINGLE SHARED RADIUS (the ticket's own explicit demand,
   and the one real difference from dig.js's/forage.js's own "arrival"
   checks). dig.js gets away with ONE radius per direction because a digger
   is frozen in place while DIG-ging and RETURN-ing foragers don't hover at
   the depot boundary — their own distance-to-target never revisits the
   threshold on its own. The queen does exactly that here: DESCENDING always
   ends AT entry.bottom (distance 0 from the very trigger point ASCENDING
   would fire on), and ASCENDING always ends AT entry.top (distance 0 from
   DESCENDING's own trigger point) — a single shared radius would send her
   straight back the way she came the instant she arrives. Each of OUTSIDE
   and INSIDE therefore carries its own `armed` latch: on arrival, armed is
   set false, and the OTHER transition cannot fire until she has walked
   clear of the trigger radius (entry.r) by a further body-width-scaled
   margin (ARM_MARGIN_FACTOR * bodyR, the same "derive the margin from the
   body, never a literal" rule as dig.js's own DEFAULT_ARRIVE_FACTOR) and
   re-armed. Only then can the trigger radius fire again.

   WHERE THE SPEED LIVES (contract §8b). Not in world/founding.js: a
   descent's pace is a property of the body doing the descending, so
   player/avatar.js's FOUNDING_QUEEN.nestDescentSpeed, world units per
   second, handed through by the caller as `ctx.descentSpeed`. Converted here
   with the segment's OWN length (`ctx.entry().top`/`.bottom`, fresh every
   call, never cached) — dFraction-of-the-path = descentSpeed*dt/pathLength,
   exactly contract §7/§8b's own pattern for advanceDig()'s dFraction. A body
   with no cadence at all (descentSpeed <= 0, or the segment degenerating to
   zero length) finishes the transit in a single frame rather than freezing
   the controller forever in a state with no lateral freedom at all — the
   opposite failure mode from dig.js's own "digSpeed<=0 never advances"
   (there, getting stuck doing nothing is safe because a digger still has a
   goal/state a caller can reassign; here, a stuck DESCENDING/ASCENDING body
   has no wish, no steering and no other way out).

   surfaceY(), THE FOURTH CALLBACK. Used exactly once, on the very last
   sample of ASCENDING: buildShell()'s crater lip sits RIM_H (1.6 units)
   above terrain.groundY() at the same (x, z) (the mound is drawn geometry,
   not a change to the terrain heightfield), so landing exactly on
   entry.top.y and then handing control back to the ordinary surface branch
   next frame — which reads groundY()/surfaceY() exclusively — would produce
   a one-frame vertical pop the size of that gap. Every OTHER sample of the
   ascent still follows the true tilted segment (contract §8a): only the
   frame that hands control back trades geometric purity for a seamless
   join, which is squarely a controller-continuity concern, not a camera or
   rendering one.
   ========================================================================== */

export const NEST_ENTRY_STATE = {
  OUTSIDE: 'outside',
  DESCENDING: 'descending',
  INSIDE: 'inside',
  ASCENDING: 'ascending',
};

/** Hysteresis margin, in body-widths, added to entry.r to get the distance a
 *  body must retreat past the trigger radius before that trigger can fire
 *  again — see the header. Not a distance of its own; it only ever matters
 *  as a factor of the body doing the travelling (PROGRESS.md piège #6). */
export const DEFAULT_ARM_MARGIN_FACTOR = 1.0;

export function createNestEntryState() {
  return { state: NEST_ENTRY_STATE.OUTSIDE, t: 0, armed: true };
}

function lerpEntry(entry, t) {
  return {
    x: entry.top.x + (entry.bottom.x - entry.top.x) * t,
    y: entry.top.y + (entry.bottom.y - entry.top.y) * t,
    z: entry.top.z + (entry.bottom.z - entry.top.z) * t,
  };
}

function pathLength(entry) {
  return Math.hypot(
    entry.bottom.x - entry.top.x,
    entry.bottom.y - entry.top.y,
    entry.bottom.z - entry.top.z,
  );
}

/** Fraction of the segment covered this frame, off THIS call's own pathLen
 *  (never a cached/copied length — see the header) — the exact conversion
 *  contract §8b describes. A non-positive speed or a degenerate (~0-length)
 *  segment returns 1: finish in one frame rather than latching the
 *  controller into a state with no lateral freedom forever (see header). */
function segStep(pathLen, speed, dt) {
  if (!(pathLen > 1e-6) || !(speed > 0)) return 1;
  return (speed * dt) / pathLen;
}

function advanceDescending(entryState, entry, pathLen, speed, dt) {
  entryState.t = Math.min(1, entryState.t + segStep(pathLen, speed, dt));
  const pos = lerpEntry(entry, entryState.t);
  if (entryState.t >= 1) {
    entryState.state = NEST_ENTRY_STATE.INSIDE;
    // Just arrived exactly at entry.bottom, i.e. distance 0 from the very
    // point that arms/fires the return trip — must walk clear of it first.
    entryState.armed = false;
  }
  return { state: entryState.state, pos };
}

function advanceAscending(entryState, entry, pathLen, speed, dt, ctx) {
  entryState.t = Math.max(0, entryState.t - segStep(pathLen, speed, dt));
  let pos = lerpEntry(entry, entryState.t);
  if (entryState.t <= 0) {
    entryState.state = NEST_ENTRY_STATE.OUTSIDE;
    // Symmetric reasoning to advanceDescending()'s own armed=false above.
    entryState.armed = false;
    // See the header's note on surfaceY(): blend the handoff frame onto the
    // real lawn height instead of the shaft's own nominal rim height.
    if (ctx && typeof ctx.surfaceY === 'function') {
      const sy = ctx.surfaceY(pos.x, pos.z);
      if (Number.isFinite(sy)) pos = { x: pos.x, y: sy, z: pos.z };
    }
  }
  return { state: entryState.state, pos };
}

/**
 * Advance the nest-entry state machine by one frame. Mutates `entryState` in
 * place — its fields ARE its saved progress, same discipline as dig.js's own
 * update(). Returns `{ state, pos }`:
 *   - `pos` is `{x, y, z}` whenever THIS module is dictating (or has just
 *     finished dictating) the body's position this frame: every frame of
 *     DESCENDING/ASCENDING, and every frame of INSIDE (the clamped/floored
 *     result of contain()/floorAt() — contract §8a's own order — applied to
 *     ctx.x/ctx.z, which the caller is expected to have already advanced
 *     with its own ordinary steering this frame, exactly as it would for the
 *     lawn).
 *   - `pos` is `null` only for OUTSIDE with no trigger this frame: the
 *     caller's ordinary surface branch is the one driving her, unchanged.
 *
 * `ctx` (built fresh every frame by the caller — see player/movement.js):
 *   x, z            the body's current position (read-only here) — for
 *                   OUTSIDE this is wherever ordinary steering already put
 *                   her this frame; for INSIDE, likewise, BEFORE contain()
 *                   clamps it
 *   entry()         -> {top:{x,y,z}, bottom:{x,y,z}, r} | null — the world's
 *                   own §8a function, called fresh every frame (never cached
 *                   across calls, so a nest founded/reset mid-session is
 *                   never read stale)
 *   contain(x, z)   -> [x, z] | null — the world's own containFoundedNest();
 *                   only called while INSIDE. A null (nest vanished under
 *                   her) recovers to OUTSIDE rather than crashing or freezing
 *   floorAt(x, z)   -> number — the world's own foundedNestFloorY(), called
 *                   ONLY on the already-contain()-ed point (contract §8a)
 *   surfaceY(x, z)  -> number — the world's own groundY(); see the header
 *   descentSpeed    this body's own cadence, world units per second (see the
 *                   header on what a non-positive value does)
 *   bodyR           collision radius of the body — the hysteresis margin's
 *                   own scale (see DEFAULT_ARM_MARGIN_FACTOR)
 *   armMarginFactor optional override of DEFAULT_ARM_MARGIN_FACTOR
 */
export function update(entryState, ctx, dt) {
  const entry = ctx.entry ? ctx.entry() : null;
  if (!entry) {
    // No founded nest (yet, or ever, in a test): nothing for this file to
    // do, ever — force back to the state a fresh createNestEntryState()
    // starts in so a nest founded LATER in the same session starts clean.
    entryState.state = NEST_ENTRY_STATE.OUTSIDE;
    entryState.t = 0;
    entryState.armed = true;
    return { state: NEST_ENTRY_STATE.OUTSIDE, pos: null };
  }

  const pathLen = pathLength(entry);
  const speed = ctx.descentSpeed ?? 0;
  const bodyR = ctx.bodyR ?? 0;
  const triggerR = entry.r;
  const armR = triggerR + bodyR * (ctx.armMarginFactor ?? DEFAULT_ARM_MARGIN_FACTOR);

  switch (entryState.state) {
    case NEST_ENTRY_STATE.OUTSIDE: {
      const d = Math.hypot(ctx.x - entry.top.x, ctx.z - entry.top.z);
      if (!entryState.armed) {
        if (d > armR) entryState.armed = true;
        return { state: NEST_ENTRY_STATE.OUTSIDE, pos: null };
      }
      if (d > triggerR) return { state: NEST_ENTRY_STATE.OUTSIDE, pos: null };
      entryState.state = NEST_ENTRY_STATE.DESCENDING;
      entryState.t = 0;
      return advanceDescending(entryState, entry, pathLen, speed, dt);
    }

    case NEST_ENTRY_STATE.DESCENDING:
      return advanceDescending(entryState, entry, pathLen, speed, dt);

    case NEST_ENTRY_STATE.INSIDE: {
      if (typeof ctx.contain !== 'function' || typeof ctx.floorAt !== 'function') {
        // Misconfigured ctx (a caller that forgot to wire these): recover to
        // OUTSIDE rather than trusting an un-clamped point — same
        // "defensive, not silent" spirit as dig.js's unknown-state recovery.
        entryState.state = NEST_ENTRY_STATE.OUTSIDE;
        entryState.armed = true;
        return { state: NEST_ENTRY_STATE.OUTSIDE, pos: null };
      }
      const c = ctx.contain(ctx.x, ctx.z);
      if (!c) { // the nest vanished under her feet — recover, don't get stuck
        entryState.state = NEST_ENTRY_STATE.OUTSIDE;
        entryState.armed = true;
        return { state: NEST_ENTRY_STATE.OUTSIDE, pos: null };
      }
      const [cx, cz] = c;
      const cy = ctx.floorAt(cx, cz); // contract §8a: contain() FIRST, floorAt() SECOND
      const d = Math.hypot(cx - entry.bottom.x, cz - entry.bottom.z);
      if (!entryState.armed) {
        if (d > armR) entryState.armed = true;
      } else if (d <= triggerR) {
        entryState.state = NEST_ENTRY_STATE.ASCENDING;
        entryState.t = 1;
        entryState.armed = false;
        return advanceAscending(entryState, entry, pathLen, speed, dt, ctx);
      }
      return { state: NEST_ENTRY_STATE.INSIDE, pos: { x: cx, y: cy, z: cz } };
    }

    case NEST_ENTRY_STATE.ASCENDING:
      return advanceAscending(entryState, entry, pathLen, speed, dt, ctx);

    default:
      // An unknown state (a corrupted restore, say) recovers to OUTSIDE
      // rather than getting stuck silently forever — same rule as dig.js's
      // own default branch.
      entryState.state = NEST_ENTRY_STATE.OUTSIDE;
      entryState.armed = true;
      return { state: NEST_ENTRY_STATE.OUTSIDE, pos: null };
  }
}

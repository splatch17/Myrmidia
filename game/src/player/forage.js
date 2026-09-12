/* ==========================================================================
   player/forage.js — the forager's state machine (#37: "l'éclosion donne des
   ouvrières" — the first hatch has to actually DO something, not just exist).

   PURE MODULE, same discipline as player/brood.js (t.10), core/spatialIndex.js
   (t.11) and core/entities.js (t.12): no THREE, no DOM, no import of world/**
   or of any other player/** module, and nothing imported at all. Everything
   this file needs — where the forager is, what node is nearest, how to take a
   unit off it, where the depot is, how to credit it — is handed in through
   `ctx` by the caller (player/workers.js), which is what lets
   scripts/test-logic.mjs import this file directly, no loader hook, no
   texturing.js stub — see that script's header for why that matters.

   THE CYCLE is SEEK -> HARVEST -> RETURN -> DEPOSIT -> SEEK, four explicit
   states rather than a chain of booleans (design/boucle-de-jeu.md's own
   "récolter -> rapporter" loop, run this time by a body that is not the
   player):
     SEEK    walking toward the nearest reachable node — or standing still if
             there is none right now; a forager with nothing to harvest parks,
             it never errors.
     HARVEST standing over the node, spending `harvestSeconds` per unit — the
             same shape as player/harvest.js's own hold(), timed
             independently (a worker's own pace is not the queen's — see
             DEFAULT_HARVEST_SECONDS below for why this is not a copy).
     RETURN  carrying one unit, walking toward the depot — or standing still
             if there is no depot yet: nobody has dropped anything down, so
             there is nowhere to bring it (design/boucle-de-jeu.md: "le
             premier dépôt fixe le site" — the very first drop is still the
             player's own act, a forager cannot invent a destination).
     DEPOSIT credits the shared cache and falls straight back to SEEK. Kept as
             its own named state (rather than folding the credit into the
             frame RETURN notices arrival) so `forager.state` is always one of
             these four strings, never an implicit "just arrived" the caller
             would have to infer from a one-frame flag.

   NO SIZE CONSTANT IS COPIED FROM ONE BODY. The one geometric judgement this
   file makes on its own — "close enough to a node to start harvesting" —
   reads `node.r + ctx.bodyR * 0.6`, the exact convention player/harvest.js's
   target() and player/resources.js's nodeInReach()/scanForReach() already use
   for the same question (bodyR, not a literal, is what makes a queen "already
   standing over it" while a worker is not). See PROGRESS.md's piège #6: an
   ouvrière's bodyR is roughly half the reine's, and this module's own tests
   (test-logic.mjs) exercise both to prove the arrival radius actually moves
   with the body, not with a copied number.

   WISH SHAPE. update() returns {wishX, wishZ, mag, sprint} — the exact shape
   core/entities.js's goalWish() and player/movement.js's computeWishDir()
   already agree on, so a caller can hand it straight into a `drive` for
   player/entities.js's updateEntity() (see player/workers.js) without a
   third shape entering the codebase.
   ========================================================================== */

export const FORAGE_STATE = { SEEK: 'seek', HARVEST: 'harvest', RETURN: 'return', DEPOSIT: 'deposit' };

/** Seconds spent per unit taken — a worker's own pace, independently tuned
 *  from player/harvest.js's HARVEST_SECONDS (1.8, calibrated against the
 *  queen holding E) because this module cannot import that file at all (see
 *  the header's zero-import rule). player/workers.js passes the REAL
 *  harvest.js value through `ctx.harvestSeconds` in production, so the two
 *  numbers are kept equal by wiring rather than by two people typing 1.8 in
 *  two files — this default only fires for a caller (or a test) that omits
 *  it. */
export const DEFAULT_HARVEST_SECONDS = 1.8;

export function createForageState() {
  return {
    state: FORAGE_STATE.SEEK,
    targetNodeId: null,
    progress: 0,
    /** {kind} she is holding, or null — one unit at a time, same rule as
     *  player/harvest.js's `carrying`. */
    carrying: null,
    /** one-frame events, so a caller (HUD, a bench, a test) can react to a
     *  change without polling for a delta — same discipline as
     *  player/harvest.js's justTook/justDropped. Cleared at the top of every
     *  update() call, set for exactly the frame the thing happens on. */
    justTook: null,
    justDropped: null,
  };
}

const NO_WISH = Object.freeze({ wishX: 0, wishZ: 0, mag: 0, sprint: false });

function toward(tx, tz, x, z) {
  const dx = tx - x, dz = tz - z;
  const d = Math.hypot(dx, dz);
  if (d < 1e-6) return NO_WISH; // already there, to the last bit — avoid a 0/0 direction
  return { wishX: dx / d, wishZ: dz / d, mag: 1, sprint: false };
}

/**
 * Advance the forager by one frame. Mutates `forager` in place — its state
 * fields ARE its saved progress, same discipline as core/entities.js's
 * goalWish() on a patrol goal, which is what lets a caller resume a forager
 * exactly where it left off with no separate "restore" step.
 *
 * `ctx` (built fresh every frame by the caller — see player/workers.js):
 *   x, z                  the forager's current position (read-only here)
 *   bodyR                 collision radius of the body doing the foraging —
 *                         see the header's note on why this can never be a
 *                         literal
 *   findNode(x, z)        -> the nearest node in reach right now, or null
 *   nodeById(id)           -> a node by id, or null — used to re-check a
 *                         latched target before asking findNode() again (same
 *                         "don't flip targets every frame" reasoning as
 *                         player/harvest.js's own target())
 *   takeFromNode(node, qty) -> qty ACTUALLY removed; may be less than asked,
 *                         or 0 if the node was emptied out from under her —
 *                         believed, never assumed (player/harvest.js's rule)
 *   depot                  {x, z} | null — null means nobody has ever dropped
 *                         anything, i.e. there is no cache yet: RETURN parks
 *                         rather than picking a destination of its own
 *   depotRadius            how close counts as "at the depot"
 *   deposit(kind)          credit the shared cache with one unit
 *   harvestSeconds         optional override of DEFAULT_HARVEST_SECONDS
 *
 * Returns {wishX, wishZ, mag, sprint} — NO_WISH while standing still
 * (harvesting, depositing, or with nothing to do).
 */
export function update(forager, ctx, dt) {
  forager.justTook = null;
  forager.justDropped = null;
  const bodyR = ctx.bodyR ?? 0;
  const harvestSeconds = ctx.harvestSeconds ?? DEFAULT_HARVEST_SECONDS;

  switch (forager.state) {
    case FORAGE_STATE.SEEK: {
      // Latched, same reasoning as harvest.js's target(): re-checking
      // "nearest" every frame flips targets between two nearby nodes and
      // resets nothing here, but it would waste a frame's walk every flip.
      let node = forager.targetNodeId != null ? ctx.nodeById(forager.targetNodeId) : null;
      if (!node || node.amount <= 0) node = ctx.findNode(ctx.x, ctx.z);
      forager.targetNodeId = node ? node.id : null;
      if (!node) return NO_WISH; // nothing to harvest anywhere in reach right now — park, don't spin
      const d = Math.hypot(node.x - ctx.x, node.z - ctx.z);
      if (d <= node.r + bodyR * 0.6) {
        forager.state = FORAGE_STATE.HARVEST;
        forager.progress = 0;
        return NO_WISH;
      }
      return toward(node.x, node.z, ctx.x, ctx.z);
    }

    case FORAGE_STATE.HARVEST: {
      const node = ctx.nodeById(forager.targetNodeId);
      if (!node || node.amount <= 0) { // emptied from under her — another forager, the player, anyone
        forager.state = FORAGE_STATE.SEEK;
        forager.targetNodeId = null;
        forager.progress = 0;
        return NO_WISH;
      }
      forager.progress += dt / harvestSeconds;
      if (forager.progress < 1) return NO_WISH;
      // Believe the world, not the request (player/harvest.js's own rule):
      // takeFromNode() may hand back less than asked, or nothing.
      const got = ctx.takeFromNode(node, 1);
      forager.progress = 0;
      if (got <= 0) {
        forager.state = FORAGE_STATE.SEEK;
        forager.targetNodeId = null;
        return NO_WISH;
      }
      forager.carrying = { kind: node.kind };
      forager.justTook = { kind: node.kind, nodeId: node.id };
      forager.state = FORAGE_STATE.RETURN;
      return NO_WISH;
    }

    case FORAGE_STATE.RETURN: {
      if (!ctx.depot) return NO_WISH; // nowhere to bring it yet — see the header on `depot`
      const d = Math.hypot(ctx.depot.x - ctx.x, ctx.depot.z - ctx.z);
      if (d <= (ctx.depotRadius ?? 0)) {
        forager.state = FORAGE_STATE.DEPOSIT;
        return NO_WISH;
      }
      return toward(ctx.depot.x, ctx.depot.z, ctx.x, ctx.z);
    }

    case FORAGE_STATE.DEPOSIT: {
      if (!forager.carrying) { forager.state = FORAGE_STATE.SEEK; return NO_WISH; } // defensive: should never happen
      ctx.deposit(forager.carrying.kind);
      forager.justDropped = { kind: forager.carrying.kind };
      forager.carrying = null;
      forager.state = FORAGE_STATE.SEEK;
      forager.targetNodeId = null;
      return NO_WISH;
    }

    default:
      // An unknown state (a corrupted restore, say) recovers to SEEK rather
      // than getting stuck silently forever.
      forager.state = FORAGE_STATE.SEEK;
      return NO_WISH;
  }
}

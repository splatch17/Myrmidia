/* ==========================================================================
   player/dig.js — the digger's state machine (#57: "la creuseuse creuse" —
   #38 gave the ponte a caste that stands around; this ticket gives her
   something to actually do).

   PURE MODULE, same discipline as player/forage.js (#37), player/brood.js
   (#6/§2), core/spatialIndex.js and core/entities.js: no THREE, no DOM, no
   import of world/** or of any other player/** module, and NOTHING imported
   at all. Everything this file needs — where the digger is, which chantier
   she is assigned to and how far it has progressed, how fast her own body
   digs, how to add to the world's progress — arrives through `ctx`, built
   fresh every frame by the caller (player/workers.js). That is what lets
   scripts/test-logic.mjs import this file directly and drive it against a
   hand-written fake site, no loader hook, no world/founding.js stub.

   THE CYCLE is SEEK_SITE -> DIG -> DONE, three explicit states — the exact
   shape the ticket's own criterion names, and the direct structural cousin
   of forage.js's four (SEEK/HARVEST/RETURN/DEPOSIT): a state that walks, a
   state that works in place, and (unlike forage.js, which loops forever) a
   terminal state, because a chantier is finished once and does not get
   re-dug.
     SEEK_SITE  walking toward the current front de taille of her assigned
                chantier — or standing still if no chantier is assigned right
                now (nest not yet founded, or her index could not be opened
                this frame): she parks, she never invents a destination, same
                rule as forage.js's RETURN with no depot yet.
     DIG        standing at the face, adding to the world's own progress
                every frame she is close enough (see ARRIVAL below) — never
                otherwise. If the face has receded out of her reach (a
                sibling on the same chantier advanced it, or the mesh's own
                throttled rebuild moved it) she drops back to SEEK_SITE and
                walks up to it again, rather than digging from a distance.
     DONE       the chantier she was on reached progress 1. Terminal for this
                round (#57 is "une galerie qui s'allonge", not "et alors on
                lui donne un second chantier") — she parks. A caller free to
                reassign her to a new site would do so by handing a different
                `ctx.site` next frame; nothing here prevents that, this file
                just does not decide it on its own.

   ARRIVAL, NOT A COPIED SIZE (PROGRESS.md piège #6). The one geometric
   judgement this file makes on its own — "close enough to the face to work
   it" — is `bodyR * ARRIVE_FACTOR`, i.e. proportional to the digger's own
   collision radius (handed in as `ctx.bodyR`, never a literal), the same
   idiom forage.js's `node.r + bodyR * 0.6` uses for its own arrival check. A
   digger with a bigger body naturally settles further back from the wall
   than a smaller one would, without either file needing to know the other's
   number.

   dFraction = digSpeed * dt / site.length — contract §7's own conversion,
   read from `ctx.site.length` (the world's own number, refreshed every
   frame via the site object the caller hands in) rather than from a copied
   DIG_GALLERY_LEN. `ctx.digSpeed` is the digger's own cadence in world units
   per second (player/avatar.js's DIGGER.digSpeed, handed through by the
   caller) — a body with no cadence at all (`digSpeed <= 0`, e.g. a WORKER
   profile with no `digSpeed` field, misrouted here by mistake) never calls
   `ctx.advanceDig`, which is what makes "a forager does not dig" true by
   construction rather than by a caller remembering to keep her out of this
   file.

   WISH SHAPE. update() returns {wishX, wishZ, mag, sprint} — forage.js's
   exact shape, itself core/entities.js's goalWish() shape, so a caller can
   feed it straight into a `drive` for player/entities.js's updateEntity()
   (see player/workers.js) with no third shape entering the codebase.
   ========================================================================== */

export const DIG_STATE = { SEEK_SITE: 'seek_site', DIG: 'dig', DONE: 'done' };

/** Multiplier on `ctx.bodyR` for "close enough to the face to work it" — see
 *  the header. Not a distance of its own; it only ever matters as a factor
 *  of the body doing the digging. */
export const DEFAULT_ARRIVE_FACTOR = 1.4;

export function createDigState() {
  return {
    state: DIG_STATE.SEEK_SITE,
    /** one-frame events, cleared at the top of every update() call, same
     *  discipline as forage.js's justTook/justDropped — a caller (HUD, a
     *  test) can react to a transition without polling for a delta. */
    justArrived: null,
    justFinished: null,
  };
}

const NO_WISH = Object.freeze({ wishX: 0, wishZ: 0, mag: 0, sprint: false });

function toward(tx, tz, x, z) {
  const dx = tx - x, dz = tz - z;
  const d = Math.hypot(dx, dz);
  if (d < 1e-6) return NO_WISH; // already there, to the last bit — avoid a 0/0 direction
  return { wishX: dx / d, wishZ: dz / d, mag: 1, sprint: false };
}

/** The point along the chantier's own axis where digging happens right now:
 *  the mouth, advanced `progress * length` along `dir` — never anything this
 *  file remembers on its own, always recomputed from the site object the
 *  caller hands in this frame, so a face that moved (a sibling digger, or
 *  the world's own throttled rebuild) is never read stale. */
function frontOf(site) {
  const dug = Math.max(0, Math.min(1, site.progress)) * site.length;
  return { x: site.mouth.x + site.dir.x * dug, z: site.mouth.z + site.dir.z * dug };
}

/**
 * Advance the digger by one frame. Mutates `digger` in place — its state
 * fields ARE its saved progress, same discipline as forage.js's own update().
 *
 * `ctx` (built fresh every frame by the caller — see player/workers.js):
 *   x, z             the digger's current position (read-only here)
 *   bodyR            collision radius of the body doing the digging — see
 *                    the header's note on why this can never be a literal
 *   site             the chantier she is assigned to right now: { id, mouth:
 *                    {x,y,z}, dir:{x,z}, length, r, progress } (the exact
 *                    shape design/api-monde-gameplay.md §7 documents), or
 *                    `null` if none is assigned this frame (nest not
 *                    founded, index refused, ...) — SEEK_SITE and DIG both
 *                    park rather than inventing a destination.
 *   digSpeed         her own cadence, world units per second (0/undefined
 *                    means she never advances anything — see the header)
 *   advanceDig(id, dFraction) -> { ok, progress, done, reason? } — the
 *                    world's own §7 function, called with EXACTLY the
 *                    fraction this frame earned, never a lump sum
 *   arriveFactor     optional override of DEFAULT_ARRIVE_FACTOR
 *
 * Returns {wishX, wishZ, mag, sprint} — NO_WISH while standing still
 * (working the face, done, or with nothing to do).
 */
export function update(digger, ctx, dt) {
  digger.justArrived = null;
  digger.justFinished = null;
  const bodyR = ctx.bodyR ?? 0;
  const arriveR = bodyR * (ctx.arriveFactor ?? DEFAULT_ARRIVE_FACTOR);

  switch (digger.state) {
    case DIG_STATE.SEEK_SITE: {
      if (!ctx.site) return NO_WISH; // nothing assigned right now — park, don't spin
      const front = frontOf(ctx.site);
      const d = Math.hypot(front.x - ctx.x, front.z - ctx.z);
      if (d <= arriveR) {
        digger.state = DIG_STATE.DIG;
        digger.justArrived = { siteId: ctx.site.id };
        return NO_WISH;
      }
      return toward(front.x, front.z, ctx.x, ctx.z);
    }

    case DIG_STATE.DIG: {
      if (!ctx.site) { digger.state = DIG_STATE.SEEK_SITE; return NO_WISH; } // lost her assignment
      if (ctx.site.progress >= 1) {
        digger.state = DIG_STATE.DONE;
        digger.justFinished = { siteId: ctx.site.id };
        return NO_WISH;
      }
      const front = frontOf(ctx.site);
      const d = Math.hypot(front.x - ctx.x, front.z - ctx.z);
      if (d > arriveR) {
        // The face moved out of reach since she last checked (a sibling's
        // own advanceDig(), or the throttled mesh catching up) — walk back
        // up to it rather than crediting progress from a distance. This is
        // the one line the ticket's "ne creuse pas tant qu'elle n'est pas
        // arrivée" criterion is actually testing.
        digger.state = DIG_STATE.SEEK_SITE;
        return NO_WISH;
      }
      const digSpeed = ctx.digSpeed ?? 0;
      if (digSpeed <= 0) return NO_WISH; // no cadence of her own — never advance anything (this is what makes "a worker does not dig" true by construction)
      const dFraction = (digSpeed * dt) / ctx.site.length; // contract §7's conversion, off the world's own length, never a copied constant
      const res = ctx.advanceDig(ctx.site.id, dFraction);
      if (res && res.done) {
        digger.state = DIG_STATE.DONE;
        digger.justFinished = { siteId: ctx.site.id };
      }
      return NO_WISH;
    }

    case DIG_STATE.DONE:
      return NO_WISH;

    default:
      // An unknown state (a corrupted restore, say) recovers to SEEK_SITE
      // rather than getting stuck silently forever.
      digger.state = DIG_STATE.SEEK_SITE;
      return NO_WISH;
  }
}

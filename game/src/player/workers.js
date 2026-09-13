import { groundY, openDigSite, advanceDig, DIG_SITES_MAX } from '../world/index.js';
import { spawnEntity, updateEntity, removeEntity, resolveProfile } from './entities.js';
import { WORKER, DIGGER, collideRadius } from './avatar.js';
import { resolveDecorCollision } from './decorCollision.js';
import { buildAntMesh } from './antMesh.js';
import { buildOutlineHull } from '../core/outline.js';
import { nearestNode, takeFromNode, nodeById } from './resources.js';
import { HARVEST_SECONDS, CACHE_RADIUS } from './harvest.js';
import { drainHatched } from './brood.js';
import * as forage from './forage.js';
import * as dig from './dig.js';

/* ==========================================================================
   player/workers.js — the impure half of #37: the first couvée turns into
   ouvrières that forage on their own.

   This is deliberately the same shape as player/entities.js's own header
   describes for the player: forage.js (pure) knows the state machine and
   plain arithmetic; this file resolves ids into real world queries, drives
   the shared updateEntity() (player/entities.js, #36 — THE one update
   function every ant goes through), and builds the mesh each worker needs to
   actually be seen. It never re-implements movement, IK or containment: a
   worker is an entity like any other, walking under the exact same
   stepAnt()/resolveDecorCollision()/containUnderground() the queen does.

   WHY `controlled: true` FOR AN AI. core/entities.js's own header describes
   `controlled` as "true for the ONE entity a real player drives this frame" —
   that sentence describes the one caller that existed when #36 was written,
   not a hard rule updateEntity() enforces: the actual code only branches on
   `entity.controlled && drive` (see player/entities.js). Adding a second
   `goal` type ('forage'/'dig', alongside core/entities.js's existing
   'patrol') is the more literal reading of that header, but it is out of
   this ticket's file scope (core/entities.js is Atta's/the integration's,
   not player/**) and would still have had to reach back into forage.js's/
   dig.js's world-side callbacks somehow. Driving a body with `controlled:
   true` and a `drive` this file computes from forage.update()/dig.update()
   every frame is the same mechanism the player already uses, just fed by a
   state machine instead of a keyboard — it is not a second controller, it is
   the same one with a different `drive` source. Flagged here so the next
   reader does not mistake it for an oversight against that header comment.

   ONE HATCH = ONE BODY, NEVER TWO, NEVER ZERO. spawnFromBrood() drains
   `brood.workersAvailable` (now per caste, see brood.js's #38 header) to
   empty BEFORE spawning anything, via brood.js's own drainHatched() rather
   than reaching into the object here: whatever it read is exactly how many
   spawnEntity() calls happen, no more, no less, per caste, and a second call
   before the next hatch spawns nothing because there is nothing left to
   drain — see test-logic.mjs's dedicated invariant tests.

   #38/#57 — A DIGGER DOES NOT FORAGE, AND NOW SHE ACTUALLY DIGS. #38's
   arbitrage is real (design/castes-et-micro-macro.md §1, PROGRESS.md tour
   14): if a hatched digger ran forage.js exactly like a worker, "pondre des
   creuseuses, c'est ne pas pondre d'ouvrières : creuser plus vite et
   récolter moins" would be false, and the choice at the ponte would cost
   nothing. #38 itself could not yet give her anything positive to do instead
   — a `makePatrolGoal()` out-and-back near the nest mouth stood in, marked
   in that ticket's own text as a placeholder for "the actual digging (a
   tunnel that grows)" being #57's job, not #38's.

   #57 IS THAT JOB, and it settles the decision #38 left open (`controlled:
   false` + a fixed patrol goal, vs. `controlled: true` fed a computed
   drive): a digger is now `controlled: true`, fed a `drive` this file
   computes from dig.update() every frame — EXACTLY the forager's own
   mechanism, just sourced from player/dig.js instead of player/forage.js.
   The reason is dig.js's own front de taille: unlike a fixed a<->b patrol,
   the point a digger has to walk to *moves* as her chantier's progress
   advances (and can jump when a sibling digger on the same chantier — or the
   world's own throttled mesh rebuild — gets there first), which is a
   destination `core/entities.js`'s `goalWish()`/`makePatrolGoal()` has no
   vocabulary for (it only knows two fixed points). Recomputing that moving
   target every frame is exactly what a driven `wish` already does for the
   player and for a forager; teaching the pure patrol-goal machinery a third,
   moving-endpoint goal type would be a second way to express the same thing,
   for one caller, in a file this ticket does not own (core/entities.js). */

// A little scatter around the nest mouth so a whole clutch hatching at once
// (world/founding.js's MAX_BROOD eggs, all laid the same frame, all hatching
// the same frame — see brood.js's tests) does not stack every worker on one
// point. Scaled off the worker's OWN collision radius rather than an
// arbitrary literal (piège #6): "a few body-lengths around the door", not a
// number that stops meaning that the day WORKER.bodyR changes.
const WORKER_BODY_R = collideRadius(WORKER);
const SPAWN_SCATTER_MIN = WORKER_BODY_R * 3;
const SPAWN_SCATTER_SPREAD = WORKER_BODY_R * 7;

// Deterministic scatter, NOT Math.random(): a golden-angle spiral (the
// classic even-packing constant, ~137.5°) spaces any number of simultaneous
// spawns apart without two ever landing on the same ray, and — unlike a coin
// flip — the same swarm always reproduces the same positions, which is what
// lets scripts/test-logic.mjs assert on where a spawned worker ends up
// instead of chasing a moving target. The 5-step radius cycle is cosmetic
// variety, not a search.
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));

/**
 * Builds the swarm manager. `scene` is where each worker's mesh/outline get
 * added — same THREE.Group the player's own ant lives in, one level up
 * (player/index.js).
 */
export function createWorkerSwarm({ scene }) {
  /** { entity, caste: 'worker'|'digger', forage: forage.js's own state (a
   *  forager) or null, dig: dig.js's own state (a digger) or null,
   *  digSiteIndex: which of the DIG_SITES_MAX chantiers a digger is assigned
   *  to (null for a forager), updatePose, group } per live body — exactly
   *  one of `forage`/`dig` is non-null per caste, never both, never neither
   *  for WORKER/DIGGER. The name `workers` predates #38 and now holds both
   *  castes; renaming it is cosmetic churn across this whole file for no
   *  behaviour change, so it is left as-is; `caste`/`countByCaste()` are
   *  what a caller actually branches on. Plain array: a handful of bodies at
   *  a time (bounded by antMesh.js's MAX_ANTS pool, shared with the player),
   *  no need for a map keyed by id — nothing here looks one up by id, only
   *  iterates. */
  const workers = [];

  // Round-robin assignment of a new digger onto one of the DIG_SITES_MAX
  // chantiers (world/founding.js's own cap — read off the barrel, never
  // recopied). Deterministic, not a search: the Nth digger ever spawned
  // (across the swarm's whole life, not reset between hatches) gets index
  // N % DIG_SITES_MAX, so a second/third digger on the same chantier — the
  // sentence the whole caste exists to prove ("plusieurs creuseuses ... vont
  // plus vite") — happens naturally once more diggers exist than chantiers.
  let diggerSeq = 0;

  /**
   * `profile` (avatar.js's WORKER or DIGGER) decides everything caste-
   * specific about the new body: which mesh gets built, and which pure state
   * machine drives her. Both castes are `controlled: true` and fed a `drive`
   * this file computes every frame (forage.update() for a forager,
   * dig.update() for a digger, see update() below) — see this file's header
   * for why a digger is no longer `controlled: false` with a fixed patrol
   * `goal` (that was #38's placeholder; #57 replaces it for real).
   */
  function spawnOne(profile, x, z, yaw, originX, originZ) {
    const y = groundY(x, z);
    const isForager = profile.id === WORKER.id;
    const isDigger = profile.id === DIGGER.id;
    const entity = spawnEntity(profile, x, y, z, { controlled: isForager || isDigger, yaw });
    // Same courtesy player/index.js gives the queen on her own first frame:
    // a spawn point clear for whatever survey chose it can still overlap a
    // pebble or a stem once a body actually stands there. Two resolves
    // settle it (decorCollision.js's own reasoning) before she ever moves.
    resolveDecorCollision(entity, 0);
    resolveDecorCollision(entity, 0);
    entity.y = groundY(entity.x, entity.z);

    const { group, updatePose } = buildAntMesh(profile);
    scene.add(group);
    // Harmless past the very first ant (core/outline.js's own doc: the
    // shell's `count` is a live getter onto the shared pool, so it already
    // outlines every worker spawned after it without a second real shell) —
    // called anyway so this module does not depend on the player having
    // spawned first to have established the outline.
    scene.add(buildOutlineHull(group));

    // Assigned once, at spawn, and never reshuffled afterward: a digger
    // keeps working the same chantier index for her whole life this round
    // (#57 does not ask for reassignment once a chantier is DONE — see
    // player/dig.js's header on its own terminal state).
    const digSiteIndex = isDigger ? diggerSeq++ % DIG_SITES_MAX : null;

    workers.push({
      entity, caste: profile.id,
      forage: isForager ? forage.createForageState() : null,
      dig: isDigger ? dig.createDigState() : null,
      digSiteIndex,
      updatePose, group,
    });
    return entity;
  }

  /**
   * Drain `brood.workersAvailable` exactly, PER CASTE (#38: brood.js's
   * drainHatched() hands back `{ [casteId]: count }`) — every unit becomes
   * one entity of that caste's avatar.js profile (resolveProfile(), the same
   * id->object lookup player/entities.js already uses for everything else),
   * scattered around (originX, originZ) — the nest's surface origin, i.e.
   * she is born coming OUT of the ground, not appearing in mid air over the
   * lawn. Drained to empty before any spawnOne() call, so this function is
   * idempotent between hatches: called every frame (as player/index.js
   * does), it spawns nothing extra on the frames nothing hatched, and
   * exactly the drained count (any mix of castes) on the frame something did.
   */
  function spawnFromBrood(brood, originX, originZ) {
    const drained = drainHatched(brood);
    let total = 0;
    for (const casteId of Object.keys(drained)) {
      const n = drained[casteId] || 0;
      const profile = resolveProfile(casteId);
      for (let i = 0; i < n; i++) {
        // `workers.length` (not the loop's own `i`) so separate hatches, of
        // either caste, keep advancing the same spiral instead of both
        // starting over at angle 0 — see GOLDEN_ANGLE's doc.
        const seq = workers.length;
        const ang = seq * GOLDEN_ANGLE;
        const rad = SPAWN_SCATTER_MIN + (seq % 5) / 5 * SPAWN_SCATTER_SPREAD;
        spawnOne(profile, originX + Math.cos(ang) * rad, originZ + Math.sin(ang) * rad, ang, originX, originZ);
        total++;
      }
    }
    return total;
  }

  // digSummary()'s backing store — rebuilt from scratch every update() call
  // (see below), read by player/index.js's HUD line. Never the other way
  // round: the HUD never drives a query of its own, it only reads what this
  // frame's real digging already computed.
  let digSummarySnapshot = [];

  /**
   * One frame for every live body. A forager (w.forage set) asks forage.js
   * where she wants to go; a digger (w.dig set) asks dig.js the same
   * question — both feed the answer as a `drive` into updateEntity() via the
   * exact same mechanism (see this file's header on why both castes are
   * `controlled: true` now). antMesh's updatePose() then writes this frame's
   * IK into whichever body's mesh instances.
   *
   * `cache` is player/harvest.js's own `state.cache` — {x,y,z,items,total} or
   * null before the player's first drop (see forage.js's RETURN state: a
   * worker with no cache to aim at parks rather than picking a spot of her
   * own, same rule as the player's own carry-and-drop loop). Unused by a
   * digger, who never reads `cache` at all.
   */
  function update(dt, elapsed, cache) {
    const depot = cache ? { x: cache.x, z: cache.z } : null;
    // index -> { progress, diggers } for the HUD, accumulated as the loop
    // below already visits every digger and already asks the world for her
    // chantier's live state — a second pass over `workers` just to summarize
    // would repeat exactly the same openDigSite() calls for no reason.
    const digAgg = new Map();
    for (const w of workers) {
      if (w.forage) {
        const bodyR = collideRadius(w.entity.profile);
        const ctx = {
          x: w.entity.x, z: w.entity.z, bodyR,
          // nearestNode(), not nodeInReach(): a forager needs a direction to
          // walk from anywhere on the map, not just an answer to "is one
          // already under my feet" (see resources.js's own doc on the
          // difference). forage.js's own arrival check (node.r + bodyR*0.6)
          // is what decides when she is close enough to stop and harvest.
          findNode: nearestNode,
          nodeById,
          takeFromNode,
          depot,
          depotRadius: CACHE_RADIUS,
          deposit(kind) {
            // The SAME reserve the player carries to (design/api-monde-
            // gameplay.md's "player owns the loop", not a second counter) —
            // `cache` cannot be null here because forage.js's RETURN state
            // never reaches DEPOSIT while ctx.depot is null.
            cache.items[kind] = (cache.items[kind] || 0) + 1;
            cache.total += 1;
          },
          harvestSeconds: HARVEST_SECONDS, // wired, not copied — see forage.js's header
        };
        const wish = forage.update(w.forage, ctx, dt);
        updateEntity(w.entity, dt, {
          wish: { wishX: wish.wishX, wishZ: wish.wishZ },
          intent: { mag: wish.mag, sprint: wish.sprint },
          climbAxis: 0, // no forager climbs this round (see the module header)
        });
      } else if (w.dig) {
        const bodyR = collideRadius(w.entity.profile);
        // openDigSite() on an already-open index is a no-op that returns the
        // live site (world/founding.js's own doc) — cheap, and the only way
        // to read this frame's progress rather than a stale copy. `ok: false`
        // (nest not yet founded) becomes `site: null`, which is dig.js's own
        // "nothing assigned, park" case, not an error this file has to guard.
        const opened = openDigSite(w.digSiteIndex);
        const site = opened.ok ? opened.site : null;
        if (site) {
          const agg = digAgg.get(w.digSiteIndex) || { progress: site.progress, diggers: 0 };
          agg.progress = site.progress;
          agg.diggers += 1;
          digAgg.set(w.digSiteIndex, agg);
        }
        const ctx = {
          x: w.entity.x, z: w.entity.z, bodyR, site,
          digSpeed: w.entity.profile.digSpeed ?? 0, // absent on WORKER on purpose — see avatar.js/dig.js
          advanceDig,
        };
        const wish = dig.update(w.dig, ctx, dt);
        updateEntity(w.entity, dt, {
          wish: { wishX: wish.wishX, wishZ: wish.wishZ },
          intent: { mag: wish.mag, sprint: wish.sprint },
          climbAxis: 0, // no digger climbs this round either
        });
      } else {
        // Neither forage nor dig state: a future caste with no AI of its own
        // yet, or a body an integration test built by hand. Falls back to
        // goalWish() via updateEntity()'s own `controlled` branch rather than
        // erroring — dead code for WORKER/DIGGER today, kept for whatever
        // #34/#8 adds next.
        updateEntity(w.entity, dt, null);
      }
      w.updatePose(w.entity, w.entity.legState, elapsed);
      w.group.position.set(0, 0, 0); // parts are already placed in world space (antMesh.js)
    }
    digSummarySnapshot = Array.from(digAgg.entries())
      .map(([index, a]) => ({ index, progress: a.progress, diggers: a.diggers }))
      .sort((a, b) => a.index - b.index);
  }

  function count() { return workers.length; }

  /** `[{ index, progress, diggers }]`, one entry per chantier currently
   *  worked by at least one live digger, sorted by index — the ticket's own
   *  HUD criterion ("quel chantier, à combien de %, combien de creuseuses
   *  dessus"). Empty before anyone is digging (nest not founded, or no
   *  digger has hatched yet); a chantier a digger finished and left DONE on
   *  still reports here as long as she is still standing there (her own
   *  `progress` simply reads 1). */
  function digSummary() { return digSummarySnapshot; }

  /** Population by caste id, e.g. `{ worker: 3, digger: 1 }` — #38's HUD
   *  criterion ("un compteur de population par caste"). Absent castes are
   *  simply absent keys, same convention as brood.js's workersAvailable. */
  function countByCaste() {
    const out = {};
    for (const w of workers) out[w.caste] = (out[w.caste] || 0) + 1;
    return out;
  }

  function dispose() {
    for (const w of workers) removeEntity(w.entity);
    workers.length = 0;
  }

  return { spawnFromBrood, update, count, countByCaste, digSummary, dispose, workers };
}

import { groundY } from '../world/index.js';
import { spawnEntity, updateEntity, removeEntity, resolveProfile, makePatrolGoal } from './entities.js';
import { WORKER, collideRadius } from './avatar.js';
import { resolveDecorCollision } from './decorCollision.js';
import { buildAntMesh } from './antMesh.js';
import { buildOutlineHull } from '../core/outline.js';
import { nearestNode, takeFromNode, nodeById } from './resources.js';
import { HARVEST_SECONDS, CACHE_RADIUS } from './harvest.js';
import { drainHatched } from './brood.js';
import * as forage from './forage.js';

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
   `goal` type ('forage', alongside core/entities.js's existing 'patrol') is
   the more literal reading of that header, but it is out of this ticket's
   file scope (core/entities.js is Atta's/the integration's, not player/**)
   and would still have had to reach back into forage.js's world-side
   callbacks somehow. Driving a worker with `controlled: true` and a `drive`
   this file computes from forage.update() every frame is the same mechanism
   the player already uses, just fed by a state machine instead of a
   keyboard — it is not a second controller, it is the same one with a
   different `drive` source. Flagged here so the next reader does not mistake
   it for an oversight against that header comment.

   ONE HATCH = ONE BODY, NEVER TWO, NEVER ZERO. spawnFromBrood() drains
   `brood.workersAvailable` (now per caste, see brood.js's #38 header) to
   empty BEFORE spawning anything, via brood.js's own drainHatched() rather
   than reaching into the object here: whatever it read is exactly how many
   spawnEntity() calls happen, no more, no less, per caste, and a second call
   before the next hatch spawns nothing because there is nothing left to
   drain — see test-logic.mjs's dedicated invariant tests.

   #38 — A DIGGER DOES NOT FORAGE. This is a deliberate arbitrage
   (design/castes-et-micro-macro.md §1, PROGRESS.md tour 14), not an
   oversight: if a hatched digger ran forage.js exactly like a worker, the
   sentence that justifies the whole ticket — "pondre des creuseuses, c'est
   ne pas pondre d'ouvrières : creuser plus vite et récolter moins" — would
   be false, and the choice at the ponte would cost nothing. A digger is
   therefore spawned `controlled: false` with a `goal` (core/entities.js's
   existing makePatrolGoal(), an out-and-back with a pause at each end) INSTEAD
   of `controlled: true` fed a `drive` computed from forage.js every frame —
   the same updateEntity() (player/entities.js, #36) simply takes its other
   branch (goalWish() rather than a driven wish), so this is still exactly
   one update function for every body, worker, digger or player.
   THE ACTUAL DIGGING (a tunnel that grows, a chamber that gets bigger) is
   NOT this round's job — it is the ticket's own "étape 2/4", not yet an
   open issue. The patrol goal below is a placeholder for that: it makes a
   digger stand near the nest mouth and pace a short stretch of it, sober and
   readable, rather than doing nothing (frozen) or doing a worker's job
   (foraging). THE BRANCH WHERE REAL DIGGING WOULD PLUG IN is marked with a
   comment at spawnOne()'s goal construction, below. */

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
  /** { entity, caste: 'worker'|'digger', forage: forage.js's own state or
   *  null for a digger (#38), updatePose, group } per live body — the name
   *  `workers` predates #38 and now holds both castes; renaming it is
   *  cosmetic churn across this whole file for no behaviour change, so it is
   *  left as-is; `caste`/`countByCaste()` are what a caller actually
   *  branches on. Plain array: a handful of bodies at a time (bounded by
   *  antMesh.js's MAX_ANTS pool, shared with the player), no need for a map
   *  keyed by id — nothing here looks one up by id, only iterates. */
  const workers = [];

  // Seconds paused at each end of a digger's patrol — the sober-and-legible
  // idle #38 asks for, not a size, so no body radius is involved (piège #6
  // does not apply to a pace, only to a distance/extent).
  const DIGGER_PATROL_WAIT = 1.4;

  /**
   * `profile` (avatar.js's WORKER or DIGGER) decides everything caste-
   * specific about the new body: which mesh gets built, and how she moves
   * once she exists. A forager (profile === WORKER) is `controlled: true`
   * and fed a `drive` computed from forage.js every frame (see update()
   * below) — a digger is `controlled: false` with a patrol `goal` baked in
   * at spawn instead, because #38's arbitrage is "she does not forage", not
   * "she forages more slowly": giving her the same drive machinery with a
   * different destination would still be foraging in every way that matters
   * to the ticket's sentence.
   */
  function spawnOne(profile, x, z, yaw, originX, originZ) {
    const y = groundY(x, z);
    const isForager = profile.id === WORKER.id;
    const entity = spawnEntity(profile, x, y, z, isForager
      ? { controlled: true, yaw }
      : {
          controlled: false,
          yaw,
          // #38 STEP 2/4 PLACEHOLDER: real digging (a tunnel that grows
          // toward `goal`, a new chamber at the far end) plugs in HERE —
          // this patrol is a stand-in "she is busy near the mouth" idle,
          // not a simulation of excavation. makePatrolGoal() is
          // core/entities.js's existing out-and-back (#36), reused as-is
          // rather than teaching that pure module a new goal type for one
          // caller — see this file's header.
          goal: makePatrolGoal(originX, originZ, x, z,
            { arriveR: collideRadius(profile), waitFor: DIGGER_PATROL_WAIT }),
        });
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

    workers.push({
      entity, caste: profile.id,
      forage: isForager ? forage.createForageState() : null,
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

  /**
   * One frame for every live body. A forager (w.forage set) asks forage.js
   * where she wants to go and feeds that as a `drive` into updateEntity() —
   * a digger (w.forage null, #38) has no drive of her own to build: she was
   * given a patrol `goal` at spawn, and updateEntity() (player/entities.js,
   * #36) already knows to fall back to goalWish() for any entity that is not
   * `controlled` — same shared function, no second call site, no digger-
   * specific branch inside updateEntity() itself. antMesh's updatePose()
   * then writes this frame's IK into whichever body's mesh instances.
   *
   * `cache` is player/harvest.js's own `state.cache` — {x,y,z,items,total} or
   * null before the player's first drop (see forage.js's RETURN state: a
   * worker with no cache to aim at parks rather than picking a spot of her
   * own, same rule as the player's own carry-and-drop loop). Unused by a
   * digger, who never reads `cache` at all.
   */
  function update(dt, elapsed, cache) {
    const depot = cache ? { x: cache.x, z: cache.z } : null;
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
      } else {
        // A digger: no drive to build, she is not `controlled` — updateEntity()
        // reads her own `goal` (the patrol set at spawn) via goalWish() on its
        // own. See this file's header for what SHOULD eventually happen here
        // (real digging) instead of pacing.
        updateEntity(w.entity, dt, null);
      }
      w.updatePose(w.entity, w.entity.legState, elapsed);
      w.group.position.set(0, 0, 0); // parts are already placed in world space (antMesh.js)
    }
  }

  function count() { return workers.length; }

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

  return { spawnFromBrood, update, count, countByCaste, dispose, workers };
}

import { groundY } from '../world/index.js';
import { spawnEntity, updateEntity, removeEntity } from './entities.js';
import { WORKER, collideRadius } from './avatar.js';
import { resolveDecorCollision } from './decorCollision.js';
import { buildAntMesh } from './antMesh.js';
import { buildOutlineHull } from '../core/outline.js';
import { nearestNode, takeFromNode, nodeById } from './resources.js';
import { HARVEST_SECONDS, CACHE_RADIUS } from './harvest.js';
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

   ONE HATCH = ONE WORKER, NEVER TWO, NEVER ZERO. spawnFromBrood() drains
   `brood.workersAvailable` to zero BEFORE spawning anything (see its own
   doc): whatever it read is exactly how many spawnEntity() calls happen, no
   more, no less, and a second call before the next hatch spawns nothing
   because there is nothing left to drain — see test-logic.mjs's dedicated
   invariant tests. */

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
  /** { entity, forage: forage.js's own state, updatePose, group } per live
   *  worker. Plain array: a handful of workers at a time (bounded by
   *  antMesh.js's MAX_ANTS pool, shared with the player), no need for a map
   *  keyed by id — nothing here looks a worker up by id, only iterates. */
  const workers = [];

  function spawnOne(x, z, yaw) {
    const y = groundY(x, z);
    const entity = spawnEntity(WORKER, x, y, z, { controlled: true, yaw });
    // Same courtesy player/index.js gives the queen on her own first frame:
    // a spawn point clear for whatever survey chose it can still overlap a
    // pebble or a stem once a body actually stands there. Two resolves
    // settle it (decorCollision.js's own reasoning) before she ever moves.
    resolveDecorCollision(entity, 0);
    resolveDecorCollision(entity, 0);
    entity.y = groundY(entity.x, entity.z);

    const { group, updatePose } = buildAntMesh(WORKER);
    scene.add(group);
    // Harmless past the very first ant (core/outline.js's own doc: the
    // shell's `count` is a live getter onto the shared pool, so it already
    // outlines every worker spawned after it without a second real shell) —
    // called anyway so this module does not depend on the player having
    // spawned first to have established the outline.
    scene.add(buildOutlineHull(group));

    workers.push({ entity, forage: forage.createForageState(), updatePose, group });
    return entity;
  }

  /**
   * Drain `brood.workersAvailable` exactly: every unit it holds becomes one
   * worker entity, scattered around (originX, originZ) — the nest's surface
   * origin, i.e. she is born coming OUT of the ground, not appearing in mid
   * air over the lawn. Drained to zero before any spawnOne() call, so this
   * function is idempotent between hatches: called every frame (as
   * player/index.js does), it spawns nothing extra on the frames nothing
   * hatched, and exactly `n` on the frame `n` eggs did.
   */
  function spawnFromBrood(brood, originX, originZ) {
    const n = brood.workersAvailable;
    brood.workersAvailable = 0;
    for (let i = 0; i < n; i++) {
      // `workers.length` (not the loop's own `i`) so two separate hatches
      // keep advancing the same spiral instead of both starting over at
      // angle 0 — see GOLDEN_ANGLE's doc.
      const seq = workers.length;
      const ang = seq * GOLDEN_ANGLE;
      const rad = SPAWN_SCATTER_MIN + (seq % 5) / 5 * SPAWN_SCATTER_SPREAD;
      spawnOne(originX + Math.cos(ang) * rad, originZ + Math.sin(ang) * rad, ang);
    }
    return n;
  }

  /**
   * One frame for every live worker: forage.js decides where she wants to
   * go, updateEntity() (the #36 common path) actually moves her, antMesh's
   * updatePose() writes this frame's IK into her mesh instances.
   *
   * `cache` is player/harvest.js's own `state.cache` — {x,y,z,items,total} or
   * null before the player's first drop (see forage.js's RETURN state: a
   * worker with no cache to aim at parks rather than picking a spot of her
   * own, same rule as the player's own carry-and-drop loop).
   */
  function update(dt, elapsed, cache) {
    const depot = cache ? { x: cache.x, z: cache.z } : null;
    for (const w of workers) {
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
        climbAxis: 0, // workers never climb this round (see the module header)
      });
      w.updatePose(w.entity, w.entity.legState, elapsed);
      w.group.position.set(0, 0, 0); // parts are already placed in world space (antMesh.js)
    }
  }

  function count() { return workers.length; }

  function dispose() {
    for (const w of workers) removeEntity(w.entity);
    workers.length = 0;
  }

  return { spawnFromBrood, update, count, dispose, workers };
}

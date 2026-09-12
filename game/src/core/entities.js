/* ==========================================================================
   core/entities.js — the list of ants that are not necessarily the player (#36).

   PURE MODULE, same discipline as core/spatialIndex.js: no THREE, no DOM, no
   import of world/** or player/**, and NOTHING imported at all. That is what
   lets scripts/test-logic.mjs pull this file in directly, no loader hook, no
   texturing.js stub — and it is also the actual point of the ticket: an
   entity's *state* has to be describable without reaching for a renderer, a
   world module, or a profile object, so that state is what a save file
   (not built yet, api-monde-gameplay.md §2d — this file does not implement
   one, it just refuses to make one impossible later) would actually store.

   player/entities.js is the thin, impure layer built on top: it resolves a
   `profileId` to the real avatar.js profile object, calls legs.js/
   movement.js, and touches the shared spatial index. This file only knows
   plain data and goal-seeking arithmetic.

   AN ENTITY RECORD (see createEntity()) carries everything legs.js/
   movement.js already read off an "ant" — x/y/z/yaw/speed/travel/bob/
   climb/legsInit/scale, unchanged, so a controlled player and an unpiloted
   worker are the exact same shape once player/entities.js has resolved
   `profileId` to a live `profile` reference — PLUS the three things this
   ticket adds:
     id          for the spatial index and for finding this record again
     controlled  true for the one entity a real player drives this frame
     goal        null, or a plain description of what an unpiloted entity
                 is trying to do (see makePatrolGoal/goalWish below)

   `profileId` stands in for the profile OBJECT everywhere in this file.
   avatar.js's WORKER/FOUNDING_QUEEN happen to carry no THREE references and
   no functions (checked by hand: every field is a number, a hex colour, or
   an array of those), so embedding the object itself would not actually
   break JSON.stringify today. It would still be the wrong thing to store:
   a round-tripped record would carry its own private copy of the leg/body
   tables instead of the one every other entity of that profile shares, and
   it would keep silently "working" the day avatar.js grows a real closure
   (a cached THREE.Vector3, a memoised function) — exactly the kind of thing
   a save file is the wrong place to discover. Keeping the object out of the
   record in the first place is cheaper than auditing it every session. */

let nextId = 1;

/** Test-only: deterministic ids across a fresh run of the harness, so two
 *  `check()`s that print an id don't disagree between runs for no reason. */
export function resetEntityIds(from = 1) { nextId = from; }

export function makeEntityId() { return nextId++; }

/**
 * @param {string} profileId  avatar.js's WORKER.id / FOUNDING_QUEEN.id — a
 *   name, never the object (see the file header)
 */
export function createEntity(profileId, x, y, z, opts = {}) {
  return {
    id: opts.id ?? makeEntityId(),
    profileId,
    x, y, z,
    yaw: opts.yaw ?? 0,
    speed: 0,
    travel: 0,
    bob: 0,
    climb: null,   // null on the ground; {kind,...} while climbing — see climb.js. Unpiloted entities never set this this round (no climb AI yet).
    legsInit: false,
    scale: opts.scale ?? 1,
    controlled: !!opts.controlled,
    goal: opts.goal ?? null,
  };
}

/* ---- goals ---------------------------------------------------------------
   "Go to a point, come back" (the ticket's own phrasing) is the one goal
   type this round needs. It is deliberately a flat, serializable object
   rather than a class or a closure over the entity: `goalWish()` below is a
   pure function of (position, goal, dt), so the goal's own progress (which
   leg of the patrol it is on, how long it is still waiting) is data that
   round-trips with the entity, not state hidden in a timer or a generator. */

/**
 * @param {number} [opts.arriveR] how close counts as "arrived" — the
 *   CALLER's job to size against the body walking it (a worker's
 *   collideRadius is not a queen's, see avatar.js and PROGRESS.md's piège
 *   #6): this file has no profile table of its own to read one from.
 */
export function makePatrolGoal(ax, az, bx, bz, opts = {}) {
  return {
    type: 'patrol',
    a: [ax, az], b: [bx, bz],
    target: 'b',        // which end it is currently walking toward
    waitT: 0,            // seconds left standing still at the end it just reached
    waitFor: opts.waitFor ?? 0.6,
    arriveR: opts.arriveR ?? 2,
  };
}

const NO_WISH = Object.freeze({ wishX: 0, wishZ: 0, mag: 0, sprint: false });

/**
 * Advance `goal` by `dt` (in place — that mutation IS the entity's saved
 * progress: waitT counting down and target flipping at arrival are exactly
 * what a round-tripped copy has to resume, not restart the leg it was on)
 * and report which way the entity should walk.
 *
 * Returns {wishX, wishZ, mag, sprint} in world space, not camera space —
 * an unpiloted entity has no camera to be relative to, it just points at
 * its target — but in the SAME shape movement.js's stepAnt() already reads
 * off a real player's {wish, intent} pair (see computeWishDir() in
 * player/movement.js). That shared shape is what lets one entity-update
 * function drive both the player and an unpiloted worker: see
 * player/entities.js's updateEntity().
 */
export function goalWish(x, z, goal, dt) {
  if (!goal || goal.type !== 'patrol') return NO_WISH;
  if (goal.waitT > 0) {
    goal.waitT = Math.max(0, goal.waitT - dt);
    return NO_WISH;
  }
  const p = goal.target === 'a' ? goal.a : goal.b;
  const dx = p[0] - x, dz = p[1] - z;
  const dist = Math.hypot(dx, dz);
  if (dist <= goal.arriveR) {
    goal.target = goal.target === 'a' ? 'b' : 'a';
    goal.waitT = goal.waitFor;
    return NO_WISH;
  }
  return { wishX: dx / dist, wishZ: dz / dist, mag: 1, sprint: false };
}

/* ---- serialization ---------------------------------------------------- */

/** The serializable snapshot of an entity: a JSON round-trip, named so a
 *  caller (and the test) says what it means instead of calling
 *  JSON.parse(JSON.stringify(...)) inline and hoping nobody ever adds a
 *  THREE field to the live record by accident. Because this module never
 *  imports THREE (it cannot — it imports nothing), nothing it hands back
 *  from createEntity()/makePatrolGoal() can literally contain a THREE
 *  instance; the round-trip below is the same one JSON already does, kept
 *  under one name for callers that want to reason about "a snapshot" rather
 *  than "a live record". */
export function snapshotEntity(e) { return JSON.parse(JSON.stringify(e)); }

/** The inverse: a plain object -> a plain object, structurally identical to
 *  createEntity()'s own shape (same fields, same nesting), ready to resume
 *  ticking with goalWish()/whatever moved it forward before the snapshot. */
export function restoreEntity(snapshot) { return JSON.parse(JSON.stringify(snapshot)); }

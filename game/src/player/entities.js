/* ==========================================================================
   player/entities.js — the impure half of #36, built on core/entities.js.

   core/entities.js knows plain data and goal arithmetic; it cannot touch
   legs.js, the avatar profiles or the shared spatial index, because it
   imports nothing at all (see its header). This file is the layer that
   resolves an entity's `profileId` to the real avatar.js object, drives the
   IK legs, and is — this is the ticket's central requirement — the ONE
   update function every ant goes through, whether a real player is driving
   it this frame (`controlled: true`, fed a `drive` this file did not
   compute itself) or it is on its own with a `goal` (a patrol, currently).
   player/index.js used to inline this for the single ant it knew about
   (computeWishDir/stepAnt/updateLegs, called directly in its update()); that
   inlining is gone, replaced by spawnEntity()+updateEntity() so the player
   becomes the first entry in a list rather than a separate code path — the
   switch micro/macro (#8/#34) this ticket exists to unblock reads that list,
   it does not special-case entry zero.
   ========================================================================== */

import { worldIndex } from '../world/index.js';
import { createEntity, goalWish, snapshotEntity, restoreEntity, makePatrolGoal } from '../core/entities.js';
import { clamp } from '../core/noise.js';
import { WORKER, FOUNDING_QUEEN, collideRadius } from './avatar.js';
import { makeLegState, updateLegs } from './legs.js';
import { computeWishDir, stepAnt } from './movement.js';
import { stepClimb } from './climb.js';

export { makePatrolGoal };

// avatar.js does not (and per its own header should not) index its profiles
// by id — WORKER/FOUNDING_QUEEN are its whole public surface, read by
// object. This is the one place that needs the reverse lookup (a
// `profileId` string -> the object), so it lives here rather than growing
// avatar.js an export nothing else needs.
const PROFILES_BY_ID = { [WORKER.id]: WORKER, [FOUNDING_QUEEN.id]: FOUNDING_QUEEN };
export function resolveProfile(profileId) {
  return PROFILES_BY_ID[profileId] || WORKER;
}

/**
 * Build a live entity: core/entities.js's plain record, plus the two things
 * that cannot survive a JSON round-trip and therefore are never written into
 * it — the real `profile` object (legs.js/movement.js read dozens of fields
 * off it every frame; re-resolving `profileId` on every access would be pure
 * waste) and `legState` (per-leg IK targets, exactly as many entries as
 * `profile.legs`, previously a variable player/index.js kept next to `ant`
 * for the one entity it knew about).
 *
 * `legState` IS plain, JSON-safe data (arrays of numbers) — it is kept off
 * the core record on principle, not because it couldn't round-trip: the
 * point of core/entities.js's shape is "what a save file would store", and a
 * mid-swing foot position is animation state, not save state. A restored
 * entity gets a fresh legState and re-plants its feet on the first frame
 * (legsInit stays false through a restore), same as any newly spawned one.
 */
export function spawnEntity(profile, x, y, z, opts = {}) {
  const rec = createEntity(profile.id, x, y, z, { ...opts, scale: opts.scale ?? profile.scale });
  rec.profile = profile;
  rec.legState = makeLegState(profile);
  worldIndex.insert('ant', rec.id, x, z, collideRadius(profile));
  return rec;
}

export function removeEntity(entity) {
  worldIndex.remove('ant', entity.id);
}

/**
 * The shared per-frame tick. `drive` is only meaningful for a controlled
 * entity and is entirely the caller's to build (player/index.js computes it
 * from real input + the camera rig, exactly as it did before this file
 * existed) — this function does not read the keyboard or a camera, it only
 * routes:
 *   drive.wish     {wishX, wishZ} — world-space desired direction
 *   drive.intent   {mag, sprint}  — how hard, and whether sprinting
 *   drive.climbAxis  forward/back while on a blade/trunk (see climb.js)
 * An uncontrolled entity ignores `drive` completely and asks its own `goal`
 * (core/entities.js's goalWish()) for the same {wish, intent} shape instead
 * — which is exactly what makes this one function rather than two: from
 * here down, movement/legs cannot tell a patrolling worker from a player
 * apart.
 */
export function updateEntity(entity, dt, drive) {
  const useDrive = entity.controlled && drive;
  if (entity.climb) {
    // Climbing is a controlled-only affordance this round (no goal AI enters
    // a climb) — an unpiloted entity is therefore never in this branch, but
    // the branch itself is not special-cased on `controlled` beyond reading
    // `drive`: a future goal type that climbs would just have to supply the
    // same climbAxis shape.
    stepClimb(entity, useDrive ? drive.climbAxis : 0, dt);
  } else {
    const wish = useDrive ? drive.wish : goalWish(entity.x, entity.z, entity.goal, dt);
    const intent = useDrive ? drive.intent : wish; // goalWish's return already carries {mag,sprint} alongside {wishX,wishZ} — see its doc
    stepAnt(entity, wish, intent, dt);
  }
  updateLegs(entity, entity.legState, dt);
  worldIndex.move('ant', entity.id, entity.x, entity.z, collideRadius(entity.profile));
}

/** Player-side sugar over computeWishDir(), so index.js's update() reads as
 *  "build the drive, tick the entity" instead of repeating computeWishDir's
 *  call and clamp inline. Cheap enough to call even while climbing (movement
 *  math only, no world query) — updateEntity() simply ignores `wish`/`intent`
 *  in that branch. */
export function driveFromInput(intent, camEye, camAim) {
  return {
    wish: computeWishDir(intent, camEye, camAim),
    intent,
    climbAxis: clamp(intent.iy, -1, 1),
  };
}

export { snapshotEntity, restoreEntity };

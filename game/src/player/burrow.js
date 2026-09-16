import { clamp } from '../core/noise.js';

/* ==========================================================================
   The founding burrow (#68) — the beat between the founding hold filling and
   the existing laying cutscene (laying.js). The porter's own brief: "on peut
   simplement laisser la mini animation qu'il y avait initialement" — a close
   shot, she sinks into the ground digging, a mound of spoil rises around
   her, and only once that reads as done does the world actually get dug.
   found() moves here, to the END of this beat, from where it used to sit at
   the top of interaction.js's 'found' case.

   Deliberately NOT a system: one straight-line sink, one fixed shot, no
   phases. laying.js earns its five phases because it stages the world's own
   sky crossfade (design/ressources-et-fondation.md §7a); this beat only has
   to hide one thing — the instant the world actually gets dug — behind a
   few seconds of "she is busy digging".

   ant.x/z never move: she digs straight down where she is standing, which is
   also where the pile is (interaction.js only offers 'found' standing on
   it — see layPlace()'s sibling check in resolve()). ant.y is put back where
   it started the moment the beat ends, right before found()/laying.begin()
   take over in interaction.js: a queen who has just "sunk" into a hole that
   does not physically exist yet has to be back on the surface the instant
   the real one opens under her. The pop that leaves is covered by the same
   kind of hard cut laying.js already uses to hide sealNest() — see shot()'s
   `cut`, consumed once on the very first frame, same idiom as laying.js's
   own `cutNext`.
   ========================================================================== */

export const BURROW_DURATION = 3.8;   // 3-5 s per the ticket
const SINK_DEPTH = 4.2;               // how far she visibly sinks, in world units
const EYE_DIST = 8.5, EYE_H = 3.4;    // close shot ("plan rapproché")

const ease = (t) => t * t * (3 - 2 * t);

export function createBurrow() {
  const state = { t: 0, active: false, justEnded: false };
  let from = null, az = 0, cutNext = false;

  function active() { return state.active; }

  /** Start the beat. `ant` is standing on the pile, about to found — the spot
   *  she sinks into is wherever that is; interaction.js never moves her
   *  between the hold completing and this being called. */
  function begin(ant) {
    state.active = true;
    state.t = 0;
    state.justEnded = false;
    from = { x: ant.x, y: ant.y, z: ant.z, yaw: ant.yaw };
    // a few degrees off her own heading, so the shot reads as watching her
    // dig rather than staring straight down her own back
    az = ant.yaw + 0.6;
    cutNext = true;
    ant.speed = 0;
  }

  /** One frame. Returns true on the exact frame the beat finishes on its
   *  own — the caller applies found()/harvest.spend()/laying.begin() then,
   *  and only then, so the spend can never happen twice (contract with
   *  interaction.js: also see cancel() below, the other place it can end). */
  function update(ant, dt) {
    state.justEnded = false;
    if (!state.active) return false;
    state.t += dt;
    const k = clamp(state.t / BURROW_DURATION, 0, 1);
    ant.x = from.x; ant.z = from.z;
    ant.y = from.y - SINK_DEPTH * ease(k);
    ant.floorY = ant.y;
    ant.yaw = from.yaw;
    ant.speed = 3.2;             // a little shuffle so the legs keep working
    ant.travel += 3.2 * dt;
    if (k >= 1) {
      ant.y = from.y;           // back on the surface for laying.begin()'s own "from"
      ant.floorY = null;
      ant.speed = 0;
      state.active = false;
      state.justEnded = true;
      return true;
    }
    return false;
  }

  /** Cut the beat now (E). The caller (interaction.js) still applies
   *  found()/spend/laying.begin() itself right after — same effect as a
   *  natural end, just without waiting out the timer. */
  function cancel(ant) {
    if (!state.active) return false;
    ant.x = from.x; ant.y = from.y; ant.z = from.z;
    ant.floorY = null;
    ant.yaw = from.yaw;
    ant.speed = 0;
    state.active = false;
    return true;
  }

  /** {eye, aim, cut} for camera.js, or null when the player owns the camera. */
  function shot(ant) {
    if (!state.active) return null;
    const cut = cutNext;
    cutNext = false;
    const k = clamp(state.t / BURROW_DURATION, 0, 1);
    return {
      eye: [
        from.x + Math.sin(az) * EYE_DIST,
        from.y + EYE_H - SINK_DEPTH * k * 0.3,
        from.z + Math.cos(az) * EYE_DIST,
      ],
      aim: [ant.x, ant.y + 0.8, ant.z],
      cut,
    };
  }

  function promptText() { return 'Elle se creuse un terrier.   (E — passer)'; }

  return { state, begin, update, cancel, shot, promptText, active };
}

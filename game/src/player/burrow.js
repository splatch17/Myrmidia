import { clamp } from '../core/noise.js';
import { PLAYER_AVATAR } from './avatar.js';

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

/* Framing, derived from her own body rather than typed in (round-1 of this
   beat hard-coded EYE_DIST=8.5 — three collideRadius, which put the eye
   almost directly behind her along her own heading and read, on review, as
   "the camera is between her legs": correct arithmetic, wrong angle, and too
   close either way to show the whole 20-odd-unit body a queen actually is.
   A 3/4 shot needs both more distance and more bearing off her heading. */
const DIST_PER_BODYLEN = 1.35;   // eye distance, x her own length (mandible tip to gaster rear)
const EYE_H_PER_BODYLEN = 0.80;  // eye height above her standing point, ditto
const AZ_OFFSET = 1.95;          // ~112° off her heading: flank/three-quarter-rear, not behind
const DIST_MIN = 16, EYE_H_MIN = 9;   // floor for a worker-scale body, however small

/** Mandible tip to the back of the rearmost gaster segment, scaled — the
 *  same body-plan fields antMesh.js builds the mesh from (avatar.js), so
 *  this reads whatever profile is actually digging instead of assuming the
 *  queen. */
function bodyLength(ant) {
  const p = ant.profile || PLAYER_AVATAR;
  const b = p.body;
  const front = b.mandible.tip[2];
  const rear = b.gaster[b.gaster.length - 1];
  const back = rear.at[2] - rear.r[2];
  return (front - back) * p.scale;
}

const ease = (t) => t * t * (3 - 2 * t);

export function createBurrow() {
  const state = { t: 0, active: false, justEnded: false };
  let from = null, az = 0, dist = DIST_MIN, eyeH = EYE_H_MIN, cutNext = false;

  function active() { return state.active; }

  /** Start the beat. `ant` is standing on the pile, about to found — the spot
   *  she sinks into is wherever that is; interaction.js never moves her
   *  between the hold completing and this being called. */
  function begin(ant) {
    state.active = true;
    state.t = 0;
    state.justEnded = false;
    from = { x: ant.x, y: ant.y, z: ant.z, yaw: ant.yaw };
    // three-quarter angle off her own heading, not nearly behind her, so a
    // body this long reads broadside-ish instead of foreshortened to nothing
    az = ant.yaw + AZ_OFFSET;
    const len = bodyLength(ant);
    dist = Math.max(DIST_MIN, len * DIST_PER_BODYLEN);
    eyeH = Math.max(EYE_H_MIN, len * EYE_H_PER_BODYLEN);
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
    ant.y = from.y - SINK_DEPTH * ease(k) + Math.sin(state.t * 6.2) * 0.14;
    ant.floorY = ant.y;
    // a small rock/tilt side to side, reading as digging rather than a
    // straight elevator drop — she still faces the way she was, on average
    ant.yaw = from.yaw + Math.sin(state.t * 5.1) * 0.10;
    ant.speed = 3.2;             // a little shuffle so the legs keep working
    ant.travel += 3.2 * dt;
    if (k >= 1) {
      ant.y = from.y;           // back on the surface for laying.begin()'s own "from"
      ant.floorY = null;
      ant.yaw = from.yaw;
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

  /** {eye, aim, cut} for camera.js, or null when the player owns the camera.
   *  eye orbits the spot she started at (not her sinking position — an eye
   *  that sank with her would end up looking back UP out of the hole), aimed
   *  a little above her original standing height so the whole body and the
   *  mound rising around her both sit in frame instead of just her back. */
  function shot(ant) {
    if (!state.active) return null;
    const cut = cutNext;
    cutNext = false;
    return {
      eye: [
        from.x + Math.sin(az) * dist,
        from.y + eyeH,
        from.z + Math.cos(az) * dist,
      ],
      aim: [from.x, from.y + eyeH * 0.18, from.z],
      cut,
    };
  }

  function promptText() { return 'Elle se creuse un terrier.   (E — passer)'; }

  return { state, begin, update, cancel, shot, promptText, active };
}

import * as world from '../world/index.js';
import { clamp, lerp } from '../core/noise.js';

/* ==========================================================================
   The first laying (#6) — the beat the whole prologue was walking towards.

   design/ressources-et-fondation.md §7a settled what this is *for*: the world
   must not open up while she is digging, because then the reward is the
   excavation. It has to open up while she is shut in the dark with her first
   egg, so that she climbs back out into a day she never saw arrive, and finds
   the warm mouth of her own nest waiting on a lawn that has changed colour.
   Everything below serves that one sentence.

   SO THE DIG RUNS STRAIGHT INTO THE DESCENT. There is no walking around on
   the surface between founding and laying: the moment foundNest() answers,
   this sequence takes the queen down her own shaft (interaction.js calls
   begin() on the frame the dig completes). That is what puts her underground
   for the whole six seconds of the sky's crossfade — the only place in the
   prologue where the change can happen off screen. It also means the switch
   *looks* right whichever module ends up driving it: this file starts its own
   ramp at the laying, which is where the spec puts it (see MIX_FADE below).

   WHY IT IS SCRIPTED, AND WHAT THAT COSTS. A queen cannot walk down a
   15-unit vertical shaft 8.4 units wide with a ground-following controller —
   there is no ground to follow, and world/terrain.js's groundY() still
   answers "the lawn" for every point inside the hole. So for these ~14
   seconds the ant is placed along a path rather than steered, the camera is a
   composed shot rather than a boom (camera.js takes it as final), and the
   input is ignored. It is the only scripted stretch in the game and it is
   deliberately short. When the chamber becomes a place she can walk into by
   herself, this file loses its descend/ascend phases and keeps the rest.

   PHASES, and what each is on screen:
     descend  she walks the last few units to the rim and drops down the shaft
     dark     the entrance closes behind her (sealNest): the darkest moment
     lay      the first clutch appears and lights its own lamp (populateNest),
              and the sky begins its crossfade overhead where she cannot see
     rest     a breath, lit by her own brood
     ascend   back up the shaft and out, clear of the spoil ring
   ========================================================================== */

const W = { ...world };

const PHASES = [
  { k: 'descend', s: 3.2 },
  { k: 'dark', s: 2.6 },
  { k: 'lay', s: 3.4 },
  { k: 'rest', s: 2.6 },
  { k: 'ascend', s: 3.2 },
];

// Same duration main.js uses for the prologue -> colony crossfade, so that
// whichever of the two ends up driving it, it is the same six seconds.
const MIX_FADE = 6.0;

const MAX_BROOD = 6;      // world/founding.js's own ceiling on populateNest(n)

/* The chamber is 28 units across and the queen is 24.5 long (measured in
   design/ressources-et-fondation.md §0). There is no wide shot to be had in
   there: at 50 degrees of vertical fov, framing her whole body would need the
   eye ~16 units from her, which is outside the rock. So the laying is shot
   close, from just above her own back height, and what fills the frame is her
   head, the wall, and the pale clutch. The numbers are the room's, not taste:
   the cavity is a swept tube (world/founding.js chamberProfile) whose ceiling
   at 9 units off the axis is only ~6.5 above the floor. */
const EYE_R = 8.0, EYE_H = 5.2, AIM_H = 1.8;
const QUEEN_OFF = 5.5;    // how far she stands from the clutch she is laying
const SURFACE_BACK = 26, SURFACE_UP = 15;

const lerp3 = (a, b, t) => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
const ease = (t) => t * t * (3 - 2 * t);

/** Where the first clutch is going to appear, so the shot can hold it in
 *  frame. Read off the lamp world/founding.js already created for that pile —
 *  a read-only peek at a private field, with the chamber centre as the
 *  fallback, rather than re-deriving a position the world would then place
 *  somewhere else. Asking for a published broodSpot(i) is in the round report. */
function broodSpot(nest) {
  const pile = nest._furnishing && nest._furnishing.piles && nest._furnishing.piles[0];
  const p = pile && pile.lamp && pile.lamp.p;
  return p ? [p[0], p[2]] : [nest.chamber.x, nest.chamber.z];
}

export function createLaying() {
  const state = {
    phase: null,      // null when nothing is running
    i: 0,
    t: 0,             // 0..1 through the current phase
    brood: 0,         // clutches laid so far
    mixT: null,       // running the prologue -> founded crossfade
    justEnded: false,
    justLaid: false,
  };

  let nest = null, from = null, mouth = null, floorPos = null, exitPos = null, broodAt = null;
  let eyeAz = 0, surfaceEye = null, aimAt = null, layYaw = 0, cutNext = false;

  /** True while the queen belongs to the sequence and not to the player. */
  function active() { return state.phase !== null; }

  /**
   * Start the sequence. Returns false (and changes nothing) if the world has
   * no dug chamber to put her in — the fallback founding path in founding.js
   * records a site without digging one, and walking a queen into a hole that
   * does not exist would be worse than not playing the beat at all.
   */
  function begin(ant) {
    if (active()) return false;
    const n = typeof W.getFoundedNest === 'function' ? W.getFoundedNest() : null;
    if (!n || !n.chamber) return false;
    nest = n;

    mouth = [nest.mouth.x, nest.mouth.y, nest.mouth.z];
    from = { x: ant.x, y: ant.y, z: ant.z, yaw: ant.yaw };

    /* The shot is composed along one line: eye -> queen -> clutch, with the
       eye on the far side of the chamber from the eggs. The first version put
       her *on* the brood spot and the eye at a fixed bearing, which on the
       run that produced the first captures put the camera inside the egg pile
       — the clutch is placed by the world at a bearing this file does not
       choose, so the shot has to be built from it rather than beside it. */
    const c = nest.chamber;
    broodAt = broodSpot(nest);
    let bx = c.x - broodAt[0], bz = c.z - broodAt[1];
    const bl = Math.hypot(bx, bz);
    if (bl < 0.5) { bx = 0; bz = 1; } else { bx /= bl; bz /= bl; }
    const off = Math.min(QUEEN_OFF, bl);   // never past the middle of the room
    floorPos = [broodAt[0] + bx * off, nest.floorY, broodAt[1] + bz * off];
    eyeAz = Math.atan2(bx, bz);            // she has her back to the camera's side
    layYaw = Math.atan2(-bx, -bz);         // and faces her own clutch

    /* The shaft leans (world/founding.js AXIS_TILT), so the mouth is offset
       from the chamber by a few units: that horizontal drift is a direction
       the nest itself defines, and it is used for both the way out and the
       side the camera watches from. Degenerate case (a plumb shaft) falls
       back to north, which is where the meadow is. */
    let ux = mouth[0] - c.x, uz = mouth[2] - c.z;
    const ul = Math.hypot(ux, uz);
    if (ul < 0.01) { ux = 0; uz = 1; } else { ux /= ul; uz /= ul; }
    // clear of the spoil ring (MOUND_R = 17) so she is standing on lawn, not
    // on the flank of her own heap, when the player gets her back
    exitPos = [mouth[0] + ux * 21, 0, mouth[2] + uz * 21];
    exitPos[1] = W.groundY(exitPos[0], exitPos[2]);

    surfaceEye = [
      mouth[0] - Math.sin(from.yaw) * SURFACE_BACK,
      mouth[1] + SURFACE_UP,
      mouth[2] - Math.cos(from.yaw) * SURFACE_BACK,
    ];
    aimAt = [mouth[0], mouth[1] + 1, mouth[2]];

    state.phase = 'descend';
    state.i = 0;
    state.t = 0;
    state.justEnded = false;
    cutNext = false;
    return true;
  }

  /* ---- where the body is, phase by phase --------------------------------- */

  function placeDescend(ant, t, dt) {
    const APPROACH = 0.34;   // walk the last stretch to the rim, then drop
    if (t < APPROACH) {
      const k = ease(t / APPROACH);
      ant.x = lerp(from.x, mouth[0], k);
      ant.z = lerp(from.z, mouth[2], k);
      ant.y = lerp(from.y, mouth[1], k);
      ant.speed = 6;
      ant.travel += 6 * dt;   // keeps the gait walking rather than sliding
      ant.yaw = from.yaw;
      ant.floorY = ant.y;
      return;
    }
    const k = ease((t - APPROACH) / (1 - APPROACH));
    const p = lerp3([mouth[0], mouth[1], mouth[2]], floorPos, k);
    ant.x = p[0]; ant.y = p[1]; ant.z = p[2];
    ant.floorY = ant.y;      // she is on the wall of her own shaft, not in mid-air
    ant.speed = 0;
    // she turns to face the chamber on the way down, so she is not standing
    // with her back to her own clutch when the light comes on
    ant.yaw = lerp(from.yaw, layYaw, k);
  }

  function placeFloor(ant) {
    ant.x = floorPos[0]; ant.y = floorPos[1]; ant.z = floorPos[2];
    ant.floorY = nest.floorY;
    ant.yaw = layYaw;
    ant.speed = 0;
  }

  function placeAscend(ant, t, dt) {
    const OUT = 0.66;        // up the shaft, then out onto the lawn
    if (t < OUT) {
      const k = ease(t / OUT);
      const p = lerp3(floorPos, [mouth[0], mouth[1], mouth[2]], k);
      ant.x = p[0]; ant.y = p[1]; ant.z = p[2];
      ant.floorY = ant.y;
      ant.yaw = lerp(layYaw, Math.atan2(exitPos[0] - mouth[0], exitPos[2] - mouth[2]), k);
      ant.speed = 0;
      return;
    }
    const k = ease((t - OUT) / (1 - OUT));
    ant.x = lerp(mouth[0], exitPos[0], k);
    ant.z = lerp(mouth[2], exitPos[2], k);
    ant.y = lerp(mouth[1], exitPos[1], k);
    ant.floorY = ant.y;
    ant.speed = 7;
    ant.travel += 7 * dt;
  }

  /* ---- the shot ----------------------------------------------------------- */

  /** {eye, aim, cut} for camera.js, or null when the player owns the camera. */
  function shot(ant) {
    if (!active()) return null;
    const cut = cutNext;
    cutNext = false;
    const under = state.phase === 'dark' || state.phase === 'lay' || state.phase === 'rest'
      || (state.phase === 'ascend' && state.t < 0.45);
    if (!under) {
      return { eye: surfaceEye, aim: state.phase === 'ascend' ? [ant.x, ant.y + 3, ant.z] : aimAt, cut };
    }
    const c = nest.chamber;
    return {
      eye: [c.x + Math.sin(eyeAz) * EYE_R, nest.floorY + EYE_H, c.z + Math.cos(eyeAz) * EYE_R],
      // between the queen and her clutch, so both are in frame at a distance
      // the room allows (8 to 11 units — she is 24.5 long, it is a close shot
      // because there is no other kind in a chamber 28 across)
      aim: [(ant.x + broodAt[0]) * 0.5, nest.floorY + AIM_H, (ant.z + broodAt[1]) * 0.5],
      cut,
    };
  }

  /* ---- one frame ---------------------------------------------------------- */

  function update(ant, dt) {
    state.justEnded = false;
    state.justLaid = false;
    if (state.mixT !== null && typeof W.setFoundedMix === 'function') {
      state.mixT += dt;
      W.setFoundedMix(clamp(state.mixT / MIX_FADE, 0, 1));
      if (state.mixT >= MIX_FADE) state.mixT = null;
    }
    if (!active()) return null;

    const ph = PHASES[state.i];
    state.t = clamp(state.t + dt / ph.s, 0, 1);

    switch (ph.k) {
      case 'descend': placeDescend(ant, state.t, dt); break;
      case 'ascend': placeAscend(ant, state.t, dt); break;
      default: placeFloor(ant); break;
    }

    if (state.t >= 1) {
      state.i++;
      state.t = 0;
      const next = PHASES[state.i];
      state.phase = next ? next.k : null;
      if (next) enterPhase(next.k);
      else {
        // back on the meadow and back under the player's hand
        ant.floorY = null;
        ant.y = W.groundY(ant.x, ant.z);
        ant.speed = 0;
        state.justEnded = true;
        nest = null;
      }
    }
    return state.phase;
  }

  function enterPhase(k) {
    if (k === 'dark') {
      // she closes the entrance behind her: the shaft's cold daylight fades
      // out over ~3 s and the chamber has, for a moment, no light at all
      if (typeof W.sealNest === 'function') W.sealNest(true);
      cutNext = true;
      return;
    }
    if (k === 'lay') {
      state.brood = Math.min(state.brood + 1, MAX_BROOD);
      if (typeof W.populateNest === 'function') W.populateNest(state.brood);
      state.justLaid = true;
      /* §7a: the crossfade starts *here*, with the queen sealed underground,
         not when the spade went in. main.js currently starts its own ramp
         from nestOrigin() (i.e. from the dig, ~5 s earlier) and, running
         after this file each frame, wins — which costs nothing today because
         she is already in the shaft by then, and both ramps end at 1. It
         becomes exact the moment main.js gates its ramp on the laying
         (getFoundedNest().brood > 0); this side is already where the spec
         asks for it. */
      if (state.mixT === null && typeof W.foundedMix === 'function' && W.foundedMix() < 1) {
        state.mixT = 0;
      }
      return;
    }
    if (k === 'ascend') {
      if (typeof W.sealNest === 'function') W.sealNest(false);
      cutNext = true;
    }
  }

  /* ---- what the HUD says -------------------------------------------------- */

  const LINES = {
    descend: 'Elle descend dans la chambre.',
    dark: "Elle referme l'entrée derrière elle.",
    rest: 'Le couvain éclaire la chambre.',
    ascend: 'Elle remonte au jour.',
  };

  function promptText() {
    if (!active()) return null;
    if (state.phase === 'lay') return state.brood === 1 ? 'Première ponte.' : 'Elle pond.';
    return LINES[state.phase] || null;
  }

  /** The line the event slot shows on the frame a phase begins. */
  function eventText() {
    if (state.justLaid) {
      return state.brood === 1
        ? 'Première ponte — la colonie existe.'
        : `Ponte : ${state.brood}ᵉ couvée.`;
    }
    return null;
  }

  return {
    state, begin, update, shot, promptText, eventText,
    active,
    brood: () => state.brood,
    canLayMore: () => state.brood < MAX_BROOD,
  };
}

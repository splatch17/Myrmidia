/* ==========================================================================
   Avatar profiles — who the player is currently incarnating.

   Until now the controller hard-coded one body: the worker ported from
   design/prototypes/sortie-fourmiliere.html (drawAnt/LEGS/updateLegs). The
   game now opens on the *founding queen*, alone on the surface, before any
   nest exists (design/boucle-de-jeu.md §0, #32), so every number that was
   really "the worker's size/speed/reach" lives here instead of being spread
   across legs.js / antMesh.js / movement.js / camera.js / climb.js /
   decorCollision.js as a literal. Those modules read the profile off the ant
   record (`ant.profile`) rather than importing a global, so a second body
   (a worker the player switches to once the colony exists — boucle-de-jeu
   §4) is a new entry in this file, not a second controller.

   Shapes are deliberately the same vocabulary in both bodies — ellipsoid
   gaster/thorax/head, two-bone mandibles and antennae, six two-bone legs —
   because that is what world/queen.js already draws for the seated queen and
   what antMesh.js already draws for a worker. The queen's numbers below are
   world/queen.js's own (its `ell(...)` calls), so the avatar and the modelled
   queen are recognisably the same animal, with one difference: she carries
   the two-segment gaster and it breathes.

   `scale` is a pure multiplier on every local coordinate (legs.js applies it
   to the basis, so hips, rest feet, body parts and mandibles all follow).
   She is 2.2x a worker rather than world/queen.js's 2.4: a queen that has
   just shed her wings and not yet swollen with a season of brood is smaller
   than the physogastric one sitting in the founded nest.
   ========================================================================== */

// local-space hips and rest feet: +Z is forward, +X is the left side.
// Phases alternate to give the tripod gait (0.0 / 0.5).
const WORKER_LEGS = [
  { hip: [ 0.85, 1.5,  1.5], rest: [ 3.6, 0,  3.4], phase: 0.0 },
  { hip: [-0.85, 1.5,  1.5], rest: [-3.6, 0,  3.4], phase: 0.5 },
  { hip: [ 0.95, 1.4,  0.3], rest: [ 4.3, 0,  0.2], phase: 0.5 },
  { hip: [-0.95, 1.4,  0.3], rest: [-4.3, 0,  0.2], phase: 0.0 },
  { hip: [ 0.85, 1.4, -1.0], rest: [ 4.0, 0, -3.2], phase: 0.0 },
  { hip: [-0.85, 1.4, -1.0], rest: [-4.0, 0, -3.2], phase: 0.5 },
];

// world/queen.js's QH/QF, with the worker's gait phases — she is wider in the
// stance than a worker even before `scale` is applied, which is most of what
// makes her read as heavy rather than as a large worker.
const QUEEN_LEGS = [
  { hip: [ 0.92, 1.5,  1.70], rest: [ 4.1, 0,  3.9], phase: 0.0 },
  { hip: [-0.92, 1.5,  1.70], rest: [-4.1, 0,  3.9], phase: 0.5 },
  { hip: [ 1.02, 1.4,  0.40], rest: [ 4.9, 0,  0.3], phase: 0.5 },
  { hip: [-1.02, 1.4,  0.40], rest: [-4.9, 0,  0.3], phase: 0.0 },
  { hip: [ 0.92, 1.4, -1.15], rest: [ 4.5, 0, -3.5], phase: 0.0 },
  { hip: [-0.92, 1.4, -1.15], rest: [-4.5, 0, -3.5], phase: 0.5 },
];

/* Body parts, in the same local frame as the legs. `r` is the ellipsoid's
   three radii (side, up, fwd); bones are {a, b, r}. */
const WORKER_BODY = {
  petiole: { at: [0, 1.50, -1.25], r: [0.42, 0.42, 0.42] },
  thorax:  { at: [0, 1.60,  0.35], r: [0.95, 0.92, 1.55] },
  head:    { at: [0, 1.62,  2.55], r: [1.12, 0.98, 1.05] },
  eye:     { at: [0.72, 2.05, 2.95], r: [0.30, 0.26, 0.30] },
  gaster:  [{ at: [0, 1.55, -3.1], r: [1.35, 1.30, 1.95] }],
  mandible: { root: [0.52, 1.42, 3.35], tip: [0.30, 1.22, 4.55], gape: 0.22, r: 0.15 },
  antenna: { root: [0.55, 2.05, 3.05], elbow: [1.35, 3.15, 4.0], tip: [1.75, 3.05, 5.9], r1: 0.13, r2: 0.10 },
  legR: { thigh: 0.19, shin: 0.13, knee: 0.24, foot: 0.17 },
};

const QUEEN_BODY = {
  petiole: { at: [0, 1.50, -1.20], r: [0.50, 0.50, 0.62] },
  thorax:  { at: [0, 1.62,  0.50], r: [1.06, 1.02, 1.75] },
  head:    { at: [0, 1.66,  2.70], r: [1.18, 1.02, 1.12] },
  eye:     { at: [0.76, 2.12, 3.10], r: [0.30, 0.26, 0.30] },
  // two segments, the rear one trailing: this is the silhouette that says
  // "queen" at a glance, and the pair breathes (see antMesh.js)
  gaster: [
    { at: [0, 1.55, -3.2], r: [1.60, 1.54, 2.1] },
    { at: [0, 1.50, -5.4], r: [1.34, 1.30, 1.9] },
  ],
  mandible: { root: [0.55, 1.45, 3.50], tip: [0.34, 1.20, 4.80], gape: 0.20, r: 0.17 },
  antenna: { root: [0.58, 2.10, 3.20], elbow: [1.40, 3.30, 4.20], tip: [1.85, 3.20, 6.10], r1: 0.14, r2: 0.11 },
  legR: { thigh: 0.20, shin: 0.14, knee: 0.30, foot: 0.19 },
};

export const WORKER = {
  id: 'worker',
  label: 'ouvrière',
  scale: 1,
  legs: WORKER_LEGS,
  body: WORKER_BODY,
  breathes: false,
  colors: { chitinA: 0x8b5a24, chitinB: 0x432d15, limb: 0x6b4420, mandible: 0xc9903f, eye: 0x100c06 },
  // locomotion, in world units — the old prototype's frame() literals
  maxSpeed: 15,
  sprint: 1.75,
  turnRate: 9,       // dampAngle rate on ant.yaw
  legLen: [2.7, 2.9],
  stride: 7.0,       // world distance per full gait cycle
  climbSpeed: 20,
  bodyR: 1.5,        // collision half-width (decorCollision.js), before scale
  // third-person boom: #18's validated worker numbers (default 36, wheel
  // clamp [10,85])
  cam: { dist: 36, min: 10, max: 85 },
};

export const FOUNDING_QUEEN = {
  id: 'queen',
  label: 'reine fondatrice',
  scale: 2.2,
  legs: QUEEN_LEGS,
  body: QUEEN_BODY,
  breathes: true,
  colors: { chitinA: 0xb07226, chitinB: 0x5e3d16, limb: 0x5e3d16, mandible: 0xb07226, eye: 0x100c06 },
  // She is more than twice a worker's size and still slower in absolute
  // terms: ~0.4 body-lengths a second against the worker's ~1.15, and a turn
  // rate less than half as sharp, so she pivots like something that weighs
  // something. Sprint is a heavy lumber, not a dash.
  maxSpeed: 12.5,
  sprint: 1.5,
  turnRate: 4.2,
  legLen: [2.7, 2.9],
  stride: 7.0,
  climbSpeed: 12,    // scaled by `scale` at use, i.e. ~26 u/s: fast in world
                     // units, slow relative to her own body
  bodyR: 1.5,
  // #18's framing kept, not its literal: a body 2.2x as long needs a longer
  // boom to occupy the same share of the screen. 58 is a touch tighter than
  // 36*2.2 on purpose — the prologue is played outdoors, where too long a
  // boom flattens the meadow into a map.
  cam: { dist: 58, min: 16, max: 140 },
};

/** The body the player currently drives. #32: the game opens on the queen. */
export const PLAYER_AVATAR = FOUNDING_QUEEN;

/* Derived, so nobody re-multiplies by hand:
   scaled leg bone lengths, stride, and collision radius. */
export function legLengths(p) { return [p.legLen[0] * p.scale, p.legLen[1] * p.scale]; }
export function strideOf(p) { return p.stride * p.scale; }
export function collideRadius(p) { return p.bodyR * p.scale; }

/* Profiles by id, so an entity's *state* can name its body with a string
   instead of holding a reference to this table (#36). The profile is a
   definition, not state: two ants of the same caste share one entry and
   nothing about it changes at run time, which is exactly why a saved entity
   should carry `profileId` and resolve it on load rather than serialise a
   copy of the body plan. */
export const PROFILES = { worker: WORKER, queen: FOUNDING_QUEEN };
export function profileById(id) { return PROFILES[id] || WORKER; }

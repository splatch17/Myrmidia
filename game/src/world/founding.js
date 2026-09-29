import * as THREE from 'three';
import { vnoise, vnoise3, rng, clamp, lerp } from '../core/noise.js';
import { makeBasis } from '../core/vecmath.js';
import { MeshBuilder, unitSphere } from '../core/meshBuilder.js';
import {
  lawnY, groundSlope, waterDepthAt, distanceToWater, soilAt, LAWN_BOUNDS, TUNNEL_MOUTH,
} from './terrain.js';
import {
  makeExcavation, setExcavation, clearExcavation, getExcavation,
  excavationFloorAt, excavationHeadroomAt, excavationFootprint, excavationDescentPath,
  excavationShellTopAt, chamberDoorR, bakedLawnAt, inOpenCutPastDoor,
  rampCentre, rampOffset, rampFloorAt, cutJitterAt, cutHalfWidth, CUT_JITTER,
  roomFloorY, roomFloorAt, linkFloorY, deepestFloorY,
  addRoom, addLink, addDigFace, excavationDigFaces, advanceDigFace,
  roomTrimR,
  RAMP_DESCEND, RAMP_TURN, RAMP_SLOPE, CHAMBER_R, CHAMBER_WALL, CHAMBER_ROOF, LINK_ROOF, NEST_DEPTH, ROOF_COVER,
  WALL_OUT, WALL_WOBBLE, TUNNEL_BORE, SPRINGER, MOUTH_FLARE, MOUTH_RUN, TUNNEL_LUMP,
  QUEEN_R, hwAt, APRON_LEN,
} from './excavation.js';
import {
  openSdf, openCells as volumeOpenCells, clearVolume, setVolumeSurface, wallNoise, volumeLowestY, volumeExtent, MIN_COVER,
  sampleD,
} from './nestVolume.js';
import { createVolumeMesher } from './nestVolumeMesh.js';
import { texturedSurfaceMaterial, texturedEmissiveMaterial, dirtAlbedo, capAlbedo } from './texturing.js';
import { addLocalLight, getLocalLights, applyNestShading, setNestPit, setNestMouth } from './lighting.js';
import { markEmitter } from '../core/bloom.js';
import { resettleResources } from './resources.js';
import { stemGeometry, capGeometry } from './gardenDecor.js';

/* ==========================================================================
   Founding the nest at run time (#11, #12; contract §4).

   design/boucle-de-jeu.md §0 moved the start of the game outdoors, queen
   alone, nest not yet dug. So the nest can no longer be a thing that exists
   because buildWorld() ran: it has to be dug where the player asks, while
   the game is running, without rebuilding the world.

   WHAT foundNest() DIGS, AND WHAT IT DOES NOT. One chamber and its access
   shaft. Not the gallery, not the three side rooms — those stay in
   world/underground.js as the "already founded" nest the arbitration turned
   the old start screen into. The user's instruction on scale is taken
   literally: one correct, readable, well-lit chamber beats a network.

   DIRECTION OF DEPENDENCY. The world does not know the player. foundNest()
   is called *by* player/**, never the reverse, which is what lets a
   verification harness dig a nest with no controller attached at all — and
   what scripts/verify-round6.mjs actually does.

   THE EMPTY CHAMBER (#12). The shell is dug once and never rebuilt. Being
   "inhabited" is a separate group of props that is created (hidden) at the
   same time and revealed a pile at a time by populateNest(n), each pile
   lighting its own lamp. That is design/ambiance-prologue.md §2c plans 2 to
   6 — cold daylight shaft, then dark, then one warm pool per clutch, then
   the first glow-bead — expressed as data rather than as a cutscene.
   ========================================================================== */

/* ---- shape of a founding nest -------------------------------------------

   The numbers that describe the hole itself (how wide the cut is, how steep,
   how deep, how tall the chamber) live in world/excavation.js, because the
   height field and the mesh have to be built from the same ones. What is left
   here is what only the mesh cares about. */

const RIM_H = 1.6;         // the spoil bank stands this proud of the meadow
const CUT_BATTER = 3.2;     // how far the cut face leans out over its height
const CUT_BANK = 11.0;      // spoil apron either side, wide enough to cover the
                            // lawn grid's own transition quads (GS = 6, so up
                            // to 8.5 on the diagonal) with a margin

/* The bank is wider where the mouth is flared, and that is not a look (#69).
   The meadow is opened a whole lawn cell past the footprint, and at the very
   mouth the footprint's own edge sweeps sideways by 2.3 units for every unit
   of length: a cell measured ALONG the cut is twenty units of width across it,
   so a bank of constant width left the outer corner of that hole with nothing
   under it. The extra is buried (the rim is flush at the mouth by design), so
   what it buys is a closed hole rather than a broader bank. */
const CUT_BANK_FLARE = 9.0;
/** How far back from the mouth the cut's own sheet starts, under the meadow.
 *  Same reason, along the cut instead of across it. */
const CUT_LEAD = 12;
/** How far under the meadow the cut's sheet sits where the two are flush. The
 *  threshold IS the meadow — that is what makes it walk-in-able — so at the
 *  mouth there are two surfaces claiming the same ground and one of them has
 *  to be underneath. Half a unit is invisible and unambiguous. */
const MESH_TUCK = 0.5;
/** And how far under it the outer hem of the spoil bank is tucked, the same
 *  way world/founding.js's heapY() tucks a heap's hem (round 18's trick). */
const HEM_BURY = 0.9;
/** The outer part of the bank's width spent diving under the meadow. A bank
 *  that dies into the grass over its whole width is a bank within a hair of
 *  the meadow over its whole width; concentrated here, the two cross along a
 *  line instead of sharing a field. */
const BANK_PLUNGE = 0.34;
/** A lawn vertex with this much spoil over it is under the heap, not beside
 *  it, and its triangles go (openTheMeadow). */
const SPOIL_BURY = 0.6;
/** And how far the cut has to be below the meadow before the meadow gives way
 *  to it. Was 1.5, which is also how big a step the ragged edge of the hole
 *  then showed at the rim — the torn slabs of #69's capture. */
const MEADOW_OPEN = 0.9;

/* canFoundAt() only has to keep the *chamber* clear of the map edge —
   chooseHeading() steers the cut, so a site near a boundary gets a nest that
   turns inland rather than a refusal. */
const EXCAV_MARGIN = CHAMBER_R * (WALL_OUT + WALL_WOBBLE) + CUT_BANK + 4;

const MIN_WATER = 18;     // agrees with player/siteQuality.js's own MIN_WATER
const MAX_SLOPE = 0.62;   // = terrain.js's SOIL_ROCK_SLOPE, tan(32 deg)

const C_SOIL_A = new THREE.Color('#6d5130');
const C_WALL_A = new THREE.Color('#5a4226'), C_WALL_B = new THREE.Color('#332412');
const C_CHITIN = new THREE.Color('#e0a752');
const C_BROOD = new THREE.Color('#efdcb0');
const C_GLOW = new THREE.Color('#ffc46a');

/* #78: pushed from silk-grey [0.55, 0.62, 0.82] to a clearer blue — it is the
   first thing of the nest's own palette she meets on the way down. */
const COLD_SHAFT_LIGHT = [0.42, 0.56, 1.00];   // ambiance §2c plan 2 (soie)
/* Cut from [0.85,0.48,0.17]. The art direction measured this lamp and the
   queen's lighter chitin separately and each is right on its own, but their
   SUM at two units was never measured and she went white under it (defect 2b).
   The ambient floor has since gone 0.30 -> 0.55 as well, so the lamp is no
   longer carrying the entrance on its own and can afford to be a glow rather
   than a source. */
const WARM_MOUTH_LIGHT = [0.46, 0.26, 0.10];   // ambiance §2b: the one warm
                                               // point on the outdoor map
/* #78: 0.85 -> 1.0 on red. The earth under the clutches is now pulled toward
   indigo (world/lighting.js COOL_TINT), which reflects less red; without the
   bump the warm pool round each clutch — the point of the whole palette —
   came back as a beige smudge. */
const BROOD_LIGHT = [1.00, 0.58, 0.20];        // ambiance §2c plan 5
/* The face the diggers are still working, at the far end of the gallery. Its
   own colour on purpose: reusing WARM_MOUTH_LIGHT would tie the deepest point
   of the nest to the brightness of its doorway, and those two want to move in
   opposite directions. Measured by the art direction (REPRISE §6). */
const DIG_FACE_LIGHT = [1.15, 0.66, 0.24];
/* The hall's own lamps, brighter than the gallery's were. Not a taste change:
   the gallery was a bore of radius 5 and the hall is a room of radius 8.5
   under a 13-unit dome, so the same radiance spread over roughly six times the
   volume arrives at the floor as nothing. The first shot of the finished hall
   had a lit ceiling and a black floor, which is exactly that arithmetic. */
/* #78: the nest's own lamps are cold — indigo and violet — so that the only
   warm light underground is what the colony is FOR (brood, dig face, glow
   bead). Same luminance budget as the amber they replace, plus a little: blue
   reads darker than amber at equal radiance. Values: design/ambiance-prologue.md §9g. */
/* #90: red raised so the cold is violet-pink rather than pure blue (§10b.5). */
const HALL_LAMP_LINK = [0.85, 0.55, 1.45];
const HALL_LAMP_MID = [1.05, 0.66, 1.90];
const HALL_LAMP_FAR = [0.75, 0.62, 1.70];
/* Where each cold lamp hangs, so world/atmosphere.js can give it a small
   visible body (the bloom needs something to bloom from). Warm lamps are
   deliberately not listed: a clutch lights itself, it does not get an orb. */
export const LAMP_GLOWS = [];

/* ---- glowing fungus, the nest's own light (#80) -------------------------
   One cluster in every other dug room (the hall first), against the wall
   furthest from the corridor it was entered by and from every dig face on
   it: never on the brood (the chamber keeps its clutches and its bead) and
   never in front of a face. The cluster's lamp TAKES THE PLACE of that
   room's far cold lamp rather than adding one, so a fungus room costs the
   light pool nothing (LIGHT_SLOTS, world/lighting.js).
   Palette: design/ambiance-prologue.md 9g. The nest is indigo/violet, and
   the fungus is the one living thing in it that makes that colour itself:
   violet, or a teal that reads as the same family under the cold lamps.
   Stems, caps and the one halo'd cap per cluster are three InstancedMeshes
   for the whole nest, whatever the room count. */
export const NEST_FUNGUS = [];   // collision footprints {x, z, r, y, room}
export const FUNGUS_GLOWS = [];  // the clusters' lamps, for world/atmosphere.js
const FUNGUS_MAX = 192;   // #90: 64 -> 192, the corridor clusters (plantCorridorFungus)
const FUNGUS_KINDS = [
  /* Caps saturated and well under 1: they are lit by their own lamp AND emit,
     and at the first try's pale lavender the sum went white — the queen's
     spot problem again, on a mushroom. */
  /* #90: pastel lilac (#b985ce on screen) and the prototype's SPORE_LIGHT,
     whose high red is what turns the neighbouring walls pink (§10b.5). */
  { cap: [0.62, 0.38, 1.00], stem: [0.30, 0.26, 0.42], light: [1.15, 0.52, 1.55] },
  { cap: [0.14, 0.58, 0.74], stem: [0.20, 0.32, 0.38], light: [0.34, 0.78, 1.55] },
];
/* Three lamps down the bore rather than one at the end. One lamp with the
   1/(1 + 0.017 d^2) falloff this rig uses is at 0.027 of its value 46 units
   away, which is the whole of the gallery in darkness and a bright disc at
   the end — the measurement that said the gallery's problem is distribution,
   not exposure. Fractions of GALLERY_LEN, so they follow the bore if it is
   ever lengthened. */
const GALLERY_LAMPS = [
  { t: 0.18, c: [0.60, 0.50, 1.30] },
  { t: 0.55, c: [0.48, 0.42, 1.10] },
  { t: 0.92, c: DIG_FACE_LIGHT },
];
const GLOW_LIGHT = [1.95, 1.20, 0.52];         // ambiance §2c plan 6

const MAX_BROOD = 6;

/* ---- state --------------------------------------------------------------- */

let host = null;          // the THREE.Group foundNest() may add to
let lawnMesh = null;      // the meadow, so the cut can be opened in it
let grassField = null;    // ditto, so no blade is left standing in mid air
let gardenDecor = null;   // ditto for the garden's mushrooms/pebbles/leaf (#80)
let nest = null;          // the founded nest, or null
const mixColor = (a, b, t) => new THREE.Color(a).lerp(b, clamp(t, 0, 1));

/** Called once by createWorld(): where a nest dug later should be attached,
 *  and the two surface things a dig has to cut through. */
export function initFounding(group, surface = {}) {
  host = group;
  lawnMesh = surface.lawn || null;
  grassField = surface.grass || null;
  gardenDecor = surface.garden || null;
  /* A free dig keeps MIN_COVER of earth under the ground over it
     (nestVolume.js) — the meadow, or the spoil heaped on it. */
  setVolumeSurface(groundCoverAt);
}

/** The meadow's height, from the grid baked at founding where there is one. */
function meadowAt(x, z) {
  const ex = getExcavation();
  const b = ex ? bakedLawnAt(ex, x, z) : Infinity;
  return Number.isFinite(b) ? b : lawnY(x, z);
}

/* ---- the ground a free dig must stay under (#81) -------------------------
   The meadow, or the spoil heaped over it where there is some: the chamber
   sits under its mound with barely a few units of meadow round it, so a dig
   out of the chamber measured against the meadow alone could not leave the
   chamber at all. Sampled lazily on a 3-unit lattice and kept until the spoil
   is re-heaped (rebuildSpoil clears it): pileTopAt() asks the volume for the
   top of the built shell, which is too dear to ask per sample of a brush. */
const GROUND_COVER_STEP = 3;
const coverMemo = new Map();
function coverNode(i, j) {
  const k = i * 100003 + j;
  let v = coverMemo.get(k);
  if (v === undefined) {
    const x = i * GROUND_COVER_STEP, z = j * GROUND_COVER_STEP;
    const p = getExcavation() ? pileTopAt(x, z) : null;
    v = Math.max(meadowAt(x, z), p === null ? -Infinity : p);
    coverMemo.set(k, v);
  }
  return v;
}
/** Height of the ground over (x, z) — meadow or spoil, whichever is higher.
 *  A free dig keeps MIN_COVER under it; also what a hand-dig preview (#83)
 *  should measure against. */
export function groundCoverAt(x, z) {
  const fx = x / GROUND_COVER_STEP, fz = z / GROUND_COVER_STEP;
  const i = Math.floor(fx), j = Math.floor(fz), tx = fx - i, tz = fz - j;
  return lerp(lerp(coverNode(i, j), coverNode(i + 1, j), tx), lerp(coverNode(i, j + 1), coverNode(i + 1, j + 1), tx), tz);
}

/** { x, z } of the founded nest, or null while nothing has been founded. */
export function nestOrigin() { return nest ? { x: nest.x, z: nest.z } : null; }

/** The whole descriptor (mouth, chamber centre and radius, floor height) for
 *  callers that need more than the origin — a camera framing the entrance, or
 *  the collision layer that will eventually let the queen walk in. */
export function getFoundedNest() { return nest; }

/**
 * Can a nest be founded here? Answers without building anything, so a HUD can
 * ask every frame. foundNest() calls this and never re-decides, so the two
 * can't drift apart.
 *
 * `reason` is a stable technical string, not a sentence for the player:
 * 'already-founded' | 'underground' | 'bounds' | 'occupied' | 'water' |
 * 'rock' | 'slope'. ('occupied' and 'bounds' are additions to the contract's
 * list — see the session report.)
 */
export function canFoundAt(x, z) {
  if (nest) return { ok: false, reason: 'already-founded' };
  if (z < TUNNEL_MOUTH) return { ok: false, reason: 'underground' };
  const B = LAWN_BOUNDS;
  if (x < B.x0 + EXCAV_MARGIN || x > B.x1 - EXCAV_MARGIN) return { ok: false, reason: 'bounds' };
  if (z < EXCAV_MARGIN || z > B.z1 - EXCAV_MARGIN) return { ok: false, reason: 'bounds' };
  // the gallery of the pre-existing nest runs under here
  if (Math.abs(x) < 34 && z < 34) return { ok: false, reason: 'occupied' };
  if (waterDepthAt(x, z) > 0) return { ok: false, reason: 'water' };
  if (distanceToWater(x, z) < MIN_WATER) return { ok: false, reason: 'water' };
  if (groundSlope(x, z) > MAX_SLOPE) return { ok: false, reason: 'slope' };
  if (soilAt(x, z).kind === 'rock') return { ok: false, reason: 'rock' };
  return { ok: true };
}

/* ---- the dig ------------------------------------------------------------- */

/* Same three-octave wall wobble as the gallery and the side rooms
   (world/underground.js), so a chamber dug at run time is made of the same
   earth as one built at load time — a different noise here would read as a
   different material. */
function wobbleAt(th, u, seed) {
  const n = (k, sz) => vnoise(Math.cos(th) * k + u * sz + seed + 37, Math.sin(th) * k + u * sz * 0.7 + seed + 91);
  return 0.84 + 0.20 * n(1.6, 0.10) + 0.10 * n(4.1, 0.29) + 0.05 * n(9.3, 0.62);
}

/* Freshly turned earth, damper and darker than the old gallery's weathered
   walls: this hole was dug an hour ago. */
function digColour(proud, extra = 0.18) {
  return mixColor(C_WALL_B, C_WALL_A, proud * 0.8 + 0.10)
    .lerp(C_SOIL_A, extra + proud * 0.14).multiplyScalar(0.88);
}

const smoothK = (t) => { const k = clamp(t, 0, 1); return k * k * (3 - 2 * k); };
/** Every spoil pile but the chamber's mound shares one seed (rebuildSpoil). */
const spoilSeed = (ex) => (ex.seed + 613) % 9973;

/* ---- the cut's own sheet of ground, as ONE function (#69) ----------------

   Floor, battered face and spoil bank used to be three lists of vertices with
   three ideas of where the meadow was, written inline in the loop that emitted
   them — and the meadow itself was a fourth. That is why the entrance was the
   worst of it: at the mouth all four are within a unit of each other by
   design, so all four took turns winning the depth test, and the porter's
   capture is the result.

   They are one function of position now, the way heapY() has been one since
   round 18, and it is consulted three times over: by the mesh that draws it,
   by openTheMeadow() deciding which lawn triangles are under it, and by the
   grass. What the three agree about is not a number passed between them, it is
   the same code.

   THE RULE IT ENCODES: the cut is never above the meadow, and where the two
   are flush the cut goes UNDER. MESH_TUCK at the floor, HEM_BURY at the hem,
   and between them a bank that stands proud only where the cut is deep enough
   to have produced one. */

/** How wide the spoil bank is at `u` — wider at the flared mouth, and see
 *  CUT_BANK_FLARE for why that is arithmetic and not taste. */
function bankWidthAt(ex, u, side = 0) {
  const W = CUT_BANK + CUT_BANK_FLARE * clamp(hwAt(ex, u) / ex.hw - 1, 0, 2);
  if (!side) return W * (1 + BANK_WANDER);   // the widest it can be, for cutSquash
  /* #90 (porter: "the rim at the lawn still has straight, linear edges"):
     the line where the bank dives under the meadow ran exactly W off the
     batter, a ruled curve parallel to the cut for its whole length. Per side,
     two octaves — a lobe every few units and a bite every two — so the spoil
     reads as thrown out, like the #81 doorways read as dug. */
  const o = (ex.seed % 509) + (side > 0 ? 17.1 : 3.9);
  const n = 0.62 * vnoise(u * 0.21 + o, o * 0.3) + 0.38 * vnoise(u * 0.57 + o * 1.3, o * 0.7 + 4);
  return W * (1 + BANK_WANDER * (n * 2 - 1));
}
const BANK_WANDER = 0.32;

/** Room the section may take on the INSIDE of the turn before it reaches the
 *  centre of the turn itself. */
const CUT_TURN_KEEP = 6;

/**
 * How far the section is squashed on the inside of the turn at `u`, 0..1.
 *
 * The cut curves on a radius of some forty units and its mouth flares to
 * ninety-five across. Laid out symmetrically, the INNER edge of that section
 * is placed past the centre of its own turn — so it sweeps backwards as u
 * advances and the sheet crosses through itself in a bowtie at exactly the
 * corner #69's capture is of. There is no height that fixes a fold; the
 * section has to fit inside its turn, which on the inside of a bend means
 * being narrower, the way a real cut is.
 *
 * Uniform, so the stations stay spread (a clamp would pile four of them onto
 * one circle and make slivers), and 1 wherever there is room — which is the
 * whole of the cut past the apron.
 */
function cutSquash(ex, u, side) {
  if (side >= 0) return 1;
  const full = hwAt(ex, u) + CUT_JITTER + CUT_BATTER * BATTER_MAX + bankWidthAt(ex, u);
  return Math.min(1, (ex.arc.R - CUT_TURN_KEEP) / Math.max(full, 1e-3));
}

/* The battered face's width wanders too (#81): with the foot's own wander
   (excavation.js cutJitterAt) it is what turns the rim from a ruled line into
   a bank that was dug. Per side, low frequency, never under 0.72 of the old
   width so the face never stands steeper than it used to. */
const BATTER_MAX = 1.34;
function cutBatterAt(ex, u, side) {
  const n = vnoise(u * 0.19 + (ex.seed % 613) + (side > 0 ? 31.7 : 7.3), 2.7);
  return CUT_BATTER * (0.72 + (BATTER_MAX - 0.72) * n);
}

/** The crest of the bank: flush with (just under) the meadow at the mouth,
 *  standing RIM_H proud once the cut is deep enough to have dug one.
 *
 *  It rises over RIM_RUN and not over the whole apron, and that is measured:
 *  while the crest is crossing the meadow's own level the two surfaces are
 *  near-parallel and within a hair of each other, so the longer the crossing
 *  takes the wider the band of ground where neither is clearly on top. Over
 *  the apron's 24 units that band was five units of u down both banks. */
const RIM_RUN = 11;
function cutRimY(ex, x, z, u, lw) {
  // #90: plus a finer octave, so the crest is lumpy rather than a ruled ridge
  const lump = 0.66 + 0.46 * vnoise(x * 0.15 + ex.seed, z * 0.15 + ex.seed)
    + 0.22 * vnoise(x * 0.47 + ex.seed * 0.7, z * 0.47 + 11);
  return lw - MESH_TUCK + (RIM_H * lump + MESH_TUCK) * smoothK(u / RIM_RUN);
}

/**
 * Height of the cut's sheet at (x, z), given where that point sits on the cut
 * — `u` along it, `lat` across it. Covers the whole of it: the walkable floor,
 * the battered face and the bank out to its buried hem, because what was
 * broken was the joints BETWEEN those three.
 *
 * `lat` is the REAL lateral offset of the point; the section parameter is
 * recovered from it through cutSquash(), so the mesh (which knows u and lat
 * because it placed the vertex) and a world-space query (which recovers them
 * with rampOffset) get the same answer for the same point.
 */
function cutSurfaceAt(ex, x, z, u, lat) {
  const side = lat < 0 ? -1 : 1;
  const hw = hwAt(ex, u) + cutJitterAt(ex, u, side);
  const B = cutBatterAt(ex, u, side);
  const W = bankWidthAt(ex, u, side);
  const d = lat / cutSquash(ex, u, side);
  const over = Math.abs(d) - hw;
  if (over > B + W + 1e-3) return null;
  const lw = lawnY(x, z);
  const floor = Math.min(rampFloorAt(ex, x, z, u, clamp(lat, -hw, hw)), lw - MESH_TUCK);
  let y;
  if (over <= 0) y = floor;
  else {
    const rim = cutRimY(ex, x, z, u, lw);
    if (over <= B) y = lerp(floor, rim, smoothK(over / B));
    else {
      const t = clamp((over - B) / W, 0, 1);
      /* The crest is carried out along the bank, following the meadow rather
         than chording across it, and only the outer BANK_PLUNGE of the width
         dives under. */
      const crest = lw + (rim - lw) * (1 - t * 0.3);
      y = lerp(crest, lw - HEM_BURY, smoothK((t - (1 - BANK_PLUNGE)) / BANK_PLUNGE));
    }
  }
  /* Where the cut runs into the spoil mound, the two describe the same floor
     from two different tessellations — the flickering band of the #69 capture.
     So this one is tucked under the mound's, and buried under its surface:
     nested, rather than coincident. */
  const C = ex.chamber;
  const h = heapY(ex, C, x, z);
  if (h !== null) {
    const inM = clamp((moundRadius(ex) - Math.hypot(x - C.x, z - C.z)) / 3, 0, 1);
    /* 0.8, not 0.4: both surfaces draw their curves as chords between rings a
       couple of units apart, so a clearance measured between the two FUNCTIONS
       is spent twice over by the two meshes before a pixel is drawn. */
    y = Math.min(y - inM * 0.8, h - 0.8);
  }
  return y;
}

/** The same sheet, asked for at a world point that may or may not be on it. */
function cutSurfaceY(ex, x, z) {
  const o = rampOffset(ex, x, z, CUT_LEAD);
  return o ? cutSurfaceAt(ex, x, z, o.u, o.lat) : null;
}

/**
 * Which way the cut sets off. Not a free choice and no longer noise: the
 * excavation is now sixty-odd units long, so the direction is the difference
 * between a nest and a trench that ends in the river. Candidates are scored on
 * staying in bounds, staying out of the water, and running downhill — a cut
 * that follows the fall of the ground moves the least earth, which is the same
 * reason a real one does it.
 *
 * Deterministic: no RNG, so the same site always digs the same nest.
 */
function chooseHeading(x, z) {
  const B = LAWN_BOUNDS;
  const R = RAMP_DESCEND / RAMP_TURN;
  const here = lawnY(x, z);
  const tiers = [[], []];
  for (let a = 0; a < 24; a++) {
    const th = (a / 24) * Math.PI * 2;
    const head = [Math.sin(th), Math.cos(th)];
    const a0 = Math.atan2(-head[0], head[1]);
    const ax = x - R * Math.cos(a0), az = z - R * Math.sin(a0);
    let score = 0, dead = false, covered = true;
    for (let k = 1; k <= 8; k++) {
      const u = (k / 8) * (RAMP_DESCEND + CHAMBER_R);
      const ang = a0 + u / R;
      const px = ax + R * Math.cos(ang), pz = az + R * Math.sin(ang);
      const pad = k === 8 ? EXCAV_MARGIN : CUT_BANK;
      if (px < B.x0 + pad || px > B.x1 - pad || pz < TUNNEL_MOUTH + pad || pz > B.z1 - pad) { dead = true; break; }
      if (waterDepthAt(px, pz) > 0 || distanceToWater(px, pz) < MIN_WATER * 0.6) { dead = true; break; }
      const h = lawnY(px, pz);
      /* The far end has to sit under ground no lower than the threshold, or
         the chamber's roof surfaces. That was a soft preference at first and
         it lost to the terrain: the solver then had to sink the floor, which
         lengthened the cut, which drove it further downhill — a 127-unit
         trench, measured. It is a requirement now, with the soft score only
         choosing among directions that already satisfy it. */
      if (k === 8 && h < here - 3) covered = false;
      score += h * (k === 8 ? 3 : 1);
    }
    if (dead) continue;
    tiers[covered ? 0 : 1].push({ head, score });
  }
  const pick = tiers[0].length ? tiers[0] : tiers[1];
  if (pick.length) return pick.reduce((a, b) => (b.score > a.score ? b : a)).head;
  /* Nothing survived even the bounds test: a corner site, or one ringed by
     water. Point at the middle of the map — the least bad answer, and never
     undefined. canFoundAt() has already said this place is legal, so refusing
     here would make the two verdicts disagree, which is the failure the
     contract's preamble is about. */
  const cx = (B.x0 + B.x1) * 0.5 - x, cz = (B.z0 + B.z1) * 0.5 - z;
  const l = Math.hypot(cx, cz) || 1;
  return [cx / l, cz / l];
}

/**
 * The meadow over the dig, sampled once into a plain grid so world/
 * excavation.js can clamp the cut's floor to it without importing terrain
 * (bakedLawnAt, and the module header there for why that import may not
 * exist). Coarse on purpose — it is read for a min() and for clamps that
 * carry half a unit of margin, never for a height anyone stands on that is
 * not already the meadow.
 */
function bakeLawnGrid(cx, cz, half, step) {
  const n = Math.ceil((2 * half) / step) + 1;
  const h = new Float32Array(n * n);
  const x0 = cx - half, z0 = cz - half;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) h[i * n + j] = lawnY(x0 + i * step, z0 + j * step);
  }
  return { x0, z0, step, nx: n, nz: n, h };
}

/**
 * Dig the shell: an open, curving cut down from the meadow, and a walled,
 * domed chamber at the bottom of it.
 *
 * The floor of the cut is not modelled here — it is read from
 * world/excavation.js, which is the same function terrain.js's groundY()
 * answers with. That is the one rule this file must not break: a mesh built
 * from its own idea of where the floor is, next to a groundY() with another,
 * is a queen walking two units above her own shadow, and nothing on screen
 * tells you which of the two is wrong.
 */
function buildShell(x, z, seed) {
  const mouthY = lawnY(x, z);
  const e = 6;
  /* Clamped tighter than it used to be (0.35). The sill carries the meadow's
     own gradient so the threshold is flush, but that gradient is added ON TOP
     of the descent's slope inside SILL_RUN, and at 0.35 it was spending a
     quarter of the whole slope budget without appearing in it — 0.626
     measured against a 0.46 design line. The sill only has to LEAVE flush; it
     does not have to match the meadow's steepness all the way down. */
  const grad = [
    clamp((lawnY(x + e, z) - lawnY(x - e, z)) / (2 * e), -0.18, 0.18),
    clamp((lawnY(x, z + e) - lawnY(x, z - e)) / (2 * e), -0.18, 0.18),
  ];
  const head = chooseHeading(x, z);
  /* The meadow over the whole dig, baked coarse, so world/excavation.js can
     clamp the cut's floor to ground it is not allowed to ask about (#69, and
     bakedLawnAt() for why the cycle forbids asking). The half-extent covers
     the arc's chord (~50), the chamber and its mound (~34) and the bank. */
  const ex = makeExcavation({ x, z }, {
    y: mouthY, gx: grad[0], gz: grad[1], grid: bakeLawnGrid(x, z, 130, 4),
  }, head, seed);
  setExcavation(ex);

  const M = new MeshBuilder();
  const floorY = ex.floorY;
  const C = ex.chamber;

  /* ---- the open cut ----------------------------------------------------
     One swept U — floor, battered face, spoil bank — sampled off cutSurfaceY()
     at every vertex, so the sheet the mesh draws and the sheet the meadow is
     opened under are the same sheet.

     ONE GRID, NO SPLIT. It used to be two: full rows while the trench was
     outside the spoil mound, then two-vertex "wings" carrying the banks on
     into it. Two strips with different vertex counts meeting along a row is a
     T-junction, and a T-junction on ground this size is the torn slab of the
     #69 capture. The rows are the same width for the whole run now; past the
     mound's edge only the FLOOR quads are dropped, so every vertex on the
     seam is shared by both sides of it.

     ACROSS, the stations are what the flare costs: at the mouth the walkable
     half-width is 2.4 x RAMP_HW, i.e. ninety-five units of floor, and the six
     stations this had drew it in nineteen-unit facets — the slabs themselves.
     Eleven spans across the floor is eight units at the widest, and the bank
     gets four of its own so it follows the meadow it is buried in instead of
     chording over it. */
  const FLOOR_K = [];
  for (let i = 0; i <= 10; i++) FLOOR_K.push(-1 + i / 5);
  const BANK_T = [0.3, 0.62, 0.85, 1];      // fractions of the bank's width
  const MOUND_R = moundRadius(ex);
  /* The floor stops where the SPOIL MOUND starts, not where the chamber does.
     Run to the chamber wall it left its banks a unit or two inside the heap,
     and two solids interpenetrating at a shallow angle is a flickering seam,
     not a joint. The mound carries the passage from here on (carved by the
     same rampFloorAt), overlapped by seven units of buried sheet. */
  let uCut = ex.arc.len;
  for (let u = 0; u <= ex.arc.len; u += 1.0) {
    const c = rampCentre(ex, u);
    if (Math.hypot(c.x - C.x, c.z - C.z) <= MOUND_R * 0.98) { uCut = Math.min(ex.arc.len, u + 7); break; }
  }

  const rows = [];
  /* #90: rows every unit, not two, so the bank's finer wander (bankWidthAt)
     is drawn rather than chorded over */
  for (let u = -CUT_LEAD; u <= ex.arc.len + 1e-4; u += 1.0) {
    const c = rampCentre(ex, u);
    const hw = hwAt(ex, u);
    const WS = { [-1]: bankWidthAt(ex, u, -1), 1: bankWidthAt(ex, u, 1) };
    const t = clamp(u / Math.max(ex.arc.len, 1e-3), 0, 1);
    // lateral unit vector: the arc's own outward normal
    const nx = (c.x - ex.arc.ax) / ex.arc.R, nz = (c.z - ex.arc.az) / ex.arc.R;
    /* Lateral stations, outside in: hem, bank, rim, batter, floor, and back
       out — in SECTION space, then squashed to fit inside the turn (see
       cutSquash). `k` is the floor's own normalised offset, for colour. */
    /* Each side at its own ragged width (#81): the stations follow the
       wandering foot and batter, so the sheet draws the same edge
       cutSurfaceAt() describes rather than a ruled one crossing it. */
    const hwS = { [-1]: hw + cutJitterAt(ex, u, -1), 1: hw + cutJitterAt(ex, u, 1) };
    const BS = { [-1]: cutBatterAt(ex, u, -1), 1: cutBatterAt(ex, u, 1) };
    const lats = [];
    for (const side of [-1, 1]) {
      for (const bt of side < 0 ? [...BANK_T].reverse() : BANK_T) {
        lats.push({ d: side * (hwS[side] + BS[side] + bt * WS[side]), k: side, bank: true });
      }
      if (side < 0) {
        lats.push({ d: -(hwS[-1] + BS[-1]), k: -1, rim: true });
        for (const k of FLOOR_K) lats.push({ d: k * hwS[k < 0 ? -1 : 1], k });
        lats.push({ d: hwS[1] + BS[1], k: 1, rim: true });
      }
    }
    const sqIn = cutSquash(ex, u, -1);
    const row = [];
    for (const st of lats) {
      const lat = st.d < 0 ? st.d * sqIn : st.d;
      const px = c.x + nx * lat, pz = c.z + nz * lat;
      const wob = wobbleAt(st.k * Math.PI, u, seed);
      const proud = clamp((wob - 0.84) / 0.34 + 0.45, 0, 1);
      const col = st.bank || st.rim
        ? mixColor(digColour(proud, st.bank ? 0.34 : 0.30), C_CHITIN, st.bank ? 0.12 : 0.10).toArray()
        : digColour(proud, 0.22 + t * 0.06).toArray();
      row.push(M.addVertex(px, cutSurfaceAt(ex, px, pz, u, lat), pz, col));
    }
    rows.push({ row, floor: u <= uCut + 1e-4 });
    /* The banks run on until both are well inside the mound. Stopped with the
       floor, their ends stood out past the mound's hem — the cut is forty
       units wide now — and between the two the meadow had been opened and
       nothing covered it: two notches of sky beside the entrance. */
    if (u > uCut) {
      const deep = [-1, 1].every((s) => {
        const lat = s * (hwS[s] + BS[s] + WS[s]) * (s < 0 ? sqIn : 1);
        return Math.hypot(c.x + nx * lat - C.x, c.z + nz * lat - C.z) < MOUND_R - 3;
      });
      if (deep) break;
    }
  }
  const NB = BANK_T.length;                      // bank stations per side
  const firstFloor = NB, lastFloor = rows[0].row.length - 1 - NB;
  for (let r = 0; r < rows.length - 1; r++) {
    const a = rows[r], b = rows[r + 1];
    for (let i = 0; i < a.row.length - 1; i++) {
      // the floor and its two battered faces exist only outside the mound
      if (i >= firstFloor && i < lastFloor && !(a.floor && b.floor)) continue;
      M.addQuad(a.row[i], a.row[i + 1], b.row[i + 1], b.row[i]);
    }
  }

  /* ---- the chamber ------------------------------------------------------
     Not built here any more (#81): it is dug into the volume (paintChamber),
     with the doorway the cut arrives through, and drawn by the volume's own
     mesher. This mesh is the open cut alone. */
  paintChamber(ex);

  // where the cut was heading when it arrived — the gallery carries on that way
  const tangent = (() => {
    const p0 = rampCentre(ex, Math.max(0, ex.arc.len - 2)), p1 = rampCentre(ex, ex.arc.len);
    const l = Math.hypot(p1.x - p0.x, p1.z - p0.z) || 1;
    return [(p1.x - p0.x) / l, (p1.z - p0.z) / l];
  })();

  return {
    geometry: M.toBufferGeometry(),
    ex,
    mouthY, floorY,
    origin: [x, mouthY, z],
    dir: [tangent[0], 0, tangent[1]],
    uMax: ex.arc.len,
    chamber: { x: C.x, y: floorY, z: C.z, ceilY: floorY + CHAMBER_ROOF - 1.5, r: C.r },
  };
}

/* ---- the nest's own shapes, as volume brushes (#81) ----------------------

   The room, the corridor and the chamber's doorway used to be three mesh
   builders plus the code that punched each one's doorway out of the others
   (punchWall, linkAperture — round 16 shipped a wall across a tunnel mouth
   because only one of the three existed). They are signed distance functions
   now, dug into the volume with min(); where two meet, the doorway is simply
   what min() leaves, and the mesher draws it.

   Same numbers as the old builders, so what the harnesses and the camera were
   tuned against does not move: the wall stands at WALL_OUT of the plan radius
   and wobbles OUTWARD by up to WALL_WOBBLE (wallNoise, outward only), the
   corridor's bore is TUNNEL_BORE of its walkable half-width with the same
   springer and arch, floors carry the same grain. What is new is that the
   wobble is 3D (overhangs, bays, a lintel that is not a ruled line) and that
   the corridor's mouth flares into the room it opens on instead of meeting
   it along a cut. */

const FAR = 99;                         // "nowhere near this brush"
const ZERO_ROOM = { fy: 0 };            // roomFloorAt(ex, ZERO_ROOM, x, z) = the floor grain
/* A corridor's mouth widens into each room it joins, over this run from the
   room's wall: the bell of an ant's doorway, not a pipe butted into a drum. */
const MOUTH_BELL = 0.28, MOUTH_BELL_ROOF = 0.12, MOUTH_BELL_RUN = 7.0;
/** How deep the working face's dome is, as a fraction of the bore. Shallow
 *  on purpose: each step of the dig re-carves the old front, and its depth is
 *  most of what a step costs. */
const FRONT_DEPTH = 0.55;
/** How far past the chamber's headwall the volume's mesh still draws: its
 *  floor runs this far under the mound's carved floor so there is no slit of
 *  nothing between the two (the mound wins the overlap by depth offset). */
const DOOR_OVERLAP = 1.0;
/** Milliseconds of remeshing the volume may spend per frame (one chunk at
 *  least). A 16^3 chunk of wall is ~1-3 ms, so this is one or two chunks a
 *  frame — a dig front moves a unit at a time, and touches two or three. */
const VOLUME_BUDGET_MS = 2.5;

/**
 * A room: vertical wall to `wall`, elliptical dome to `roof`, flat floor at
 * `fy`. `grow` ({x, y, z, r}) limits it to a sphere — a room being dug out
 * from its doorway. `cover`: keep this much earth under the meadow (null:
 * none, the room gets a spoil heap).
 */
/* #90: where a floor meets a wall the two distances met in a hard max(), a
   crease sharper than the lattice, and surface nets draw a crease like that as
   a row of teeth — the staircase round the bottom of every room in the macro
   view. A polynomial smooth max rounds it into a cove of about a unit (the
   prototype's walls also curve into their floor); it only ever ADDS earth, by
   at most FLOOR_COVE / 4, and only within FLOOR_COVE of the junction. */
const FLOOR_COVE = 1.6;
function smax(a, b, k) {
  const h = Math.max(k - Math.abs(a - b), 0) / k;
  return Math.max(a, b) + h * h * k * 0.25;
}

function roomSdf(ex, R, grow = null, cover = null, opts = {}) {
  const H = Math.max(0.5, R.roof - R.wall);
  const reach = R.Rw + R.A + 4;
  /* Re-applying a growing room: everything well inside the last sphere was
     written by the last pass and would be written identically (to within
     distances deep in the air nobody reads), so it is skipped — the cost of a
     step is the new shell, not the whole ball. */
  const inner = grow && opts.prevR > 0 ? opts.prevR - (R.A + 4) : -Infinity;
  const band = opts.coverBand ? MIN_COVER + R.A + 5 : null;
  return (x, y, z) => {
    const dx = x - R.x, dz = z - R.z;
    const rho = Math.sqrt(dx * dx + dz * dz);
    if (rho > reach) return FAR;
    let g = 0;
    if (grow) {
      g = Math.hypot(x - grow.x, y - grow.y, z - grow.z);
      if (g - grow.r > 4 || g < inner) return FAR;
    }
    if (band !== null && y < groundCoverAt(x, z) - band) return FAR;
    const h = y - R.fy;
    let d;
    if (h <= R.wall) d = rho - R.Rw;
    else {
      const q = (h - R.wall) / H, p = rho / R.Rw;
      d = (Math.sqrt(p * p + q * q) - 1) * R.Rw;
    }
    if (d > R.A + 3 || R.fy - y > 3) return FAR;   // deep earth: only the sign is read
    // the grain only where the wall is — deep inside, its mean is enough
    d -= d > -(R.A + 3.5) ? R.A * wallNoise(x, y, z) : R.A * 0.5;
    d = smax(d, R.fy + roomFloorAt(ex, ZERO_ROOM, x, z) - y, FLOOR_COVE);
    if (grow) d = Math.max(d, g - grow.r);
    if (cover !== null) d = Math.max(d, y - (groundCoverAt(x, z) - cover));
    return d;
  };
}

function roomBox(R, grow = null) {
  const e = R.Rw + R.A + 3.5;
  const b = [R.x - e, R.fy - 3.5, R.z - e, R.x + e, R.fy + R.roof + R.A + 3.5, R.z + e];
  if (grow) {
    const g = grow.r + 3.5;
    b[0] = Math.max(b[0], grow.x - g); b[3] = Math.min(b[3], grow.x + g);
    b[1] = Math.max(b[1], grow.y - g); b[4] = Math.min(b[4], grow.y + g);
    b[2] = Math.max(b[2], grow.z - g); b[5] = Math.min(b[5], grow.z + g);
  }
  return b;
}

/**
 * A corridor from room to room (G = facePlanGeometry): flat floor ramping
 * between the two rooms' levels exactly as excavation.js linkFloorY() does,
 * jambs to the springer and an arch over them, a bell at each doorway, and a
 * rounded front at `tip` — the face the diggers are working, while it is
 * being dug. The back end sits at the parent room's centre, inside it.
 */
function tunnelSdf(ex, G, tip, cover = null, opts = {}) {
  const s0 = G.scP;
  const reachLat = G.Rb * (1 + MOUTH_BELL) + G.A + 4;
  const band = opts.coverBand ? MIN_COVER + G.A + 5 : null;
  const floorLine = (s) => (s <= G.rs0 ? G.fy0 : s >= G.rs1 ? G.fy1
    : lerp(G.fy0, G.fy1, (s - G.rs0) / Math.max(G.rs1 - G.rs0, 1e-3)));
  return (x, y, z) => {
    const px = x - G.ax, pz = z - G.az;
    const s = px * G.hx + pz * G.hz;
    if (s < s0 - G.Rb - 4 || s > tip + 4) return FAR;
    const lat = -px * G.hz + pz * G.hx;
    if (Math.abs(lat) > reachLat) return FAR;
    if (band !== null && y < groundCoverAt(x, z) - band) return FAR;
    const fl = floorLine(s) + roomFloorAt(ex, ZERO_ROOM, x, z);
    const h = y - fl;
    const tb = clamp(1 - Math.min(s - G.rs0, G.rs1 - s) / MOUTH_BELL_RUN, 0, 1);
    const Rb = G.Rb * (1 + MOUTH_BELL * tb * tb);
    const roof = G.roof * (1 + MOUTH_BELL_ROOF * tb * tb);
    const spring = roof * SPRINGER;
    let d;
    if (h <= spring) d = Math.abs(lat) - Rb;
    else {
      const q = (h - spring) / (roof - spring), p = lat / Rb;
      d = (Math.sqrt(p * p + q * q) - 1) * Rb;
    }
    // rounded ends: the face is a shallow dome, not a sawn-off section
    const hm = roof * 0.5;
    const qa = lat / Rb, qb = (h - hm) / hm;
    const qn = Math.min(1, Math.sqrt(qa * qa + qb * qb));
    const round = Rb * FRONT_DEPTH * (1 - Math.sqrt(1 - qn * qn));
    d = Math.max(d, s - tip + round, s0 - s + round);
    // well inside the earth, nothing is read but the sign
    if (d > G.A + 3 || -h > 3) return FAR;
    d -= d > -(G.A + 3.5) ? G.A * wallNoise(x, y, z) : G.A * 0.5;
    d = smax(d, -h, FLOOR_COVE);
    if (cover !== null) d = Math.max(d, y - (groundCoverAt(x, z) - cover));
    return d;
  };
}

function tunnelBox(G, sa, sb) {
  const pad = G.Rb * (1 + MOUTH_BELL) + G.A + 3.5;
  const xa = G.ax + G.hx * sa, za = G.az + G.hz * sa, xb = G.ax + G.hx * sb, zb = G.az + G.hz * sb;
  return [
    Math.min(xa, xb) - pad, Math.min(G.fy0, G.fy1) - 3.5, Math.min(za, zb) - pad,
    Math.max(xa, xb) + pad, Math.max(G.fy0, G.fy1) + G.roof * (1 + MOUTH_BELL_ROOF) + G.A + 3.5, Math.max(za, zb) + pad,
  ];
}

/**
 * The chamber's doorway: where the open cut runs in under the spoil mound's
 * headwall. The cut's own floor (rampFloorAt, so the height field's two
 * sources agree across the headwall), its own ragged width plus a unit, and
 * a lintel a little under the mound's — wandering, so the doorway reads as
 * dug through earth rather than framed. It reaches two units past the
 * headwall and is clipped there (inOpenCutPastDoor): past that the cut and
 * the mound draw the ground.
 */
function doorSdf(ex) {
  const C = ex.chamber;
  const RH = chamberDoorR(ex);
  const uEnd = ex.arc.len - 4;
  return (x, y, z) => {
    const dDisc = Math.hypot(x - C.x, z - C.z) - (RH + 2);
    if (dDisc > 5) return FAR;
    const o = rampOffset(ex, x, z, 60);
    if (!o) return FAR;
    const hwS = cutHalfWidth(ex, o.u, o.lat) + 1.0;
    let d = Math.max(Math.abs(o.lat) - hwS, o.u - uEnd, dDisc);
    if (d > 6) return FAR;
    d -= 1.1 * wallNoise(x, y, z);
    const top = doorTopAt(ex, x, z);
    const floor = rampFloorAt(ex, x, z, o.u, clamp(o.lat, -(hwS - 1), hwS - 1));
    return Math.max(d, y - top, floor - y);
  };
}

/** The doorway's lintel: wandering a unit or two under the wall top, so the
 *  opening reads as dug through earth, not framed. The spoil mound's own
 *  lintel ring follows it (buildMound), a hair lower, so where the volume's
 *  ceiling is clipped at the headwall the mound's edge hangs just in front of
 *  it and the clip's staircase is never the edge you see. */
function doorTopAt(ex, x, z) {
  const n = 0.62 * vnoise(x * 0.16 + 3.7, z * 0.16 + 8.1) + 0.38 * vnoise(x * 0.47 + 1.3, z * 0.47 + 5.9);
  // at most 3.2 under the wall top: the harnesses hold 9 of headroom under it
  return ex.floorY + ex.chamber.wall - 0.4 - 2.8 * n;
}

function doorBox(ex) {
  const C = ex.chamber, e = chamberDoorR(ex) + 2 + 5;
  return [C.x - e, ex.floorY - 4, C.z - e, C.x + e, ex.floorY + C.wall + 3, C.z + e];
}

/** The founding chamber and its doorway, dug into the volume. */
function paintChamber(ex) {
  const C = ex.chamber;
  const R = {
    x: C.x, z: C.z, fy: ex.floorY, Rw: C.r * WALL_OUT, wall: C.wall, roof: C.roof, A: C.r * WALL_WOBBLE,
  };
  openSdf(roomSdf(ex, R), roomBox(R));
  openSdf(doorSdf(ex), doorBox(ex));
}

/* The dug wall's colour: the same fresh-earth ramp every hand-built room had
   (digColour), with "proud" — which used to be the wall's wobble standing in
   for light — now driven by measured AO: the mesher says how much open air
   there is two and a half units off the wall, and a crease is darker because
   it IS a crease. Floors a shade lighter, like the old floor discs. */
const VOL_A = [C_WALL_A.r, C_WALL_A.g, C_WALL_A.b];
const VOL_B = [C_WALL_B.r, C_WALL_B.g, C_WALL_B.b];
const VOL_S = [C_SOIL_A.r, C_SOIL_A.g, C_SOIL_A.b];
function volumeColour(x, y, z, ny, ao, out) {
  const n = vnoise3(x * 0.23 + 5.1, y * 0.23 + 1.3, z * 0.23 + 9.7);
  const proud = clamp(0.22 + 0.70 * ao + 0.5 * (n - 0.5), 0, 1);
  const t1 = clamp(proud * 0.8 + 0.1, 0, 1);
  const t2 = clamp(0.20 + 0.08 * Math.max(0, ny) + proud * 0.14, 0, 1);
  /* #90: the prototype's crevice shade, 0.42 + 0.58 x proud. Now that the
     texture no longer draws contours, this is what gives the wall its volume
     (design/ambiance-prologue.md §10b.4). */
  const shade = 0.96 * (0.42 + 0.58 * proud);
  for (let i = 0; i < 3; i++) {
    const a = VOL_B[i] + (VOL_A[i] - VOL_B[i]) * t1;
    out[i] = (a + (VOL_S[i] - a) * t2) * shade;
  }
}

/* ---- the spoil ------------------------------------------------------------
   Everything taken out of the ground has to go somewhere, and putting it over
   what was dug does three jobs at once: it covers every roof without sinking
   the floor (which is what ran the trench out to 127 units once), it is the
   landmark #33 asks for — the thing you can see from across the meadow and
   walk towards — and it is the only warning the player gets that this patch
   of ground is roof and not meadow.

   One heap per room, one berm per corridor, all rebuilt together whenever the
   excavation changes shape (rebuildSpoil). Rebuilt rather than baked once
   because each one has to cover EVERYTHING under it: the chamber's mound was
   built at founding, and the corridor to the hall, dug later and taller than
   the meadow is deep, came up through its flank. Every height is taken as a
   max() over the built shell (excavationShellTopAt), so a cover is guaranteed
   rather than hoped for. */
const MOUND_SKIRT = 12;

function moundRadius(ex) { return chamberDoorR(ex) + MOUND_SKIRT; }

/* How far a heap reaches past what it covers. It has to cover the hole
   openTheMeadow() leaves, which is the built shell plus one lawn cell (GS = 6,
   so up to 8.5 on the diagonal) on every side, with a margin so the hem is
   never the edge of the hole. */
const HEAP_SKIRT = 9.5;

/** Plan radius of the spoil heaped over a room. */
function heapRadius(ex, room) {
  return room === ex.chamber ? moundRadius(ex) : room.r * (WALL_OUT + WALL_WOBBLE) + HEAP_SKIRT;
}

/**
 * Height of the spoil heaped over `room` at (x, z), before any doorway is
 * carved through it, or null outside the heap. One function for the mesh AND
 * for the berms that run into it, so a berm can be buried under a heap by
 * construction rather than by a guess about how tall the heap came out.
 */
function heapY(ex, room, x, z) {
  const R = heapRadius(ex, room);
  const t = Math.min(1, Math.hypot(x - room.x, z - room.z) / R);
  if (Math.hypot(x - room.x, z - room.z) > R + 1e-6) return null;
  const first = room === ex.chamber;
  const seed = first ? ex.seed : (ex.seed + 613) % 9973;
  const base = lawnY(x, z);
  const lump = vnoise(x * 0.13 + seed, z * 0.13 + seed) - 0.5;
  const peak = Math.max(base + (first ? 1.6 : 1.2), roomFloorY(ex, room) + room.roof + ROOF_COVER * (first ? 1 : 0.6));
  /* The lump is added, not multiplied: multiplied, a low patch of noise took a
     quarter off the heap and let the dome show through it. */
  let y = base + (peak - base) * Math.pow(Math.max(0, 1 - t * t), 0.85) + lump * (first ? 2.2 : 1.6) * (1 - t);
  const shell = excavationShellTopAt(x, z);
  if (shell !== null) y = Math.max(y, shell + ROOF_COVER * (first ? 0.55 : 0.5));
  /* The hem goes INTO the meadow, so it is buried, never floating — except
     where something built runs out under it. A hem pulled down across the
     corridor was a slab through the corridor's roof.
     Eased over the last of the skirt rather than dropped at t = 1 (#69): a
     step in this function is a step in every surface clamped under it — the
     cut's bank and every berm are — and a step shared by three meshes is the
     kind of seam this is all about. */
  else y -= HEM_BURY * Math.pow(t, 6);
  return y;
}

/**
 * The spoil over the chamber, with the cut running into it.
 *
 * THE DOORWAY, AND WHY IT IS A RING OF ITS OWN. The round-17 heap carved the
 * cut through itself down to the floor and dropped every quad over the
 * doorway, and that is the black slot of `mound-oblique.png`: between a
 * vertex carved to the floor and one left on top of the dome there is no
 * height that is not either a face across the door or a hole in the heap. So
 * the heap has two rings at the headwall, a hair apart, just outside the
 * furthest the chamber's wall reaches. Outside the pair the heap is carved to
 * the cut's floor; inside, over the cut, it stands on the lintel. The quads
 * between the two over the cut run from floor to lintel — they ARE the
 * doorway, and they are the only quads this heap leaves out. Everything else
 * is one closed surface.
 */
function buildMound(ex, seed) {
  const M = new MeshBuilder();
  const C = ex.chamber;
  const floorY = ex.floorY;
  const RH = chamberDoorR(ex);
  const MR = moundRadius(ex);
  const lintel = floorY + C.wall;
  const radii = [];
  const INNER = 8, OUTER = 6;
  // from i = 1: radius zero is MANG coincident vertices and a ring of
  // triangles with no area. The hub below closes the middle.
  for (let i = 1; i < INNER; i++) radii.push((i / INNER) * RH);
  const HEAD_IN = radii.length;
  radii.push(RH - 0.05);
  const HEAD_OUT = radii.length;
  for (let i = 0; i <= OUTER; i++) radii.push(RH + (i / OUTER) * (MR - RH));

  const MANG = 90;
  const mound = [];
  for (let ri = 0; ri < radii.length; ri++) {
    const rad = Math.min(radii[ri], MR);
    const row = [];
    for (let a = 0; a <= MANG; a++) {
      const th = (2 * Math.PI * (a % MANG)) / MANG;
      const px = C.x + Math.cos(th) * rad, pz = C.z + Math.sin(th) * rad;
      const lump = vnoise(px * 0.13 + seed, pz * 0.13 + seed) - 0.5;
      let y = pileTopAt(px, pz) ?? heapY(ex, C, px, pz);

      const rp = rampOffset(ex, px, pz, 4);
      /* The cut's ragged width and batter (#81), so the carve through the
         heap continues the edge the cut's sheet draws. */
      const side = rp && rp.lat < 0 ? -1 : 1;
      const hwR = rp ? cutHalfWidth(ex, rp.u, rp.lat) : 0;
      const B = rp ? cutBatterAt(ex, rp.u, side) : CUT_BATTER;
      const over = rp ? Math.abs(rp.lat) - hwR : Infinity;
      if (rp && ri >= HEAD_OUT) {
        /* Carved to the SAME width the height field calls walkable, then
           battered out to the heap: a shoulder narrower than that is a wall
           standing on ground groundY() says you may walk on. */
        if (over <= 0) y = rampFloorAt(ex, px, pz, rp.u, rp.lat);
        else if (over < B) {
          const k = over / B;
          y = lerp(rampFloorAt(ex, px, pz, rp.u, hwR * Math.sign(rp.lat)), y, k * k * (3 - 2 * k));
        }
      } else if (rp && ri === HEAD_IN && over < B) {
        const k = clamp(over / B, 0, 1);
        y = lerp(Math.min(lintel, doorTopAt(ex, px, pz) - 0.25), y, k * k * (3 - 2 * k));
      }
      row.push({ i: M.addVertex(px, y, pz, mixColor(digColour(0.5 + lump, 0.34), C_CHITIN, 0.14).toArray()), over, p: [px, y, pz] });
    }
    mound.push(row);
  }
  const hubLump = vnoise(C.x * 0.13 + seed, C.z * 0.13 + seed) - 0.5;
  const hub = M.addVertex(C.x, pileTopAt(C.x, C.z) ?? heapY(ex, C, C.x, C.z), C.z,
    mixColor(digColour(0.5 + hubLump, 0.34), C_CHITIN, 0.14).toArray());
  for (let a = 0; a < MANG; a++) M.addTri(hub, mound[0][a + 1].i, mound[0][a].i);
  for (let ri = 0; ri < mound.length - 1; ri++) {
    for (let a = 0; a < MANG; a++) {
      const q = [mound[ri][a], mound[ri][a + 1], mound[ri + 1][a + 1], mound[ri + 1][a]];
      if (ri === HEAD_IN && q.every((v) => v.over <= 0)) continue;   // the doorway
      if (buriedQuad(C, q.map((v) => v.p))) continue;
      M.addQuad(q[0].i, q[1].i, q[2].i, q[3].i);
    }
  }
  return M.toBufferGeometry();
}

/* ---- opening the meadow -------------------------------------------------
   The lawn is one grid built at load time and the nest is dug into it later,
   so without this the cut is roofed by the meadow itself. That is not
   hypothetical: the round-15 baseline captures show the old shaft as a green
   disc in the middle of the spoil heap — the nest had no visible entrance at
   all, and nobody had noticed, because nobody had photographed it.

   A lawn vertex that is genuinely inside the excavation loses its triangles.
   Not its height — a triangle that is not drawn cannot be at a wrong height,
   and moving them was the whole problem. The grid is 6 units and the dug
   shapes are not, so a removed triangle can leave a hole reaching up to a
   cell beyond the footprint; every such hole is covered by something the dig
   built, and that is not luck but the sizes: the cut's spoil banks run 11
   units past the walkable width, the chamber's mound is 9 past its wall, and
   a room's heap is HEAP_SKIRT past its own.

   WHAT "GENUINELY INSIDE" MEANS, and why it is not simply "over the hole".
   At the threshold the cut's floor IS the meadow — that is what makes the
   entrance flush and walk-in-able — so there the lawn stays, or the mouth
   would be a hole in the ground in front of a hole in the ground. Under a
   roof the test is the ceiling instead: the meadow over a corridor is still
   a meadow and keeps its grass, and only where the room would come through
   it does it give way to the heap.

   The index as built is kept aside, so every dig re-decides from the original
   grid rather than from what the previous dig left. */
const MEADOW_CLEAR = 1.2;   // lawn this far over a ceiling is left alone

/** Is (x, z) in the part of the nest that is open to the sky? */
function inOpenCut(x, z) {
  return excavationFloorAt(x, z) !== null && !Number.isFinite(excavationHeadroomAt(x, z));
}

/**
 * Is the meadow at (x, z) inside the dug volume, i.e. something to take out?
 *
 * The sunk-vertex version of this had one case it could not express, and
 * verify-descent.mjs found it by ray-casting: a vertex over the chamber whose
 * meadow sits above the dome keeps its height, its neighbour out in the cut
 * is two and a half units under the floor, and the triangle between them
 * dives through the trench the player is walking down. There is no height
 * that fixes that, which is why the answer is now a yes/no about drawing.
 */
function meadowCut(x, z) {
  /* Wherever a built shell would come up through the meadow, the meadow goes,
     whether or not that ground is walkable: since #67 walls and tubes stand
     outside the footprint, and a lawn left there ran through the top of the
     chamber's wall as a green shelf. The heaps cover the hole. */
  const shell = excavationShellTopAt(x, z);
  if (shell !== null && lawnY(x, z) < shell + MEADOW_CLEAR) return true;
  const dug = excavationFloorAt(x, z);
  if (dug === null) return false;
  const hr = excavationHeadroomAt(x, z);
  return Number.isFinite(hr)
    ? lawnY(x, z) < dug + hr + MEADOW_CLEAR   // roofed: the room comes through
    : lawnY(x, z) - dug > MEADOW_OPEN;        // open cut, but not the threshold
}

/**
 * The top of the spoil lying over (x, z), or null where none does — the cut's
 * own bank, a room's heap, a corridor's berm.
 *
 * Every one of those is a function the mesh is built from, so a lawn triangle
 * this says is buried really is buried: the test and the thing it is testing
 * against are the same arithmetic. Round 18 did this for the ROOF (a heap has
 * to cover what is under it); #69 is the same question asked the other way
 * round — what is under the heap has to stop being drawn.
 */
function spoilTopAt(x, z, skip = null) {
  const ex = getExcavation();
  if (!ex) return null;
  let y = null;
  const put = (v) => { if (v !== null && v !== undefined && (y === null || v > y)) y = v; };
  if (skip !== 'cut') put(cutSurfaceY(ex, x, z));
  for (const r of ex.rooms) if (r !== skip) put(heapY(ex, r, x, z));
  for (const L of ex.links) if (L !== skip) put(bermY(ex, L, x, z));
  return y;
}

/**
 * The top of the PILES alone — every room's heap and every corridor's berm,
 * maxed — with the open cut left out.
 *
 * This is what every pile's own mesh is actually built from (#69), and the
 * reason is the round-19 capture the porter complained about. Each pile used
 * to be drawn at its OWN height, so two piles that overlap were two domes
 * crossing, and along the crossing curve neither is on top: they trade pixels
 * the whole length of it, which is the black wedges and the torn slabs at the
 * mouth. Dropping the buried quads only ever helped where one pile was
 * entirely under another, and the crossing band is by definition where it is
 * not.
 *
 * Built from this instead, the overlapping parts of two piles are the same
 * surface rather than two — no crossing, nothing to trade. What is left is
 * two skins at the same place, and THAT is settled by depth offset in
 * rebuildSpoil(), which is a decision about who draws, not a shape.
 *
 * The cut is excluded on purpose: cutSurfaceY() is the trench, and the mound
 * carves its own doorway through it afterwards. Maxing against it here would
 * heap the spoil back over the entrance.
 */
function pileTopAt(x, z) {
  const ex = getExcavation();
  if (!ex) return null;
  let y = null;
  const put = (v) => { if (v !== null && v !== undefined && (y === null || v > y)) y = v; };
  for (const r of ex.rooms) put(heapY(ex, r, x, z));
  for (const L of ex.links) put(bermY(ex, L, x, z));
  return y;
}

/** How far under another spoil surface a quad has to be before it is dropped
 *  rather than drawn (buriedQuad). Kept for the quads that are genuinely
 *  under something else — a pile wholly inside a bigger one still has a
 *  hidden underside, and drawing it is free seams. */
const SPOIL_OVERLAP = 0.4;

/** Is this quad entirely under some OTHER pile of spoil? Then it is not
 *  visible and drawing it can only make a seam. Corners are [x, y, z]. */
function buriedQuad(skip, corners) {
  for (const c of corners) {
    const other = spoilTopAt(c[0], c[2], skip);
    if (other === null || other < c[1] + SPOIL_OVERLAP) return false;
  }
  return true;
}

/* Grass does not grow through a spoil heap. It did, and the tallest blades
   beside a room leaned in through its dome: they are rooted on the meadow the
   heap was piled over and bend by as much as a quarter of their height. */
function underSpoil(x, z) {
  const ex = getExcavation();
  if (!ex) return false;
  for (const r of ex.rooms) if (Math.hypot(x - r.x, z - r.z) < heapRadius(ex, r)) return true;
  for (const L of ex.links) {
    const s = (x - L.ax) * L.hx + (z - L.az) * L.hz;
    if (s < 0 || s > L.len) continue;
    const lat = -(x - L.ax) * L.hz + (z - L.az) * L.hx;
    if (Math.abs(lat) < L.hw * TUNNEL_BORE * (1 + MOUTH_FLARE) * (1 + TUNNEL_LUMP) + HEAP_SKIRT) return true;
  }
  return false;
}

/** A box round everything the nest has dug or heaped, with the widest skirt
 *  anything reaches (the cut's banks at the flared mouth). */
function nestReach() {
  const ex = getExcavation();
  if (!ex) return { x0: 0, x1: -1, z0: 0, z1: -1 };
  const b = excavationBounds(ex);
  const pad = CUT_BANK + CUT_BANK_FLARE * 2 + HEAP_SKIRT + 12;
  return { x0: b.x0 - pad, x1: b.x1 + pad, z0: b.z0 - pad, z1: b.z1 + pad };
}

function openTheMeadow() {
  if (!lawnMesh || !lawnMesh.geometry) return 0;
  const geo = lawnMesh.geometry;
  const pos = geo.getAttribute('position');
  const col = geo.getAttribute('color');
  const index = geo.getIndex();
  const NEAR = 7.0;
  const soil = C_WALL_B.clone().lerp(C_SOIL_A, 0.4);
  const buried = new Uint8Array(pos.count);
  const under = new Uint8Array(pos.count);
  let moved = 0, sunk = 0;
  /* Nothing dug reaches past this box (every bank, heap skirt and the
     meadow's own opening included), so the rest of the lawn is not asked:
     since #81 each of these questions is a column read in the volume, and
     asking them of six thousand vertices that are nowhere near the nest was
     most of what a room's completion cost. */
  const nb = nestReach();
  const near = (x, z) => x >= nb.x0 && x <= nb.x1 && z >= nb.z0 && z <= nb.z1;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    if (!near(x, z)) continue;
    if (meadowCut(x, z)) { buried[i] = 1; moved++; continue; }
    /* Under the spoil, as opposed to over the hole (#69). A spoil bank that
       dies into the meadow is within a hair of the meadow over the width of
       its skirt, and the two then trade pixels — which is the seam the porter
       photographed, drawn along the whole length of the cut. Measured against
       the vertex's own DRAWN height rather than lawnY(), because what fights
       is the triangle, not the field it was sampled from. */
    const sp = spoilTopAt(x, z);
    if (sp !== null && sp >= pos.getY(i) + SPOIL_BURY) { under[i] = 1; sunk++; }
    if (!col) continue;
    /* Soil-coloured only beside the OPEN cut, where the grid's transition
       quads show through the bank. Beside a corridor the meadow is a meadow,
       and painting it would draw the tunnel's plan on the lawn in brown. */
    for (let k = 0; k < 8; k++) {
      const a = (k / 8) * Math.PI * 2;
      if (inOpenCut(x + Math.cos(a) * NEAR, z + Math.sin(a) * NEAR)) {
        col.setXYZ(i, soil.r, soil.g, soil.b);
        break;
      }
    }
  }
  if (index) {
    if (!lawnMesh.userData.meadowIndex) lawnMesh.userData.meadowIndex = index.array.slice();
    const orig = lawnMesh.userData.meadowIndex;
    const arr = index.array;
    /* ANY corner over the hole, but ALL THREE under the spoil. The two
       polarities are deliberate and opposite. Over the hole there is nothing
       below, so the meadow has to go generously and something dug has to cover
       what that overshoots. Under the spoil there is something above, so the
       meadow may only go where it is certainly hidden — removed generously,
       the hole would reach out past the hem into open field. */
    for (let t = 0; t < orig.length; t += 3) {
      const a = orig[t], b = orig[t + 1], c = orig[t + 2];
      const gone = buried[a] || buried[b] || buried[c] || (under[a] && under[b] && under[c]);
      if (gone) { arr[t] = a; arr[t + 1] = a; arr[t + 2] = a; }
      else { arr[t] = a; arr[t + 1] = b; arr[t + 2] = c; }
    }
    index.needsUpdate = true;
  }
  pos.needsUpdate = true;
  if (col) col.needsUpdate = true;
  geo.computeVertexNormals();
  geo.computeBoundingSphere();
  if (grassField && typeof grassField.clearIn === 'function') {
    /* The same test, so no blade is left standing on a triangle that is no
       longer drawn — and so the meadow over a corridor keeps its grass. */
    /* Plus anything the spoil has actually buried: a blade rooted on meadow
       the cut's bank was heaped over came up THROUGH the bank. */
    grassField.clearIn((x, z) => near(x, z) && (meadowCut(x, z) || underSpoil(x, z) || excavationFloorAt(x, z) !== null
      || ((spoilTopAt(x, z) ?? -Infinity) >= lawnY(x, z) - 0.2)));
  }
  if (gardenDecor) {
    /* Same test, plus the ground in front of the mouth: a mushroom standing
       on the apron would be on the one path every ant of the colony takes. */
    const ex = getExcavation();
    const m = ex ? rampCentre(ex, 0) : null;
    gardenDecor.clearIn((x, z) => near(x, z) && (meadowCut(x, z) || underSpoil(x, z) || excavationFloorAt(x, z) !== null
      || ((spoilTopAt(x, z) ?? -Infinity) >= lawnY(x, z) - 0.2)),
    m ? m.x : NaN, m ? m.z : NaN, ex ? hwAt(ex, 0) * 1.5 + APRON_LEN : 0);
  }
  return moved;
}

/* ---- what makes it inhabited (#12) --------------------------------------
   Built at founding time, hidden. populateNest(n) reveals n of them. The
   shell is never touched again. */

function buildFurnishing(shell, seed) {
  const R = rng(seed ^ 0x5bd1);
  const sphere = unitSphere(8, 5);
  const box = (sx, sy, sz, p) => makeBasis([sx, 0, 0], [0, sy, 0], [0, 0, sz], p);
  const C = shell.chamber;
  const piles = [];

  const mat = applyNestShading(new THREE.MeshStandardMaterial({
    vertexColors: true, roughness: 0.85, metalness: 0, side: THREE.DoubleSide,
  }));

  for (let i = 0; i < MAX_BROOD; i++) {
    const a = (i / MAX_BROOD) * Math.PI * 2 + R() * 0.5;
    const rad = C.r * (0.28 + R() * 0.34);
    const px = C.x + Math.cos(a) * rad, pz = C.z + Math.sin(a) * rad;
    const M = new MeshBuilder();
    const eggs = 5 + Math.floor(R() * 5);
    for (let e = 0; e < eggs; e++) {
      const ea = R() * Math.PI * 2, er = Math.sqrt(R()) * 2.6;
      const ex = px + Math.cos(ea) * er, ez = pz + Math.sin(ea) * er;
      const s = 0.75 + R() * 0.45;
      M.bake(sphere, box(s * 1.25, s * 0.85, s, [ex, C.y + s * 0.7, ez]),
        (bx, by) => mixColor(C_BROOD, C_SOIL_A, clamp(0.55 - (by - C.y) * 0.25, 0, 1)).toArray());
    }
    const mesh = new THREE.Mesh(M.toBufferGeometry(), mat);
    mesh.name = 'nest-brood-' + i;
    mesh.visible = false;
    mesh.castShadow = false;
    // Lamp added now, black. There is no way to remove a light from the local
    // pool (world/lighting.js keeps a flat array on purpose), so a pile that
    // is not yet laid contributes a lamp with no radiance instead.
    const lamp = addLocalLight([px, C.y + 2.2, pz], [0, 0, 0]);
    piles.push({ mesh, lamp, on: false });
  }

  /* The first glow-bead, hung from the ceiling, appearing with the fourth
     clutch (ambiance §2c plan 6). Emissive, like every other bead in the
     nest — it is a light source, not a lit surface. */
  const B = new MeshBuilder();
  const bx = C.x + (R() - 0.5) * 6, bz = C.z + (R() - 0.5) * 6;
  const by = C.ceilY - 3.2;
  B.bake(sphere, box(1.5, 1.8, 1.5, [bx, by, bz]), () => C_GLOW.toArray());
  const beadMesh = new THREE.Mesh(B.toBufferGeometry(), texturedEmissiveMaterial({
    // #78: 0.95 -> 2.2, so the bead reads as a source in its own right; the
    // halo round it is core/bloom.js, which only this and the lamp bodies feed.
    map: capAlbedo(), strength: 0.7, emissive: 2.2, color: 0x777777, side: THREE.DoubleSide,
  }));
  beadMesh.name = 'nest-glow-bead';
  markEmitter(beadMesh);
  beadMesh.visible = false;
  const beadLamp = addLocalLight([bx, by, bz], [0, 0, 0]);

  return { piles, bead: { mesh: beadMesh, lamp: beadLamp, on: false } };
}

/* ---- the public act ------------------------------------------------------ */

/**
 * Dig the first chamber at (x, z). Same verdict as canFoundAt() — it calls
 * it. On success the meshes and lights appear immediately; nothing else in
 * the world is rebuilt.
 */
export function foundNest(x, z) {
  const verdict = canFoundAt(x, z);
  if (!verdict.ok) return verdict;

  const seed = Math.floor(Math.abs(x) * 131 + Math.abs(z) * 977) % 9973;
  paintJobs.length = 0;
  coverMemo.clear();
  clearVolume();
  const shell = buildShell(x, z, seed);

  const group = new THREE.Group();
  group.name = 'founded-nest';
  const shellMesh = new THREE.Mesh(shell.geometry, applyNestShading(texturedSurfaceMaterial({
    map: dirtAlbedo(), strength: 0.30, side: THREE.DoubleSide,
  }), { cool: true }));
  shellMesh.name = 'founded-nest-shell';
  shellMesh.receiveShadow = true;
  group.add(shellMesh);

  /* Everything roofed is the volume's (#81), drawn by its own mesher into
     this group with the SAME wall material the hand-built rooms had. Pushed a
     hair back in depth: at the chamber's headwall the volume's floor runs a
     unit under the mound's carved floor on purpose (no slit between the two),
     and there the mound has to win the tie. */
  const volMat = nestMaterial();
  /* #90: flat facets, like the prototype's tunnel: with the contour texture
     gone, the facets and the crevice shade are what the wall is made of. */
  volMat.flatShading = true;
  volMat.polygonOffset = true;
  volMat.polygonOffsetFactor = 1;
  volMat.polygonOffsetUnits = 2;
  const ex0 = shell.ex;
  const mesher = createVolumeMesher({
    group,
    material: volMat,
    /* Past the headwall the cut and the mound draw the ground. What faces
       up (the floor) runs DOOR_OVERLAP on under the mound's carved floor, so
       there is no slit between the two; what faces down (the lintel's
       underside) stops a unit inside, behind the mound's lintel ring, which
       hangs a hair under it (doorTopAt) and hides the clip; the jambs stop at
       the headwall itself, where the mound's own jambs take over. */
    clip: (px, py, pz, ny) => inOpenCutPastDoor(px, pz, ny > 0.5 ? DOOR_OVERLAP : ny < -0.5 ? -1.0 : 0, py),
    colour: volumeColour,
    lawnAt: (px, pz) => bakedLawnAt(ex0, px, pz),
  });
  mesher.rebuildAll();

  const furnishing = buildFurnishing(shell, seed);
  for (const p of furnishing.piles) group.add(p.mesh);
  group.add(furnishing.bead.mesh);

  if (host) host.add(group);

  /* Cut the hole in the meadow. Until this ran, the excavation was roofed by
     the lawn grid and there was nothing to walk into. */
  openTheMeadow();
  resettleResources((x, z) => excavationFloorAt(x, z) !== null || underSpoil(x, z));

  /* Two lamps and they say opposite things on purpose. The cold one is the
     daylight coming down the open cut — the world being left behind;
     sealNest() takes it away. It sits at the foot of the ramp rather than at
     the mouth now that the descent is open for its whole length: at the mouth
     it would be a lamp in broad daylight. The warm one is the entrance seen
     from the lawn, the only warm point on an otherwise cold map. */
  /* The face she will be looking at when she gets to the bottom. Placed at
     founding rather than when the first fouisseuse hatches, because it is what
     the descent is FOR: the porter asked to arrive at the bottom in front of
     earth to be dug, and a bottom with nothing in it until a caste exists is
     the room he already has. */
  placeFirstFace(shell.ex);

  const foot = rampCentre(shell.ex, shell.ex.descend);
  const coldLight = addLocalLight([foot.x, shell.floorY + 6, foot.z], COLD_SHAFT_LIGHT);
  const warmLight = addLocalLight([x, shell.mouthY - 2.5, z], WARM_MOUTH_LIGHT);

  nest = {
    x, z, group,
    mouth: { x, y: shell.mouthY, z, r: shell.ex.hw },
    chamber: shell.chamber,
    floorY: shell.floorY,
    axis: { origin: shell.origin, dir: shell.dir, length: shell.uMax },
    brood: 0,
    sealed: false,
    _mesher: mesher,
    _furnishing: furnishing,
    _coldLight: coldLight,
    _warmLight: warmLight,
    _coldFade: 1,
  };

  rebuildSpoil();
  rebuildPan();

  /* Tell the shader where the hole is, so the sun stops shining into it.
     The nest is at z > 0, which world/lighting.js's daylight falloff calls
     "outdoors" — without this the chamber is lit like an open field twenty
     units underground. */
  /* Centred on the CHAMBER, not on the mouth. The cut is open to the sky for
     its whole length and has to stay lit like the outdoors it is; only the
     roofed end of the nest may be darkened, or the ramp reads as a tunnel
     someone forgot to light. */
  setNestPit(shell.chamber.x, shell.mouthY, shell.chamber.z, CHAMBER_R * 1.25, NEST_DEPTH);
  setNestMouth(x, z, shell.ex.hw);

  return { ok: true };
}


/* ---- walking in (#41; contract 6) --------------------------------------- */

/**
 * { contains, floorY, headroom } | null while nothing is dug.
 *
 * This is the answer to "am I underground", and there is exactly one of it, on
 * purpose: a second one derived in player/** from the nest's landmarks is the
 * divergence design/api-monde-gameplay.md exists to prevent, and it is written
 * down there as the thing to delete when this lands.
 *
 * headroom() returns Infinity in the open cut and a real clearance under the
 * chamber's dome and the gallery's roof. Finite therefore means "there is soil
 * over your head" — which is the one question a single height per (x, z)
 * cannot answer on its own, and the reason the contract asks for it.
 */
export function nestFootprint() {
  return excavationFootprint(lawnY);
}

/**
 * The walkable centre line, mouth -> chamber. Sampled off the same arc and the
 * same floor function groundY() answers with, so a caller that follows it is
 * on the floor by construction rather than by agreement.
 */
export function descentPath() {
  return excavationDescentPath();
}

/* ---- digging: faces, tunnels and rooms (#51, #52) ------------------------

   The round-13 gallery was a 46-unit tube that appeared in one piece when a
   gauge filled. It is gone, and what replaces it is the porter's own
   description: the queen arrives at the bottom facing earth to be dug, lays
   fouisseuses, they work at that face behind a circular gauge, and what
   appears is a small ROOM — a hall — from which further tunnels are dug.

   Why a room rather than a longer tunnel. A tunnel that ends is a dead end
   dressed as progress; a room is somewhere to put the next choice. The porter
   asked for a small hall "pour commencer a creuser des tunnels", which is a
   hub, and a hub is the only shape that makes the second dig a decision
   rather than a repetition of the first.

   design/castes-et-micro-macro.md §1 still governs the reveal: it appears at
   once when the gauge fills, not metre by metre. A room that grows costs a
   rebuild every frame and reads as nothing at ant scale.

   THE WORLD DECIDES WHAT OPENS. player/** pays ant-seconds into
   advanceDigFace() and reads back `opened`; every decision about where the
   room goes and how big it is lives here (contract §7). That is what lets a
   harness dig the whole nest with no ant alive anywhere. */

/** Corridor half-width. Derived from the queen, never typed in: the round-13
 *  gallery published 3.1 of walkable half-width for a body of radius 3.3 and
 *  nobody noticed for two rounds, because the harness followed the centre line
 *  where there is nothing to touch (#49). Three queens each side since #67 —
 *  two was room for her body and none for the camera behind it. */
const LINK_HW = QUEEN_R * 3.0;          // 9.9, was 6.6
/** Still small on purpose (the porter's standing note: the goal is not a big
 *  nest), but a room and not a bulge at the end of a corridor that is now
 *  twenty units wide, and — since #62 — a HUB: it has to carry its entrance
 *  and two more doorways with wall left between them. 4.0 could not: a mouth
 *  of this bore takes 2 x asin(12.5 / (r x WALL_OUT)) of its wall, which at
 *  13.2 is 123 degrees, so three of them left no room a player could read as a
 *  room. The arithmetic is in facesToPlan() and this number answers it. */
const HALL_R = QUEEN_R * 4.8;           // 15.84, was 13.2
/** How far a room stands off its parent, wall to wall. */
const HALL_GAP = QUEEN_R * 4.2;         // 13.9, was 14

/** Half-width of a BRANCH corridor — the ones dug from the hall on. Narrower
 *  than the first (9.9) and that is the room's wall talking, not taste: three
 *  mouths of the first bore do not fit on any room this nest is allowed to
 *  have. Still 2.2 queens each side, i.e. her body and the camera behind it,
 *  which is what #67 measured the minimum against. */
const BRANCH_HW = QUEEN_R * 2.2;        // 7.26

/** How much deeper each generation of rooms sits (contract §8, "une profondeur
 *  par génération"). Small on purpose: the corridor has to lose it between the
 *  two doorways, which is some twelve units of run, and what must stay small is
 *  the height change per STEP (movement.js writes ant.y = groundY(x, z) with no
 *  notion of falling). At 4.6 over 12 the ramp is 0.38, under the descent's own
 *  RAMP_SLOPE. */
const GEN_DROP = QUEEN_R * 1.4;         // 4.62

/** Ant-seconds per generation, one constant each, so an arbitration of #63 is a
 *  line to change and not a hunt (contract §8). The first is the sizing
 *  DIG_SECONDS had — one fouisseuse is a real wait, three feel like a crew —
 *  and the two others are the contract's starting values, not an arbitration. */
const FIRST_FACE_SECONDS = 75;          // on the founding chamber's wall
const HALL_FACE_SECONDS = 120;          // on the hall's
const DEEP_FACE_SECONDS = 180;          // one generation deeper
const FACE_SECONDS = [FIRST_FACE_SECONDS, HALL_FACE_SECONDS, DEEP_FACE_SECONDS];

/** The last generation of rooms whose walls carry faces. Rooms deeper than this
 *  are leaves: the nest stops growing rather than growing without bound, and
 *  what bounds it is a number, not the player running out of patience. */
const LAST_DIG_GEN = FACE_SECONDS.length - 1;

/**
 * Rooms come in sizes (the porter, mid-#62), measured against the hall, and the
 * size is a factor on BOTH the plan radius and the price. So a face answers two
 * questions at once — how far the work goes and how big what it opens is — and
 * a player weighing two worksites is weighing a real trade rather than reading
 * two numbers that mean the same thing.
 *
 * `size` is a technical label, like soilAt()'s `kind`: the word a player reads
 * is player/**'s decision, not the world's.
 */
const ROOM_SIZES = [
  { size: 'small', k: 0.75 },
  { size: 'medium', k: 1.0 },
  { size: 'large', k: 1.4 },
];
/** Which size each face slot on a wall asks for, before the ground gets a say:
 *  a middle-sized one first, then the extremes, so a room's two exits are
 *  visibly different jobs. A slot that cannot fit its size falls back to the
 *  smaller ones at the same bearing (facesToPlan) — that is a choice made
 *  BEFORE publishing, not a repair after. */
const SLOT_SIZES = ['medium', 'large', 'small'];
const sizeByName = (name) => ROOM_SIZES.find((s) => s.size === name) || ROOM_SIZES[1];

/** Half-width of the corridor that opens a room of generation `gen`. */
function linkHwFor(gen) { return gen <= 1 ? LINK_HW : BRANCH_HW; }

/** What a face on the wall of a room of generation `gen` costs, for a room of
 *  size factor `k`: the generation ramp times the size (contract §8 + the
 *  porter's ramp). Rounded, because a gauge reads it. */
function faceCost(gen, k) {
  return Math.round(FACE_SECONDS[Math.min(gen, FACE_SECONDS.length - 1)] * k);
}

/**
 * Which way the queen is looking when she reaches the bottom.
 *
 * Taken from the descent path's own last segment rather than from the mouth
 * bearing: the cut curves, so the direction she arrives travelling is not the
 * one she set off in, and a face placed by the latter sits behind her
 * shoulder. This is the whole of "arriver simplement en bas devant de la terre
 * a creuser" (#48) — a direction, not a cutscene.
 */
function arrivalHeading(ex) {
  const path = excavationDescentPath(4);
  if (path && path.length >= 2) {
    const a = path[path.length - 2], b = path[path.length - 1];
    const dx = b.x - a.x, dz = b.z - a.z;
    const l = Math.hypot(dx, dz);
    if (l > 1e-3) return [dx / l, dz / l];
  }
  const c = ex.chamber;
  const dx = c.x - ex.mouth.x, dz = c.z - ex.mouth.z;
  const l = Math.hypot(dx, dz) || 1;
  return [dx / l, dz / l];
}

/* ---- judging a DIRECTION, not a point (#59) ------------------------------

   canFoundAt() only ever looked at the chamber's own point: slope, water, rock,
   bounds, at the centre and nowhere else. The round-16 measurement against the
   real groundY() found 622 of 2504 legal point-and-direction pairs whose
   gallery roof came out ABOVE the terrain somewhere along its length, 27 of them
   from the mouth onward, the worst by 21.3 units. A flat, dry site can aim
   straight into a bank nobody looked at.

   So a face is published only if the corridor it opens AND the room at the end
   of it stay buried over their WHOLE run, and the run is sampled — centre line
   and both FLANKS, because a test that follows the centre line never touches a
   wall (PROGRESS.md trap 7). A direction that fails is not corrected
   afterwards: it is not offered. Same rule as canFoundAt(), same reason.

   WHAT "BURIED" MEANS HERE, measured rather than asserted. Nothing in this nest
   is under virgin meadow: the chamber's own dome stands some seven units ABOVE
   it and is covered by its spoil, which is both what an ant does and the only
   surface mark roofed ground gets. So the test cannot be "under the lawn" — it
   is "needs no more spoil than the chamber itself needed", which is what the
   contract's "la même marge de couverture que le dôme de la chambre" says, and
   it is a budget the world has already been seen to pay. A bearing that falls
   away downhill blows through it long before anything surfaces. */

/** Soil the founding chamber's own dome needed piled over it — the reference
 *  every later room is held to. */
function coverBudget(ex) {
  const c = ex.chamber;
  return Math.max(0, roomFloorY(ex, c) + c.roof + ROOF_COVER - lawnY(c.x, c.z));
}
/**
 * How much more spoil than the chamber's own dome needed a candidate may ask
 * for. Half the depth of the nest: a heap that much taller than the chamber's
 * still reads as the same landmark, and past it the ground has fallen away by
 * more than the nest is deep — the corridor is running out of the hill it was
 * dug into, which is exactly the #59 defect.
 *
 * MEASURED, not chosen. On the harness's site the chamber's own bill is 10.9
 * units of spoil and the 25 candidate bearings come out between 14.9 and 17.7:
 * the interesting cases are a few units apart, not a factor apart, so the
 * threshold has to be set in units and looked at. At 6.5 the bearings that
 * merely run downhill are offered and the ones that dive off the shoulder of
 * the knoll are refused, along with every bearing that would put a roof under
 * the open cut. The #59 measurement's own worst case — a roof 21.3 units over
 * the terrain — is refused by a wide margin.
 *
 * It cannot be zero, and that is worth saying because it looks like it should
 * be: NOTHING in this nest is under virgin meadow — the chamber's own dome
 * stands seven units above it and is covered by its spoil — so "no spoil at
 * all" would refuse every direction on every site, including the one round 18
 * shipped.
 */
const COVER_ALLOWANCE = NEST_DEPTH * 0.5;
const COVER_STEP = 3.0;

/** Is (x, z) under the OPEN cut — where there is no soil overhead at all, only
 *  the trench and the batter of its faces? A roof there is a roof with a hole
 *  in it. Inside the spoil mound the cut is roofed (the lintel), so that part
 *  does not count. */
function underOpenCut(ex, x, z) {
  if (Math.hypot(x - ex.chamber.x, z - ex.chamber.z) <= moundRadius(ex)) return false;
  const o = rampOffset(ex, x, z, CUT_BANK);
  return !!o && Math.abs(o.lat) < o.hw + CUT_JITTER + CUT_BATTER * BATTER_MAX + 4;
}

/** Bounds and water, for one sample of a plan. */
function samplePlaceable(x, z) {
  const B = LAWN_BOUNDS;
  // the gallery of the pre-existing nest runs under here, as canFoundAt() says
  if (Math.abs(x) < 34 && z < 34) return false;
  return x >= B.x0 + 2 && x <= B.x1 - 2 && z >= B.z0 + 1 && z <= B.z1 - 2
    && waterDepthAt(x, z) <= 0 && distanceToWater(x, z) >= MIN_WATER * 0.6;
}

/** A candidate: where the room would go, how deep, and the corridor to it. */
function makePlan(ex, from, hx, hz, gen, sizeName) {
  const spec = sizeByName(sizeName);
  const r = HALL_R * spec.k;
  const reach = from.r + HALL_GAP + r;
  const hw = linkHwFor(gen);
  /* The drop is clamped by the run available between the two doorways. A fixed
     notch on a short corridor is a cliff, and a cliff is a teleport in play. */
  const run = Math.max(6, reach - roomTrimR(from) - (r * WALL_OUT - 0.5));
  const drop = Math.min(GEN_DROP, run * RAMP_SLOPE * 0.85);
  return {
    from, hx, hz, gen, size: spec.size, k: spec.k,
    x: from.x + hx * reach, z: from.z + hz * reach,
    r, hw, roof: LINK_ROOF, wall: CHAMBER_WALL, domeRoof: CHAMBER_ROOF,
    fy: roomFloorY(ex, from) - drop,
    reach,
  };
}

/** Does the plan's whole run — corridor and room — stay buried, in bounds and
 *  out of the water? */
function planStaysBuried(ex, plan) {
  const budget = coverBudget(ex) + COVER_ALLOWANCE;
  const from = plan.from;
  const bad = (x, z, top) => !samplePlaceable(x, z) || underOpenCut(ex, x, z)
    || top + ROOF_COVER - lawnY(x, z) > budget;

  const sA = roomTrimR(from), sB = plan.reach - (plan.r * WALL_OUT - 0.5);
  const px = -plan.hz, pz = plan.hx;
  for (let s = sA; s <= sB + COVER_STEP; s += COVER_STEP) {
    const at = Math.min(s, sB);
    const fy = lerp(roomFloorY(ex, from), plan.fy, clamp((at - sA) / Math.max(sB - sA, 1e-3), 0, 1));
    /* The tube's own flare, not its widest section everywhere: mouthFlareAt()
       only opens the bore out within MOUTH_RUN of each doorway, and charging the
       mouth's crest along the whole corridor overstates its roof by 2.4 units —
       enough to refuse directions whose built roof is perfectly well buried. */
    const flare = 1 + MOUTH_FLARE * Math.pow(clamp(1 - Math.min(at - sA, sB - at) / MOUTH_RUN, 0, 1), 2);
    const bore = plan.hw * TUNNEL_BORE * flare * (1 + TUNNEL_LUMP);
    const crest = plan.roof * flare * (1 + TUNNEL_LUMP);
    const cx = from.x + plan.hx * at, cz = from.z + plan.hz * at;
    for (const k of [-1, 0, 1]) {
      if (bad(cx + px * k * bore, cz + pz * k * bore, fy + crest)) return false;
    }
  }

  /* The room, over its whole plan: the dome's own profile at three radii, so
     the rim is judged as well as the apex. */
  for (const q of [0, 0.6, 1]) {
    const rad = plan.r * WALL_OUT * q;
    const top = plan.fy + plan.wall + (plan.domeRoof - plan.wall) * Math.sqrt(Math.max(0, 1 - q * q));
    const n = q === 0 ? 1 : 12;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      if (bad(plan.x + Math.cos(a) * rad, plan.z + Math.sin(a) * rad, top)) return false;
    }
  }
  /* And the hem of the heap that will cover it has to be on the map. */
  const heapR = plan.r * (WALL_OUT + WALL_WOBBLE) + HEAP_SKIRT;
  const B = LAWN_BOUNDS;
  return plan.x - heapR >= B.x0 && plan.x + heapR <= B.x1
    && plan.z - heapR >= B.z0 + 1 && plan.z + heapR <= B.z1;
}

/** Is the plan clear of everything already dug? Two rooms that intersect are
 *  one badly shaped room, and a corridor through a room is a hole in its wall
 *  nobody cut. */
function planIsClear(ex, plan) {
  const from = plan.from;
  for (const r of ex.rooms) {
    if (r === from) continue;
    if (Math.hypot(plan.x - r.x, plan.z - r.z) < (plan.r + r.r) * (WALL_OUT + WALL_WOBBLE) + 4) return false;
  }
  const sA = roomTrimR(from), sB = plan.reach - (plan.r * WALL_OUT - 0.5);
  const bore = plan.hw * TUNNEL_BORE * (1 + MOUTH_FLARE);
  for (let s = sA; s <= sB; s += COVER_STEP) {
    const x = from.x + plan.hx * s, z = from.z + plan.hz * s;
    for (const r of ex.rooms) {
      if (r === from) continue;
      if (Math.hypot(x - r.x, z - r.z) < r.r * (WALL_OUT + WALL_WOBBLE) + bore + 3) return false;
    }
    for (const L of ex.links) {
      /* The corridors that meet at this room are excluded: they share its
         floor by design, and what keeps two of them apart is the jamb of wall
         between their doorways (facesToPlan), not a distance. */
      if ((L.ends || []).includes(from.id)) continue;
      const t = clamp(((x - L.ax) * L.hx + (z - L.az) * L.hz) / L.len, 0, 1);
      const qx = L.ax + L.hx * L.len * t, qz = L.az + L.hz * L.len * t;
      if (Math.hypot(x - qx, z - qz) < L.hw * TUNNEL_BORE + bore + 3) return false;
    }
  }
  return true;
}

/** Half the angle a corridor's mouth takes out of a room's wall. */
function doorHalfAngle(room, hw) {
  const Rd = room.r * WALL_OUT;
  return Math.asin(Math.min(0.985, (hw * TUNNEL_BORE * (1 + MOUTH_FLARE)) / Rd));
}
/** Wall that must be left standing between two doorways, in radians of the
 *  room's own circle. Below this a room stops reading as a room and becomes a
 *  crossroads — which is not the shape a hub wants, and not what a wall the
 *  player has to recognise a FACE on can afford either. */
const JAMB = 0.42;

/**
 * Which faces a room's wall can carry, and where. Two or three (contract §8),
 * and which of the two is arithmetic rather than taste: a mouth of this bore
 * takes 2 x asin(bore / Rd) out of the wall, the corridor the room was opened
 * by already has one, and what is left has to hold the new ones plus a jamb
 * each. Then every candidate bearing is judged over its whole run
 * (planStaysBuried) and rotated off its ideal until it passes — or dropped.
 */
function facesToPlan(ex, room, base) {
  const gen = room.gen || 0;
  const hw = linkHwFor(gen + 1);
  const mine = doorHalfAngle(room, hw);
  /* How far off `base` a doorway may sit before it eats into the one the room
     was opened by, which lies at base + PI. */
  const limit = Math.PI - (doorHalfAngle(room, room.gen <= 1 ? LINK_HW : BRANCH_HW) + mine + JAMB);
  const need = 2 * mine + JAMB;
  if (limit <= 0) return [];
  const want = clamp(1 + Math.floor((2 * limit) / need), 1, 3);
  const ideal = want === 1 ? [0] : [];
  for (let i = 0; want > 1 && i < want; i++) ideal.push(-limit + (i * 2 * limit) / (want - 1));

  const a0 = Math.atan2(base[1], base[0]);
  const taken = [];
  const out = [];
  for (let i = 0; i < ideal.length; i++) {
    let placed = null;
    for (const nudge of [0, 0.18, -0.18, 0.36, -0.36, 0.54, -0.54]) {
      const dev = ideal[i] + nudge;
      if (Math.abs(dev) > limit) continue;
      if (taken.some((t) => Math.abs(t - dev) < need)) continue;
      const th = a0 + dev;
      const hx = Math.cos(th), hz = Math.sin(th);
      /* The intended size first, then smaller ones at the same bearing: a
         direction that cannot hold a large room may still hold a small one,
         and choosing between candidates is not the same thing as repairing a
         bad one after the fact. */
      for (const name of [SLOT_SIZES[i % SLOT_SIZES.length], 'medium', 'small']) {
        const plan = makePlan(ex, room, hx, hz, gen + 1, name);
        if (out.some((p) => Math.hypot(p.x - plan.x, p.z - plan.z) < (p.r + plan.r) * (WALL_OUT + WALL_WOBBLE) + 4)) continue;
        if (!planIsClear(ex, plan) || !planStaysBuried(ex, plan)) continue;
        placed = { plan, dev };
        break;
      }
      if (placed) break;
    }
    if (!placed) continue;
    taken.push(placed.dev);
    out.push(placed.plan);
  }
  return out;
}

/** Publish a room's faces on its wall. Called the moment the room opens, which
 *  is what makes the nest grow rather than end. */
function publishRoomFaces(ex, room, base) {
  if ((room.gen || 0) > LAST_DIG_GEN) return [];
  const out = [];
  let slot = 0;
  for (const plan of facesToPlan(ex, room, base)) {
    const id = `${room.id}-${'abc'[slot] || slot}`;
    out.push(addDigFace(`face-${id}`,
      room.x + plan.hx * room.r * 0.97, room.z + plan.hz * room.r * 0.97,
      roomFloorY(ex, room), -plan.hx, -plan.hz,
      faceCost(room.gen || 0, plan.k), {
        kind: 'room',
        id,
        x: plan.x, z: plan.z, r: plan.r, size: plan.size,
        gen: plan.gen, fy: plan.fy, hw: plan.hw,
        from: { id: room.id, x: room.x, z: room.z, r: room.r },
      }));
    slot++;
  }
  return out;
}

/**
 * The first face: on the chamber wall, dead ahead of the arriving queen — and
 * only where the hall behind it stays buried (#59), and where that hall can
 * carry work of its own.
 *
 * THE LOOKAHEAD, and why the hall of all rooms needs one. Every other room in
 * the nest is dug from a wall somebody chose out of two or three offers, so a
 * dead end is a choice the player made. The hall is not: it is the only room
 * the first face can open, and if it lands somewhere its own walls cannot be
 * dug — thirty units off the south edge of the map, back to the chamber — then
 * the nest is finished after one dig and nothing on screen says why. Measured on
 * the harness's own site: dead ahead is perfectly well buried and carries
 * exactly one face; twenty degrees over, it carries two.
 *
 * So the bearing is chosen with one generation of foresight, and the preference
 * is stated in that order: a hall with two faces, else one, else any hall that
 * is buried. Never no hall — canFoundAt() has already said this place is legal,
 * and a nest that cannot be dug would make the two verdicts disagree.
 */
function placeFirstFace(ex) {
  const [ax, az] = arrivalHeading(ex);
  const c = ex.chamber;
  const a0 = Math.atan2(az, ax);
  /* Smallest turn first: the face has to be in front of her when she arrives
     (#48), so the deviation is a preference and the ground is the requirement. */
  const devs = [0];
  for (let k = 1; k <= 12; k++) devs.push(k * 0.26, -k * 0.26);
  const publish = (hx, hz, plan) => addDigFace('face-hall',
    c.x + hx * c.r * 0.97, c.z + hz * c.r * 0.97, roomFloorY(ex, c),
    -hx, -hz, faceCost(0, plan.k), {
      kind: 'room',
      id: 'hall',
      x: plan.x, z: plan.z, r: plan.r, size: plan.size,
      gen: 1, fy: plan.fy, hw: plan.hw,
      from: { id: c.id, x: c.x, z: c.z, r: c.r },
    });

  for (const wantGrowth of [2, 1, 0]) {
    for (const d of devs) {
      const hx = Math.cos(a0 + d), hz = Math.sin(a0 + d);
      const plan = makePlan(ex, c, hx, hz, 1, 'medium');
      if (!planStaysBuried(ex, plan)) continue;
      if (wantGrowth > 0) {
        const hall = { id: 'hall', x: plan.x, z: plan.z, r: plan.r, gen: 1, fy: plan.fy };
        if (facesToPlan(ex, hall, [hx, hz]).length < wantGrowth) continue;
      }
      return publish(hx, hz, plan);
    }
  }
  return null;
}

/* ---- a face's work, dug into the volume (#81) ----------------------------

   Round 16 opened a room in one piece the moment a gauge filled: design/
   castes-et-micro-macro.md §1 ruled out growing it metre by metre because a
   room that grows cost a mesh rebuild every frame. With the volume that cost
   is gone — a change dirties a few 16^3 chunks and the mesher remeshes them
   inside a per-frame budget — so a face now opens the ground AS it is worked:
   the corridor advances from the face towards the planned room over the first
   half of the gauge, and the room is dug out from its doorway over the
   second. The porter sees the work happen, and #82's painted plans will grow
   the same way.

   While it is being dug the cavity keeps MIN_COVER of earth under the meadow
   (the heaps that cover a finished room's dome only appear when it is
   finished); on completion the full brushes are applied without that limit
   and the room is registered — heap, lamps, faces, fungus — exactly as
   before. So `dugRooms()` still only names a room once its face is done. */

/** The share of a face's gauge spent digging the corridor; the rest digs the
 *  room out. */
const FACE_TUNNEL_SHARE = 0.5;
/** Re-dig only when the front has moved this far: a colony pays a face every
 *  frame, and each application is a few milliseconds of brush. */
const FACE_STEP = 1.0;

/** The corridor and room a face opens, as brush parameters. Mirrors what
 *  openRoom() registers (addLink's ends, trims and floor ramp) so the dug
 *  shape and the metadata describe the same corridor. */
function facePlanGeometry(ex, spec) {
  const parent = ex.rooms.find((r) => r.id === spec.from.id) || ex.chamber;
  const dx = spec.x - parent.x, dz = spec.z - parent.z;
  const l = Math.hypot(dx, dz) || 1;
  const hx = dx / l, hz = dz / l;
  const ax = parent.x + hx * parent.r * 0.5, az = parent.z + hz * parent.r * 0.5;
  const bx = spec.x - hx * spec.r * 0.5, bz = spec.z - hz * spec.r * 0.5;
  const len = Math.hypot(bx - ax, bz - az);
  const scP = -parent.r * 0.5, scR = len + spec.r * 0.5;
  const hw = spec.hw || LINK_HW;
  return {
    parent, hx, hz, ax, az, len, scP, scR,
    rs0: scP + roomTrimR(parent), rs1: scR - roomTrimR(spec),
    fy0: roomFloorY(ex, parent), fy1: spec.fy,
    Rb: hw * TUNNEL_BORE, roof: LINK_ROOF, A: hw * TUNNEL_LUMP,
    room: {
      x: spec.x, z: spec.z, fy: spec.fy, Rw: spec.r * WALL_OUT,
      wall: CHAMBER_WALL, roof: CHAMBER_ROOF, A: spec.r * WALL_WOBBLE,
    },
  };
}

/**
 * Dig face `f` to progress p (0..1). `final` applies the whole corridor and
 * room with no cover limit (the face is done). Returns cells opened.
 */
function paintFace(f, p, final) {
  const ex = getExcavation();
  if (!ex || !f || !f.opens) return 0;
  const G = f._geo || (f._geo = facePlanGeometry(ex, f.opens));
  const st = f._paint || (f._paint = { tip: G.scP, rho: 0 });
  const cover = final ? null : MIN_COVER;
  const RHO_FULL = G.room.Rw * 2 + 3;
  /* On completion after a full progressive dig, everything under the cover
     line is already open: only the band the cover held back is left. */
  const coverBand = final && st.tip >= G.rs1 + 3 - 1e-6 && st.rho >= RHO_FULL - 1e-6;
  let opened = 0;
  /* In progress, the digging is queued and done a slab at a time inside the
     frame budget (runPaintJobs); on completion, the queue is drained and the
     rest done at once, because what follows (the heap, the room's own faces)
     is built on the finished shape. min() does not care in which order. */
  const dig = (sdf, box) => {
    if (final) opened += openSdf(sdf, box);
    else queuePaint(sdf, box);
  };
  if (final) runPaintJobs(Infinity);

  const tip = final ? G.scR
    : lerp(G.rs0 - 1, G.rs1 + 3, clamp(p / FACE_TUNNEL_SHARE, 0, 1));
  if (final || tip - st.tip >= FACE_STEP) {
    /* The last front was rounded, so the stretch behind it is re-dug too; on
       completion the whole length, because the cover limit comes off. */
    const from = final ? G.scP : Math.max(G.scP, st.tip - G.Rb * FRONT_DEPTH - G.A - 3);
    dig(tunnelSdf(ex, G, tip, cover, { coverBand }), tunnelBox(G, from, tip + 2));
    st.tip = Math.max(st.tip, tip);
  }

  const k = (p - FACE_TUNNEL_SHARE) / (1 - FACE_TUNNEL_SHARE);
  const rho = final ? Infinity : k > 0 ? lerp(0, RHO_FULL, clamp(k, 0, 1)) : 0;
  if (rho > 0 && (final || rho - st.rho >= FACE_STEP)) {
    const grow = final ? null : {
      x: G.room.x - G.hx * G.room.Rw, y: G.room.fy + 5, z: G.room.z - G.hz * G.room.Rw, r: rho,
    };
    dig(roomSdf(ex, G.room, grow, cover, { prevR: st.rho, coverBand }), roomBox(G.room, grow));
    st.rho = Math.max(st.rho, Math.min(rho, RHO_FULL));
  }
  return opened;
}

/* ---- the dig queue ------------------------------------------------------
   A step of a face's dig is ~5-10 ms of brush: too much to take out of one
   frame every time the front moves a unit. Queued as slabs two lattice
   planes thick and run under PAINT_BUDGET_MS per frame, it costs a slice of
   each frame instead. */
const paintJobs = [];
const PAINT_SLAB = 2;
const PAINT_BUDGET_MS = 3.0;

function queuePaint(sdf, box) {
  paintJobs.push({ sdf, box, x: Math.ceil(box[0]) });
}

function runPaintJobs(budgetMs) {
  if (!paintJobs.length) return;
  const t0 = performance.now();
  while (paintJobs.length) {
    const j = paintJobs[0];
    const x1 = Math.min(j.box[3], j.x + PAINT_SLAB - 1);
    openSdf(j.sdf, [j.x, j.box[1], j.box[2], x1, j.box[4], j.box[5]]);
    j.x = Math.floor(x1) + 1;
    if (j.x > j.box[3]) paintJobs.shift();
    if (performance.now() - t0 > budgetMs) break;
  }
}

/* ---- the pan -------------------------------------------------------------
   A sheet of earth under everything dug, a little below its floor. Nothing
   walks on it and it should never be seen — that is exactly the point.

   The nest is half a dozen meshes that meet along seams: a floor disc and the
   wall standing on it, a corridor and the room it joins, a spoil heap and the
   passage carved through it, a trench and the chamber it arrives at. A height
   field guarantees they agree about HEIGHT; nothing guarantees their triangles
   meet edge to edge, and where they miss by a hair the gap shows whatever is
   behind the world, which underground is the sky.

   Until round 17 the LAWN did this job, by accident: openTheMeadow() pushed
   its vertices below the nest floor, and that sheet closed every seam from
   underneath. Nobody knew, because nobody had removed it. Round 17 stopped
   moving the meadow — it was slicing through the tunnels on its way down — and
   three separate seams showed sky within one build, which is the measure of
   how much was resting on that accident.

   So the backstop is explicit now, and owned. It is NOT a licence to leave
   seams: scripts/verify-descent.mjs rays the ground from above and
   verify-dig.mjs rays it from inside, and both still have to pass. It reaches
   under the whole BUILT shell, not the walkable footprint: since #67 walls
   and tubes stand outside the footprint on purpose. */
const PAN_DROP = 2.5;
const PAN_STEP = 3.0;
const PAN_MARGIN = 6;

/** Everything dug so far, as a world-space box to sheet over. */
function excavationBounds(ex) {
  let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity;
  const put = (x, z, pad) => {
    x0 = Math.min(x0, x - pad); x1 = Math.max(x1, x + pad);
    z0 = Math.min(z0, z - pad); z1 = Math.max(z1, z + pad);
  };
  for (let u = 0; u <= ex.arc.len; u += 4) {
    const c = rampCentre(ex, u);
    put(c.x, c.z, hwAt(ex, u) + CUT_BATTER + PAN_MARGIN);
  }
  for (const r of ex.rooms) put(r.x, r.z, r.r * (WALL_OUT + WALL_WOBBLE) + PAN_MARGIN);
  for (const L of ex.links) {
    const pad = L.hw * TUNNEL_BORE * 1.3 + PAN_MARGIN;
    put(L.ax, L.az, pad);
    put(L.ax + L.hx * L.len, L.az + L.hz * L.len, pad);
  }
  /* and whatever was dug freely (#81), which no room or link describes */
  const v = volumeExtent();
  if (v) { put(v.x0, v.z0, 0); put(v.x1, v.z1, 0); }
  return { x0, x1, z0, z1 };
}

function buildPanMesh(ex) {
  const b = excavationBounds(ex);
  const cols = Math.max(2, Math.ceil((b.x1 - b.x0) / PAN_STEP));
  const rows = Math.max(2, Math.ceil((b.z1 - b.z0) / PAN_STEP));
  const M = new MeshBuilder();
  const grid = [];
  const dug = [];
  // under the DEEPEST floor, not the chamber's: the deeper generations would
  // otherwise be dug straight through their own backstop.
  /* Under the deepest dug point of the volume too (#81): a free dig can go
     lower than any planned room, and the backstop must not slice through it. */
  const low = volumeLowestY();
  const panY = Math.min(deepestFloorY(ex), low === null ? Infinity : low - 1) - PAN_DROP;
  if (nest) nest._panY = panY;
  for (let a = 0; a <= cols; a++) {
    const col = [], dcol = [];
    for (let c = 0; c <= rows; c++) {
      const x = b.x0 + (a / cols) * (b.x1 - b.x0);
      const z = b.z0 + (c / rows) * (b.z1 - b.z0);
      col.push(M.addVertex(x, panY, z, digColour(0.25, 0.10).toArray()));
      dcol.push(excavationFloorAt(x, z) !== null || excavationShellTopAt(x, z) !== null);
    }
    grid.push(col);
    dug.push(dcol);
  }
  /* A quad is laid wherever any of its corners is over dug ground, so the
     sheet reaches one cell past the excavation on every side — which is where
     the seams are. */
  let laid = 0;
  for (let a = 0; a < cols; a++) {
    for (let c = 0; c < rows; c++) {
      if (!(dug[a][c] || dug[a + 1][c] || dug[a + 1][c + 1] || dug[a][c + 1])) continue;
      M.addQuad(grid[a][c], grid[a + 1][c], grid[a + 1][c + 1], grid[a][c + 1]);
      laid++;
    }
  }
  return laid ? M.toBufferGeometry() : null;
}

/** Lay (or re-lay) the pan under everything dug so far. */
function rebuildPan() {
  const ex = getExcavation();
  if (!ex || !nest) return;
  if (nest._pan) {
    nest.group.remove(nest._pan);
    nest._pan.geometry.dispose();
    nest._pan = null;
  }
  const geo = buildPanMesh(ex);
  if (!geo) return;
  const mesh = new THREE.Mesh(geo, nestMaterial());
  mesh.name = 'nest-pan';
  nest.group.add(mesh);
  nest._pan = mesh;
}

/**
 * The spoil from a room, heaped over it — the chamber's mound, for every room
 * dug after it.
 */
function buildSpoilHeap(ex, room, seed) {
  const M = new MeshBuilder();
  const R = heapRadius(ex, room);
  const RINGS = 10, ANG = 48;
  const rows = [];
  const hubLump = vnoise(room.x * 0.13 + seed, room.z * 0.13 + seed) - 0.5;
  const hub = M.addVertex(room.x, pileTopAt(room.x, room.z) ?? heapY(ex, room, room.x, room.z), room.z,
    mixColor(digColour(0.5 + hubLump, 0.34), C_CHITIN, 0.14).toArray());
  for (let ri = 1; ri <= RINGS; ri++) {     // ri = 0 is the hub, not a ring
    const t = ri / RINGS;
    const row = [];
    for (let a = 0; a < ANG; a++) {
      const th = (2 * Math.PI * a) / ANG;
      const px = room.x + Math.cos(th) * t * R, pz = room.z + Math.sin(th) * t * R;
      const lump = vnoise(px * 0.13 + seed, pz * 0.13 + seed) - 0.5;
      const py = pileTopAt(px, pz) ?? heapY(ex, room, px, pz);
      row.push({ i: M.addVertex(px, py, pz, mixColor(digColour(0.5 + lump, 0.34), C_CHITIN, 0.14).toArray()), p: [px, py, pz] });
    }
    rows.push(row);
  }
  for (let a = 0; a < ANG; a++) M.addTri(hub, rows[0][(a + 1) % ANG].i, rows[0][a].i);
  for (let ri = 0; ri < rows.length - 1; ri++) {
    for (let a = 0; a < ANG; a++) {
      const b = (a + 1) % ANG;
      const q = [rows[ri][a], rows[ri][b], rows[ri + 1][b], rows[ri + 1][a]];
      if (buriedQuad(room, q.map((v) => v.p))) continue;
      M.addQuad(q[0].i, q[1].i, q[2].i, q[3].i);
    }
  }
  return M.toBufferGeometry();
}

/**
 * The spoil from a corridor: a low berm along it, joining the heaps at its two
 * ends.
 *
 * Needed since #67 made corridors a queen and a half taller than they were:
 * the roof now stands above the meadow the nest is dug under, and between two
 * heaps nine units of skirt each no longer met over it. Where it runs into a
 * room's heap it is sunk just under that heap's own surface (heapY), and never
 * under a cover over what is built — so the two meet by intersecting, with no
 * open end to see into.
 */
/** Plan half-width of the berm over a corridor. */
function bermWidth(L) {
  return L.hw * TUNNEL_BORE * (1 + MOUTH_FLARE) * (1 + TUNNEL_LUMP) + HEAP_SKIRT;
}

/**
 * Height of a corridor's berm at (x, z), or null off it. heapY()'s opposite
 * number, and for the same reason: the mesh below is built from it and
 * openTheMeadow() decides which lawn triangles are under it from it, so there
 * is no second opinion about where the top of the berm is.
 */
function bermY(ex, L, x, z) {
  /* A hair of tolerance at both edges, because the mesh below samples this at
     its own outermost vertices: recovering s and t from a point placed AT the
     boundary lands on either side of it, and a strict test there answers null
     for a vertex that has to have a height. */
  const s0 = (x - L.ax) * L.hx + (z - L.az) * L.hz;
  if (s0 < -1e-3 || s0 > L.len + 1e-3) return null;
  const s = clamp(s0, 0, L.len);
  const W = bermWidth(L);
  const tRaw = Math.abs(-(x - L.ax) * L.hz + (z - L.az) * L.hx) / W;
  if (tRaw > 1 + 1e-6) return null;
  /* Clamped, and not for tidiness: the profile below raises (1 - t*t) to a
     fractional power, and a t of 1 + 1e-16 — which is what recovering t from a
     vertex placed AT the edge gives — makes that NaN, times a zero that does
     not rescue it. Four NaN vertices, one NaN bounding sphere, one mesh that
     never draws. */
  const t = clamp(tRaw, 0, 1);
  const seed = spoilSeed(ex);
  const base = lawnY(x, z);
  const lump = vnoise(x * 0.13 + seed + 7, z * 0.13 + seed + 7) - 0.5;
  const crest = linkFloorY(ex, L, s) + L.roof * (1 + TUNNEL_LUMP) + ROOF_COVER * 0.55;
  let y = base + Math.max(0, crest - base) * Math.pow(1 - t * t, 0.85) + lump * 1.2 * (1 - t);
  const shell = excavationShellTopAt(x, z);
  const floor = shell === null ? -Infinity : shell + ROOF_COVER * 0.3;
  if (shell !== null) y = Math.max(y, shell + ROOF_COVER * 0.5);
  else y -= HEM_BURY * Math.pow(t, 6);       // eased, like heapY's own hem
  for (const id of L.ends || []) {
    const r = ex.rooms.find((q) => q.id === id);
    if (!r) continue;
    const h = heapY(ex, r, x, z);
    if (h !== null) y = Math.min(y, h - 0.8);
  }
  return Math.max(y, floor);
}

function buildBerm(ex, L, seed) {
  const M = new MeshBuilder();
  const W = bermWidth(L);
  const LAT = [-1, -0.84, -0.7, -0.58, -0.46, -0.34, -0.2, 0, 0.2, 0.34, 0.46, 0.58, 0.7, 0.84, 1];
  const px = -L.hz, pz = L.hx;
  const segs = Math.max(4, Math.round(L.len / 2.0));
  const rows = [];
  for (let i = 0; i <= segs; i++) {
    const u = (i / segs) * L.len;
    const row = [];
    for (const k of LAT) {
      const lat = k * W;
      const x = L.ax + L.hx * u + px * lat, z = L.az + L.hz * u + pz * lat;
      const lump = vnoise(x * 0.13 + seed + 7, z * 0.13 + seed + 7) - 0.5;
      const y = pileTopAt(x, z) ?? bermY(ex, L, x, z);
      row.push({ i: M.addVertex(x, y, z, mixColor(digColour(0.5 + lump, 0.34), C_CHITIN, 0.14).toArray()), p: [x, y, z] });
    }
    rows.push(row);
  }
  for (let i = 0; i < segs; i++) {
    for (let a = 0; a < LAT.length - 1; a++) {
      const q = [rows[i][a], rows[i][a + 1], rows[i + 1][a + 1], rows[i + 1][a]];
      if (buriedQuad(L, q.map((v) => v.p))) continue;
      M.addQuad(q[0].i, q[1].i, q[2].i, q[3].i);
    }
  }
  return M.toBufferGeometry();
}

/** Re-heap every spoil pile over the excavation as it now stands. */
function rebuildSpoil() {
  const ex = getExcavation();
  if (!ex || !nest) return;
  coverMemo.clear();
  for (const m of nest._spoil || []) {
    nest.group.remove(m);
    m.geometry.dispose();
  }
  nest._spoil = [];
  /* WHO DRAWS WHERE TWO PILES SIT ON THE SAME SURFACE (#69). Since every pile
     is built from pileTopAt(), their overlaps are not two shapes crossing any
     more — they are the same shape twice, and the depth buffer has no reason
     to prefer either. Left to chance it picks per pixel and per frame, which
     is the shimmering patchwork the porter saw at the mouth.
     So the order is stated: the mound is added first and pushed nearest, each
     later pile a step further back. A tie is then always won by the same
     surface, and since they carry the same material and the same colouring,
     the seam is invisible rather than merely stable. */
  let depthRank = 0;
  const add = (geo, name) => {
    const mat = nestMaterial();
    mat.polygonOffset = true;
    mat.polygonOffsetFactor = depthRank;
    mat.polygonOffsetUnits = depthRank * 2;
    depthRank += 1;
    const mesh = new THREE.Mesh(geo, mat);
    mesh.name = name;
    mesh.receiveShadow = true;
    nest.group.add(mesh);
    nest._spoil.push(mesh);
  };
  add(buildMound(ex, ex.seed), 'nest-mound');
  const seed = (ex.seed + 613) % 9973;
  for (const room of ex.rooms) {
    if (room === ex.chamber) continue;
    add(buildSpoilHeap(ex, room, seed), `nest-heap-${room.id}`);
  }
  for (const L of ex.links) add(buildBerm(ex, L, seed), `nest-berm-${L.id}`);
}

function nestMaterial() {
  return applyNestShading(texturedSurfaceMaterial({
    map: dirtAlbedo(), strength: 0.30, side: THREE.DoubleSide,
  }), { cool: true });
}

/** The nest's three fungus meshes, created on first use and kept on the nest. */
function fungusField() {
  if (nest._fungus) return nest._fungus;
  const stemMat = applyNestShading(new THREE.MeshStandardMaterial({
    vertexColors: true, roughness: 0.8, metalness: 0,
  }));
  const capMat = (emissive) => applyNestShading(texturedEmissiveMaterial({
    map: capAlbedo(), strength: 0.7, emissive, color: 0x777777, side: THREE.DoubleSide,
  }));
  const make = (geo, mat, name) => {
    const m = new THREE.InstancedMesh(geo, mat, FUNGUS_MAX);
    m.count = 0;
    m.name = name;
    m.frustumCulled = false;   // grows room by room; a stale bound would cull it
    m.setColorAt(0, new THREE.Color(1, 1, 1));
    nest.group.add(m);
    return m;
  };
  nest._fungus = {
    stems: make(stemGeometry(), stemMat, 'nest-fungus-stems'),
    caps: make(capGeometry(), capMat(0.5), 'nest-fungus-caps'),
    // the one cap per cluster that feeds the halo: a few bright points, not a
    // glowing carpet (core/bloom.js takes everything on its layer at full)
    bright: markEmitter(make(capGeometry(), capMat(0.3), 'nest-fungus-bright')),
  };
  return nest._fungus;
}

/**
 * Plant one cluster against `room`'s wall, as far round it as possible from
 * every direction in `avoid` (radians from the room's centre). Returns the
 * lamp it lights, or null if the field is full.
 */
function plantFungus(ex, room, avoid, kind, R) {
  const F = fungusField();
  if (F.caps.count + 8 > FUNGUS_MAX) return null;
  const angGap = (a, b) => Math.abs(Math.atan2(Math.sin(a - b), Math.cos(a - b)));
  let best = 0, bestGap = -1;
  for (let k = 0; k < 24; k++) {
    const a = (k / 24) * Math.PI * 2;
    const gap = Math.min(...avoid.map((b) => angGap(a, b)));
    if (gap > bestGap + 1e-3) { bestGap = gap; best = a; }
  }
  const fy = roomFloorY(ex, room);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
  const v = new THREE.Vector3(), sc = new THREE.Vector3(), c = new THREE.Color();
  const n = 5 + Math.floor(R() * 3);
  for (let i = 0; i < n; i++) {
    const big = i === 0 ? 1.45 : 0.55 + R() * 0.75;
    const a = best + (i === 0 ? 0 : (R() - 0.5) * (9 / room.r));
    const rr = room.r * (i === 0 ? 0.86 : 0.78 + R() * 0.19);
    const x = room.x + Math.cos(a) * rr, z = room.z + Math.sin(a) * rr;
    const y = excavationFloorAt(x, z) ?? fy;
    const s = 2.3 * big;
    const H = 1.7 * s, capR = 1.15 * s, stemR = 0.2 * s;
    // leaning off the wall, into the room, like anything growing to the light
    e.set(Math.sin(a) * 0.18 + (R() - 0.5) * 0.12, R() * 6.28, -Math.cos(a) * 0.18 + (R() - 0.5) * 0.12);
    q.setFromEuler(e);
    m4.compose(v.set(x, y - 0.4, z), q, sc.set(stemR, H + 0.4, stemR));
    F.stems.setMatrixAt(F.stems.count, m4);
    F.stems.setColorAt(F.stems.count, c.setRGB(kind.stem[0], kind.stem[1], kind.stem[2]));
    F.stems.count++;
    const top = new THREE.Vector3(0, H + 0.4, 0).applyQuaternion(q).add(v);
    m4.compose(top, q, sc.set(capR, capR * 0.8, capR));
    const into = i === 0 ? F.bright : F.caps;
    const shade = 0.8 + R() * 0.3;
    into.setMatrixAt(into.count, m4);
    into.setColorAt(into.count, c.setRGB(kind.cap[0] * shade, kind.cap[1] * shade, kind.cap[2] * shade));
    into.count++;
    NEST_FUNGUS.push({ x, z, r: capR * 0.65, y, room: room.id });
  }
  for (const m of [F.stems, F.caps, F.bright]) {
    m.instanceMatrix.needsUpdate = true;
    if (m.instanceColor) m.instanceColor.needsUpdate = true;
  }
  // in front of the cluster and over it, lighting the room from the caps
  // rather than sitting in them
  const lx = room.x + Math.cos(best) * room.r * 0.7, lz = room.z + Math.sin(best) * room.r * 0.7;
  /* #90: 4.6 -> 2.6 over the floor, the prototype's height. A low lamp
     lights the foot of the wall and the floor, where the soft grain and the
     crevice shade read best; a high one only lit the vault. */
  const lamp = addLocalLight([lx, fy + 2.6, lz], kind.light);
  FUNGUS_GLOWS.push(lamp);
  return lamp;
}

/* #90: small clusters at the foot of a corridor's wall, one every ~12 units,
   alternating sides — the prototype's gallery has one every 10.5 and that
   string of low lights is most of why it reads as a fairy place rather than
   a tunnel (design/ambiance-prologue.md §10b.6). A cluster gets its own low
   lamp only while the lamps already within reach leave the pool room for it
   (LIGHT_SLOTS, world/lighting.js); otherwise its caps just glow. */
const CORRIDOR_FUNGUS_STEP = 12;
const CORRIDOR_LAMP_REACH = 24, CORRIDOR_LAMP_MAX_NEAR = 7;
function plantCorridorFungus(ex, link, seed) {
  const F = fungusField();
  const R = rng(seed);
  const s0 = link.rs0 ?? 0, s1 = link.rs1 ?? link.len;
  const n = Math.floor((s1 - s0) / CORRIDOR_FUNGUS_STEP);
  if (n < 1) return;
  const side = [-link.hz, link.hx];
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
  const v = new THREE.Vector3(), sc = new THREE.Vector3(), c = new THREE.Color();
  for (let k = 0; k < n; k++) {
    if (F.caps.count + 4 > FUNGUS_MAX) return;
    const s = s0 + (s1 - s0) * (k + 0.5 + (R() - 0.5) * 0.4) / n;
    const sg = (k + (R() < 0.2 ? 1 : 0)) % 2 ? 1 : -1;
    const cx = link.ax + link.hx * s, cz = link.az + link.hz * s;
    const fy = linkFloorY(ex, link, s);
    // out from the centre line until the wall, a unit and a half up
    let w = 0;
    while (w < link.hw * 1.6 && sampleD(cx + side[0] * sg * w, fy + 1.5, cz + side[1] * sg * w) < -0.9) w += 0.4;
    if (w < 2) continue;
    const kind = FUNGUS_KINDS[R() < 0.72 ? 0 : 1];
    const count = 2 + Math.floor(R() * 3);
    for (let i = 0; i < count; i++) {
      const along = (R() - 0.5) * 2.6, inward = 0.3 + R() * 1.2;
      const x = cx + side[0] * sg * (w - inward) + link.hx * along;
      const z = cz + side[1] * sg * (w - inward) + link.hz * along;
      const y = excavationFloorAt(x, z) ?? fy;
      const capR = 0.8 + R() * 0.8;
      const H = capR * (1.2 + R() * 0.7), stemR = capR * 0.18;
      e.set(-side[1] * sg * 0.2 + (R() - 0.5) * 0.15, R() * 6.28, side[0] * sg * 0.2 + (R() - 0.5) * 0.15);
      q.setFromEuler(e);
      m4.compose(v.set(x, y - 0.3, z), q, sc.set(stemR, H + 0.3, stemR));
      F.stems.setMatrixAt(F.stems.count, m4);
      F.stems.setColorAt(F.stems.count, c.setRGB(kind.stem[0], kind.stem[1], kind.stem[2]));
      F.stems.count++;
      const top = new THREE.Vector3(0, H + 0.3, 0).applyQuaternion(q).add(v);
      m4.compose(top, q, sc.set(capR, capR * 0.8, capR));
      const shade = 0.8 + R() * 0.3;
      F.caps.setMatrixAt(F.caps.count, m4);
      F.caps.setColorAt(F.caps.count, c.setRGB(kind.cap[0] * shade, kind.cap[1] * shade, kind.cap[2] * shade));
      F.caps.count++;
      NEST_FUNGUS.push({ x, z, r: capR * 0.65, y, room: link.id });
    }
    const lx = cx + side[0] * sg * (w - 2.2), lz = cz + side[1] * sg * (w - 2.2);
    let near = 0;
    for (const L of getLocalLights()) {
      if (L.c[0] + L.c[1] + L.c[2] <= 0) continue;
      if (Math.hypot(L.p[0] - lx, L.p[2] - lz) < CORRIDOR_LAMP_REACH) near++;
    }
    if (near < CORRIDOR_LAMP_MAX_NEAR) {
      const lamp = addLocalLight([lx, fy + 2.0, lz], kind.light.map((ch) => ch * 0.55));
      lamp.corridor = true;   // a harness can tell these from a room's own lamps
      FUNGUS_GLOWS.push(lamp);
    }
  }
  for (const m of [F.stems, F.caps]) {
    m.instanceMatrix.needsUpdate = true;
    if (m.instanceColor) m.instanceColor.needsUpdate = true;
  }
}

/** Build what a finished face revealed, light it, and return the room. */
function openRoom(spec, face) {
  const ex = getExcavation();
  if (!ex || !nest) return null;
  const seed = (ex.seed + 613) % 9973;

  const dx = spec.x - spec.from.x, dz = spec.z - spec.from.z;
  const l = Math.hypot(dx, dz) || 1;
  const hx = dx / l, hz = dz / l;
  /* The room the face was on — `chamber` for the first one, and since #62 any
     room that has grown faces of its own. Everything below that used to say
     "chamber" says "parent" now, and that is the whole of what let the nest
     stop at two rooms. */
  const parent = ex.rooms.find((r) => r.id === spec.from.id) || ex.chamber;

  /* The ground itself first (#81): whatever the gauge has not dug yet — and
     the part of the dome the cover limit held back while it was being dug —
     goes now, and the chunks it touched are remeshed at once. Once per room,
     like the rebuild of the spoil below; the per-frame digging before it went
     through the mesher's budget. */
  paintFace(face || { opens: spec }, 1, true);
  nest._mesher.flush();

  const room = addRoom(spec.id, spec.x, spec.z, spec.r, spec.fy, spec.gen || 1);
  room.size = spec.size || null;   // #34: the macro tooltip names it
  /* The corridor as METADATA — its spoil berm, its lamps, the next plans'
     clearance tests. Both ends well inside the rooms they join, as the brush
     facePlanGeometry() dug. */
  addLink(`link-${spec.id}`,
    { x: parent.x + hx * (parent.r * 0.5), z: parent.z + hz * (parent.r * 0.5) },
    { x: spec.x - hx * (spec.r * 0.5), z: spec.z - hz * (spec.r * 0.5) },
    spec.hw || LINK_HW, LINK_ROOF, [parent.id, spec.id]);
  const link = ex.links[ex.links.length - 1];

  rebuildSpoil();
  rebuildPan();

  /* Stretch the underground's darkness out to the new room. Without it the
     hall is lit as the meadow above it — world/lighting.js keys "indoors" off
     this one cavity, and it only ever knew about the chamber. It is one spine,
     so the far end follows the room FURTHEST from the chamber: that segment
     covers everything dug between the two. */
  const far = Math.hypot(room.x - nest.chamber.x, room.z - nest.chamber.z);
  if (!nest._pitFar || far > nest._pitFar.d) nest._pitFar = { x: room.x, z: room.z, d: far };
  setNestPit(nest.chamber.x, nest.mouth.y, nest.chamber.z, CHAMBER_R * 1.25, NEST_DEPTH,
    nest._pitFar.x, nest._pitFar.z);

  /* Lit along the corridor AND in the room, never one lamp at the far end:
     with this rig's 1/(1 + 0.017 d^2) falloff a single lamp is at 0.03 of its
     value forty units away, which is what made the round-13 gallery a bright
     disc in forty units of black. */
  /* Heights are over the ROOM's own floor, which is a notch lower per
     generation: hung off ex.floorY they would end up in the ceiling of the
     deepest rooms and light nothing but rock. */
  const fy = roomFloorY(ex, room);
  /* Two lamps down the corridor rather than one in the middle. With this rig's
     1/(1 + 0.017 d^2) falloff a single lamp is at a fifth of its value at the
     doorway, and the first shot of a branch tunnel was a black slot in a lit
     wall — the gallery's own measurement (GALLERY_LAMPS) all over again. */
  const coldLamp = (p, c) => { LAMP_GLOWS.push(addLocalLight(p, c)); };
  /* Down the TUBE, between the two walls, and high under its roof (#80). At
     0.18 of the link's length from a start half a radius inside the parent,
     the first lamp hung in the parent room's own air at 6.5 over its floor,
     the queen's eye height, and its bloomed body sat on her thorax in every
     shot of the chamber: the "white spot" of round 21. */
  const s0 = parent.r * 0.5, s1 = Math.max(s0 + 1, link.len - spec.r * 0.5);
  for (const t of [0.3, 0.72]) {
    const sl = s0 + (s1 - s0) * t;
    coldLamp([link.ax + link.hx * sl, linkFloorY(ex, link, sl) + 9.0,
      link.az + link.hz * sl], HALL_LAMP_LINK);
  }
  // over her head when she stands in the middle of the room, for the same reason
  coldLamp([room.x, fy + 10.0, room.z], HALL_LAMP_MID);

  /* And the room comes with its own work to do: 2 or 3 faces on ITS walls,
     each opening a room one generation deeper (contract §8). This is what
     makes the hall a hub instead of the end of the game — and it is decided
     here, by the world, because where a tunnel may go is a question about the
     ground and player/** cannot see the ground. */
  const faces = publishRoomFaces(ex, room, [hx, hz]);

  /* Every other room grows a fungus cluster, whose lamp stands in for the far
     cold lamp; the others keep that lamp. */
  const R = rng((seed * 31 + ex.rooms.length * 977) % 99991);
  const avoid = [Math.atan2(-hz, -hx), ...faces.map((f) => Math.atan2(f.z - room.z, f.x - room.x))];
  const fungusLamp = ex.rooms.length % 2 === 0
    ? plantFungus(ex, room, avoid, FUNGUS_KINDS[(ex.rooms.length / 2 + 1) % 2], R) : null;
  if (!fungusLamp) {
    coldLamp([room.x + hx * room.r * 0.55, fy + 8.0, room.z + hz * room.r * 0.55], HALL_LAMP_FAR);
  }
  // after the room's own lamps, so the corridor clusters count them (#90)
  plantCorridorFungus(ex, link, (seed * 53 + ex.links.length * 7919) % 99991);

  openTheMeadow();
  resettleResources((x, z) => excavationFloorAt(x, z) !== null || underSpoil(x, z));
  return room;
}

/** The faces worth walking to (contract §7). */
export function digFaces() { return excavationDigFaces(); }

/** Everything dug so far, by id — for a HUD or a harness that wants to name
 *  where the queen is standing without re-deriving the plan. */
export function dugRooms() {
  const ex = getExcavation();
  return ex ? ex.rooms.map((r) => ({
    id: r.id, x: r.x, z: r.z, r: r.r,
    // its own floor and how deep in the nest it is: since #62 neither is the
    // same for every room, and a caller that assumed so would place a camera,
    // a lamp or an ant a generation's drop off the ground.
    floorY: roomFloorY(ex, r), gen: r.gen || 0,
    // #34: 'small' | 'medium' | 'large' for a dug room, 'chamber' for room 0
    size: r.size || (r === ex.chamber || r.id === 'chamber' ? 'chamber' : null),
  })) : [];
}

/**
 * Pay ant-seconds into one face. Returns what advanceDigFace() returns, with
 * `opened` replaced by the room that was actually built.
 *
 * Idempotent past completion: the caller is a progress gauge, and gauges
 * overshoot — the same reason digGallery() was written idempotent in round 13.
 */
export function payDigFace(id, antSeconds) {
  const r = advanceDigFace(id, antSeconds);
  if (!r) return null;
  const ex = getExcavation();
  const face = ex ? ex.faces.find((f) => f.id === id) : null;
  if (r.opened && r.opened.kind === 'room') {
    const room = openRoom(r.opened, face);
    return {
      ...r,
      opened: room
        ? { kind: 'room', id: room.id, x: room.x, z: room.z, r: room.r, size: r.opened.size, gen: room.gen }
        : null,
    };
  }
  /* Short of done: the ground opens as far as the work has gone (#81). */
  if (!r.done && face && r.needed > 0) paintFace(face, r.worked / r.needed, false);
  return { ...r, opened: null };
}

/* ---- free digging (#81; #83 digs by hand with it, #82 paints plans) -----

   The volume's own API, re-exported through here so the nest's side effects
   come with it: the chunks are remeshed (budgeted, by updateFounding), and the
   underground's darkness is stretched out to cover what was dug. A free dig
   keeps MIN_COVER under the meadow unless the brush says otherwise, so the
   lawn above it never has to open. */

/** Dig `brush` (nestVolume.js brushShape for its fields). Returns the number
 *  of cells opened. No-op before a nest is founded. */
export function openCells(brush) {
  if (!nest) return 0;
  const opened = volumeOpenCells(brush);
  if (opened > 0) {
    const pts = [brush.center, brush.end].filter(Boolean).map((p) => (Array.isArray(p) ? p : [p.x, p.y, p.z]));
    for (const p of pts) {
      const far = Math.hypot(p[0] - nest.chamber.x, p[2] - nest.chamber.z);
      if (!nest._pitFar || far > nest._pitFar.d) {
        nest._pitFar = { x: p[0], z: p[2], d: far };
        setNestPit(nest.chamber.x, nest.mouth.y, nest.chamber.z, CHAMBER_R * 1.25, NEST_DEPTH,
          nest._pitFar.x, nest._pitFar.z);
      }
    }
    // the backstop under the nest has to stay under what was just dug
    const low = volumeLowestY();
    if (low !== null && low < (nest._panY ?? Infinity) + 1) nest._panStale = true;
  }
  return opened;
}

/** Remesh everything the volume has changed, now — for a harness that stops
 *  the frame loop, or a caller that needs the geometry this frame. */
export function flushNestMesh() {
  runPaintJobs(Infinity);
  if (nest) nest._mesher.flush();
}

/** Mesher counters (chunks, triangles, pending) for the harness. */
export function nestMeshStats() {
  return nest ? nest._mesher.stats() : null;
}

/**
 * How inhabited the chamber is: `n` clutches laid, 0..MAX_BROOD. Each one
 * reveals its pile and lights its own warm lamp; the fourth also brings the
 * first glow-bead down on its thread. Reveals only — the chamber shell is
 * never rebuilt, which is the whole point of #12.
 */
export function populateNest(n) {
  if (!nest) return 0;
  const count = Math.round(clamp(n, 0, MAX_BROOD));
  nest.brood = count;
  nest._furnishing.piles.forEach((p, i) => {
    const on = i < count;
    p.mesh.visible = on;
    p.on = on;
    p.lamp.c[0] = on ? BROOD_LIGHT[0] : 0;
    p.lamp.c[1] = on ? BROOD_LIGHT[1] : 0;
    p.lamp.c[2] = on ? BROOD_LIGHT[2] : 0;
  });
  const bead = nest._furnishing.bead;
  bead.on = count >= 4;
  bead.mesh.visible = bead.on;
  bead.lamp.c[0] = bead.on ? GLOW_LIGHT[0] : 0;
  bead.lamp.c[1] = bead.on ? GLOW_LIGHT[1] : 0;
  bead.lamp.c[2] = bead.on ? GLOW_LIGHT[2] : 0;
  return count;
}

/** The queen closes the entrance behind her: the cold shaft light fades out
 *  over ~3 s (ambiance §2c plan 3), leaving the darkest moment in the game. */
export function sealNest(sealed = true) {
  if (nest) nest.sealed = sealed;
}

/** Eased by world.update(); nothing else here is per-frame. */
export function updateFounding(dt, camera = null) {
  if (!nest) return;
  /* The volume's remeshing, inside a per-frame budget (#81): a digger opening
     cells never costs a frame, it costs a slice of one. Nearest chunks first. */
  /* Paint first, and remesh only once the queue is dry: a face's step is a
     few slabs over the same chunks, and meshing between two slabs is meshing
     them twice. */
  runPaintJobs(PAINT_BUDGET_MS);
  if (!paintJobs.length) nest._mesher.update(VOLUME_BUDGET_MS, camera ? camera.position : null);
  if (nest._panStale) {
    nest._panT = (nest._panT || 0) - dt;
    if (nest._panT <= 0) { nest._panStale = false; nest._panT = 1.0; rebuildPan(); }
  }
  const target = nest.sealed ? 0 : 1;
  const k = Math.min(1, dt / 3.0);
  nest._coldFade += (target - nest._coldFade) * k * 3;
  const f = clamp(nest._coldFade, 0, 1);
  nest._coldLight.c[0] = COLD_SHAFT_LIGHT[0] * f;
  nest._coldLight.c[1] = COLD_SHAFT_LIGHT[1] * f;
  nest._coldLight.c[2] = COLD_SHAFT_LIGHT[2] * f;
}

/** Test seam only: forget the founded nest so a harness can dig again. Not
 *  gameplay — nothing in player/** should ever call this. */
/** Debug seam (#69): what covers what, sampled from outside. Not gameplay —
 *  a probe that can ask "is the shell covered here" instead of photographing a
 *  black wedge and guessing. */
export function _coverAt(x, z) {
  return {
    shell: excavationShellTopAt(x, z),
    pile: pileTopAt(x, z),
    lawn: lawnY(x, z),
  };
}

export function _resetFounding() {
  if (nest && nest.group.parent) nest.group.parent.remove(nest.group);
  if (nest) nest._mesher.dispose();
  nest = null;
  paintJobs.length = 0;
  coverMemo.clear();
  clearVolume();
  clearExcavation();
  setNestPit(0, 0, 0, 0, 0);
  setNestMouth(0, 0, 0);
  LAMP_GLOWS.length = 0;
  NEST_FUNGUS.length = 0;
  FUNGUS_GLOWS.length = 0;
}

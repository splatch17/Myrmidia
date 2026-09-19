import * as THREE from 'three';
import { vnoise, rng, clamp, lerp } from '../core/noise.js';
import { nrm3, cross3, makeBasis } from '../core/vecmath.js';
import { MeshBuilder, unitSphere } from '../core/meshBuilder.js';
import {
  groundY, lawnY, groundSlope, waterDepthAt, distanceToWater, soilAt, LAWN_BOUNDS, TUNNEL_MOUTH,
} from './terrain.js';
import {
  makeExcavation, setExcavation, clearExcavation, getExcavation,
  excavationFloorAt, excavationHeadroomAt, excavationFootprint, excavationDescentPath,
  excavationShellTopAt, chamberDoorR,
  rampCentre, rampParam, rampOffset, rampFloorAt, chamberFloorAt,
  addRoom, addLink, addDigFace, excavationDigFaces, advanceDigFace,
  linkMouthS, linkTrimS, mouthFlareAt, roomTrimR,
  RAMP_DESCEND, RAMP_TURN, CHAMBER_R, CHAMBER_ROOF, LINK_ROOF, NEST_DEPTH, ROOF_COVER,
  WALL_OUT, WALL_WOBBLE, TUNNEL_BORE, SPRINGER, MOUTH_FLARE, MOUTH_RUN, TUNNEL_LUMP, DOME_RINGS,
  QUEEN_R, hwAt, APRON_LEN,
} from './excavation.js';
import { texturedSurfaceMaterial, texturedEmissiveMaterial, dirtAlbedo, capAlbedo } from './texturing.js';
import { addLocalLight, applyNestShading, setNestPit } from './lighting.js';
import { resettleResources } from './resources.js';

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
const CUT_BANK = 8.0;       // spoil apron either side, wide enough to cover the
                            // lawn grid's own transition quads (GS = 6)

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

const COLD_SHAFT_LIGHT = [0.55, 0.62, 0.82];   // ambiance §2c plan 2 (soie)
/* Cut from [0.85,0.48,0.17]. The art direction measured this lamp and the
   queen's lighter chitin separately and each is right on its own, but their
   SUM at two units was never measured and she went white under it (defect 2b).
   The ambient floor has since gone 0.30 -> 0.55 as well, so the lamp is no
   longer carrying the entrance on its own and can afford to be a glow rather
   than a source. */
const WARM_MOUTH_LIGHT = [0.46, 0.26, 0.10];   // ambiance §2b: the one warm
                                               // point on the outdoor map
const BROOD_LIGHT = [0.85, 0.55, 0.22];        // ambiance §2c plan 5
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
const HALL_LAMP_LINK = [1.20, 0.72, 0.30];
const HALL_LAMP_MID = [1.55, 0.95, 0.42];
const HALL_LAMP_FAR = [1.35, 0.78, 0.30];
/* Three lamps down the bore rather than one at the end. One lamp with the
   1/(1 + 0.017 d^2) falloff this rig uses is at 0.027 of its value 46 units
   away, which is the whole of the gallery in darkness and a bright disc at
   the end — the measurement that said the gallery's problem is distribution,
   not exposure. Fractions of GALLERY_LEN, so they follow the bore if it is
   ever lengthened. */
const GALLERY_LAMPS = [
  { t: 0.18, c: [0.95, 0.56, 0.22] },
  { t: 0.55, c: [0.72, 0.42, 0.16] },
  { t: 0.92, c: DIG_FACE_LIGHT },
];
const GLOW_LIGHT = [1.95, 1.20, 0.52];         // ambiance §2c plan 6

const MAX_BROOD = 6;

/* ---- state --------------------------------------------------------------- */

let host = null;          // the THREE.Group foundNest() may add to
let lawnMesh = null;      // the meadow, so the cut can be opened in it
let grassField = null;    // ditto, so no blade is left standing in mid air
let nest = null;          // the founded nest, or null
const mixColor = (a, b, t) => new THREE.Color(a).lerp(b, clamp(t, 0, 1));

/** Called once by createWorld(): where a nest dug later should be attached,
 *  and the two surface things a dig has to cut through. */
export function initFounding(group, surface = {}) {
  host = group;
  lawnMesh = surface.lawn || null;
  grassField = surface.grass || null;
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

/**
 * Where a room's wall meets its floor: tucked in and sunk.
 *
 * The wall wobbles out to 1.08 of the room's radius and the floor disc stops
 * at 1.0, so wherever the wobble was high there was a crack between the two —
 * and under the crack, until this round, the meadow had been pushed down out
 * of the way and happened to fill it. With the meadow now left alone under
 * roofed ground (openTheMeadow), the cracks showed sky. So the wall's foot
 * ring is pulled inside the floor's edge and dropped a little under it: the
 * wall stands ON the floor, whatever the wobble does above.
 */
function wallFoot(ring, r, y, roomR) {
  return ring === 0 ? [Math.min(r, roomR * 0.99), y - 0.3] : [r, y];
}

/* Freshly turned earth, damper and darker than the old gallery's weathered
   walls: this hole was dug an hour ago. */
function digColour(proud, extra = 0.18) {
  return mixColor(C_WALL_B, C_WALL_A, proud * 0.8 + 0.10)
    .lerp(C_SOIL_A, extra + proud * 0.14).multiplyScalar(0.88);
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
  const ex = makeExcavation({ x, z }, { y: mouthY, gx: grad[0], gz: grad[1] }, head, seed);
  setExcavation(ex);

  const M = new MeshBuilder();
  const floorY = ex.floorY;
  const C = ex.chamber;

  /* ---- the open cut ----------------------------------------------------
     One swept U: floor, a battered face either side up to the meadow, and a
     spoil bank beyond that, wide enough to hide where the lawn grid was cut.
     It stops as soon as the centre line is inside the spoil mound — from there
     the mound's own carved slot takes over, and then the doorway. */
  const LAT = [-1, -0.62, -0.24, 0.24, 0.62, 1];
  const rows = [];
  /* The trench stops where the SPOIL MOUND starts, not where the chamber
     does. Running it to the chamber wall left its banks buried a unit or two
     inside the heap, and two solids interpenetrating at a shallow angle is a
     flickering seam, not a joint. The mound carries the passage from here on
     (it is carved by the same rampFloorAt), overlapped by two units so there
     is nothing to see between them. */
  const MOUND_R = moundRadius(ex);
  let uCut = ex.arc.len;
  for (let u = 0; u <= ex.arc.len; u += 1.0) {
    const c = rampCentre(ex, u);
    if (Math.hypot(c.x - C.x, c.z - C.z) <= MOUND_R * 0.98) { uCut = Math.min(ex.arc.len, u + 7); break; }
  }
  /* The banks run on past the end of the trench, as far as it takes for both
     of them to be well inside the mound. Stopped with the trench, their ends
     stood out past the mound's hem — the cut is twenty units wide now — and
     between the two the meadow had been opened and nothing covered it: two
     notches of sky beside the entrance, seen from above. */
  const wings = [];
  for (let u = -4; u <= ex.arc.len + 1e-4; u += 2.0) {
    const c = rampCentre(ex, u);
    const full = u <= uCut + 1e-4;
    const t = u / Math.max(ex.arc.len, 1e-3);
    const hw = hwAt(ex, u);
    /* The spoil stands out of the way of the apron. A bank is only a bank
       where the cut is deep enough to have produced one, and at the mouth the
       cut is flush with the meadow — so a rim there was earth from nowhere,
       and it was the whole reason the entrance had to be walked into head-on.
       Smoothstepped over the same run the flare uses, so the two read as one
       shape: a ravine that shallows and widens as it comes up. */
    const rimK = (() => { const k = clamp(u / APRON_LEN, 0, 1); return k * k * (3 - 2 * k); })();
    // lateral unit vector: the arc's own outward normal
    const nx = (c.x - ex.arc.ax) / ex.arc.R, nz = (c.z - ex.arc.az) / ex.arc.R;
    const row = [];
    const put = (lat, y, col) => row.push(M.addVertex(c.x + nx * lat, y, c.z + nz * lat, col));
    const bankAt = (side) => {
      const rim = side * (hw + CUT_BATTER);
      const bank = side * (hw + CUT_BATTER + CUT_BANK);
      const rx = c.x + nx * rim, rz = c.z + nz * rim;
      const bx = c.x + nx * bank, bz = c.z + nz * bank;
      const lump = 0.72 + 0.56 * vnoise(bx * 0.15 + seed, bz * 0.15 + seed);
      return { rim, bank, rx, rz, bx, bz, lump };
    };
    /* Where the cut runs into the mound, its rim is tucked just under the
       mound's own surface, so the two meet by overlapping rather than leaving
       a notch of sky between the trench's face and the mound's slot. */
    const rimY = (B) => Math.min(lawnY(B.rx, B.rz) + RIM_H * B.lump * rimK, (heapY(ex, C, B.rx, B.rz) ?? Infinity) - 0.4);

    const L = bankAt(-1);
    const Rr = bankAt(1);
    if (!full) {
      const wing = (B, first) => {
        const b = M.addVertex(c.x + nx * B.bank, lawnY(B.bx, B.bz) + 0.15 * B.lump, c.z + nz * B.bank, mixColor(digColour(B.lump, 0.34), C_CHITIN, 0.12).toArray());
        const r = M.addVertex(c.x + nx * B.rim, rimY(B), c.z + nz * B.rim, mixColor(digColour(B.lump, 0.30), C_CHITIN, 0.10).toArray());
        return first ? [b, r] : [r, b];
      };
      wings.push({ l: wing(L, true), r: wing(Rr, false) });
      const inMound = (B) => Math.hypot(B.bx - C.x, B.bz - C.z) < MOUND_R - 3;
      if (inMound(L) && inMound(Rr)) break;
      continue;
    }
    put(L.bank, lawnY(L.bx, L.bz) + 0.15 * L.lump, mixColor(digColour(L.lump, 0.34), C_CHITIN, 0.12).toArray());
    put(L.rim, rimY(L), mixColor(digColour(L.lump, 0.30), C_CHITIN, 0.10).toArray());
    for (const k of LAT) {
      const lat = k * hw;
      const px = c.x + nx * lat, pz = c.z + nz * lat;
      const wob = wobbleAt(k * Math.PI, u, seed);
      put(lat, rampFloorAt(ex, px, pz, u, lat) - (u < 0 ? 0.3 : 0),
        digColour(clamp((wob - 0.84) / 0.34 + 0.45, 0, 1), 0.22 + t * 0.06).toArray());
    }
    put(Rr.rim, rimY(Rr), mixColor(digColour(Rr.lump, 0.30), C_CHITIN, 0.10).toArray());
    put(Rr.bank, lawnY(Rr.bx, Rr.bz) + 0.15 * Rr.lump, mixColor(digColour(Rr.lump, 0.34), C_CHITIN, 0.12).toArray());
    rows.push(row);
    wings.push({ l: [row[0], row[1]], r: [row[row.length - 2], row[row.length - 1]] });
  }
  for (let r = 0; r < rows.length - 1; r++) {
    for (let i = 1; i < rows[r].length - 2; i++) {
      M.addQuad(rows[r][i], rows[r][i + 1], rows[r + 1][i + 1], rows[r + 1][i]);
    }
  }
  for (let r = 0; r < wings.length - 1; r++) {
    for (const s of ['l', 'r']) {
      const a = wings[r][s], b = wings[r + 1][s];
      M.addQuad(a[0], a[1], b[1], b[0]);
    }
  }

  /* ---- the chamber ------------------------------------------------------
     The same room shell every room gets (addRoomShell), with its doorway
     left open where the cut arrives. Tested on the quad's own centroid
     against the same rampParam() the ground uses, so the hole in the mesh is
     the hole in the height field, and only up to the top of the straight wall:
     above that is the lintel, which the mound's headwall sits on. */
  const wallQuads = addRoomShell(M, ex, C, seed, CHAMBER_ANG,
    (i, wallRings, q) => i < wallRings && rampParam(ex,
      (q[0].x + q[1].x + q[2].x + q[3].x) * 0.25, (q[0].z + q[1].z + q[2].z + q[3].z) * 0.25) !== null);

  // where the cut was heading when it arrived — the gallery carries on that way
  const tangent = (() => {
    const p0 = rampCentre(ex, Math.max(0, ex.arc.len - 2)), p1 = rampCentre(ex, ex.arc.len);
    const l = Math.hypot(p1.x - p0.x, p1.z - p0.z) || 1;
    return [(p1.x - p0.x) / l, (p1.z - p0.z) / l];
  })();

  return {
    geometry: M.toBufferGeometry(),
    ex,
    wallQuads,
    mouthY, floorY,
    origin: [x, mouthY, z],
    dir: [tangent[0], 0, tangent[1]],
    uMax: ex.arc.len,
    chamber: { x: C.x, y: floorY, z: C.z, ceilY: floorY + CHAMBER_ROOF - 1.5, r: C.r },
  };
}

/* Angular resolution of a room's wall. Not a look: a doorway is cut out of the
   wall a whole quad at a time, so the quad's width is how far a cut doorway can
   fall short of the walkable width it serves (#67). At 64 round a room of
   radius 18 a quad is under two units. */
const CHAMBER_ANG = 64;
const ROOM_ANG = 56;

/**
 * A room's floor, straight wall and dome, added to M. Returns the wall quads,
 * each with where its six indices live, so a corridor dug later can take a
 * doorway out of it (punchWall). `skip(i, wallRings, corners)` leaves a quad
 * out at build time.
 *
 * Built strictly OUTSIDE the published volume (world/excavation.js WALL_OUT,
 * CEIL_MARGIN): the wall wobbles outward only, from WALL_OUT of the radius,
 * and the floor runs on under the wall's foot as a sunk skirt, so there is
 * nothing to see between the two however far out the wobble goes.
 */
function addRoomShell(M, ex, room, seed, ANG, skip) {
  const FLOOR_RINGS = 5, wallRings = 4, domeRings = DOME_RINGS;
  const floorY = ex.floorY;
  const Rd = room.r * WALL_OUT;
  const dh = room.roof - room.wall;
  const skirtR = room.r * (WALL_OUT + WALL_WOBBLE) + 1.6;

  const floorRows = [];
  for (let ri = 0; ri <= FLOOR_RINGS + 1; ri++) {
    const skirt = ri > FLOOR_RINGS;
    const rr = skirt ? skirtR : (ri / FLOOR_RINGS) * room.r;
    const row = [];
    for (let a = 0; a < ANG; a++) {
      const th = (2 * Math.PI * a) / ANG;
      const px = room.x + Math.cos(th) * rr, pz = room.z + Math.sin(th) * rr;
      /* Under the doorway the cut arrives through, the skirt rises to the
         cut's own floor: sunk there, it left a step the height of the cut's
         dished edge with nothing across it, and the sky showed under the
         slot's floor from inside the chamber. */
      const rp = skirt && room === ex.chamber ? rampOffset(ex, px, pz) : null;
      const y = rp && Math.abs(rp.lat) - rp.hw < CUT_BATTER
        ? rampFloorAt(ex, px, pz, rp.u, clamp(rp.lat, -rp.hw, rp.hw)) - 0.1
        : chamberFloorAt(ex, px, pz) - (skirt ? 0.4 : 0);
      row.push(M.addVertex(px, y, pz,
        digColour(clamp((wobbleAt(th, ri, seed) - 0.84) / 0.34 + 0.45, 0, 1), 0.26).toArray()));
    }
    floorRows.push(row);
  }
  for (let ri = 0; ri < floorRows.length - 1; ri++) {
    for (let a = 0; a < ANG; a++) {
      const b = (a + 1) % ANG;
      M.addQuad(floorRows[ri][a], floorRows[ri][b], floorRows[ri + 1][b], floorRows[ri + 1][a]);
    }
  }

  const rows = [];
  for (let i = 0; i <= wallRings + domeRings; i++) {
    const row = [];
    for (let a = 0; a < ANG; a++) {
      const th = (2 * Math.PI * a) / ANG;
      const wob = wobbleAt(th, i, seed);
      let rr, yy;
      if (i <= wallRings) {
        rr = room.r * (WALL_OUT + clamp((wob - 0.84) / 0.35, 0, 1) * WALL_WOBBLE);
        // the foot stands half a unit into the floor skirt, never on its edge
        yy = i === 0 ? floorY - 0.5 : floorY + (room.wall * i) / wallRings;
      } else {
        const phi = ((i - wallRings) / domeRings) * (Math.PI / 2);
        rr = Rd * Math.cos(phi);
        yy = floorY + room.wall + dh * Math.sin(phi);
      }
      const vx = room.x + Math.cos(th) * rr, vz = room.z + Math.sin(th) * rr;
      row.push({
        i: M.addVertex(vx, yy, vz, digColour(clamp((wob - 0.84) / 0.34 + 0.45, 0, 1), 0.20).toArray()),
        x: vx, z: vz, y: yy,
      });
    }
    rows.push(row);
  }
  const quads = [];
  for (let i = 0; i < rows.length - 1; i++) {
    for (let a = 0; a < ANG; a++) {
      const b = (a + 1) % ANG;
      const p = rows[i][a], q = rows[i][b], r = rows[i + 1][a], s = rows[i + 1][b];
      const corners = [p, q, s, r];
      if (skip(i, wallRings, corners)) continue;
      const at = M.indices.length;
      M.addQuad(p.i, q.i, s.i, r.i);
      quads.push({ at, corners: corners.map((v) => [v.x, v.z, v.y]) });
    }
  }
  const top = M.addVertex(room.x, floorY + room.roof, room.z, digColour(0.5, 0.24).toArray());
  const last = rows[rows.length - 1];
  for (let a = 0; a < ANG; a++) M.addTri(top, last[(a + 1) % ANG].i, last[a].i);
  return quads;
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
  const peak = Math.max(base + (first ? 1.6 : 1.2), ex.floorY + room.roof + ROOF_COVER * (first ? 1 : 0.6));
  /* The lump is added, not multiplied: multiplied, a low patch of noise took a
     quarter off the heap and let the dome show through it. */
  let y = base + (peak - base) * Math.pow(Math.max(0, 1 - t * t), 0.85) + lump * (first ? 2.2 : 1.6) * (1 - t);
  const shell = excavationShellTopAt(x, z);
  if (shell !== null) y = Math.max(y, shell + ROOF_COVER * (first ? 0.55 : 0.5));
  /* The hem goes a hair INTO the meadow, so it is buried, never floating —
     except where something built runs out under it. A hem pulled down across
     the corridor was a slab through the corridor's roof. */
  else if (t > 0.999) y = Math.min(y, base - 0.3);
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
  for (let i = 0; i < INNER; i++) radii.push((i / INNER) * RH);
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
      let y = heapY(ex, C, px, pz);

      const rp = rampOffset(ex, px, pz, 4);
      const over = rp ? Math.abs(rp.lat) - rp.hw : Infinity;
      if (rp && ri >= HEAD_OUT) {
        /* Carved to the SAME width the height field calls walkable, then
           battered out to the heap: a shoulder narrower than that is a wall
           standing on ground groundY() says you may walk on. */
        if (over <= 0) y = rampFloorAt(ex, px, pz, rp.u, rp.lat);
        else if (over < CUT_BATTER) {
          const k = over / CUT_BATTER;
          y = lerp(rampFloorAt(ex, px, pz, rp.u, rp.hw * Math.sign(rp.lat)), y, k * k * (3 - 2 * k));
        }
      } else if (rp && ri === HEAD_IN && over < CUT_BATTER) {
        const k = clamp(over / CUT_BATTER, 0, 1);
        y = lerp(lintel, y, k * k * (3 - 2 * k));
      }
      row.push({ i: M.addVertex(px, y, pz, mixColor(digColour(0.5 + lump, 0.34), C_CHITIN, 0.14).toArray()), over });
    }
    mound.push(row);
  }
  for (let ri = 0; ri < mound.length - 1; ri++) {
    for (let a = 0; a < MANG; a++) {
      const q = [mound[ri][a], mound[ri][a + 1], mound[ri + 1][a + 1], mound[ri + 1][a]];
      if (ri === HEAD_IN && q.every((v) => v.over <= 0)) continue;   // the doorway
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
    : lawnY(x, z) - dug > 1.5;                // open cut, but not the threshold
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

function openTheMeadow() {
  if (!lawnMesh || !lawnMesh.geometry) return 0;
  const geo = lawnMesh.geometry;
  const pos = geo.getAttribute('position');
  const col = geo.getAttribute('color');
  const index = geo.getIndex();
  const NEAR = 7.0;
  const soil = C_WALL_B.clone().lerp(C_SOIL_A, 0.4);
  const buried = new Uint8Array(pos.count);
  let moved = 0;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    if (meadowCut(x, z)) { buried[i] = 1; moved++; continue; }
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
    for (let t = 0; t < orig.length; t += 3) {
      const a = orig[t], b = orig[t + 1], c = orig[t + 2];
      if (buried[a] || buried[b] || buried[c]) { arr[t] = a; arr[t + 1] = a; arr[t + 2] = a; }
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
    grassField.clearIn((x, z) => meadowCut(x, z) || underSpoil(x, z) || excavationFloorAt(x, z) !== null);
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
    map: capAlbedo(), strength: 0.7, emissive: 0.95, color: 0x777777, side: THREE.DoubleSide,
  }));
  beadMesh.name = 'nest-glow-bead';
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
  const shell = buildShell(x, z, seed);

  const group = new THREE.Group();
  group.name = 'founded-nest';
  const shellMesh = new THREE.Mesh(shell.geometry, applyNestShading(texturedSurfaceMaterial({
    map: dirtAlbedo(), strength: 0.62, side: THREE.DoubleSide,
  })));
  shellMesh.name = 'founded-nest-shell';
  shellMesh.receiveShadow = true;
  group.add(shellMesh);

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
    /* The chamber's own wall, kept addressable so digging can open it later
       (punchWall). Not a copy of the geometry — the quad list is six index
       slots and a midpoint each, and the mesh is the mesh. */
    _wall: { mesh: shellMesh, quads: shell.wallQuads },
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
 *  twenty units wide. 1.55x the round-16 hall. */
const HALL_R = QUEEN_R * 4.0;           // 13.2, was 8.5
/** How far the hall stands off the chamber, wall to wall. */
const HALL_GAP = QUEEN_R * 4.2;         // 13.9, was 14
/** Ant-seconds for the first hall. One fouisseuse is a real wait, three feel
 *  like a crew — the sizing DIG_SECONDS had, kept so the design promise "two
 *  dig twice as fast" stays legible at the gauge. */
const FIRST_FACE_SECONDS = 75;

const ANG_TUNNEL = 20;   // = SECTION's point count, below

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

/** The first face: on the chamber wall, dead ahead of the arriving queen. */
function placeFirstFace(ex) {
  const [ax, az] = arrivalHeading(ex);
  const c = ex.chamber;
  /* Dead ahead if the hall and its heap fit on the meadow there, otherwise
     the smallest turn (never past 40 degrees, so the face stays in front of
     her) that makes them fit. Since #67 the hall stands 45 units out, and dead
     ahead ran its heap off the south edge of the map on the harness's own
     site. */
  const B = LAWN_BOUNDS;
  const reach = c.r + HALL_GAP + HALL_R;
  const heapR = HALL_R * (WALL_OUT + WALL_WOBBLE) + HEAP_SKIRT;
  const fits = (x, z) => x - heapR >= B.x0 && x + heapR <= B.x1 && z - heapR >= B.z0 + 1 && z + heapR <= B.z1
    && waterDepthAt(x, z) <= 0 && distanceToWater(x, z) >= MIN_WATER * 0.6;
  let hx = ax, hz = az;
  for (const a of [0, 0.25, -0.25, 0.5, -0.5, 0.7, -0.7]) {
    const rx = ax * Math.cos(a) - az * Math.sin(a), rz = ax * Math.sin(a) + az * Math.cos(a);
    if (fits(c.x + rx * reach, c.z + rz * reach)) { hx = rx; hz = rz; break; }
  }
  return addDigFace('face-hall',
    c.x + hx * c.r * 0.97, c.z + hz * c.r * 0.97,
    -hx, -hz, FIRST_FACE_SECONDS, {
      kind: 'room',
      id: 'hall',
      x: c.x + hx * (c.r + HALL_GAP + HALL_R),
      z: c.z + hz * (c.r + HALL_GAP + HALL_R),
      r: HALL_R,
      from: { x: c.x, z: c.z },
    });
}

/* ---- meshes ------------------------------------------------------------- */

/* THE CORRIDOR'S SECTION, IN ONE PLACE.

   Three things have to agree about the shape of a corridor: the tube's own
   vertices, the hole it needs in the wall of the room it leaves, and the hole
   it needs in the wall of the room it arrives at. Round 16 shipped one of the
   three. The other two did not exist — so the hall was dug, the corridor was
   built, and the chamber's wall went on standing across its mouth. Every
   number passed: the footprint contained the whole run, the floor had no step
   in it, the headroom was a queen and a half. It was a wall you could walk
   through, and only a picture could say so.

   So the section is a function now, and the holes are cut with it. */
/* The bore, the springer and the mouth's flare are world/excavation.js's
   (TUNNEL_BORE, SPRINGER, MOUTH_FLARE): the published ceiling is derived from
   the same arch, and two copies of an arch is how a camera ends up in one. */

/**
 * The corridor's cross-section, as a closed loop of [lat, h] in units of the
 * bore's half-width and of the roof height: a flat floor, two short jambs, and
 * an arch over them.
 *
 * It used to be an ellipse, and an ellipse has no floor. Its lowest point was
 * the centre line and the surface climbed away from there on both sides, so a
 * queen a body's width off centre stood a unit and a half UNDER the ground she
 * was walking on — the height field says the whole bore is flat, and the mesh
 * disagreed everywhere except along one line. That is the round-15 defect
 * again (a harness that walks the middle sees nothing), and it is why the
 * shape is written down once here and consulted by everything.
 */
const SECTION = (() => {
  const nJamb = 2, nArch = 10, nFloor = 6;   // must total ANG_TUNNEL
  const pts = [];
  for (let i = 0; i < nJamb; i++) pts.push([1, (i / nJamb) * SPRINGER]);
  for (let i = 0; i < nArch; i++) {
    const a = (i / nArch) * Math.PI;
    pts.push([Math.cos(a), SPRINGER + Math.sin(a) * (1 - SPRINGER)]);
  }
  for (let i = 0; i < nJamb; i++) pts.push([-1, SPRINGER * (1 - i / nJamb)]);
  for (let i = 0; i < nFloor; i++) pts.push([-1 + (2 * i) / nFloor, 0]);
  return pts;
})();

/**
 * Is a point inside the corridor's bore? `h` is height above the nest floor.
 * `shrink` pulls the section in, for callers that must stay strictly inside
 * it — i.e. everything that cuts a hole, since a hole wider than the thing
 * that fills it is a rim of daylight underground.
 *
 * Bounded on s at BOTH ends and not loosely: a room's wall is a circle, so the
 * lateral offset that names the doorway also names a strip of wall on the far
 * side of the room, and the tube exists only between its own two ends. Cutting
 * outside that span is what put black holes either side of the first doorway
 * this file ever punched.
 */
function linkAperture(ex, L, shrink = 1) {
  return (x, z, h) => {
    const s = (x - L.ax) * L.hx + (z - L.az) * L.hz;
    if (s < 0 || s > L.len) return false;
    const flare = mouthFlareAt(ex, L, s) * shrink;
    const hw = L.hw * TUNNEL_BORE * flare;
    const lat = -(x - L.ax) * L.hz + (z - L.az) * L.hx;
    const k = Math.abs(lat) / hw;
    if (k > 1) return false;
    const spring = L.roof * SPRINGER * flare;
    if (h <= spring) return h >= -0.8;          // the wall's foot is sunk 0.5
    const j = (h - spring) / (L.roof * (1 - SPRINGER) * flare);
    return k * k + j * j <= 1;
  };
}

/**
 * A level corridor: the SECTION above, swept along the link. Straight,
 * because a meander is what let the round-13 footprint and its own mesh
 * disagree by three and a half units — the straight capsule claimed ground
 * the bent tube did not cover, and she walked out through the wall (#49).
 *
 * Built outside what is published (TUNNEL_BORE > 1, the wobble only widens),
 * and trimmed at both ends to the rooms' walls (linkTrimS): every vertex that
 * would stand inside a room is slid back along the corridor onto a circle
 * just in front of that room's wall. The flat-ended tube this replaces stuck
 * into the chamber by its centre line only, and its sides were the dark jambs
 * standing either side of the round-17 doorway.
 */
function buildTunnelMesh(ex, L, seed) {
  const M = new MeshBuilder();
  const [s0, s1] = linkMouthS(ex, L);
  /* Rows only where the tube can exist once trimmed: from where its widest
     section first clears the start room to where it last clears the end room,
     so the mesh is not a stack of rows collapsed onto one circle. */
  const widest = L.hw * TUNNEL_BORE * mouthFlareAt(ex, L, s0) * (1 + TUNNEL_LUMP);
  const uA = Math.max(0, linkTrimS(ex, L, 0, widest) - 0.5);
  const uB = Math.min(L.len, linkTrimS(ex, L, L.len, widest) + 0.5);
  /* A row every unit and a half: the flare is a curve, and rows three units
     apart drew it as a cone narrower than the section the doorway is cut
     with, at exactly the place the doorway is. */
  const segs = Math.max(8, Math.round((uB - uA) / 1.5));
  const px = -L.hz, pz = L.hx;
  const rows = [];
  for (let i = 0; i <= segs; i++) {
    const u = uA + (i / segs) * (uB - uA);
    const flare = mouthFlareAt(ex, L, u);
    /* The wobble is off over the stretch a room's wall can reach into and
       fades in after it: a tube that is sometimes narrower than the hole cut
       for it is a hole in the world at the one place the player looks. */
    const endK = clamp((Math.min(u - s0, s1 - u) - MOUTH_RUN) / MOUTH_RUN, 0, 1);
    const row = [];
    for (let a = 0; a < ANG_TUNNEL; a++) {
      const [k, hk] = SECTION[a];
      const wob = wobbleAt((2 * Math.PI * a) / ANG_TUNNEL, u * 0.2, seed);
      const lump = 1 + clamp((wob - 0.84) / 0.35, 0, 1) * TUNNEL_LUMP * endK;
      const lat = k * L.hw * TUNNEL_BORE * flare * lump;
      const s = linkTrimS(ex, L, u, lat);
      const vx = L.ax + L.hx * s + px * lat, vz = L.az + L.hz * s + pz * lat;
      /* The floor row is the room's own floor, sampled at the vertex: the two
         have to be the same surface, not two surfaces that agree on average. */
      const y = hk <= 0 ? chamberFloorAt(ex, vx, vz)
        : ex.floorY + hk * L.roof * flare * lump;
      row.push(M.addVertex(vx, y, vz, digColour(clamp((wob - 0.84) / 0.34 + 0.45, 0, 1), 0.24).toArray()));
    }
    rows.push(row);
  }
  for (let i = 0; i < segs; i++) {
    for (let a = 0; a < ANG_TUNNEL; a++) {
      const b = (a + 1) % ANG_TUNNEL;
      M.addQuad(rows[i][a], rows[i][b], rows[i + 1][b], rows[i + 1][a]);
    }
  }
  return M.toBufferGeometry();
}

/**
 * Take a doorway out of a wall mesh that was baked before the corridor
 * existed.
 *
 * A quad goes only if ALL FOUR of its corners are inside the bore, so the
 * hole is always strictly smaller than the tube that fills it: what is left
 * is a doorway with the wall as its frame, never a rim of daylight around a
 * tunnel mouth. The removal is six writes into the index buffer (the quad is
 * collapsed onto one of its own corners), not a rebuild — the same trick
 * openTheMeadow() uses on the lawn, and for the same reason: this shell is
 * dug once and is not re-generated for anything.
 */
function punchWall(wall, aperture, floorY) {
  if (!wall || !wall.mesh || !wall.mesh.geometry) return 0;
  const idx = wall.mesh.geometry.getIndex();
  if (!idx) return 0;
  const arr = idx.array;
  let cut = 0;
  for (const q of wall.quads) {
    if (q.gone) continue;
    if (!q.corners.every((c) => aperture(c[0], c[1], c[2] - floorY))) continue;
    const keep = arr[q.at];
    for (let k = 0; k < 6; k++) arr[q.at + k] = keep;
    q.gone = true;
    cut++;
  }
  if (cut) {
    idx.needsUpdate = true;
    wall.mesh.geometry.computeVertexNormals();
  }
  return cut;
}

/** A room: floor, straight walls, dome. `openAt(x, z, heightAboveFloor)` is
 *  the arriving corridor's own bore (linkAperture), so the hole in the wall is
 *  the shape of the thing that fills it and not an approximation of it. */
function buildRoomMesh(ex, room, seed, openAt) {
  const M = new MeshBuilder();
  addRoomShell(M, ex, room, seed, ROOM_ANG,
    (i, wallRings, q) => q.every((v) => openAt(v.x, v.z, v.y - ex.floorY)));
  return M.toBufferGeometry();
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
  return { x0, x1, z0, z1 };
}

function buildPanMesh(ex) {
  const b = excavationBounds(ex);
  const cols = Math.max(2, Math.ceil((b.x1 - b.x0) / PAN_STEP));
  const rows = Math.max(2, Math.ceil((b.z1 - b.z0) / PAN_STEP));
  const M = new MeshBuilder();
  const grid = [];
  const dug = [];
  for (let a = 0; a <= cols; a++) {
    const col = [], dcol = [];
    for (let c = 0; c <= rows; c++) {
      const x = b.x0 + (a / cols) * (b.x1 - b.x0);
      const z = b.z0 + (c / rows) * (b.z1 - b.z0);
      col.push(M.addVertex(x, ex.floorY - PAN_DROP, z, digColour(0.25, 0.10).toArray()));
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
  for (let ri = 0; ri <= RINGS; ri++) {
    const t = ri / RINGS;
    const row = [];
    for (let a = 0; a < ANG; a++) {
      const th = (2 * Math.PI * a) / ANG;
      const px = room.x + Math.cos(th) * t * R, pz = room.z + Math.sin(th) * t * R;
      const lump = vnoise(px * 0.13 + seed, pz * 0.13 + seed) - 0.5;
      row.push(M.addVertex(px, heapY(ex, room, px, pz), pz, mixColor(digColour(0.5 + lump, 0.34), C_CHITIN, 0.14).toArray()));
    }
    rows.push(row);
  }
  for (let ri = 0; ri < RINGS; ri++) {
    for (let a = 0; a < ANG; a++) {
      const b = (a + 1) % ANG;
      M.addQuad(rows[ri][a], rows[ri][b], rows[ri + 1][b], rows[ri + 1][a]);
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
function buildBerm(ex, L, seed) {
  const M = new MeshBuilder();
  const outer = L.hw * TUNNEL_BORE * (1 + MOUTH_FLARE) * (1 + TUNNEL_LUMP);
  const W = outer + HEAP_SKIRT;
  const LAT = [-1, -0.84, -0.7, -0.58, -0.46, -0.34, -0.2, 0, 0.2, 0.34, 0.46, 0.58, 0.7, 0.84, 1];
  const px = -L.hz, pz = L.hx;
  const ends = L.ends.map((id) => ex.rooms.find((r) => r.id === id)).filter(Boolean);
  const segs = Math.max(4, Math.round(L.len / 2.0));
  const rows = [];
  for (let i = 0; i <= segs; i++) {
    const u = (i / segs) * L.len;
    const row = [];
    for (const k of LAT) {
      const lat = k * W;
      const x = L.ax + L.hx * u + px * lat, z = L.az + L.hz * u + pz * lat;
      const base = lawnY(x, z);
      const lump = vnoise(x * 0.13 + seed + 7, z * 0.13 + seed + 7) - 0.5;
      const crest = ex.floorY + L.roof * (1 + TUNNEL_LUMP) + ROOF_COVER * 0.55;
      const t = Math.abs(k);
      let y = base + Math.max(0, crest - base) * Math.pow(1 - t * t, 0.85) + lump * 1.2 * (1 - t);
      const shell = excavationShellTopAt(x, z);
      const floor = shell === null ? -Infinity : shell + ROOF_COVER * 0.3;
      if (shell !== null) y = Math.max(y, shell + ROOF_COVER * 0.5);
      else if (t >= 1) y = Math.min(y, base - 0.3);
      for (const r of ends) {
        const h = heapY(ex, r, x, z);
        if (h !== null) y = Math.min(y, h - 0.8);
      }
      row.push(M.addVertex(x, Math.max(y, floor), z, mixColor(digColour(0.5 + lump, 0.34), C_CHITIN, 0.14).toArray()));
    }
    rows.push(row);
  }
  for (let i = 0; i < segs; i++) {
    for (let a = 0; a < LAT.length - 1; a++) {
      M.addQuad(rows[i][a], rows[i][a + 1], rows[i + 1][a + 1], rows[i + 1][a]);
    }
  }
  return M.toBufferGeometry();
}

/** Re-heap every spoil pile over the excavation as it now stands. */
function rebuildSpoil() {
  const ex = getExcavation();
  if (!ex || !nest) return;
  for (const m of nest._spoil || []) {
    nest.group.remove(m);
    m.geometry.dispose();
  }
  nest._spoil = [];
  const add = (geo, name) => {
    const mesh = new THREE.Mesh(geo, nestMaterial());
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
    map: dirtAlbedo(), strength: 0.62, side: THREE.DoubleSide,
  }));
}

/** Build what a finished face revealed, light it, and return the room. */
function openRoom(spec) {
  const ex = getExcavation();
  if (!ex || !nest) return null;
  const seed = (ex.seed + 613) % 9973;

  const dx = spec.x - spec.from.x, dz = spec.z - spec.from.z;
  const l = Math.hypot(dx, dz) || 1;
  const hx = dx / l, hz = dz / l;

  const room = addRoom(spec.id, spec.x, spec.z, spec.r);
  /* Both ends well inside the rooms they join. The tube is trimmed back to
     their walls anyway (linkTrimS); what the ends decide is how far the
     walkable strip reaches, and it must reach into the rooms' floors. */
  const link = addLink(`link-${spec.id}`,
    { x: spec.from.x + hx * (nest.chamber.r * 0.5), z: spec.from.z + hz * (nest.chamber.r * 0.5) },
    { x: spec.x - hx * (spec.r * 0.5), z: spec.z - hz * (spec.r * 0.5) },
    LINK_HW, LINK_ROOF, ['chamber', spec.id]);

  const tunnel = new THREE.Mesh(buildTunnelMesh(ex, link, seed), nestMaterial());
  tunnel.name = `nest-${link.id}`;
  tunnel.receiveShadow = true;
  nest.group.add(tunnel);

  /* Both ends, cut with the corridor's own section. The far end is cut while
     the room is being built, because its wall does not exist yet; the near end
     is cut out of the chamber's wall, which was baked at founding. That
     asymmetry is the whole of the round-16 defect: only the first case had
     been written, so the corridor arrived somewhere and left nowhere. */
  /* A few percent inside the tube's own section: the mesh draws its curves as
     chords, so the section it actually covers is a hair smaller than the one
     this function describes. */
  const bore = linkAperture(ex, link, 0.96);
  const mesh = new THREE.Mesh(buildRoomMesh(ex, room, seed, bore), nestMaterial());
  mesh.name = `nest-room-${room.id}`;
  mesh.receiveShadow = true;
  nest.group.add(mesh);
  /* The room this corridor leaves from. `chamber` today, and the day a hall
     grows its own faces it is whichever room the face was on — which is why
     the wall record travels with the room and not with the nest. */
  punchWall(nest._wall, bore, ex.floorY);

  rebuildSpoil();
  rebuildPan();

  /* Stretch the underground's darkness out to the new room. Without it the
     hall is lit as the meadow above it — world/lighting.js keys "indoors" off
     this one cavity, and it only ever knew about the chamber. */
  setNestPit(nest.chamber.x, nest.mouth.y, nest.chamber.z, CHAMBER_R * 1.25, NEST_DEPTH, room.x, room.z);

  /* Lit along the corridor AND in the room, never one lamp at the far end:
     with this rig's 1/(1 + 0.017 d^2) falloff a single lamp is at 0.03 of its
     value forty units away, which is what made the round-13 gallery a bright
     disc in forty units of black. */
  addLocalLight([link.ax + link.hx * link.len * 0.45, ex.floorY + 6.5, link.az + link.hz * link.len * 0.45], HALL_LAMP_LINK);
  addLocalLight([room.x, ex.floorY + 7.5, room.z], HALL_LAMP_MID);
  addLocalLight([room.x + hx * room.r * 0.55, ex.floorY + 5.0, room.z + hz * room.r * 0.55], HALL_LAMP_FAR);

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
  return ex ? ex.rooms.map((r) => ({ id: r.id, x: r.x, z: r.z, r: r.r })) : [];
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
  if (r.opened && r.opened.kind === 'room') {
    const room = openRoom(r.opened);
    return { ...r, opened: room ? { kind: 'room', id: room.id, x: room.x, z: room.z, r: room.r } : null };
  }
  return { ...r, opened: null };
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
export function updateFounding(dt) {
  if (!nest) return;
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
export function _resetFounding() {
  if (nest && nest.group.parent) nest.group.parent.remove(nest.group);
  nest = null;
  clearExcavation();
  setNestPit(0, 0, 0, 0, 0);
}

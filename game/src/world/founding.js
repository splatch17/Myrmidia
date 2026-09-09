import * as THREE from 'three';
import { vnoise, rng, clamp, lerp } from '../core/noise.js';
import { nrm3, cross3, makeBasis } from '../core/vecmath.js';
import { MeshBuilder, unitSphere } from '../core/meshBuilder.js';
import {
  groundY, lawnY, groundSlope, waterDepthAt, distanceToWater, soilAt, LAWN_BOUNDS, TUNNEL_MOUTH,
} from './terrain.js';
import {
  makeExcavation, setExcavation, clearExcavation, getExcavation,
  excavationFloorAt, excavationFootprint, excavationDescentPath,
  rampCentre, rampParam, rampOffset, rampFloorAt, chamberFloorAt, chamberRoofAt,
  addRoom, addLink, addDigFace, excavationDigFaces, advanceDigFace,
  RAMP_DESCEND, RAMP_TURN, CHAMBER_WALL, CHAMBER_ROOF, NEST_DEPTH, ROOF_COVER,
  QUEEN_R,
} from './excavation.js';
import { texturedSurfaceMaterial, texturedEmissiveMaterial, dirtAlbedo, capAlbedo } from './texturing.js';
import { addLocalLight, applyNestShading, setNestPit } from './lighting.js';

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

const ROOM_R = 14;
const RIM_H = 1.6;          // the spoil bank stands this proud of the meadow
const CUT_BATTER = 3.2;     // how far the cut face leans out over its height
const CUT_BANK = 8.0;       // spoil apron either side, wide enough to cover the
                            // lawn grid's own transition quads (GS = 6)

/* canFoundAt() only has to keep the *chamber* clear of the map edge —
   chooseHeading() steers the cut, so a site near a boundary gets a nest that
   turns inland rather than a refusal. */
const EXCAV_MARGIN = ROOM_R + CUT_BANK + 4;

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
      const u = (k / 8) * (RAMP_DESCEND + ROOM_R);
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
     It stops as soon as the centre line is inside the chamber — from there the
     chamber's own floor and walls take over, and the last stretch of cut is
     the doorway through them. */
  const LAT = [-1, -0.62, -0.24, 0.24, 0.62, 1];
  const rows = [];
  /* The trench stops where the SPOIL MOUND starts, not where the chamber
     does. Running it to the chamber wall left its banks buried a unit or two
     inside the heap, and two solids interpenetrating at a shallow angle is a
     flickering seam, not a joint. The mound carries the passage from here on
     (it is carved by the same rampFloorAt), overlapped by two units so there
     is nothing to see between them. */
  const MOUND_R = C.r + 9;
  let uCut = ex.arc.len;
  for (let u = 0; u <= ex.arc.len; u += 1.0) {
    const c = rampCentre(ex, u);
    if (Math.hypot(c.x - C.x, c.z - C.z) <= MOUND_R * 0.98) { uCut = Math.min(ex.arc.len, u + 2); break; }
  }
  for (let u = 0; u <= uCut + 1e-4; u += 2.0) {
    const c = rampCentre(ex, u);
    const t = u / Math.max(ex.arc.len, 1e-3);
    // lateral unit vector: the arc's own outward normal
    const nx = (c.x - ex.arc.ax) / ex.arc.R, nz = (c.z - ex.arc.az) / ex.arc.R;
    const row = [];
    const put = (lat, y, col) => row.push(M.addVertex(c.x + nx * lat, y, c.z + nz * lat, col));
    const bankAt = (side) => {
      const rim = side * (ex.hw + CUT_BATTER);
      const bank = side * (ex.hw + CUT_BATTER + CUT_BANK);
      const rx = c.x + nx * rim, rz = c.z + nz * rim;
      const bx = c.x + nx * bank, bz = c.z + nz * bank;
      const lump = 0.72 + 0.56 * vnoise(bx * 0.15 + seed, bz * 0.15 + seed);
      return { rim, bank, rx, rz, bx, bz, lump };
    };

    const L = bankAt(-1);
    put(L.bank, lawnY(L.bx, L.bz) + 0.15 * L.lump, mixColor(digColour(L.lump, 0.34), C_CHITIN, 0.12).toArray());
    put(L.rim, lawnY(L.rx, L.rz) + RIM_H * L.lump, mixColor(digColour(L.lump, 0.30), C_CHITIN, 0.10).toArray());
    for (const k of LAT) {
      const lat = k * ex.hw;
      const px = c.x + nx * lat, pz = c.z + nz * lat;
      const wob = wobbleAt(k * Math.PI, u, seed);
      put(lat, rampFloorAt(ex, px, pz, u, lat),
        digColour(clamp((wob - 0.84) / 0.34 + 0.45, 0, 1), 0.22 + t * 0.06).toArray());
    }
    const Rr = bankAt(1);
    put(Rr.rim, lawnY(Rr.rx, Rr.rz) + RIM_H * Rr.lump, mixColor(digColour(Rr.lump, 0.30), C_CHITIN, 0.10).toArray());
    put(Rr.bank, lawnY(Rr.bx, Rr.bz) + 0.15 * Rr.lump, mixColor(digColour(Rr.lump, 0.34), C_CHITIN, 0.12).toArray());
    rows.push(row);
  }
  for (let r = 0; r < rows.length - 1; r++) {
    for (let i = 0; i < rows[r].length - 1; i++) {
      M.addQuad(rows[r][i], rows[r][i + 1], rows[r + 1][i + 1], rows[r + 1][i]);
    }
  }

  /* ---- the chamber ------------------------------------------------------
     Floor disc, then straight walls, then a dome. The straight part is not
     decoration: a pure dome is only tall enough in its middle, and the doorway
     is at its edge — which is exactly where headroom() would have come out
     under a queen's height. */
  const ANG = 30, RINGS = 5, wallRings = 3, domeRings = 5;
  const ringR = (i) => (i <= wallRings ? C.r : C.r * Math.cos(((i - wallRings) / domeRings) * (Math.PI / 2)));
  const ringY = (i) => (i <= wallRings
    ? floorY + (CHAMBER_WALL * i) / wallRings
    : floorY + CHAMBER_WALL + (CHAMBER_ROOF - CHAMBER_WALL) * Math.sin(((i - wallRings) / domeRings) * (Math.PI / 2)));

  const floorRows = [];
  for (let ri = 0; ri <= RINGS; ri++) {
    const rr = (ri / RINGS) * C.r;
    const row = [];
    for (let a = 0; a < ANG; a++) {
      const th = (2 * Math.PI * a) / ANG;
      const px = C.x + Math.cos(th) * rr, pz = C.z + Math.sin(th) * rr;
      row.push(M.addVertex(px, chamberFloorAt(ex, px, pz), pz,
        digColour(clamp((wobbleAt(th, ri, seed) - 0.84) / 0.34 + 0.45, 0, 1), 0.26).toArray()));
    }
    floorRows.push(row);
  }
  for (let ri = 0; ri < RINGS; ri++) {
    for (let a = 0; a < ANG; a++) {
      const b = (a + 1) % ANG;
      M.addQuad(floorRows[ri][a], floorRows[ri][b], floorRows[ri + 1][b], floorRows[ri + 1][a]);
    }
  }

  const shellRows = [];
  for (let i = 0; i <= wallRings + domeRings; i++) {
    const rr = ringR(i), yy = ringY(i);
    const row = [];
    for (let a = 0; a < ANG; a++) {
      const th = (2 * Math.PI * a) / ANG;
      const wob = wobbleAt(th, i, seed);
      const r2 = rr * (i <= wallRings ? 0.94 + (wob - 0.84) * 0.4 : 1);
      const px = C.x + Math.cos(th) * r2, pz = C.z + Math.sin(th) * r2;
      row.push({ i: M.addVertex(px, yy, pz, digColour(clamp((wob - 0.84) / 0.34 + 0.45, 0, 1), 0.20).toArray()), x: px, z: pz, y: yy });
    }
    shellRows.push(row);
  }
  /* Leave the wall open where the cut arrives. Tested on the quad's own
     midpoint against the same rampParam() the ground uses, so the hole in the
     mesh is the hole in the height field and not an approximation of it. */
  const inDoorway = (p, q) => p.y - floorY <= CHAMBER_WALL + 0.1
    && rampParam(ex, (p.x + q.x) * 0.5, (p.z + q.z) * 0.5) !== null;
  for (let i = 0; i < shellRows.length - 1; i++) {
    for (let a = 0; a < ANG; a++) {
      const b = (a + 1) % ANG;
      const p = shellRows[i][a], q = shellRows[i][b];
      if (inDoorway(p, q) || inDoorway(shellRows[i + 1][a], shellRows[i + 1][b])) continue;
      M.addQuad(p.i, q.i, shellRows[i + 1][b].i, shellRows[i + 1][a].i);
    }
  }
  const top = M.addVertex(C.x, floorY + CHAMBER_ROOF, C.z, digColour(0.5, 0.24).toArray());
  const lastRing = shellRows[shellRows.length - 1];
  for (let a = 0; a < ANG; a++) M.addTri(top, lastRing[(a + 1) % ANG].i, lastRing[a].i);

  /* ---- the spoil over the chamber ---------------------------------------
     Everything taken out of a sixty-unit cut has to go somewhere, and putting
     it over the chamber does three jobs at once: it guarantees the dome its
     cover without sinking the floor (which is what ran the trench out to 127
     units before), it is the landmark #33 asks for — the thing you can see
     from across the meadow and walk towards — and it is the only warning the
     player gets that this patch of ground is roof and not meadow. That last
     one matters: a single height per (x, z) cannot be both, so the mound is
     what stands in for the fence.

     Notched where the cut arrives, against the same rampParam() the ground
     uses, so the entrance passage runs into the mound rather than under it. */
  const MRINGS = 9, MANG = 44;
  /* How far in the open cut is carved through the heap: just inside the
     chamber's wall mesh (which sits at ~0.94 of C.r), so the trench floor
     reaches through the wall's own doorway rather than stopping a hair short
     of it and leaving a lip to walk into. */
  const DOOR_LINE = 0.90;
  const roofTop = floorY + CHAMBER_ROOF + ROOF_COVER;
  const mound = [];
  for (let ri = 0; ri <= MRINGS; ri++) {
    const t = ri / MRINGS;
    const row = [];
    for (let a = 0; a <= MANG; a++) {
      const th = (2 * Math.PI * (a % MANG)) / MANG;
      const px = C.x + Math.cos(th) * t * MOUND_R, pz = C.z + Math.sin(th) * t * MOUND_R;
      const base = lawnY(px, pz);
      const lump = vnoise(px * 0.13 + seed, pz * 0.13 + seed) - 0.5;
      const peak = Math.max(base + 1.6, roofTop);
      /* The lump is added, not multiplied. Multiplied, a low patch of noise
         took a quarter off the heap's height and let the dome underneath show
         through it as a dark band — and then max() against the dome's own
         surface makes that impossible rather than unlikely. */
      let y = base + (peak - base) * Math.pow(1 - t * t, 0.85) + lump * 2.2 * (1 - t);
      const dome = chamberRoofAt(ex, px, pz);
      if (dome !== null) y = Math.max(y, dome + ROOF_COVER * 0.55);

      /* Carve the passage through it rather than dropping the quads over the
         cut: skipping quads left a crenellated notch, the heap's own angular
         resolution showing as a row of teeth. Carved to the SAME width the
         height field calls walkable, then battered out to the heap over the
         next few units — a shoulder narrower than that is a wall standing on
         ground groundY() says you may walk on. */
      const dc = Math.hypot(px - C.x, pz - C.z);
      const rp = dc > C.r * DOOR_LINE ? rampOffset(ex, px, pz, 4) : null;
      if (rp) {
        const over = Math.abs(rp.lat) - ex.hw;
        if (over <= 0) y = rampFloorAt(ex, px, pz, rp.u, rp.lat);
        else if (over < CUT_BATTER) {
          const k = over / CUT_BATTER;
          y = lerp(rampFloorAt(ex, px, pz, rp.u, ex.hw * Math.sign(rp.lat)), y, k * k * (3 - 2 * k));
        }
      }
      row.push({ i: M.addVertex(px, y, pz, mixColor(digColour(0.5 + lump, 0.34), C_CHITIN, 0.14).toArray()), x: px, z: pz, dc });
    }
    mound.push(row);
  }
  /* Where the passage goes under the heap, the heap has to have a HOLE, not a
     face. Carving alone gave it a face: the vertices outside the chamber sat
     at floor level and the ones inside sat twenty units up, so the quad
     between them stood across the doorway like a door. Dropping any quad with
     a corner over the passage and inside the chamber leaves an arch instead,
     and what shows through it is the chamber's own wall opening. */
  const underDoor = (v) => v.dc < C.r * 1.02 && rampParam(ex, v.x, v.z) !== null;
  for (let ri = 0; ri < MRINGS; ri++) {
    for (let a = 0; a < MANG; a++) {
      const q = [mound[ri][a], mound[ri][a + 1], mound[ri + 1][a + 1], mound[ri + 1][a]];
      if (q.some(underDoor)) continue;
      M.addQuad(q[0].i, q[1].i, q[2].i, q[3].i);
    }
  }

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

/* ---- opening the meadow -------------------------------------------------
   The lawn is one grid built at load time and the nest is dug into it later,
   so without this the cut is roofed by the meadow itself. That is not
   hypothetical: the round-15 baseline captures show the old shaft as a green
   disc in the middle of the spoil heap — the nest had no visible entrance at
   all, and nobody had noticed, because nobody had photographed it.

   Vertices over the excavation are dropped below its floor rather than
   removed: an index buffer with holes in it is a rebuild, this is a write to a
   position attribute. They are only dropped where the floor is actually below
   the meadow, so the threshold — where the two are level — keeps its lawn and
   there is no step to walk over. Vertices merely *next* to the cut are
   recoloured to soil, which is what hides the green slivers the grid's own
   transition quads would otherwise show through the bank. */
function openTheMeadow() {
  if (!lawnMesh || !lawnMesh.geometry) return 0;
  const pos = lawnMesh.geometry.getAttribute('position');
  const col = lawnMesh.geometry.getAttribute('color');
  const SINK = 2.5, NEAR = 7.0;
  const soil = C_WALL_B.clone().lerp(C_SOIL_A, 0.4);
  let moved = 0;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    const dug = excavationFloorAt(x, z);
    if (dug !== null && lawnY(x, z) - dug > 1.5) {
      pos.setY(i, dug - SINK);
      moved++;
      if (col) col.setXYZ(i, soil.r, soil.g, soil.b);
      continue;
    }
    if (!col) continue;
    for (let k = 0; k < 8; k++) {
      const a = (k / 8) * Math.PI * 2;
      if (excavationFloorAt(x + Math.cos(a) * NEAR, z + Math.sin(a) * NEAR) !== null) {
        col.setXYZ(i, soil.r, soil.g, soil.b);
        break;
      }
    }
  }
  pos.needsUpdate = true;
  if (col) col.needsUpdate = true;
  lawnMesh.geometry.computeVertexNormals();
  lawnMesh.geometry.computeBoundingSphere();
  if (grassField && typeof grassField.clearIn === 'function') {
    grassField.clearIn((bx, bz) => excavationFloorAt(bx, bz) !== null);
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
    _furnishing: furnishing,
    _coldLight: coldLight,
    _warmLight: warmLight,
    _coldFade: 1,
  };

  /* Tell the shader where the hole is, so the sun stops shining into it.
     The nest is at z > 0, which world/lighting.js's daylight falloff calls
     "outdoors" — without this the chamber is lit like an open field twenty
     units underground. */
  /* Centred on the CHAMBER, not on the mouth. The cut is open to the sky for
     its whole length and has to stay lit like the outdoors it is; only the
     roofed end of the nest may be darkened, or the ramp reads as a tunnel
     someone forgot to light. */
  setNestPit(shell.chamber.x, shell.mouthY, shell.chamber.z, ROOM_R * 1.25, NEST_DEPTH);

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
 *  where there is nothing to touch (#49). A full body of clearance each side. */
const LINK_HW = QUEEN_R * 2.0;
/** Small on purpose: the porter's standing note is that the goal is not a big
 *  nest. Two queen-lengths across, against the founding chamber's three. */
const HALL_R = 8.5;
/** How far the hall stands off the chamber wall. */
const HALL_GAP = 14;
/** Ant-seconds for the first hall. One fouisseuse is a real wait, three feel
 *  like a crew — the sizing DIG_SECONDS had, kept so the design promise "two
 *  dig twice as fast" stays legible at the gauge. */
const FIRST_FACE_SECONDS = 75;

const ANG_TUNNEL = 16;

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
  const [hx, hz] = arrivalHeading(ex);
  const c = ex.chamber;
  return addDigFace('face-hall',
    c.x + hx * c.r * 0.92, c.z + hz * c.r * 0.92,
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

/** A level corridor: a tube of half-width `hw` with its floor flattened onto
 *  the nest floor. Straight, because a meander is what let the round-13
 *  footprint and its own mesh disagree by three and a half units — the
 *  straight capsule claimed ground the bent tube did not cover, and she walked
 *  out through the wall (#49). */
function buildTunnelMesh(ex, L, seed) {
  const M = new MeshBuilder();
  const segs = Math.max(4, Math.round(L.len / 3));
  const px = -L.hz, pz = L.hx;
  const rows = [];
  for (let i = 0; i <= segs; i++) {
    const u = (i / segs) * L.len;
    const cx = L.ax + L.hx * u, cz = L.az + L.hz * u;
    const row = [];
    for (let a = 0; a < ANG_TUNNEL; a++) {
      const th = (2 * Math.PI * a) / ANG_TUNNEL;
      const wob = wobbleAt(th, u * 0.2, seed);
      const rr = L.hw * (0.92 + (wob - 0.84) * 0.5);
      const y = ex.floorY + L.roof * 0.55 + Math.sin(th) * L.roof * 0.55;
      row.push(M.addVertex(
        cx + px * Math.cos(th) * rr,
        Math.max(y, chamberFloorAt(ex, cx, cz)),
        cz + pz * Math.cos(th) * rr,
        digColour(clamp((wob - 0.84) / 0.34 + 0.45, 0, 1), 0.24).toArray(),
      ));
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

/** A room: floor disc, straight walls, dome. Openings are left wherever a link
 *  arrives, tested on the quad's own midpoint against the same membership the
 *  height field uses — so the hole in the mesh is the hole in the floor, not
 *  an approximation of it. */
function buildRoomMesh(ex, room, seed, openAt) {
  const M = new MeshBuilder();
  const ANG = 26, RINGS = 4, wallRings = 3, domeRings = 4;
  const ringR = (i) => (i <= wallRings ? room.r : room.r * Math.cos(((i - wallRings) / domeRings) * (Math.PI / 2)));
  const ringY = (i) => (i <= wallRings
    ? ex.floorY + (room.wall * i) / wallRings
    : ex.floorY + room.wall + (room.roof - room.wall) * Math.sin(((i - wallRings) / domeRings) * (Math.PI / 2)));

  const floorRows = [];
  for (let ri = 0; ri <= RINGS; ri++) {
    const rr = (ri / RINGS) * room.r;
    const row = [];
    for (let a = 0; a < ANG; a++) {
      const th = (2 * Math.PI * a) / ANG;
      const fx = room.x + Math.cos(th) * rr, fz = room.z + Math.sin(th) * rr;
      row.push(M.addVertex(fx, chamberFloorAt(ex, fx, fz), fz,
        digColour(clamp((wobbleAt(th, ri, seed) - 0.84) / 0.34 + 0.45, 0, 1), 0.26).toArray()));
    }
    floorRows.push(row);
  }
  for (let ri = 0; ri < RINGS; ri++) {
    for (let a = 0; a < ANG; a++) {
      const b = (a + 1) % ANG;
      M.addQuad(floorRows[ri][a], floorRows[ri][b], floorRows[ri + 1][b], floorRows[ri + 1][a]);
    }
  }

  const rows = [];
  for (let i = 0; i <= wallRings + domeRings; i++) {
    const rr = ringR(i), yy = ringY(i);
    const row = [];
    for (let a = 0; a < ANG; a++) {
      const th = (2 * Math.PI * a) / ANG;
      const wob = wobbleAt(th, i, seed);
      const r2 = rr * (i <= wallRings ? 0.94 + (wob - 0.84) * 0.4 : 1);
      const vx = room.x + Math.cos(th) * r2, vz = room.z + Math.sin(th) * r2;
      row.push({
        i: M.addVertex(vx, yy, vz, digColour(clamp((wob - 0.84) / 0.34 + 0.45, 0, 1), 0.20).toArray()),
        x: vx, z: vz, y: yy,
      });
    }
    rows.push(row);
  }
  const doorway = (p, q) => p.y - ex.floorY <= room.wall + 0.1
    && openAt((p.x + q.x) * 0.5, (p.z + q.z) * 0.5);
  for (let i = 0; i < rows.length - 1; i++) {
    for (let a = 0; a < ANG; a++) {
      const b = (a + 1) % ANG;
      const p = rows[i][a], q = rows[i][b];
      if (doorway(p, q) || doorway(rows[i + 1][a], rows[i + 1][b])) continue;
      M.addQuad(p.i, q.i, rows[i + 1][b].i, rows[i + 1][a].i);
    }
  }
  const top = M.addVertex(room.x, ex.floorY + room.roof, room.z, digColour(0.5, 0.24).toArray());
  const last = rows[rows.length - 1];
  for (let a = 0; a < ANG; a++) M.addTri(top, last[(a + 1) % ANG].i, last[a].i);
  return M.toBufferGeometry();
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
  /* Both ends are sunk INTO the solids they join, past the wall wobble, so
     there is no seam to see through where three meshes meet. */
  const link = addLink(`link-${spec.id}`,
    { x: spec.from.x + hx * (nest.chamber.r * 0.80), z: spec.from.z + hz * (nest.chamber.r * 0.80) },
    { x: spec.x - hx * (spec.r * 0.80), z: spec.z - hz * (spec.r * 0.80) },
    LINK_HW, CHAMBER_WALL);

  const tunnel = new THREE.Mesh(buildTunnelMesh(ex, link, seed), nestMaterial());
  tunnel.name = `nest-${link.id}`;
  tunnel.receiveShadow = true;
  nest.group.add(tunnel);

  const inThisLink = (x, z) => {
    const s = (x - link.ax) * link.hx + (z - link.az) * link.hz;
    if (s < -link.hw || s > link.len + link.hw) return false;
    return Math.abs(-(x - link.ax) * link.hz + (z - link.az) * link.hx) <= link.hw;
  };
  const mesh = new THREE.Mesh(buildRoomMesh(ex, room, seed, inThisLink), nestMaterial());
  mesh.name = `nest-room-${room.id}`;
  mesh.receiveShadow = true;
  nest.group.add(mesh);

  /* Lit along the corridor AND in the room, never one lamp at the far end:
     with this rig's 1/(1 + 0.017 d^2) falloff a single lamp is at 0.03 of its
     value forty units away, which is what made the round-13 gallery a bright
     disc in forty units of black. */
  addLocalLight([link.ax + link.hx * link.len * 0.45, ex.floorY + 4.5, link.az + link.hz * link.len * 0.45], HALL_LAMP_LINK);
  addLocalLight([room.x, ex.floorY + 5.5, room.z], HALL_LAMP_MID);
  addLocalLight([room.x + hx * room.r * 0.55, ex.floorY + 4.0, room.z + hz * room.r * 0.55], HALL_LAMP_FAR);

  openTheMeadow();
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

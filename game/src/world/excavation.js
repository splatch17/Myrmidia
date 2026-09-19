import { vnoise, clamp, lerp } from '../core/noise.js';

/* ==========================================================================
   What has been dug, as a height field (#41; design/api-monde-gameplay.md §6).

   WHY THIS FILE EXISTS AT ALL, rather than living in world/founding.js.
   terrain.js's groundY() has to consult it, and founding.js already imports
   groundY(). Putting the excavation in founding.js would make that a cycle,
   and an ES module cycle here is not a warning — it is a const read in its
   temporal dead zone at load, i.e. a crash whose stack points at neither
   file. So the shape of the hole lives here, depends on nothing but the noise
   helpers, and is *pushed* in by founding.js at dig time via setExcavation().
   terrain.js reads it, founding.js writes it, neither imports the other.

   EVERY HEIGHT IN THE DESCRIPTOR IS ABSOLUTE AND BAKED AT DIG TIME. In
   particular the lawn height at the mouth and its local gradient: that is how
   the ramp's threshold can sit flush with a lawn this file is not allowed to
   ask about.

   WHAT SHAPE, AND WHY THAT ONE. §6 arbitrates "une rampe, pas un puits", and
   the reason is not comfort: player/movement.js assigns `ant.y = groundY(x,z)`
   with no notion of falling, so a shaft is not a hard climb, it is a teleport.
   The excavation is therefore:

     - an OPEN CUT ramp, curving as it descends, from the lawn down to the
       chamber floor. Open, not roofed, because a height field has exactly one
       height per (x, z): anything roofed is ground you can stand on that is
       also a hole, and the only honest way to have both is to not roof it.
       The cut is also the answer to the thing the round-15 baseline captures
       showed and nobody had noticed — the old shaft was capped by the lawn
       mesh, so the nest had no visible entrance at all, only a green disc in
       the middle of the spoil heap.
     - a CHAMBER at the bottom, with vertical walls and a domed roof. This one
       is roofed, and that is the one place the height field lies (see
       ROOFED GROUND below).
     - the round-13 GALLERY, level, running out of the chamber.

   ROOFED GROUND, stated plainly rather than hidden. Over the chamber and the
   gallery, groundY() answers the floor beneath, not the lawn above. Walking
   onto that patch of meadow drops you in. This is not fixable inside a single
   height function, which is why the contract also publishes headroom(x, z):
   it is finite exactly where there is a roof overhead, and that is the test a
   caller needs to refuse a descent it did not walk to. The ramp is placed so
   that the roofed part sits at the far end of a large, obvious excavation
   rather than under open meadow.

   SIZES ARE IN QUEENS. PROGRESS.md's most expensive recurring defect is a
   constant written against one body and left behind when the body changed, so
   every bore below is a multiple of QUEEN_R and says so.
   ========================================================================== */

/* THE BORE REFERENCE — and read the second paragraph before changing it.

   It was FOUNDING_QUEEN's collide radius: bodyR 1.5 x scale 2.2. She is 1.9
   now (she was filling her own corridors), so her real radius is 2.85 and
   this is deliberately left at 3.3: a floor is only ever cut once, and every
   width below is a multiple of this, so freezing it is how the whole nest
   keeps ~15% of clearance it would otherwise have lost the moment the body
   changed. It is a MINIMUM the world guarantees, not a measurement of anyone.

   Which makes the direction of the check one-way: a body that grows PAST 3.3
   is a body that no longer fits the nest, and nothing here would say so. If a
   profile ever goes above it, this number moves with it. */
export const QUEEN_R = 3.3;

/** Half-width of the descending cut. Three queens each side of the centre line
 *  (#67): two was a body of clearance either side on paper and, with the
 *  camera's boom behind her, a trench whose walls filled the screen. */
export const RAMP_HW = QUEEN_R * 3.0;          // 19.8 clear, was 13.2

/** Steepest the floor is allowed to get, as tan(angle). 0.50 is 27 degrees.
 *  The shaft this replaces measured 4.4, and the first ramp 0.38 — but 0.38
 *  bought its gentleness with LENGTH, and length is what the porter called
 *  complicated (#48): 73 units of winding trench to lose 18. What actually
 *  constrains this number is that movement.js writes ant.y = groundY(x, z)
 *  with no notion of falling, so what must stay small is the height change
 *  per STEP, not the angle: at 0.50 a 0.25-unit step moves the floor by
 *  0.125, two orders under the cliff threshold the harness enforces. 27
 *  degrees is a ramp you walk down, not a slide. */
export const RAMP_SLOPE = 0.46;

/** How far the chamber floor sits below the lawn at the mouth. Fixed, and that
 *  is a decision with a history: the chamber ends up sixty units away, often
 *  under ground lower than the threshold, and sinking the floor to keep its
 *  roof buried made the cut longer, which drove it further downhill — measured
 *  at a 127-unit trench. So the depth stays put and the SPOIL goes over the
 *  chamber instead (founding.js's mound), which is both what an ant does and
 *  the only surface mark the roofed ground gets. */
export const NEST_DEPTH = 13;

/** Soil kept over the top of the dome, by mounding if the meadow is too low. */
export const ROOF_COVER = 4.0;

/** The founding chamber's walkable radius. It was 11 — a room 22 across for a
 *  queen 21 long, so the camera had nowhere to stand but in the wall (#67).
 *  1.65x that, and the wall mesh stands further out still (WALL_OUT). */
export const CHAMBER_R = QUEEN_R * 5.5;        // 18.15, was 11

/** Chamber: straight walls to CHAMBER_WALL, then a dome to CHAMBER_ROOF.
 *  The straight part is what guarantees headroom at the doorway — a pure dome
 *  is only tall enough in its middle, and the doorway is at its edge.
 *  The wall is a little taller than the nest is deep, so the lintel of the
 *  doorway the ramp arrives through sits at the meadow's level and the spoil
 *  mound, not the depth, pays for the dome (#67). */
export const CHAMBER_WALL = QUEEN_R * 4.2;     // 13.86, was 9.5
export const CHAMBER_ROOF = QUEEN_R * 6.2;     // 20.46, was 13

/** A corridor's roof on its centre line. Was CHAMBER_WALL (9.5): a queen's
 *  camera sits some eleven units over her floor, i.e. in the rock. */
export const LINK_ROOF = QUEEN_R * 4.5;        // 14.85

/* ---- published volume versus built mesh (#67) ---------------------------
   Everything above is the volume the world PUBLISHES — footprint and
   headroom — and it is what the queen and her camera are kept inside. The
   meshes used to be built on the same numbers with the wobble going both
   ways, so a wall stood up to 6% inside the footprint and a dome came down to
   a unit under the published ceiling: a camera placed legally was a camera in
   the rock, which is the full-screen wall plane of the round-17 captures. So
   the mesh is now built strictly OUTSIDE what is published, by these: */

/** A room's wall stands at WALL_OUT..WALL_OUT+WALL_WOBBLE of its radius. */
export const WALL_OUT = 1.08;
export const WALL_WOBBLE = 0.08;
/** A corridor's tube is this much wider than its walkable half-width. */
export const TUNNEL_BORE = 1.10;
/** Where a corridor's arch springs from, as a fraction of its roof. */
export const SPRINGER = 0.5;
/** A corridor's mouth widens by this much where it meets a room. */
export const MOUTH_FLARE = 0.15;
export const MOUTH_RUN = 4.0;
/** The tube's wobble only ever widens it, by at most this fraction. */
export const TUNNEL_LUMP = 0.10;
/** Published ceiling is kept this far under the built one: chord sag of the
 *  dome's rings, plus a camera's near plane. */
export const CEIL_MARGIN = 1.2;
/** Dome rings. Used by the mesh and by the cover bound below, which has to
 *  know how steep the first ring's facet is. */
export const DOME_RINGS = 6;

/** How much the cut turns on the way down, in radians. A straight trench
 *  reads as a canal; a curve reads as something dug and keeps the plan
 *  compact. 1.9 rad also HID the chamber until you were in it, and that turned
 *  out to be the wrong goal (#48): the porter wants to arrive at the bottom
 *  facing something, so the bottom has to be visible from partway down. 0.85
 *  is 49 degrees — still plainly excavated, no longer a labyrinth. Kept under
 *  PI so the cut can never cross itself; a height field cannot express a
 *  spiral. */
export const RAMP_TURN = 0.85;

/* The eased ends of the descent: the floor leaves the lawn and arrives at the
   chamber with zero slope, so there is no lip to trip on and no bowl at the
   bottom. Paid for by the middle being 1/(1-EASE) times the average slope,
   which is why RAMP_DESCEND below is derived from it rather than guessed. */
const EASE = 0.22;
const EASE_PEAK = 1 / (1 - EASE);

/** Length the cut needs in order to lose `drop` units at no more than
 *  RAMP_SLOPE. Derived, never typed in: the drop is not known until the ground
 *  over the chamber has been looked at. */
const descendFor = (drop) => (drop * EASE_PEAK) / RAMP_SLOPE;

/** The nominal length, for callers that have to guess the plan extent before
 *  the dig (founding.js's chooseHeading). */
export const RAMP_DESCEND = descendFor(NEST_DEPTH);

/* How quickly the threshold stops following the meadow's own slope. The cut
   has to leave the lawn flush — no lip to trip on — but carrying the meadow's
   gradient the whole way down spends slope budget the descent needs: at 0.35
   of tilt it was adding half again to the steepest step. So the tilt is paid
   off inside the first few body lengths and the profile is pure after that. */
const SILL_RUN = 14;

/** Slope profile: zero at both ends, constant in between. */
function ease(t) {
  const c = clamp(t, 0, 1);
  if (c < EASE) return (EASE_PEAK * c * c) / (2 * EASE);
  if (c > 1 - EASE) { const s = 1 - c; return 1 - (EASE_PEAK * s * s) / (2 * EASE); }
  return EASE_PEAK * (c - EASE * 0.5);
}

/* The floor is not a plane: it dishes slightly towards the middle (so the
   walk has a centre) and carries the same fine wobble as the walls. Both are
   small enough not to spend any of the slope budget. */
const CROSS_RISE = 0.9;
const FLOOR_GRAIN = 0.14;

/* ---- the apron: how you get INTO the cut --------------------------------
   The cut used to be a constant-width trench that started, flush but abrupt,
   on a straight line across its mouth. Everything about it was walkable and
   yet the only way in was to arrive dead in front of the opening: a step
   taken at u < 0 is outside the footprint, a step taken past the shoulder is
   an eight-unit drop the controller correctly refuses, so a queen walking up
   at any angle slid along an invisible edge looking for a gate 26 units wide
   in a meadow 900 across.

   The fix is not a bigger gate, it is no gate: the mouth FLARES, and over
   the same run the spoil banks lie down into the meadow (founding.js's rim
   taper). What that leaves is a ravine that gets shallower and wider as it
   comes up to the surface, so the ground she is standing on and the floor
   she would step onto differ by less than a step over a wide arc — which is
   the only test player/movement.js has ever applied. No door is written down
   anywhere; the shape is the door.

   The flare is quadratic rather than linear so the widening is fastest at
   the very mouth, where it buys the most approach angle, and has died away
   by the time the walls are tall enough to matter. */
export const APRON_LEN = 24;
export const APRON_FLARE = 2.4;

/** Walkable half-width of the cut at distance `u` from the mouth. */
export function hwAt(ex, u) {
  const t = clamp(1 - u / APRON_LEN, 0, 1);
  return ex.hw * (1 + (APRON_FLARE - 1) * t * t);
}

let EX = null;

/** Install the excavation (founding.js). One at a time — the game founds one
 *  nest, and a second would need a list here and in every query below. */
export function setExcavation(desc) { EX = desc; }
export function clearExcavation() { EX = null; }
export function getExcavation() { return EX; }

/**
 * Build the immutable descriptor. Called by founding.js, which is the only
 * module allowed to sample the lawn.
 *
 * @param mouth  {x, z} where the cut breaks the surface — the founded point
 * @param lawn   { y, gx, gz } lawn height at the mouth and its gradient, so
 *               the threshold can follow the meadow it cuts into
 * @param head   [hx, hz] unit heading the cut sets off on
 */
export function makeExcavation(mouth, lawn, head, seed) {
  const s = 1;                                   // turn sense; fixed, see a0
  const a0 = Math.atan2(-s * head[0], s * head[1]);
  const chamberR = CHAMBER_R;
  const descend = descendFor(NEST_DEPTH);
  const R = descend / RAMP_TURN;
  const A = { x: mouth.x - R * Math.cos(a0), z: mouth.z - R * Math.sin(a0) };
  /* The cut runs on past the point where it has finished descending, straight
     to the middle of the chamber. That last stretch is the doorway: it is what
     keeps the chamber's wall open where the ramp arrives, and what keeps
     headroom() honest there (see excavationHeadroomAt). */
  const len = descend + chamberR * 0.9;
  const end = pointOnArc(A, R, a0, s, len);

  /* The founding chamber is rooms[0], not a field of its own. `chamber` below
     is an alias onto the same object so nest.js, the camera and the harnesses
     keep reading what they always read — the contract (§7) says outright that
     it must not break for an internal refactor. */
  const chamber = { id: 'chamber', x: end.x, z: end.z, r: chamberR, wall: CHAMBER_WALL, roof: CHAMBER_ROOF };

  return {
    seed,
    mouth: { x: mouth.x, z: mouth.z },
    topY: lawn.y, gx: lawn.gx, gz: lawn.gz,
    floorY: lawn.y - NEST_DEPTH,
    arc: { ax: A.x, az: A.z, R, a0, s, len },
    hw: RAMP_HW,
    descend,
    rooms: [chamber],
    links: [],
    faces: [],
    chamber,
  };
}

/* ---- rooms, links and dig faces (contract §7) ---------------------------
   A list, from the first room on, rather than a chamber field plus a gallery
   field plus whatever the next one would have been called. The round-13
   gallery was the second special case; the hall would have been the third,
   and by then three files would have had an opinion about where the floor is.
   Everything below is plain data: no THREE.js, no closure, serialisable. */

/** Add a room and return it. `r` is the plan radius; the roof is domed. */
export function addRoom(id, x, z, r, wall = CHAMBER_WALL, roof = CHAMBER_ROOF) {
  const room = { id, x, z, r, wall, roof };
  EX.rooms.push(room);
  return room;
}

/** Add a straight level corridor between two points. `ends` names the rooms
 *  it joins, so its tube can be trimmed to their walls. */
export function addLink(id, a, b, hw, roof = LINK_ROOF, ends = []) {
  const dx = b.x - a.x, dz = b.z - a.z;
  const len = Math.hypot(dx, dz) || 1;
  const link = { id, ax: a.x, az: a.z, hx: dx / len, hz: dz / len, len, hw, roof, ends: ends.slice() };
  EX.links.push(link);
  return link;
}

/* ---- the built shell, as numbers (#67) ----------------------------------
   The mesh builders in founding.js and every query that has to agree with
   them — the published ceiling, the soil a mound has to put over a dome, the
   meadow that has to give way — read these, so "where is the rock" has one
   answer. */

/** The radius a corridor's tube is trimmed to inside a room: half a unit in
 *  front of the thinnest point of the wall, so the tube's end is always tucked
 *  behind the wall's own edge rather than stopping short of it. */
export function roomTrimR(room) { return room.r * WALL_OUT - 0.5; }

function linkRooms(ex, L) {
  return (L.ends || []).map((id) => ex.rooms.find((r) => r.id === id)).filter(Boolean);
}

/** The room a link's end sits in, with its centre in the link's frame. */
function linkEnds(ex, L) {
  return linkRooms(ex, L).map((r) => ({
    r,
    sc: (r.x - L.ax) * L.hx + (r.z - L.az) * L.hz,
    lc: -(r.x - L.ax) * L.hz + (r.z - L.az) * L.hx,
    start: ((r.x - L.ax) * L.hx + (r.z - L.az) * L.hz) < L.len * 0.5,
  }));
}

/** Where the tube's centre line meets the wall at each end. */
export function linkMouthS(ex, L) {
  let s0 = 0, s1 = L.len;
  for (const e of linkEnds(ex, L)) {
    const R = roomTrimR(e.r);
    if (e.start) s0 = Math.max(s0, e.sc + R); else s1 = Math.min(s1, e.sc - R);
  }
  return [s0, s1];
}

/** Widening of the bore near a room, measured from the room's wall. */
export function mouthFlareAt(ex, L, s) {
  const [s0, s1] = linkMouthS(ex, L);
  const t = clamp(1 - Math.min(s - s0, s1 - s) / MOUTH_RUN, 0, 1);
  return 1 + MOUTH_FLARE * t * t;
}

/**
 * Slide a tube vertex at (s, lat) out of the rooms at the link's ends, onto
 * their trim circle. A straight tube whose end is a flat cut stuck into a
 * round room by its centre line and by nothing at its sides — the jambs of
 * dark wall either side of the round-17 doorway were the tube's own outside,
 * standing in the chamber. Trimmed to the circle, the tube meets the wall
 * everywhere at once.
 */
export function linkTrimS(ex, L, s, lat) {
  for (const e of linkEnds(ex, L)) {
    const R = roomTrimR(e.r);
    const dl = lat - e.lc;
    if (Math.abs(dl) >= R) continue;
    const half = Math.sqrt(R * R - dl * dl);
    if (e.start) s = Math.max(s, e.sc + half);
    else s = Math.min(s, e.sc - half);
  }
  return s;
}

/** Radius of the spoil mound's headwall over the arriving cut: just outside
 *  the furthest the chamber's wobbling wall reaches. Between the wall and this
 *  the cut runs under a lintel. */
export function chamberDoorR(ex) {
  return ex.chamber.r * (WALL_OUT + WALL_WOBBLE) + 0.6;
}

/** Arch profile of a corridor's section at |lat| / bore, 0..1 of its roof. */
export function archK(k) {
  return SPRINGER + (1 - SPRINGER) * Math.sqrt(Math.max(0, 1 - k * k));
}

/** Published clear height in a room at plan distance d from its centre. */
function roomCeilAt(room, d) {
  const Rd = room.r * WALL_OUT;
  const q = d / Rd;
  return room.wall + (room.roof - room.wall) * Math.sqrt(Math.max(0, 1 - q * q)) - CEIL_MARGIN;
}

/** Published clear height in a corridor at lateral offset `lat`. */
function linkCeilAt(L, lat) {
  return L.roof * archK(Math.abs(lat) / (L.hw * TUNNEL_BORE)) - CEIL_MARGIN;
}

/**
 * The highest point of any built shell over (x, z), or null where nothing is
 * built. An UPPER bound, which is the direction a cover needs: a mound that
 * clears this clears the mesh. (The published ceiling is the lower bound, the
 * direction a camera needs.)
 */
export function excavationShellTopAt(x, z) {
  const ex = EX;
  if (!ex) return null;
  let top = null;
  const c1 = Math.cos(Math.PI / 2 / DOME_RINGS), s1 = Math.sin(Math.PI / 2 / DOME_RINGS);
  for (const r of ex.rooms) {
    const d = Math.hypot(x - r.x, z - r.z);
    const Rd = r.r * WALL_OUT;
    if (d > r.r * (WALL_OUT + WALL_WOBBLE) + 0.5) continue;
    const dh = r.roof - r.wall;
    /* Past the first dome ring the facet runs from the wobbled wall top to
       that ring, and never higher than the ring itself. */
    const y = d < Rd * c1 ? r.wall + dh * Math.sqrt(1 - (d / Rd) ** 2) : r.wall + dh * s1;
    top = top === null ? ex.floorY + y : Math.max(top, ex.floorY + y);
  }
  for (const L of ex.links) {
    const s = (x - L.ax) * L.hx + (z - L.az) * L.hz;
    if (s < 0 || s > L.len) continue;
    const grow = mouthFlareAt(ex, L, s) * (1 + TUNNEL_LUMP);
    const lat = -(x - L.ax) * L.hz + (z - L.az) * L.hx;
    const bore = L.hw * TUNNEL_BORE * grow;
    if (Math.abs(lat) > bore + 0.5) continue;
    const y = ex.floorY + L.roof * grow;
    top = top === null ? y : Math.max(top, y);
  }
  return top;
}

/** Where a point sits in a link's frame, or null if it is not in it. */
function inLink(L, x, z) {
  const s = (x - L.ax) * L.hx + (z - L.az) * L.hz;
  if (s < -L.hw || s > L.len + L.hw) return null;
  const lat = -(x - L.ax) * L.hz + (z - L.az) * L.hx;
  return Math.abs(lat) <= L.hw ? { s, lat } : null;
}

/** The room containing (x, z), or null. */
function roomAt(ex, x, z) {
  for (const r of ex.rooms) if (Math.hypot(x - r.x, z - r.z) <= r.r) return r;
  return null;
}

function pointOnArc(A, R, a0, s, u) {
  const a = a0 + (s * u) / R;
  return { x: A.x + R * Math.cos(a), z: A.z + R * Math.sin(a) };
}

/** Centre line of the cut at distance `u` from the mouth. */
export function rampCentre(ex, u) {
  return pointOnArc({ x: ex.arc.ax, z: ex.arc.az }, ex.arc.R, ex.arc.a0, ex.arc.s, u);
}

const wrapPi = (a) => { let d = a % (Math.PI * 2); if (d > Math.PI) d -= Math.PI * 2; if (d < -Math.PI) d += Math.PI * 2; return d; };

/**
 * (u along the cut, signed lateral offset) of a world point, whether or not it
 * is inside the cut. Exported separately from rampParam() because the mesh
 * needs to know how far OUTSIDE the walkable width it is — that is where the
 * cut's face and the spoil bank are, and a builder that could only ask
 * "inside?" had to guess the shoulder, which is how the mound ended up walling
 * off ground the height field called walkable.
 */
/* The arc's own endpoints have to belong to the arc. u is recovered through
   an atan2 and a wrap, so the point at u = 0 lands on either side of zero
   depending on the site's angles, and a strict test threw the threshold out of
   the cut on roughly half of them: descentPath() then fell back to the chamber
   depth and advertised a doorway eighteen units below the meadow, which the
   controller correctly refused to let the queen step into. One micron of
   tolerance, well under any length this file measures. */
const U_EPS = 1e-6;

export function rampOffset(ex, x, z, uPad = 0) {
  const { ax, az, R, a0, s, len } = ex.arc;
  const vx = x - ax, vz = z - az;
  const u = R * wrapPi(s * (Math.atan2(vz, vx) - a0));
  if (u < -uPad - U_EPS || u > len + uPad + U_EPS) return null;
  const cu = clamp(u, 0, len);
  return { u: cu, lat: Math.hypot(vx, vz) - R, hw: hwAt(ex, cu) };
}

/** (u, lat) of a world point that is actually IN the cut, else null. */
export function rampParam(ex, x, z) {
  const o = rampOffset(ex, x, z);
  return o && Math.abs(o.lat) <= o.hw ? o : null;
}

/** Ceiling of the chamber's dome at a world point, or null outside it. Shared
 *  with the mesh so the spoil heaped on top can be guaranteed to cover it —
 *  a mound built from its own guess left the dome showing through as a dark
 *  band across the heap. */
export function chamberRoofAt(ex, x, z) {
  const d = Math.hypot(x - ex.chamber.x, z - ex.chamber.z);
  if (d >= ex.chamber.r) return null;
  return ex.floorY + roomCeilAt(ex.chamber, d);
}

/** Floor height in the cut. Split out so the mesh builder can use exactly the
 *  same function the walk does — two of these that disagree is how a floor
 *  ends up under its own mesh. */
export function rampFloorAt(ex, x, z, u, lat) {
  const w = Math.pow(clamp(1 - u / SILL_RUN, 0, 1), 2);
  const tilt = (ex.gx * (x - ex.mouth.x) + ex.gz * (z - ex.mouth.z)) * w;
  const y = lerp(ex.topY, ex.floorY, ease(u / ex.descend)) + tilt;
  /* Normalised against the width AT THIS u, not the nominal one: the dish is
     a shape, not a height, and measuring it against a constant would have the
     flared mouth rising CROSS_RISE * FLARE^2 — three and a half units of lip
     across the one place the cut is supposed to be walk-in-able. */
  const k = lat / hwAt(ex, u);
  return y + CROSS_RISE * k * k + FLOOR_GRAIN * (vnoise(x * 0.1 + ex.seed, z * 0.1 + ex.seed) - 0.5) * 2;
}

/** Floor height on the chamber's flat. */
export function chamberFloorAt(ex, x, z) {
  return ex.floorY + FLOOR_GRAIN * (vnoise(x * 0.1 + ex.seed, z * 0.1 + ex.seed) - 0.5) * 2;
}

/** Inside of the chamber's plan disc. */
export function inChamber(ex, x, z) {
  return Math.hypot(x - ex.chamber.x, z - ex.chamber.z) <= ex.chamber.r;
}

/**
 * THE function terrain.js's groundY() defers to: the floor of the excavation
 * at (x, z), or null if nothing has been dug there.
 *
 * The deepest contributor wins. min() of continuous pieces is continuous, so
 * where the cut runs into the chamber there is no step to fall down — which
 * matters, because a step here is a teleport in play, not a stumble.
 */
export function excavationFloorAt(x, z) {
  const ex = EX;
  if (!ex) return null;
  let y = null;
  const rp = rampParam(ex, x, z);
  if (rp) y = rampFloorAt(ex, x, z, rp.u, rp.lat);
  /* Every room and every link is dug to the same level, so the whole nest
     under the ramp is one flat floor and min() of it with itself is itself.
     That is deliberate: a step between two dug pieces is a teleport in play,
     not a stumble, and the cheapest way to have no step is to have no
     difference. */
  if (roomAt(ex, x, z) || ex.links.some((L) => inLink(L, x, z))) {
    const fy = chamberFloorAt(ex, x, z);
    y = y === null ? fy : Math.min(y, fy);
  }
  return y;
}

/**
 * Clear height above the floor, or Infinity where the excavation is open to
 * the sky. Finite means there is soil overhead — which is exactly the test a
 * caller needs in order to tell "I am in the nest" from "I am standing on the
 * meadow above the nest", the one case a height field cannot answer by itself.
 */
export function excavationHeadroomAt(x, z) {
  const ex = EX;
  if (!ex) return 0;
  const floor = excavationFloorAt(x, z);
  if (floor === null) return 0;
  /* The chamber is tested FIRST, before the cut. The cut's last stretch runs
     into the middle of the chamber, and answering Infinity there would say the
     chamber is open to the sky along a corridor's width — which is exactly
     what the mesh did before it was corrected, an open slot straight through
     the apex of the spoil heap. The chamber is roofed; the doorway is an arch
     through its wall, and CHAMBER_WALL is what makes that arch tall enough. */
  const room = roomAt(ex, x, z);
  if (room) return roomCeilAt(room, Math.hypot(x - room.x, z - room.z));
  /* The doorway the cut arrives through has a thickness: the wall, and the
     headwall of the spoil mound standing just outside it. Under that lintel
     the cut is roofed, and saying Infinity there let a camera rise into it. */
  if (Math.hypot(x - ex.chamber.x, z - ex.chamber.z) <= chamberDoorR(ex) && rampParam(ex, x, z)) {
    return ex.chamber.wall - CEIL_MARGIN;
  }
  let best = null;
  for (const L of ex.links) {
    const p = inLink(L, x, z);
    if (p) best = Math.max(best ?? -Infinity, linkCeilAt(L, p.lat));
  }
  if (best !== null) return best;
  // open cut: nothing overhead at all
  return Infinity;
}

/* ---- dig faces ---------------------------------------------------------
   A face is a place on a wall that can be worked, and what it opens when the
   work is done. `opens` is a plain descriptor, not a callback: the state has
   to survive being written to disk (castes-et-micro-macro.md §3.4), and a
   closure does not. */

/** Add a workable face. `nx, nz` points OUT of the wall, into the room. */
export function addDigFace(id, x, z, nx, nz, needed, opens) {
  const f = { id, x, z, y: EX.floorY, nx, nz, needed, worked: 0, done: false, opens };
  EX.faces.push(f);
  return f;
}

/** The faces still worth walking to: open, and not yet finished. */
export function excavationDigFaces() {
  if (!EX) return [];
  return EX.faces.filter((f) => !f.done).map((f) => ({
    id: f.id, x: f.x, y: f.y, z: f.z, nx: f.nx, nz: f.nz,
    needed: f.needed, worked: f.worked, opens: f.opens.kind,
  }));
}

/**
 * Pay ant-seconds into one face. Idempotent past completion, because the
 * caller is a progress gauge and gauges overshoot — the same reason
 * digGallery() was written idempotent in round 13.
 *
 * Opening the thing the face reveals is the WORLD's job (§7): this returns
 * `opened` and founding.js acts on it, so that a harness can dig the whole
 * nest with no ant alive anywhere.
 */
export function advanceDigFace(id, antSeconds) {
  const f = EX && EX.faces.find((x) => x.id === id);
  if (!f) return null;
  if (f.done) return { worked: f.worked, needed: f.needed, done: true, opened: null };
  f.worked = Math.min(f.needed, f.worked + Math.max(0, antSeconds));
  if (f.worked < f.needed) return { worked: f.worked, needed: f.needed, done: false, opened: null };
  f.done = true;
  return { worked: f.worked, needed: f.needed, done: true, opened: f.opens };
}

/** contains / floorY / headroom — contract §6. `lawnFallback` is groundY's
 *  own outdoor answer, passed in so this module still never imports terrain. */
export function excavationFootprint(lawnFallback) {
  if (!EX) return null;
  return {
    contains: (x, z) => excavationFloorAt(x, z) !== null,
    floorY: (x, z) => { const y = excavationFloorAt(x, z); return y === null ? lawnFallback(x, z) : y; },
    headroom: (x, z) => excavationHeadroomAt(x, z),
  };
}

/**
 * The walkable centre line, mouth -> chamber (contract §6). Sampled off the
 * same arc and the same floor function the ground uses, so a caller that
 * follows it is on the floor by construction rather than by agreement.
 */
export function excavationDescentPath(step = 4) {
  const ex = EX;
  if (!ex) return null;
  const out = [];
  const n = Math.max(2, Math.ceil(ex.arc.len / step));
  for (let i = 0; i <= n; i++) {
    const u = (i / n) * ex.arc.len;
    const p = rampCentre(ex, u);
    /* Fall back to the ramp's floor at this u, never to ex.floorY: the
       chamber depth at the mouth is not a conservative guess, it is a
       eighteen-unit lie about the one point a player is told to walk to. */
    const y = excavationFloorAt(p.x, p.z);
    out.push({ x: p.x, y: y === null ? rampFloorAt(ex, p.x, p.z, u, 0) : y, z: p.z });
  }
  return out;
}

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

/* player/avatar.js FOUNDING_QUEEN: collide radius 3.3, body ~24 long. */
export const QUEEN_R = 3.3;

/** Half-width of the descending cut: she passes with a full body either side. */
export const RAMP_HW = QUEEN_R * 2.0;          // 13.2 clear

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

/** Chamber: straight walls to CHAMBER_WALL, then a dome to CHAMBER_ROOF.
 *  The straight part is what guarantees headroom at the doorway — a pure dome
 *  is only tall enough in its middle, and the doorway is at its edge. */
export const CHAMBER_WALL = 9.5;
export const CHAMBER_ROOF = 13;

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
  const chamberR = 11;
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

/** Add a straight level corridor between two points. */
export function addLink(id, a, b, hw, roof = CHAMBER_WALL) {
  const dx = b.x - a.x, dz = b.z - a.z;
  const len = Math.hypot(dx, dz) || 1;
  const link = { id, ax: a.x, az: a.z, hx: dx / len, hz: dz / len, len, hw, roof };
  EX.links.push(link);
  return link;
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
  return { u: clamp(u, 0, len), lat: Math.hypot(vx, vz) - R };
}

/** (u, lat) of a world point that is actually IN the cut, else null. */
export function rampParam(ex, x, z) {
  const o = rampOffset(ex, x, z);
  return o && Math.abs(o.lat) <= ex.hw ? o : null;
}

/** Ceiling of the chamber's dome at a world point, or null outside it. Shared
 *  with the mesh so the spoil heaped on top can be guaranteed to cover it —
 *  a mound built from its own guess left the dome showing through as a dark
 *  band across the heap. */
export function chamberRoofAt(ex, x, z) {
  const d = Math.hypot(x - ex.chamber.x, z - ex.chamber.z) / ex.chamber.r;
  if (d >= 1) return null;
  return ex.floorY + CHAMBER_WALL + (CHAMBER_ROOF - CHAMBER_WALL) * Math.pow(Math.sqrt(1 - d * d), 0.7);
}

/** Floor height in the cut. Split out so the mesh builder can use exactly the
 *  same function the walk does — two of these that disagree is how a floor
 *  ends up under its own mesh. */
export function rampFloorAt(ex, x, z, u, lat) {
  const w = Math.pow(clamp(1 - u / SILL_RUN, 0, 1), 2);
  const tilt = (ex.gx * (x - ex.mouth.x) + ex.gz * (z - ex.mouth.z)) * w;
  const y = lerp(ex.topY, ex.floorY, ease(u / ex.descend)) + tilt;
  const k = lat / ex.hw;
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
  if (room) {
    const d = Math.hypot(x - room.x, z - room.z) / room.r;
    return room.wall + (room.roof - room.wall) * Math.pow(Math.sqrt(Math.max(0, 1 - d * d)), 0.7);
  }
  for (const L of ex.links) if (inLink(L, x, z)) return L.roof;
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

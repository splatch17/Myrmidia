import * as world from '../world/index.js';
import { clamp, lerp } from '../core/noise.js';

/* ==========================================================================
   "Am I underground?" — one answer, for the whole controller.

   design/api-monde-gameplay.md §6 is explicit that a *second* answer to that
   question is the failure mode this contract exists to prevent, so every
   place in player/** that used to decide it for itself (movement.js clamping
   into containSurface/LAWN_BOUNDS, decorCollision.js and climb.js testing
   z > TUNNEL_MOUTH, camera.js sizing the boom) now asks here, and here asks
   the world.

   Read through a copied namespace, per the contract's own rule: an export the
   world has not delivered yet is `undefined`, which is a case, not a bundler
   error.

   WHAT `approx` MEANS. The world half of #40 (#41) makes groundY() answer the
   nest floor inside the nest and publishes nestFootprint()/descentPath(). Until
   it lands, this file synthesises a footprint from what world/founding.js
   already publishes about the nest it dug — and marks it `approx: true` all
   the way out to window.__nest(), so nothing downstream can mistake a guess
   for the world's own word. The moment nestFootprint() exists, the guess is
   dead code that never runs.

   The synthesised part that is a genuine invention, and the one to delete
   first: THE RAMP. The shaft world/founding.js digs today is 15 units at
   AXIS_TILT 0.22 — near plumb — and a plumb shaft simply has no single-valued
   floor height, which is why the descent had to be scripted in the first
   place and why §6 arbitrates "une rampe, pas un puits" as world work. The
   ramp modelled below is therefore a walkable *height field* with no mesh
   under it: it proves the controller half (she walks down, she walks out,
   nothing else in player/** assumes lawn any more) and it will look wrong
   from the outside until #41 digs the hole that matches it.
   ========================================================================== */

const W = { ...world };

/* How far off a wall the footprint stops, as a fraction of the cavity radius.
   She is 3.3 across (avatar.js) and nothing enforces the wall underground, so
   the footprint is the containment: keeping it inside the mesh is what stops
   her shoulder poking through. */
const WALL_MARGIN = 0.82;
/* The straight capsule below stands in for a gallery that meanders by up to a
   radius (world/founding.js buildGallery's `bend`), so it only claims the near
   half, where the meander is still smaller than the bore. */
const GALLERY_USE = 0.55;
const GALLERY_HALF_WIDTH = 2.2;

let cacheKey = null, cached = null;

function landmarksOf(n, g) {
  const c = n.chamber;
  // horizontal unit vector pointing from the chamber back out under the
  // mouth: the shaft's own lean, which is also (negated) the gallery heading
  let ox = n.mouth.x - c.x, oz = n.mouth.z - c.z;
  const ol = Math.hypot(ox, oz);
  if (ol < 0.01) { ox = 0; oz = 1; } else { ox /= ol; oz /= ol; }
  return {
    mouth: { x: n.mouth.x, y: n.mouth.y, z: n.mouth.z, r: n.mouth.r },
    chamber: { x: c.x, y: n.floorY, z: c.z, r: c.r, ceilY: c.ceilY },
    out: [ox, oz],
    gallery: g ? { start: { x: g.start.x, z: g.start.z }, end: { x: g.end.x, y: g.end.y, z: g.end.z } } : null,
  };
}

/* ---- the stand-in footprint (deleted when #41 lands) --------------------- */

function approximate(n, g) {
  const L = landmarksOf(n, g);
  const c = L.chamber;
  const innerR = c.r * WALL_MARGIN;
  const drop = Math.max(2, n.mouth.y - c.y);
  // 45 degrees from the chamber wall out to daylight. Steep for a walk and
  // gentle enough for a ground-following controller, which is the whole
  // trade §6 arbitrates.
  const rampRun = innerR + drop;
  const rampHalf = Math.max(n.mouth.r, 5);

  const gal = L.gallery && (() => {
    const dx = L.gallery.end.x - L.gallery.start.x, dz = L.gallery.end.z - L.gallery.start.z;
    const len = Math.hypot(dx, dz) * GALLERY_USE;
    return len > 1 ? { x: L.gallery.start.x, z: L.gallery.start.z, dx: dx / Math.hypot(dx, dz), dz: dz / Math.hypot(dx, dz), len } : null;
  })();

  /** Along-axis / lateral coordinates of (x,z) in the ramp's frame. */
  function ramp(x, z) {
    const rx = x - c.x, rz = z - c.z;
    const s = rx * L.out[0] + rz * L.out[1];
    const lat = Math.abs(-rx * L.out[1] + rz * L.out[0]);
    return { s, lat };
  }
  function galleryAt(x, z) {
    if (!gal) return null;
    const rx = x - gal.x, rz = z - gal.z;
    const u = rx * gal.dx + rz * gal.dz;
    if (u < 0 || u > gal.len) return null;
    const lat = Math.abs(-rx * gal.dz + rz * gal.dx);
    return lat <= GALLERY_HALF_WIDTH ? u : null;
  }

  function contains(x, z) {
    if (Math.hypot(x - c.x, z - c.z) <= innerR) return true;
    const r = ramp(x, z);
    if (r.s > 0 && r.s <= rampRun && r.lat <= rampHalf) return true;
    return galleryAt(x, z) !== null;
  }

  function floorY(x, z) {
    let best = null;
    if (Math.hypot(x - c.x, z - c.z) <= innerR) best = c.y;
    if (galleryAt(x, z) !== null) best = Math.min(best === null ? Infinity : best, c.y + 0.15);
    const r = ramp(x, z);
    if (r.s > innerR && r.s <= rampRun && r.lat <= rampHalf) {
      /* Blended against the *local* lawn rather than one sampled at the far
         end, so the outer lip of the ramp meets the real ground exactly
         wherever it happens to come out — which is what lets movement.js
         recognise "this edge of the footprint is a doorway, not a wall". */
      const k = clamp((r.s - innerR) / Math.max(1e-3, rampRun - innerR), 0, 1);
      const y = lerp(c.y, W.groundY(x, z), k * k * (3 - 2 * k));
      best = best === null ? y : Math.min(best, y);
    }
    return best === null ? W.groundY(x, z) : best;
  }

  function headroom(x, z) {
    if (Math.hypot(x - c.x, z - c.z) <= innerR) return Math.max(4, c.ceilY - c.y);
    return 8;
  }

  return { contains, floorY, headroom, approx: true, landmarks: L };
}

/* ---- the published one, when there is one -------------------------------- */

function build() {
  const n = typeof W.getFoundedNest === 'function' ? W.getFoundedNest() : null;
  if (!n || !n.chamber) return null;
  const g = typeof W.getGallery === 'function' ? W.getGallery() : null;

  const real = typeof W.nestFootprint === 'function' ? W.nestFootprint() : null;
  if (real && typeof real.contains === 'function') {
    return {
      contains: (x, z) => real.contains(x, z),
      floorY: (x, z) => real.floorY(x, z),
      headroom: (x, z) => (typeof real.headroom === 'function' ? real.headroom(x, z) : 8),
      approx: false,
      landmarks: landmarksOf(n, g),
    };
  }
  return approximate(n, g);
}

/** The nest's walkable footprint, or null while nothing is dug. */
export function nestFootprint() {
  const n = typeof W.getFoundedNest === 'function' ? W.getFoundedNest() : null;
  if (!n) { cacheKey = null; cached = null; return null; }
  const g = typeof W.getGallery === 'function' ? W.getGallery() : null;
  // rebuilt when the excavation changes shape, not every frame
  const key = `${n.x},${n.z},${g ? 1 : 0},${typeof W.nestFootprint === 'function' ? 1 : 0}`;
  if (key !== cacheKey) { cacheKey = key; cached = build(); }
  return cached;
}

/** Is (x, z) inside the dug nest? False whenever there is no nest. */
export function insideNest(x, z) {
  const fp = nestFootprint();
  return !!fp && fp.contains(x, z);
}

/**
 * The point on the boundary of the footprint between an inside point and an
 * outside one, found by bisection on contains() alone.
 *
 * Deliberately built from the contract's smallest surface: any other way of
 * finding a wall means re-deriving the nest's geometry in player/**, which is
 * the exact duplication design/api-monde-gameplay.md was written to stop. It
 * also means this works unchanged against the real footprint and the stand-in.
 */
export function boundaryBetween(fp, ix, iz, ox, oz, steps = 10) {
  let ax = ix, az = iz, bx = ox, bz = oz;
  for (let i = 0; i < steps; i++) {
    const mx = (ax + bx) * 0.5, mz = (az + bz) * 0.5;
    if (fp.contains(mx, mz)) { ax = mx; az = mz; } else { bx = mx; bz = mz; }
  }
  return [ax, az];
}

/**
 * Where the footprint reaches daylight — the point a player walks *to* in
 * order to walk in. Derived, not stored: the outermost place where the nest
 * floor is still level with the lawn. That is the doorway whether the world
 * digs a ramp, a sloped crater, or something else again.
 */
export function nestEntry() {
  const fp = nestFootprint();
  if (!fp) return null;
  /* When the world publishes the descent, its first sample *is* the threshold
     — it is the same arc the floor is cut along, so a point taken from it is
     on the floor by construction. The scan below is the stand-in's answer to
     the same question and stays only for the case where nothing publishes it. */
  const path = typeof W.descentPath === 'function' ? W.descentPath() : null;
  if (path && path.length) return { x: path[0].x, z: path[0].z, r: 0, fromPath: true };
  const c = fp.landmarks.chamber;
  let best = null;
  for (let a = 0; a < 72; a++) {
    const th = (a / 72) * Math.PI * 2;
    for (let r = 4; r <= 80; r += 1.5) {
      const x = c.x + Math.cos(th) * r, z = c.z + Math.sin(th) * r;
      if (!fp.contains(x, z)) continue;
      if (W.groundY(x, z) - fp.floorY(x, z) > 1.5) continue;   // not at surface level
      if (!best || r > best.r) best = { x, z, r };
    }
  }
  // No surface-level rim at all (a plumb shaft, i.e. the world half is not in
  // yet and this is not the stand-in either): the mouth is the best guess
  // there is, and it is honestly marked as one.
  return best || { x: fp.landmarks.mouth.x, z: fp.landmarks.mouth.z, r: 0, guessed: true };
}

/* The furthest point down the published start->end line of the gallery that
   the footprint still calls floor. Two samples of a straight line through a
   curved tunnel, with the footprint as the judge — cheap, and it cannot claim
   ground the world does not have. */
function deepestWalkable(fp, g) {
  let best = { x: g.start.x, z: g.start.z };
  for (let i = 1; i <= 20; i++) {
    const t = i / 20;
    const x = lerp(g.start.x, g.end.x, t), z = lerp(g.start.z, g.end.z, t);
    if (!fp.contains(x, z)) break;
    best = { x, z };
  }
  return best;
}

/** Everything a debug hook or the HUD needs to talk about the nest. */
export function nestInfo(ant) {
  const fp = nestFootprint();
  if (!fp) return null;
  const L = fp.landmarks;
  const entry = nestEntry();
  const g = L.gallery;
  return {
    approx: fp.approx,
    mouth: L.mouth,
    chamber: L.chamber,
    entry,
    gallery: g ? {
      ...g,
      // a point the harness (and, later, a worker) can be sent to that is
      // properly *in* the tunnel rather than in its mouth. Found by asking
      // the footprint rather than by trusting the straight line from start to
      // end: the tunnel meanders, so the far half of that line is in rock.
      walk: deepestWalkable(fp, g),
    } : null,
    inside: ant ? fp.contains(ant.x, ant.z) : false,
    floorY: ant ? fp.floorY(ant.x, ant.z) : null,
    headroom: ant ? fp.headroom(ant.x, ant.z) : null,
    /* Soil overhead: inside the excavation *and* with a finite ceiling. Both
       halves are needed — headroom() answers 0, which is finite, for ground
       that has not been dug at all, so the finiteness test on its own calls
       the whole meadow a cavern. */
    roofed: ant ? (fp.contains(ant.x, ant.z) && Number.isFinite(fp.headroom(ant.x, ant.z))
      && fp.headroom(ant.x, ant.z) > 0) : false,
  };
}

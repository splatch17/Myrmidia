import { clamp, lerp, vnoise3 } from '../core/noise.js';

/* ==========================================================================
   The nest as a VOLUME of diggable earth (#81).

   Until round 22 the nest was a list of shapes — a chamber, rooms of three
   standard sizes, straight corridors — and every question about it (where is
   the floor, is there a roof, where is the wall) was answered by testing each
   shape in turn. That is the construction the porter asked to replace:
   "demain plus libre, pour que chaque joueur façonne une fourmilière unique".
   A player who can dig anywhere cannot be described by a list of rooms.

   REPRESENTATION, AND WHY THIS ONE.
   A signed density on a lattice of VOXEL = 1 world unit: positive is earth,
   negative is dug air, and the wall is where it crosses zero. Not a boolean
   grid:
     - a boolean cell of one unit draws a staircase, and a cell fine enough to
       hide the stairs (a quarter unit) is 64x the memory and the remesh time.
       A density is interpolated along each lattice edge, so the surface is
       placed to a fraction of a cell and a unit lattice already draws curved
       walls and flat floors — the surface-nets mesher (nestVolumeMesh.js)
       puts every vertex on the interpolated crossing.
     - the value is (approximately) the distance to the wall, so the same data
       answers "how far is she from the wall" (walkableAt: the queen's body
       margin) and "how cramped is this corner" (the mesher's AO) without a
       second structure.
   One unit is the queen's radius / 3.3: fine enough for a niche she can
   stand in, coarse enough that the whole founded nest is a few hundred
   thousand samples in chunks of 16^3, allocated only where something was
   dug (and 3 units round it, where the distance is still stored).

   DIGGING IS min(). A brush is a signed distance function; opening cells is
   `d = min(d, brush)`. min() is idempotent, which is what lets a dig face
   re-apply a growing brush every time its gauge moves without eroding what is
   already open — a smooth union would carve a little more at every call.

   DEPENDENCIES. Nothing but the noise helpers: world/excavation.js (and so
   terrain.js's groundY) reads this module, and founding.js writes it — the
   same no-cycle arrangement excavation.js itself has, for the same reason.
   ========================================================================== */

export const VOXEL = 1.0;
export const CHUNK = 16;
const N = CHUNK;
const N3 = N * N * N;
/** Stored distances are clamped to +-SOLID; unallocated earth reads SOLID. */
const SOLID = 8;
/** How far past a brush's surface its distance is still written. The mesher
 *  only needs the sign near the wall; the AO probe and the normals look ~3
 *  units out, and that is what this pays for. */
const BRUSH_PAD = 3;
/** Stored values at or under this are "deep air" and are not re-evaluated
 *  by later brushes (openSdf). */
const DEEP_AIR = -4.5;

/** Earth left over a free dig (a brush with no `cover` given): the roof of a
 *  hand-dug niche stays this far under the meadow, so the lawn over it never
 *  has to open (world/founding.js openTheMeadow) and no sky shows through a
 *  tunnel nobody heaped spoil over. The rooms the dig faces open pass
 *  `cover: null` and get a spoil heap instead, as before. */
export const MIN_COVER = 3.0;

/* ---- what "walkable" means, for the queen ------------------------------
   Kept here, next to the data, so excavation.js's footprint and any future
   caller agree on one definition. */
/** Distance from the wall her centre is kept at, measured at BODY_PROBE over
 *  the floor. 1.3: the old rooms published a walkable radius 8% inside the
 *  wall mesh (1.3 to 1.45 units for the rooms this nest digs), and the
 *  corridors 10% — the harnesses and the camera were tuned against that. */
export const WALK_MARGIN = 1.3;
export const BODY_PROBE = 2.5;
/** Below this much clear height a span is a crawl space, not a floor she can
 *  stand on. */
export const MIN_SPAN = 6.0;

const OFF = 1024;
const ckey = (cx, cy, cz) => ((cx + OFF) * 2048 + (cy + OFF)) * 2048 + (cz + OFF);
const colKeyOf = (cx, cz) => (cx + OFF) * 2048 + (cz + OFF);
/* y is the fastest axis, so a column scan walks contiguous memory. */
const lidx = (lx, ly, lz) => ((lx * N) + lz) * N + ly;

const chunks = new Map();          // ckey -> { cx, cy, cz, d: Float32Array }
const colVer = new Map();          // chunk-column key -> version
const colCache = new Map();        // lattice column -> { ver, lo, hi }
let bounds = null;                 // allocated extent, in chunk coords
let version = 0;
let lowestIy = Infinity;           // deepest open lattice level
let surfaceFn = null;              // lawnY, handed in by founding.js
const listeners = new Set();

let lastKey = -1, lastChunk = null;

function chunkAt(cx, cy, cz) {
  const k = ckey(cx, cy, cz);
  if (k !== lastKey) { lastKey = k; lastChunk = chunks.get(k) || null; }
  return lastChunk;
}

function allocChunk(cx, cy, cz) {
  const c = { cx, cy, cz, key: ckey(cx, cy, cz), d: new Float32Array(N3).fill(SOLID) };
  chunks.set(c.key, c);
  lastKey = -1;
  if (!bounds) bounds = { x0: cx, x1: cx, y0: cy, y1: cy, z0: cz, z1: cz };
  else {
    bounds.x0 = Math.min(bounds.x0, cx); bounds.x1 = Math.max(bounds.x1, cx);
    bounds.y0 = Math.min(bounds.y0, cy); bounds.y1 = Math.max(bounds.y1, cy);
    bounds.z0 = Math.min(bounds.z0, cz); bounds.z1 = Math.max(bounds.z1, cz);
  }
  return c;
}

/** Density at a lattice point. */
export function latticeD(ix, iy, iz) {
  const c = chunkAt(ix >> 4, iy >> 4, iz >> 4);
  return c ? c.d[lidx(ix & 15, iy & 15, iz & 15)] : SOLID;
}

/** Trilinear density at a world point: < 0 is open. */
export function sampleD(x, y, z) {
  const fx = x / VOXEL, fy = y / VOXEL, fz = z / VOXEL;
  const ix = Math.floor(fx), iy = Math.floor(fy), iz = Math.floor(fz);
  const tx = fx - ix, ty = fy - iy, tz = fz - iz;
  const c00 = lerp(latticeD(ix, iy, iz), latticeD(ix + 1, iy, iz), tx);
  const c10 = lerp(latticeD(ix, iy + 1, iz), latticeD(ix + 1, iy + 1, iz), tx);
  const c01 = lerp(latticeD(ix, iy, iz + 1), latticeD(ix + 1, iy, iz + 1), tx);
  const c11 = lerp(latticeD(ix, iy + 1, iz + 1), latticeD(ix + 1, iy + 1, iz + 1), tx);
  return lerp(lerp(c00, c10, ty), lerp(c01, c11, ty), tz);
}

/** Is (x, y, z) dug air? */
export function isOpen(x, y, z) { return !!bounds && sampleD(x, y, z) < 0; }

/** Bumped on every change; a cheap "has anything moved" for caches. */
export function volumeVersion() { return version; }

/** The deepest dug point's y (a lattice level, so within a unit under the
 *  real floor), or null if nothing is dug. */
export function volumeLowestY() { return lowestIy === Infinity ? null : lowestIy * VOXEL; }

/** The meadow's height, so a free brush can keep MIN_COVER under it. */
export function setVolumeSurface(fn) { surfaceFn = fn; }

/** Subscribe to changes. `fn(e)`, e.kind in 'open' | 'plan' | 'unplan' |
 *  'clear'. For 'open': { opened, chunks: [{ cx, cy, cz, lo, hi }] } where
 *  lo/hi are the touched local index range, so a mesher can tell which
 *  neighbouring chunks share the changed samples. Returns the unsubscriber. */
export function onVolumeChange(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
function emit(e) { for (const fn of listeners) fn(e); }

/* ---- the wall's grain ---------------------------------------------------
   One noise for every brush, in world space, so two brushes that meet agree
   about the wobble where they meet, and re-applying a brush is idempotent. */
export function wallNoise(x, y, z) {
  return 0.62 * vnoise3(x * 0.13 + 17.3, y * 0.13 + 5.1, z * 0.13 + 29.7)
       + 0.38 * vnoise3(x * 0.37 + 3.9, y * 0.41 + 41.2, z * 0.37 + 11.6);
}

/* ---- writing ------------------------------------------------------------ */

/**
 * Open every lattice point inside `sdf` (world-space signed distance, < 0
 * inside) within the box. The low-level entry: founding.js uses it for the
 * shapes only the world knows (the chamber, its doorway, a dig face's room),
 * and openCells() below for everything expressible as a brush.
 * Returns the number of cells that went from earth to air.
 */
export function openSdf(sdf, box) {
  const ix0 = Math.ceil(box[0] / VOXEL), ix1 = Math.floor(box[3] / VOXEL);
  const iy0 = Math.ceil(box[1] / VOXEL), iy1 = Math.floor(box[4] / VOXEL);
  const iz0 = Math.ceil(box[2] / VOXEL), iz1 = Math.floor(box[5] / VOXEL);
  let opened = 0;
  const touched = new Map();
  for (let ix = ix0; ix <= ix1; ix++) {
    const x = ix * VOXEL;
    for (let iz = iz0; iz <= iz1; iz++) {
      const z = iz * VOXEL;
      for (let iy = iy0; iy <= iy1; iy++) {
        /* Deep in air already: a brush can only lower this further, and
           nothing reads a distance past DEEP_AIR (the walk margin, the AO
           probe and the mesher all look within ~3 units of a wall). Skipping
           these before evaluating the brush is what makes re-applying a
           growing brush cost its new shell, not its whole volume. */
        const cc = chunkAt(ix >> 4, iy >> 4, iz >> 4);
        if (cc && cc.d[lidx(ix & 15, iy & 15, iz & 15)] <= DEEP_AIR) continue;
        const v0 = sdf(x, iy * VOXEL, z);
        if (!(v0 < SOLID)) continue;
        const v = v0 < -SOLID ? -SOLID : v0;
        const cx = ix >> 4, cy = iy >> 4, cz = iz >> 4;
        let c = chunkAt(cx, cy, cz);
        if (!c) c = allocChunk(cx, cy, cz);
        const lx = ix & 15, ly = iy & 15, lz = iz & 15;
        const i = lidx(lx, ly, lz);
        const cur = c.d[i];
        if (v >= cur) continue;
        if (cur >= 0 && v < 0) opened++;
        if (v < 0 && iy < lowestIy) lowestIy = iy;
        c.d[i] = v;
        let t = touched.get(c.key);
        if (!t) {
          t = { cx, cy, cz, lo: [lx, ly, lz], hi: [lx, ly, lz] };
          touched.set(c.key, t);
        } else {
          if (lx < t.lo[0]) t.lo[0] = lx; if (lx > t.hi[0]) t.hi[0] = lx;
          if (ly < t.lo[1]) t.lo[1] = ly; if (ly > t.hi[1]) t.hi[1] = ly;
          if (lz < t.lo[2]) t.lo[2] = lz; if (lz > t.hi[2]) t.hi[2] = lz;
        }
      }
    }
  }
  if (touched.size) {
    version++;
    for (const t of touched.values()) {
      const k = colKeyOf(t.cx, t.cz);
      colVer.set(k, (colVer.get(k) || 0) + 1);
    }
    emit({ kind: 'open', opened, chunks: [...touched.values()] });
  }
  return opened;
}

/* ---- brushes (the public shape of a dig) --------------------------------

   brush = {
     center: [x, y, z] | {x, y, z},
     radius: number,
     end?:   [x, y, z] | {x, y, z}   -> a capsule from center to end
     endRadius?: number              -> tapered capsule
     floor?: true | number | [a, b]  -> a flat floor: true = 0.55 of the radius
                                        under the axis, a number = that world y,
                                        [a, b] = ramping from center to end
     noise?: number                  -> wall grain amplitude (outward only);
                                        default 14% of the radius
     cover?: number | null           -> earth kept under the meadow; default
                                        MIN_COVER, null = none (world-owned
                                        digs that are heaped over)
     clip?: { center, radius }       -> only the part of the brush inside this
                                        ball is dug (#82: a chantier grows as
                                        a ball swept outward from the doorway;
                                        the last call without `clip` is the
                                        whole brush, so nothing is lost)
   }

   Plain data, so a plan can be stored and sent over a wire (#82). */

const P3 = (p) => (Array.isArray(p) ? p : [p.x, p.y, p.z]);

/** A brush turned into { sdf, box }. Exported for the harnesses and #82's
 *  ghost preview, which need the same shape the dig will carve. */
export function brushShape(brush) {
  const c = P3(brush.center);
  const e = brush.end ? P3(brush.end) : c;
  const r0 = brush.radius, r1 = brush.endRadius ?? r0;
  const A = brush.noise ?? clamp(Math.max(r0, r1) * 0.14, 0.3, 1.6);
  const cover = brush.cover === undefined ? MIN_COVER : brush.cover;
  const clip = brush.clip ? [...P3(brush.clip.center), brush.clip.radius] : null;
  const ex = e[0] - c[0], ey = e[1] - c[1], ez = e[2] - c[2];
  const ll = ex * ex + ey * ey + ez * ez;
  const fl = brush.floor;
  const floorAt = fl === undefined || fl === false || fl === null ? null
    : fl === true ? (t) => lerp(c[1] - r0 * 0.55, e[1] - r1 * 0.55, t)
      : Array.isArray(fl) ? (t) => lerp(fl[0], fl[1], t)
        : () => fl;
  const sdf = (x, y, z) => {
    const px = x - c[0], py = y - c[1], pz = z - c[2];
    const t = ll > 1e-9 ? clamp((px * ex + py * ey + pz * ez) / ll, 0, 1) : 0;
    const dx = px - ex * t, dy = py - ey * t, dz = pz - ez * t;
    let d = Math.sqrt(dx * dx + dy * dy + dz * dz) - lerp(r0, r1, t);
    // deep in the earth only the sign is ever read: skip the grain there
    if (d - A > BRUSH_PAD) return SOLID;
    const fy = floorAt ? floorAt(t) - y : -Infinity;
    if (fy > BRUSH_PAD) return SOLID;
    if (A > 0) d -= d > -(A + 3.5) ? A * wallNoise(x, y, z) : A * 0.5;
    if (floorAt) d = Math.max(d, fy);
    if (cover !== null && surfaceFn) d = Math.max(d, y - (surfaceFn(x, z) - cover));
    if (clip) d = Math.max(d, Math.hypot(x - clip[0], y - clip[1], z - clip[2]) - clip[3]);
    return d;
  };
  const R = Math.max(r0, r1) + A + BRUSH_PAD;
  const box = [
    Math.min(c[0], e[0]) - R, Math.min(c[1], e[1]) - R, Math.min(c[2], e[2]) - R,
    Math.max(c[0], e[0]) + R, Math.max(c[1], e[1]) + R, Math.max(c[2], e[2]) + R,
  ];
  if (clip) {
    const q = clip[3] + BRUSH_PAD;
    for (let k = 0; k < 3; k++) {
      box[k] = Math.max(box[k], clip[k] - q);
      box[k + 3] = Math.min(box[k + 3], clip[k] + q);
    }
  }
  return { sdf, box };
}

/**
 * Dig a brush out of the earth. Returns the number of cells opened (lattice
 * points that went from earth to air). Idempotent: the same brush twice opens
 * nothing the second time.
 */
export function openCells(brush) {
  const { sdf, box } = brushShape(brush);
  return openSdf(sdf, box);
}

/** How many cells a brush WOULD open, without opening them. */
export function countCells(brush) {
  const { sdf, box } = brushShape(brush);
  let n = 0;
  for (let ix = Math.ceil(box[0]); ix <= Math.floor(box[3]); ix++) {
    for (let iz = Math.ceil(box[2]); iz <= Math.floor(box[5]); iz++) {
      for (let iy = Math.ceil(box[1]); iy <= Math.floor(box[4]); iy++) {
        if (sdf(ix * VOXEL, iy * VOXEL, iz * VOXEL) < 0 && latticeD(ix, iy, iz) >= 0) n++;
      }
    }
  }
  return n;
}

/* ---- plans (ghost cells, #82's hook) ------------------------------------
   A plan is a brush that has been drawn but not dug. Stored as data only:
   nothing here renders it or digs it — #82 draws the ghost and sends the
   diggers, and digs it with openCells(plan.brush) (whole, or grown the way a
   dig face grows, see founding.js paintFace). */
const PLANS = [];
let planSeq = 1;

export function planCells(brush) {
  const plan = { id: planSeq++, brush: JSON.parse(JSON.stringify(brush)), cells: countCells(brush) };
  PLANS.push(plan);
  emit({ kind: 'plan', plan });
  return { id: plan.id, cells: plan.cells };
}
export function plannedCells() { return PLANS.map((p) => ({ ...p })); }
export function removePlan(id) {
  const i = PLANS.findIndex((p) => p.id === id);
  if (i < 0) return false;
  const [plan] = PLANS.splice(i, 1);
  emit({ kind: 'unplan', plan });
  return true;
}
/** Is (x, y, z) inside a plan and not dug yet? */
export function isPlanned(x, y, z) {
  if (isOpen(x, y, z)) return false;
  return PLANS.some((p) => brushShape(p.brush).sdf(x, y, z) < 0);
}

/* ---- reading columns ----------------------------------------------------
   Walking is still a height per (x, z) — player/movement.js writes
   ant.y = groundY(x, z) — so the questions a controller asks are about the
   vertical column through a point: where is its lowest floor, how high is the
   roof over it, what is the top of everything dug under it. */

/** Lowest and highest open lattice index of one lattice column, cached per
 *  chunk-column version. */
function columnInfo(ix, iz) {
  const cx = ix >> 4, cz = iz >> 4;
  const ver = colVer.get(colKeyOf(cx, cz)) || 0;
  const k = (ix + 65536) * 131072 + (iz + 65536);
  let e = colCache.get(k);
  if (e && e.ver === ver) return e;
  let lo = null, hi = null;
  if (ver && bounds) {
    const lx = ix & 15, lz = iz & 15;
    for (let cy = bounds.y0; cy <= bounds.y1; cy++) {
      const c = chunks.get(ckey(cx, cy, cz));
      if (!c) continue;
      const base = lidx(lx, 0, lz);
      for (let ly = 0; ly < N; ly++) {
        if (c.d[base + ly] < 0) {
          const iy = cy * N + ly;
          if (lo === null) lo = iy;
          hi = iy;
        }
      }
    }
  }
  e = { ver, lo, hi };
  colCache.set(k, e);
  return e;
}

function inBounds(x, z) {
  if (!bounds) return false;
  const ix = x / VOXEL, iz = z / VOXEL;
  return ix >= bounds.x0 * N - 1 && ix <= (bounds.x1 + 1) * N && iz >= bounds.z0 * N - 1 && iz <= (bounds.z1 + 1) * N;
}

/**
 * The open span through (x, z): { floor, ceil } in world y, or null where the
 * column is earth all the way. The LOWEST span when `nearY` is not given (the
 * old height field's "deepest contributor wins"), otherwise the span that
 * contains nearY, or failing that the first one under it — so a caller that
 * knows how high it is standing can tell a tunnel from the room under it.
 */
export function volumeSpan(x, z, nearY) {
  if (!inBounds(x, z)) return null;
  const fx = x / VOXEL, fz = z / VOXEL;
  const ix = Math.floor(fx), iz = Math.floor(fz);
  const tx = fx - ix, tz = fz - iz;
  const w00 = (1 - tx) * (1 - tz), w10 = tx * (1 - tz), w01 = (1 - tx) * tz, w11 = tx * tz;
  let lo = Infinity, hi = -Infinity;
  for (const [a, b] of [[0, 0], [1, 0], [0, 1], [1, 1]]) {
    const ci = columnInfo(ix + a, iz + b);
    if (ci.lo === null) continue;
    if (ci.lo < lo) lo = ci.lo;
    if (ci.hi > hi) hi = ci.hi;
  }
  if (lo === Infinity) return null;
  const v = (k) => w00 * latticeD(ix, k, iz) + w10 * latticeD(ix + 1, k, iz)
    + w01 * latticeD(ix, k, iz + 1) + w11 * latticeD(ix + 1, k, iz + 1);
  const cross = (k, a, b) => (k + a / (a - b)) * VOXEL;   // a at k, b at k+1, opposite signs

  let kOpen = null;
  if (nearY === undefined) {
    for (let k = lo; k <= hi; k++) if (v(k) < 0) { kOpen = k; break; }
  } else {
    const k0 = clamp(Math.floor((nearY + 1.5) / VOXEL), lo, hi);
    for (let k = k0; k >= lo; k--) if (v(k) < 0) { kOpen = k; break; }
  }
  if (kOpen === null) return null;
  let kb = kOpen;
  while (kb > lo - 1 && v(kb - 1) < 0) kb--;
  let kt = kOpen;
  while (kt < hi + 1 && v(kt + 1) < 0) kt++;
  const floor = cross(kb - 1, v(kb - 1), v(kb));
  const ceil = cross(kt, v(kt), v(kt + 1));
  return { floor, ceil };
}

/** The floor under (x, nearY, z) — or the lowest floor when nearY is not
 *  given — or null where nothing is dug. */
export function floorAt(x, z, nearY) {
  const s = volumeSpan(x, z, nearY);
  return s ? s.floor : null;
}

/**
 * Where the queen may stand: the span, if it is tall enough and her body
 * clears the wall there; else null. This is the volume's answer to the
 * contract's footprint (§6), and excavation.js publishes it as such.
 */
export function walkableAt(x, z, nearY) {
  const s = volumeSpan(x, z, nearY);
  if (!s || s.ceil - s.floor < MIN_SPAN) return null;
  if (sampleD(x, s.floor + BODY_PROBE, z) > -WALK_MARGIN) return null;
  return s;
}

/**
 * Top of everything dug under (x, z), plus a pad: an UPPER bound on the
 * cavity mesh there (a surface-nets vertex never leaves its cell), which is
 * the direction a cover needs — the spoil heaps and the meadow's opening are
 * decided against it. null where nothing is dug.
 */
export function volumeTopAt(x, z) {
  if (!inBounds(x, z)) return null;
  const ix = Math.floor(x / VOXEL), iz = Math.floor(z / VOXEL);
  let top = null;
  for (let a = -1; a <= 2; a++) {
    for (let b = -1; b <= 2; b++) {
      const ci = columnInfo(ix + a, iz + b);
      if (ci.hi === null) continue;
      const d0 = latticeD(ix + a, ci.hi, iz + b), d1 = latticeD(ix + a, ci.hi + 1, iz + b);
      const y = (ci.hi + d0 / (d0 - d1)) * VOXEL;
      if (top === null || y > top) top = y;
    }
  }
  return top === null ? null : top + 0.5;
}

/** Copy the lattice block [b, b + P) on each axis into `out` (x-major, then
 *  z, then y — the chunk layout), for the mesher. */
export function readBlock(bx, by, bz, P, out) {
  let i = 0;
  for (let x = 0; x < P; x++) {
    for (let z = 0; z < P; z++) {
      for (let y = 0; y < P; y++) out[i++] = latticeD(bx + x, by + y, bz + z);
    }
  }
  return out;
}

/** World-space box of everything allocated (what was dug, plus the few units
 *  round it where distances are stored), or null. */
export function volumeExtent() {
  if (!bounds) return null;
  return {
    x0: bounds.x0 * N * VOXEL, x1: (bounds.x1 + 1) * N * VOXEL,
    y0: bounds.y0 * N * VOXEL, y1: (bounds.y1 + 1) * N * VOXEL,
    z0: bounds.z0 * N * VOXEL, z1: (bounds.z1 + 1) * N * VOXEL,
  };
}

/** Every allocated chunk's coordinates (for a full remesh). */
export function volumeChunks() {
  return [...chunks.values()].map((c) => ({ cx: c.cx, cy: c.cy, cz: c.cz }));
}

export function volumeStats() {
  let open = 0;
  for (const c of chunks.values()) for (let i = 0; i < N3; i++) if (c.d[i] < 0) open++;
  return { chunks: chunks.size, bytes: chunks.size * N3 * 4, openCells: open, version };
}

/** Forget everything (a new founding, a harness reset). */
export function clearVolume() {
  chunks.clear();
  colVer.clear();
  colCache.clear();
  PLANS.length = 0;
  bounds = null;
  lowestIy = Infinity;
  lastKey = -1; lastChunk = null;
  version++;
  emit({ kind: 'clear' });
}

import { volumeVersion, volumeSpan, isOpen, lawnY } from '../world/index.js';
import { nestFootprint } from './nest.js';

/* ==========================================================================
   Walking THROUGH the nest (#91): A* over the open cells.

   The AI diggers used to head for their front in a straight line, which in a
   nest with a bend walks them into the wall and pins them there. The nest is
   a volume now, so "where can an ant stand" has a real answer, and this is the
   search on it: a coarse lattice (CELL units), a node is standable when the
   footprint contains it at the height she arrives with (nestFootprint() folds
   in the volume, the open trench and stacked floors), and a step is allowed
   when the floor changes by no more than STEP_UP and the straight hop between
   the two cell centres is itself clear. The result is string-pulled into a few
   waypoints with the same clear-hop test.

   Cached by the caller (see makeNavState): one search per destination, redone
   only when the volume changes (a chantier opened) or she has strayed from the
   path — not every frame.
   ========================================================================== */

const CELL = 2;
/* Floor change per step. Generous on purpose: the plan tool digs a room and its
   tunnel to different floor levels, so the junction is a ledge of several units
   that a worker scrambles over and the queen's own walk does not allow. */
const STEP_UP = 4.0;
const MAX_NODES = 9000;
/* A front sits at a wall, and the footprint keeps a body's width off every wall,
   so the standing place of a front is usually just outside what counts as
   standable: the search ends when it is this close, and the last hop is short. */
const GOAL_SLACK = 3.5;
const PAD = 40;                // search box margin around start and goal

/* What a worker needs to stand at (x, z), as opposed to the queen's
   walkableAt(): a worker is a third of her size, and the queen's clearance
   leaves a two-unit strip down a tunnel the plan tool digs at its default
   radius - a strip a two-unit lattice steps right over. So: a span at her
   height that is tall enough, with open air a body's half-width to each side.
   The open trench is not in the volume, there the footprint answers. */
const MIN_HEAD = 3.5, SIDE = 0.9;
/* shortcuts in the string-pull keep twice the clearance, so the route does not hug
   a corner that a turning body then cuts into the wall */
const PULL_SIDE = 1.8;
/* containment is only "not inside earth": a body may graze a wall, the route is
   what keeps it off them */
const GRAZE = 0.15;
function floorFor(fp, x, z, y, side = SIDE) {
  const s = volumeSpan(x, z, y);
  if (s && s.ceil - s.floor >= MIN_HEAD && y >= s.floor - 2.5 && y <= s.ceil) {
    const c = s.floor + 1.4;
    if (isOpen(x + side, c, z) && isOpen(x - side, c, z) && isOpen(x, c, z + side) && isOpen(x, c, z - side)) return s.floor;
    return null;
  }
  if (fp.contains(x, z, y) && !Number.isFinite(fp.headroom(x, z, y))) return fp.floorY(x, z, y);
  return null;
}

function clearHop(fp, x0, z0, y0, x1, z1, side = SIDE) {
  const d = Math.hypot(x1 - x0, z1 - z0);
  const n = Math.max(1, Math.ceil(d / 1.0));
  let y = y0;
  for (let i = 1; i <= n; i++) {
    const x = x0 + (x1 - x0) * (i / n), z = z0 + (z1 - z0) * (i / n);
    const f = floorFor(fp, x, z, y, side);
    if (f === null || Math.abs(f - y) > STEP_UP) return false;
    y = f;
  }
  return true;
}

/** Heap of [f, value] pairs, good enough and tiny. */
class Heap {
  constructor() { this.a = []; }
  push(f, v) {
    const a = this.a; a.push([f, v]);
    let i = a.length - 1;
    while (i > 0) { const p = (i - 1) >> 1; if (a[p][0] <= a[i][0]) break; [a[p], a[i]] = [a[i], a[p]]; i = p; }
  }
  pop() {
    const a = this.a, top = a[0], last = a.pop();
    if (a.length) {
      a[0] = last; let i = 0;
      for (;;) {
        const l = i * 2 + 1, r = l + 1;
        let m = i;
        if (l < a.length && a[l][0] < a[m][0]) m = l;
        if (r < a.length && a[r][0] < a[m][0]) m = r;
        if (m === i) break;
        [a[m], a[i]] = [a[i], a[m]]; i = m;
      }
    }
    return top;
  }
  get size() { return this.a.length; }
}

const DI = [1, -1, 0, 0, 1, 1, -1, -1], DJ = [0, 0, 1, -1, 1, -1, 1, -1];

/**
 * Waypoints [{x,z}] from (sx,sy,sz) to (gx,gz) through standable ground, goal
 * included; or null when there is no way (caller falls back to a straight
 * walk).
 */
export function findNestPath(sx, sy, sz, gx, gz, recenter = false) {
  const fp = nestFootprint();
  if (!fp) return null;
  if (!recenter && clearHop(fp, sx, sz, sy, gx, gz, PULL_SIDE)) return [{ x: gx, z: gz }];

  const x0 = Math.min(sx, gx) - PAD, z0 = Math.min(sz, gz) - PAD;
  const W = Math.ceil((Math.abs(sx - gx) + 2 * PAD) / CELL) + 1, H = Math.ceil((Math.abs(sz - gz) + 2 * PAD) / CELL) + 1;
  const idx = (i, j) => j * W + i;
  const cx = (i) => x0 + i * CELL, cz = (j) => z0 + j * CELL;
  const gi = Math.round((gx - x0) / CELL), gj = Math.round((gz - z0) / CELL);
  const si = Math.round((sx - x0) / CELL), sj = Math.round((sz - z0) / CELL);

  const gScore = new Map(), yAt = new Map(), from = new Map();
  const h = (i, j) => Math.hypot(i - gi, j - gj) * CELL;
  const open = new Heap();
  const s0 = idx(si, sj);
  gScore.set(s0, 0); yAt.set(s0, sy); open.push(h(si, sj), s0);
  let expanded = 0, reached = -1, best = s0, bestH = h(si, sj);
  const done = new Set();
  while (open.size && expanded < MAX_NODES) {
    const [, k] = open.pop();
    if (done.has(k)) continue;
    done.add(k); expanded++;
    const i = k % W, j = (k / W) | 0;
    if (Math.hypot(cx(i) - gx, cz(j) - gz) <= GOAL_SLACK) { reached = k; break; }
    const y = yAt.get(k);
    const hk = Math.hypot(cx(i) - gx, cz(j) - gz);
    if (hk < bestH) { bestH = hk; best = k; }
    for (let d = 0; d < 8; d++) {
      const ni = i + DI[d], nj = j + DJ[d];
      if (ni < 0 || nj < 0 || ni >= W || nj >= H) continue;
      const nk = idx(ni, nj);
      if (done.has(nk)) continue;
      const nx = cx(ni), nz = cz(nj);
      const ny = floorFor(fp, nx, nz, y);
      if (ny === null || Math.abs(ny - y) > STEP_UP) continue;
      if (d >= 4 && !clearHop(fp, cx(i), cz(j), y, nx, nz)) continue;
      const g = gScore.get(k) + (d < 4 ? CELL : CELL * 1.414);
      if (g >= (gScore.get(nk) ?? Infinity)) continue;
      gScore.set(nk, g); yAt.set(nk, ny); from.set(nk, k);
      open.push(g + h(ni, nj), nk);
    }
  }
  /* The front's standing place can lie in the tapering end of a tunnel where
     nothing is standable: go to the nearest cell that is, and say so. */
  const closest = reached < 0;
  if (closest) {
    if (bestH > 14) return null;
    reached = best;
  }

  const cells = [];
  for (let k = reached; k !== undefined; k = from.get(k)) cells.push({ x: cx(k % W), z: cz((k / W) | 0), y: yAt.get(k) });
  cells.reverse();
  if (!closest) cells.push({ x: gx, z: gz, y: yAt.get(reached) });

  // string-pull: from each anchor, jump to the furthest cell still in clear sight
  const out = [];
  if (recenter) out.push({ x: cells[0].x, z: cells[0].z });
  let a = 0;
  while (a < cells.length - 1) {
    let b = cells.length - 1;
    while (b > a + 1 && !clearHop(fp, cells[a].x, cells[a].z, cells[a].y, cells[b].x, cells[b].z, PULL_SIDE)) b--;
    out.push({ x: cells[b].x, z: cells[b].z });
    a = b;
  }
  if (!out.length) out.push({ x: cells[0].x, z: cells[0].z });
  out.closest = closest;
  return out;
}

/** Per-walker path cache. */
export function makeNavState() { return { key: null, ver: -1, path: null, i: 0, fail: 0 }; }

/**
 * The point to steer at this frame, on the way to (gx, gz). Re-searches when
 * the destination or the volume changed, or she has been pushed well off the
 * path; otherwise advances along the cached waypoints.
 */
export function navTarget(nav, ant, gx, gz) {
  const ver = volumeVersion();
  const key = `${Math.round(gx)},${Math.round(gz)}`;
  const off = nav.path && nav.i < nav.path.length
    ? Math.hypot(nav.path[nav.i].x - ant.x, nav.path[nav.i].z - ant.z) > 30 : false;
  if (nav.key !== key || nav.ver !== ver || off || (!nav.path && nav.fail <= 0)) {
    nav.key = key; nav.ver = ver;
    nav.path = findNestPath(ant.x, ant.y, ant.z, gx, gz, nav.recenter);
    nav.recenter = false;
    nav.i = 0;
    nav.fail = nav.path ? 0 : 1.0;   // no path: straight walk, try again in a second
  }
  if (!nav.path) return { x: gx, z: gz };
  /* Move on to the next waypoint when this one is close AND the next is in
     clear sight from here: skipping round a corner on distance alone aims her
     at the far side of the wall. */
  const fp = nestFootprint();
  while (nav.i < nav.path.length - 1) {
    const w = nav.path[nav.i], nx = nav.path[nav.i + 1];
    const near = Math.hypot(w.x - ant.x, w.z - ant.z);
    if (near < 1.2 || (near < 3.5 && fp && clearHop(fp, ant.x, ant.z, ant.y, nx.x, nx.z))) nav.i++;
    else break;
  }
  return nav.path[Math.min(nav.i, nav.path.length - 1)];
}

/* Called each frame she is walking. If she has barely moved for a second she
   is leaning on a wall the route skirts: the path is dropped so the next
   request starts from where she really is, at the nearest cell centre (which
   is always clear of the wall). */
export function tickNav(nav, dt, ant) {
  if (nav.fail > 0) nav.fail -= dt;
  if (!ant || !nav.path) { nav.stuckT = 0; return; }
  if (nav.px === undefined || Math.hypot(ant.x - nav.px, ant.z - nav.pz) > 0.6) { nav.px = ant.x; nav.pz = ant.z; nav.stuckT = 0; return; }
  nav.stuckT = (nav.stuckT || 0) + dt;
  if (nav.stuckT > 1.0) { nav.path = null; nav.fail = 0; nav.stuckT = 0; nav.px = undefined; nav.recenter = true; }
}

/** Floor under a worker-sized body at (x, z) for an ant at height y, or null
 *  where that is earth (or there is no nest): the AI's "may I stand here". */
export function aiFloorAt(x, z, y) {
  const fp = nestFootprint();
  return fp ? floorFor(fp, x, z, y, GRAZE) : null;
}

/**
 * AI step containment. `a` has just been moved from (fx, fz); when she was
 * standing in the nest and the step ended in earth, try each axis alone (so
 * she slides along a wall), else put her back. Returns her floor or null when
 * she is not in the nest at all (surface walkers are not contained here).
 */
export function containAiStep(a, fx, fz) {
  const before = aiFloorAt(fx, fz, a.y);
  // within a body of a wall the clearance test says "no" for the spot she is
  // already on: she is still underground if she is well under the meadow
  if (before === null && a.y > lawnY(fx, fz) - 3) return null;
  let f = aiFloorAt(a.x, a.z, a.y);
  if (f !== null) return f;
  const tx = a.x, tz = a.z;
  if ((f = aiFloorAt(tx, fz, a.y)) !== null) { a.x = tx; a.z = fz; return f; }
  if ((f = aiFloorAt(fx, tz, a.y)) !== null) { a.x = fx; a.z = tz; return f; }
  a.x = fx; a.z = fz;
  return before === null ? a.y : before;
}

/** She has gone as far as the nest lets her toward a front whose standing
 *  place is in earth: near enough to the wall to work it. */
export function atClosestApproach(nav, ant, d, siteR) {
  const p = nav.path;
  if (!p || !p.closest || d > siteR * 2.2) return false;
  const last = p[p.length - 1];
  return Math.hypot(last.x - ant.x, last.z - ant.z) < 1.8;
}

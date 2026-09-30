import { volumeVersion } from '../world/index.js';
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
const STEP_UP = 1.6;           // floor change per cell, about a 40 degree ramp
const MAX_NODES = 9000;
const PAD = 40;                // search box margin around start and goal

function clearHop(fp, x0, z0, y0, x1, z1) {
  const d = Math.hypot(x1 - x0, z1 - z0);
  const n = Math.max(1, Math.ceil(d / 1.0));
  let y = y0;
  for (let i = 1; i <= n; i++) {
    const x = x0 + (x1 - x0) * (i / n), z = z0 + (z1 - z0) * (i / n);
    if (!fp.contains(x, z, y)) return false;
    const f = fp.floorY(x, z, y);
    if (Math.abs(f - y) > STEP_UP * 0.75) return false;
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
export function findNestPath(sx, sy, sz, gx, gz) {
  const fp = nestFootprint();
  if (!fp) return null;
  if (clearHop(fp, sx, sz, sy, gx, gz)) return [{ x: gx, z: gz }];

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
  let expanded = 0, reached = -1;
  const done = new Set();
  while (open.size && expanded < MAX_NODES) {
    const [, k] = open.pop();
    if (done.has(k)) continue;
    done.add(k); expanded++;
    const i = k % W, j = (k / W) | 0;
    if (Math.hypot(cx(i) - gx, cz(j) - gz) <= CELL * 1.05) { reached = k; break; }
    const y = yAt.get(k);
    for (let d = 0; d < 8; d++) {
      const ni = i + DI[d], nj = j + DJ[d];
      if (ni < 0 || nj < 0 || ni >= W || nj >= H) continue;
      const nk = idx(ni, nj);
      if (done.has(nk)) continue;
      const nx = cx(ni), nz = cz(nj);
      if (!fp.contains(nx, nz, y)) continue;
      const ny = fp.floorY(nx, nz, y);
      if (Math.abs(ny - y) > STEP_UP) continue;
      if (d >= 4 && !clearHop(fp, cx(i), cz(j), y, nx, nz)) continue;
      const g = gScore.get(k) + (d < 4 ? CELL : CELL * 1.414);
      if (g >= (gScore.get(nk) ?? Infinity)) continue;
      gScore.set(nk, g); yAt.set(nk, ny); from.set(nk, k);
      open.push(g + h(ni, nj), nk);
    }
  }
  if (reached < 0) return null;

  const cells = [];
  for (let k = reached; k !== undefined; k = from.get(k)) cells.push({ x: cx(k % W), z: cz((k / W) | 0), y: yAt.get(k) });
  cells.reverse();
  cells.push({ x: gx, z: gz, y: yAt.get(reached) });

  // string-pull: from each anchor, jump to the furthest cell still in clear sight
  const out = [];
  let a = 0;
  while (a < cells.length - 1) {
    let b = cells.length - 1;
    while (b > a + 1 && !clearHop(fp, cells[a].x, cells[a].z, cells[a].y, cells[b].x, cells[b].z)) b--;
    out.push({ x: cells[b].x, z: cells[b].z });
    a = b;
  }
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
    nav.path = findNestPath(ant.x, ant.y, ant.z, gx, gz);
    nav.i = 0;
    nav.fail = nav.path ? 0 : 1.0;   // no path: straight walk, try again in a second
  }
  if (!nav.path) return { x: gx, z: gz };
  while (nav.i < nav.path.length - 1 && Math.hypot(nav.path[nav.i].x - ant.x, nav.path[nav.i].z - ant.z) < 2.5) nav.i++;
  return nav.path[Math.min(nav.i, nav.path.length - 1)];
}

export function tickNav(nav, dt) { if (nav.fail > 0) nav.fail -= dt; }

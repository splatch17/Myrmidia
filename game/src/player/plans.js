import { brushShape, planCells, removePlan, isOpen, openCells, lawnY, openCutFloorAt, OPEN_CUT_CLEARANCE } from '../world/index.js';
import { paceTime, paceCost } from '../core/pace.js';
import { ECON } from './economy.js';

/* ==========================================================================
   Dig plans (#82): the CHANTIERS painted in the macro model.

   A plan is a brush (world/nestVolume.js: plain data) that has been drawn but
   not dug. This file owns everything about it that is not the look:

     - whether it may exist (it must TOUCH the nest — open space, or another
       chantier that will — and stay clear of the meadow),
     - what it costs: food, and a minimum crew (#76's rule, recalculated on the
       volume), and how long it takes in fouisseuse-seconds,
     - how it is dug. The diggers see a plan as one more DIG FACE (faces()),
       with the fields colony.js already reads, so assignDiggers / the crew
       gate / the HUD dial / the queen menu treat it like the hall's walls.
       What a face opens is decided here: the plan is dug as a BALL SWEPT
       OUTWARD from the doorway (the brush's `clip`), the ball's radius being
       the distance of the N-th nearest planned cell, N = progress x cells.
       So the room grows from where the diggers come in, not all at once, and
       the progress bar is an honest fraction of the cells. The last call has
       no clip: the finished chantier is exactly `openCells(brush)`.

   The ghost drawing is world/planGhost.js, fed setPlans() by whoever owns
   this (player/index.js). The volume keeps a registry copy of each plan
   (planCells / removePlan) so the world's isPlanned() stays true to it.
   ========================================================================== */

/* Costs (#85): the numbers live in economy.js (ECON). A chantier is PAID AS
   IT IS DUG: the food for each slice of progress is taken when that slice is
   worked, so cancelling halfway only cost what was dug, and with no food the
   diggers stop where they stand ("plus de nourriture"). Committing still asks
   for the whole price to be in the pile - no starting what cannot be finished.
   A room costs more each time (design fourmiliere-a-batir.md 2.3 "Limite:
   coût croissant"). */
export const FOOD_PER_CELL = ECON.FOOD_PER_CELL;
export const ROOM_COST_STEP = ECON.ROOM_COST_STEP;   // +25 % per room already committed
export const SECONDS_PER_CELL = 0.06;        // fouisseuse-seconds, before the test pace
const MIN_CELLS = 60;
const MAX_BOX = 44;                          // one brush never spans more than this
const MIN_CLEARANCE = 2;                     // crown of the brush under the meadow

const OFF = 1024;
const ckey = (x, y, z) => ((x + OFF) * 2048 + (y + OFF)) * 2048 + (z + OFF);
const NB = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];
const P3 = (p) => (Array.isArray(p) ? p : [p.x, p.y, p.z]);

/** The minimum crew of a chantier: small ~3, growing with the volume (#76). */
export function crewForCells(n) { return Math.min(12, 2 + Math.ceil(n / 1200)); }

/** Lattice cells the brush would open that are still earth: Int32Array x,y,z... */
export function cellsOf(brush) {
  const { sdf, box } = brushShape(brush);
  const out = [];
  for (let ix = Math.ceil(box[0]); ix <= Math.floor(box[3]); ix++) {
    for (let iz = Math.ceil(box[2]); iz <= Math.floor(box[5]); iz++) {
      for (let iy = Math.ceil(box[1]); iy <= Math.floor(box[4]); iy++) {
        if (sdf(ix, iy, iz) < 0 && !isOpen(ix, iy, iz)) out.push(ix, iy, iz);
      }
    }
  }
  return Int32Array.from(out);
}

/**
 * @param food  { available(): number|null, spend(n): void, give(n): void }
 *              the colony's food store; available() null = none exists yet,
 *              and a chantier is then "gratuit (test)".
 */
export function createPlans({ food, econ = null } = {}) {
  const list = [];                 // active chantiers, in the order planned
  let seq = 1;
  const made = { room: 0, tunnel: 0 };   // committed so far, cancelled ones excluded
  const state = { done: 0, lastDone: null, doneEvent: null };
  let refreshT = 0;

  function keySet(cells) {
    const s = new Set();
    for (let i = 0; i < cells.length; i += 3) s.add(ckey(cells[i], cells[i + 1], cells[i + 2]));
    return s;
  }

  function nextCost(kind, n) {
    const step = 1 + ROOM_COST_STEP * (kind === 'room' ? made.room : made.tunnel * 0.4);
    return paceCost(Math.max(1, Math.ceil(n * FOOD_PER_CELL[kind] * step)));
  }

  const hasOpenNeighbour = (x, y, z) => NB.some((d) => isOpen(x + d[0], y + d[1], z + d[2]));

  /**
   * Is this brush a valid chantier, and what would it cost? Pure (no state
   * changed): the macro tool calls it every time the cursor moves.
   * -> { ok, reason, cells, n, cost, crew, needed, gratis, short }
   */
  function evaluate(brush, kind) {
    const c = P3(brush.center), e = brush.end ? P3(brush.end) : c;
    const r = Math.max(brush.radius, brush.endRadius ?? 0);
    const res = { ok: false, reason: '', cells: new Int32Array(0), n: 0, cost: 0, crew: 3, needed: 0, gratis: true, short: false };
    if (Math.max(Math.abs(c[0] - e[0]), Math.abs(c[2] - e[2])) + 2 * r > MAX_BOX * 1.6) {
      res.reason = 'Trop long : posez-le en deux fois'; return res;
    }
    res.cells = cellsOf(brush);
    res.n = res.cells.length / 3;
    res.crew = crewForCells(res.n);
    res.needed = Math.max(20, res.n * SECONDS_PER_CELL);
    res.cost = nextCost(kind, res.n);
    const stock = food ? food.available() : null;
    res.gratis = stock === null;
    if (res.n === 0) { res.reason = 'Rien à creuser ici : déjà ouvert'; return res; }
    for (const p of [c, e]) {
      if (lawnY(p[0], p[2]) - (p[1] + r) < MIN_CLEARANCE) {
        res.reason = 'Trop près de la surface : descendez le plan (Page ↓)'; return res;
      }
    }
    /* Under the entrance trench (#91): the trench's floor is open air, so a
       chantier there must keep its crown far enough under THAT floor, not
       just under the meadow — else the diggers would break up into the cut. */
    for (let i = 0; i < res.cells.length; i += 3) {
      const cut = openCutFloorAt(res.cells[i], res.cells[i + 2]);
      if (cut !== null && cut - res.cells[i + 1] < OPEN_CUT_CLEARANCE) {
        res.reason = 'Trop près du fond de la tranchée : descendez le plan (Page ↓)'; return res;
      }
    }
    // must touch the nest: open space, or a chantier that will be
    let touches = false;
    const others = list.map((p) => p.keys);
    for (let i = 0; i < res.cells.length && !touches; i += 3) {
      const x = res.cells[i], y = res.cells[i + 1], z = res.cells[i + 2];
      if (hasOpenNeighbour(x, y, z)) { touches = true; break; }
      for (const s of others) {
        if (s.has(ckey(x, y, z)) || NB.some((d) => s.has(ckey(x + d[0], y + d[1], z + d[2])))) { touches = true; break; }
      }
    }
    if (!touches) { res.reason = 'Doit toucher le nid : partez d’une salle ou d’un tunnel'; return res; }
    if (res.n < MIN_CELLS) { res.reason = 'Trop petit'; return res; }
    if (stock !== null && stock < res.cost) {
      res.short = true;
      res.reason = `Pas assez de nourriture (${stock} / ${res.cost})`;
      return res;
    }
    res.ok = true;
    return res;
  }

  /** Validate: pay, register, publish. -> { ok, plan } | { ok: false, reason } */
  function commit(brush, kind) {
    const ev = evaluate(brush, kind);
    if (!ev.ok) return { ok: false, reason: ev.reason, eval: ev };
    const reg = planCells(brush);
    made[kind]++;
    const plan = {
      id: `plan-${seq++}`, worldId: reg.id, kind, brush: JSON.parse(JSON.stringify(brush)),
      label: `${kind === 'room' ? 'Salle' : 'Tunnel'} ${made[kind]}`,
      cells: ev.cells, keys: keySet(ev.cells), n0: ev.n, total: ev.n,
      cost: ev.cost, paid: 0, starved: false, gratis: ev.gratis, crew: ev.crew, needed: ev.needed, worked: 0,
      priority: false, anchor: null, lastDue: 0, retryT: 0,
      face: null,
    };
    list.push(plan);
    dirty = true;
    anchor(plan);
    return { ok: true, plan, eval: ev };
  }

  /* The doorway: the planned cell touching open space nearest the middle of
     everything that touches it. Re-tried while a chantier only touches another
     one (it waits for that one to open the connection). */
  function anchor(plan) {
    const b = [];
    const c = plan.cells;
    for (let i = 0; i < c.length; i += 3) {
      if (isOpen(c[i], c[i + 1], c[i + 2])) continue;
      if (hasOpenNeighbour(c[i], c[i + 1], c[i + 2])) b.push(i);
    }
    if (!b.length) return false;
    let mx = 0, my = 0, mz = 0;
    for (const i of b) { mx += c[i]; my += c[i + 1]; mz += c[i + 2]; }
    mx /= b.length; my /= b.length; mz /= b.length;
    let best = b[0], bd = Infinity;
    for (const i of b) {
      const d = (c[i] - mx) ** 2 + (c[i + 1] - my) ** 2 + (c[i + 2] - mz) ** 2;
      if (d < bd) { bd = d; best = i; }
    }
    const A = [c[best], c[best + 1], c[best + 2]];
    // the cells still earth, nearest the doorway first
    const idx = [];
    for (let i = 0; i < c.length; i += 3) if (!isOpen(c[i], c[i + 1], c[i + 2])) idx.push(i);
    const d2 = (i) => (c[i] - A[0]) ** 2 + (c[i + 1] - A[1]) ** 2 + (c[i + 2] - A[2]) ** 2;
    idx.sort((p, q) => d2(p) - d2(q));
    const sorted = new Int32Array(idx.length * 3);
    const dist = new Float32Array(idx.length);
    idx.forEach((i, k) => {
      sorted[k * 3] = c[i]; sorted[k * 3 + 1] = c[i + 1]; sorted[k * 3 + 2] = c[i + 2];
      dist[k] = Math.sqrt(d2(i));
    });
    // a standing place next to the doorway cell, in open air
    let nb = [A[0], A[1], A[2]];
    for (const d of NB) if (isOpen(A[0] + d[0], A[1] + d[1], A[2] + d[2])) { nb = [A[0] + d[0], A[1] + d[1], A[2] + d[2]]; break; }
    plan.cells = sorted; plan.dist = dist; plan.total = idx.length; plan.anchor = A; plan.lastDue = 0;
    plan.stand = nb;
    plan.face = {
      id: plan.id, plan: true, size: 'plan', opensGen: 2, crew: plan.crew, priority: plan.priority, label: plan.label,
      x: A[0], y: A[1], z: A[2], nx: nb[0] - A[0], nz: nb[2] - A[2] || 1e-6, standoff: 1.2, siteR: 4.5,
      needed: plan.needed, worked: plan.worked,
    };
    const l = Math.hypot(plan.face.nx, plan.face.nz) || 1; plan.face.nx /= l; plan.face.nz /= l;
    return true;
  }

  /** Move the standing place with the front of the dug ball. */
  function refreshFace(plan) {
    const f = plan.face;
    if (!f) return;
    f.worked = plan.worked; f.needed = plan.needed; f.crew = plan.crew; f.priority = plan.priority;
    if (plan.lastDue > 0) {
      /* The standing place is the MEAN of the cells opened last: the front of
         a swept ball is a shell, and any single cell of it jumps from one
         side of the tunnel to the other between two refreshes (the crew ran
         after it and never settled). The mean sits on the axis at the front. */
      const c = plan.cells, A = plan.anchor;
      const n = Math.min(plan.lastDue, Math.max(24, Math.round(plan.total / 40)));
      let sx = 0, sy = 0, sz = 0;
      for (let k = plan.lastDue - n; k < plan.lastDue; k++) { sx += c[k * 3]; sy += c[k * 3 + 1]; sz += c[k * 3 + 2]; }
      sx /= n; sy /= n; sz /= n;
      f.x = sx; f.y = sy; f.z = sz;
      const dx = A[0] - sx, dz = A[2] - sz, l = Math.hypot(dx, dz);
      if (l > 0.5) { f.nx = dx / l; f.nz = dz / l; }
    }
  }

  function dig(plan, final) {
    const N = plan.total;
    if (final) {
      openCells(plan.brush);
      return;
    }
    const due = Math.min(N - 1, Math.floor((plan.worked / plan.needed) * N));
    if (due < 1 || due - plan.lastDue < Math.max(16, N / 70)) return;
    openCells({ ...plan.brush, clip: { center: plan.anchor, radius: plan.dist[due - 1] + 0.6 } });
    plan.lastDue = due;
    refreshFace(plan);
  }

  /* Food due once `worked` ant-seconds are in: the price is spread over the
     work, the first unit taken as soon as work starts. */
  const dueAt = (plan, worked) => Math.ceil(plan.cost * Math.min(1, worked / plan.needed) - 1e-9);
  function canAfford(plan, worked) {
    if (plan.gratis || !food) return true;
    const stock = food.available();
    return stock === null || stock >= dueAt(plan, worked) - plan.paid;
  }

  /** Ant-seconds into a chantier (colony.js's gauge). Idempotent past done.
   *  Slowed by spoil lying at the face (economy.slow), held up without food. */
  function pay(id, antSeconds) {
    const plan = list.find((p) => p.id === id);
    if (!plan || !plan.face) return null;
    const add = antSeconds * (econ ? econ.slow(plan.id) : 1);
    const next = Math.min(plan.needed, plan.worked + add);
    if (!canAfford(plan, next)) {
      plan.starved = plan.face.starved = true;
      return { done: false, starved: true, needed: plan.needed, worked: plan.worked, opened: null };
    }
    plan.starved = plan.face.starved = false;
    if (!plan.gratis && food) {
      const due = dueAt(plan, next);
      if (due > plan.paid) { food.spend(due - plan.paid); plan.paid = due; }
    }
    if (econ && next > plan.worked) {
      const at = plan.stand || plan.anchor;
      econ.dug(plan.id, ((next - plan.worked) / plan.needed) * plan.n0, at[0], at[1], at[2]);
    }
    plan.worked = next;
    plan.face.worked = plan.worked;
    if (plan.worked >= plan.needed) {
      dig(plan, true);
      finish(plan);
      return { done: true, needed: plan.needed, worked: plan.needed, opened: null };
    }
    dig(plan, false);
    return { done: false, needed: plan.needed, worked: plan.worked, opened: null };
  }

  function finish(plan) {
    const i = list.indexOf(plan);
    if (i >= 0) list.splice(i, 1);
    removePlan(plan.worldId);
    state.done++;
    state.lastDone = { id: plan.id, label: plan.label, kind: plan.kind };
    state.doneEvent = state.lastDone;
    dirty = true;
  }

  function cancel(id) {
    const plan = list.find((p) => p.id === id);
    if (!plan) return false;
    list.splice(list.indexOf(plan), 1);
    removePlan(plan.worldId);
    made[plan.kind] = Math.max(0, made[plan.kind] - 1);
    // paid as it was dug (see the header): nothing to refund, what was spent is spent
    dirty = true;
    return true;
  }

  function togglePriority(id) {
    const p = list.find((q) => q.id === id);
    if (!p) return null;
    p.priority = !p.priority;
    if (p.face) p.face.priority = p.priority;
    return p.priority;
  }

  let dirty = true;
  /** Per frame: anchor the waiting ones, keep the standing places current. */
  function update(dt) {
    refreshT -= dt;
    if (refreshT > 0) return;
    refreshT = 0.4;
    for (const p of list) {
      if (!p.face) {
        if (anchor(p)) dirty = true;
      } else {
        refreshFace(p);
      }
    }
  }

  /** The plans as dig faces (colony.js). Unanchored ones wait: no diggers. */
  function faces() {
    const out = [];
    for (const p of list) if (p.face) out.push(p.face);
    return out;
  }

  /** The nearest chantier to a ray (origin, dir: {x,y,z}), or null. */
  function pickPlan(o, d) {
    let best = null, bd = Infinity;
    for (const p of list) {
      const c = P3(p.brush.center), e = p.brush.end ? P3(p.brush.end) : c;
      const r = Math.max(p.brush.radius, p.brush.endRadius ?? 0);
      for (let k = 0; k <= 12; k++) {
        const t = k / 12;
        const px = c[0] + (e[0] - c[0]) * t - o.x, py = c[1] + (e[1] - c[1]) * t - o.y, pz = c[2] + (e[2] - c[2]) * t - o.z;
        const s = Math.max(0, px * d.x + py * d.y + pz * d.z);
        const dd = Math.hypot(px - d.x * s, py - d.y * s, pz - d.z * s);
        if (dd < r + 1.5 && dd < bd) { bd = dd; best = p; }
      }
    }
    return best;
  }

  /** #83: cells a player's hand just opened (Int32Array x,y,z...). Each one that
   *  belongs to a chantier is paid to it at the AI's own rate (SECONDS_PER_CELL),
   *  so hand-digging inside a plan advances it. Call BEFORE the cells are opened.
   *  -> number of cells credited */
  /** How many of these cells lie in a chantier (a hand bite's free part is the rest). */
  function countIn(cells) {
    let n = 0;
    for (let i = 0; i < cells.length; i += 3) {
      const k = ckey(cells[i], cells[i + 1], cells[i + 2]);
      for (const p of list) if (p.face && p.keys.has(k)) { n++; break; }
    }
    return n;
  }

  /** Could the chantiers these cells belong to pay for them (food)? */
  function canCredit(cells) {
    for (const p of list) {
      if (!p.face) continue;
      let n = 0;
      for (let i = 0; i < cells.length; i += 3) if (p.keys.has(ckey(cells[i], cells[i + 1], cells[i + 2]))) n++;
      if (n && !canAfford(p, Math.min(p.needed, p.worked + n * SECONDS_PER_CELL))) { p.starved = p.face.starved = true; return false; }
    }
    return true;
  }

  function creditCells(cells) {
    let total = 0;
    for (const p of list.slice()) {
      if (!p.face) continue;
      let n = 0;
      for (let i = 0; i < cells.length; i += 3) if (p.keys.has(ckey(cells[i], cells[i + 1], cells[i + 2]))) n++;
      if (n) { pay(p.id, n * SECONDS_PER_CELL); total += n; }
    }
    return total;
  }

  return {
    state, evaluate, commit, cancel, pay, creditCells, countIn, canCredit, update, faces, pickPlan, togglePriority,
    get(id) { return list.find((p) => p.id === id) || null; },
    /** [{ id, cells }] for the ghost (only when it changed since the last call) */
    ghostList() { return list.map((p) => ({ id: p.id, cells: p.cells })); },
    consumeDirty() { const d = dirty; dirty = false; return d; },
    /** the menu / tooltip reading */
    rows(crewOf) {
      return list.map((p) => ({
        id: p.id, label: p.label, kind: p.kind, priority: p.priority,
        progress: p.needed > 0 ? p.worked / p.needed : 0,
        waiting: !p.face, required: p.crew, diggers: crewOf ? crewOf(p.id) : 0,
        cells: p.n0, cost: p.cost, paid: p.paid, starved: p.starved, gratis: p.gratis,
        spoil: econ ? econ.lyingAt(p.id) : 0,
      }));
    },
    count: () => list.length,
    costMultiplier: (kind) => 1 + ROOM_COST_STEP * (kind === 'room' ? made.room : made.tunnel * 0.4),
    /** how the seconds read at the test pace (harness) */
    paced: (s) => paceTime(s),
  };
}

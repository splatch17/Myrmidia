/* ==========================================================================
   A uniform grid over the map — the one answer to "what is near here".
   (#35, design/etat-des-lieux.md §2b/§4.)

   WHAT IT REPLACES. Every proximity question in the game was a linear scan of
   the whole map, once a frame: nearestClimbable() over 1800 blades,
   forEachCollider() over blades + boulders three times per step,
   nodeInReach() over every resource node, probeFood() over them again.
   Measured on the real world data (scripts/bench-spatial.mjs), that is
   ~31 us of pure distance arithmetic per frame for ONE ant, and the whole
   point is the word "one": each worker added re-runs all of it for herself,
   and any two of them avoiding each other makes it quadratic. That is what
   makes NPCs unaffordable, not the drawing.

   ONE STRUCTURE, NOT ONE PER FAMILY. Blades, boulders, mushrooms, resource
   nodes — and shortly ants — all live in the same grid, each carrying a
   `type` string. Four indexes would be four things to keep in step with the
   world and four chances for one of them to be silently stale; this project
   has already paid for that class of bug (PROGRESS.md, the two halves of a
   feature that never spoke). A query narrows by type, which costs one string
   compare per candidate.

   CELL SIZE IS MEASURED, NOT REASONED ABOUT. The map is 770x540 and the ant
   is 24 long: any constant here is exactly the kind that PROGRESS.md's piege
   6 logs three separate times ("a number calibrated on one scale, left behind
   when the scale changed"). So DEFAULT_CELL is not derived from the map, and
   not derived from the ant either — it is the winner of a sweep over the real
   data at the real query radii in scripts/bench-spatial.mjs. Re-run that
   script when the map, the blade count or the avatar changes; the number
   below is only true of the world that produced it.

   WHAT IT IS NOT. Not a quadtree, not a BVH, not a broadphase with pairs.
   Entries are points with a radius, queries are discs, and everything the
   game asks is "within a body length or two of here". A uniform grid is the
   whole of the right answer at this size, and it is the only one that stays
   readable at the call site — which is the actual acceptance test for this
   ticket (see the API notes below).
   ========================================================================== */

/* The sweep's answer, and it is a PLATEAU rather than a peak: 14, 16, 20 and
   24 all land within 10% of each other, 4 and 6 cost six times as much
   (a 10-unit query walks a hundred nearly-empty cells) and 32 and 48 cost
   two to three times as much (each cell holds so many blades that the scan
   is linear again over a slice of the map). 16 is the middle of that
   plateau, so the number is not sitting on an edge that a change in blade
   count would push it off.

   Read against the thing it is actually about — the reach of a query, ~10
   units (player/climb.js CLIMB_RADIUS * the queen's scale is 9.9,
   player/resources.js's node reach is 7-8, the collider query is the body
   radius plus the prop's) — this is a cell a little larger than one query,
   which is the shape a uniform grid wants. It is NOT read against the map
   (770x540) or against the ant (24 long), and that is deliberate: those two
   readings are how PROGRESS.md's piege 6 happened three times. */
export const DEFAULT_CELL = 16;

const DEFAULT_BOUNDS = { x0: -400, x1: 600, z0: -300, z1: 700 };

/* Scratch for the allocation-free queries. nearest()/countNear() cannot be
   called from inside another query's callback — nothing does, and doing it
   would be a proximity query about the answer to a proximity query. */
let _bestH = null, _bestD2 = 0, _count = 0;

function visitNearest(h, d2) {
  if (d2 < _bestD2) { _bestD2 = d2; _bestH = h; }
}
function visitCount() { _count++; }

export class SpatialIndex {
  constructor(bounds = {}) { this.reset(bounds); }

  /**
   * (Re)configure and empty the grid. Called when the world is built, and
   * whatever later rebuilds it — the grid holds no truth of its own, only a
   * faster way to reach the objects the world already owns.
   * `pad` widens the bounds so things just off the meshed map still land in a
   * cell of their own rather than all in the rim.
   */
  reset({ x0, x1, z0, z1, cell = DEFAULT_CELL, pad = 64 } = {}) {
    const b = (x0 === undefined) ? DEFAULT_BOUNDS : { x0, x1, z0, z1 };
    this.cell = cell;
    this.inv = 1 / cell;
    this.x0 = b.x0 - pad; this.z0 = b.z0 - pad;
    this.cols = Math.max(1, Math.ceil((b.x1 + pad - this.x0) * this.inv));
    this.rows = Math.max(1, Math.ceil((b.z1 + pad - this.z0) * this.inv));
    this.cells = new Array(this.cols * this.rows).fill(null);
    /* Largest entry radius per cell and overall. A query that has to find
       entries *reaching* the point (a collider whose own radius covers it)
       has to widen its cell range by the biggest radius in the grid — the
       tree trunk is 21 units on a map where most entries are under 3 — so
       the per-cell figure is what stops one big entry from making every
       query walk the neighbourhood twice over. Both only ever grow; a
       removal leaves them conservative, which costs a few candidates and
       cannot cost a wrong answer. */
    this.cellR = new Float32Array(this.cols * this.rows);
    this.maxR = 0;
    this.n = 0;
  }

  _cellOf(x, z) {
    let i = Math.floor((x - this.x0) * this.inv);
    let j = Math.floor((z - this.z0) * this.inv);
    /* Out of bounds clamps into the rim rather than being dropped. Every
       match is still settled by an exact distance test, so a clamped entry
       is found when it is genuinely close and rejected when it is not — the
       grid only ever decides which candidates to look at. */
    if (i < 0) i = 0; else if (i >= this.cols) i = this.cols - 1;
    if (j < 0) j = 0; else if (j >= this.rows) j = this.rows - 1;
    return j * this.cols + i;
  }

  _place(h) {
    const c = this._cellOf(h.x, h.z);
    let bucket = this.cells[c];
    if (!bucket) { bucket = []; this.cells[c] = bucket; }
    h._c = c; h._i = bucket.length;
    bucket.push(h);
    if (h.r > this.cellR[c]) this.cellR[c] = h.r;
    if (h.r > this.maxR) this.maxR = h.r;
  }

  _unplace(h) {
    const bucket = this.cells[h._c];
    const last = bucket.pop();
    if (last !== h) { bucket[h._i] = last; last._i = h._i; }
    h._c = -1;
  }

  /**
   * Put something in. Returns the handle — keep it if the thing ever moves,
   * changes size or goes away; drop it if it never does.
   * `r` is the entry's own extent (a collider's radius, 0 for a point) and
   * only matters to queries asking `reach: true`.
   * `data` is the caller's object, handed straight back by every query: the
   * index stores a reference, never a copy, so a node whose `amount` drops
   * to 0 is seen as spent here with nothing to synchronise.
   */
  add(type, x, z, r = 0, data = null) {
    const h = { type, x, z, r, data, _c: -1, _i: -1 };
    this._place(h);
    this.n++;
    return h;
  }

  /** Move an entry — this is what makes ants affordable. Same cell: nothing
   *  but two field writes. */
  move(h, x, z) {
    const c = this._cellOf(x, z);
    h.x = x; h.z = z;
    if (c === h._c) return h;
    this._unplace(h);
    this._place(h);
    return h;
  }

  /** Change an entry's extent. Needed because a collider's radius is not
   *  always the world's own figure — player/decorCollision.js fits mushroom
   *  radii to the cavity around them and to the body walking past. */
  setRadius(h, r) {
    h.r = r;
    if (r > this.cellR[h._c]) this.cellR[h._c] = r;
    if (r > this.maxR) this.maxR = r;
    return h;
  }

  remove(h) {
    if (h._c < 0) return;
    this._unplace(h);
    this.n--;
  }

  get size() { return this.n; }

  stats() {
    let occupied = 0, most = 0;
    for (const b of this.cells) if (b && b.length) { occupied++; if (b.length > most) most = b.length; }
    return {
      cell: this.cell, cells: this.cells.length, entries: this.n, occupied,
      fill: occupied ? this.n / occupied : 0, most, maxR: this.maxR,
    };
  }

  /* ---- queries ----------------------------------------------------------
     All three take the same (x, z, radius, opts) shape, and `opts` is always
     the same three keys:
       type   only entries of this type
       reach  match an entry whose OWN radius reaches the point
              (distance <= radius + entry.r) instead of its centre being
              within `radius`. This is the difference between "which stems
              could I grab" and "which colliders am I inside".
       where  a predicate on the handle, for state the index does not hold —
              a node with something left in it, a blade tall enough to climb.
              Hoist it to a module constant at the call site; a closure
              allocated every frame is the kind of garbage this file exists
              to remove.
     None of them allocate. */

  _scan(x, z, radius, opts, visit) {
    const type = opts && opts.type;
    const where = opts && opts.where;
    const reach = !!(opts && opts.reach);
    const span = radius + (reach ? this.maxR : 0);
    const cell = this.cell;
    let i0 = Math.floor((x - span - this.x0) * this.inv);
    let i1 = Math.floor((x + span - this.x0) * this.inv);
    let j0 = Math.floor((z - span - this.z0) * this.inv);
    let j1 = Math.floor((z + span - this.z0) * this.inv);
    if (i0 < 0) i0 = 0; if (i1 >= this.cols) i1 = this.cols - 1;
    if (j0 < 0) j0 = 0; if (j1 >= this.rows) j1 = this.rows - 1;

    for (let j = j0; j <= j1; j++) {
      const cz0 = this.z0 + j * cell;
      const dz = z < cz0 ? cz0 - z : (z > cz0 + cell ? z - cz0 - cell : 0);
      const row = j * this.cols;
      for (let i = i0; i <= i1; i++) {
        const c = row + i;
        const bucket = this.cells[c];
        if (bucket === null || bucket.length === 0) continue;
        if (reach) {
          // the widened range above was for the biggest entry in the GRID;
          // this cell only holds what it holds
          const cx0 = this.x0 + i * cell;
          const dx = x < cx0 ? cx0 - x : (x > cx0 + cell ? x - cx0 - cell : 0);
          const lim = radius + this.cellR[c];
          if (dx * dx + dz * dz > lim * lim) continue;
        }
        for (let k = 0; k < bucket.length; k++) {
          const h = bucket[k];
          if (type !== undefined && h.type !== type) continue;
          const ex = h.x - x, ez = h.z - z;
          const d2 = ex * ex + ez * ez;
          const lim = reach ? radius + h.r : radius;
          if (d2 > lim * lim) continue;
          if (where !== undefined && !where(h)) continue;
          visit(h, d2);
        }
      }
    }
  }

  /** Every match, in no particular order: `fn(handle, distanceSquared)`. */
  forEachNear(x, z, radius, fn, opts) {
    this._scan(x, z, radius, opts, fn);
  }

  /** The closest match by CENTRE distance, or null. Ranking is by centre even
   *  under `reach: true`, which is what the scans being replaced did. */
  nearest(x, z, radius, opts) {
    _bestH = null;
    _bestD2 = Infinity;
    this._scan(x, z, radius, opts, visitNearest);
    return _bestH;
  }

  /** How many match. */
  countNear(x, z, radius, opts) {
    _count = 0;
    this._scan(x, z, radius, opts, visitCount);
    return _count;
  }
}

/* The one the game uses. world/index.js resets it to the map's bounds and
   fills it as the world is built; everything else — world and player alike —
   imports this and asks.

   It is a module singleton rather than something threaded through every
   caller for the same reason core/antState.js is: the alternative is a
   reference passed down five levels into player/**, and the dependency
   direction (world never calls player) makes that a one-way plumbing job for
   a value that is global by nature. */
export const worldIndex = new SpatialIndex();

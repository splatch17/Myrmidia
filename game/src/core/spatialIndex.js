/* ==========================================================================
   Shared uniform-grid spatial index (#35).

   WHY. Every proximity question in the game was a linear scan of the whole
   map, every frame: nearestClimbable() over ~1600 grass blades,
   harvest.target() over ~140 resource nodes, resolveDecorCollision() over
   mushrooms + rocks + blades, probeShade()/probeFood() over the blades
   again. All of them to find something within ten-odd units. This replaces
   the scans with one grid that every system shares.

   PURE MODULE — no THREE, no DOM, no import of world/** or player/**, and
   nothing imported at all. That is deliberate and load-bearing: it lets
   scripts/test-logic.mjs import this file *directly*, with no resolution
   hook and no texturing.js stub, exactly like player/brood.js does (see that
   file's header).

   ONE STRUCTURE FOR EVERY KIND OF OBJECT. Blades, resource nodes, mushrooms,
   rocks — and, when #36 lands, ants — all live in the same grid, each entry
   tagged with a `type` and filtered at query time. Not one grid per type:
   decor collision alone wants three types at once, and a per-type grid would
   have it walking three sets of cells.

   ENTRIES ARE DATA, NOT OBJECTS. An entry is (type, id, x, z, extent), all
   plain strings/numbers. `id` is whatever the owner uses to find the real
   thing again — an array index or a stable node id — never the object
   itself. Nothing in here holds a reference to a mesh, a THREE object or a
   closure, so an index is serialisable and cannot keep a deleted world
   alive.

   `extent` is the entry's OWN radius (a mushroom cap's collide radius, a
   node's pick radius, a blade's half width), 0 for a pure point. It exists
   because half the callers do not ask "what is within R of me" but "what
   reaches to within R of me" — see nearestWithin()/forEachWithin().
   ========================================================================== */

/* CELL SIZE — written against the reaches that actually query this grid, not
   against the map (the map is ~400x450 units; sizing cells to it would put
   everything in one bucket and change nothing).

   The real per-frame reaches, read off the callers:
     climb.js      reach()            = CLIMB_RADIUS 4.5 * scale -> 9.9 for
                                        the founding queen (scale 2.2)
     climb.js      TREE_CLIMB_RADIUS  = 6 * scale             -> 13.2
     harvest.js    node.r + bodyR*0.6 = 5..6 + 1.98           -> ~8
     decorColl.js  prop r + antR      = ~1..4 + 3.3           -> ~7 typical
                                        (a mushroom grown to fill a pocket
                                        can reach ~14, see fittedRadius)
     siteQuality   probeShade         = 26      } 4x/s, not per frame
     siteQuality   probeFood          = 55      }

   So the per-frame band is 8-14 units. A cell of 12 means every per-frame
   query touches a 2x2 or 3x3 block (4-9 buckets), which is the sweet spot:
   smaller cells and the loop spends its time walking empty buckets, larger
   ones and each bucket is again a small linear scan. The two 4-Hz probes
   sweep 25 and 121 cells respectively — still one to two orders of magnitude
   cheaper than the full array, and they are not the hot path.

   PROGRESS.md piege #6 applies here: this number is written against the
   FOUNDING QUEEN's body (avatar.js, collide radius 3.3, scale 2.2). If the
   playable body changes scale again, re-read reach() and re-check that the
   band above still sits around one cell. Nothing breaks if it drifts — the
   grid stays correct at any cell size, it just stops being fast. */
export const DEFAULT_CELL_SIZE = 12;

/* Cell coordinates are packed into one integer key. +-16384 cells is +-196k
   world units at the default cell size, ~400x the playable map; anything
   beyond is clamped into the edge cell, which stays *correct* (queries clamp
   their bounds the same way) and merely slow, for a case that cannot happen. */
const KEY_BIAS = 1 << 14;
const KEY_LIMIT = KEY_BIAS - 1;
const KEY_STRIDE = 1 << 15;

function matchType(t, filter) {
  if (filter === null || filter === undefined) return true;
  if (typeof filter === 'string') return t === filter;
  for (let i = 0; i < filter.length; i++) if (filter[i] === t) return true;
  return false;
}

/**
 * @param {{cellSize?: number}} [opts]
 */
export function createSpatialIndex({ cellSize = DEFAULT_CELL_SIZE } = {}) {
  if (!(cellSize > 0)) throw new Error('spatialIndex: cellSize must be > 0');
  const inv = 1 / cellSize;

  // entry columns, indexed by handle; a freed handle goes on `freeList`
  const eType = [], eId = [], eX = [], eZ = [], eExt = [], eCell = [];
  const freeList = [];
  // "type#id" -> handle. Keeps the public API id-based (insert/move/remove all
  // take the same pair the caller already knows) instead of making every
  // caller store opaque handles.
  const byKey = new Map();
  // packed cell key -> array of handles. Buckets are short (a handful of
  // entries at this cell size), so removal by indexOf is cheaper than
  // maintaining a slot-in-bucket column.
  const cells = new Map();
  // Largest `extent` ever seen, overall and per type. Only ever grows: a
  // shrinking prop would leave this too large, which widens a *Within query's
  // cell sweep and is therefore conservative (slower, never wrong).
  const maxExtByType = new Map();
  let maxExtAll = 0;
  let liveCount = 0;

  const clampCell = (c) => (c < -KEY_BIAS ? -KEY_BIAS : c > KEY_LIMIT ? KEY_LIMIT : c);
  const cellKey = (cx, cz) => (cx + KEY_BIAS) * KEY_STRIDE + (cz + KEY_BIAS);
  const keyAt = (x, z) => cellKey(clampCell(Math.floor(x * inv)), clampCell(Math.floor(z * inv)));

  function addToCell(h, key) {
    const bucket = cells.get(key);
    if (bucket) bucket.push(h); else cells.set(key, [h]);
    eCell[h] = key;
  }

  function removeFromCell(h) {
    const bucket = cells.get(eCell[h]);
    if (!bucket) return;
    const i = bucket.indexOf(h);
    if (i >= 0) {
      bucket[i] = bucket[bucket.length - 1];
      bucket.pop();
      if (bucket.length === 0) cells.delete(eCell[h]);
    }
  }

  function noteExtent(type, r) {
    if (r > maxExtAll) maxExtAll = r;
    const cur = maxExtByType.get(type);
    if (cur === undefined || r > cur) maxExtByType.set(type, r);
  }

  /**
   * Add an entry. Re-inserting the same (type, id) moves it instead of
   * duplicating it, so a caller that rebuilds its list is not obliged to
   * remove first.
   * @param {string} type
   * @param {number|string} id  how the OWNER finds the real object again
   * @param {number} x @param {number} z
   * @param {number} [extent] the entry's own radius, 0 for a point
   */
  function insert(type, id, x, z, extent = 0) {
    const key = type + '#' + id;
    const existing = byKey.get(key);
    if (existing !== undefined) return move(type, id, x, z, extent);
    const h = freeList.length ? freeList.pop() : eType.length;
    eType[h] = type; eId[h] = id; eX[h] = x; eZ[h] = z; eExt[h] = extent;
    addToCell(h, keyAt(x, z));
    byKey.set(key, h);
    noteExtent(type, extent);
    liveCount++;
    return h;
  }

  /**
   * Move / resize an existing entry. Re-buckets it only if it actually
   * crossed a cell boundary — the common case for a walking ant is a few
   * writes and no Map traffic at all. Returns false if there is no such entry.
   */
  function move(type, id, x, z, extent) {
    const h = byKey.get(type + '#' + id);
    if (h === undefined) return false;
    eX[h] = x; eZ[h] = z;
    if (extent !== undefined && extent !== eExt[h]) {
      eExt[h] = extent;
      noteExtent(type, extent);
    }
    const key = keyAt(x, z);
    if (key !== eCell[h]) { removeFromCell(h); addToCell(h, key); }
    return true;
  }

  function remove(type, id) {
    const mapKey = type + '#' + id;
    const h = byKey.get(mapKey);
    if (h === undefined) return false;
    removeFromCell(h);
    byKey.delete(mapKey);
    eType[h] = null; eId[h] = null;
    freeList.push(h);
    liveCount--;
    return true;
  }

  function has(type, id) { return byKey.has(type + '#' + id); }

  function clear() {
    cells.clear(); byKey.clear();
    eType.length = eId.length = eX.length = eZ.length = eExt.length = eCell.length = 0;
    freeList.length = 0;
    maxExtByType.clear();
    maxExtAll = 0;
    liveCount = 0;
  }

  /** Largest `extent` among entries of `type` (all types if omitted). This is
   *  what turns a "reach" question into a cell radius — see forEachWithin. */
  function maxExtent(type) {
    if (type === undefined || type === null) return maxExtAll;
    if (typeof type === 'string') return maxExtByType.get(type) || 0;
    let m = 0;
    for (const t of type) { const v = maxExtByType.get(t) || 0; if (v > m) m = v; }
    return m;
  }

  /* ---- queries ----------------------------------------------------------
     All of them walk the same cell block and allocate nothing per candidate.
     `fn`/`accept` are called as (id, dist, x, z, extent) — the id first
     because that is what the caller looks its object up with, the distance
     second because that is what it almost always tests. */

  /**
   * Every entry whose CENTRE is within `radius` of (x, z).
   * @param {(id:any, dist:number, ex:number, ez:number, extent:number) => void} fn
   */
  function forEachInRadius(x, z, radius, type, fn) {
    if (!(radius >= 0)) return;
    const r2 = radius * radius;
    const cx0 = clampCell(Math.floor((x - radius) * inv));
    const cx1 = clampCell(Math.floor((x + radius) * inv));
    const cz0 = clampCell(Math.floor((z - radius) * inv));
    const cz1 = clampCell(Math.floor((z + radius) * inv));
    for (let cx = cx0; cx <= cx1; cx++) {
      for (let cz = cz0; cz <= cz1; cz++) {
        const bucket = cells.get(cellKey(cx, cz));
        if (bucket === undefined) continue;
        for (let i = 0; i < bucket.length; i++) {
          const h = bucket[i];
          if (!matchType(eType[h], type)) continue;
          const dx = eX[h] - x, dz = eZ[h] - z;
          const d2 = dx * dx + dz * dz;
          if (d2 > r2) continue;
          fn(eId[h], Math.sqrt(d2), eX[h], eZ[h], eExt[h]);
        }
      }
    }
  }

  /**
   * Every entry whose OWN EXTENT reaches to within `slack` of (x, z), i.e.
   * dist <= extent + slack. The pattern behind "is this node in reach" and
   * "am I inside this collider": pass the body radius as `slack` and stop
   * worrying about how big the props are.
   */
  function forEachWithin(x, z, slack, type, fn) {
    const sweep = slack + maxExtent(type);
    forEachInRadius(x, z, sweep, type, (id, dist, ex, ez, extent) => {
      if (dist <= extent + slack) fn(id, dist, ex, ez, extent);
    });
  }

  /**
   * Nearest entry (by centre distance) within `radius`, or null.
   * `accept(id, dist, x, z, extent)` is optional and filters candidates.
   * One small object allocated per call — per *query*, not per candidate, so
   * a handful per frame. Fields: { type, id, x, z, extent, dist }.
   */
  function nearest(x, z, radius, type, accept) {
    // Squared distances all the way, so the "is this one closer" test can
    // never disagree with the linear scan it replaces through a sqrt round
    // trip on an exact tie (the scans are first-wins; so is this). `radius`
    // is inclusive, like forEachInRadius — which matters for nearestWithin,
    // whose outer bound is exactly maxExtent + slack.
    const r2 = radius * radius;
    let bestH = -1, bestD2 = Infinity;
    const cx0 = clampCell(Math.floor((x - radius) * inv));
    const cx1 = clampCell(Math.floor((x + radius) * inv));
    const cz0 = clampCell(Math.floor((z - radius) * inv));
    const cz1 = clampCell(Math.floor((z + radius) * inv));
    for (let cx = cx0; cx <= cx1; cx++) {
      for (let cz = cz0; cz <= cz1; cz++) {
        const bucket = cells.get(cellKey(cx, cz));
        if (bucket === undefined) continue;
        for (let i = 0; i < bucket.length; i++) {
          const h = bucket[i];
          if (!matchType(eType[h], type)) continue;
          const dx = eX[h] - x, dz = eZ[h] - z;
          const d2 = dx * dx + dz * dz;
          if (d2 > r2 || d2 >= bestD2) continue;
          const d = Math.sqrt(d2);
          if (accept && !accept(eId[h], d, eX[h], eZ[h], eExt[h])) continue;
          bestH = h; bestD2 = d2;
        }
      }
    }
    if (bestH < 0) return null;
    return { type: eType[bestH], id: eId[bestH], x: eX[bestH], z: eZ[bestH], extent: eExt[bestH], dist: Math.sqrt(bestD2) };
  }

  /**
   * Nearest entry that REACHES to within `slack` (dist <= extent + slack),
   * ranked by centre distance — the exact shape of harvest.js's
   * nodeInReach(). Same return as nearest().
   */
  function nearestWithin(x, z, slack, type, accept) {
    return nearest(x, z, slack + maxExtent(type), type, (id, dist, ex, ez, extent) =>
      dist <= extent + slack && (!accept || accept(id, dist, ex, ez, extent)));
  }

  /** How many entries are within `radius` — the site-quality probes' whole
   *  question, answered without the caller writing a loop. */
  function countInRadius(x, z, radius, type, accept) {
    let n = 0;
    forEachInRadius(x, z, radius, type, (id, dist, ex, ez, extent) => {
      if (!accept || accept(id, dist, ex, ez, extent)) n++;
    });
    return n;
  }

  /**
   * Ids within `radius`, appended into `out` (which is TRUNCATED first).
   * Pass a reused array to keep the hot path allocation-free; omit it and you
   * get a fresh one.
   */
  function collectInRadius(x, z, radius, type, out = []) {
    out.length = 0;
    forEachInRadius(x, z, radius, type, (id) => { out.push(id); });
    return out;
  }

  /** Bucket occupancy, for the benchmark and for sanity-checking cell size. */
  function stats() {
    let max = 0, sum = 0;
    for (const b of cells.values()) { sum += b.length; if (b.length > max) max = b.length; }
    return {
      entries: liveCount,
      cells: cells.size,
      cellSize,
      maxBucket: max,
      meanBucket: cells.size ? sum / cells.size : 0,
    };
  }

  return {
    cellSize,
    insert, move, remove, has, clear,
    maxExtent,
    forEachInRadius, forEachWithin,
    nearest, nearestWithin,
    countInRadius, collectInRadius,
    stats,
    get size() { return liveCount; },
  };
}

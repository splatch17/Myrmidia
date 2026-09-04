/* Bench for #35 — the shared spatial index.
 *
 *   node scripts/bench-spatial.mjs
 *
 * WHY THIS EXISTS, AND WHY IT IS WRITTEN BEFORE THE INDEX. The claim being
 * tested is "every proximity query in player/** is a linear scan over the
 * whole map, and that is the CPU the player feels" (design/etat-des-lieux.md
 * §2b). A claim like that is worth exactly the measurement behind it, so this
 * file measures the CURRENT code first, on the REAL world data (loaded through
 * world/index.js — the same footprints, rocks and nodes the game draws), and
 * only then measures the replacement on the same positions.
 *
 * THE HOT QUERIES are transcribed verbatim from the files that own them —
 * player/climb.js nearestClimbable(), player/resources.js nodeInReach(),
 * player/decorCollision.js forEachCollider(), player/siteQuality.js
 * probeFood(). They are not simplified: a bench that measures a tidier loop
 * than the one that ships measures nothing. Those files belong to another
 * agent and are not modified by this work; this bench is the evidence handed
 * over with the index so the conversion can be made with a number attached.
 *
 * EQUIVALENCE IS PART OF THE BENCH, not a separate step. #35 is a replacement
 * of implementation, not a feature: every indexed answer is compared to the
 * linear answer at every sampled position, and a single mismatch fails the
 * run. Speed without that is just a different game.
 */

import { register } from 'node:module';

register(new URL('./lib/asset-stub-loader.mjs', import.meta.url).href);

const { loadWorld } = await import('./lib/node-world.mjs');

/* ---- constants copied from the consumers, with their provenance ----------
   Deliberately re-declared here rather than imported from player/**: the bench
   must keep measuring the shipped behaviour even if those files move, and
   importing them would drag the whole controller in. Any drift between the two
   shows up as an equivalence failure below, which is the point. */
const CLIMB_MIN_H = 42;         // player/climb.js
const CLIMB_RADIUS = 4.5;       // player/climb.js
const TREE_CLIMB_RADIUS = 6;    // player/climb.js
const ANT_SCALE = 2.2;          // player/avatar.js — the founding queen
const ANT_R = 3.3;              // player/avatar.js collideRadius(PLAYER_AVATAR)
const RESOURCE_RADIUS = 30;     // player/siteQuality.js

const { W, built: world } = await loadWorld();
const GRASS = world.grassFootprints;
const ROCKS = world.rocks;
const NODES = world.resources;
const TREE = W.TREE;

/* player/decorCollision.js: the ant is a disc, so the obstacle radius it is
   tested against is the prop's own. grassCollideR/TREE_COLLIDE_R are that
   file's. The ant is out on the lawn for the whole of this bench, and that
   file's region split means the underground props are never even looked at
   out here — so the linear scan below is the lawn one: rocks + every blade +
   the trunk. That is also the scan that runs three times a frame. */
const grassCollideR = (g) => g.w * 0.75;
const TREE_BASE_X = TREE.x, TREE_BASE_Z = TREE.z;
const TREE_COLLIDE_R = W.treeTrunkRadius(0.01) * 0.88;

/* ---- the shipped implementations ---------------------------------------- */

function linearNearestClimbable(x, z) {
  let best = null, bestD = CLIMB_RADIUS * ANT_SCALE;
  for (let i = 0; i < GRASS.length; i++) {
    const g = GRASS[i];
    if (g.h < CLIMB_MIN_H) continue;
    const d = Math.hypot(g.x - x, g.z - z);
    if (d < bestD) { bestD = d; best = { kind: 'grass', i }; }
  }
  const treeSurfaceD = Math.hypot(TREE.x - x, TREE.z - z) - TREE.w;
  if (treeSurfaceD < TREE_CLIMB_RADIUS * ANT_SCALE && treeSurfaceD < bestD) best = { kind: 'tree' };
  return best;
}

function linearNodeInReach(x, z, bodyR) {
  let best = null, bestD = Infinity;
  for (let i = 0; i < NODES.length; i++) {
    const n = NODES[i];
    if (n.amount <= 0) continue;
    const d = Math.hypot(n.x - x, n.z - z);
    if (d <= n.r + bodyR * 0.6 && d < bestD) { bestD = d; best = n; }
  }
  return best;
}

function linearForEachCollider(x, z, fn) {
  for (let i = 0; i < ROCKS.length; i++) fn(ROCKS[i].x, ROCKS[i].z, ROCKS[i].r);
  for (let j = 0; j < GRASS.length; j++) {
    const g = GRASS[j];
    if (g.h >= CLIMB_MIN_H) fn(g.x, g.z, grassCollideR(g));
  }
  fn(TREE_BASE_X, TREE_BASE_Z, TREE_COLLIDE_R);
}

function linearCountFood(x, z) {
  let n = 0;
  for (const r of NODES) if (Math.hypot(r.x - x, r.z - z) < RESOURCE_RADIUS) n++;
  return n;
}

/* ---- where the ant actually is ------------------------------------------
   A proximity bench sampled uniformly over the map measures mostly empty
   ground. Half of these are the places the game puts her — the spawn, the walk
   west to the bowl, the tree, the two resource-rich spots — and half are a
   uniform spread, so a cell size cannot be tuned to one lucky neighbourhood. */
function samplePositions(n) {
  const out = [];
  const B = W.LAWN_BOUNDS;
  const walk = [[140, 170], [110, 160], [60, 140], [20, 128], [-30, 120], [-85, 110], [-85, 95], [88, 168], [24, 128]];
  for (let i = 0; i < n; i++) {
    if (i < n * 0.5) {
      const u = (i / (n * 0.5)) * (walk.length - 1);
      const k = Math.min(walk.length - 2, Math.floor(u)), f = u - k;
      out.push([walk[k][0] + (walk[k + 1][0] - walk[k][0]) * f + Math.sin(i) * 6,
        walk[k][1] + (walk[k + 1][1] - walk[k][1]) * f + Math.cos(i * 1.7) * 6]);
    } else {
      const a = i * 2.399963, r = Math.sqrt((i % 977) / 977);
      out.push([(B.x0 + B.x1) / 2 + Math.cos(a) * r * (B.x1 - B.x0) * 0.45,
        (B.z0 + B.z1) / 2 + Math.sin(a) * r * (B.z1 - B.z0) * 0.45]);
    }
  }
  return out;
}

const POS = samplePositions(4000);

/* Best of N batches, each batch long enough to be worth timing.
   Two lessons paid for on the first run of this file: a batch of 4000 calls
   at half a microsecond apiece is 2 ms, which on this machine is inside the
   noise (the same linear loop measured 13.9 and 28.2 us on two consecutive
   runs), and a mean folds in whatever else the machine was doing. So each
   batch is repeated until it is at least MIN_BATCH_MS long, and the cheapest
   batch wins — that is the closest thing to "what the work costs". */
const MIN_BATCH_MS = 60;
const BATCHES = 7;
function time(fn, iters) {
  fn();
  let reps = 1;
  for (;;) {
    const t0 = process.hrtime.bigint();
    for (let k = 0; k < reps; k++) fn();
    const dt = Number(process.hrtime.bigint() - t0) / 1e6;
    if (dt >= MIN_BATCH_MS || reps > 1e6) break;
    reps = Math.max(reps + 1, Math.ceil(reps * Math.max(2, MIN_BATCH_MS / Math.max(dt, 0.05))));
  }
  let best = Infinity;
  for (let b = 0; b < BATCHES; b++) {
    const t0 = process.hrtime.bigint();
    for (let k = 0; k < reps; k++) fn();
    const dt = Number(process.hrtime.bigint() - t0) / 1e6 / reps;
    if (dt < best) best = dt;
  }
  return { ms: best, us: (best * 1000) / iters };
}

/* ---- the two sets of runners, deliberately NOT sharing a call site -------
   Paid for on the third pass of this bench. The runners used to be one
   parameterised factory (`runners.collide(impl)`), so the same line of source
   called both the linear scan and the indexed query — and once V8 has seen
   two shapes at one call site it stops inlining there for both of them. The
   effect was not subtle: forEachCollider measured 11.4 us when timed alone
   and 43.5 us when interleaved with its own replacement, i.e. the bench was
   mostly measuring its own dispatch. In the game each of these call sites
   only ever sees one implementation, so the bench has to be shaped that way
   too: one named runner per implementation, each with its own call site.
   `Q` is a module-level slot the sweep swaps — every value it holds is a
   closure of the same makeIndexed() source, which is one shape, not two. */
let sink = 0;
let Q = null;

/* The overlap test the resolver does with each collider it is handed
   (player/decorCollision.js collectDecorPush). Held against a module-level
   position rather than a captured one so neither path pays for a closure the
   other does not. */
let _px = 0, _pz = 0;
const onColliderL = (cx, cz, r) => {
  const dx = cx - _px, dz = cz - _pz, rr = r + ANT_R;
  sink += dx * dx + dz * dz < rr * rr ? 1 : 0;
};
const onColliderI = (cx, cz, r) => {
  const dx = cx - _px, dz = cz - _pz, rr = r + ANT_R;
  sink += dx * dx + dz * dz < rr * rr ? 1 : 0;
};

const L_climb = () => { for (const p of POS) sink += linearNearestClimbable(p[0], p[1]) ? 1 : 0; };
const L_node = () => { for (const p of POS) sink += linearNodeInReach(p[0], p[1], ANT_R) ? 1 : 0; };
const L_collide = () => { for (const p of POS) { _px = p[0]; _pz = p[1]; linearForEachCollider(p[0], p[1], onColliderL); } };
const L_food = () => { for (const p of POS) sink += linearCountFood(p[0], p[1]); };

const I_climb = () => { for (const p of POS) sink += Q.climb(p[0], p[1]) ? 1 : 0; };
const I_node = () => { for (const p of POS) sink += Q.node(p[0], p[1], ANT_R) ? 1 : 0; };
const I_collide = () => { for (const p of POS) { _px = p[0]; _pz = p[1]; Q.collide(p[0], p[1], onColliderI); } };
const I_food = () => { for (const p of POS) sink += Q.food(p[0], p[1]); };

const LINEAR_RUN = { climb: L_climb, node: L_node, collide: L_collide, food: L_food };
const INDEX_RUN = { climb: I_climb, node: I_node, collide: I_collide, food: I_food };

const LABELS = {
  climb: 'nearestClimbable', node: 'nodeInReach',
  collide: 'forEachCollider', food: 'probeFood (4 Hz)',
};
const ORDER = ['climb', 'node', 'collide', 'food'];

console.log('=== world data ===');
console.log(`map ${W.TERRAIN_BOUNDS.x1 - W.TERRAIN_BOUNDS.x0}x${W.TERRAIN_BOUNDS.z1 - W.TERRAIN_BOUNDS.z0} meshed, ` +
  `${W.LAWN_BOUNDS.x1 - W.LAWN_BOUNDS.x0}x${W.LAWN_BOUNDS.z1 - W.LAWN_BOUNDS.z0} playable`);
console.log(`blades ${GRASS.length} (${GRASS.filter((g) => g.h >= CLIMB_MIN_H).length} climbable), rocks ${ROCKS.length}, ` +
  `mushrooms ${world.mushrooms.length}, resource nodes ${NODES.length}`);

const linearUs = {};
console.log('\n=== linear scan, as shipped (us per call, cheapest batch) ===');
for (const k of ORDER) {
  linearUs[k] = time(LINEAR_RUN[k], POS.length).us;
  console.log(`  ${LABELS[k].padEnd(18)} ${linearUs[k].toFixed(3).padStart(8)} us`);
}

/* ---- the index ----------------------------------------------------------- */

let SI = null;
try { SI = await import('../src/core/spatialIndex.js'); } catch { /* not written yet */ }
if (!SI) {
  console.log('\n(core/spatialIndex.js not present yet — linear baseline only)');
  process.exit(0);
}

const { SpatialIndex, DEFAULT_CELL } = SI;

/* Populated exactly as world/index.js populates the shared one: the radius
   handed to the index is the WORLD's own figure (a blade's half width, a
   boulder's footprint, the trunk's bark radius), never a gameplay-side
   collision radius. Those are smaller — decorCollision.js takes 0.75 of a
   blade and 0.88 of the trunk — so a `reach: true` query returns a superset
   of what actually touches, and the caller settles it with the exact test it
   already ran. The index picking candidates and the caller owning radii is
   what keeps one grid usable by consumers that disagree about how big things
   are. */
function build(cell) {
  const idx = new SpatialIndex({ ...W.TERRAIN_BOUNDS, cell });
  for (const g of GRASS) idx.add('stem', g.x, g.z, g.w, g);
  for (const r of ROCKS) idx.add('rock', r.x, r.z, r.r, r);
  for (const n of NODES) idx.add('resource', n.x, n.z, n.r, n);
  idx.add('tree', TREE_BASE_X, TREE_BASE_Z, W.treeTrunkRadius(0.01), TREE);
  return idx;
}

/* Hoisted, not written inline at the call site: a predicate allocated per
   frame is exactly the kind of garbage this ticket is supposed to remove. */
const isClimbable = (h) => h.data.h >= CLIMB_MIN_H;
const hasAmount = (h) => h.data.amount > 0;

/* Candidate -> the radius THIS consumer collides against, which is the
   decorCollision.js conversion in miniature. */
let collideOut = null;
const onCandidate = (h) => {
  if (h.type === 'rock') collideOut(h.x, h.z, h.data.r);
  else if (h.type === 'stem') { if (h.data.h >= CLIMB_MIN_H) collideOut(h.x, h.z, grassCollideR(h.data)); }
  else if (h.type === 'tree') collideOut(h.x, h.z, TREE_COLLIDE_R);
};

function makeIndexed(idx) {
  return {
    climb(x, z) {
      const reach = CLIMB_RADIUS * ANT_SCALE;
      const stem = idx.nearest(x, z, reach, { type: 'stem', where: isClimbable });
      let best = stem ? { kind: 'grass', i: stem.data.i } : null;
      let bestD = stem ? Math.hypot(stem.x - x, stem.z - z) : reach;
      const treeSurfaceD = Math.hypot(TREE.x - x, TREE.z - z) - TREE.w;
      if (treeSurfaceD < TREE_CLIMB_RADIUS * ANT_SCALE && treeSurfaceD < bestD) best = { kind: 'tree' };
      return best;
    },
    node(x, z, bodyR) {
      const h = idx.nearest(x, z, bodyR * 0.6, { type: 'resource', reach: true, where: hasAmount });
      return h ? h.data : null;
    },
    collide(x, z, fn) {
      collideOut = fn;
      idx.forEachNear(x, z, ANT_R, onCandidate, { reach: true });
      collideOut = null;
    },
    food(x, z) { return idx.countNear(x, z, RESOURCE_RADIUS, { type: 'resource' }); },
  };
}

/* ---- cell size: measured, not guessed ------------------------------------
   The trade is the whole point of the constant. Too small and a 10-unit query
   walks a hundred cells that are nearly all empty; too large and each cell
   holds so many entries that the scan is linear again over a slice of the map.
   The sweep is run against the real data at the real query radii, and the
   number picked is the one that wins here — the map's own size is not an
   argument, which is precisely the mistake PROGRESS.md's piege 6 logs three
   times over.

   Swept in ROUNDS, outer loop over rounds and inner over cell sizes, keeping
   the cheapest each cell ever managed. Run the sizes one after another in a
   single pass and whatever the machine is doing at that moment lands on
   whichever size is being timed then — the first three passes of this bench
   named 20, 16 and 24 the winner in turn, which is a measurement of the
   laptop, not of the grid. Rotating the order spreads the drift evenly. */
const SWEEP_CELLS = [4, 6, 8, 10, 12, 14, 16, 20, 24, 32, 48];
const SWEEP_ROUNDS = 3;
const sweep = SWEEP_CELLS.map((cell) => ({ cell, frame: Infinity, us: {}, stats: build(cell).stats() }));
for (let round = 0; round < SWEEP_ROUNDS; round++) {
  for (const s of sweep) {
    Q = makeIndexed(build(s.cell));
    const us = {};
    for (const k of ORDER) us[k] = time(INDEX_RUN[k], POS.length).us;
    // what one frame of the controller costs: see perFrame() below
    const frame = us.climb + us.node + us.collide * 3;
    if (frame < s.frame) { s.frame = frame; s.us = us; }
  }
}
console.log(`\n=== cell size sweep (us per call, best of ${SWEEP_ROUNDS} rounds) ===`);
console.log('  cell    cells   fill  climb    node  collide    food    frame');
for (const { cell, frame, us, stats: s } of sweep) {
  console.log(`  ${String(cell).padStart(4)} ${String(s.cells).padStart(8)} ${s.fill.toFixed(2).padStart(6)} ` +
    ORDER.map((k) => us[k].toFixed(3).padStart(7)).join(' ') + ` ${frame.toFixed(3).padStart(8)}`);
}
const bestCell = sweep.reduce((m, s) => (s.frame < m.frame ? s : m));
console.log(`  -> cheapest frame at cell = ${bestCell.cell}; DEFAULT_CELL is ${DEFAULT_CELL}`);

/* ---- equivalence: same answers, every position --------------------------- */
const idx = build(DEFAULT_CELL);
const q = makeIndexed(idx);
Q = q;
let bad = 0;
const key = (l) => l.map((c) => c.join(':')).sort().join('|');
for (const p of POS) {
  const [x, z] = p;
  const l1 = linearNearestClimbable(x, z), i1 = q.climb(x, z);
  if (JSON.stringify(l1) !== JSON.stringify(i1)) { if (bad++ < 5) console.log('MISMATCH climb', x, z, l1, i1); }
  const l2 = linearNodeInReach(x, z, ANT_R), i2 = q.node(x, z, ANT_R);
  if ((l2 ? l2.id : null) !== (i2 ? i2.id : null)) { if (bad++ < 5) console.log('MISMATCH node', x, z, l2 && l2.id, i2 && i2.id); }
  const la = [], ia = [];
  linearForEachCollider(x, z, (cx, cz, r) => { if (Math.hypot(cx - x, cz - z) < r + ANT_R) la.push([cx.toFixed(3), cz.toFixed(3), r.toFixed(3)]); });
  q.collide(x, z, (cx, cz, r) => { if (Math.hypot(cx - x, cz - z) < r + ANT_R) ia.push([cx.toFixed(3), cz.toFixed(3), r.toFixed(3)]); });
  if (key(la) !== key(ia)) { if (bad++ < 5) console.log('MISMATCH collide', x, z, la.length, ia.length); }
  if (linearCountFood(x, z) !== q.food(x, z)) { if (bad++ < 5) console.log('MISMATCH food', x, z); }
}
console.log(`\n=== equivalence over ${POS.length} positions x 4 queries: ${bad === 0 ? 'IDENTICAL' : bad + ' MISMATCHES'} ===`);

/* ---- mutation: a node runs out, an ant walks -----------------------------
   The two cases design/etat-des-lieux.md calls out by name. A structure that
   can only be rebuilt wholesale is no use to either. */
{
  const n = NODES.find((x) => x.amount > 0);
  const before = q.node(n.x, n.z, ANT_R);
  n.amount = 0;
  const after = q.node(n.x, n.z, ANT_R);
  const okSpent = before && before.id === n.id && (!after || after.id !== n.id);
  n.amount = before ? before.amount || 1 : 1;

  const h = idx.add('ant', 0, 0, 2, { name: 'worker' });
  idx.move(h, 140, 170);
  const moved = idx.countNear(141, 171, 4, { type: 'ant' }) === 1 && idx.countNear(0, 0, 4, { type: 'ant' }) === 0;
  idx.remove(h);
  const gone = idx.countNear(141, 171, 4, { type: 'ant' }) === 0;
  console.log(`mutation: spent node drops out ${okSpent ? 'OK' : 'FAIL'} | move ${moved ? 'OK' : 'FAIL'} | remove ${gone ? 'OK' : 'FAIL'}`);
  if (!okSpent || !moved || !gone) bad++;
}

/* Cost of keeping moving entries in the index, which is what the NPC pass
   will pay: 40 ants re-placed every frame. */
{
  const ants = [];
  for (let i = 0; i < 40; i++) ants.push(idx.add('ant', 100 + i, 150, 2, { i }));
  const t = time(() => { for (let k = 0; k < 100; k++) for (const a of ants) idx.move(a, a.x + 0.3, a.z + 0.2); }, 4000);
  for (const a of ants) idx.remove(a);
  console.log(`move(): ${t.us.toFixed(4)} us per entry — 40 ants re-placed costs ${(t.us * 40 / 1000).toFixed(4)} ms/frame`);
}

/* ---- summary -------------------------------------------------------------
   Per frame, as the controller calls them today: nearestClimbable once
   (player/interaction.js), nodeInReach once (player/harvest.js target()), and
   forEachCollider three times (player/movement.js -> resolveDecorCollision,
   which runs collectDecorPush twice plus a cleanup pass). probeFood is 4 Hz,
   so it is quoted but left out of the frame total.

   Before and after are re-measured here INTERLEAVED, round by round, for the
   same reason the sweep is: the two numbers on this line are the headline of
   the ticket, and measuring all of "before" and then all of "after" would let
   ten seconds of laptop drift land entirely on one of them. */
const perFrame = (us) => us.climb + us.node + us.collide * 3;
const beforeUs = {}, afterUs = {};
for (const k of ORDER) { beforeUs[k] = Infinity; afterUs[k] = Infinity; }
for (let round = 0; round < 3; round++) {
  for (const k of ORDER) {
    beforeUs[k] = Math.min(beforeUs[k], time(LINEAR_RUN[k], POS.length).us);
    afterUs[k] = Math.min(afterUs[k], time(INDEX_RUN[k], POS.length).us);
  }
}

console.log('\n=== summary (us per call, cell = ' + DEFAULT_CELL + ', best of 3 interleaved rounds) ===');
for (const k of ORDER) {
  console.log(`  ${LABELS[k].padEnd(18)} ${beforeUs[k].toFixed(3).padStart(8)} -> ${afterUs[k].toFixed(3).padStart(7)} us   x${(beforeUs[k] / afterUs[k]).toFixed(1)}`);
}
console.log(`  ${'one frame, 1 ant'.padEnd(18)} ${perFrame(beforeUs).toFixed(3).padStart(8)} -> ${perFrame(afterUs).toFixed(3).padStart(7)} us   ` +
  `saves ${((perFrame(beforeUs) - perFrame(afterUs)) / 1000).toFixed(3)} ms/frame`);
/* The number that decides whether the entity layer (etat-des-lieux §4 item 2)
   is affordable. Twenty workers do not share these queries: each one asks for
   herself. */
console.log(`  ${'one frame, 20 ants'.padEnd(18)} ${(perFrame(beforeUs) * 20 / 1000).toFixed(3)} ms -> ` +
  `${(perFrame(afterUs) * 20 / 1000).toFixed(3)} ms   saves ${((perFrame(beforeUs) - perFrame(afterUs)) * 20 / 1000).toFixed(3)} ms/frame`);
if (sink === -1) console.log('unreachable');
process.exit(bad === 0 ? 0 : 1);

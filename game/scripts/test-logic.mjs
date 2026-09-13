// Non-graphical regression tests for world/** pure geometry and containment
// logic. Runs under plain `node`, no Chromium/Playwright/GPU involved — so,
// unlike scripts/verify-*.mjs, it is safe to run on a GPU-less box and its
// pass/fail is not a performance measurement of any kind.
//
// WHY THIS EXISTS. PROGRESS.md's "Pièges qui ont déjà coûté du temps" names
// its most frequent bug by far (hit three times: prologue fog, grass width,
// nest bores): a constant sized against one creature's scale, left behind
// when the scale changed, catchable by nothing short of a screenshot. The
// nest-bore instance (a7bcd35) *is* mechanically checkable, though — "can
// FOUNDING_QUEEN's collision radius actually fit through this passage" is a
// number comparison, not a look. This script encodes exactly that check
// against the real production functions (containUnderground, foundNest,
// canFoundAt, groundY), so the next time a corridor or shaft radius is
// resized without rethinking who walks through it, this fails loudly instead
// of waiting for someone to notice the queen's gaster clipping through a
// wall on a capture.
//
// It does NOT replace looking at the game. It cannot judge whether a chamber
// reads as "generous" or "cramped", whether a seam is visible, or whether
// anything looks right — only whether the documented hard constraints
// (fits / doesn't fit, continuous / stepped) hold.
//
// Usage: node scripts/test-logic.mjs

import { register } from 'node:module';
register('./logic-test/loader.mjs', import.meta.url);

const terrain = await import('../src/world/terrain.js');
const underground = await import('../src/world/underground.js');
const founding = await import('../src/world/founding.js');
const avatar = await import('../src/player/avatar.js');
// brood.js is plain logic (no THREE, no DOM, no world/** import — see its
// header) so it needs none of the loader's stubbing: a direct import, same
// as any other module under plain node.
const brood = await import('../src/player/brood.js');
// core/spatialIndex.js is pure too (no THREE, no DOM, no world/** import —
// see its header): direct import, same as brood.js.
const spatial = await import('../src/core/spatialIndex.js');
// core/entities.js (#36) is pure by the same discipline (see its header):
// direct import, no loader hook needed.
const entitiesCore = await import('../src/core/entities.js');
// player/forage.js (#37) is pure by the same discipline (see its header):
// direct import, no loader hook needed.
const forage = await import('../src/player/forage.js');
// player/antMesh.js (#36's rendering half) and core/outline.js pull in
// THREE.js core objects (BufferGeometry, InstancedMesh, Matrix4, Color) —
// all pure CPU data structures, no canvas/WebGL needed, so they run under
// plain node exactly like everything else here (see scripts/bench-antmesh.mjs
// for the fuller mesh/material/geometry count report this block only spot-
// checks as a standing regression guard).
const THREE = await import('three');

let pass = 0, fail = 0;
function check(name, cond, detail) {
  if (cond) { pass++; console.log(`  ok   ${name}`); }
  else { fail++; console.log(`  FAIL ${name}${detail ? ' — ' + detail : ''}`); }
}

/** Binary search, along `axis`, for the largest offset from (x0, z0) at which
 *  containUnderground still reports "not clamped" — i.e. the walkable
 *  half-width the real containment clamp actually enforces at that point, to
 *  a tenth of a unit. axis is a unit [dx, dz]. */
function walkableHalfWidth(x0, z0, axis, maxProbe = 40) {
  const free = (r) => {
    const x = x0 + axis[0] * r, z = z0 + axis[1] * r;
    const [cx, cz] = underground.containUnderground(x, z);
    return Math.abs(cx - x) < 1e-6 && Math.abs(cz - z) < 1e-6;
  };
  if (!free(0)) return 0; // centreline itself isn't clear; caller picked a bad probe point
  let lo = 0, hi = maxProbe;
  if (free(hi)) return hi; // never clamps within maxProbe — plenty of room, don't care exactly how much
  for (let i = 0; i < 24; i++) {
    const mid = (lo + hi) / 2;
    if (free(mid)) lo = mid; else hi = mid;
  }
  return lo;
}

console.log('underground bores vs the avatars that walk them:');
{
  const u = underground.buildUnderground(); // populates ROOM_BRANCHES/WALL_HOLES as a side effect
  void u;
  const queenR = avatar.collideRadius(avatar.FOUNDING_QUEEN);
  const workerR = avatar.collideRadius(avatar.WORKER);

  // Main gallery, sampled well clear of the queen's-chamber bulge (CH_Z=-132,
  // CH_R=32) and of every branch mouth (granary z0=-70, brood z0=-120,
  // midden z0=-40, each door falls off within ~doorFalloff), so this reads
  // the tube at its plain, unwidened radius.
  const tubeZ = -10;
  const tubeHalfWidth = walkableHalfWidth(0, tubeZ, [1, 0]);
  check(`main gallery clears the founding queen (r=${queenR.toFixed(2)}) at z=${tubeZ}`,
    tubeHalfWidth > queenR,
    `walkable half-width ${tubeHalfWidth.toFixed(2)} <= queen radius ${queenR.toFixed(2)}`);
  check(`main gallery clears a worker (r=${workerR.toFixed(2)}) at z=${tubeZ}`,
    tubeHalfWidth > workerR);

  // Each side-room corridor, probed mid-corridor (before the room's own
  // widening starts) along the branch's lateral `side` axis — the narrowest
  // cross-section a resident actually has to pass through to enter the room.
  const branches = underground.getRoomBranches();
  for (const name of ['granary', 'brood', 'midden']) {
    const br = branches[name];
    if (!br) { check(`${name} branch exists`, false); continue; }
    const uMid = br.uEnd * 0.4; // partway down the corridor, well short of the room
    const x0 = br.origin[0] + br.dir[0] * uMid, z0 = br.origin[2] + br.dir[2] * uMid;
    const half = walkableHalfWidth(x0, z0, br.side);
    check(`${name} corridor clears the founding queen (r=${queenR.toFixed(2)})`,
      half > queenR,
      `walkable half-width ${half.toFixed(2)} <= queen radius ${queenR.toFixed(2)}`);
  }
}

console.log('the run-time-dug founding shaft vs the queen:');
{
  // Scan for a legal founding site rather than hard-coding one, so this
  // keeps working if the hand-authored map (terrain.js RELIEF/RIVER) moves.
  let site = null;
  for (let x = -180; x <= 180 && !site; x += 20) {
    for (let z = 60; z <= 230 && !site; z += 20) {
      if (founding.canFoundAt(x, z).ok) site = { x, z };
    }
  }
  check('a legal founding site exists on the authored map', !!site);
  if (site) {
    const result = founding.foundNest(site.x, site.z);
    const queenR = avatar.collideRadius(avatar.FOUNDING_QUEEN);
    check(`foundNest(${site.x}, ${site.z}) succeeds`, result.ok !== false, result.reason);
    if (result.ok !== false) {
      check(`the dug shaft (r=${founding.getFoundedNest().mouth.r}) clears the founding queen (r=${queenR.toFixed(2)})`,
        founding.getFoundedNest().mouth.r > queenR,
        `mouth radius ${founding.getFoundedNest().mouth.r} <= queen radius ${queenR.toFixed(2)}`);
    }
  }
}

console.log('groundY() continuity at the gallery-mouth seam:');
{
  // terrain.js's own docstring promises "the seam has no step in it" across
  // z = TUNNEL_MOUTH. A few x samples across LAWN_BOUNDS, each read just
  // either side of the seam — a real step (the y=24-vs-y=11 class of bug)
  // would show up as a large jump for a tiny change in z.
  const eps = 0.5;
  const STEP_TOLERANCE = 3; // units of y per 2*eps of z — generous; a real seam bug is 10+
  for (const x of [-150, -80, -20, 0, 20, 80, 150]) {
    const above = terrain.groundY(x, terrain.TUNNEL_MOUTH + eps);
    const below = terrain.groundY(x, terrain.TUNNEL_MOUTH - eps);
    const jump = Math.abs(above - below);
    check(`no step at x=${x}`, jump < STEP_TOLERANCE, `|Δy|=${jump.toFixed(2)} over 2*${eps}`);
  }
}

console.log('egg laying and incubation (#6 §2), against a fake harvest cache:');
{
  // Same shape player/harvest.js's createHarvest().state.cache produces —
  // this test never imports harvest.js (brood.js does not either), it only
  // has to agree on the object shape the two already share in production.
  const fakeCache = (total, items) => ({ x: 0, y: 0, z: 0, items, total });
  const FOUNDED = { founded: true, inChamber: true };

  {
    const b = brood.createBroodState(2);
    const cache = fakeCache(brood.EGG_COST + 1, { graine: brood.EGG_COST + 1 });
    const before = cache.total;
    const res = brood.lay(b, cache, FOUNDED);
    check('a successful lay reports ok', res.ok === true, JSON.stringify(res));
    check('a successful lay debits exactly EGG_COST from the cache',
      cache.total === before - brood.EGG_COST,
      `total went from ${before} to ${cache.total}, expected ${before - brood.EGG_COST}`);
    check('a successful lay starts one clutch incubating', brood.broodCount(b) === 1);
  }

  {
    const b = brood.createBroodState(2);
    const cache = fakeCache(brood.EGG_COST - 1, { graine: brood.EGG_COST - 1 });
    const res = brood.lay(b, cache, FOUNDED);
    check('too little in the cache is refused', res.ok === false);
    check('...with the not-enough-food reason', res.reason === brood.LAY_REASON.NOT_ENOUGH_FOOD, res.reason);
    check('...and the cache is untouched by the refusal', cache.total === brood.EGG_COST - 1, cache.total);
    check('...and nothing started incubating', brood.broodCount(b) === 0);
  }

  {
    // Refused with no nest / out of the chamber: same "never touch the
    // cache" guarantee, checked on the other two rungs of the ladder too.
    const b = brood.createBroodState(2);
    const cache = fakeCache(99, { graine: 99 });
    const r1 = brood.lay(b, cache, { founded: false, inChamber: false });
    check('no nest yet is refused with no-nest', r1.ok === false && r1.reason === brood.LAY_REASON.NO_NEST, r1.reason);
    const r2 = brood.lay(b, cache, { founded: true, inChamber: false });
    check('founded but out of the chamber is refused with too-far', r2.ok === false && r2.reason === brood.LAY_REASON.TOO_FAR, r2.reason);
    check('neither refusal touched the cache', cache.total === 99, cache.total);
  }

  {
    // Fill the couvoir to capacity, confirm the next lay is refused without
    // spending anything, then let one clutch hatch and confirm a slot opens
    // back up.
    const cap = 2;
    const b = brood.createBroodState(cap);
    const cache = fakeCache(brood.EGG_COST * (cap + 2), { graine: brood.EGG_COST * (cap + 2) });
    for (let i = 0; i < cap; i++) brood.lay(b, cache, FOUNDED);
    check(`${cap} lays fill the brood to capacity`, brood.broodCount(b) === cap);

    const totalBeforeRefusal = cache.total;
    const full = brood.lay(b, cache, FOUNDED);
    check('a full brood room refuses the next lay', full.ok === false && full.reason === brood.LAY_REASON.BROOD_FULL, full.reason);
    check('...without spending anything', cache.total === totalBeforeRefusal, cache.total);

    // Advance every clutch just past EGG_INCUBATION_SECONDS: all cap of them
    // hatch at once (they were all laid on the same tick above).
    const hatched = brood.update(b, brood.EGG_INCUBATION_SECONDS + 0.01);
    check(`all ${cap} clutches hatch once incubation has elapsed`, hatched === cap, hatched);
    check('hatching frees the brood room back to zero in progress', brood.broodCount(b) === 0);
    // #38: workersAvailable is `{ [casteId]: count }` — every one of these
    // lays used the default caste (brood.DEFAULT_CASTE), so they all land in
    // the same bucket. totalWorkersAvailable() is the sum-across-castes a
    // caller who does not care which caste wants; workersAvailableOf() below
    // is the same number read the other way, by name, to also prove the
    // default caste is really the one that got credited (not just "some
    // caste, somewhere", which a bare total could not tell apart).
    check('hatching credits workersAvailable under the default caste',
      brood.totalWorkersAvailable(b) === cap
      && brood.workersAvailableOf(b, brood.DEFAULT_CASTE) === cap,
      JSON.stringify(b.workersAvailable));
    // The exact regression the ambiance report caught: laidTotal (what
    // populateNest(n) must be driven by, so a lit lamp stays lit) must NOT
    // follow clutches.length/broodCount() (what capacity/refusal is measured
    // against) back down when eggs hatch. Conflating the two would turn a
    // lamp off every time the colony's ponte succeeds.
    check('...but the cumulative laid count does not drop with it', b.laidTotal === cap, b.laidTotal);

    const reopened = brood.lay(b, cache, FOUNDED);
    check('laying is possible again once a slot is free', reopened.ok === true, JSON.stringify(reopened));
    check('...and the cumulative count keeps climbing past a hatch',
      b.laidTotal === cap + 1 && brood.broodCount(b) === 1,
      `laidTotal=${b.laidTotal} broodCount=${brood.broodCount(b)}`);
  }

  {
    // Incubation timing: not before, hatches at/after.
    const b = brood.createBroodState(1);
    const cache = fakeCache(brood.EGG_COST, { graine: brood.EGG_COST });
    brood.lay(b, cache, FOUNDED);
    const early = brood.update(b, brood.EGG_INCUBATION_SECONDS - 1);
    check('an egg does not hatch before its incubation time', early === 0 && brood.broodCount(b) === 1, early);
    check('nextHatchIn() counts down and does not go negative',
      brood.nextHatchIn(b) !== null && brood.nextHatchIn(b) <= 1 && brood.nextHatchIn(b) >= 0,
      brood.nextHatchIn(b));
    const late = brood.update(b, 1.01);
    check('the same egg hatches once the remaining second elapses', late === 1 && brood.broodCount(b) === 0, late);
    check('nextHatchIn() is null once nothing is incubating', brood.nextHatchIn(b) === null);
  }
}

console.log('\nspatial index (core/spatialIndex.js):');
{
  const { createSpatialIndex, DEFAULT_CELL_SIZE } = spatial;

  // Deterministic cloud, so a failure is reproducible. Spread well past one
  // cell in every direction, and straddling the origin so negative cell
  // coordinates are exercised (Math.floor, not truncation).
  let s = 12345;
  const rnd = () => ((s = (s * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
  const CLOUD = [];
  for (let i = 0; i < 600; i++) {
    CLOUD.push({ x: (rnd() - 0.5) * 400, z: (rnd() - 0.5) * 300, r: rnd() * 6, kind: i % 3 === 0 ? 'rock' : 'grass' });
  }

  const idx = createSpatialIndex();
  CLOUD.forEach((p, i) => idx.insert(p.kind, i, p.x, p.z, p.r));
  check(`every entry is in the index (cell size ${DEFAULT_CELL_SIZE})`, idx.size === CLOUD.length, idx.size);

  /* The reference the whole ticket is about: the linear scan this replaces.
     Everything below compares the grid against it, on the same points. */
  const scanInRadius = (x, z, radius, kind) => CLOUD
    .map((p, i) => ({ p, i }))
    .filter(({ p }) => (!kind || p.kind === kind) && Math.hypot(p.x - x, p.z - z) <= radius)
    .map(({ i }) => i).sort((a, b) => a - b);

  const sorted = (a) => a.slice().sort((x, y) => x - y);

  // Radii deliberately spanning "much smaller than a cell", "about a cell"
  // and "many cells across" — the second is the ticket's real workload, the
  // third is siteQuality's 55-unit food probe.
  let radiusMismatch = 0, typeMismatch = 0, nearestMismatch = 0, countMismatch = 0;
  const buf = [];
  for (let t = 0; t < 200; t++) {
    const qx = (rnd() - 0.5) * 420, qz = (rnd() - 0.5) * 320;
    const radius = [3, 12, 26, 55][t % 4];
    if (String(sorted(idx.collectInRadius(qx, qz, radius, null, buf))) !== String(scanInRadius(qx, qz, radius))) radiusMismatch++;
    if (String(sorted(idx.collectInRadius(qx, qz, radius, 'rock'))) !== String(scanInRadius(qx, qz, radius, 'rock'))) typeMismatch++;
    if (idx.countInRadius(qx, qz, radius, 'grass') !== scanInRadius(qx, qz, radius, 'grass').length) countMismatch++;

    // nearest(), with the same first-wins tie-break the hand-written scans use
    let bestI = -1, bestD = radius;
    for (let i = 0; i < CLOUD.length; i++) {
      const d = Math.hypot(CLOUD[i].x - qx, CLOUD[i].z - qz);
      if (d < bestD) { bestD = d; bestI = i; }
    }
    const hit = idx.nearest(qx, qz, radius, null);
    if ((hit ? hit.id : -1) !== bestI) nearestMismatch++;
  }
  check('radius query matches the linear scan on 200 probes', radiusMismatch === 0, `${radiusMismatch} mismatches`);
  check('type filter matches the linear scan', typeMismatch === 0, `${typeMismatch} mismatches`);
  check('countInRadius matches the linear scan', countMismatch === 0, `${countMismatch} mismatches`);
  check('nearest() matches the linear scan', nearestMismatch === 0, `${nearestMismatch} mismatches`);

  // "reaches to within slack of me", i.e. harvest.js's nodeInReach and
  // decorCollision's overlap test: the entry's own extent counts, and the
  // sweep must widen by the largest extent in play or big props get missed.
  {
    let withinMismatch = 0;
    for (let t = 0; t < 100; t++) {
      const qx = (rnd() - 0.5) * 420, qz = (rnd() - 0.5) * 320, slack = 2;
      const want = CLOUD.map((p, i) => ({ p, i }))
        .filter(({ p }) => Math.hypot(p.x - qx, p.z - qz) <= p.r + slack).map(({ i }) => i);
      const got = [];
      idx.forEachWithin(qx, qz, slack, null, (id) => got.push(id));
      if (String(sorted(got)) !== String(sorted(want))) withinMismatch++;
    }
    check('forEachWithin honours each entry\'s own extent', withinMismatch === 0, `${withinMismatch} mismatches`);
  }

  // Inclusive bounds, matching the <= the hand-written scans use. The case
  // that bites: nearestWithin's own outer sweep is exactly maxExtent + slack,
  // so an entry sitting precisely at its reach limit must still be returned.
  {
    const b = createSpatialIndex({ cellSize: 10 });
    b.insert('node', 1, 8, 0, 5);   // reach = 5 + slack 3 = 8 = its distance
    check('nearestWithin includes an entry exactly at the reach limit',
      (b.nearestWithin(0, 0, 3, 'node') || {}).id === 1);
    check('nearest() includes an entry exactly at the radius',
      (b.nearest(0, 0, 8, 'node') || {}).id === 1);
    check('...and excludes it just inside', b.nearest(0, 0, 7.99, 'node') === null);
  }

  // Cell boundaries: an object sitting exactly on one must be found from
  // both sides. Floating-point floor() is deterministic, but a query whose
  // bounds land on the same line must still sweep both cells.
  {
    const b = createSpatialIndex({ cellSize: 10 });
    b.insert('p', 'onLine', 10, 20, 0);      // exactly on the cell corner
    b.insert('p', 'negLine', -10, -20, 0);   // and on a negative one
    const seen = (x, z, r) => b.collectInRadius(x, z, r, null).sort();
    check('entry on a cell boundary is found from the cell before it',
      String(seen(9.5, 19.5, 1)) === 'onLine', String(seen(9.5, 19.5, 1)));
    check('...and from the cell after it',
      String(seen(10.5, 20.5, 1)) === 'onLine', String(seen(10.5, 20.5, 1)));
    check('...and by a query centred exactly on it',
      String(seen(10, 20, 0)) === 'onLine', String(seen(10, 20, 0)));
    check('the same holds on negative coordinates',
      String(seen(-10.5, -20.5, 1)) === 'negLine' && String(seen(-9.5, -19.5, 1)) === 'negLine');
    check('a zero-radius query finds only what is exactly under it',
      b.collectInRadius(0, 0, 0, null).length === 0);
  }

  // A radius several cells wide must not stop at the first ring, and must
  // not report anything twice.
  {
    const b = createSpatialIndex({ cellSize: 4 });
    for (let i = 0; i < 40; i++) b.insert('p', i, i * 2 - 40, 0, 0); // a line 80 units long, 20 cells
    const got = b.collectInRadius(0, 0, 31, null);
    const uniq = new Set(got);
    check('a radius much larger than a cell sweeps every cell it covers',
      got.length === 31 && uniq.size === got.length, `${got.length} hits, ${uniq.size} unique`);
  }

  // Mutation: the whole reason this is an index and not a rebuilt list.
  {
    const b = createSpatialIndex({ cellSize: 10 });
    b.insert('ant', 1, 5, 5, 0);
    check('an entry is found where it was inserted', b.countInRadius(5, 5, 1, 'ant') === 1);
    b.move('ant', 1, 85, -45, 0);   // several cells away, and across zero
    check('after move() it is gone from the old cell', b.countInRadius(5, 5, 1, 'ant') === 0);
    check('...and present in the new one', b.countInRadius(85, -45, 1, 'ant') === 1);
    check('...without duplicating itself', b.size === 1);
    b.move('ant', 1, 85.5, -45.5, 0); // same cell: the no-rebucket path
    check('a move inside one cell keeps it findable', b.countInRadius(85.5, -45.5, 1, 'ant') === 1 && b.size === 1);
    check('move() on an unknown entry reports failure', b.move('ant', 99, 0, 0, 0) === false);

    // A growing extent must widen the sweep, or a prop that got bigger stops
    // being found (this is exactly the mushroom-grown-to-fill-a-pocket case).
    b.move('ant', 1, 85.5, -45.5, 9);
    check('a re-sized entry is reached at its new extent',
      b.countInRadius(85.5, -45.5, 1, 'ant') === 1 && b.maxExtent('ant') === 9);
    let reached = 0;
    b.forEachWithin(93, -45.5, 0.5, 'ant', () => reached++);
    check('...and forEachWithin sweeps far enough to see it', reached === 1, reached);

    check('remove() takes it out', b.remove('ant', 1) === true && b.size === 0
      && b.countInRadius(85.5, -45.5, 20, null) === 0);
    check('removing twice is a no-op, not a corruption', b.remove('ant', 1) === false && b.size === 0);

    // Re-inserting the same (type, id) must move it, never duplicate it —
    // a caller that re-seeds its list should not silently double the index.
    b.insert('ant', 2, 0, 0, 0);
    b.insert('ant', 2, 50, 50, 0);
    check('re-inserting the same id moves it instead of duplicating',
      b.size === 1 && b.countInRadius(50, 50, 1, 'ant') === 1 && b.countInRadius(0, 0, 1, 'ant') === 0);
  }
}

console.log('\nentity records and goal-seeking (core/entities.js, #36):');
{
  const { createEntity, makePatrolGoal, goalWish, snapshotEntity, restoreEntity, resetEntityIds } = entitiesCore;

  resetEntityIds(1);
  const e1 = createEntity('worker', 0, 0, 0);
  const e2 = createEntity('worker', 0, 0, 0);
  check('createEntity hands out distinct auto ids', e1.id !== e2.id, `${e1.id} vs ${e2.id}`);
  check('an entity is uncontrolled with no goal by default', e1.controlled === false && e1.goal === null);

  /* No THREE, no function, no undefined anywhere on a freshly made record —
     the actual guarantee behind "no closure, no THREE reference" is that
     this whole module never imports THREE in the first place (see its
     header), but this walks the produced shape too, as a regression trip
     wire: the day something here starts attaching a function or a
     Vector3-shaped object to an entity, this fails without anyone having to
     notice it on a screenshot. */
  function isPlainSerializable(v, seen = new Set()) {
    if (v === null) return true;
    const t = typeof v;
    if (t === 'number' || t === 'string' || t === 'boolean') return true;
    if (t !== 'object') return false; // function, undefined, symbol, bigint
    if (seen.has(v)) return false; // no cycles in a JSON-safe tree
    seen.add(v);
    if (Array.isArray(v)) return v.every((x) => isPlainSerializable(x, seen));
    if (Object.getPrototypeOf(v) !== Object.prototype) return false; // a class instance, not plain data
    return Object.values(v).every((x) => isPlainSerializable(x, seen));
  }
  const goal = makePatrolGoal(-20, 5, 20, 5, { waitFor: 0.3, arriveR: 0.5 });
  const e = createEntity('worker', -20, 0, 5, { goal });
  check('a fresh entity + patrol goal is plain, JSON-safe data', isPlainSerializable(e));

  /* ---- convergence: a patrol reaches B, waits, comes back to A --------- */
  const SPEED = 15, DT = 1 / 30; // avatar.js's WORKER.maxSpeed, a plausible fixed tick
  function integrate(ent, ticks) {
    let reachedB = false, arrivedBack = false, ticksUsed = 0;
    for (let i = 0; i < ticks; i++) {
      const before = ent.goal.target;
      const w = goalWish(ent.x, ent.z, ent.goal, DT);
      ent.x += w.wishX * SPEED * DT;
      ent.z += w.wishZ * SPEED * DT;
      ent.travel += Math.hypot(w.wishX, w.wishZ) * SPEED * DT;
      ticksUsed = i + 1;
      if (before === 'b' && ent.goal.target === 'a') reachedB = true; // flipped after arriving at b
      if (reachedB && before === 'a' && ent.goal.target === 'b') { arrivedBack = true; break; } // and again after arriving at a
    }
    return { reachedB, arrivedBack, ticksUsed };
  }
  // 40 units at 15 u/s is ~2.7s each way plus two 0.3s waits: call it ~6.5s,
  // ~195 ticks at DT — bounded generously (600) so the check is "it
  // converges", not "it converges in exactly this many ticks".
  const r1 = integrate(e, 600);
  check('a patrol goal reaches B and returns to A within a bounded tick count',
    r1.reachedB && r1.arrivedBack, JSON.stringify(r1));
  check('...and it lands back within arriveR of A',
    Math.hypot(e.x - goal.a[0], e.z - goal.a[1]) <= goal.arriveR + 1e-6,
    `${e.x}, ${e.z}`);

  // "ne diverge pas": run it for several more full round trips and check it
  // never leaves the [A,B] segment's own span by more than arriveR — a
  // goal that overshot and hunted back and forth would show up here as a
  // position outside that band, not as a crash.
  let outOfBand = 0;
  for (let i = 0; i < 4000; i++) {
    const w = goalWish(e.x, e.z, e.goal, DT);
    e.x += w.wishX * SPEED * DT; e.z += w.wishZ * SPEED * DT;
    if (e.x < goal.a[0] - goal.arriveR - 0.5 || e.x > goal.b[0] + goal.arriveR + 0.5) outOfBand++;
  }
  check('a patrol never diverges outside its own [A,B] span over 4000 more ticks',
    outOfBand === 0, `${outOfBand} out-of-band ticks`);

  /* ---- serialization: resumes its tick exactly where it left off ------- */
  const live = createEntity('worker', 3, 0, -7, { goal: makePatrolGoal(3, -7, -30, 40, { waitFor: 0.4, arriveR: 1 }) });
  for (let i = 0; i < 37; i++) { // an arbitrary mid-flight point, not on a goal edge
    const w = goalWish(live.x, live.z, live.goal, DT);
    live.x += w.wishX * SPEED * DT; live.z += w.wishZ * SPEED * DT; live.travel += DT * SPEED;
  }
  const jsonText = JSON.stringify(snapshotEntity(live));
  check('a mid-flight entity survives JSON.parse(JSON.stringify(...))',
    typeof jsonText === 'string' && jsonText.length > 0 && jsonText.indexOf('function') === -1);
  const revived = restoreEntity(JSON.parse(jsonText));
  check('...and comes back deep-equal to the live record (goal progress included)',
    JSON.stringify(revived) === JSON.stringify(live));

  // Continue BOTH for the same further ticks: if the revived copy resumed
  // correctly, the two trajectories must stay bit-for-bit identical, tick
  // for tick — not just equal at the moment of the snapshot.
  let diverged = 0;
  for (let i = 0; i < 200; i++) {
    const w1 = goalWish(live.x, live.z, live.goal, DT);
    live.x += w1.wishX * SPEED * DT; live.z += w1.wishZ * SPEED * DT;
    const w2 = goalWish(revived.x, revived.z, revived.goal, DT);
    revived.x += w2.wishX * SPEED * DT; revived.z += w2.wishZ * SPEED * DT;
    if (live.x !== revived.x || live.z !== revived.z || live.goal.target !== revived.goal.target
      || Math.abs(live.goal.waitT - revived.goal.waitT) > 1e-12) diverged++;
  }
  check('the restored entity resumes its tick exactly where the live one continues (200 ticks, bit-for-bit)',
    diverged === 0, `${diverged} diverging ticks`);

  // avatar.js's two profiles, read the way createEntity()'s profileId is
  // meant to be resolved (see player/entities.js's resolveProfile) — no
  // constant here is copied between them; collideRadius() derives both from
  // bodyR * scale, and only `scale` differs (2.2 vs 1).
  check('WORKER and FOUNDING_QUEEN derive different collide radii from the same formula',
    avatar.collideRadius(avatar.WORKER) === 1.5
    && Math.abs(avatar.collideRadius(avatar.FOUNDING_QUEEN) - 3.3) < 1e-9
    && avatar.FOUNDING_QUEEN.scale === 2.2);
}

console.log('\nthe forager state machine (player/forage.js, #37), against a fake ctx:');
{
  const { FORAGE_STATE, createForageState, update, DEFAULT_HARVEST_SECONDS } = forage;

  /** A tiny in-memory node/cache world, deliberately separate from
   *  player/resources.js/harvest.js (forage.js cannot import them, and this
   *  is exactly the discipline that lets it be tested with no loader hook —
   *  see the module header). Shaped like the real contracts (RESOURCE_NODES'
   *  {id,x,z,kind,amount,r} and harvest.js's {x,z,items,total}) so a mismatch
   *  here would be a real one, not a fixture quirk. */
  function makeFakeWorld({ nodes, depot }) {
    const byId = new Map(nodes.map((n) => [n.id, n]));
    return {
      nodes,
      cache: depot ? { x: depot.x, z: depot.z, items: {}, total: 0 } : null,
      ctx(x, z, bodyR, harvestSeconds) {
        return {
          x, z, bodyR,
          // Nearest node with anything left, regardless of distance — same
          // contract as player/resources.js's real nearestNode(): a forager
          // needs a direction to walk in from anywhere, not just an answer
          // to "is one already under my feet" (that is forage.js's OWN
          // arrival check below, node.r + bodyR*0.6, not this function's job).
          findNode: (qx, qz) => {
            let best = null, bestD = Infinity;
            for (const n of nodes) {
              if (n.amount <= 0) continue;
              const d = Math.hypot(n.x - qx, n.z - qz);
              if (d < bestD) { bestD = d; best = n; }
            }
            return best;
          },
          nodeById: (id) => byId.get(id) || null,
          takeFromNode: (n, qty) => { const got = Math.max(0, Math.min(qty, n.amount)); n.amount -= got; return got; },
          depot: this.cache ? { x: this.cache.x, z: this.cache.z } : null,
          depotRadius: 6,
          deposit: (kind) => { this.cache.items[kind] = (this.cache.items[kind] || 0) + 1; this.cache.total += 1; },
          harvestSeconds,
        };
      },
    };
  }

  /** Integrate a forager's own position with the wish update() hands back,
   *  the same "walk in the direction of the wish" loop the entity tests use
   *  for a patrol goal — forage.js's contract is the exact same shape, on
   *  purpose (see its header). */
  function run(fg, w, speed, dt, ticks) {
    for (let i = 0; i < ticks; i++) {
      const wish = update(fg, w.ctx(fg._x, fg._z, fg._bodyR, fg._harvestSeconds), dt);
      fg._x += wish.wishX * wish.mag * speed * dt;
      fg._z += wish.wishZ * wish.mag * speed * dt;
    }
  }

  /* ---- 1. the full cycle: seek -> harvest -> return -> deposit -> seek --- */
  {
    // A single unit on the node: once it is taken there is nothing left to
    // find, so she parks back in SEEK for good — an unambiguous end state to
    // assert on (a richer node would make her go round again, which test 6
    // below covers on purpose instead).
    const w = makeFakeWorld({
      nodes: [{ id: 1, x: 30, z: 0, kind: 'graine', amount: 1, r: 4 }],
      depot: { x: -20, z: 0 },
    });
    const fg = createForageState();
    fg._x = 0; fg._z = 0; fg._bodyR = 1.5; fg._harvestSeconds = 0.3; // fast, so the loop below stays short
    check('a fresh forager starts in SEEK with nothing carried',
      fg.state === FORAGE_STATE.SEEK && fg.carrying === null);

    run(fg, w, 15, 1 / 30, 2000);
    check('the cycle reaches HARVEST, takes one unit, walks it to the depot and deposits, back to SEEK',
      fg.state === FORAGE_STATE.SEEK && fg.carrying === null && w.cache.total === 1,
      `state=${fg.state} carrying=${JSON.stringify(fg.carrying)} cache.total=${w.cache.total}`);
    check('the node lost exactly one unit — nothing created, nothing lost',
      w.nodes[0].amount === 0, w.nodes[0].amount);
    check('the deposited kind matches the node\'s own kind',
      w.cache.items.graine === 1, JSON.stringify(w.cache.items));
  }

  /* ---- 2. no depot yet: she harvests and then PARKS, never invents a spot */
  {
    const w = makeFakeWorld({ nodes: [{ id: 1, x: 10, z: 0, kind: 'brindille', amount: 1, r: 3 }], depot: null });
    const fg = createForageState();
    fg._x = 0; fg._z = 0; fg._bodyR = 1.5; fg._harvestSeconds = 0.2;
    run(fg, w, 15, 1 / 30, 400);
    check('with no depot she reaches RETURN carrying her unit and then stands still',
      fg.state === FORAGE_STATE.RETURN && fg.carrying && fg.carrying.kind === 'brindille',
      `state=${fg.state} carrying=${JSON.stringify(fg.carrying)}`);
    const before = { x: fg._x, z: fg._z };
    const stillWish = update(fg, w.ctx(fg._x, fg._z, 1.5, 0.2), 1 / 30);
    check('...and the wish while parked is exactly zero, not a wandering drift',
      stillWish.wishX === 0 && stillWish.wishZ === 0 && stillWish.mag === 0);
    check('...position does not move on its own', fg._x === before.x && fg._z === before.z);
  }

  /* ---- 3. nothing to harvest anywhere: parks in SEEK, no crash ---------- */
  {
    const w = makeFakeWorld({ nodes: [{ id: 1, x: 500, z: 500, kind: 'miellat', amount: 0, r: 4 }], depot: { x: 0, z: 0 } });
    const fg = createForageState();
    const wish = update(fg, w.ctx(0, 0, 1.5, 1), 1 / 30);
    check('an empty map (no reachable node) returns a zero wish, not an error',
      wish.wishX === 0 && wish.wishZ === 0 && wish.mag === 0 && fg.state === FORAGE_STATE.SEEK);
  }

  /* ---- 4. node emptied mid-harvest: recovers to SEEK, nothing is taken -- */
  {
    const node = { id: 1, x: 0, z: 0, kind: 'graine', amount: 1, r: 3 };
    const w = makeFakeWorld({ nodes: [node], depot: { x: 100, z: 100 } });
    const fg = createForageState();
    fg._x = 0; fg._z = 0;
    // arrive and start harvesting
    update(fg, w.ctx(0, 0, 1.5, 10), 1 / 30);
    check('standing over the node starts HARVEST', fg.state === FORAGE_STATE.HARVEST);
    node.amount = 0; // someone else took the last unit this same tick, elsewhere
    update(fg, w.ctx(0, 0, 1.5, 10), 1 / 30);
    check('a node emptied mid-harvest sends her back to SEEK empty-handed',
      fg.state === FORAGE_STATE.SEEK && fg.carrying === null);
  }

  /* ---- 5. NO SIZE CONSTANT IS COPIED: the arrival radius moves with bodyR,
     exactly node.r + bodyR*0.6 — this is #37's own version of piège #6.
     Placed just outside vs. just inside that radius, for TWO different
     bodies, so a hardcoded literal (rather than a formula reading ctx.bodyR)
     would fail at least one of the four checks. */
  {
    const node = { id: 1, x: 0, z: 0, kind: 'graine', amount: 5, r: 4 };
    for (const bodyR of [avatar.collideRadius(avatar.WORKER), avatar.collideRadius(avatar.FOUNDING_QUEEN)]) {
      const reach = node.r + bodyR * 0.6;
      const w = makeFakeWorld({ nodes: [{ ...node }], depot: null });
      const justOutside = createForageState();
      update(justOutside, w.ctx(reach + 0.05, 0, bodyR, 1), 1 / 30);
      check(`bodyR=${bodyR.toFixed(2)}: just outside the reach (${(reach + 0.05).toFixed(2)}) still walks toward the node`,
        justOutside.state === FORAGE_STATE.SEEK);

      const w2 = makeFakeWorld({ nodes: [{ ...node }], depot: null });
      const justInside = createForageState();
      update(justInside, w2.ctx(reach - 0.05, 0, bodyR, 1), 1 / 30);
      check(`bodyR=${bodyR.toFixed(2)}: just inside the reach (${(reach - 0.05).toFixed(2)}) starts harvesting`,
        justInside.state === FORAGE_STATE.HARVEST);
    }
  }

  /* ---- 6. conservation of units across many foragers, nodes and ticks --- */
  {
    const nodes = [
      { id: 1, x: 0, z: 0, kind: 'graine', amount: 4, r: 5 },
      { id: 2, x: 25, z: 10, kind: 'brindille', amount: 3, r: 5 },
      { id: 3, x: -18, z: -12, kind: 'miellat', amount: 5, r: 5 },
    ];
    const startTotal = nodes.reduce((s, n) => s + n.amount, 0);
    const w = makeFakeWorld({ nodes, depot: { x: 40, z: -30 } });
    const foragers = [];
    for (let i = 0; i < 5; i++) {
      const fg = createForageState();
      fg._x = (Math.random() - 0.5) * 60; fg._z = (Math.random() - 0.5) * 60;
      fg._bodyR = 1.5; fg._harvestSeconds = 0.4;
      foragers.push(fg);
    }
    let conservationBroken = false;
    for (let t = 0; t < 3000; t++) {
      for (const fg of foragers) {
        const wish = update(fg, w.ctx(fg._x, fg._z, fg._bodyR, fg._harvestSeconds), 1 / 30);
        fg._x += wish.wishX * wish.mag * 15 * (1 / 30);
        fg._z += wish.wishZ * wish.mag * 15 * (1 / 30);
      }
      const remaining = nodes.reduce((s, n) => s + n.amount, 0);
      const carried = foragers.reduce((s, fg) => s + (fg.carrying ? 1 : 0), 0);
      if (remaining + carried + w.cache.total !== startTotal) { conservationBroken = true; break; }
    }
    check(`units are conserved across ${foragers.length} foragers and ${nodes.length} nodes over 3000 ticks`
      + ' (remaining + carried + deposited === starting total, always)', !conservationBroken);
    check('...and the swarm actually moved units (this is not a vacuous pass)',
      w.cache.total > 0, w.cache.total);
  }

  void DEFAULT_HARVEST_SECONDS; // exported for callers' fallback; nothing here needs its exact value
}

console.log('\nant-part instancing (player/antMesh.js + core/outline.js, #36):');
{
  const antMesh = await import('../src/player/antMesh.js');
  const outline = await import('../src/core/outline.js');

  /* This is the ticket's actual acceptance test in numeric form: "le rendu
     doit tenir plusieurs fourmis sans un draw call par patte" is exactly
     "the drawable count does not grow with the ant count" — see
     scripts/bench-antmesh.mjs for the full before/after report this block
     only guards as a standing regression check (a future edit that goes
     back to one THREE.Mesh per part per ant would fail HERE, not just look
     slow on a screen nobody in this sandbox can see). */
  function countDrawables(scene) {
    let drawables = 0, bodyInstances = 0;
    const geos = new Set(), mats = new Set();
    scene.traverse((o) => {
      if (!o.isMesh) return;
      drawables++;
      geos.add(o.geometry);
      mats.add(o.material);
      if (o.material.isMeshStandardMaterial) bodyInstances += o.isInstancedMesh ? o.count : 1;
    });
    return { drawables, geoCount: geos.size, matCount: mats.size, bodyInstances };
  }
  function mockLegState(profile) {
    return profile.legs.map(() => ({ planted: [0, 0, 0], from: [0, 0, 0], to: [0, 0, 0], swinging: false, prevP: 0 }));
  }
  // ellipsoid parts (gaster+petiole+thorax+head+2 eyes+knee/foot per leg) +
  // bone parts (2 mandibles+4 antennae+thigh/shin per leg) — the same
  // arithmetic player/antMesh.js's own partCounts() derives its pool sizing
  // from, kept independent here (not imported) so this test would notice if
  // that derivation itself drifted from what the profile tables actually need.
  const partsOf = (p) => (p.body.gaster.length + 5 + p.legs.length * 2) + (6 + p.legs.length * 2);

  antMesh._resetPoolsForTest();
  const scene1 = new THREE.Scene();
  {
    const { group } = antMesh.buildAntMesh(avatar.WORKER);
    scene1.add(group);
    scene1.add(outline.buildOutlineHull(group));
  }
  const one = countDrawables(scene1);
  check('one ant renders through a bounded, small number of draw calls (2 body pools + 2 outline shells)',
    one.drawables === 4, one.drawables);

  antMesh._resetPoolsForTest();
  const scene20 = new THREE.Scene();
  for (let i = 0; i < 20; i++) {
    const profile = i % 5 === 0 ? avatar.FOUNDING_QUEEN : avatar.WORKER; // a mixed crowd, not one profile
    const { group, updatePose } = antMesh.buildAntMesh(profile);
    scene20.add(group);
    scene20.add(outline.buildOutlineHull(group)); // a no-op past the first ant — see core/outline.js
    updatePose({ x: i * 3, y: 0, z: 0, yaw: 0, speed: 0, travel: 0, bob: 0, climb: null, legsInit: false, scale: profile.scale },
      mockLegState(profile), i * 0.3);
  }
  const twenty = countDrawables(scene20);
  check('twenty mixed ants (the ticket\'s own number) still render through exactly 4 objects, not 20x',
    twenty.drawables === 4, twenty.drawables);

  /* The outline shell (core/outline.js) is the sharpest edge of this ticket:
     it was built once, for the FIRST ant, then 19 more ants got allocated
     into the same body pools with no second buildOutlineHull() call for any
     of them (scene20's loop above still calls it every time, same as
     player/index.js's real pattern, but every call after the first is a
     documented no-op — see core/outline.js). If the shell ever stopped
     sharing the body pool's instanceMatrix attribute by reference (a copy,
     or a snapshot `count` instead of a live getter), this is where it would
     show up: the shell would still be showing ant #1 alone. */
  {
    const shellSphere = scene20.children.find((c) => c.name === 'outline-hull' && c.children.length)
      ?.children.find((c) => c.geometry.type === 'SphereGeometry');
    const bodySphere = scene20.children.find((c) => c.name === 'ant-part-pools')
      ?.children.find((c) => c.geometry.type === 'SphereGeometry');
    check('the outline shell shares the body pool\'s instanceMatrix by reference',
      !!shellSphere && !!bodySphere && shellSphere.instanceMatrix === bodySphere.instanceMatrix);
    // partsOf() sums BOTH pools (sphere+cylinder) for one ant; the sphere
    // pool alone after 20 ants is well past that combined figure for a
    // single one, so this is a deliberately generous floor, not an exact
    // count (the exact count is checked below via `twenty.bodyInstances`).
    check('...so it renders every one of the 20 ants\' parts, not just the first ant\'s',
      !!shellSphere && !!bodySphere && shellSphere.count === bodySphere.count
      && bodySphere.count > partsOf(avatar.WORKER),
      `${shellSphere && shellSphere.count} vs ${bodySphere && bodySphere.count}`);
  }
  check('...through exactly 2 shared geometries', twenty.geoCount === 2, twenty.geoCount);
  check('...and exactly 2 shared materials (1 body + 1 outline), not one per ant or per colour',
    twenty.matCount === 2, twenty.matCount);
  {
    // i % 5 === 0 for i in [0,20) -> 4 queens, 16 workers (see the loop above)
    const queens = 4, workers = 16;
    const want = workers * partsOf(avatar.WORKER) + queens * partsOf(avatar.FOUNDING_QUEEN);
    check('...while every part of every one of the 20 ants is still individually posed '
      + '(36/worker * 16 + 37/queen * 4, matching the profile tables)',
      twenty.bodyInstances === want, `${twenty.bodyInstances} vs ${want}`);
  }

  check('a pool that is asked for one more ant than avatar.js\'s two profiles can pre-size for throws, not corrupts',
    (() => {
      antMesh._resetPoolsForTest();
      const scene = new THREE.Scene();
      try {
        for (let i = 0; i < antMesh.MAX_ANTS + 1; i++) scene.add(antMesh.buildAntMesh(avatar.WORKER).group);
        return false; // should have thrown by now
      } catch (e) { return /instanced pool exhausted/.test(e.message); }
    })());
  antMesh._resetPoolsForTest();
}

/* Deliberately LAST: this one builds the whole world (meshes included, via
   the loader's texturing stub), which mutates module-level world state
   (MUSHROOMS/ROCKS/RESOURCE_NODES get filled, founding's host group is
   reset). Nothing above may depend on it, so it runs after everything. */
console.log('\nthe shared world index (world/index.js):');
{
  const world = await import('../src/world/index.js');
  world.createWorld();
  const idx = world.worldIndex;
  const blades = world.getGrassFootprints();
  const expected = blades.length + world.MUSHROOMS.length + world.ROCKS.length + world.RESOURCE_NODES.length;
  check(`every static prop is indexed (${expected} entries)`, idx.size === expected,
    `${idx.size} in the index vs ${expected} in the arrays`);
  check('buckets stay small at this cell size', idx.stats().maxBucket < 40, JSON.stringify(idx.stats()));

  // `id` must be the array index, or player/** resolves the wrong object.
  const sample = (type, arr) => {
    let wrong = 0;
    for (let i = 0; i < arr.length; i += Math.max(1, Math.floor(arr.length / 25))) {
      const hit = idx.nearest(arr[i].x, arr[i].z, 0.001, type);
      if (!hit || arr[hit.id].x !== arr[i].x || arr[hit.id].z !== arr[i].z) wrong++;
    }
    return wrong;
  };
  check("'grass' ids resolve against the footprints array", sample('grass', blades) === 0);
  check("'mushroom' ids resolve against MUSHROOMS", sample('mushroom', world.MUSHROOMS) === 0);
  check("'rock' ids resolve against ROCKS", sample('rock', world.ROCKS) === 0);
  check("'resource' ids resolve against RESOURCE_NODES", sample('resource', world.RESOURCE_NODES) === 0);

  // The constant player/index.js had hand-copied as BROOD_ROOM_CAPACITY.
  check('MAX_BROOD reaches player/** through the barrel', world.MAX_BROOD === 6, world.MAX_BROOD);

  // Depleting a node must NOT invalidate the index: it keeps its slot and its
  // position, and callers keep filtering on `amount` themselves.
  const node = world.RESOURCE_NODES.find((n) => n.amount > 0);
  world.harvestNode(node.id, 99);
  const still = idx.nearest(node.x, node.z, 0.001, 'resource');
  check('a spent node stays indexed at its own position',
    still !== null && world.RESOURCE_NODES[still.id] === node && node.amount === 0);

  /* ======================================================================
     #35 — THE FOUR player/** CALLERS, INDEXED vs THE SCANS THEY REPLACED.

     The ticket's acceptance criterion is "nothing changes": this is a
     replacement of an implementation, not a feature. Without a screen, the
     only way to show that is to keep the scan. So each reference below is a
     LITERAL COPY of the code as it stood before the swap (git show
     HEAD:src/player/<file>), run against the same real map, on the same few
     hundred points — open ground, exact cell corners, dead on top of real
     props, a hair off them, and far outside everything. One disagreement is
     a regression.

     These live inside this block because they need a built world (the index
     is only filled by createWorld(), and the props they resolve against only
     exist then). They run after the checks above, and after a node has been
     emptied on purpose two lines up — so the "skip spent nodes" path is
     exercised with a genuinely spent node.
     ====================================================================== */
  console.log('\nindexed proximity callers vs the scans they replaced (#35):');
  const climb = await import('../src/player/climb.js');
  const decorC = await import('../src/player/decorCollision.js');
  const site = await import('../src/player/siteQuality.js');
  const playerRes = await import('../src/player/resources.js');
  const bladeMod = await import('../src/world/blade.js');
  const MIN_H = climb.CLIMB_MIN_H;

  /* Empty a fifth of the nodes before probing. Without this, the map has
     exactly one spent node (the one two lines up) and a few hundred random
     probes almost never stand near it — checked by deleting nodeInReach's
     `amount > 0` filter on purpose, which the probes did NOT catch until the
     spent nodes were this common. Both sides read the same live array, so
     this is a harder map for the test, not a different one. */
  for (let i = 0; i < world.RESOURCE_NODES.length; i += 5) {
    world.harvestNode(world.RESOURCE_NODES[i].id, 99);
  }

  let ps = 987654321;
  const prnd = () => ((ps = (ps * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
  const POINTS = [];
  // open map, surface and underground alike
  for (let i = 0; i < 160; i++) POINTS.push([(prnd() - 0.5) * 440, (prnd() - 0.5) * 460]);
  // exact multiples of the 12-unit cell size, i.e. queries centred on a cell
  // corner, where a grid can lose an object to a rounding disagreement
  for (let i = 0; i < 40; i++) POINTS.push([Math.round((prnd() - 0.5) * 34) * 12, Math.round((prnd() - 0.5) * 34) * 12]);
  // on real props, a hair off them, and a body's width away
  const around = (arr, n) => {
    for (let i = 0; i < n && arr.length; i++) {
      const p = arr[Math.floor(prnd() * arr.length)];
      POINTS.push([p.x, p.z], [p.x + 1e-9, p.z - 1e-9], [p.x + 4.5, p.z - 4.5]);
    }
  };
  around(blades, 40); around(world.MUSHROOMS, 25); around(world.ROCKS, 20); around(world.RESOURCE_NODES, 25);
  // and the places with nothing in them at all
  POINTS.push([0, 0], [1e4, 1e4], [-1e4, -1e4], [world.TREE.x, world.TREE.z], [world.TREE.x + 12, world.TREE.z]);

  /* ---- 1. climb.js nearestClimbable() ---------------------------------- */
  {
    // 4.5 = climb.js CLIMB_RADIUS, 6 = TREE_CLIMB_RADIUS (module-private
    // there). If either moves, this fails: that is the intended noise, not a
    // false alarm — the copy has to be re-synced deliberately.
    const ref = (ant) => {
      const scale = ant.scale || 1;
      let best = null, bestD = 4.5 * scale;
      for (let i = 0; i < blades.length; i++) {
        const g = blades[i];
        if (g.h < MIN_H) continue;
        const d = Math.hypot(g.x - ant.x, g.z - ant.z);
        if (d < bestD) { bestD = d; best = { kind: 'grass', i }; }
      }
      const ts = Math.hypot(world.TREE.x - ant.x, world.TREE.z - ant.z) - world.TREE.w;
      if (ts < 6 * scale && ts < bestD) best = { kind: 'tree' };
      return best;
    };
    let mismatch = 0, hits = 0, treeHits = 0;
    for (const [x, z] of POINTS) {
      for (const scale of [1, 2.2]) {
        const ant = { x, z, scale };
        const want = ref(ant);
        if (want) { hits++; if (want.kind === 'tree') treeHits++; }
        if (JSON.stringify(climb.nearestClimbable(ant)) !== JSON.stringify(want)) mismatch++;
      }
    }
    check(`nearestClimbable matches the blade scan on ${POINTS.length * 2} probes`,
      mismatch === 0, `${mismatch} mismatches`);
    check('...and the probes actually found climbable stems and the trunk',
      hits > 20 && treeHits > 0, `${hits} stems, ${treeHits} trunk`);
  }

  /* ---- 2. resources.js nodeInReach() (harvest.target's other half) ------ */
  {
    const ref = (x, z, bodyR) => {
      const nodes = world.RESOURCE_NODES;
      let best = null, bestD = Infinity;
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        if (n.amount <= 0) continue;
        const d = Math.hypot(n.x - x, n.z - z);
        if (d <= n.r + bodyR * 0.6 && d < bestD) { bestD = d; best = n; }
      }
      return best;
    };
    let mismatch = 0, hits = 0;
    for (const [x, z] of POINTS) {
      for (const bodyR of [0, avatar.collideRadius(avatar.FOUNDING_QUEEN)]) {
        const want = ref(x, z, bodyR);
        if (want) hits++;
        if (playerRes.nodeInReach(x, z, bodyR) !== want) mismatch++;
      }
    }
    check(`nodeInReach matches the node scan on ${POINTS.length * 2} probes`,
      mismatch === 0, `${mismatch} mismatches`);
    check('...and the probes actually landed in reach of nodes', hits > 20, hits);

    // the spent node emptied above must be invisible to both, and the id
    // lookup harvest.js latches on must still find it
    check('a spent node is never returned as in reach',
      playerRes.nodeInReach(node.x, node.z, 3.3) !== node);
    check('nodeById finds a node by its id, and only that one',
      playerRes.nodeById(node.id) === node && playerRes.nodeById(-1) === null);
  }

  /* ---- 2b. resources.js nearestNode() (#37 — findNode for a forager,
     unlike nodeInReach() this must NOT filter by a gameplay reach), searched
     at a GROWING radius rather than one fixed large one (review comment on
     this ticket: a fixed radius of 2000 made core/spatialIndex.js's
     nearest() sweep a ~333x333 cell box for every call — see resources.js's
     own header for the arithmetic — which is exactly the linear-scan-sized
     cost #35 exists to remove). The reference respects the SAME hard cap the
     real function documents (imported, not re-typed): a couple of this
     shared POINTS array's probes sit ~1e4 units off the map on purpose
     (built for the decor/climb scans above, which want "nothing out
     there"), and no forager will ever be that far from the map she was
     born on. */
  {
    const refNearest = (x, z) => {
      let best = null, bestD = Infinity;
      for (const n of world.RESOURCE_NODES) {
        if (n.amount <= 0) continue;
        const d = Math.hypot(n.x - x, n.z - z);
        if (d > playerRes.HARD_CAP || d >= bestD) continue;
        bestD = d; best = n;
      }
      return best;
    };
    let mismatch = 0, hits = 0, farHits = 0;
    for (const [x, z] of POINTS) {
      const want = refNearest(x, z);
      if (want) { hits++; if (Math.hypot(want.x - x, want.z - z) > 20) farHits++; }
      if (playerRes.nearestNode(x, z) !== want) mismatch++;
    }
    check(`nearestNode matches the bounded node scan on ${POINTS.length} probes`,
      mismatch === 0, `${mismatch} mismatches`);
    check('...and it actually reaches FAR nodes too, unlike nodeInReach()',
      hits > 20 && farHits > 5, `${hits} hits, ${farHits} farther than 20 units`);

    // Explicit, not just folded into the aggregate above: a forager literally
    // 1e4 units off the map (well past HARD_CAP from anything) gets a clean
    // null, not a hang or a wrong answer, and the growing-radius loop still
    // terminates rather than doubling forever.
    check('a probe far past HARD_CAP from every node returns null, not a hang or a wrong answer',
      playerRes.nearestNode(1e4, 1e4) === null && playerRes.nearestNode(-1e4, -1e4) === null);
  }

  /* ---- 3. decorCollision.js forEachCollider()/resolveDecorCollision() --- */
  {
    // the production cache, so the reference collides against exactly the
    // fitted radii the resolver uses (that is piege #1 of this ticket: the
    // index stores a cap's *visual* radius, the resolver grows it)
    const radii = decorC.mushroomRadii();
    const TREE_BASE = bladeMod.bladeCurvePoint(world.TREE, 0.01);
    const TREE_R = world.treeTrunkRadius(0.01) * 0.88;
    const refColliders = (x, z) => {
      const out = [];
      if (z < world.TUNNEL_MOUTH + 6) {
        for (let k = 0; k < world.MUSHROOMS.length; k++) {
          if (radii[k] > 0) out.push([world.MUSHROOMS[k].x, world.MUSHROOMS[k].z, radii[k]]);
        }
      }
      if (z > world.TUNNEL_MOUTH - 6) {
        for (const r of world.ROCKS) out.push([r.x, r.z, r.r]);
        for (const g of blades) if (g.h >= MIN_H) out.push([g.x, g.z, g.w * 0.75]);
        out.push([TREE_BASE[0], TREE_BASE[2], TREE_R]);
      }
      return out;
    };
    // Only the colliders actually overlapping matter: both consumers ignore
    // the rest, so the indexed sweep is allowed to be a superset (it is, for
    // blades and caps) but may never miss one.
    const overlapping = (list, x, z, antR) => list
      .filter(([cx, cz, r]) => Math.hypot(x - cx, z - cz) < r + antR)
      .map(([cx, cz, r]) => `${cx}|${cz}|${r}`).sort().join(' ');

    const ANT_R = avatar.collideRadius(avatar.FOUNDING_QUEEN);
    let setMismatch = 0, penMismatch = 0, overlaps = 0, capOverlaps = 0;
    for (const [x, z] of POINTS) {
      for (const antR of [0, ANT_R]) {
        const got = [];
        decorC.forEachCollider(x, z, antR, (cx, cz, r) => got.push([cx, cz, r]));
        const want = refColliders(x, z);
        const a = overlapping(got, x, z, antR), b = overlapping(want, x, z, antR);
        if (a !== b) setMismatch++;
        if (b) { overlaps += b.split(' ').length; if (z < world.TUNNEL_MOUTH) capOverlaps++; }

        // deepestPenetration is a max over that same set, so it must agree
        // to the last bit, not merely to a tolerance
        let worst = 0;
        for (const [cx, cz, r] of want) {
          const pen = r + antR - Math.hypot(x - cx, z - cz);
          if (pen > worst) worst = pen;
        }
        if (decorC.deepestPenetration(x, z, antR) !== worst) penMismatch++;
      }
    }
    check(`forEachCollider returns exactly the overlapping colliders on ${POINTS.length * 2} probes`,
      setMismatch === 0, `${setMismatch} mismatches`);
    check('deepestPenetration agrees with the scan bit for bit', penMismatch === 0, `${penMismatch} mismatches`);
    check('...and the probes actually sat inside decor, underground included',
      overlaps > 40 && capOverlaps > 0, `${overlaps} overlaps, ${capOverlaps} underground`);

    /* The resolver itself, end to end: same push-out, same slide, same
       cleanup pass, on the same wedged positions. Compared to 1e-9 rather
       than exactly, because the two versions sum the same penetration
       vectors in a different order (bucket order vs array order) — floating
       point addition is not associative, so the last bit can differ. That is
       the ONLY difference this swap can produce, and 1e-9 world units is
       nine orders of magnitude below anything the ant can notice. */
    const PROFILE = { profile: avatar.FOUNDING_QUEEN, yaw: 0.7 };
    const refResolve = (ant, step) => {
      const gather = () => {
        const p = { x: 0, z: 0, n: 0 };
        for (const [cx, cz, r0] of refColliders(ant.x, ant.z)) {
          const r = r0 + ANT_R, dx = ant.x - cx, dz = ant.z - cz;
          const d = Math.hypot(dx, dz);
          if (d >= r || d < 0.001) continue;
          p.x += (dx / d) * (r - d); p.z += (dz / d) * (r - d); p.n++;
        }
        return p;
      };
      const push = gather();
      if (push.n === 0) return;
      const pdx = push.x / push.n, pdz = push.z / push.n;
      ant.x += pdx; ant.z += pdz;
      const d = Math.hypot(pdx, pdz);
      if (d > 0.0005) {
        const nx = pdx / d, nz = pdz / d;
        const tx = -nz, tz = nx;
        const along = Math.sin(ant.yaw) * tx + Math.cos(ant.yaw) * tz;
        const slide = step * 0.6 * (along >= 0 ? 1 : -1);
        ant.x += tx * slide; ant.z += tz * slide;
      }
      const cleanup = gather();
      if (cleanup.n > 0) { ant.x += cleanup.x / cleanup.n; ant.z += cleanup.z / cleanup.n; }
    };
    let resolveMismatch = 0, moved = 0;
    for (const [x, z] of POINTS) {
      const got = { ...PROFILE, x, z };
      const want = { ...PROFILE, x, z };
      decorC.resolveDecorCollision(got, 1.2);
      refResolve(want, 1.2);
      if (Math.abs(got.x - want.x) > 1e-9 || Math.abs(got.z - want.z) > 1e-9) resolveMismatch++;
      if (want.x !== x || want.z !== z) moved++;
    }
    check(`resolveDecorCollision lands within 1e-9 of the scan on ${POINTS.length} probes`,
      resolveMismatch === 0, `${resolveMismatch} mismatches`);
    check('...and the probes actually had to be pushed out of something', moved > 20, moved);
  }

  /* ---- 4. siteQuality.js probeShade()/probeFood() counts ---------------- */
  {
    const refGrass = (x, z, radius) => {
      let n = 0;
      for (let i = 0; i < blades.length; i++) {
        const g = blades[i];
        if (g.h < MIN_H) continue;
        if (Math.abs(g.x - x) > radius || Math.abs(g.z - z) > radius) continue;
        if (Math.hypot(g.x - x, g.z - z) < radius) n++;
      }
      return n;
    };
    const refNodes = (x, z, radius) => {
      let n = 0;
      for (const r of world.RESOURCE_NODES) if (Math.hypot(r.x - x, r.z - z) < radius) n++;
      return n;
    };
    let grassMismatch = 0, nodeMismatch = 0, grassSeen = 0, nodesSeen = 0;
    for (const [x, z] of POINTS) {
      for (const radius of [26, 55]) {   // probeShade's reach, then probeFood's
        const wantG = refGrass(x, z, radius), wantN = refNodes(x, z, radius);
        grassSeen += wantG; nodesSeen += wantN;
        if (site.countTallGrass(x, z, radius) !== wantG) grassMismatch++;
        if (site.countNodesNear(x, z, radius) !== wantN) nodeMismatch++;
      }
    }
    check(`probeShade's tall-grass count matches the scan on ${POINTS.length * 2} probes`,
      grassMismatch === 0, `${grassMismatch} mismatches`);
    check(`probeFood's node count matches the scan on ${POINTS.length * 2} probes`,
      nodeMismatch === 0, `${nodeMismatch} mismatches`);
    check('...and the probes actually counted something',
      grassSeen > 100 && nodesSeen > 50, `${grassSeen} blades, ${nodesSeen} nodes`);
  }

  /* ---- 5. player/entities.js (#36): the player IS an entity ------------- */
  console.log('\nthe entity layer (player/entities.js, #36) — same update path as the player:');
  {
    const ent = await import('../src/player/entities.js');
    const movement = await import('../src/player/movement.js');

    // A controlled "player" and an unpiloted "worker" built by the SAME
    // spawnEntity(), ticked by the SAME updateEntity() — the ticket's own
    // wording ("le joueur devient l'entité contrôlée, pas un cas
    // particulier"). Spawned on open, flat lawn well clear of every decor
    // collider and of the underground mouth, so the trajectory checks below
    // are about the entity/goal/containment machinery, not about dodging a
    // pebble.
    const OPEN = [160, 190]; // inside LAWN_BOUNDS, east of the resource cluster player/index.js's SURFACE_START also uses
    const player = ent.spawnEntity(avatar.FOUNDING_QUEEN, OPEN[0], 0, OPEN[1], { id: 'test-player', controlled: true });
    check('the player is an entity with controlled:true, not a separate record shape',
      player.controlled === true && typeof player.profileId === 'string' && player.legState.length === avatar.FOUNDING_QUEEN.legs.length);

    const patrolGoal = ent.makePatrolGoal(OPEN[0] - 25, OPEN[1], OPEN[0] + 25, OPEN[1],
      { waitFor: 0.3, arriveR: avatar.collideRadius(avatar.WORKER) });
    const worker = ent.spawnEntity(avatar.WORKER, OPEN[0] - 25, 0, OPEN[1], { controlled: false, goal: patrolGoal });
    check('an unpiloted worker starts with a goal and controlled:false', worker.controlled === false && !!worker.goal);

    check('both entities are indexed in the shared spatial index under type \'ant\'',
      world.worldIndex.has('ant', player.id) && world.worldIndex.has('ant', worker.id));
    check('their indexed extents are each profile\'s own collideRadius, not a shared literal',
      world.worldIndex.nearest(player.x, player.z, 0.01, 'ant').extent === avatar.collideRadius(avatar.FOUNDING_QUEEN)
      && world.worldIndex.nearest(worker.x, worker.z, 0.01, 'ant').extent === avatar.collideRadius(avatar.WORKER));

    const DT = 1 / 30;
    const zeroIntent = { ix: 0, iy: 0, mag: 0, sprint: false };
    let workerReachedB = false, workerReturned = false;
    const camEye = [OPEN[0], 20, OPEN[1] + 40], camAim = [OPEN[0], 0, OPEN[1]];
    for (let i = 0; i < 900; i++) {
      // the player is fed a `drive` (as player/index.js's update() builds
      // one from real input); standing still on purpose — this loop is
      // about the update PATH being shared, not about steering her.
      ent.updateEntity(player, DT, ent.driveFromInput(zeroIntent, camEye, camAim));
      // the worker gets no `drive` at all: updateEntity() must fall back to
      // its own goal without being told to.
      const beforeTarget = worker.goal.target;
      ent.updateEntity(worker, DT, undefined);
      if (beforeTarget === 'b' && worker.goal.target === 'a') workerReachedB = true;
      if (workerReachedB && beforeTarget === 'a' && worker.goal.target === 'b') { workerReturned = true; break; }
    }
    check('an uncontrolled entity walks its patrol through updateEntity() alone (no drive supplied)',
      workerReachedB && workerReturned);
    check('the standing-still controlled entity did not wander off on its own',
      Math.hypot(player.x - OPEN[0], player.z - OPEN[1]) < 1);

    // Confinement (containSurface, via movement.js's stepAnt — same clamp
    // the player is subject to): send a worker's patrol target far outside
    // LAWN_BOUNDS and confirm it is held at the boundary, never marched
    // through it.
    const runaway = ent.spawnEntity(avatar.WORKER, world.LAWN_BOUNDS.x1 - 5, 0, 200,
      { controlled: false, goal: ent.makePatrolGoal(world.LAWN_BOUNDS.x1 - 5, 200, world.LAWN_BOUNDS.x1 + 5000, 200, { arriveR: 1 }) });
    for (let i = 0; i < 300; i++) ent.updateEntity(runaway, DT, undefined);
    check('an unpiloted entity is held at containSurface\'s boundary like the player, never past it',
      runaway.x <= world.LAWN_BOUNDS.x1 + 1e-6, runaway.x);

    ent.removeEntity(player); ent.removeEntity(worker); ent.removeEntity(runaway);
    check('removeEntity takes each one back out of the shared index',
      !world.worldIndex.has('ant', player.id) && !world.worldIndex.has('ant', worker.id) && !world.worldIndex.has('ant', runaway.id));

    // movement.js itself is untouched by #36 (no import of core/entities.js
    // or player/entities.js) — the sharing lives in WHO calls it, not in a
    // rewrite of stepAnt/computeWishDir.
    check('movement.js stays a plain function pair, not aware of the entity list',
      typeof movement.stepAnt === 'function' && typeof movement.computeWishDir === 'function');
  }

  /* ---- 6. player/workers.js (#37): hatch -> forage -> deposit, for real -- */
  console.log('\nworkers.js (#37) — the éclosion becomes ouvrières that forage on their own:');
  {
    const workersMod = await import('../src/player/workers.js');
    const harvestMod = await import('../src/player/harvest.js');
    // Nothing here renders — a scene stub with a no-op add() is enough,
    // buildAntMesh()/buildOutlineHull() only need real THREE objects (which
    // they get: antMesh.js's shared pools), never a live WebGL context. Reset
    // first so this doesn't inherit whatever the antMesh instancing block
    // above already allocated (it resets the pools itself at its own end,
    // but a defensive reset here keeps this block independent of test order).
    const antMeshMod = await import('../src/player/antMesh.js');
    antMeshMod._resetPoolsForTest();
    const fakeScene = { add() {} };

    /* ---- "une éclosion = une ouvrière, jamais deux, jamais zéro" -------- */
    {
      const swarm = workersMod.createWorkerSwarm({ scene: fakeScene });
      const b = brood.createBroodState(6);

      // #38: workersAvailable is now `{ [casteId]: count }`, not a bare
      // number — see brood.js's header. 'worker' is a literal here (not
      // avatar.WORKER.id) on purpose: this whole block existed before #38
      // and is deliberately left exercising the string convention brood.js
      // itself is built on, independent of avatar.js agreeing with it (the
      // agreement itself is checked by the dedicated #38 block below).
      b.workersAvailable = { worker: 3 }; // e.g. a whole clutch hatching on the same tick
      const spawned3 = swarm.spawnFromBrood(b, 0, 0);
      check('a clutch of 3 hatching at once spawns exactly 3 workers, not 6 or 0',
        spawned3 === 3 && swarm.count() === 3, `spawned=${spawned3} count=${swarm.count()}`);
      check('...and drains workersAvailable to empty',
        Object.keys(b.workersAvailable).length === 0, JSON.stringify(b.workersAvailable));

      const spawnedAgain = swarm.spawnFromBrood(b, 0, 0);
      check('draining again before the next hatch spawns nothing (idempotent)',
        spawnedAgain === 0 && swarm.count() === 3, `spawned=${spawnedAgain} count=${swarm.count()}`);

      b.workersAvailable = { worker: 1 }; // a single later hatch
      const spawned1 = swarm.spawnFromBrood(b, 100, 100);
      check('one later hatch adds exactly one more worker, never two',
        spawned1 === 1 && swarm.count() === 4, `spawned=${spawned1} count=${swarm.count()}`);

      // Sync the index to each worker's post-spawn position first: spawnOne()
      // resolves decor collision (which can nudge x/z) AFTER worldIndex.insert()
      // already ran, exactly the same order player/index.js uses for the queen
      // — the first updateEntity() tick (here, a dt=0 one, so nobody actually
      // walks) is what calls worldIndex.move() and settles it, same as frame 1
      // does for the player in production.
      swarm.update(0, 0, null);
      check('every spawned worker is indexed in the shared spatial index, at WORKER\'s own collideRadius',
        swarm.workers.every((w) => {
          const hit = world.worldIndex.nearest(w.entity.x, w.entity.z, 0.01, 'ant');
          return hit && hit.id === w.entity.id && hit.extent === avatar.collideRadius(avatar.WORKER);
        }));
      check('every spawned worker is controlled:true (driven by forage.js\'s own wish, not a goal)',
        swarm.workers.every((w) => w.entity.controlled === true));

      const ids = swarm.workers.map((w) => w.entity.id);
      swarm.dispose();
      check('dispose() empties the swarm and removes every one of them from the shared index',
        swarm.workers.length === 0 && ids.every((id) => !world.worldIndex.has('ant', id)));
    }

    /* ---- the harvest timing is WIRED to harvest.js's HARVEST_SECONDS, not a
       second hand-typed number (this ticket's own version of piège #6: see
       forage.js's header on why it cannot import harvest.js itself, and
       workers.js's ctx.harvestSeconds line, which passes the REAL value
       through instead of retyping it). Placed co-located with a node so the
       SEEK->HARVEST transition happens on the very first tick, then counted
       until the unit is actually taken (forage.js's justTook fires). At
       dt=1/30 and the real 1.8s value this lands on tick 55 exactly (1 for
       the transition tick + 54 = 1.8/dt for the harvest itself); the ±1
       tolerance only absorbs floating-point rounding on the progress
       accumulator, not a different constant. ------------------------------ */
    {
      const swarm = workersMod.createWorkerSwarm({ scene: fakeScene });
      const node = world.RESOURCE_NODES.find((n) => n.amount > 0);
      const before = node.amount;
      const b = brood.createBroodState(6);
      b.workersAvailable = { worker: 1 };
      swarm.spawnFromBrood(b, node.x, node.z);
      const w = swarm.workers[0];
      w.entity.x = node.x; w.entity.z = node.z; // co-located: arrival is immediate

      const DT = 1 / 30;
      let takenAtTick = -1;
      for (let i = 0; i < 200 && takenAtTick < 0; i++) {
        swarm.update(DT, i * DT, null); // no depot yet — only the harvest half is under test here
        if (w.forage.justTook) takenAtTick = i + 1;
      }
      const expectedTick = Math.round(harvestMod.HARVEST_SECONDS / DT) + 1; // +1 for the SEEK->HARVEST transition tick
      check(`a unit is taken at tick ${expectedTick} (harvest.js's real HARVEST_SECONDS=${harvestMod.HARVEST_SECONDS}s @ dt=${DT.toFixed(4)}s), not a different hard-coded pace`,
        takenAtTick > 0 && Math.abs(takenAtTick - expectedTick) <= 1,
        `took at tick ${takenAtTick}, expected ~${expectedTick}`);
      check('the node lost exactly one unit for that one taken', node.amount === before - 1, node.amount);
      swarm.dispose();
    }

    /* ---- end to end: seek a REAL node, harvest it, walk to a REAL cache
       shape, deposit into it — the same cache player/harvest.js's drop()
       would have created, fabricated here so the test does not depend on
       the player ever having pressed E.

       Conservation is checked across the WHOLE map's resource nodes, not
       against one node this test happens to name: nearestNode() (#37) is a
       genuine "closest, full stop" search, so a worker spawned a few units
       off her nominal origin may rationally target whichever real node ends
       up nearest to her actual post-spawn position — that is correct
       behaviour, not a reason to assume she walks to one hand-picked id. */
    {
      const swarm = workersMod.createWorkerSwarm({ scene: fakeScene });
      const node = world.RESOURCE_NODES.find((n) => n.amount > 0);
      const sumBefore = world.RESOURCE_NODES.reduce((s, n) => s + n.amount, 0);
      const cache = { x: node.x + 60, y: 0, z: node.z + 40, items: {}, total: 0 }; // a real drop-shaped cache, far enough to walk
      const b = brood.createBroodState(6);
      b.workersAvailable = { worker: 1 };
      swarm.spawnFromBrood(b, node.x, node.z); // born right by the node
      const w = swarm.workers[0];

      const DT = 1 / 30;
      let deposited = false, harvestedKind = null;
      for (let i = 0; i < 6000 && !deposited; i++) {
        swarm.update(DT, i * DT, cache);
        if (w.forage.justTook) harvestedKind = w.forage.justTook.kind;
        if (cache.total > 0) deposited = true;
      }
      const sumAfter = world.RESOURCE_NODES.reduce((s, n) => s + n.amount, 0);
      check('a worker with a real node and a real cache deposits without any player input',
        deposited && cache.total === 1, `cache.total=${cache.total}`);
      check('...crediting the cache with whichever kind she actually harvested',
        harvestedKind !== null && cache.items[harvestedKind] === 1, JSON.stringify(cache.items));
      check('...and the map\'s total resource amount dropped by exactly the one unit she carried — conservation, end to end',
        sumBefore - sumAfter === 1, `${sumBefore} -> ${sumAfter}`);
      check('...she is empty-handed again, back in SEEK, ready for the next trip',
        w.forage.carrying === null && w.forage.state === forage.FORAGE_STATE.SEEK, JSON.stringify(w.forage));
      swarm.dispose();
    }

    antMeshMod._resetPoolsForTest();
  }

  /* ---- 7. castes at the ponte (#38): DIGGER exists, is chosen at lay time,
     is resolvable/drawable by construction (not by a hand-copied list), and
     does not forage. ------------------------------------------------------ */
  console.log('\ncastes at the ponte (#38) — DIGGER exists, is chosen at lay, and does not forage:');
  {
    const entMod = await import('../src/player/entities.js');
    const workersMod = await import('../src/player/workers.js');
    const antMeshMod = await import('../src/player/antMesh.js');

    check('DIGGER exists as a profile object, not a separate module',
      !!avatar.DIGGER && avatar.DIGGER.id === 'digger');
    check('collideRadius(DIGGER) is 1.62 (scale 1.08 x bodyR 1.5), not WORKER\'s 1.5 — piège #6',
      Math.abs(avatar.collideRadius(avatar.DIGGER) - 1.62) < 1e-9,
      avatar.collideRadius(avatar.DIGGER));

    /* The structural constraint the ticket names by number: "une caste est
       une ligne dans avatar.js, pas un fichier", i.e. nothing downstream may
       hand-copy the list of profiles. avatar.ALL_PROFILES is that one list;
       this loop walks IT (not [WORKER, FOUNDING_QUEEN, DIGGER] retyped here)
       so a FUTURE 4th caste added only to ALL_PROFILES is covered by this
       same test without editing it — the exact protection PROGRESS.md's
       tour 14 asks for against player/entities.js's PROFILES_BY_ID and
       player/antMesh.js's pool-sizing reduce. */
    {
      let allResolve = true, detail = '';
      for (const p of avatar.ALL_PROFILES) {
        const got = entMod.resolveProfile(p.id);
        if (got !== p) { allResolve = false; detail = `resolveProfile('${p.id}') !== avatar.js's own ${p.id} object`; break; }
      }
      check('resolveProfile() resolves EVERY profile in avatar.ALL_PROFILES by id (derived, not a hand-copied pair)',
        allResolve, detail);
    }

    /* antMesh.js's shared pools must be sized against avatar.ALL_PROFILES,
       not a stale [WORKER, FOUNDING_QUEEN] pair. Re-derive the same
       partCounts()/reduce arithmetic independently here (not imported from
       antMesh.js — same discipline as this file's own partsOf() above) and
       actually EXERCISE the capacity it predicts: fill the sphere pool with
       exactly that many instances of whichever profile needs the most, and
       confirm the pool holds exactly that many and no more (the existing
       "MAX_ANTS+1 throws" check above already proves the ceiling for
       WORKER; this proves the ceiling is the one avatar.ALL_PROFILES as a
       WHOLE predicts, DIGGER included in the walk, even though — honestly —
       DIGGER's own footprint happens to tie WORKER's this round and so
       cannot by itself distinguish "iterates ALL_PROFILES" from "iterates a
       stale pair": this is real, immediate protection for a caste whose
       footprint exceeds the others (which #38's own DIGGER does not), and
       real, immediate protection for resolveProfile() above (which DOES
       distinguish this round, since 'digger' is absent from any hard-coded
       WORKER/QUEEN-only pair). See the round's report for the negative test
       that confirms this honestly rather than assuming it. */
    {
      const partCountsOf = (p) => ({
        sphere: p.body.gaster.length + 5 + p.legs.length * 2,
        cyl: 6 + p.legs.length * 2,
      });
      const maxOf = (key) => avatar.ALL_PROFILES.reduce((m, p) => Math.max(m, partCountsOf(p)[key]), 0);
      const worstSphereProfile = avatar.ALL_PROFILES.reduce(
        (best, p) => (partCountsOf(p).sphere > partCountsOf(best).sphere ? p : best), avatar.ALL_PROFILES[0]);

      // Fill the sphere pool with EXACTLY MAX_ANTS ants of the profile that
      // (per this independent, not-imported recomputation over
      // avatar.ALL_PROFILES) needs the most spheres each — that must exactly
      // exhaust the pool if antMesh.js's own sizing agrees with this
      // computation, with room for not even one more sphere afterwards.
      antMeshMod._resetPoolsForTest();
      let threw = null, builtOne = 0;
      try {
        for (let i = 0; i < antMeshMod.MAX_ANTS; i++) { antMeshMod.buildAntMesh(worstSphereProfile); builtOne++; }
      } catch (e) { threw = e; }
      check(`MAX_ANTS (${antMeshMod.MAX_ANTS}) ants of the worst case in avatar.ALL_PROFILES (${worstSphereProfile.id}, ${maxOf('sphere')} spheres/ant) all build`,
        threw === null && builtOne === antMeshMod.MAX_ANTS, threw ? threw.message : builtOne);
      // Exactly one ant of ANY profile past that must overflow — proving the
      // pool was sized to this exact ceiling, not a larger one that would
      // silently hide a wrong (too-generous, coincidentally not caught)
      // computation elsewhere.
      check('...and the sphere pool is then exactly full: one more ant of ANY profile overflows it',
        (() => {
          try { antMeshMod.buildAntMesh(avatar.ALL_PROFILES[0]); return false; }
          catch (e) { return /instanced pool exhausted/.test(e.message); }
        })());
      antMeshMod._resetPoolsForTest();
    }

    /* ---- brood.js: caste travels from lay() through update() into
       workersAvailable, per caste, never blended into one bucket. -------- */
    {
      const fakeCache = (total, items) => ({ x: 0, y: 0, z: 0, items, total });
      const FOUNDED = { founded: true, inChamber: true };
      const b = brood.createBroodState(10);
      const cache = fakeCache(brood.EGG_COST * 10, { graine: brood.EGG_COST * 10 });

      const rw1 = brood.lay(b, cache, FOUNDED, avatar.WORKER.id);
      const rd1 = brood.lay(b, cache, FOUNDED, avatar.DIGGER.id);
      const rw2 = brood.lay(b, cache, FOUNDED); // no 4th arg: defaults to 'worker'
      check('lay() accepts an explicit casteId for worker and digger, and defaults to worker',
        rw1.ok && rd1.ok && rw2.ok, JSON.stringify([rw1, rd1, rw2]));

      const hatched = brood.update(b, brood.EGG_INCUBATION_SECONDS + 0.01);
      check('all 3 clutches (2 worker, 1 digger) hatch together', hatched === 3, hatched);
      check('workersAvailable credits the WORKER caste with exactly 2, not 1 or 3',
        brood.workersAvailableOf(b, avatar.WORKER.id) === 2, JSON.stringify(b.workersAvailable));
      check('...and the DIGGER caste with exactly 1, kept in its own bucket',
        brood.workersAvailableOf(b, avatar.DIGGER.id) === 1, JSON.stringify(b.workersAvailable));
      check('totalWorkersAvailable() sums across both castes', brood.totalWorkersAvailable(b) === 3, brood.totalWorkersAvailable(b));

      const drained = brood.drainHatched(b);
      check('drainHatched() hands back the exact per-caste map',
        drained[avatar.WORKER.id] === 2 && drained[avatar.DIGGER.id] === 1, JSON.stringify(drained));
      check('...and resets workersAvailable to empty, atomically',
        Object.keys(b.workersAvailable).length === 0, JSON.stringify(b.workersAvailable));
    }

    /* ---- end to end, THE ticket's own conservation criterion: N lays of a
       given caste produce exactly N bodies of that caste in the swarm —
       never N+1, never N-1, and never bled into the other caste's count. -- */
    {
      antMeshMod._resetPoolsForTest();
      const fakeScene = { add() {} };
      const swarm = workersMod.createWorkerSwarm({ scene: fakeScene });
      const fakeCache = (total, items) => ({ x: 0, y: 0, z: 0, items, total });
      const FOUNDED = { founded: true, inChamber: true };
      const N_WORKER = 4, N_DIGGER = 3;
      const b = brood.createBroodState(N_WORKER + N_DIGGER);
      const cache = fakeCache(brood.EGG_COST * (N_WORKER + N_DIGGER), { graine: brood.EGG_COST * (N_WORKER + N_DIGGER) });
      for (let i = 0; i < N_WORKER; i++) brood.lay(b, cache, FOUNDED, avatar.WORKER.id);
      for (let i = 0; i < N_DIGGER; i++) brood.lay(b, cache, FOUNDED, avatar.DIGGER.id);
      brood.update(b, brood.EGG_INCUBATION_SECONDS + 0.01); // all 7 hatch together, laid on the same tick

      const spawned = swarm.spawnFromBrood(b, 0, 0);
      check(`${N_WORKER} worker lays + ${N_DIGGER} digger lays spawn exactly ${N_WORKER + N_DIGGER} bodies, not ${N_WORKER + N_DIGGER + 1} or ${N_WORKER + N_DIGGER - 1}`,
        spawned === N_WORKER + N_DIGGER, spawned);
      const pop = swarm.countByCaste();
      check(`...exactly ${N_WORKER} of them WORKER`, pop[avatar.WORKER.id] === N_WORKER, JSON.stringify(pop));
      check(`...exactly ${N_DIGGER} of them DIGGER, never blended with the worker count`,
        pop[avatar.DIGGER.id] === N_DIGGER, JSON.stringify(pop));

      // A second drain before the next hatch spawns nothing more, same
      // idempotence guarantee as #37's own test, now proven across two castes.
      const spawnedAgain = swarm.spawnFromBrood(b, 0, 0);
      check('draining again before the next hatch spawns nothing, for either caste',
        spawnedAgain === 0 && swarm.count() === N_WORKER + N_DIGGER, spawnedAgain);

      /* Every DIGGER-caste entity is indexed at DIGGER's own collideRadius
         (1.62), not WORKER's (1.5) — the piège #6 the ticket names by value,
         checked against the real spatial index rather than trusted. */
      check('every spawned digger is indexed at DIGGER\'s own collideRadius, not WORKER\'s 1.5',
        swarm.workers.filter((w) => w.caste === avatar.DIGGER.id).every((w) => {
          const hit = world.worldIndex.nearest(w.entity.x, w.entity.z, 0.01, 'ant');
          return hit && hit.id === w.entity.id && Math.abs(hit.extent - avatar.collideRadius(avatar.DIGGER)) < 1e-9;
        }));

      /* #38's own arbitrage: a digger does not forage. Every digger entity is
         NOT controlled and carries a patrol goal, never forage.js state. */
      check('every digger entity is controlled:false with a patrol goal, never controlled:true',
        swarm.workers.filter((w) => w.caste === avatar.DIGGER.id)
          .every((w) => w.entity.controlled === false && w.entity.goal && w.entity.goal.type === 'patrol' && w.forage === null));
      check('every worker entity is still controlled:true with forage.js state, unchanged by #38',
        swarm.workers.filter((w) => w.caste === avatar.WORKER.id)
          .every((w) => w.entity.controlled === true && w.forage !== null));

      /* Run the swarm for real, next to an actual resource node and a real
         cache, and confirm a digger never touches either: no unit taken off
         the node, no credit to the cache, attributable to her. A worker in
         the same swarm is left free to forage normally (not stubbed out),
         so this proves "diggers don't forage" rather than "nothing forages
         this tick". */
      const node = world.RESOURCE_NODES.find((n) => n.amount > 0);
      const before = node.amount;
      const cache2 = { x: node.x, y: 0, z: node.z, items: {}, total: 0 };
      // put every digger right on top of the node — if she were foraging at
      // all, standing on a node is exactly when it would show
      for (const w of swarm.workers) if (w.caste === avatar.DIGGER.id) { w.entity.x = node.x; w.entity.z = node.z; }
      const DT = 1 / 30;
      for (let i = 0; i < 300; i++) swarm.update(DT, i * DT, cache2);
      check('a digger standing on a resource node never harvests it (no forage state to drive her there)',
        node.amount === before, `${before} -> ${node.amount}`);
      // A digger never leaves forage.js's SEEK state because she never
      // enters it: w.forage is null for her for her whole life (checked
      // above), so there is no state to have moved. This one instead checks
      // the flip side directly: standing on the node did not even nudge her
      // out of the patrol goal she was given at spawn (goal.target still one
      // of 'a'/'b' — goalWish() only ever sets these two).
      check('...and her own patrol goal is untouched by standing on a node (never switched to a forage state)',
        swarm.workers.filter((w) => w.caste === avatar.DIGGER.id)
          .every((w) => w.entity.goal.type === 'patrol' && ['a', 'b'].includes(w.entity.goal.target)));

      swarm.dispose();
      antMeshMod._resetPoolsForTest();
    }
  }
}

console.log(`\n${pass} passed, ${fail} failed.`);
if (fail > 0) process.exit(1);

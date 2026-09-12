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
    check('hatching credits workersAvailable', b.workersAvailable === cap, b.workersAvailable);
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
}

console.log(`\n${pass} passed, ${fail} failed.`);
if (fail > 0) process.exit(1);

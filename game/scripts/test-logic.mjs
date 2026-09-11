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

console.log(`\n${pass} passed, ${fail} failed.`);
if (fail > 0) process.exit(1);

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

console.log(`\n${pass} passed, ${fail} failed.`);
if (fail > 0) process.exit(1);

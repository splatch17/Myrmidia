// Live verification for #27 (and its predecessors #4/#16/#17/#21): drives the
// real keyboard input pipeline (no internal-state bypass) on the built game
// and walks a full tour — queen's chamber -> each of the three side rooms and
// back out again -> out onto the lawn to the tree -> home — screenshotting
// every stop and asserting three things the code alone cannot tell us:
//
//   1. every room is reachable AND leaveable (the exit criterion for #17:
//      "reached and left with no blocking, screenshots to back it up");
//   2. the ant never ends up inside a rock / mushroom cap / grass stem /
//      the tree trunk (#4/#16), measured through window.__decorPenetration
//      against the very radii player/decorCollision.js resolves against;
//   3. the camera keeps a usable boom in the small side rooms (#27.4) —
//      logged per stop, and eyeballed on the screenshots, which is what
//      caught the previous "reached the room, camera glued to the ant's
//      back inside a resin pile" pass.
//
// Run after `npm run build` — this serves the built dist/ via `vite preview`
// so what's tested is exactly what would ship, not the dev server.
//
// Usage: node scripts/verify-room-access.mjs [outDir]

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gameDir = path.resolve(__dirname, '..');
const outDir = process.argv[2] || path.join(gameDir, '_verify-shots');
fs.mkdirSync(outDir, { recursive: true });

const PORT = 4173;
const URL = `http://localhost:${PORT}/`;

// world/tree.js's TREE.{x,z} and its ground collider radius (treeTrunkRadius(0)
// * 0.88, see player/decorCollision.js). Hard-coded here only because the
// debug hooks in main.js don't publish the tree; the assertion below is a
// range, so it fails loudly if either number drifts.
const TREE_XZ = [-85, 95];
const TREE_STOP_MIN = 16, TREE_STOP_MAX = 26;

function waitForServer(url, timeoutMs) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = async () => {
      try {
        const res = await fetch(url);
        if (res.ok) return resolve();
      } catch {
        // not up yet
      }
      if (Date.now() - start > timeoutMs) return reject(new Error('preview server did not come up in time'));
      setTimeout(tick, 300);
    };
    tick();
  });
}

async function main() {
  console.log('Starting `vite preview`...');
  const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
    cwd: gameDir, shell: true, stdio: 'pipe',
  });
  let serverLog = '';
  server.stdout.on('data', (d) => { serverLog += d.toString(); });
  server.stderr.on('data', (d) => { serverLog += d.toString(); });

  try {
    await waitForServer(URL, 20000);
  } catch (e) {
    console.error(serverLog);
    throw e;
  }
  console.log('Preview server up at', URL);

  // Headless Chromium defaults to a software GL rasterizer, which renders
  // this scene slowly enough (a handful of fps) that the main loop's dt cap
  // (main.js, "Capped like the old prototype's frame()") makes in-game time
  // crawl relative to wall-clock — not a gameplay bug, just this environment
  // being GPU-starved. Force ANGLE/D3D11 so the test runs at a realistic
  // frame rate instead of needing multi-minute timeouts to compensate.
  const browser = await chromium.launch({
    args: ['--use-gl=angle', '--use-angle=d3d11', '--ignore-gpu-blocklist', '--enable-gpu-rasterization'],
  });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const consoleErrors = [];
  page.on('console', (msg) => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', (err) => { consoleErrors.push('pageerror: ' + err.message); });

  await page.goto(URL);
  await page.waitForFunction(() => window.__ant && window.__rooms, null, { timeout: 15000 });
  console.log('App loaded, __ant/__rooms present.');

  // give the player controller's first couple of frames a moment (camera
  // priming, first groundY reads) before we start driving it
  await page.waitForTimeout(400);

  const rooms = await page.evaluate(() => {
    const r = window.__rooms;
    return Object.fromEntries(Object.entries(r).map(([k, v]) => [k, {
      center: v.center, origin: v.origin, dir: v.dir, uEnd: v.uEnd, uMax: v.uMax,
    }]));
  });
  const spawn0 = await page.evaluate(() => ({ x: window.__ant.x, z: window.__ant.z }));
  console.log('Spawn (queen\'s chamber):', spawn0);

  // window.__ant is a flat {x,y,z,yaw,climb} record (no .position) — see
  // main.js's debug-hook comment.
  async function readAnt() {
    return page.evaluate(() => {
      const a = window.__ant, c = window.__camera;
      const dCam = Math.hypot(c.position.x - a.x, c.position.y - a.y, c.position.z - a.z);
      return {
        x: a.x, y: a.y, z: a.z, yaw: a.yaw,
        dCam,
        camY: c.position.y,
        pen: window.__decorPenetration ? window.__decorPenetration(a.x, a.z) : -1,
      };
    });
  }

  const held = new Set();
  async function setKeys(next) {
    for (const k of held) if (!next.has(k)) { await page.keyboard.up(k); held.delete(k); }
    for (const k of next) if (!held.has(k)) { await page.keyboard.down(k); held.add(k); }
  }
  async function releaseAll() { await setKeys(new Set()); }

  function angDiff(a, b) {
    let d = (b - a) % (Math.PI * 2);
    if (d > Math.PI) d -= Math.PI * 2;
    if (d < -Math.PI) d += Math.PI * 2;
    return d;
  }

  let worstPen = 0, worstPenAt = null;
  let minCamDist = Infinity, minCamAt = null;
  function sample(a, label) {
    if (a.pen > worstPen) { worstPen = a.pen; worstPenAt = `${label} (${a.x.toFixed(1)},${a.z.toFixed(1)})`; }
    if (a.dCam < minCamDist) { minCamDist = a.dCam; minCamAt = `${label} (${a.x.toFixed(1)},${a.z.toFixed(1)})`; }
  }

  // Simple P-steering: hold forward always, add a strafe key when the
  // bearing to the target and the ant's current yaw disagree by enough to
  // matter. This drives the *real* WASD input path (input.js -> movement.js
  // -> decorCollision -> containUnderground), not a synthetic teleport, so
  // it's the same pipeline a human playing with a keyboard would exercise.
  async function walkTo(target, { arriveDist = 3.5, timeoutMs = 45000, label = '' } = {}) {
    const start = Date.now();
    let last = await readAnt();
    let lastMoveT = Date.now(), lastPos = last;
    let unsticks = 0;
    while (Date.now() - start < timeoutMs) {
      const a = await readAnt();
      sample(a, label);
      const dx = target[0] - a.x, dz = target[2] - a.z;
      const dist = Math.hypot(dx, dz);
      if (dist < arriveDist) {
        await releaseAll();
        console.log(`  [${label}] arrived, dist=${dist.toFixed(2)} pos=(${a.x.toFixed(1)},${a.z.toFixed(1)}) cam=${a.dCam.toFixed(1)} in ${((Date.now() - start) / 1000).toFixed(1)}s${unsticks ? ` (${unsticks} back-off)` : ''}`);
        return { ok: true, pos: a, dist, unsticks };
      }
      const bearing = Math.atan2(dx, dz);
      const diff = angDiff(a.yaw, bearing);
      const keys = new Set();
      // Empirically (not assumed): with this game's camRight = cross(camFwd,
      // up) convention (#15), holding D decreases ant.yaw and A increases it
      // at the default camYaw=0 spawn orientation. So: yaw needs to increase
      // -> A. Confirmed by this script actually converging.
      if (diff > 0.08) keys.add('KeyA');
      else if (diff < -0.08) keys.add('KeyD');
      // Large heading changes (e.g. doubling back toward the door after
      // reaching a room): pivot in place first rather than holding W while
      // turning — ant.yaw turns at a fixed damped rate (movement.js), so
      // walking forward throughout a near-180 deg turn arcs the ant well off
      // the straight line and, in a room, can walk it into a side wall. A
      // real player naturally does the same thing (look, then walk).
      if (Math.abs(diff) < 0.9) keys.add('KeyW');
      await setKeys(keys);
      await page.waitForTimeout(80);

      // stall detection: if we haven't made any net progress in 4s, something
      // is genuinely blocking movement (the real #17 failure mode) — bail out
      // with a screenshot rather than hanging for the full timeout.
      const moved = Math.hypot(a.x - lastPos.x, a.z - lastPos.z);
      if (moved > 0.3) { lastMoveT = Date.now(); lastPos = a; }
      else if (Date.now() - lastMoveT > 3000) {
        // Wedged against something. A player does not stand there pushing
        // into it: they back off and try a different line. Two of those, then
        // we call it genuinely blocked — which is the failure #17 is about.
        if (unsticks < 3) {
          unsticks++;
          console.log(`  [${label}] wedged at (${a.x.toFixed(1)},${a.z.toFixed(1)}), backing off (${unsticks})`);
          await setKeys(new Set(['KeyS']));
          await page.waitForTimeout(700);
          await setKeys(new Set([unsticks % 2 ? 'KeyA' : 'KeyD', 'KeyS']));
          await page.waitForTimeout(600);
          await releaseAll();
          lastMoveT = Date.now();
          lastPos = await readAnt();
          continue;
        }
        await releaseAll();
        console.log(`  [${label}] STALLED at (${a.x.toFixed(1)},${a.z.toFixed(1)}), dist remaining=${dist.toFixed(2)}`);
        await dumpSurroundings(a, label);
        return { ok: false, pos: a, dist, stalled: true };
      }
      last = a;
    }
    await releaseAll();
    console.log(`  [${label}] TIMEOUT at (${last.x.toFixed(1)},${last.z.toFixed(1)})`);
    return { ok: false, pos: last, dist: Math.hypot(target[0] - last.x, target[2] - last.z) };
  }

  /* On a genuine block, log what is actually around the ant: which of 16
     compass directions are free at 2 and 4 units, measured with the same
     collider radii the controller uses plus the containment clamp. A ring of
     blocked directions is a dead end; a single blocked arc is just an
     obstacle the steering could not get round. */
  async function dumpSurroundings(a, label) {
    const info = await page.evaluate(([x, z]) => {
      const pen = window.__decorPenetration, contain = window.__contain;
      const free = [];
      for (let i = 0; i < 16; i++) {
        const th = i * Math.PI / 8;
        const row = [];
        for (const d of [2, 4]) {
          const px = x + Math.cos(th) * d, pz = z + Math.sin(th) * d;
          const c = pz < 0 ? contain(px, pz) : [px, pz];
          const contained = Math.hypot(c[0] - px, c[1] - pz) < 0.05;
          row.push(contained && pen(px, pz) <= 0 ? 'o' : '.');
        }
        free.push(row.join(''));
      }
      return { pen: pen(x, z), free: free.join(' ') };
    }, [a.x, a.z]);
    console.log(`  [${label}] penetration=${info.pen.toFixed(2)} ring(2u,4u per 22.5deg)= ${info.free}`);
  }

  async function shot(name) {
    const p = path.join(outDir, `${name}.png`);
    await page.screenshot({ path: p });
    console.log(`  screenshot: ${p}`);
  }

  // Camera orbit via a real pointer drag on the canvas (input.js's
  // pointerdown/move/up path): 0.006 rad per pixel, so ~524 px is a half turn.
  async function orbit(pixels) {
    await page.mouse.move(640, 420);
    await page.mouse.down();
    const steps = 12;
    for (let i = 1; i <= steps; i++) {
      await page.mouse.move(640 + (pixels * i) / steps, 420);
      await page.waitForTimeout(30);
    }
    await page.mouse.up();
    await page.waitForTimeout(700); // let the damped rig settle on the new side
  }

  const failures = [];
  function check(cond, msg) {
    if (!cond) { failures.push(msg); console.log('  FAIL: ' + msg); }
  }

  /* ---- the tour ---------------------------------------------------------
     Ordered along the gallery as it runs out from the queen's chamber
     (z=-140): brood (-120), granary (-70), midden (-40), then the mouth, the
     lawn and the tree, then all the way home. Every room is entered from the
     gallery through its own doorway and left the same way, which is the
     round trip #17 is actually about. */
  const results = {};
  for (const name of ['brood', 'granary', 'midden']) {
    const r = rooms[name];
    // a point in the main gallery just outside this room's door: the branch
    // origin sits *in* the gallery wall, so step 5 units back down the
    // branch's own direction to stand in the tube facing the opening.
    const galleryWp = [r.origin[0] - r.dir[0] * 5, 0, r.origin[2]];

    console.log(`\n--- ${name}: gallery approach ---`);
    const approach = await walkTo(galleryWp, { label: `${name}:approach`, arriveDist: 4, timeoutMs: 60000 });
    check(approach.ok, `${name}: could not reach the gallery spot facing the door`);

    console.log(`--- ${name}: entering ---`);
    const enter = await walkTo(r.center, { label: `${name}:enter`, arriveDist: 4, timeoutMs: 45000 });
    check(enter.ok, `${name}: could not walk into the room`);
    const at = await readAnt();
    console.log(`  in-room camera boom: ${at.dCam.toFixed(1)} units`);
    await shot(`room-${name}${enter.ok ? '' : '-FAILED'}`);
    await orbit(524);
    await shot(`room-${name}-orbit180`);
    const orbited = await readAnt();
    console.log(`  after 180 orbit: camera boom ${orbited.dCam.toFixed(1)} units`);
    check(at.dCam > 7, `${name}: camera collapsed onto the ant (${at.dCam.toFixed(1)} units) on entry`);
    check(orbited.dCam > 6, `${name}: camera collapsed onto the ant (${orbited.dCam.toFixed(1)} units) after orbiting`);

    console.log(`--- ${name}: leaving ---`);
    const door = await walkTo(r.origin, { label: `${name}:door`, arriveDist: 5, timeoutMs: 40000 });
    check(door.ok, `${name}: could not walk back out to the doorway`);
    await shot(`door-${name}${door.ok ? '' : '-FAILED'}`);
    const out = await walkTo(galleryWp, { label: `${name}:out`, arriveDist: 5, timeoutMs: 30000 });
    check(out.ok, `${name}: could not get back into the gallery`);

    results[name] = { enter: enter.ok, leave: door.ok && out.ok, camBoom: at.dCam };
  }

  /* ---- the queen: camera must slide around her, not through her ---------- */
  console.log('\n--- queen: orbiting the dais ---');
  const queenSpot = [25, 0, -124];
  const q = await walkTo(queenSpot, { label: 'queen', arriveDist: 5, timeoutMs: 60000 });
  check(q.ok, 'queen: could not walk up to the dais');
  await shot('queen-0');
  for (let i = 1; i <= 3; i++) {
    await orbit(350);
    await shot(`queen-orbit-${i}`);
  }

  /* ---- outdoors: the lawn, and the tree trunk that used to be walk-through */
  console.log('\n--- lawn: out of the mouth ---');
  const mouth = await walkTo([0, 0, 20], { label: 'mouth', arriveDist: 6, timeoutMs: 60000 });
  check(mouth.ok, 'lawn: could not walk out of the gallery mouth');
  await shot('lawn-mouth');

  console.log('--- tree: walking into the trunk (#16) ---');
  const tree = await walkTo([TREE_XZ[0], 0, TREE_XZ[1]], { label: 'tree', arriveDist: 4, timeoutMs: 90000 });
  const treeD = Math.hypot(tree.pos.x - TREE_XZ[0], tree.pos.z - TREE_XZ[1]);
  console.log(`  stopped ${treeD.toFixed(1)} units from the trunk axis (expected ${TREE_STOP_MIN}-${TREE_STOP_MAX})`);
  await shot('tree-trunk');
  check(!tree.ok, 'tree: the ant walked to the trunk axis — the trunk is still walk-through');
  check(treeD > TREE_STOP_MIN && treeD < TREE_STOP_MAX,
    `tree: stopped ${treeD.toFixed(1)} units out, expected the bark at ${TREE_STOP_MIN}-${TREE_STOP_MAX}`);

  /* ---- and all the way home ---------------------------------------------- */
  console.log('\n--- home: back to the queen\'s chamber ---');
  const back = await walkTo([0, 0, -20], { label: 'home:mouth', arriveDist: 8, timeoutMs: 90000 });
  check(back.ok, 'home: could not get back into the gallery from the lawn');
  const home = await walkTo([spawn0.x, 0, spawn0.z], { label: 'home:chamber', arriveDist: 8, timeoutMs: 90000 });
  check(home.ok, 'home: could not walk back to the queen\'s chamber');
  await shot('home-chamber');

  console.log('\nWorst decor penetration over the whole tour:', worstPen.toFixed(3), worstPenAt || '');
  check(worstPen < 1.0, `decor penetration ${worstPen.toFixed(2)} at ${worstPenAt} — the ant is standing inside a collider`);
  console.log('Tightest camera boom over the whole tour:', minCamDist.toFixed(1), minCamAt || '');
  console.log('Console errors observed:', consoleErrors.length ? consoleErrors : '(none)');
  console.log('Results:', results);

  await browser.close();
  server.kill();

  if (consoleErrors.length) failures.push(`${consoleErrors.length} console error(s)`);
  if (failures.length) {
    console.log('\nFAILURES:\n - ' + failures.join('\n - '));
    process.exitCode = 1;
  } else {
    console.log('\nAll checks passed.');
  }
}

main().catch((e) => { console.error(e); process.exitCode = 1; });

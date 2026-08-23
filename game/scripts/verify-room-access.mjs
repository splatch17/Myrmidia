// Live verification for #21: drives the real keyboard input pipeline (no
// internal-state bypass) to walk the ant from spawn to each of the three
// underground side rooms, and screenshots the result. Run after `npm run
// build` — this serves the built dist/ via `vite preview` so what's tested
// is exactly what would ship, not the dev server.
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
  await page.waitForTimeout(300);

  const rooms = await page.evaluate(() => {
    const r = window.__rooms;
    return Object.fromEntries(Object.entries(r).map(([k, v]) => [k, { center: v.center, origin: v.origin }]));
  });
  console.log('Room centres:', rooms);

  async function readAnt() {
    return page.evaluate(() => {
      const a = window.__ant;
      return { x: a.x, y: a.y, z: a.z, yaw: a.yaw };
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

  // Simple P-steering: hold forward always, add a strafe key when the
  // bearing to the target and the ant's current yaw disagree by enough to
  // matter. This drives the *real* WASD input path (input.js -> movement.js
  // -> containUnderground), not a synthetic teleport, so it's the same
  // pipeline a human playing with a keyboard would exercise.
  async function walkTo(target, { arriveDist = 3.5, timeoutMs = 45000, label = '' } = {}) {
    const start = Date.now();
    let last = await readAnt();
    let lastMoveT = Date.now(), lastPos = last;
    while (Date.now() - start < timeoutMs) {
      const a = await readAnt();
      const dx = target[0] - a.x, dz = target[2] - a.z;
      const dist = Math.hypot(dx, dz);
      if (dist < arriveDist) {
        await releaseAll();
        console.log(`  [${label}] arrived, dist=${dist.toFixed(2)} pos=(${a.x.toFixed(1)},${a.z.toFixed(1)}) in ${((Date.now() - start) / 1000).toFixed(1)}s`);
        return { ok: true, pos: a };
      }
      const bearing = Math.atan2(dx, dz);
      const diff = angDiff(a.yaw, bearing);
      const keys = new Set();
      // Empirically (not assumed): with this game's camRight = cross(camFwd,
      // up) convention (#15), holding D decreases ant.yaw and A increases it
      // at the default camYaw=0 spawn orientation — confirmed below by the
      // fixed script actually converging. So: yaw needs to increase -> A.
      if (diff > 0.08) keys.add('KeyA');
      else if (diff < -0.08) keys.add('KeyD');
      // Large heading changes (e.g. doubling back toward the mouth after
      // reaching a room): pivot in place first rather than holding W while
      // turning — ant.yaw turns at a fixed damped rate (movement.js), so
      // walking forward throughout a near-180 deg turn arcs the ant well off
      // the straight line and, in a room, can walk it into a side wall. A
      // real player naturally does the same thing (look, then walk).
      if (Math.abs(diff) < 0.9) keys.add('KeyW');
      await setKeys(keys);
      await page.waitForTimeout(80);

      // stall detection: if we haven't made any net progress in 4s, something
      // is genuinely blocking movement (the real #21 failure mode) — bail out
      // with a screenshot rather than hanging for the full timeout.
      const moved = Math.hypot(a.x - lastPos.x, a.z - lastPos.z);
      if (moved > 0.3) { lastMoveT = Date.now(); lastPos = a; }
      else if (Date.now() - lastMoveT > 4000) {
        await releaseAll();
        console.log(`  [${label}] STALLED at (${a.x.toFixed(1)},${a.z.toFixed(1)}), dist remaining=${dist.toFixed(2)}`);
        return { ok: false, pos: a };
      }
      last = a;
    }
    await releaseAll();
    console.log(`  [${label}] TIMEOUT at (${last.x.toFixed(1)},${last.z.toFixed(1)})`);
    return { ok: false, pos: last };
  }

  const results = {};
  for (const name of ['brood', 'granary', 'midden']) {
    console.log(`\n--- walking to ${name} ---`);
    const c = rooms[name].center;
    const res = await walkTo(c, { label: name });
    results[name] = res;
    const shotPath = path.join(outDir, `room-${name}-${res.ok ? 'ok' : 'FAILED'}.png`);
    await page.screenshot({ path: shotPath });
    console.log(`  screenshot: ${shotPath}`);
    // Return toward the tunnel mouth via the room's own doorway (origin),
    // not a direct beeline — a beeline from deep inside a room's rounded
    // back cap can point straight at solid wall (same reasoning as any
    // tunnel-shaped level: you leave via the door you came in, not through
    // the wall), and this test harness's single-bearing steering has no
    // pathfinding to route around that on its own the way a human eyeing
    // the exit would. Same idea as the brood/granary/midden waypoints below.
    if (res.ok) {
      await walkTo(rooms[name].origin, { label: `${name}->doorway`, arriveDist: 5, timeoutMs: 25000 });
      await walkTo([0, 0, -10], { label: `${name}->mouth`, arriveDist: 6, timeoutMs: 30000 });
    }
  }

  console.log('\nConsole errors observed:', consoleErrors.length ? consoleErrors : '(none)');
  console.log('\nResults:', results);

  await browser.close();
  server.kill();

  const allOk = Object.values(results).every((r) => r.ok);
  if (!allOk || consoleErrors.length) process.exitCode = 1;
}

main().catch((e) => { console.error(e); process.exitCode = 1; });

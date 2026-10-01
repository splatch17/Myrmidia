// Live verification for #70 ("the ants' legs stretch"): MEASURES the two bone
// lengths of every leg every frame across a walk, a run, a turn and a slope,
// instead of eyeballing a screenshot. Also captures 3/4-view stills at each
// of walk/run/ramp so a human can *look* at the result — the ticket asks for
// both, and neither substitutes for the other (a fixed-length bone can still
// look like a stiff, unreadable gait, which no assertion here would catch).
//
// window.__legBones() (player/index.js) reports, per leg, the ACTUAL bone
// lengths antMesh.js would draw right now (thigh = hip-to-knee, shinNew =
// knee-to-the-solver's-clamped-foot) *and* what the pre-#70 code would have
// drawn instead (shinOld = knee-to-the-raw-unclamped-gait-target) — both
// computed off the exact same hip/knee/target, from one running build. That
// is what lets this one run report a real "before" number without checking
// out the old code a second time.
//
// Real keys throughout (page.keyboard.down/up), same as every other harness
// here — a bypass that pokes ant.speed or ant.x would prove nothing about the
// controller a player actually drives.
//
// Chromium MUST run with ANGLE/D3D11 (ballistics in CONTRIBUTING.md: headless
// Chromium's software rasterizer runs this scene at a handful of fps, and
// main.js's dt cap then makes in-game time crawl against wall-clock).
//
// Usage: node scripts/verify-legs-70.mjs [outDir]

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gameDir = path.resolve(__dirname, '..');
const outDir = process.argv[2] || path.join(gameDir, '_legs-shots');
fs.mkdirSync(outDir, { recursive: true });

const PORT = 4199; // the other harnesses' ports are taken (see CONTRIBUTING.md)
const URL = `http://localhost:${PORT}/`;
const EPS = 0.02; // "small": ~0.3% of the queen's shortest bone (5.94 units)

function waitForServer(url, timeoutMs) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = async () => {
      try { const res = await fetch(url); if (res.ok) return resolve(); } catch { /* not up */ }
      if (Date.now() - start > timeoutMs) return reject(new Error('preview server did not come up in time'));
      setTimeout(tick, 300);
    };
    tick();
  });
}

async function main() {
  const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
    cwd: gameDir, shell: true, stdio: 'pipe',
  });
  let serverLog = '';
  server.stdout.on('data', (d) => { serverLog += d.toString(); });
  server.stderr.on('data', (d) => { serverLog += d.toString(); });
  try { await waitForServer(URL, 25000); } catch (e) { console.error(serverLog); throw e; }
  console.log('Preview server up at', URL);

  const browser = await chromium.launch({
    args: ['--use-gl=angle', '--use-angle=d3d11', '--ignore-gpu-blocklist', '--enable-gpu-rasterization'],
  });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const consoleErrors = [];
  page.on('console', (msg) => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', (err) => { consoleErrors.push('pageerror: ' + err.message); });

  await page.goto(URL);
  await page.waitForFunction(() => window.__ant && window.__legBones && window.__renderView, null, { timeout: 20000 });
  await page.waitForTimeout(600);

  const failures = [];
  function check(cond, msg) { if (!cond) { failures.push(msg); console.log('  FAIL: ' + msg); } else console.log('  ok: ' + msg); }

  const held = new Set();
  async function setKeys(next) {
    for (const k of held) if (!next.has(k)) { await page.keyboard.up(k); held.delete(k); }
    for (const k of next) if (!held.has(k)) { await page.keyboard.down(k); held.add(k); }
  }
  const releaseAll = () => setKeys(new Set());

  const readAnt = () => page.evaluate(() => {
    const a = window.__ant;
    return { x: a.x, y: a.y, z: a.z, yaw: a.yaw, speed: a.speed };
  });

  /* Samples __legBones() back-to-back (no waitForTimeout between calls) for
     `ms` milliseconds while `keys` are held — this is the tightest polling
     round-trip Playwright can give us, which matters because the stretch
     this bug produces can be a handful of frames wide near the top of a
     swing. Folded into one running max/min per leg rather than kept as a
     full trace: a multi-second sample at this rate is thousands of points,
     and only the extremes are ever asked about. */
  async function sampleWhile(keys, ms, label) {
    await setKeys(new Set(keys));
    const start = Date.now();
    let n = 0;
    const agg = []; // per-leg { l1, l2, maxThighDev, maxShinOldDev, maxShinNewDev }
    let clampedFrames = 0, totalLegSamples = 0;
    while (Date.now() - start < ms) {
      const legs = await page.evaluate(() => window.__legBones());
      n++;
      let frameClamped = false;
      legs.forEach((L, i) => {
        if (!agg[i]) agg[i] = { l1: L.l1, l2: L.l2, maxThighDev: 0, maxShinOldDev: 0, maxShinNewDev: 0 };
        const a = agg[i];
        a.maxThighDev = Math.max(a.maxThighDev, Math.abs(L.thigh - L.l1));
        a.maxShinOldDev = Math.max(a.maxShinOldDev, Math.abs(L.shinOld - L.l2));
        a.maxShinNewDev = Math.max(a.maxShinNewDev, Math.abs(L.shinNew - L.l2));
        totalLegSamples++;
        if (Math.abs(L.shinOld - L.l2) > EPS) frameClamped = true;
      });
      if (frameClamped) clampedFrames++;
    }
    await releaseAll();
    const worstOld = Math.max(...agg.map((a) => a.maxShinOldDev));
    const worstNew = Math.max(...agg.map((a) => Math.max(a.maxThighDev, a.maxShinNewDev)));
    const clampPct = n ? (100 * clampedFrames / n) : 0;
    console.log(`  [${label}] ${n} samples over ${ms}ms — worst deviation: pre-fix(shinOld)=${worstOld.toFixed(3)}  post-fix=${worstNew.toFixed(3)}  (>=1 leg clamped in ${clampPct.toFixed(0)}% of frames)`);
    return { n, worstOld, worstNew, agg, clampPct };
  }

  async function shot3q(name, scene = 'open') {
    if (scene === 'ramp') {
      // __renderView()'s free camera, aimed off ant.yaw at a fixed offset,
      // twice landed outside the lit cut (world/excavation.js's ramp is a
      // narrow, curving tunnel, RAMP_TURN — a "3/4 behind" offset sized for
      // the open lawn puts the eye inside the outer wall of a turn, or above
      // the roof where nothing is lit). The game's OWN third-person rig
      // (camera.js's desiredCamera(), already running every frame) exists
      // precisely to stay inside whatever cavity the ant is in — so for this
      // one shot, the simplest correct camera is the live one already on
      // screen, not a second one built by hand.
      await page.screenshot({ path: path.join(outDir, `${name}.png`) });
      console.log('  screenshot:', name + '.png (live third-person rig)');
      return;
    }
    // A 3/4 hero angle off the queen's own facing, elevated — not the live
    // gameplay boom (a straight behind-and-above third-person rig, not a 3/4
    // read of the legs) and not a top-down (which flattens exactly the
    // silhouette this bug shows up in). Pausing the loop first so the frozen
    // pose in the shot is the one whose numbers were just measured, not a
    // later one.
    await page.evaluate(() => window.__renderer.setAnimationLoop(null));
    const a = await readAnt();
    const behind = a.yaw + 2.35; // ~135°: behind and to one side
    // Framed off the avatar's OWN third-person boom (avatar.js `cam.dist`,
    // 58 for the queen), not a literal picked by eye: her legs alone span
    // ~12 units, so a "26" that looked fine for a worker is a macro shot of
    // one knee on her. Scaling off the profile's own number is what keeps
    // this framing right if the body is re-tuned again (CONTRIBUTING.md's
    // most expensive recurring defect, again).
    const camCfg = await page.evaluate(() => window.__avatar.cam);
    const dist = camCfg.dist * 0.3, height = dist * 0.28;
    const eye = [a.x + Math.sin(behind) * dist, a.y + height, a.z + Math.cos(behind) * dist];
    const aim = [a.x, a.y + 3, a.z];
    await page.evaluate(([e, t]) => window.__renderView(e, t, 1.0), [eye, aim]);
    await page.screenshot({ path: path.join(outDir, `${name}.png`) });
    console.log('  screenshot:', name + '.png');
    await page.evaluate(() => window.__renderer.setAnimationLoop(window.__frame));
  }

  console.log('\n=== idle (baseline, no gait target ever off the rest pose) ===');
  const idle = await sampleWhile([], 800, 'idle');
  check(idle.worstNew < EPS, `idle: bones invariant within ${EPS} (got ${idle.worstNew.toFixed(4)})`);

  console.log('\n=== walk ===');
  const walk = await sampleWhile(['KeyW'], 3000, 'walk');
  await shot3q('01-walk');
  check(walk.worstNew < EPS, `walk: bones invariant within ${EPS} (got ${walk.worstNew.toFixed(4)})`);

  console.log('\n=== run (Shift) ===');
  const run = await sampleWhile(['KeyW', 'ShiftLeft'], 3000, 'run');
  await shot3q('02-run');
  check(run.worstNew < EPS, `run: bones invariant within ${EPS} (got ${run.worstNew.toFixed(4)})`);

  console.log('\n=== turn (running while steering) ===');
  const turnL = await sampleWhile(['KeyW', 'ShiftLeft', 'KeyA'], 2000, 'turn-left');
  const turnR = await sampleWhile(['KeyW', 'ShiftLeft', 'KeyD'], 2000, 'turn-right');
  const turnWorstOld = Math.max(turnL.worstOld, turnR.worstOld);
  const turnWorstNew = Math.max(turnL.worstNew, turnR.worstNew);
  check(turnWorstNew < EPS, `turn: bones invariant within ${EPS} (got ${turnWorstNew.toFixed(4)})`);

  /* ---- slope: found a nest close by and walk the real excavation ramp --- */
  console.log('\n=== slope (the excavation ramp) ===');
  const here = await readAnt();
  const site = await page.evaluate(([sx, sz]) => {
    let best = null;
    for (let a = 0; a < 48; a++) {
      const th = a / 48 * Math.PI * 2;
      for (let r = 20; r <= 70; r += 2) {
        const x = sx + Math.cos(th) * r, z = sz + Math.sin(th) * r;
        if (!window.__canFound(x, z).ok) continue;
        if (window.__decorPenetration(x, z, window.__antRadius + 6) > 0) continue;
        if (!best || r < best.r) best = { x, z, r };
      }
    }
    return best;
  }, [here.x, here.z]);
  check(!!site, 'there is foundable ground within a short walk (for the slope test)');

  let slope = { n: 0, worstOld: 0, worstNew: 0 };
  if (site) {
    const founded = await page.evaluate(([x, z]) => {
      const r = window.__foundNest(x, z);
      const before = window.__faces();
      const paid = before.map((f) => window.__payDig(f.id, f.needed));
      return { found: r, paid, nest: window.__nest(), path: window.__descentPath() };
    }, [site.x, site.z]);
    check(founded.found && founded.found.ok, 'a chamber was dug to reach a real ramp');
    const descent = founded.path || [];
    check(descent.length > 2, 'the world publishes a descent path (the slope) to walk');

    function angDiff(a, b) { let d = (b - a) % (Math.PI * 2); if (d > Math.PI) d -= Math.PI * 2; if (d < -Math.PI) d += Math.PI * 2; return d; }
    async function walkAndSample(target, ms, label) {
      const start = Date.now();
      const agg = [];
      let n = 0;
      while (Date.now() - start < ms) {
        const a = await readAnt();
        const dx = target[0] - a.x, dz = target[1] - a.z;
        const diff = angDiff(a.yaw, Math.atan2(dx, dz));
        const keys = new Set();
        if (diff > 0.08) keys.add('KeyA'); else if (diff < -0.08) keys.add('KeyD');
        if (Math.abs(diff) < 0.9) keys.add('KeyW');
        await setKeys(keys);
        const legs = await page.evaluate(() => window.__legBones());
        n++;
        legs.forEach((L, i) => {
          if (!agg[i]) agg[i] = { maxOld: 0, maxNew: 0 };
          agg[i].maxOld = Math.max(agg[i].maxOld, Math.abs(L.shinOld - L.l2));
          agg[i].maxNew = Math.max(agg[i].maxNew, Math.max(Math.abs(L.thigh - L.l1), Math.abs(L.shinNew - L.l2)));
        });
        if (Math.hypot(dx, dz) < 4) break;
      }
      await releaseAll();
      return { n, worstOld: Math.max(0, ...agg.map((a) => a.maxOld)), worstNew: Math.max(0, ...agg.map((a) => a.maxNew)) };
    }

    let acc = { n: 0, worstOld: 0, worstNew: 0 };
    for (let i = 2; i < descent.length; i += 2) {
      const r = await walkAndSample([descent[i].x, descent[i].z], 6000, `ramp u${i}`);
      acc.n += r.n; acc.worstOld = Math.max(acc.worstOld, r.worstOld); acc.worstNew = Math.max(acc.worstNew, r.worstNew);
    }
    slope = acc;
    await shot3q('03-ramp', 'ramp');
    console.log(`  [slope] ${slope.n} samples — worst deviation: pre-fix(shinOld)=${slope.worstOld.toFixed(3)}  post-fix=${slope.worstNew.toFixed(3)}`);
    check(slope.n > 20, 'the ramp walk actually produced samples');
    check(slope.worstNew < EPS, `slope: bones invariant within ${EPS} (got ${slope.worstNew.toFixed(4)})`);
  }

  /* ---- summary ------------------------------------------------------------ */
  const worstOldOverall = Math.max(idle.worstOld, walk.worstOld, run.worstOld, turnWorstOld, slope.worstOld);
  const worstNewOverall = Math.max(idle.worstNew, walk.worstNew, run.worstNew, turnWorstNew, slope.worstNew);
  console.log('\n=== summary ===');
  console.log(`  worst deviation BEFORE the fix (shinOld, reconstructed from raw gait targets): ${worstOldOverall.toFixed(4)} units`);
  console.log(`  worst deviation AFTER the fix  (what antMesh.js actually draws):               ${worstNewOverall.toFixed(4)} units`);

  console.log('\n=== console errors ===');
  console.log(consoleErrors.length ? consoleErrors.join('\n') : '  none');
  check(consoleErrors.length === 0, `no console errors (${consoleErrors.length})`);

  console.log('\n=== result ===');
  if (failures.length) { console.log(`${failures.length} failure(s):`); for (const f of failures) console.log('  - ' + f); }
  else console.log('all checks passed');
  console.log('screenshots in', outDir);

  await browser.close();
  server.kill();
  process.exit(failures.length ? 1 : 0);
}

main().catch((e) => { console.error(e); process.exit(2); });

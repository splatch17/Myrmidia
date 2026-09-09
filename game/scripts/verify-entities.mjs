// Live verification for #36 (the entity layer): several ants, one code path.
//
// Written and run BEFORE the implementation, on purpose. The run against the
// untouched build is the "before" column of the render numbers this ticket is
// judged on; the same script then runs again afterwards and the two reports
// are directly comparable because nothing about the measurement moved.
//
// What it checks, in order:
//   1. baseline  — how much the renderer costs with the one ant that exists
//                  today (draw calls, triangles, render ms, frame ms), and
//                  how many draw calls a single ant is actually worth
//                  (meshes under the 'ant' group + its outline shell).
//   2. spawn     — five NON-CONTROLLED ants on the lawn through the entity
//                  layer's own API, and they must actually travel: sampled
//                  positions over several seconds, each one has to have
//                  covered real ground and each one has to still be outside
//                  every decor collider.
//   3. one path  — the player must BE an entity in the same list, with the
//                  same shape, differing only by which brain feeds it. This
//                  is the point of the ticket, so it is asserted rather than
//                  argued: window.__ant has to be the ant record of the
//                  entity the layer calls the controlled one.
//   4. render    — the same fixed view, now with six ants, measured the same
//                  way; and, when the layer still offers the pre-#36
//                  one-mesh-per-part path, an A/B of both modes on the very
//                  same scene so the before/after is measured rather than
//                  extrapolated.
//   5. state     — the layer's serialize() must survive JSON round-trip with
//                  no THREE objects and no functions in it, and restore()
//                  must put the ants back where the snapshot had them. #36
//                  does not implement saving; it only refuses to make it
//                  impossible (etat-des-lieux.md §2d).
//
// Everything that spawns or reads goes through window.__entities, which is a
// debug hook over the real layer — not a bypass of it: the ants it creates
// are updated by the game's own frame loop, and the screenshots are of the
// game rendering them.
//
// Chromium MUST be launched with ANGLE/D3D11 (PROGRESS.md pitfall #2), or the
// numbers are the software rasteriser's and mean nothing.
//
// Run after `npm run build` — this serves dist/, so what is measured ships.
//
// Usage: node scripts/verify-entities.mjs [outDir]

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gameDir = path.resolve(__dirname, '..');
const outDir = process.argv[2] || path.join(gameDir, '_entity-shots');
fs.mkdirSync(outDir, { recursive: true });

const PORT = 4179;
const URL = `http://localhost:${PORT}/`;

// The queen spawns at (140, 170) facing -X (player/index.js). The fixed
// measurement view looks back at that patch of lawn from the south-east, high
// enough to hold the whole spawn ring in frame, so the same pixels are being
// paid for in every perf sample.
const VIEW_EYE = [196, 38, 214];
const VIEW_AIM = [138, 3, 166];

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
  await page.waitForFunction(() => window.__ant && window.__renderView && window.__scene, null, { timeout: 20000 });
  await page.waitForTimeout(1600); // textures decode before any shot

  const failures = [];
  const report = { when: new Date().toISOString() };
  function check(cond, msg) {
    if (!cond) { failures.push(msg); console.log('  FAIL: ' + msg); }
    else console.log('  ok: ' + msg);
  }
  async function shot(name) {
    await page.screenshot({ path: path.join(outDir, `${name}.png`) });
    console.log('  screenshot:', name + '.png');
  }

  const hasLayer = await page.evaluate(() => !!window.__entities);
  report.entityLayer = hasLayer;
  console.log(hasLayer ? 'Entity layer present.' : 'No entity layer — BASELINE run.');

  /* Render cost of one fixed view. The animation loop is stopped first
     (verify-terrain.mjs does the same) so the scene cannot move between
     samples: what is being compared is the cost of drawing the same picture.
     `frameMs` re-runs the game's own frame() instead, which includes the CPU
     side — movement, IK, pose writes — for every ant alive. */
  async function measure(label) {
    const m = await page.evaluate(async ([eye, aim]) => {
      const r = window.__renderer, s = window.__scene, c = window.__camera;
      const gl = r.getContext();
      r.setAnimationLoop(null);
      for (let i = 0; i < 10; i++) window.__renderView(eye, aim, 1.0);
      gl.finish();
      const runs = [];
      for (let b = 0; b < 16; b++) {
        const K = 12, t0 = performance.now();
        for (let i = 0; i < K; i++) r.render(s, c);
        gl.finish();
        runs.push((performance.now() - t0) / K);
      }
      runs.sort((a, b2) => a - b2);
      const draw = { calls: r.info.render.calls, tris: r.info.render.triangles, programs: r.info.programs.length };
      // full frame: game update + render, same view held by re-aiming first
      const fruns = [];
      for (let b = 0; b < 10; b++) {
        const K = 8, t0 = performance.now();
        for (let i = 0; i < K; i++) window.__frame();
        gl.finish();
        fruns.push((performance.now() - t0) / K);
      }
      fruns.sort((a, b2) => a - b2);
      r.setAnimationLoop(window.__frame);
      return {
        renderMsMin: +runs[0].toFixed(3), renderMsMed: +runs[8].toFixed(3),
        frameMsMin: +fruns[0].toFixed(3), frameMsMed: +fruns[5].toFixed(3),
        ...draw,
      };
    }, [VIEW_EYE, VIEW_AIM]);
    console.log(`  perf[${label}]`, JSON.stringify(m));
    return m;
  }

  // ---- 1. what one ant costs today --------------------------------------
  const antCost = await page.evaluate(() => {
    let bodyMeshes = 0, hullMeshes = 0, instanced = 0, instances = 0;
    window.__scene.traverse((o) => {
      if (!o.isMesh) return;
      if (o.isInstancedMesh && (o.name.indexOf('ant') === 0 || (o.parent && o.parent.name === 'ants'))) {
        instanced++; instances += o.count;
      }
      let p = o.parent, tag = null;
      while (p) { if (p.name === 'ant' || p.name === 'outline-hull' || p.name === 'ants') { tag = p.name; break; } p = p.parent; }
      if (tag === 'ant') bodyMeshes++;
      if (tag === 'outline-hull') hullMeshes++;
    });
    return { bodyMeshes, hullMeshes, instanced, instances };
  });
  report.antMeshCount = antCost;
  console.log('  ant mesh census:', JSON.stringify(antCost));

  report.perf = {};
  report.perf.solo = await measure('solo (player only)');
  await page.evaluate(([eye, aim]) => window.__renderView(eye, aim, 1.0), [VIEW_EYE, VIEW_AIM]);
  await shot('01-solo-fixed-view');

  if (!hasLayer) {
    report.failures = failures;
    report.consoleErrors = consoleErrors;
    fs.writeFileSync(path.join(outDir, 'report.json'), JSON.stringify(report, null, 1));
    console.log('\nBASELINE recorded. Re-run after the entity layer lands.');
    await browser.close(); server.kill();
    return;
  }

  // ---- 2. five non-controlled ants on the lawn ---------------------------
  const spawned = await page.evaluate(() => window.__entities.spawnWorkers(5));
  console.log('  spawned:', JSON.stringify(spawned));
  check(Array.isArray(spawned) && spawned.length === 5, 'spawnWorkers(5) returned five ids');

  const samples = [];
  for (let i = 0; i < 7; i++) {
    await page.waitForTimeout(900);
    samples.push(await page.evaluate(() => window.__entities.list()));
  }
  report.samples = samples;

  const first = samples[0], last = samples[samples.length - 1];
  check(last.length === 6, `six entities alive (1 controlled + 5 workers), got ${last.length}`);

  // every worker must have covered ground, and none may end inside decor
  const perWorker = {};
  for (const e of last.filter((e2) => e2.control !== 'player')) {
    let travelled = 0;
    for (let i = 1; i < samples.length; i++) {
      const a = samples[i - 1].find((s) => s.id === e.id), b = samples[i].find((s) => s.id === e.id);
      if (a && b) travelled += Math.hypot(b.x - a.x, b.z - a.z);
    }
    perWorker[e.id] = { travelled: +travelled.toFixed(2), pen: e.pen, phase: e.phase };
    check(travelled > 12, `worker ${e.id} covered ground (${travelled.toFixed(1)} u over ~5.4 s)`);
    check(e.pen <= 0.05, `worker ${e.id} is not inside decor (penetration ${e.pen})`);
  }
  report.perWorker = perWorker;
  void first;

  // ---- 3. the player is one of them --------------------------------------
  const same = await page.evaluate(() => window.__entities.playerIsEntity());
  check(same.inList, 'the controlled ant is in the entity list');
  check(same.sameRecord, 'window.__ant IS the controlled entity\'s ant record (not a copy)');
  check(same.sharedStep, 'the controlled entity is stepped by the same function as the workers');
  report.playerIsEntity = same;

  // ---- 4. render cost with six ants --------------------------------------
  await shot('02-five-workers-ingame');
  report.perf.six = await measure('six ants (instanced)');
  await page.evaluate(([eye, aim]) => window.__renderView(eye, aim, 1.0), [VIEW_EYE, VIEW_AIM]);
  await shot('03-six-ants-fixed-view');

  const modes = await page.evaluate(() => window.__entities.renderModes());
  report.renderModes = modes;
  if (modes.indexOf('legacy') >= 0) {
    await page.evaluate(() => window.__entities.setRenderMode('legacy'));
    await page.waitForTimeout(500);
    report.perf.sixLegacy = await measure('six ants (legacy, one mesh per part)');
    await page.evaluate(([eye, aim]) => window.__renderView(eye, aim, 1.0), [VIEW_EYE, VIEW_AIM]);
    await shot('04-six-ants-legacy-fixed-view');
    await page.evaluate(() => window.__entities.setRenderMode('instanced'));
    await page.waitForTimeout(500);
  }

  // twenty ants: the number etat-des-lieux.md §2b calls the breaking point
  await page.evaluate(() => window.__entities.spawnWorkers(14));
  await page.waitForTimeout(1500);
  report.perf.twenty = await measure('twenty ants (instanced)');
  await page.evaluate(([eye, aim]) => window.__renderView(eye, aim, 1.0), [VIEW_EYE, VIEW_AIM]);
  await shot('05-twenty-ants-fixed-view');
  await page.evaluate(() => window.__entities.despawnWorkers(14));
  await page.waitForTimeout(600);

  // ---- 5. serializable state ---------------------------------------------
  const ser = await page.evaluate(() => {
    const snap = window.__entities.serialize();
    let json = null, err = null;
    try { json = JSON.stringify(snap); } catch (e) { err = String(e); }
    // hunt for anything that would not survive a save file
    const bad = [];
    (function walk(v, p) {
      if (v === null || typeof v !== 'object') {
        if (typeof v === 'function') bad.push(p + ' (function)');
        return;
      }
      if (v.isVector3 || v.isMatrix4 || v.isObject3D || v.isMaterial || v.isBufferGeometry) { bad.push(p + ' (THREE object)'); return; }
      for (const k of Object.keys(v)) walk(v[k], p + '.' + k);
    })(snap, 'snapshot');
    return { json, err, bad, size: json ? json.length : 0 };
  });
  check(!ser.err, 'entity snapshot survives JSON.stringify' + (ser.err ? ' — ' + ser.err : ''));
  check(ser.bad.length === 0, 'no THREE objects / functions in the snapshot' + (ser.bad.length ? ': ' + ser.bad.join(', ') : ''));
  report.snapshotBytes = ser.size;

  const round = await page.evaluate(() => {
    const before = window.__entities.serialize();
    const ids = window.__entities.list().map((e) => e.id).sort();
    // move everything, then put it back from the snapshot
    window.__entities.scatterForTest();
    const moved = window.__entities.list();
    window.__entities.restore(JSON.parse(JSON.stringify(before)));
    const after = window.__entities.list();
    return {
      ids, movedAway: moved.some((m) => {
        const b = before.entities.find((e) => e.id === m.id);
        return b && Math.hypot(b.ant.x - m.x, b.ant.z - m.z) > 5;
      }),
      restored: after.every((a) => {
        const b = before.entities.find((e) => e.id === a.id);
        return b && Math.hypot(b.ant.x - a.x, b.ant.z - a.z) < 0.01;
      }),
      count: after.length,
    };
  });
  check(round.movedAway, 'the scatter actually moved ants (so the restore below means something)');
  check(round.restored, 'restore() puts every ant back exactly where the snapshot had it');
  check(round.count === 6, `restore() rebuilt the same population (${round.count})`);
  report.roundTrip = round;

  await page.waitForTimeout(800);
  await shot('06-after-restore');

  check(consoleErrors.length === 0, `no console errors (${consoleErrors.length})`);
  report.consoleErrors = consoleErrors;
  report.failures = failures;
  fs.writeFileSync(path.join(outDir, 'report.json'), JSON.stringify(report, null, 1));

  console.log('\n=== summary ===');
  for (const [k, v] of Object.entries(report.perf)) console.log(k.padEnd(12), JSON.stringify(v));
  console.log(failures.length ? `\n${failures.length} FAILURE(S)` : '\nALL CHECKS PASSED');
  for (const f of failures) console.log(' - ' + f);

  await browser.close();
  server.kill();
  if (failures.length) process.exitCode = 1;
}

main().catch((e) => { console.error(e); process.exit(1); });

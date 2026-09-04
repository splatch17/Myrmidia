// Round 10 verification: shadow cost breakdown (defect 2) and the east/north
// half of the map (defect 9).
//
// Usage: node scripts/verify-round10.mjs <outDir> [--shots-only] [--perf-only]
//
// WHY THE PERF PART IS A MATRIX AND NOT A NUMBER. "The shadow map costs 83% of
// the frame" is three different bills wearing one coat:
//   1. the DEPTH PASS   — re-drawing every caster from the sun, once a frame;
//   2. the MAP ITSELF   — 2048^2 of depth to rasterise into and to sample;
//   3. the LOOKUP       — PCFSoft takes many taps per lit fragment, and this
//                         scene is fragment bound, so this one scales with
//                         screen pixels rather than with scene contents.
// Each has a different fix, and picking the wrong one either costs the grass
// shadows (the round-7 win) or buys nothing. So every view below is timed
// under each variant, on the same frame, back to back.
//
// Chromium MUST run with ANGLE/D3D11 — headless Chromium's software rasteriser
// would turn every number here into a measurement of the CPU. Same requirement
// as every other harness in this folder.

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gameDir = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const outDir = path.resolve(args.find((a) => !a.startsWith('--')) || path.join(gameDir, '_round10-shots'));
const shotsOnly = args.includes('--shots-only');
const perfOnly = args.includes('--perf-only');
fs.mkdirSync(outDir, { recursive: true });

const PORT = 4181;
const URL = 'http://localhost:' + PORT + '/';
const VIEW = { width: 1280, height: 720 };

function waitForServer(url, timeoutMs) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = async () => {
      try { const res = await fetch(url); if (res.ok) return resolve(); } catch { /* not up */ }
      if (Date.now() - start > timeoutMs) return reject(new Error('preview server did not come up'));
      setTimeout(tick, 300);
    };
    tick();
  });
}

/* Views. The first block is the perf matrix (few, dense with shadow casters);
   the second is the content read for defect 9 — the east half and the north
   meadow, which today hold relief and nothing else. */
const PERF_SHOTS = [
  { name: 'perf-lawn-wide', eye: [152, 62, 244], target: [112, 0, 152] },
  { name: 'perf-grass-low', eye: [150, 7, 196], target: [124, 4, 158] },
  { name: 'perf-tree', eye: [-36, 52, 152], target: [-85, 12, 95] },
];

const CONTENT_SHOTS = [
  { name: 'east-hollow', eye: [250, 60, 40], target: [340, 0, 118] },
  { name: 'east-hollow-low', eye: [285, 12, 70], target: [345, 4, 125] },
  { name: 'east-ridge', eye: [200, 90, 300], target: [330, 20, 200] },
  { name: 'north-meadow', eye: [40, 70, 300], target: [140, 0, 400] },
  { name: 'north-meadow-low', eye: [90, 10, 330], target: [180, 6, 400] },
  { name: 'map-wide-east', eye: [80, 260, -40], target: [220, 0, 220] },
  { name: 'map-wide-north', eye: [60, 240, 520], target: [120, 0, 240] },
  { name: 'tree2-approach', eye: [180, 40, 200], target: [270, 25, 280] },
  { name: 'lawn-wide', eye: [152, 62, 244], target: [112, 0, 152] },
  { name: 'tree-shadow', eye: [-36, 52, 152], target: [-85, 12, 95] },
];

/* Page-side helpers, installed once. They reach the sun and the grass through
   the scene graph rather than through a debug hook, so this harness works
   against a build that has never heard of it. */
const INSTALL = () => {
  const r = window.__renderer, s = window.__scene, c = window.__camera;
  let sun = null, grass = null;
  s.traverse((o) => {
    if (o.isDirectionalLight && o.castShadow) sun = o;
    if (o.name === 'grass') grass = o;
  });
  const THREE_BASIC = 0, THREE_PCF = 1, THREE_PCF_SOFT = 2;

  /* Every one of these changes the generated program (shadowMapEnabled and
     shadowMapType are both program cache keys), and Three only recompiles on
     material.version bumps — so a variant applied without this recompiles
     nothing and measures the previous variant. This was checked by watching
     r.info.programs.length move. */
  function recompile() {
    s.traverse((o) => {
      const mats = Array.isArray(o.material) ? o.material : (o.material ? [o.material] : []);
      for (const m of mats) m.needsUpdate = true;
    });
  }

  const base = {
    enabled: r.shadowMap.enabled,
    type: r.shadowMap.type,
    size: sun ? sun.shadow.mapSize.x : 0,
    grassCast: grass ? grass.castShadow : false,
  };

  window.__probe = {
    base,
    hasGrass: !!grass,
    apply(v) {
      r.shadowMap.enabled = v.enabled !== undefined ? v.enabled : base.enabled;
      r.shadowMap.type = v.type !== undefined ? v.type : base.type;
      if (sun) {
        const size = v.size !== undefined ? v.size : base.size;
        if (sun.shadow.mapSize.x !== size) {
          sun.shadow.mapSize.set(size, size);
          sun.shadow.map?.dispose();
          sun.shadow.map = null;
        }
      }
      if (grass) grass.castShadow = v.grassCast !== undefined ? v.grassCast : base.grassCast;
      // 1e9 = "no range limit", i.e. the pre-fix behaviour, so the before/
      // after of the range cull is an A/B on the same build
      window.__world?.grass?.setCastRadius?.(v.castR !== undefined ? v.castR : 1e9);
      recompile();
      /* autoUpdate false = the depth pass stops running but the map keeps
         being sampled. That is the whole point of the matrix: it separates
         "re-drawing the casters" from "looking the result up", which have
         completely different fixes. One render is forced first so the frozen
         map holds this view's content and not the previous variant's. */
      r.shadowMap.autoUpdate = true;
      r.shadowMap.needsUpdate = true;
      if (v.frozen) {
        window.__renderView([0, 40, 120], [0, 0, 0], 1.0);
        r.shadowMap.autoUpdate = false;
      }
    },
    restore() { window.__probe.apply({}); },
    types: { basic: THREE_BASIC, pcf: THREE_PCF, pcfsoft: THREE_PCF_SOFT },
  };
};

/* GPU time, not wall-clock time.
   The first cut of this harness timed performance.now() around gl.finish() and
   produced garbage: 512^2 "slower" than 2048^2, shadows-off "slower" than
   shadows-on. On a headless page the compositor, GC and the driver's own
   queueing all land inside that window, and they are bigger than the thing
   being measured. EXT_disjoint_timer_query_webgl2 is present on this ANGLE/
   D3D11 setup (checked) and reports what the GPU actually spent, which is the
   number the ticket is about.

   Still guarded: a disjoint (context switch on the GPU) invalidates the query
   and the sample is thrown away rather than averaged in. */
const TIME_VIEW = async ([eye, target, reps]) => {
  const r = window.__renderer, s = window.__scene, c = window.__camera;
  const gl = r.getContext();
  const ext = gl.getExtension('EXT_disjoint_timer_query_webgl2');
  window.__renderView(eye, target, 1.0);          // place the camera + world state
  for (let i = 0; i < 8; i++) r.render(s, c);      // warm shaders/caches
  gl.finish();

  const samples = [];
  for (let b = 0; b < (reps || 12); b++) {
    const K = 8;
    if (ext) {
      const q = gl.createQuery();
      gl.beginQuery(ext.TIME_ELAPSED_EXT, q);
      for (let i = 0; i < K; i++) r.render(s, c);
      gl.endQuery(ext.TIME_ELAPSED_EXT);
      gl.flush();
      let ok = false;
      for (let tries = 0; tries < 400; tries++) {
        await new Promise((res) => setTimeout(res, 2));
        if (gl.getQueryParameter(q, gl.QUERY_RESULT_AVAILABLE)) { ok = true; break; }
      }
      const disjoint = gl.getParameter(ext.GPU_DISJOINT_EXT);
      if (ok && !disjoint) samples.push(gl.getQueryParameter(q, gl.QUERY_RESULT) / 1e6 / K);
      gl.deleteQuery(q);
    } else {
      const t0 = performance.now();
      for (let i = 0; i < K; i++) r.render(s, c);
      gl.finish();
      samples.push((performance.now() - t0) / K);
    }
  }
  samples.sort((a, b2) => a - b2);
  const n = samples.length;
  return {
    gpu: n ? +samples[n >> 1].toFixed(3) : null,      // median GPU ms/frame
    lo: n ? +samples[0].toFixed(3) : null,
    hi: n ? +samples[n - 1].toFixed(3) : null,
    n,
    calls: r.info.render.calls, tris: r.info.render.triangles,
  };
};

async function main() {
  const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
    cwd: gameDir, shell: true, stdio: 'pipe',
  });
  let serverLog = '';
  server.stdout.on('data', (d) => { serverLog += d.toString(); });
  server.stderr.on('data', (d) => { serverLog += d.toString(); });
  try { await waitForServer(URL, 30000); } catch (e) { console.error(serverLog); throw e; }
  console.log('preview up at', URL);

  const browser = await chromium.launch({
    args: ['--use-gl=angle', '--use-angle=d3d11', '--ignore-gpu-blocklist',
      '--enable-gpu-rasterization', '--disable-gpu-vsync', '--disable-frame-rate-limit'],
  });
  const page = await browser.newPage({ viewport: VIEW });
  const consoleErrors = [];
  page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text()); });
  page.on('pageerror', (e) => { consoleErrors.push('pageerror: ' + e.message); });

  await page.goto(URL);
  await page.waitForFunction(() => window.__ant && window.__renderView, null, { timeout: 25000 });
  await page.waitForTimeout(1800);
  await page.evaluate(() => window.__renderer.setAnimationLoop(null));
  await page.evaluate(INSTALL);

  const report = { perf: {}, content: {}, consoleErrors };

  // ---- perf matrix -------------------------------------------------------
  if (!shotsOnly) {
    /* The split the ticket asks for, in three lines of the table:
         as-shipped - no-shadow  = the whole shadow bill
         as-shipped - frozen-map = the DEPTH PASS (re-drawing casters)
         frozen-map - no-shadow  = the LOOKUP (PCF taps on lit fragments)
       Everything after that is a candidate fix, measured against those. */
    const VARIANTS = [
      ['no-range-cull', {}],       // the pre-fix behaviour: every blade casts
      ['no-shadow', { enabled: false }],
      ['frozen-map', { frozen: true }],
      ['map-1024', { size: 1024 }],
      ['grass-no-cast', { grassCast: false }],
      ['grass-no-cast-frozen', { grassCast: false, frozen: true }],
      ['pcf-hard', { type: 'pcf' }],
      ['castR-90', { castR: 90 }],
      ['castR-64', { castR: 64 }],
      ['castR-46', { castR: 46 }],
      ['castR-32', { castR: 32 }],
      ['castR-46+1024', { castR: 46, size: 1024 }],
    ];
    /* ROUND-ROBIN, AND KEEP THE MINIMUM.
       Measuring all of variant A then all of variant B does not work on this
       machine: a first pass put as-shipped at 8.0 ms and a second, identical
       one at 16.8 ms, because an integrated GPU's clocks and whatever else
       the box is doing drift over minutes — far more than the differences
       being looked for. Interleaving makes every variant share the same drift,
       and the per-variant minimum over many rounds is the least-contended
       estimate of what the frame actually costs. The spread is reported too,
       so a result that only holds on the minimum is visible as such. */
    const ROUNDS = 9;
    for (const shot of PERF_SHOTS) report.perf[shot.name] = {};
    for (let round = 0; round < ROUNDS; round++) {
      for (const [vname, v] of VARIANTS) {
        await page.evaluate((v) => {
          const p = window.__probe;
          const t = v.type ? p.types[v.type] : undefined;
          p.apply({ ...v, type: t });
        }, v);
        for (const shot of PERF_SHOTS) {
          const res = await page.evaluate(TIME_VIEW, [shot.eye, shot.target, 2]);
          const slot = report.perf[shot.name];
          if (!slot[vname]) slot[vname] = { gpu: Infinity, samples: [], calls: res.calls, tris: res.tris };
          if (res.gpu !== null) {
            slot[vname].gpu = Math.min(slot[vname].gpu, res.gpu);
            slot[vname].samples.push(res.gpu);
          }
        }
      }
      process.stdout.write('round ' + (round + 1) + '/' + ROUNDS + '\r');
    }
    console.log('');
    for (const shot of PERF_SHOTS) {
      console.log('== ' + shot.name);
      for (const [vname] of VARIANTS) {
        const s = report.perf[shot.name][vname];
        s.gpu = +s.gpu.toFixed(3);
        s.spread = [+Math.min(...s.samples).toFixed(2), +Math.max(...s.samples).toFixed(2)];
        delete s.samples;
        console.log('   ' + vname.padEnd(21) + String(s.gpu).padStart(7) + ' ms gpu'
          + '  spread [' + s.spread.join('..') + ']  calls=' + s.calls);
      }
    }
    await page.evaluate(() => window.__probe.restore());
    // programs count, to confirm the recompiles above actually happened
    report.programs = await page.evaluate(() => window.__renderer.info.programs.length);
  }

  // ---- shadow A/B shots --------------------------------------------------
  /* The perf matrix says the map RESOLUTION is the dominant term on this GPU,
     more than the caster count. That is a quality trade, not a free win, so it
     gets decided on the picture: same view, same frame, four shadow rigs. */
  if (!perfOnly) {
    const AB_VIEWS = [
      { name: 'ab-grass-low', eye: [150, 7, 196], target: [124, 4, 158] },
      { name: 'ab-tree', eye: [-36, 52, 152], target: [-85, 12, 95] },
      { name: 'ab-mid', eye: [110, 26, 210], target: [86, 2, 168] },
    ];
    const AB_RIGS = [
      ['2048-nocull', {}],
      ['2048-cull46', { castR: 46 }],
      ['1024-cull46', { castR: 46, size: 1024 }],
      ['1024-nocull', { size: 1024 }],
    ];
    for (const [rig, v] of AB_RIGS) {
      await page.evaluate((v) => {
        const p = window.__probe;
        p.apply({ ...v, type: v.type ? p.types[v.type] : undefined });
      }, v);
      for (const view of AB_VIEWS) {
        await page.evaluate(([eye, target]) => {
          for (let i = 0; i < 4; i++) window.__renderView(eye, target, 1.0);
        }, [view.eye, view.target]);
        await page.screenshot({ path: path.join(outDir, view.name + '__' + rig + '.png') });
      }
      console.log('ab shots for', rig);
    }
    await page.evaluate(() => window.__probe.restore());
  }

  // ---- content shots -----------------------------------------------------
  if (!perfOnly) {
    await page.evaluate(() => window.__probe.restore());
    for (const shot of CONTENT_SHOTS) {
      const res = await page.evaluate(([eye, target]) => {
        const r = window.__renderer;
        for (let i = 0; i < 4; i++) window.__renderView(eye, target, 1.0);
        return { calls: r.info.render.calls, tris: r.info.render.triangles };
      }, [shot.eye, shot.target]);
      report.content[shot.name] = res;
      await page.screenshot({ path: path.join(outDir, shot.name + '.png') });
      console.log('shot', shot.name, JSON.stringify(res));
    }
  }

  report.mem = await page.evaluate(() => {
    const r = window.__renderer, s = window.__scene;
    const geos = new Map();
    let verts = 0, tris = 0;
    s.traverse((o) => {
      if (o.geometry && !geos.has(o.geometry.uuid)) {
        geos.set(o.geometry.uuid, true);
        const g = o.geometry, pos = g.attributes.position;
        if (pos) verts += pos.count;
        tris += (g.index ? g.index.count : (pos ? pos.count : 0)) / 3;
      }
    });
    return { geometries: geos.size, vertices: verts, triangles: tris, memory: r.info.memory };
  });
  console.log('MEMORY', JSON.stringify(report.mem));
  console.log('console errors:', consoleErrors.length ? consoleErrors : '(none)');

  fs.writeFileSync(path.join(outDir, 'report.json'), JSON.stringify(report, null, 1));
  await browser.close();
  server.kill();
  if (consoleErrors.length) process.exitCode = 1;
}

main().catch((e) => { console.error(e); process.exitCode = 1; });

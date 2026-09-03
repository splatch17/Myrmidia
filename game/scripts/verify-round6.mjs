// Render verification for round 6: shadeAt (contract §2), resource nodes
// (§3) and run-time nest founding (§4, #11/#12).
//
// Usage: node scripts/verify-round6.mjs <outDir>
//
// Everything here is driven through the *world's own* exports on
// window.__world6 — no controller, no ant, no synthetic bypass. That is the
// point of the dependency direction in design/api-monde-gameplay.md §5: the
// world has to be testable with nothing attached to it.
//
// Chromium MUST run on ANGLE/D3D11 (below) or the timings measure the
// software rasterizer. Same requirement as the other harnesses here.

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gameDir = path.resolve(__dirname, '..');
const outDir = process.argv[2] || path.join(gameDir, '_round6-shots');
fs.mkdirSync(outDir, { recursive: true });

const PORT = 4178;
const URL = `http://localhost:${PORT}/`;

const FOUND_X = 24, FOUND_Z = 128;   // the hollow behind the knoll

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

async function main() {
  const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
    cwd: gameDir, shell: true, stdio: 'pipe',
  });
  let serverLog = '';
  server.stdout.on('data', (d) => { serverLog += d.toString(); });
  server.stderr.on('data', (d) => { serverLog += d.toString(); });
  try { await waitForServer(URL, 25000); } catch (e) { console.error(serverLog); throw e; }

  const browser = await chromium.launch({
    args: ['--use-gl=angle', '--use-angle=d3d11', '--ignore-gpu-blocklist', '--enable-gpu-rasterization',
           '--disable-gpu-vsync', '--disable-frame-rate-limit'],
  });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const consoleErrors = [];
  page.on('console', (msg) => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', (err) => { consoleErrors.push('pageerror: ' + err.message); });

  await page.goto(URL);
  await page.waitForFunction(() => window.__world6 && window.__renderView, null, { timeout: 20000 });
  await page.waitForTimeout(1800);

  const report = {};
  await page.evaluate(() => window.__renderer.setAnimationLoop(null));

  const shot = async (name, eye, target, elapsed = 1.0) => {
    await page.evaluate(([e, t, el]) => {
      for (let i = 0; i < 6; i++) window.__renderView(e, t, el);
    }, [eye, target, elapsed]);
    await page.screenshot({ path: path.join(outDir, `${name}.png`) });
    console.log('shot', name);
  };

  // ---- 1. the prologue rig + shadeAt's raw material ----------------------
  report.sun = await page.evaluate(() => ({
    dir: Array.from(window.__world6.sunDir()), mix: window.__world6.foundedMix(),
  }));

  // shadeAt sampled over the map, so "does it actually vary" is a number and
  // not an impression
  report.shade = await page.evaluate(() => {
    const S = window.__world6.shadeAt;
    const named = {
      'hollow-24-128': S(24, 128), 'hollow-rim-6-146': S(6, 146),
      'knoll-top-62-78': S(62, 78), 'knoll-lee-92-56': S(92, 56),
      'bowl-88-168': S(88, 168), 'open-140-110': S(140, 110),
      'tree-foot-85-95': S(-85, 95), 'spawn-20-110': S(20, 110),
      'underground': S(0, -60),
    };
    let min = 1, max = 0, sum = 0, n = 0;
    const hist = new Array(10).fill(0);
    for (let x = -180; x <= 180; x += 6) {
      for (let z = 10; z <= 240; z += 6) {
        const v = S(x, z);
        min = Math.min(min, v); max = Math.max(max, v); sum += v; n++;
        hist[Math.min(9, Math.floor(v * 10))]++;
      }
    }
    const t0 = performance.now();
    for (let i = 0; i < 2000; i++) S(-100 + (i % 200), 20 + (i % 180));
    const us = (performance.now() - t0) / 2000 * 1000;
    return { named, min: +min.toFixed(3), max: +max.toFixed(3), mean: +(sum / n).toFixed(3), n, hist, usPerCall: +us.toFixed(2) };
  });
  console.log('SHADE', JSON.stringify(report.shade));

  await shot('prologue-wide', [150, 150, -40], [-20, 0, 140]);
  await shot('prologue-hollow', [70, 28, 92], [18, 2, 132]);
  await shot('prologue-knoll', [10, 26, 20], [70, 10, 84]);

  // ---- 2. resource nodes -------------------------------------------------
  report.nodes = await page.evaluate(() => {
    const ns = window.__world6.nodes;
    const byKind = {};
    for (const n of ns) byKind[n.kind] = (byKind[n.kind] || 0) + 1;
    // food density as siteQuality.js measures it (within 55 units)
    const near = (x, z) => ns.filter((n) => Math.hypot(n.x - x, n.z - z) < 55).length;
    const W = window.__world6;
    return {
      total: ns.length, byKind,
      idsUnique: new Set(ns.map((n) => n.id)).size,
      // checked against the world's own water query, not against the
      // placement rule that produced them
      inWater: ns.filter((n) => W.waterDepthAt(n.x, n.z) > 0).length,
      withinTenOfWater: ns.filter((n) => W.distanceToWater(n.x, n.z) < 10).length,
      food: {
        tree: near(-85, 95), bowl: near(88, 168), hollow: near(24, 128),
        spawn: near(20, 110), bareRidge: near(-150, 150), riverbank: near(-185, 120),
      },
    };
  });
  console.log('NODES', JSON.stringify(report.nodes));

  // find the densest cluster to photograph, then empty it in place
  const cluster = await page.evaluate(() => {
    const ns = window.__world6.nodes;
    let best = null;
    for (const a of ns) {
      const near = ns.filter((b) => Math.hypot(a.x - b.x, a.z - b.z) < 13);
      if (!best || near.length > best.near.length) best = { a, near };
    }
    return { x: best.a.x, z: best.a.z, kind: best.a.kind, count: best.near.length,
             ids: best.near.map((n) => n.id) };
  });
  console.log('CLUSTER', JSON.stringify(cluster));

  const eye = [cluster.x + 16, 12, cluster.z + 16];
  const target = [cluster.x, 1, cluster.z];
  await shot('nodes-cluster-full', eye, target);

  report.harvest = await page.evaluate((ids) => {
    const H = window.__world6.harvestNode, ns = window.__world6.nodes;
    const before = ns.filter((n) => ids.includes(n.id)).map((n) => n.amount);
    let took = 0;
    for (const id of ids) for (let k = 0; k < 20; k++) took += H(id, 1);
    const after = ns.filter((n) => ids.includes(n.id)).map((n) => n.amount);
    return {
      before, after, took,
      stillPresent: ns.filter((n) => ids.includes(n.id)).length,
      overHarvest: H(ids[0], 5),          // must be 0: already spent
      unknownId: H(999999, 3),            // must be 0
      arrayLength: ns.length,
    };
  }, cluster.ids);
  console.log('HARVEST', JSON.stringify(report.harvest));
  await shot('nodes-cluster-spent', eye, target);

  // ---- 3. founding -------------------------------------------------------
  report.canFound = await page.evaluate(() => {
    const C = window.__world6.canFoundAt;
    return {
      hollow: C(24, 128), inRiver: C(-230, 120), riverbank: C(-192, 120),
      onGallery: C(0, 12), offMap: C(400, 120), steepRim: C(250, 120),
    };
  });
  console.log('CANFOUND', JSON.stringify(report.canFound));

  await shot('found-site-before', [FOUND_X + 34, 20, FOUND_Z + 40], [FOUND_X, 2, FOUND_Z]);

  report.found = await page.evaluate(([x, z]) => {
    const r = window.__world6.foundNest(x, z);
    return { r, origin: window.__world6.nestOrigin(), nest: JSON.parse(JSON.stringify({
      mouth: window.__world6.getFoundedNest().mouth,
      chamber: window.__world6.getFoundedNest().chamber,
      floorY: window.__world6.getFoundedNest().floorY,
    })) };
  }, [FOUND_X, FOUND_Z]);
  console.log('FOUND', JSON.stringify(report.found));

  // the same viewpoint, immediately after: the mound has to be visible
  await shot('found-site-after', [FOUND_X + 34, 20, FOUND_Z + 40], [FOUND_X, 2, FOUND_Z]);
  await shot('found-mouth-close', [FOUND_X + 13, 8, FOUND_Z + 13], [FOUND_X, 1, FOUND_Z]);

  // inside, empty (§2c plan 2) — camera dropped into the chamber
  const ch = report.found.nest.chamber;
  await shot('chamber-empty', [ch.x + ch.r * 0.62, ch.y + 5.5, ch.z + ch.r * 0.62], [ch.x, ch.y + 1.5, ch.z]);
  await page.evaluate(() => window.__world6.sealNest(true));
  for (let i = 0; i < 40; i++) await page.evaluate(() => window.__renderView([0, 0, 0], [0, 0, 1], 0));
  await page.waitForTimeout(3500);
  await shot('chamber-sealed', [ch.x + ch.r * 0.62, ch.y + 5.5, ch.z + ch.r * 0.62], [ch.x, ch.y + 1.5, ch.z]);

  await page.evaluate(() => window.__world6.populateNest(1));
  await shot('chamber-brood-1', [ch.x + ch.r * 0.62, ch.y + 5.5, ch.z + ch.r * 0.62], [ch.x, ch.y + 1.5, ch.z]);
  await page.evaluate(() => window.__world6.populateNest(4));
  await shot('chamber-brood-4', [ch.x + ch.r * 0.62, ch.y + 5.5, ch.z + ch.r * 0.62], [ch.x, ch.y + 1.5, ch.z]);
  await page.evaluate(() => window.__world6.populateNest(6));
  await shot('chamber-brood-6', [ch.x + ch.r * 0.62, ch.y + 5.5, ch.z + ch.r * 0.62], [ch.x, ch.y + 1.5, ch.z]);

  // ---- 4. the founded rig, same viewpoints as the prologue ones ----------
  await page.waitForTimeout(7000);   // FOUND_FADE = 6 s
  report.sunAfter = await page.evaluate(() => ({
    dir: Array.from(window.__world6.sunDir()), mix: window.__world6.foundedMix(),
  }));
  await shot('founded-wide', [150, 150, -40], [-20, 0, 140]);
  await shot('founded-hollow', [70, 28, 92], [18, 2, 132]);
  await shot('founded-knoll', [10, 26, 20], [70, 10, 84]);

  report.shadeAfter = await page.evaluate(() => {
    const S = window.__world6.shadeAt;
    let sum = 0, n = 0, max = 0;
    for (let x = -180; x <= 180; x += 6) for (let z = 10; z <= 240; z += 6) { const v = S(x, z); sum += v; max = Math.max(max, v); n++; }
    return { mean: +(sum / n).toFixed(3), max: +max.toFixed(3) };
  });

  // ---- 5. cost -----------------------------------------------------------
  report.perf = await page.evaluate(() => {
    const r = window.__renderer, s = window.__scene, c = window.__camera;
    const gl = r.getContext();
    window.__renderView([150, 150, -40], [-20, 0, 140], 1.0);
    gl.finish();
    const runs = [];
    for (let b = 0; b < 16; b++) {
      const K = 12, t0 = performance.now();
      for (let i = 0; i < K; i++) r.render(s, c);
      gl.finish();
      runs.push((performance.now() - t0) / K);
    }
    runs.sort((a, b2) => a - b2);
    return { best: +runs[0].toFixed(3), median: +runs[8].toFixed(3), calls: r.info.render.calls,
             tris: r.info.render.triangles, programs: r.info.programs.length };
  });
  console.log('PERF', JSON.stringify(report.perf));

  report.mem = await page.evaluate(() => {
    const r = window.__renderer, s = window.__scene;
    const geos = new Map(), texs = new Map();
    let verts = 0, tris = 0;
    s.traverse((o) => {
      if (o.geometry && !geos.has(o.geometry.uuid)) {
        geos.set(o.geometry.uuid, true);
        const g = o.geometry, pos = g.attributes.position;
        const inst = o.isInstancedMesh ? o.count : 1;
        if (pos) verts += pos.count * inst;
        tris += ((g.index ? g.index.count : (pos ? pos.count : 0)) / 3) * inst;
      }
      const mats = Array.isArray(o.material) ? o.material : (o.material ? [o.material] : []);
      for (const m of mats) for (const k of ['map', 'normalMap', 'roughnessMap']) {
        const t = m[k];
        if (t && t.image && !texs.has(t.uuid)) texs.set(t.uuid, { w: t.image.width, h: t.image.height, mip: t.generateMipmaps });
      }
    });
    let texBytes = 0;
    for (const [, t] of texs) texBytes += t.w * t.h * 4 * (t.mip ? 4 / 3 : 1);
    return { geometries: geos.size, vertices: verts, triangles: Math.round(tris),
             textures: texs.size, texKB: +(texBytes / 1024).toFixed(1), programs: r.info.programs.length };
  });
  console.log('MEM', JSON.stringify(report.mem));

  report.consoleErrors = consoleErrors;
  console.log('console errors:', consoleErrors.length ? consoleErrors : '(none)');
  fs.writeFileSync(path.join(outDir, 'report.json'), JSON.stringify(report, null, 1));

  await browser.close();
  server.kill();
  if (consoleErrors.length) process.exitCode = 1;
}

main().catch((e) => { console.error(e); process.exitCode = 1; });

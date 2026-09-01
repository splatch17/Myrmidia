// Render verification for #31 (surface relief, river, horizon).
//
// Usage: node scripts/verify-terrain.mjs <outDir>
//
// Two kinds of shot, both needed to judge the terrain honestly:
//   - free-camera views (window.__renderView), for the wide reads the ticket
//     asks for — the whole map, the river, the horizon. The game loop is
//     stopped for these so the player camera doesn't fight the placement;
//     the environment (fog/exposure/hemisphere/sun) is still the game's own,
//     because __renderView runs main.js's applyEnvironment().
//   - in-game views at ant height, driven by parking window.__ant and letting
//     the real controller/camera settle. Relief that only reads from 200
//     units up is not relief, and this is the shot that tells you.
//
// Chromium MUST be launched with ANGLE/D3D11 (below): headless Chromium's
// software rasterizer is slow enough that any frame timing read off it
// measures the CPU rasterizer, not the GPU. Same requirement as
// verify-textures.mjs / verify-room-access.mjs.

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gameDir = path.resolve(__dirname, '..');
const outDir = process.argv[2] || path.join(gameDir, '_terrain-shots');
fs.mkdirSync(outDir, { recursive: true });

const PORT = 4176;
const URL = `http://localhost:${PORT}/`;

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
  console.log('preview up at', URL);

  const browser = await chromium.launch({
    args: ['--use-gl=angle', '--use-angle=d3d11', '--ignore-gpu-blocklist', '--enable-gpu-rasterization',
           '--disable-gpu-vsync', '--disable-frame-rate-limit'],
  });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const consoleErrors = [];
  page.on('console', (msg) => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', (err) => { consoleErrors.push('pageerror: ' + err.message); });

  await page.goto(URL);
  await page.waitForFunction(() => window.__ant && window.__renderView, null, { timeout: 20000 });
  await page.waitForTimeout(1500);   // let textures decode before any shot

  const perf = {};

  // ---- free-camera shots -------------------------------------------------
  await page.evaluate(() => window.__renderer.setAnimationLoop(null));

  const freeShots = [
    // name,                eye,                    target
    ['map-wide', [150, 210, -60], [-30, 0, 150]],
    ['map-wide-north', [-30, 190, 330], [10, 0, 120]],
    ['river', [-150, 34, 120], [-250, -4, 128]],
    ['river-high', [-140, 96, 150], [-235, -4, 120]],
    ['river-low', [-176, 12, 96], [-260, -3, 108]],
    ['horizon-east', [120, 40, 150], [320, 30, 170]],
    ['bowl', [88, 62, 60], [88, -6, 168]],
    ['knoll', [-10, 40, 10], [70, 8, 84]],
    ['tree-shelf', [-30, 60, 150], [-85, 30, 95]],
  ];
  for (const [name, eye, target] of freeShots) {
    perf[name] = await page.evaluate(async ([eye, target]) => {
      const r = window.__renderer, s = window.__scene, c = window.__camera;
      const gl = r.getContext();
      for (let i = 0; i < 10; i++) window.__renderView(eye, target, 1.0);
      gl.finish();
      const runs = [];
      for (let b = 0; b < 16; b++) {
        const K = 12, t0 = performance.now();
        for (let i = 0; i < K; i++) r.render(s, c);
        gl.finish();
        runs.push((performance.now() - t0) / K);
      }
      runs.sort((a, b2) => a - b2);
      return {
        ms: +runs[0].toFixed(3), med: +runs[8].toFixed(3),
        calls: r.info.render.calls, tris: r.info.render.triangles,
      };
    }, [eye, target]);
    await page.screenshot({ path: path.join(outDir, `${name}.png`) });
    console.log(name, JSON.stringify(perf[name]));
  }

  // ---- in-game, ant-height shots ----------------------------------------
  await page.evaluate(() => window.__renderer.setAnimationLoop(window.__frame));

  // camYaw lives in player/input.js's closure, so the orbit is driven the way
  // a player drives it: a real pointer drag on the canvas, 0.006 rad/px.
  let camYaw = 0;
  async function orbitTo(targetYaw) {
    const dx = (camYaw - targetYaw) / 0.006;
    if (Math.abs(dx) < 1) return;
    await page.mouse.move(640, 400);
    await page.mouse.down();
    for (let i = 1; i <= 12; i++) await page.mouse.move(640 + (dx * i) / 12, 400);
    await page.mouse.up();
    camYaw = targetYaw;
  }
  async function place(x, z, yaw) {
    await page.evaluate(([x, z, yaw]) => {
      const a = window.__ant;
      a.x = x; a.z = z; a.yaw = yaw; a.y = window.__groundY(x, z);
      if (a.climb) a.climb = null;
    }, [x, z, yaw]);
    await orbitTo(yaw);
    await page.evaluate(([x, z]) => {
      const a = window.__ant;
      a.x = x; a.z = z; a.y = window.__groundY(x, z);
    }, [x, z]);
    await page.waitForTimeout(1600);
  }

  const antShots = [
    ['ant-knoll-foot', 40, 30, 0],          // looking up the knoll from its foot
    ['ant-bowl-rim', 88, 96, 0],            // standing on the rim, bowl below
    ['ant-riverbank', -185, 120, Math.PI * 1.5],
    ['ant-mouth-out', 0, 16, 0],            // the first view of the world
  ];
  for (const [name, x, z, yaw] of antShots) {
    await place(x, z, yaw);
    await page.screenshot({ path: path.join(outDir, `${name}.png`) });
    perf[name] = await page.evaluate(() => {
      const r = window.__renderer;
      return { calls: r.info.render.calls, tris: r.info.render.triangles };
    });
    console.log(name, JSON.stringify(perf[name]));
  }

  const mem = await page.evaluate(() => {
    const r = window.__renderer, s = window.__scene;
    const geos = new Map(), texs = new Map();
    let attrBytes = 0, idxBytes = 0, verts = 0, tris = 0;
    s.traverse((o) => {
      if (o.geometry && !geos.has(o.geometry.uuid)) {
        geos.set(o.geometry.uuid, true);
        const g = o.geometry;
        for (const k in g.attributes) attrBytes += g.attributes[k].array.byteLength;
        if (g.index) idxBytes += g.index.array.byteLength;
        const pos = g.attributes.position;
        if (pos) verts += pos.count;
        tris += (g.index ? g.index.count : (pos ? pos.count : 0)) / 3;
      }
      const mats = Array.isArray(o.material) ? o.material : (o.material ? [o.material] : []);
      for (const m of mats) for (const k of ['map', 'normalMap', 'roughnessMap', 'aoMap']) {
        const t = m[k];
        if (t && t.image && !texs.has(t.uuid)) texs.set(t.uuid, { w: t.image.width, h: t.image.height, mip: t.generateMipmaps });
      }
    });
    let texBytes = 0;
    for (const [, t] of texs) texBytes += t.w * t.h * 4 * (t.mip ? 4 / 3 : 1);
    return {
      geometries: geos.size, vertices: verts, triangles: tris,
      attrKB: +(attrBytes / 1024).toFixed(1), idxKB: +(idxBytes / 1024).toFixed(1),
      textures: texs.size, texKB: +(texBytes / 1024).toFixed(1),
      programs: r.info.programs.length,
    };
  });
  console.log('MEMORY', JSON.stringify(mem, null, 1));
  console.log('console errors:', consoleErrors.length ? consoleErrors : '(none)');

  fs.writeFileSync(path.join(outDir, 'report.json'), JSON.stringify({ perf, mem, consoleErrors }, null, 1));
  await browser.close();
  server.kill();
  if (consoleErrors.length) process.exitCode = 1;
}

main().catch((e) => { console.error(e); process.exitCode = 1; });

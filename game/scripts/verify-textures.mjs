// Render verification for #26 (UV + first painted textures): parks the ant at
// a fixed set of viewpoints, screenshots each, and measures frame cost +
// geometry/texture memory. Run it once before the texture work and once after
// with different out dirs, then diff the numbers and look at the shots.
//
// Usage: node scripts/verify-textures.mjs <outDir>
//
// Same harness shape (and the same ANGLE/D3D11 requirement) as
// verify-room-access.mjs: headless Chromium's software rasterizer is slow
// enough that the main loop's dt cap makes in-game time crawl, and any frame
// timing read off it would measure the CPU rasterizer, not the GPU.

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gameDir = path.resolve(__dirname, '..');
const outDir = process.argv[2] || path.join(gameDir, '_tex-shots');
fs.mkdirSync(outDir, { recursive: true });

const PORT = 4174;
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
  await page.waitForFunction(() => window.__ant && window.__rooms, null, { timeout: 20000 });
  await page.waitForTimeout(1200);

  const [TREE_X, TREE_Z] = await page.evaluate(() => [window.__tree.x, window.__tree.z]);
  const rooms = await page.evaluate(() => Object.fromEntries(
    Object.entries(window.__rooms).map(([k, v]) => [k, v.center])));

  // camYaw lives in player/input.js's closure (not exposed, and out of my
  // scope to expose), so the orbit is driven the way a player drives it: a
  // real pointer drag on the canvas, 0.006 rad per pixel (input.js). Tracked
  // here because nothing else moves it while the ant is parked.
  let camYaw = 0;
  async function orbitTo(targetYaw) {
    const dx = (camYaw - targetYaw) / 0.006;
    if (Math.abs(dx) < 1) return;
    await page.mouse.move(640, 400);
    await page.mouse.down();
    const steps = 12;
    for (let i = 1; i <= steps; i++) await page.mouse.move(640 + (dx * i) / steps, 400);
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
      const a = window.__ant;   // the drag can nudge nothing, but re-pin anyway
      a.x = x; a.z = z; a.y = window.__groundY(x, z);
    }, [x, z]);
    await page.waitForTimeout(1800);
  }

  // yaw is used for both the ant's facing and the camera orbit, so each shot
  // frames what a player walking that way would actually be looking at.
  const shots = [
    ['gallery-mid', 0, -60, 0],
    ['gallery-back', 0, -60, Math.PI],
    ['gallery-mouth', 0, -22, 0],
    ['chamber', 2, -118, Math.PI],
    ['brood', rooms.brood[0], rooms.brood[2], Math.PI],
    ['granary', rooms.granary[0], rooms.granary[2], 0],
    ['midden', rooms.midden[0], rooms.midden[2], Math.PI],
    // north of the trunk looking back at it: the sun sits at (30,45,20), so
    // the +z face is the lit one — the -z face is in its own shadow and shows
    // nothing of either the bark or the vertex colours
    ['tree-near', -85, 132, Math.PI],
    ['tree-mid', -85, 165, Math.PI],
  ];

  // The trunk from ant-on-bark distance, reached by actually climbing it
  // (E then W, player/climb.js) rather than by flying the camera there —
  // grass 100 units tall hides the trunk from every ground-level angle, and
  // this is the view a player who climbs the landmark actually gets.
  async function climbShot(name) {
    await place(TREE_X + 25, TREE_Z, Math.PI);
    await page.keyboard.press('KeyE');
    await page.waitForTimeout(300);
    await page.keyboard.down('KeyW');
    await page.waitForTimeout(4000);
    await page.keyboard.up('KeyW');
    await page.waitForTimeout(1500);
    const st = await page.evaluate(() => (window.__ant.climb ? window.__ant.climb.kind + '@y=' + window.__ant.y.toFixed(1) : 'NOT CLIMBING'));
    console.log('  climb state:', st);
    await page.screenshot({ path: path.join(outDir, `${name}.png`) });
  }

  const perf = {};
  for (const [name, x, z, yaw] of shots) {
    await place(x, z, yaw);
    await page.screenshot({ path: path.join(outDir, `${name}.png`) });
    perf[name] = await page.evaluate(async () => {
      const r = window.__renderer, s = window.__scene, c = window.__camera;
      const gl = r.getContext();
      // Stop the game loop first: otherwise every burst is interleaved with
      // full frames of world/player update + another render, which is most of
      // the noise. Restarted below.
      r.setAnimationLoop(null);
      await new Promise((res) => setTimeout(res, 60));
      for (let i = 0; i < 20; i++) r.render(s, c);
      gl.finish();
      const runs = [];
      for (let b = 0; b < 20; b++) {
        const K = 20, t0 = performance.now();
        for (let i = 0; i < K; i++) r.render(s, c);
        gl.finish();
        runs.push((performance.now() - t0) / K);
      }
      runs.sort((a, b2) => a - b2);
      r.setAnimationLoop(window.__frame);
      // min, not mean: the noise here (compositor, GC, other tabs) is purely
      // additive, so the fastest burst is the least-contaminated estimate of
      // what one render of this view actually costs. Median kept for context.
      return {
        ms: +runs[0].toFixed(3), med: +runs[10].toFixed(3),
        calls: r.info.render.calls, tris: r.info.render.triangles,
      };
    });
    console.log(name, JSON.stringify(perf[name]));
  }

  await climbShot('trunk-climb');

  const mem = await page.evaluate(() => {
    const r = window.__renderer, s = window.__scene;
    const geos = new Map(), texs = new Map();
    let attrBytes = 0, idxBytes = 0, verts = 0, tris = 0;
    s.traverse((o) => {
      if (o.geometry && !geos.has(o.geometry.uuid)) {
        geos.set(o.geometry.uuid, true);
        const g = o.geometry;
        for (const k in g.attributes) {
          const a = g.attributes[k];
          attrBytes += a.array.byteLength * (a.isInstancedBufferAttribute ? 1 : 1);
        }
        if (g.index) idxBytes += g.index.array.byteLength;
        const pos = g.attributes.position;
        if (pos) verts += pos.count;
        tris += (g.index ? g.index.count : (pos ? pos.count : 0)) / 3;
      }
      const mats = Array.isArray(o.material) ? o.material : (o.material ? [o.material] : []);
      for (const m of mats) for (const k of ['map', 'normalMap', 'roughnessMap', 'aoMap']) {
        const t = m[k];
        if (t && t.image && !texs.has(t.uuid)) {
          texs.set(t.uuid, { w: t.image.width, h: t.image.height, mip: t.generateMipmaps });
        }
      }
    });
    let texBytes = 0;
    for (const [, t] of texs) texBytes += t.w * t.h * 4 * (t.mip ? 4 / 3 : 1);
    return {
      geometries: geos.size, vertices: verts, triangles: tris,
      attrKB: +(attrBytes / 1024).toFixed(1), idxKB: +(idxBytes / 1024).toFixed(1),
      textures: texs.size, texKB: +(texBytes / 1024).toFixed(1),
      rendererTextures: r.info.memory.textures, rendererGeometries: r.info.memory.geometries,
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

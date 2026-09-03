// Render verification for round 7 (#28 outlines + selective bloom, grass
// shadows, shadow-colour targets of design/charte-stylisation.md 1c).
//
// Usage: node scripts/verify-round7.mjs <outDir>
//
// Why it reads pixels out of the drawing buffer instead of decoding the PNG:
// the things this round has to prove are all *colour* claims (the outline is
// the zone's shadow colour, cast shadow and form shadow land at 25-32% of a
// lit neighbour and within half a value of each other, bloom does not shift
// the sky). Eyeballing a screenshot cannot settle any of them. gl.readPixels
// on the default framebuffer, in the same task as the draw, gives the exact
// bytes the player sees -- after tone mapping and the sRGB transfer, which is
// where the targets are expressed.
//
// Chromium MUST be launched with ANGLE/D3D11 (below): headless Chromium's
// software rasterizer would make every frame timing here a measurement of the
// CPU, not the GPU. Same requirement as the other harnesses.

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gameDir = path.resolve(__dirname, '..');
const outDir = process.argv[2] || path.join(gameDir, '_round7-shots');
fs.mkdirSync(outDir, { recursive: true });

const PORT = 4179;
const URL = 'http://localhost:' + PORT + '/';
const VIEW = { width: 1280, height: 720 };   // the charte's reference frame

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

/* Free-camera shots. */
const SHOTS = [
  { name: 'queen-nest', eye: [34, 15, -100], target: [13, 4, -124] },
  { name: 'queen-nest-close', eye: [21, 7.5, -113], target: [13, 3.5, -124] },
  { name: 'gallery-fungus', eye: [0, 7, -6], target: [0, 3.5, -40] },
  { name: 'chamber-wide', eye: [2, 22, -86], target: [10, 2, -130] },
  { name: 'lawn-wide', eye: [152, 62, 244], target: [112, 0, 152] },
  { name: 'lawn-grass-low', eye: [150, 7, 196], target: [124, 4, 158] },
  { name: 'tree-shadow', eye: [-36, 52, 152], target: [-85, 12, 95] },
  { name: 'tree-foot', eye: [-40, 10, 118], target: [-85, 14, 95] },
];

/* In-game shots: the real controller, the real camera rig, the ant parked at
   a spot. The only way to judge the outline at the zoom actually played. */
const ANT_SHOTS = [
  { name: 'ant-lawn', x: 140, z: 170, yaw: -Math.PI / 2 },
  { name: 'ant-meadow-open', x: 96, z: 150, yaw: -Math.PI / 2 },
];

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
  await page.waitForTimeout(1800);   // textures decode

  const pipeline = await page.evaluate(() => ({
    pixelRatio: window.__renderer.getPixelRatio(),
    composed: !!window.__present,
  }));
  console.log('pipeline:', JSON.stringify(pipeline));

  const perf = {};

  await page.evaluate(() => window.__renderer.setAnimationLoop(null));

  for (const shot of SHOTS) {
    const res = await page.evaluate(([eye, target]) => {
      const r = window.__renderer, s = window.__scene, c = window.__camera;
      const gl = r.getContext();
      // window.__present() draws the *current* camera through whatever
      // pipeline is active (composer if there is one, plain render if not),
      // so the timing below measures the shipping path and not a bypass.
      const present = window.__present || (() => r.render(s, c));
      for (let i = 0; i < 12; i++) window.__renderView(eye, target, 1.0);
      gl.finish();
      const runs = [];
      for (let b = 0; b < 16; b++) {
        const K = 12, t0 = performance.now();
        for (let i = 0; i < K; i++) present();
        gl.finish();
        runs.push((performance.now() - t0) / K);
      }
      runs.sort((a, b2) => a - b2);
      window.__renderView(eye, target, 1.0);      // leave a clean frame up
      // Whole-frame statistics read off the buffer just drawn: mean luminance
      // and the 1st/99th percentiles are what tell you whether a change
      // crushed or washed out the image, and neither survives eyeballing.
      const w = gl.drawingBufferWidth, h = gl.drawingBufferHeight;
      const px = new Uint8Array(w * h * 4);
      gl.readPixels(0, 0, w, h, gl.RGBA, gl.UNSIGNED_BYTE, px);
      let sum = 0; const hist = new Uint32Array(256);
      for (let i = 0; i < w * h; i++) {
        const l = (px[i * 4] * 0.2126 + px[i * 4 + 1] * 0.7152 + px[i * 4 + 2] * 0.0722) | 0;
        sum += l; hist[l]++;
      }
      let acc = 0, p01 = 0, p99 = 0;
      for (let v = 0; v < 256; v++) {
        acc += hist[v];
        if (!p01 && acc > w * h * 0.01) p01 = v;
        if (!p99 && acc > w * h * 0.99) p99 = v;
      }
      return {
        ms: +runs[0].toFixed(3), med: +runs[8].toFixed(3),
        calls: r.info.render.calls, tris: r.info.render.triangles,
        meanL: +(sum / (w * h)).toFixed(1), p01, p99,
      };
    }, [shot.eye, shot.target]);
    perf[shot.name] = res;
    await page.screenshot({ path: path.join(outDir, shot.name + '.png') });
    console.log(shot.name, JSON.stringify(res));
  }

  // ---- in-game shots -----------------------------------------------------
  await page.evaluate(() => window.__renderer.setAnimationLoop(window.__frame));
  for (const s of ANT_SHOTS) {
    await page.evaluate(([x, z, yaw]) => {
      const a = window.__ant;
      a.x = x; a.z = z; a.yaw = yaw; a.y = window.__groundY(x, z);
      if (a.climb) a.climb = null;
    }, [s.x, s.z, s.yaw]);
    await page.waitForTimeout(1700);
    await page.screenshot({ path: path.join(outDir, s.name + '.png') });
    perf[s.name] = await page.evaluate(() => {
      const r = window.__renderer;
      return { calls: r.info.render.calls, tris: r.info.render.triangles };
    });
    console.log(s.name, JSON.stringify(perf[s.name]));
  }
  await page.evaluate(() => window.__renderer.setAnimationLoop(null));

  const mem = await page.evaluate(() => {
    const r = window.__renderer, s = window.__scene;
    const geos = new Map(), texs = new Map();
    let verts = 0, tris = 0;
    s.traverse((o) => {
      if (o.geometry && !geos.has(o.geometry.uuid)) {
        geos.set(o.geometry.uuid, true);
        const g = o.geometry, pos = g.attributes.position;
        if (pos) verts += pos.count;
        tris += (g.index ? g.index.count : (pos ? pos.count : 0)) / 3;
      }
      const mats = Array.isArray(o.material) ? o.material : (o.material ? [o.material] : []);
      for (const m of mats) {
        for (const k of ['map', 'normalMap', 'roughnessMap', 'aoMap']) {
          const t = m[k];
          if (t && t.image && !texs.has(t.uuid)) texs.set(t.uuid, { w: t.image.width, h: t.image.height, mip: t.generateMipmaps });
        }
      }
    });
    let texBytes = 0;
    for (const [, t] of texs) texBytes += t.w * t.h * 4 * (t.mip ? 4 / 3 : 1);
    return {
      geometries: geos.size, vertices: verts, triangles: tris,
      textures: texs.size, texKB: +(texBytes / 1024).toFixed(1),
      programs: r.info.programs.length, memory: r.info.memory,
    };
  });
  console.log('MEMORY', JSON.stringify(mem));
  console.log('console errors:', consoleErrors.length ? consoleErrors : '(none)');

  fs.writeFileSync(path.join(outDir, 'report.json'),
    JSON.stringify({ pipeline, perf, mem, consoleErrors }, null, 1));
  await browser.close();
  server.kill();
  if (consoleErrors.length) process.exitCode = 1;
}

main().catch((e) => { console.error(e); process.exitCode = 1; });

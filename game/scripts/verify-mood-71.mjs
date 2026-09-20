// One-off render verification for #71 (mood pass: lawn, nest mouth, brood
// chamber). Not a permanent harness — Cephalotes' own, on a port none of the
// other agents use (4195; 4179/4181/4183/4191/4193 are taken).
//
// Usage: node scripts/verify-mood-71.mjs <label> <outDir>
//   label  — tag written into report.json ("before" / "after")
//   outDir — where to drop PNGs + report.json
//
// Serves dist/ (rebuild first: npx vite build). Chromium needs ANGLE/D3D11
// or the fps numbers measure the software rasterizer instead of the GPU.

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gameDir = path.resolve(__dirname, '..');
const label = process.argv[2] || 'shot';
const outDir = process.argv[3] || path.join(gameDir, '_mood71-shots');
fs.mkdirSync(outDir, { recursive: true });

const PORT = 4195;
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
  let log = '';
  server.stdout.on('data', (d) => { log += d.toString(); });
  server.stderr.on('data', (d) => { log += d.toString(); });
  try { await waitForServer(URL, 25000); } catch (e) { console.error(log); throw e; }
  console.log('preview up at', URL);

  const browser = await chromium.launch({
    args: ['--use-gl=angle', '--use-angle=d3d11', '--ignore-gpu-blocklist', '--enable-gpu-rasterization',
           '--disable-gpu-vsync', '--disable-frame-rate-limit'],
  });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => { errors.push('pageerror: ' + e.message); });

  await page.goto(URL);
  await page.waitForFunction(() => window.__ant && window.__renderView && window.__world6, null, { timeout: 20000 });
  await page.waitForTimeout(1200);

  const report = { label, shots: {}, fps: null, errors: [] };

  // ---- 1. surface fps, in-game, at the queen's own camera --------------
  // Real animation loop, real player camera, on the open lawn — the number
  // the ticket's budget (>= 55 fps) is about.
  await page.evaluate(([x, z]) => {
    const a = window.__ant;
    a.x = x; a.z = z; a.yaw = 0; a.y = window.__groundY(x, z);
  }, [40, 60]);
  await page.waitForTimeout(600);
  const fps = await page.evaluate(async () => {
    const r = window.__renderer;
    await new Promise((res) => requestAnimationFrame(res));
    const t0 = performance.now();
    let frames = 0;
    await new Promise((resolve) => {
      function tick() {
        frames++;
        if (performance.now() - t0 < 1500) requestAnimationFrame(tick);
        else resolve();
      }
      requestAnimationFrame(tick);
    });
    return (frames / (performance.now() - t0)) * 1000;
  });
  report.fps = +fps.toFixed(1);
  await page.screenshot({ path: path.join(outDir, `${label}-01-lawn.png`) });
  report.shots.lawn = `${label}-01-lawn.png`;

  // ---- 2. found a nest, free camera on the mouth from the lawn ----------
  await page.evaluate(() => window.__renderer.setAnimationLoop(null));
  const founded = await page.evaluate((s) => {
    const r = window.__world6.foundNest(s.x, s.z);
    return { r, nest: window.__world6.getFoundedNest() };
  }, { x: 70, z: 95 });
  if (!founded.r || !founded.r.ok) throw new Error('foundNest failed: ' + JSON.stringify(founded.r));
  const nest = founded.nest;

  await page.evaluate(([eye, target]) => window.__renderView(eye, target), [
    [nest.mouth.x + 26, nest.mouth.y + 14, nest.mouth.z + 34],
    [nest.mouth.x, nest.mouth.y - 1, nest.mouth.z],
  ]);
  await page.screenshot({ path: path.join(outDir, `${label}-02-mouth.png`) });
  report.shots.mouth = `${label}-02-mouth.png`;

  // ---- 3. brood chamber, populated -------------------------------------
  await page.evaluate(() => window.__world6.populateNest(4));
  await page.waitForTimeout(50);
  await page.evaluate(([eye, target]) => window.__renderView(eye, target), [
    [nest.chamber.x + nest.chamber.r * 0.55, nest.floorY + 6, nest.chamber.z - nest.chamber.r * 0.2],
    [nest.chamber.x, nest.floorY + 3, nest.chamber.z + nest.chamber.r * 0.3],
  ]);
  await page.screenshot({ path: path.join(outDir, `${label}-03-brood.png`) });
  report.shots.brood = `${label}-03-brood.png`;

  // ---- pixel sampling: queen vs the soil she stands on, on the lawn -----
  // Render and readPixels in the SAME evaluate() call: the default
  // framebuffer is not guaranteed to survive a round-trip back to Node once
  // the animation loop is stopped and nothing re-renders in between.
  const sample = await page.evaluate(([x, z]) => {
    const a = window.__ant;
    a.x = x; a.z = z; a.yaw = Math.PI * 0.15; a.y = window.__groundY(x, z);
    window.__renderView([a.x + 14, a.y + 10, a.z + 22], [a.x, a.y + 2, a.z]);
    const canvas = window.__renderer.domElement;
    const gl = window.__renderer.getContext();
    const w = canvas.width, h = canvas.height;
    const px = new Uint8Array(4 * 9);
    function readAt(cx, cy) {
      gl.readPixels(cx - 1, h - cy - 1, 3, 3, gl.RGBA, gl.UNSIGNED_BYTE, px);
      let r = 0, g = 0, b = 0;
      for (let i = 0; i < 9; i++) { r += px[i * 4]; g += px[i * 4 + 1]; b += px[i * 4 + 2]; }
      return { r: r / 9, g: g / 9, b: b / 9 };
    }
    const queen = readAt(Math.round(w * 0.547), Math.round(h * 0.319));
    const ground = readAt(Math.round(w * 0.766), Math.round(h * 0.525));
    const lum = (c) => 0.2126 * c.r + 0.7152 * c.g + 0.0722 * c.b;
    return { queen, ground, queenL: +lum(queen).toFixed(1), groundL: +lum(ground).toFixed(1) };
  }, [40, 60]);
  await page.screenshot({ path: path.join(outDir, `${label}-04-queen-lawn.png`) });
  report.sample = sample;

  report.errors = errors;
  fs.writeFileSync(path.join(outDir, `${label}-report.json`), JSON.stringify(report, null, 1));
  console.log(JSON.stringify(report, null, 1));

  await browser.close();
  server.kill();
}

main().catch((e) => { console.error(e); process.exitCode = 1; });

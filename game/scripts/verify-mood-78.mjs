// Render verification for #78 (nest in blue/violet, garden in full palette,
// bloom / light shafts / dust). Same four places before and after:
// lawn, nest mouth looking down the ramp, corridor (chamber -> hall), brood
// chamber — plus fps measured with the real animation loop on the lawn and
// with the queen standing in the chamber.
//
// Usage: node scripts/verify-mood-78.mjs <label> <outDir>
// Serves dist/ (rebuild first: npx vite build). Port 4197.

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gameDir = path.resolve(__dirname, '..');
const label = process.argv[2] || 'shot';
const outDir = process.argv[3] || path.join(gameDir, '_mood78');
fs.mkdirSync(outDir, { recursive: true });

const PORT = 4197;
const URL = `http://localhost:${PORT}/`;
const SITE = { x: 70, z: 95 };

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

async function measureFps(page, ms = 2000) {
  return page.evaluate(async (dur) => {
    await new Promise((res) => requestAnimationFrame(res));
    const t0 = performance.now();
    let frames = 0;
    await new Promise((resolve) => {
      function tick() {
        frames++;
        if (performance.now() - t0 < dur) requestAnimationFrame(tick);
        else resolve();
      }
      requestAnimationFrame(tick);
    });
    return +((frames / (performance.now() - t0)) * 1000).toFixed(1);
  }, ms);
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
  await page.waitForFunction(() => window.__ant && window.__renderView && window.__world6 && window.__faces,
    null, { timeout: 20000 });
  await page.waitForTimeout(1200);

  const report = { label, fps: {}, colour: {}, errors: [] };
  const shot = async (name) => {
    // preserveDrawingBuffer is off: read the colour in the same task as a render
    await page.screenshot({ path: path.join(outDir, `${label}-${name}.png`) });
  };
  /* Move the queen with the real loop running for a moment (her mesh only
     follows through player.update), then freeze it again for a free camera. */
  const parkAnt = async (x, z) => {
    await page.evaluate(([px, pz]) => {
      const a = window.__ant; a.x = px; a.z = pz; a.y = window.__groundY(px, pz);
      window.__renderer.setAnimationLoop(window.__frame);
    }, [x, z]);
    await page.waitForTimeout(500);
    await page.evaluate(() => window.__renderer.setAnimationLoop(null));
  };
  const view = async (eye, aim, name) => {
    await page.evaluate(([e, a]) => window.__renderView(e, a, 3.0), [eye, aim]);
    report.colour[name] = await page.evaluate(([e, a]) => {
      window.__renderView(e, a, 3.0);
      const gl = window.__renderer.getContext();
      const w = gl.drawingBufferWidth, h = gl.drawingBufferHeight;
      const px = new Uint8Array(4 * 64);
      let r = 0, g = 0, b = 0, n = 0;
      for (let j = 1; j < 8; j++) for (let i = 1; i < 10; i++) {
        gl.readPixels(Math.round(w * i / 10), Math.round(h * j / 8), 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px);
        r += px[0]; g += px[1]; b += px[2]; n++;
      }
      return { r: Math.round(r / n), g: Math.round(g / n), b: Math.round(b / n) };
    }, [eye, aim]);
    await shot(name);
  };

  /* 1. surface fps, real loop, queen's own camera, on the lawn */
  await page.evaluate(([x, z]) => {
    const a = window.__ant; a.x = x; a.z = z; a.yaw = 0; a.y = window.__groundY(x, z);
  }, [40, 60]);
  await page.waitForTimeout(800);
  report.fps.surface = await measureFps(page);
  await shot('01-lawn');

  /* 2. found, dig the hall, populate */
  const setup = await page.evaluate((s) => {
    const W = window.__world6;
    const r = W.foundNest(s.x, s.z);
    const f = window.__faces()[0];
    const d = window.__payDig(f.id, f.needed + 1);
    W.populateNest(5);
    return { r, d, nest: W.getFoundedNest(), path: W.descentPath(), rooms: window.__rooms2() };
  }, SITE);
  if (!setup.r || !setup.r.ok) throw new Error('foundNest failed ' + JSON.stringify(setup.r));
  const nest = setup.nest, ch = nest.chamber, P = setup.path;
  const hall = setup.rooms.find((r) => r.id === 'hall');
  console.log('rooms', JSON.stringify(setup.rooms));

  /* 3. nest fps: the queen standing in the brood chamber, real loop */
  await page.evaluate(([x, z]) => {
    const a = window.__ant; a.x = x; a.z = z; a.y = window.__groundY(x, z);
  }, [ch.x + ch.r * 0.2, ch.z]);
  await page.waitForTimeout(1500);
  report.fps.nest = await measureFps(page);
  await shot('05-nest-ingame');

  /* Out of every free-camera frame but still underground: main.js keys its
     fog on whichever of the eye and the ant is more outdoors, so parking her
     on the lawn would light the corridor shots as the meadow. */
  await page.evaluate(([x, z]) => {
    const a = window.__ant; a.x = x; a.z = z; a.y = window.__groundY(x, z);
    const st = document.createElement('style');
    st.textContent = 'body > *:not(#app) { visibility: hidden !important; }';
    document.head.appendChild(st);
  }, [ch.x + ch.r * 0.8, ch.z - ch.r * 0.35]);
  // a few real frames so her mesh follows, then freeze the loop
  await page.waitForTimeout(600);
  await page.evaluate(() => window.__renderer.setAnimationLoop(null));

  /* 4. mouth: behind and above the top of the ramp, looking down it */
  const p0 = P[0], p1 = P[Math.min(P.length - 1, Math.floor(P.length * 0.6))];
  const dx = p1.x - p0.x, dz = p1.z - p0.z, dl = Math.hypot(dx, dz) || 1;
  await view([p0.x - (dx / dl) * 14, p0.y + 11, p0.z - (dz / dl) * 14], [p1.x, p1.y + 1, p1.z], '02-mouth');

  /* 4b. halfway down the ramp, looking on down: the threshold as walked */
  {
    const k = Math.floor(P.length * 0.45), q = P[k], e = P[P.length - 1];
    const bx = q.x - P[Math.max(0, k - 2)].x, bz = q.z - P[Math.max(0, k - 2)].z, bl = Math.hypot(bx, bz) || 1;
    await view([q.x - (bx / bl) * 9, q.y + 7, q.z - (bz / bl) * 9], [e.x, e.y + 2, e.z], '02b-ramp');
  }

  /* 5. corridor: from the chamber side, looking along the tunnel to the hall */
  if (hall) {
    const hx = hall.x - ch.x, hz = hall.z - ch.z, hl = Math.hypot(hx, hz) || 1;
    const ex = ch.x + (hx / hl) * ch.r * 0.35, ez = ch.z + (hz / hl) * ch.r * 0.35;
    await parkAnt(ch.x - (hx / hl) * ch.r * 0.5, ch.z - (hz / hl) * ch.r * 0.5);
    await view([ex, nest.floorY + 5, ez], [hall.x, hall.floorY + 3, hall.z], '03-corridor');
  }

  /* 6. brood chamber, same framing as verify-mood-71 */
  await parkAnt(ch.x + ch.r * 0.8, ch.z - ch.r * 0.35);
  await view([ch.x + ch.r * 0.55, nest.floorY + 6, ch.z - ch.r * 0.2],
    [ch.x, nest.floorY + 3, ch.z + ch.r * 0.3], '04-brood');

  report.errors = errors;
  fs.writeFileSync(path.join(outDir, `${label}-report.json`), JSON.stringify(report, null, 1));
  console.log(JSON.stringify(report, null, 1));
  await browser.close();
  // on Windows the shell-spawned preview survives kill(); take its whole tree
  if (process.platform === 'win32') spawn('taskkill', ['/PID', String(server.pid), '/T', '/F'], { stdio: 'ignore' });
  else server.kill();
  setTimeout(() => process.exit(0), 800);
}

main().catch((e) => { console.error(e); process.exitCode = 1; });

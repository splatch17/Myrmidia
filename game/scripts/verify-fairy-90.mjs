// Render verification for #90 (the nest's fairy ambiance): the same framings
// as design/refs/90/90-proto-vs-game.jpg — corridor, ramp, brood chamber —
// plus the hall's fungus cluster and the queen's own camera in the chamber,
// fps on the lawn and in the nest, the prototype's tunnel captured live for a
// side-by-side, and the acceptance metrics of design/ambiance-prologue.md §10c
// printed for every shot (crop 300-980 x 120-680 of a 1280x800 frame).
//
// Usage: node scripts/verify-fairy-90.mjs <label> <outDir> [--no-proto]
// Serves dist/ (rebuild first: npx vite build). Port 4191.

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gameDir = path.resolve(__dirname, '..');
const label = process.argv[2] || 'shot';
const outDir = process.argv[3] || path.join(gameDir, '_fairy90');
const withProto = !process.argv.includes('--no-proto');
fs.mkdirSync(outDir, { recursive: true });

const PORT = 4191;  // not 4190: fetch() refuses it (ManageSieve)
const URL = `http://localhost:${PORT}/`;
const SITE = { x: 70, z: 95 };
const PROTO = pathToFileURL(path.resolve(gameDir, '..', 'design', 'prototypes', 'sortie-fourmiliere.html')).href;

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

async function measureFps(page, ms = 2500) {
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

/* five 2.5 s runs, the median: a single run swung 136-165 on the same build */
async function fpsMedian(page) {
  const r = [];
  for (let i = 0; i < 5; i++) r.push(await measureFps(page));
  return r.sort((a, b) => a - b)[2];
}

/* §10c metrics, computed from the PNG in a canvas so the game's and the
   prototype's shots are measured by exactly the same code. */
async function metricsOf(page, files) {
  const data = files.map((f) => 'data:image/png;base64,' + fs.readFileSync(f).toString('base64'));
  return page.evaluate(async (urls) => {
    const out = [];
    for (const u of urls) {
      const img = new Image();
      img.src = u;
      await img.decode();
      const c = document.createElement('canvas');
      c.width = img.width; c.height = img.height;
      const g = c.getContext('2d');
      g.drawImage(img, 0, 0);
      const sx = img.width / 1280, sy = img.height / 800;
      const x0 = Math.round(300 * sx), y0 = Math.round(120 * sy);
      const w = Math.round(680 * sx), h = Math.round(560 * sy);
      const d = g.getImageData(x0, y0, w, h).data;
      const Ls = new Float32Array(w * h);
      let dark = 0, sat = 0, pastel = 0, maxRun = 0;
      let er = 0, eg = 0, eb = 0, en = 0;
      for (let j = 0; j < h; j++) {
        let run = 0;
        for (let i = 0; i < w; i++) {
          const k = (j * w + i) * 4;
          const r = d[k] / 255, gg = d[k + 1] / 255, b = d[k + 2] / 255;
          const L = 0.2126 * r + 0.7152 * gg + 0.0722 * b;
          Ls[j * w + i] = L;
          if (L < 0.06) dark++;
          const mx = Math.max(r, gg, b), mn = Math.min(r, gg, b);
          sat += mx > 0 ? (mx - mn) / mx : 0;
          if (d[k] >= 0xa0 && d[k] <= 0xd0 && d[k + 1] >= 0x70 && d[k + 1] <= 0xa0 && d[k + 2] >= 0xc0 && d[k + 2] <= 0xe8) pastel++;
          if (L >= 0.985) { run++; if (run > maxRun) maxRun = run; } else run = 0;
          // "earth": warm-ish, mid value, not the pastel accent
          if (L > 0.18 && L < 0.6 && d[k] >= d[k + 2]) { er += d[k]; eg += d[k + 1]; eb += d[k + 2]; en++; }
        }
      }
      const sorted = Array.from(Ls).sort((a, b) => a - b);
      const pc = (p) => sorted[Math.min(sorted.length - 1, Math.floor(p * sorted.length))];
      const hex = (v) => Math.round(v).toString(16).padStart(2, '0');
      const n = w * h;
      out.push({
        L5: +pc(0.05).toFixed(3), L50: +pc(0.5).toFixed(3), L95: +pc(0.95).toFixed(3),
        dark: +(dark / n * 100).toFixed(1), sat: +(sat / n).toFixed(3),
        pastel: +(pastel / n * 100).toFixed(2), whiteDisc: +(maxRun / img.width * 100).toFixed(2),
        earth: en ? '#' + hex(er / en) + hex(eg / en) + hex(eb / en) : '-', earthPct: +(en / n * 100).toFixed(1),
      });
    }
    return out;
  }, data);
}

async function composite(page, rows, file) {
  const data = rows.map((r) => r.map((f) => (f && fs.existsSync(f) ? 'data:image/png;base64,' + fs.readFileSync(f).toString('base64') : null)));
  const names = rows.map((r) => r.map((f) => (f ? path.basename(f, '.png') : '')));
  const url = await page.evaluate(async ([rowsU, rowsN]) => {
    const W = 640, H = 400;
    const cols = Math.max(...rowsU.map((r) => r.length));
    const c = document.createElement('canvas');
    c.width = W * cols; c.height = H * rowsU.length;
    const g = c.getContext('2d');
    g.fillStyle = '#000'; g.fillRect(0, 0, c.width, c.height);
    for (let j = 0; j < rowsU.length; j++) for (let i = 0; i < rowsU[j].length; i++) {
      if (!rowsU[j][i]) continue;
      const img = new Image(); img.src = rowsU[j][i]; await img.decode();
      g.drawImage(img, i * W, j * H, W, H);
      g.fillStyle = 'rgba(0,0,0,0.7)'; g.fillRect(i * W, j * H, 300, 22);
      g.fillStyle = '#fff'; g.font = '14px sans-serif'; g.fillText(rowsN[j][i], i * W + 6, j * H + 16);
    }
    return c.toDataURL('image/jpeg', 0.88);
  }, [data, names]);
  fs.writeFileSync(file, Buffer.from(url.split(',')[1], 'base64'));
}

async function captureProto(browser) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  await page.goto(PROTO);
  await page.waitForTimeout(2500);
  const files = [];
  const snap = async (name) => {
    const f = path.join(outDir, `proto-${name}.png`);
    await page.screenshot({ path: f });
    files.push(f);
  };
  await snap('chamber');
  // walk out of the queen's chamber, up the gallery toward the mouth
  await page.keyboard.down('ArrowUp');
  await page.waitForTimeout(4200);
  await page.keyboard.up('ArrowUp');
  await page.waitForTimeout(700);
  await snap('gallery');
  await page.keyboard.down('ArrowUp');
  await page.waitForTimeout(4500);
  await page.keyboard.up('ArrowUp');
  await page.waitForTimeout(700);
  await snap('tunnel');
  await page.close();
  return files;
}

async function main() {
  // FAIRY_DIST=dist-base serves another build (the before/after fps comparison)
  const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort',
    ...(process.env.FAIRY_DIST ? ['--outDir', process.env.FAIRY_DIST] : [])], {
    cwd: gameDir, shell: true, stdio: 'pipe',
  });
  let log = '';
  server.stdout.on('data', (d) => { log += d.toString(); });
  server.stderr.on('data', (d) => { log += d.toString(); });
  try { await waitForServer(URL, 90000); } catch (e) { console.error(log); throw e; }
  console.log('preview up at', URL);

  const browser = await chromium.launch({
    args: ['--use-gl=angle', '--use-angle=d3d11', '--ignore-gpu-blocklist', '--enable-gpu-rasterization',
      '--disable-gpu-vsync', '--disable-frame-rate-limit', '--allow-file-access-from-files'],
  });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => { errors.push('pageerror: ' + e.message); });

  await page.goto(URL);
  await page.waitForFunction(() => window.__ant && window.__renderView && window.__world6 && window.__faces,
    null, { timeout: 20000 });
  await page.waitForTimeout(1200);

  const report = { label, fps: {}, metrics: {}, lamps: null, errors: [] };
  const shots = {};
  const shot = async (name) => {
    const f = path.join(outDir, `${label}-${name}.png`);
    await page.screenshot({ path: f });
    shots[name] = f;
  };
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
    await page.evaluate(([e, a]) => window.__renderView(e, a, 3.0), [eye, aim]);
    await shot(name);
  };

  /* 1. surface fps */
  await page.evaluate(([x, z]) => {
    const a = window.__ant; a.x = x; a.z = z; a.yaw = 0; a.y = window.__groundY(x, z);
  }, [40, 60]);
  await page.waitForTimeout(800);
  report.fps.surface = await fpsMedian(page);
  await shot('01-lawn');

  /* 2. found, dig the hall, populate */
  const setup = await page.evaluate((s) => {
    const W = window.__world6;
    const r = W.foundNest(s.x, s.z);
    const f = window.__faces()[0];
    const d = window.__payDig(f.id, f.needed + 1);
    W.populateNest(5);
    return { r, d, nest: W.getFoundedNest(), path: W.descentPath(), rooms: window.__rooms2(),
      fungus: W.nestFungus.map((q) => ({ ...q })) };
  }, SITE);
  if (!setup.r || !setup.r.ok) throw new Error('foundNest failed ' + JSON.stringify(setup.r));
  const nest = setup.nest, ch = nest.chamber, P = setup.path;
  const hall = setup.rooms.find((r) => r.id === 'hall');
  report.fungus = setup.fungus.reduce((m, q) => { m[q.room] = (m[q.room] || 0) + 1; return m; }, {});

  /* 3. nest fps: the queen in the brood chamber, real loop */
  await page.evaluate(([x, z]) => {
    const a = window.__ant; a.x = x; a.z = z; a.y = window.__groundY(x, z);
  }, [ch.x + ch.r * 0.2, ch.z]);
  await page.waitForTimeout(1500);
  report.fps.nest = await fpsMedian(page);
  await shot('05-nest-ingame');

  await page.evaluate(([x, z]) => {
    const a = window.__ant; a.x = x; a.z = z; a.y = window.__groundY(x, z);
    const st = document.createElement('style');
    st.textContent = 'body > *:not(#app) { visibility: hidden !important; }';
    document.head.appendChild(st);
  }, [ch.x + ch.r * 0.8, ch.z - ch.r * 0.35]);
  await page.waitForTimeout(600);
  await page.evaluate(() => window.__renderer.setAnimationLoop(null));

  /* 4. mouth: behind and above the top of the ramp, looking down it */
  const p0 = P[0], p1 = P[Math.min(P.length - 1, Math.floor(P.length * 0.6))];
  const dx = p1.x - p0.x, dz = p1.z - p0.z, dl = Math.hypot(dx, dz) || 1;
  await view([p0.x - (dx / dl) * 14, p0.y + 11, p0.z - (dz / dl) * 14], [p1.x, p1.y + 1, p1.z], '02-mouth');

  /* 4a. the trench's rim at the lawn, from high up beside the mouth (porter:
     "straight, linear edges") */
  {
    const q = P[Math.floor(P.length * 0.25)];
    const nx = -dz / dl, nz = dx / dl;
    await view([p0.x + nx * 30 - (dx / dl) * 18, p0.y + 34, p0.z + nz * 30 - (dz / dl) * 18], [q.x, q.y, q.z], '02a-rim');
    await view([p0.x - (dx / dl) * 6, p0.y + 70, p0.z - (dz / dl) * 6], [q.x + (dx / dl) * 10, q.y, q.z + (dz / dl) * 10], '02c-rim-top');
    // which mesh draws what, on a coarse grid of the rim frame
    report.picks = await page.evaluate(() => {
      const T = window.__THREE, rc = new T.Raycaster(), out = {};
      for (let j = 1; j < 6; j++) for (let i = 1; i < 8; i++) {
        rc.setFromCamera(new T.Vector2(i / 4 - 1, 1 - j / 3), window.__camera);
        const hit = rc.intersectObjects(window.__scene.children, true).find((h) => h.object.visible && h.object.isMesh);
        out[`${i * 160},${j * 133}`] = hit ? `${hit.object.name || hit.object.type}@${hit.distance.toFixed(0)}` : '-';
      }
      return out;
    });
    console.log('picks', JSON.stringify(report.picks));
  }

  /* 4b. halfway down the ramp, looking on down */
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
    /* 5b. inside the corridor itself, halfway, low: the frame §10b.6 asks
       four lit lamps of */
    const mx = (ch.x + hall.x) / 2, mz = (ch.z + hall.z) / 2;
    const my = await page.evaluate(([x, z]) => window.__groundY(x, z), [mx - (hx / hl) * 6, mz - (hz / hl) * 6]);
    await view([mx - (hx / hl) * 6, my + 3.2, mz - (hz / hl) * 6], [hall.x, hall.floorY + 2, hall.z], '03b-in-corridor');
    report.lamps = await page.evaluate(() => {
      const L = window.__lightsInView ? window.__lightsInView() : null;
      return L;
    });
  }

  /* 6. brood chamber */
  await parkAnt(ch.x + ch.r * 0.8, ch.z - ch.r * 0.35);
  await view([ch.x + ch.r * 0.55, nest.floorY + 6, ch.z - ch.r * 0.2],
    [ch.x, nest.floorY + 3, ch.z + ch.r * 0.3], '04-brood');

  /* 7. the hall's fungus cluster, from the room's middle, low */
  const hf = setup.fungus.filter((q) => q.room === 'hall');
  if (hall && hf.length) {
    const fx = hf.reduce((s, q) => s + q.x, 0) / hf.length, fz = hf.reduce((s, q) => s + q.z, 0) / hf.length;
    const fy = hf[0].y;
    const vx = hall.x - fx, vz = hall.z - fz, vl = Math.hypot(vx, vz) || 1;
    await view([fx + (vx / vl) * 13, fy + 4.5, fz + (vz / vl) * 13], [fx, fy + 2.2, fz], '06-fungus');
  }

  report.errors = errors;

  let protoFiles = [];
  if (withProto) {
    const pf = path.join(outDir, 'proto-tunnel.png');
    protoFiles = fs.existsSync(pf) ? ['tunnel', 'gallery', 'chamber'].map((n) => path.join(outDir, `proto-${n}.png`))
      : await captureProto(browser);
  }

  const names = Object.keys(shots);
  const mm = await metricsOf(page, names.map((n) => shots[n]));
  names.forEach((n, i) => { report.metrics[n] = mm[i]; });
  if (protoFiles.length) {
    const pm = await metricsOf(page, protoFiles);
    protoFiles.forEach((f, i) => { report.metrics[path.basename(f, '.png')] = pm[i]; });
    await composite(page, [
      protoFiles.map((f) => f),
      [shots['03b-in-corridor'] || shots['03-corridor'], shots['02b-ramp'], shots['04-brood']],
      [shots['06-fungus'], shots['03-corridor'], shots['02-mouth']],
    ], path.join(outDir, `${label}-composite.jpg`));
  }

  fs.writeFileSync(path.join(outDir, `${label}-report.json`), JSON.stringify(report, null, 1));
  console.log('fps', JSON.stringify(report.fps), 'fungus', JSON.stringify(report.fungus), 'lamps', JSON.stringify(report.lamps));
  console.log('shot                 L5    L50   L95   dark%  sat    pastel% white% earth');
  for (const [n, m] of Object.entries(report.metrics)) {
    console.log(n.padEnd(20), String(m.L5).padEnd(5), String(m.L50).padEnd(5), String(m.L95).padEnd(5),
      String(m.dark).padEnd(6), String(m.sat).padEnd(6), String(m.pastel).padEnd(7), String(m.whiteDisc).padEnd(6), m.earth, `(${m.earthPct}%)`);
  }
  if (errors.length) console.log('ERRORS', errors);
  await browser.close();
  if (process.platform === 'win32') spawn('taskkill', ['/PID', String(server.pid), '/T', '/F'], { stdio: 'ignore' });
  else server.kill();
  setTimeout(() => process.exit(0), 800);
}

main().catch((e) => { console.error(e); process.exitCode = 1; });

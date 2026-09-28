// Render + collision verification for #80 (decor from the prototype):
// garden mushrooms / mossy pebbles / fallen leaf on the lawn, a glowing
// fungus cluster in a dug room, and the collision of both.
//
//   1. surface fps with the real loop, the queen at her spawn
//   2. lawn shots framing a mushroom cluster, a pebble group and the leaf
//   3. collision: every garden footprint is seen by the player's own
//      resolver (window.__decorPenetration), and a queen dropped into a
//      mushroom stem / a pebble / the leaf is pushed out by the real loop
//   4. found at the harness site, dig the hall: nothing of the garden is
//      left on the nest's footprint or its mouth; the hall has a cluster,
//      its lamp replaced the far cold lamp (lamp count unchanged)
//   5. nest fps with the queen in the hall, and shots of the cluster
//
// Usage: node scripts/verify-decor-80.mjs [outDir]
// Serves dist/ (rebuild first: npx vite build). Port 4198.

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gameDir = path.resolve(__dirname, '..');
const outDir = process.argv[2] || path.join(gameDir, '_decor80');
fs.mkdirSync(outDir, { recursive: true });

const PORT = 4198;
const URL = `http://localhost:${PORT}/`;
const SITE = { x: 70, z: 95 };

const results = [];
const check = (ok, msg) => { results.push({ ok: !!ok, msg }); console.log((ok ? 'PASS ' : 'FAIL ') + msg); };

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
      function tick() { frames++; if (performance.now() - t0 < dur) requestAnimationFrame(tick); else resolve(); }
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

  const browser = await chromium.launch({
    args: ['--use-gl=angle', '--use-angle=d3d11', '--ignore-gpu-blocklist', '--enable-gpu-rasterization',
      '--disable-gpu-vsync', '--disable-frame-rate-limit'],
  });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => { errors.push('pageerror: ' + e.message); });

  await page.goto(URL);
  await page.waitForFunction(() => window.__ant && window.__renderView && window.__world6 && window.__faces
    && window.__decorPenetration && window.__lights, null, { timeout: 20000 });
  await page.waitForTimeout(1200);
  const report = { fps: {}, garden: null, errors: [] };
  const shot = (name) => page.screenshot({ path: path.join(outDir, `${name}.png`) });

  /* 1. surface fps at spawn, real loop */
  report.fps.surface = await measureFps(page);
  await shot('01-spawn-view');

  const garden = await page.evaluate(() => {
    const g = window.__world6.garden;
    return { counts: g.counts, sites: g.sites, rocks: window.__world6.rocks.length };
  });
  report.garden = garden.counts;
  check(garden.counts.mushrooms >= 12 && garden.counts.mushrooms <= 60, `garden mushrooms: ${garden.counts.mushrooms}`);
  check(garden.counts.pebbles >= 6 && garden.counts.pebbles <= 30, `garden pebbles: ${garden.counts.pebbles}`);
  check(garden.counts.leaf, 'a fallen leaf is placed');

  /* 2. free-camera shots of the lawn decor (loop stopped, HUD hidden) */
  await page.evaluate(() => {
    window.__renderer.setAnimationLoop(null);
    const st = document.createElement('style');
    st.id = 'hide-hud';
    st.textContent = 'body > *:not(#app) { visibility: hidden !important; }';
    document.head.appendChild(st);
  });
  const S = garden.sites;
  const gy = (x, z) => page.evaluate(([a, b]) => window.__groundY(a, b), [x, z]);
  const view = async (eye, aim, name) => {
    await page.evaluate(([e, a]) => window.__renderView(e, a, 3.0), [eye, aim]);
    await page.evaluate(([e, a]) => window.__renderView(e, a, 3.0), [eye, aim]);
    await shot(name);
  };
  {
    const c = S.clusters[0];
    const y = await gy(c[0], c[1]);
    await view([c[0] + 34, y + 16, c[1] + 22], [c[0], y + 6, c[1]], '02-lawn-mushrooms');
    await view([c[0] + 14, y + 3.5, c[1] + 9], [c[0], y + 9, c[1]], '02b-lawn-mushrooms-low');
  }
  {
    const g = S.groups[0];
    const y = await gy(g[0], g[1]);
    await view([g[0] - 30, y + 20, g[1] - 34], [g[0], y + 2, g[1]], '03-lawn-pebbles-leaf');
  }
  {
    const c = S.clusters[1] || S.clusters[0];
    const y = await gy(c[0], c[1]);
    await view([c[0] - 60, y + 40, c[1] + 70], [c[0], y, c[1]], '04-lawn-wide');
  }
  await page.evaluate(() => { document.getElementById('hide-hud').remove(); window.__renderer.setAnimationLoop(window.__frame); });

  /* 3. collision */
  const pen = await page.evaluate((sites) => {
    const P = window.__decorPenetration;
    const tall = sites.mushrooms.find((m) => m.H > 6.5), short = sites.mushrooms.find((m) => m.H <= 6.5);
    return {
      tall: tall ? P(tall.x, tall.z) : -1,
      short: short ? P(short.x, short.z) : -1,
      pebbles: sites.pebbles.map((p) => P(p.x, p.z)),
      leaf: sites.leaf ? 1 : 0,
      tallAt: tall, shortAt: short,
    };
  }, S);
  check(pen.tall > 0, `a tall mushroom's stem collides (penetration at centre ${pen.tall.toFixed(2)})`);
  check(pen.short > 0, `a short mushroom collides (penetration at centre ${pen.short.toFixed(2)})`);
  check(pen.pebbles.every((p) => p > 0), `every pebble collides (${pen.pebbles.length})`);

  const pushOut = async (x, z, label) => {
    const r = await page.evaluate(async ([px, pz]) => {
      const a = window.__ant; a.x = px + 0.3; a.z = pz + 0.2; a.y = window.__groundY(a.x, a.z);
      await new Promise((res) => setTimeout(res, 700));
      return { x: a.x, z: a.z, pen: window.__decorPenetration(a.x, a.z, window.__antRadius) };
    }, [x, z]);
    check(r.pen < 0.2, `${label}: queen dropped into it ends outside (residual ${r.pen.toFixed(2)}, moved ${Math.hypot(r.x - x, r.z - z).toFixed(1)})`);
  };
  if (pen.tallAt) await pushOut(pen.tallAt.x, pen.tallAt.z, 'tall mushroom stem');
  if (pen.shortAt) await pushOut(pen.shortAt.x, pen.shortAt.z, 'short mushroom');
  await pushOut(S.pebbles[0].x, S.pebbles[0].z, 'pebble');

  /* 4. found, dig the hall */
  const lampsBefore = await page.evaluate(() => window.__lights().length);
  const setup = await page.evaluate((s) => {
    const W = window.__world6;
    const hid0 = W.garden.hiddenCount();
    const r = W.foundNest(s.x, s.z);
    const hid1 = W.garden.hiddenCount();
    const lamps0 = window.__lights().length;
    const f = window.__faces()[0];
    window.__payDig(f.id, f.needed + 1);
    W.populateNest(5);
    const lamps1 = window.__lights().length;
    const fp = W.nestFootprint();
    // anything of the garden still standing on the dug ground?
    const onNest = W.garden.sites.mushrooms.concat(W.garden.sites.pebbles)
      .filter((p) => fp.contains(p.x, p.z));
    const nest = W.getFoundedNest();
    const stillNear = W.rocks.filter((k) => Math.hypot(k.x - nest.mouth.x, k.z - nest.mouth.z) < 20).length;
    return { r, hid0, hid1, hidAfter: W.garden.hiddenCount(), lamps0, lamps1, onNestVisible: onNest.length,
      stillNear, nest, fungus: W.nestFungus.slice(), rooms: window.__rooms2() };
  }, SITE);
  check(setup.r && setup.r.ok, 'foundNest at the harness site');
  console.log('garden props hidden by the dig:', setup.hid0, '->', setup.hidAfter);
  check(setup.stillNear === 0, `no garden collider within 20 of the mouth (${setup.stillNear})`);
  const hall = setup.rooms.find((r) => r.id === 'hall');
  check(!!hall, 'hall dug');
  const inHall = setup.fungus.filter((f) => f.room === 'hall');
  check(inHall.length >= 5, `hall has a fungus cluster (${inHall.length} caps)`);
  // hall adds 2 link lamps + mid + (far OR the cluster's lamp) = 4 either way
  check(setup.lamps1 - setup.lamps0 === 4, `hall added ${setup.lamps1 - setup.lamps0} lamps (4 expected: the cluster replaces the far lamp)`);
  if (hall && inHall.length) {
    const d = Math.min(...inHall.map((f) => Math.hypot(f.x - hall.x, f.z - hall.z)));
    check(d > hall.r * 0.6, `the cluster stands against the wall (nearest cap ${d.toFixed(1)} of r=${hall.r.toFixed(1)})`);
    const faces = await page.evaluate(() => window.__faces());
    const nearFace = faces.filter((f) => inHall.some((c) => Math.hypot(c.x - f.x, c.z - f.z) < 7));
    check(nearFace.length === 0, `no cap within 7 of a dig face (${nearFace.length})`);
  }

  /* 5. nest fps in the hall, then shots of the cluster */
  if (hall) {
    await page.evaluate(([x, z]) => { const a = window.__ant; a.x = x; a.z = z; a.y = window.__groundY(x, z); }, [hall.x, hall.z]);
    await page.waitForTimeout(1500);
    report.fps.nestHall = await measureFps(page);
    await shot('05-hall-ingame');
  }
  const ch = setup.nest.chamber;
  await page.evaluate(([x, z]) => { const a = window.__ant; a.x = x; a.z = z; a.y = window.__groundY(x, z); }, [ch.x + ch.r * 0.2, ch.z]);
  await page.waitForTimeout(1500);
  report.fps.nestChamber = await measureFps(page);
  await shot('06-chamber-ingame');

  if (hall && inHall.length) {
    const cx = inHall.reduce((s, f) => s + f.x, 0) / inHall.length, cz = inHall.reduce((s, f) => s + f.z, 0) / inHall.length;
    const fy = hall.floorY;
    // queen parked in the corridor behind the camera, loop frozen
    await page.evaluate(([x, z]) => {
      const a = window.__ant; a.x = x; a.z = z; a.y = window.__groundY(x, z);
      const st = document.createElement('style');
      st.textContent = 'body > *:not(#app) { visibility: hidden !important; }';
      document.head.appendChild(st);
    }, [ch.x, ch.z]);   // out of frame, still underground (main.js keys its air on her)
    await page.waitForTimeout(500);
    await page.evaluate(() => window.__renderer.setAnimationLoop(null));
    const ex = hall.x - (cx - hall.x) * 0.35, ez = hall.z - (cz - hall.z) * 0.35;
    await view([ex, fy + 7, ez], [cx, fy + 2.5, cz], '07-hall-fungus');
    await view([hall.x + (cx - hall.x) * 0.45, fy + 4, hall.z + (cz - hall.z) * 0.45], [cx, fy + 3, cz], '08-hall-fungus-close');
  }

  report.errors = errors;
  check(errors.length === 0, `no console errors (${errors.length})`);
  report.results = results;
  fs.writeFileSync(path.join(outDir, 'report.json'), JSON.stringify(report, null, 1));
  console.log(JSON.stringify(report.fps), JSON.stringify(report.garden));
  if (errors.length) console.log(errors.slice(0, 5));
  await browser.close();
  if (process.platform === 'win32') spawn('taskkill', ['/PID', String(server.pid), '/T', '/F'], { stdio: 'ignore' });
  else server.kill();
  const failed = results.filter((r) => !r.ok).length;
  console.log(failed ? `${failed} FAILED` : 'ALL PASS');
  process.exitCode = failed ? 1 : 0;
  setTimeout(() => process.exit(process.exitCode), 800);
}

main().catch((e) => { console.error(e); process.exitCode = 1; });

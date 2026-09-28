// Verification for #34 — macro mode, first slice.
//
//   1. before founding: M opens the model on the queen, with the
//      "pas encore de fourmilière" note; M again returns
//   2. found at the harness site, dig the hall and one room past it, leave
//      a face half dug, lay, place a few ants
//   3. play pose recorded; M; the model: legend up, play panels down,
//      earth hidden, nest cavities on the model material; fps
//   4. three orbit angles (real mouse drags), a zoom (real wheel), a pan
//      (real right-drag, clamped to the nest)
//   5. hover the hall with the real mouse: highlight + tooltip; click it:
//      selection stored and onSelect listeners told
//   6. M: back to the exact play pose, everything restored; no console error
//
// Usage: node scripts/verify-macro-34.mjs [outDir]
// Serves dist/ (rebuild first: npx vite build). Port 4196.

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gameDir = path.resolve(__dirname, '..');
const outDir = process.argv[2] || path.join(gameDir, '_macro34');
fs.mkdirSync(outDir, { recursive: true });

const PORT = 4196;
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

const shown = (page, id) => page.evaluate((i) => {
  const e = document.getElementById(i);
  return !!e && getComputedStyle(e).display !== 'none';
}, id);

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
  await page.waitForFunction(() => window.__ant && window.__macro && window.__world6 && window.__colony,
    null, { timeout: 20000 });
  await page.waitForTimeout(1200);
  const report = { fps: {}, errors: [] };
  const shot = (name) => page.screenshot({ path: path.join(outDir, `${name}.png`) });
  const mode = () => page.evaluate(() => window.__macro.mode);
  const M = async () => { await page.keyboard.press('m'); await page.waitForTimeout(900); };

  /* 1. before founding */
  await page.mouse.move(640, 700);
  await M();
  check(await mode() === 'macro', 'M opens the macro view before any nest');
  check(await shown(page, 'macronote'), 'the "pas encore de fourmilière" note is up');
  check(await page.evaluate(() => window.__macro.founded() === false), 'macro knows nothing is founded');
  await shot('00-macro-no-nest');
  await M();
  check(await mode() === 'play', 'M again returns to play');
  check(!(await shown(page, 'macronote')), 'the note is gone');

  /* 2. found, dig, lay, place ants */
  const setup = await page.evaluate((s) => {
    const W = window.__world6;
    const r = W.foundNest(s.x, s.z);
    const first = window.__faces()[0];
    window.__payDig(first.id, first.needed + 1);           // the hall
    const hallFaces = window.__faces();
    window.__payDig(hallFaces[0].id, hallFaces[0].needed + 1); // a room past it
    const rest = window.__faces();
    if (rest[0]) window.__payDig(rest[0].id, rest[0].needed * 0.45); // half a face
    W.populateNest(4);
    const rooms = window.__rooms2();
    const col = window.__colony();
    const hall = rooms.find((q) => q.id === 'hall');
    const ch = rooms.find((q) => q.id === 'chamber');
    for (let i = 0; i < 4; i++) col.spawnAt(hall.x + Math.cos(i * 1.6) * 6, hall.z + Math.sin(i * 1.6) * 6, 'digger');
    for (let i = 0; i < 3; i++) col.spawnAt(ch.x + Math.cos(i * 2.1) * 8, ch.z + Math.sin(i * 2.1) * 8, 'worker');
    const a = window.__ant;
    a.x = ch.x + ch.r * 0.2; a.z = ch.z; a.y = window.__groundY(a.x, a.z);
    return { ok: r.ok, rooms, faces: window.__faces().map((f) => ({ id: f.id, worked: f.worked, needed: f.needed })) };
  }, SITE);
  check(setup.ok, 'foundNest at the harness site');
  check(setup.rooms.length >= 3, `rooms dug: ${setup.rooms.map((r) => `${r.id}(${r.size})`).join(', ')}`);
  check(setup.rooms.every((r) => r.size), 'every room publishes a size');
  check(setup.faces.some((f) => f.worked > 0 && f.worked < f.needed), 'a face is part-dug');
  await page.waitForTimeout(2500);
  report.fps.play = await measureFps(page);
  await shot('01-play-before');
  const pose0 = await page.evaluate(() => ({
    p: window.__camera.position.toArray(), q: window.__camera.quaternion.toArray(),
  }));

  /* 3. into the model */
  await page.mouse.move(1200, 60);
  await page.keyboard.press('m');
  await page.waitForTimeout(250);
  check(await mode() === 'enter', 'the camera is in transition 0.25 s after M');
  await page.waitForTimeout(650);
  check(await mode() === 'macro', 'and settled in the model after 0.9 s');
  const state = await page.evaluate(() => {
    const w = window.__world;
    const n = window.__world6.getFoundedNest();
    const cav = []; const spoil = [];
    n.group.traverse((o) => {
      if (!o.isMesh || o.userData.macroGhost) return;
      if (/^(founded-nest-shell|nest-room-|nest-link-)/.test(o.name)) cav.push(o.material.type);
      if (/^nest-(mound|heap-|berm-|pan)/.test(o.name)) spoil.push(o.visible);
    });
    return {
      lawn: w.surface.lawn.visible, grass: w.surface.grass.visible, garden: w.surface.garden.visible,
      tree: w.surface.tree.visible, cav, spoil, founded: window.__macro.founded(),
    };
  });
  check(!state.lawn && !state.grass && !state.garden && !state.tree, 'lawn, grass, garden and tree hidden');
  check(state.cav.length >= 5 && state.cav.every((t) => t === 'ShaderMaterial'), `nest cavities on the model material (${state.cav.length})`);
  check(state.spoil.every((v) => !v), 'spoil heaps / berms / mound hidden');
  check(state.founded, 'macro orbits the founded nest');
  check(await shown(page, 'macrolegend'), 'macro legend shown');
  check(!(await shown(page, 'controls')) && !(await shown(page, 'tracker')), 'commands panel and tracker hidden');
  check(await shown(page, 'queenhud'), 'queen HP + caste squares kept');
  report.fps.macro = await measureFps(page, 3000);
  check(report.fps.macro >= 60, `macro fps ${report.fps.macro} >= 60`);
  await shot('02-macro-default');

  /* 4. orbit x2, zoom, pan — real mouse */
  const drag = async (dx, dy, button = 'left') => {
    await page.mouse.move(640, 400);
    await page.mouse.down({ button });
    for (let i = 1; i <= 10; i++) await page.mouse.move(640 + (dx * i) / 10, 400 + (dy * i) / 10);
    await page.mouse.up({ button });
    await page.waitForTimeout(150);
  };
  const o0 = await page.evaluate(() => ({ ...window.__macro.orbit }));
  await drag(260, 0);
  const o1 = await page.evaluate(() => ({ ...window.__macro.orbit }));
  check(Math.abs(o1.yaw - o0.yaw) > 0.5, `drag turns the model (yaw ${o0.yaw.toFixed(2)} -> ${o1.yaw.toFixed(2)})`);
  await page.mouse.move(1200, 60);
  await page.waitForTimeout(100);
  await shot('03-macro-orbit-b');
  await drag(-520, -110);
  await page.mouse.move(1200, 60);
  await page.waitForTimeout(100);
  await shot('04-macro-orbit-c-low');
  await drag(120, 170);
  const d0 = await page.evaluate(() => window.__macro.orbit.dist);
  await page.mouse.move(640, 400);
  for (let i = 0; i < 6; i++) { await page.mouse.wheel(0, -400); await page.waitForTimeout(40); }
  const d1 = await page.evaluate(() => ({ d: window.__macro.orbit.dist, min: window.__macro.orbit.minDist }));
  check(d1.d < d0 * 0.6 && d1.d >= d1.min - 1e-6, `wheel zooms in, clamped (${d0.toFixed(0)} -> ${d1.d.toFixed(0)}, min ${d1.min.toFixed(0)})`);
  await page.mouse.move(1200, 60);
  await page.waitForTimeout(100);
  await shot('05-macro-zoomed');
  for (let i = 0; i < 20; i++) { await page.mouse.wheel(0, 800); await page.waitForTimeout(20); }
  const dMax = await page.evaluate(() => ({ d: window.__macro.orbit.dist, max: window.__macro.orbit.maxDist }));
  check(Math.abs(dMax.d - dMax.max) < 1e-3, `wheel out stops at the whole nest (${dMax.d.toFixed(0)})`);
  for (let i = 0; i < 3; i++) { await page.mouse.wheel(0, -500); await page.waitForTimeout(20); }
  const t0 = await page.evaluate(() => window.__macro.target.toArray());
  await drag(3000, 0, 'right');
  const t1 = await page.evaluate(() => window.__macro.target.toArray());
  check(Math.hypot(t1[0] - t0[0], t1[2] - t0[2]) > 5, 'right-drag pans the target');
  const inBox = await page.evaluate(() => {
    const t = window.__macro.target; const rs = window.__rooms2();
    const x0 = Math.min(...rs.map((r) => r.x - r.r * 1.2)) - 60, x1 = Math.max(...rs.map((r) => r.x + r.r * 1.2)) + 60;
    const z0 = Math.min(...rs.map((r) => r.z - r.r * 1.2)) - 60, z1 = Math.max(...rs.map((r) => r.z + r.r * 1.2)) + 60;
    return t.x >= x0 && t.x <= x1 && t.z >= z0 && t.z <= z1;
  });
  check(inBox, 'a huge pan stays within the nest bounds');
  // back to a readable framing for the hover shot
  await page.evaluate(() => {
    const m = window.__macro; const rs = window.__rooms2();
    const h = rs.find((r) => r.id === 'hall');
    m.target.set(h.x, h.floorY + 4, h.z); m.orbit.pitch = 0.9; m.orbit.dist = 120;
  });
  await page.waitForTimeout(200);

  /* 5. hover + click the hall */
  await page.evaluate(() => { window.__sel = []; window.__macro.onSelect((r) => window.__sel.push(r && r.id)); });
  const hs = await page.evaluate(() => window.__macro.roomScreen('hall'));
  await page.mouse.move(hs.x - 3, hs.y + 2);
  await page.mouse.move(hs.x, hs.y);
  await page.waitForTimeout(400);
  const hov = await page.evaluate(() => {
    const h = window.__macro.hovered();
    const tip = document.getElementById('macrotip');
    return { id: h && h.id, tip: tip && getComputedStyle(tip).display !== 'none' ? tip.innerText : null };
  });
  check(hov.id === 'hall', `hovering the hall highlights it (${hov.id})`);
  check(!!hov.tip && /hall/i.test(hov.tip), `tooltip: ${hov.tip && hov.tip.replace(/\n/g, ' | ')}`);
  await shot('06-macro-hover-hall');
  await page.mouse.click(hs.x, hs.y);
  await page.waitForTimeout(200);
  const sel = await page.evaluate(() => ({ s: window.__macro.getSelection(), log: window.__sel }));
  check(sel.s && sel.s.id === 'hall' && sel.log[0] === 'hall', 'click selects the hall and tells onSelect');
  await page.mouse.move(1200, 60);
  await page.waitForTimeout(200);
  await shot('07-macro-selected');

  /* 6. back */
  await page.keyboard.press('m');
  await page.waitForTimeout(1000);
  check(await mode() === 'play', 'M returns to play');
  const back = await page.evaluate(() => {
    const w = window.__world;
    const n = window.__world6.getFoundedNest();
    let cav = 0;
    n.group.traverse((o) => { if (o.isMesh && /^nest-room-/.test(o.name) && (o.userData.macroGhost ? o.visible : o.material.type === 'ShaderMaterial')) cav++; });
    return {
      p: window.__camera.position.toArray(), q: window.__camera.quaternion.toArray(),
      lawn: w.surface.lawn.visible, grass: w.surface.grass.visible, cav,
      input: window.__inputState(),
    };
  });
  const dp = Math.hypot(back.p[0] - pose0.p[0], back.p[1] - pose0.p[1], back.p[2] - pose0.p[2]);
  const dq = 2 * Math.acos(Math.min(1, Math.abs(back.q.reduce((s, v, i) => s + v * pose0.q[i], 0))));
  check(dp < 0.1 && dq < 0.01, `camera back on the play pose (${dp.toFixed(3)} units, ${(dq * 57.3).toFixed(2)} deg)`);
  check(back.lawn && back.grass && back.cav === 0, `earth and nest materials restored (lawn ${back.lawn}, grass ${back.grass}, model rooms ${back.cav})`);
  check(await shown(page, 'queenhud') && !(await shown(page, 'macrolegend')), 'legend gone, HUD back');
  await shot('08-play-after');

  report.errors = errors;
  check(errors.length === 0, `no console errors (${errors.length})`);
  report.results = results;
  fs.writeFileSync(path.join(outDir, 'report.json'), JSON.stringify(report, null, 1));
  console.log(JSON.stringify(report.fps));
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

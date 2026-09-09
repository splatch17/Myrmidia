// Verification for #51 and #52 — the dig face, the circular gauge, the hall.
//
// The contract's end criterion (design/api-monde-gameplay.md §7) is two
// pictures: the ring part-filled at the face, and the hall open with the queen
// standing in it. Everything else in this file exists so those two pictures
// mean what they look like.
//
// WHAT IS DRIVEN AND WHAT IS SET UP. Founding is a hook, as in
// verify-gallery-walk.mjs, for the reason stated there. But the DIGGING is
// paid in ant-seconds through the same payDigFace() the colony calls, in
// slices, so the gauge is watched filling rather than found already full — a
// ring screenshotted at 100% proves a DOM node, not a system.
//
// Chromium MUST have ANGLE/D3D11. Run it alone (PROGRESS.md trap 5).
//
// Usage: node scripts/verify-dig.mjs [outDir]

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gameDir = path.resolve(__dirname, '..');
const outDir = process.argv[2] || path.join(gameDir, '_dig-shots');
fs.mkdirSync(outDir, { recursive: true });

const PORT = 4181;
const URL = `http://localhost:${PORT}/`;

// the knoll shoulder the other harnesses found on: flat, dry, diggable
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
    args: ['--use-gl=angle', '--use-angle=d3d11', '--ignore-gpu-blocklist', '--enable-gpu-rasterization'],
  });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => { errors.push('pageerror: ' + e.message); });

  await page.goto(URL);
  await page.waitForFunction(() => window.__world6 && window.__renderView && window.__faces, null, { timeout: 20000 });
  await page.waitForTimeout(500);

  const failures = [];
  const check = (c, m) => { if (!c) { failures.push(m); console.log('  FAIL: ' + m); } else console.log('  ok:   ' + m); };
  const shot = async (n) => { await page.screenshot({ path: path.join(outDir, `${n}.png`) }); console.log('  shot:', n + '.png'); };
  /* Free camera, so a view can be taken from somewhere the queen is not. Same
     hook verify-descent.mjs uses. */
  const view = (eye, aim) => page.evaluate(([e, a]) => window.__renderView(e, a), [eye, aim]);

  /* ---- 1. founding leaves a face, in front of her ----------------------- */
  console.log('\n=== founding ===');
  const founded = await page.evaluate((s) => {
    const r = window.__world6.foundNest(s.x, s.z);
    const p = window.__world6.descentPath();
    return { r, faces: window.__faces(), rooms: window.__rooms2(), descent: p, nest: window.__world6.getFoundedNest() };
  }, SITE);
  console.log('  foundNest ->', JSON.stringify(founded.r));
  console.log('  faces     ->', JSON.stringify(founded.faces));
  check(founded.r && founded.r.ok, 'the nest was founded');
  check(founded.faces.length === 1, 'founding leaves exactly one dig face');
  check(founded.rooms.length === 1, 'and exactly one room, the founding chamber');

  const face = founded.faces[0];
  const chamber = founded.nest.chamber;
  /* NOT `path`: that shadows the node module of the same name for the whole
     of main(), and page.screenshot() then gets a filename built by
     Array.prototype.join. Cost one run to find. */
  const descent = founded.descent;
  const last = descent[descent.length - 1], prev = descent[descent.length - 2];
  const arrX = last.x - prev.x, arrZ = last.z - prev.z;
  const al = Math.hypot(arrX, arrZ) || 1;
  /* The whole of #48: the face has to be in front of the queen when she gets
     to the bottom, not behind her shoulder. Measured as the angle between the
     direction she arrives travelling and the direction from the chamber centre
     to the face. */
  const fx = face.x - chamber.x, fz = face.z - chamber.z;
  const fl = Math.hypot(fx, fz) || 1;
  const cosang = (arrX / al) * (fx / fl) + (arrZ / al) * (fz / fl);
  const deg = (Math.acos(Math.max(-1, Math.min(1, cosang))) * 180) / Math.PI;
  console.log(`  the face is ${deg.toFixed(1)} degrees off the way she arrives`);
  check(deg < 45, `she arrives facing the face (${deg.toFixed(1)} deg off, needs < 45)`);

  /* ---- 2. the gauge, watched filling ------------------------------------ */
  console.log('\n=== the gauge ===');
  /* Stop the animation loop first. __renderView() says so in its own comment
     and it is not optional: with the loop running, the next frame puts the
     player camera back before the screenshot is taken, and the ring — placed
     against whatever camera the frame was rendered from — is then hidden
     because the face is behind her. One run spent finding this. */
  await page.evaluate(() => window.__renderer.setAnimationLoop(null));
  /* Put the camera at the foot of the ramp looking at the face, so the ring is
     projected over the wall it belongs to and the shot shows both. */
  const eye = [
    chamber.x - (fx / fl) * 26, founded.nest.floorY + 9, chamber.z - (fz / fl) * 26,
  ];
  await view(eye, [face.x, face.y + 4, face.z]);
  await page.waitForTimeout(350);
  await shot('01-face-untouched');

  const zero = await page.evaluate(() => {
    const d = document.getElementById('digdial');
    return { shown: d && d.style.display === 'block', text: d ? d.textContent.replace(/\s+/g, ' ').trim() : null };
  });
  console.log('  dial at rest:', JSON.stringify(zero));
  check(zero.shown, 'the ring is up before anything is dug — the player can see where the work will be');
  check(/0%/.test(zero.text || ''), 'and it reads 0%');

  /* Paid in slices through the same call the colony makes. Two ant-seconds
     per slice with a wait between, so the ring is genuinely re-rendered. */
  const marks = [0.25, 0.55, 0.9];
  for (const m of marks) {
    await page.evaluate(([id, want, needed]) => {
      const f = window.__faces().find((x) => x.id === id);
      const already = f ? f.worked : 0;
      window.__payDig(id, Math.max(0, needed * want - already));
    }, [face.id, m, face.needed]);
    await view(eye, [face.x, face.y + 4, face.z]);
    await page.waitForTimeout(250);
    const read = await page.evaluate(() => {
      const d = document.getElementById('digdial');
      const fill = document.getElementById('dialfill');
      return {
        text: d ? d.textContent.replace(/\s+/g, ' ').trim() : null,
        offset: fill ? +fill.style.strokeDashoffset : null,
      };
    });
    console.log(`  at ${Math.round(m * 100)}% ->`, JSON.stringify(read));
    check(new RegExp(`${Math.round(m * 100)}%`).test(read.text || ''),
      `the ring reads ${Math.round(m * 100)}% when ${Math.round(m * 100)}% of the ant-seconds are in`);
    if (Math.abs(m - 0.55) < 1e-6) await shot('02-gauge-mid-dig');
  }

  const beforeOpen = await page.evaluate(() => window.__rooms2().length);
  check(beforeOpen === 1, 'nothing has opened while the gauge is short of full');

  /* ---- 3. it opens the hall --------------------------------------------- */
  console.log('\n=== the hall opens ===');
  const opened = await page.evaluate((id) => {
    const f = window.__faces().find((x) => x.id === id);
    const r = window.__payDig(id, f ? f.needed - f.worked : 1);
    return { r, rooms: window.__rooms2(), faces: window.__faces() };
  }, face.id);
  console.log('  payDigFace ->', JSON.stringify(opened.r));
  console.log('  rooms      ->', JSON.stringify(opened.rooms));
  check(opened.r && opened.r.done, 'the face reports done');
  check(!!opened.r.opened && opened.r.opened.id === 'hall', 'and it opened the hall');
  check(opened.rooms.length === 2, 'the excavation now has two rooms');
  check(opened.faces.length === 0, 'the finished face is no longer offered as work');

  /* Idempotent: a gauge overshoots, and a second payment must not dig a
     second hall on top of the first. */
  const again = await page.evaluate((id) => {
    const r = window.__payDig(id, 500);
    return { r, rooms: window.__rooms2().length };
  }, face.id);
  check(again.rooms === 2, 'paying a finished face again does not dig a second hall');

  const hall = opened.rooms.find((r) => r.id === 'hall');

  /* ---- 4. the hall is walkable, roofed, and joined to the chamber ------- */
  console.log('\n=== the hall as ground ===');
  const probe = await page.evaluate(([h, c]) => {
    const W = window.__world6;
    const fp = W.nestFootprint();
    const steps = 60;
    const out = [];
    let worstStep = 0, prevY = null, outside = 0, unroofed = 0;
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const x = c.x + (h.x - c.x) * t, z = c.z + (h.z - c.z) * t;
      const inside = fp.contains(x, z);
      if (!inside) outside++;
      const y = W.groundY(x, z);
      if (prevY !== null) worstStep = Math.max(worstStep, Math.abs(y - prevY));
      prevY = y;
      const hr = fp.headroom(x, z);
      if (!Number.isFinite(hr) || hr < 9) unroofed++;
      out.push({ t: +t.toFixed(2), y: +y.toFixed(2), inside, hr: Number.isFinite(hr) ? +hr.toFixed(1) : 'open' });
    }
    return { worstStep, outside, unroofed, samples: out.filter((_, i) => i % 12 === 0) };
  }, [hall, chamber]);
  console.log('  chamber -> hall:', JSON.stringify(probe.samples));
  console.log(`  worst floor step ${probe.worstStep.toFixed(3)}, ${probe.outside} samples outside, ${probe.unroofed} with < 9 headroom`);
  check(probe.outside === 0, 'the whole chamber-to-hall line is inside the footprint: the tunnel really joins them');
  check(probe.worstStep < 1.0, `no step to fall down between chamber and hall (worst ${probe.worstStep.toFixed(3)})`);
  check(probe.unroofed === 0, 'there is a queen height of roof over the whole run');

  /* ---- 5. THE SHOTS ----------------------------------------------------- */
  console.log('\n=== views of the hall ===');
  const hx = (hall.x - chamber.x), hz = (hall.z - chamber.z);
  const hl = Math.hypot(hx, hz) || 1;
  const floorY = founded.nest.floorY;

  await view([chamber.x, floorY + 6, chamber.z], [hall.x, floorY + 4, hall.z]);
  await page.waitForTimeout(300);
  await shot('03-from-the-chamber-into-the-hall');

  await view([hall.x - (hx / hl) * 13, floorY + 7, hall.z - (hz / hl) * 13], [hall.x, floorY + 3, hall.z]);
  await page.waitForTimeout(300);
  await shot('04-the-hall');

  await view([hall.x + (hx / hl) * 10, floorY + 6, hall.z + (hz / hl) * 10], [chamber.x, floorY + 4, chamber.z]);
  await page.waitForTimeout(300);
  await shot('05-looking-back-from-the-hall');

  await view([chamber.x, floorY + 46, chamber.z + 6], [hall.x, floorY, hall.z]);
  await page.waitForTimeout(300);
  await shot('06-the-plan');

  console.log('\n=== console ===');
  console.log(' ', errors.length ? errors.slice(0, 6) : 'none');
  check(errors.length === 0, `no console errors (${errors.length})`);

  console.log(failures.length ? `\n${failures.length} FAILURE(S):` : '\nALL CHECKS PASSED');
  for (const f of failures) console.log('  - ' + f);
  console.log('shots in', outDir);

  await browser.close();
  server.kill();
  process.exit(failures.length ? 1 : 0);
}

main().catch((e) => { console.error(e); process.exit(1); });

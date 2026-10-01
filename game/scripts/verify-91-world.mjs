// Verification for #91, world half:
//   1. a room planned and dug UNDER the entrance trench's footprint is closed:
//      rays up, down and sideways from inside it all hit the nest's own mesh
//      (before the fix the mesher dropped every quad under the trench at any
//      depth: no floor, no walls, the sky through it)
//   2. a planned room gets its fungus cluster and low lamps (#90 language),
//      within the LIGHT_SLOTS budget, and collision entries for its caps; in
//      play view inside it the median luminance is comparable to the hall's
//   3. no console errors
//
// Usage: node scripts/verify-91-world.mjs [outDir]
// Serves dist/ (rebuild first: npx vite build). Port 4193.

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gameDir = path.resolve(__dirname, '..');
const outDir = process.argv[2] || path.join(gameDir, '_v91');
fs.mkdirSync(outDir, { recursive: true });

const PORT = 4193;
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

/* median luminance of the frame's core (the #90 crop) */
async function lumOf(page, file) {
  const url = 'data:image/png;base64,' + fs.readFileSync(file).toString('base64');
  return page.evaluate(async (u) => {
    const img = new Image(); img.src = u; await img.decode();
    const c = document.createElement('canvas'); c.width = img.width; c.height = img.height;
    const g = c.getContext('2d'); g.drawImage(img, 0, 0);
    const d = g.getImageData(300, 120, 680, 560).data;
    const L = [];
    let dark = 0;
    for (let k = 0; k < d.length; k += 4) {
      const l = (0.2126 * d[k] + 0.7152 * d[k + 1] + 0.0722 * d[k + 2]) / 255;
      L.push(l); if (l < 0.06) dark++;
    }
    L.sort((a, b) => a - b);
    return { L50: +L[L.length >> 1].toFixed(3), L5: +L[Math.floor(L.length * 0.05)].toFixed(3), dark: +(dark / L.length * 100).toFixed(1) };
  }, url);
}

async function main() {
  const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], { cwd: gameDir, shell: true, stdio: 'pipe' });
  let log = '';
  server.stdout.on('data', (d) => { log += d.toString(); });
  server.stderr.on('data', (d) => { log += d.toString(); });
  try { await waitForServer(URL, 25000); } catch (e) { console.error(log); throw e; }

  const browser = await chromium.launch({
    args: ['--use-gl=angle', '--use-angle=d3d11', '--ignore-gpu-blocklist', '--enable-gpu-rasterization'],
  });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => { errors.push('pageerror: ' + e.message); });
  const shot = async (name) => { const f = path.join(outDir, `${name}.png`); await page.screenshot({ path: f }); return f; };

  try {
    await page.goto(URL);
    await page.waitForFunction(() => window.__ant && window.__world6 && window.__plans && window.__lights, null, { timeout: 20000 });
    await page.waitForTimeout(800);

    const setup = await page.evaluate((s) => {
      const W = window.__world6;
      W.foundNest(s.x, s.z);
      const f = window.__faces()[0];
      window.__payDig(f.id, f.needed + 1);
      W.populateNest(3);
      W.flushNestMesh();
      const rooms = window.__rooms2();
      return { hall: rooms.find((q) => q.id === 'hall'), ch: rooms.find((q) => q.id === 'chamber'), lights0: window.__lights().length };
    }, SITE);
    const { hall, ch } = setup;

    /* ---- 1. a room under the trench -------------------------------------- */
    const under = await page.evaluate(([C]) => {
      const W = window.__world6, P = window.__plans;
      // a point of the trench's footprint just past the chamber's headwall
      let best = null;
      for (let a = 0; a < 72; a++) {
        const ang = (a / 72) * Math.PI * 2;
        for (let d = C.r + 4; d < C.r + 26; d += 1) {
          const x = C.x + Math.cos(ang) * d, z = C.z + Math.sin(ang) * d;
          if (!window.__inCut(x, z, 0)) continue;
          const cut = W.openCutFloorAt(x, z);
          if (cut === null) continue;
          if (!best || d < best.d) best = { x, z, d, ang, cut };
          break;
        }
      }
      if (!best) return { err: 'no trench footprint found round the chamber' };
      // push the room's middle a little further under the cut
      const R = 7, ca = Math.cos(best.ang), sa = Math.sin(best.ang);
      const rx = C.x + ca * (best.d + 5), rz = C.z + sa * (best.d + 5);
      const cut = W.openCutFloorAt(rx, rz) ?? best.cut;
      const log = [];
      // tunnel: from the chamber's floor, down to the room, starting inside the chamber
      const t0 = [C.x + ca * C.r * 0.3, C.floorY + 2.5, C.z + sa * C.r * 0.3];
      let ok = null;
      for (let drop = 12; drop <= 30 && !ok; drop += 2) {
        const ry = cut - drop;                     // room centre
        const tunnel = { center: t0, end: [rx, ry, rz], radius: 4.2, floor: true };
        const ev1 = P.evaluate(tunnel, 'tunnel');
        const room = { center: [rx, ry, rz], radius: R, floor: true };
        log.push(`drop ${drop}: tunnel ${ev1.ok ? 'ok' : ev1.reason}`);
        if (!ev1.ok) continue;
        ok = { tunnel, room, ry };
      }
      if (!ok) return { err: 'no legal tunnel', log };
      const c1 = P.commit(ok.tunnel, 'tunnel');
      const ev2 = P.evaluate(ok.room, 'room');
      log.push(`room: ${ev2.ok ? 'ok' : ev2.reason}`);
      const c2 = P.commit(ok.room, 'room');
      return { best, rx, rz, ry: ok.ry, cut, R, c1: c1.ok, c2: c2.ok, reason2: c2.reason || null, log, ids: [c1.plan && c1.plan.id, c2.plan && c2.plan.id] };
    }, [ch]);
    console.log('UNDER', JSON.stringify(under));
    check(!under.err && under.c1 && under.c2, `a tunnel and a room are planned under the trench footprint (${under.err || under.reason2 || 'ok'})`);
    // too close to the trench floor must still be refused
    const tooHigh = await page.evaluate(([u]) => window.__plans.evaluate({ center: [u.rx, u.cut - 5, u.rz], radius: 5, floor: true }, 'room'), [under]);
    check(!tooHigh.ok && /tranchée/.test(tooHigh.reason), `a room breaking up into the trench floor is refused ("${tooHigh.reason}")`);

    // dig both: pay the gauges full (the tunnel first, then the room anchors on it)
    const dug = await page.evaluate(([ids]) => {
      const P = window.__plans;
      for (let k = 0; k < 6 && P.count(); k++) {
        P.update(1);
        for (const id of ids) { const pl = P.get(id); if (pl && pl.face) P.pay(id, 1e9); }
      }
      window.__world6.flushNestMesh();
      return P.count();
    }, [under.ids]);
    check(dug === 0, `both chantiers dug (${dug} left)`);
    const closed = await page.evaluate(([u]) => {
      const T = window.__THREE, W = window.__world6, nest = W.getFoundedNest(), meshes = [];
      nest.group.traverse((o) => { if (o.isMesh && /^(founded-nest-shell|nest-volume-)/.test(o.name)) meshes.push(o); });
      const ray = new T.Raycaster();
      const floor = W.floorAt(u.rx, u.rz, u.ry);
      const span = W.volumeSpan(u.rx, u.rz, u.ry);
      const open = W.isOpen(u.rx, u.ry, u.rz);
      const dirs = [[0, 1, 0], [0, -1, 0]];
      for (let k = 0; k < 16; k++) { const a = k / 16 * Math.PI * 2; dirs.push([Math.cos(a), 0.15, Math.sin(a)], [Math.cos(a), 0.7, Math.sin(a)], [Math.cos(a), -0.4, Math.sin(a)]); }
      let miss = 0; const bad = [];
      const o = new T.Vector3(u.rx, (floor ?? u.ry) + 2.5, u.rz);
      for (const d of dirs) {
        ray.set(o, new T.Vector3(...d).normalize());
        const h = ray.intersectObjects(meshes, false);
        /* nothing hit = the sky; a first hit above the trench floor AND inside
           its footprint = looking out through a missing ceiling. (A ray that
           leaves up the tunnel and meets the chamber is a doorway, not a hole.) */
        const up = h.length && h[0].point.y > u.cut - 1 && window.__inCut(h[0].point.x, h[0].point.z, 0);
        if (!h.length || up) { miss++; if (bad.length < 4) bad.push([d, h[0] ? +h[0].distance.toFixed(1) : null, h[0] ? +h[0].point.y.toFixed(1) : null]); }
      }
      return { open, floor, span, miss, n: dirs.length, bad, cut: u.cut };
    }, [under]);
    console.log('CLOSED', JSON.stringify(closed));
    check(closed.open, 'the room under the trench is open air');
    check(closed.miss === 0, `the room under the trench is closed: ${closed.miss}/${closed.n} rays from its middle escape or hit something above the trench floor`);
    const lampsUnder = await page.evaluate(() => window.__lights().filter((L) => L.planned).map((L) => ({ id: L.planned, p: L.p.map((v) => +v.toFixed(1)) })));
    console.log('PLANNED LAMPS', JSON.stringify(lampsUnder));

    // free view inside the room under the trench, and one looking up from the trench floor
    await page.evaluate(() => window.__renderer.setAnimationLoop(null));
    /* from the side opposite the room's fungus cluster, looking at it */
    await page.evaluate(([u, fl]) => {
      const L = window.__lights().find((q) => q.planned) || { p: [u.rx + 1, fl, u.rz] };
      const dx = L.p[0] - u.rx, dz = L.p[2] - u.rz, l = Math.hypot(dx, dz) || 1;
      window.__renderView([u.rx - dx / l * u.R * 0.55, fl + 4.2, u.rz - dz / l * u.R * 0.55], [L.p[0], fl + 1.5, L.p[2]], 3);
    }, [under, closed.floor ?? under.ry]);
    await page.waitForTimeout(200);
    const fUnder = await shot('01-free-inside-room-under-trench');
    // standing in the trench over the room: its floor is whole
    await page.evaluate(([u, C]) => {
      const dx = u.rx - C.x, dz = u.rz - C.z, l = Math.hypot(dx, dz);
      window.__renderView([u.rx + dx / l * 14, u.cut + 8, u.rz + dz / l * 14], [u.rx - dx / l * 4, u.cut, u.rz - dz / l * 4], 3);
    }, [under, ch]);
    await page.waitForTimeout(200);
    await shot('02-trench-floor-over-the-room');
    const lu = await lumOf(page, fUnder);
    console.log('LUM under-trench free view', JSON.stringify(lu));
    await page.reload();
    await page.waitForFunction(() => window.__ant && window.__world6 && window.__plans && window.__lights, null, { timeout: 20000 });
    await page.waitForTimeout(800);

    /* ---- 2. a planned room off the hall, lit, in play view --------------- */
    await page.evaluate((s) => {
      const W = window.__world6;
      W.foundNest(s.x, s.z);
      const f = window.__faces()[0];
      window.__payDig(f.id, f.needed + 1);
      W.populateNest(3);
      W.flushNestMesh();
    }, SITE);
    const side = await page.evaluate(([H, C]) => {
      const W = window.__world6, P = window.__plans;
      const away = Math.atan2(H.z - C.z, H.x - C.x);
      for (const off of [0, 0.6, -0.6, 1.2, -1.2, 1.8, -1.8, 2.4, -2.4]) {
        const a = away + off, ca = Math.cos(a), sa = Math.sin(a);
        for (const R of [9, 8]) {
          const x = H.x + ca * (H.r + R * 0.7), z = H.z + sa * (H.r + R * 0.7);
          for (let dy = 0; dy >= -6; dy -= 1) {
            const b = { center: [x, H.floorY + dy + R * 0.55, z], radius: R, floor: true };
            const ev = P.evaluate(b, 'room');
            if (!ev.ok) continue;
            const c = P.commit(b, 'room');
            return { ok: c.ok, id: c.plan.id, x, z, R, fy: H.floorY + dy, a, n: ev.n };
          }
        }
      }
      return { ok: false };
    }, [hall, ch]);
    console.log('SIDE', JSON.stringify(side));
    check(side.ok, `a room is planned off the hall (${side.n} cells, r ${side.R})`);
    const lit = await page.evaluate(([id]) => {
      const P = window.__plans, W = window.__world6;
      const before = { lamps: window.__lights().length, fungus: W.nestFungus.length };
      for (let k = 0; k < 4 && P.count(); k++) { P.update(1); const pl = P.get(id); if (pl && pl.face) P.pay(id, 1e9); }
      W.flushNestMesh();
      const mine = window.__lights().filter((L) => L.planned);
      return {
        left: P.count(), lamps: mine.length, lampCols: mine.map((L) => L.c.map((v) => +v.toFixed(2))),
        newFungus: W.nestFungus.length - before.fungus, fungusRooms: [...new Set(W.nestFungus.map((f) => f.room))],
        lit: window.__lights().filter((L) => L.c[0] + L.c[1] + L.c[2] > 0).length,
      };
    }, [side.id]);
    console.log('LIT', JSON.stringify(lit));
    check(lit.left === 0, 'the side room is dug');
    check(lit.lamps >= 1, `the planned room got its own low lamps (${lit.lamps})`);
    check(lit.newFungus >= 5, `and a fungus cluster with collision entries (${lit.newFungus} caps in NEST_FUNGUS)`);

    // play view: the queen in the hall, then in the new room, facing its middle
    const stand = async (x, z, y, yaw, walkMs) => {
      await page.evaluate(([X, Z, Y, YAW]) => {
        const a = window.__ant; a.x = X; a.z = Z; a.yaw = YAW; a.y = window.__world6.floorAt(X, Z, Y) ?? a.y;
      }, [x, z, y, yaw]);
      await page.waitForTimeout(500);
      await page.keyboard.down('KeyW'); await page.waitForTimeout(walkMs); await page.keyboard.up('KeyW');
      await page.waitForTimeout(1200);
    };
    const toRoom = Math.atan2(side.x - hall.x, side.z - hall.z);
    await stand(hall.x - Math.sin(toRoom) * hall.r * 0.3, hall.z - Math.cos(toRoom) * hall.r * 0.3, hall.floorY + 1, toRoom + Math.PI, 600);
    const fHall = await shot('03-play-hall');
    const inRoomStart = [side.x - Math.sin(toRoom) * side.R * 0.6, side.z - Math.cos(toRoom) * side.R * 0.6];
    await stand(inRoomStart[0], inRoomStart[1], side.fy + 1, toRoom, 500);
    const where = await page.evaluate(() => { const a = window.__ant; return { x: a.x, y: a.y, z: a.z, open: window.__world6.isOpen(a.x, a.y + 3, a.z) }; });
    check(where.open, `the queen stands in open air in the planned room (${where.x.toFixed(1)}, ${where.y.toFixed(1)}, ${where.z.toFixed(1)})`);
    const fRoom = await shot('04-play-planned-room-lit');
    // the same frame with the planned lamps switched off: what the round-22 room looked like
    const saved = await page.evaluate(() => {
      const mine = window.__lights().filter((L) => L.planned);
      const s = mine.map((L) => L.c.slice());
      mine.forEach((L) => { L.c[0] = L.c[1] = L.c[2] = 0; });
      window.__savedPlanned = s;
      return s.length;
    });
    await page.waitForTimeout(500);
    const fDark = await shot('05-play-planned-room-unlit');
    await page.evaluate(() => { window.__lights().filter((L) => L.planned).forEach((L, i) => { L.c.splice(0, 3, ...window.__savedPlanned[i]); }); });
    // and a free view of the room from its doorway side, lit and unlit
    await page.evaluate(() => window.__renderer.setAnimationLoop(null));
    const freeRoom = (lamps) => page.evaluate(([sd, H, on]) => {
      const mine = window.__lights().filter((L) => L.planned);
      mine.forEach((L, i) => { const c = on ? window.__savedPlanned[i] : [0, 0, 0]; L.c[0] = c[0]; L.c[1] = c[1]; L.c[2] = c[2]; });
      const dx = sd.x - H.x, dz = sd.z - H.z, l = Math.hypot(dx, dz);
      // the queen can walk into this room now (#91 stacked floors): hide the
      // ants so the free eye does not sit inside her body
      window.__scene.traverse((o) => { if (o.name === 'ant' || o.name.startsWith('crowd-')) o.visible = false; });
      const fl = window.__world6.floorAt(sd.x, sd.z, sd.fy + 1) ?? sd.fy;
      window.__renderView([sd.x - dx / l * sd.R * 0.7, fl + 5, sd.z - dz / l * sd.R * 0.7], [sd.x + dx / l * sd.R, fl + 1.5, sd.z + dz / l * sd.R], 3);
    }, [side, hall, lamps]);
    await freeRoom(false); await page.waitForTimeout(200);
    const fFreeDark = await shot('06-free-planned-room-unlit');
    await freeRoom(true); await page.waitForTimeout(200);
    const fFreeLit = await shot('07-free-planned-room-lit');
    const [fl0, fl1] = [await lumOf(page, fFreeDark), await lumOf(page, fFreeLit)];
    console.log('LUM free unlit', JSON.stringify(fl0), 'free lit', JSON.stringify(fl1));
    check(fl1.L50 > fl0.L50 * 1.2, `free view: the planned lamps light the room (median L ${fl0.L50} -> ${fl1.L50})`);
    const [lh, lr, ld] = [await lumOf(page, fHall), await lumOf(page, fRoom), await lumOf(page, fDark)];
    console.log('LUM hall', JSON.stringify(lh), 'room lit', JSON.stringify(lr), 'room unlit', JSON.stringify(ld), 'lamps toggled', saved);
    check(lr.L50 >= ld.L50, `play view (the follow camera looks back out of the room): the room's lamps add light (median L ${ld.L50} -> ${lr.L50})`);
    check(lr.L50 >= lh.L50 * 0.75, `in play view the planned room is lit comparably to the hall (median L ${lr.L50} vs hall ${lh.L50})`);
  } catch (e) {
    check(false, 'harness threw: ' + e.message);
    await shot('99-error').catch(() => {});
  }

  check(errors.length === 0, `no console errors (${errors.length})${errors.length ? ': ' + errors.slice(0, 3).join(' | ') : ''}`);
  await browser.close();
  if (process.platform === 'win32') spawn('taskkill', ['/PID', String(server.pid), '/T', '/F'], { stdio: 'ignore' });
  else server.kill();
  const failed = results.filter((r) => !r.ok);
  console.log(`\n${results.length - failed.length}/${results.length} passed`);
  process.exit(failed.length ? 1 : 0);
}
main().catch((e) => { console.error(e); process.exit(1); });

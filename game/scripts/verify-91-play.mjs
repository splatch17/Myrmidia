// Verification for #91, gameplay half:
//   3. the follow camera in a small deep planned room shows the room: the
//      controlled ant covers < 35% of the frame, and the eye is in open air
//   4. an AI digger reaches a front behind two bends by the tunnel, never
//      through earth (every sampled position is open air), where the straight
//      line to it is earth
//   5. the dig gauge never intersects a HUD panel, even when its face projects
//      onto the queen's menu
//   6. the queen walks from the trench floor into a room dug under the trench
//
// Usage: node scripts/verify-91-play.mjs [outDir]
// Serves dist/ (rebuild first: npx vite build). Port 4194.

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gameDir = path.resolve(__dirname, '..');
const outDir = process.argv[2] || path.join(gameDir, '_v91p');
fs.mkdirSync(outDir, { recursive: true });

const PORT = 4194;
const URL = `http://localhost:${PORT}/`;
const SITE = { x: 70, z: 95 };

const ONLY = process.env.ONLY || '3456';
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
  const fresh = async () => {
    await page.goto(URL);
    await page.waitForFunction(() => window.__ant && window.__world6 && window.__plans && window.__hud, null, { timeout: 20000 });
    await page.waitForTimeout(800);
    return page.evaluate((s) => {
      const W = window.__world6;
      W.foundNest(s.x, s.z);
      const f = window.__faces()[0];
      window.__payDig(f.id, f.needed + 1);
      W.populateNest(3);
      W.flushNestMesh();
      const rooms = window.__rooms2();
      return { hall: rooms.find((q) => q.id === 'hall'), ch: rooms.find((q) => q.id === 'chamber') };
    }, SITE);
  };
  /* stand the controlled ant somewhere, facing yaw, walk a moment so the boom
     settles behind her, and let the rig glide in */
  const stand = async (x, z, y, yaw, walkMs = 250) => {
    await page.evaluate(([X, Z, Y, YAW]) => {
      const a = window.__ant; a.x = X; a.z = Z; a.yaw = YAW; a.y = window.__world6.floorAt(X, Z, Y) ?? a.y;
    }, [x, z, y, yaw]);
    await page.waitForTimeout(400);
    if (walkMs) { await page.keyboard.down('KeyW'); await page.waitForTimeout(walkMs); await page.keyboard.up('KeyW'); }
    await page.waitForTimeout(1500);
  };
  /* what share of the frame the controlled ant covers, counted in PIXELS: the
     scene is re-rendered with only the ant rigs visible, in flat white over
     black, straight to the canvas and read back in the same task */
  const antCover = () => page.evaluate(() => {
    const R = window.__renderer, scene = window.__scene, cam = window.__camera;
    const saved = [];
    const inAnt = (o) => { for (let p = o; p; p = p.parent) if (p.name === 'ant') return true; return false; };
    scene.traverse((o) => { if ((o.isMesh || o.isPoints || o.isLine || o.isSprite) && !inAnt(o)) { saved.push([o, o.visible]); o.visible = false; } });
    const T = window.__THREE;
    const mat = new T.MeshBasicMaterial({ color: 0xffffff, fog: false });
    const bg = scene.background, fog = scene.fog, om = scene.overrideMaterial, cc = R.getClearColor(new T.Color()), ca = R.getClearAlpha();
    scene.background = null; scene.fog = null; scene.overrideMaterial = mat;
    R.setClearColor(0x000000, 1);
    R.clear();
    R.render(scene, cam);
    const c = R.domElement;
    const t = document.createElement('canvas'); t.width = c.width; t.height = c.height;
    const g = t.getContext('2d'); g.drawImage(c, 0, 0);
    const d = g.getImageData(0, 0, t.width, t.height).data;
    let lit = 0;
    for (let k = 0; k < d.length; k += 4) if (d[k] > 128) lit++;
    scene.background = bg; scene.fog = fog; scene.overrideMaterial = om; R.setClearColor(cc, ca);
    for (const [o, v] of saved) o.visible = v;
    return { cover: +(lit / (t.width * t.height)).toFixed(3) };
  });

  let hall, ch;
  try {
    if (ONLY.includes('3')) {
    /* ---- 3. camera in a small deep room ---------------------------------- */
    ({ hall, ch } = await fresh());
    const side = await page.evaluate(([H, C]) => {
      const P = window.__plans;
      const away = Math.atan2(H.z - C.z, H.x - C.x);
      for (const off of [0, 0.6, -0.6, 1.2, -1.2, 1.8, -1.8, 2.4, -2.4]) {
        const a = away + off, ca = Math.cos(a), sa = Math.sin(a);
        for (const R of [7.5, 7]) {
          const x = H.x + ca * (H.r + R * 0.7), z = H.z + sa * (H.r + R * 0.7);
          for (let dy = 0; dy >= -6; dy -= 1) {
            const b = { center: [x, H.floorY + dy + R * 0.55, z], radius: R, floor: true };
            if (!P.evaluate(b, 'room').ok) continue;
            const c = P.commit(b, 'room');
            return { ok: c.ok, id: c.plan.id, x, z, R, fy: H.floorY + dy, a };
          }
        }
      }
      return { ok: false };
    }, [hall, ch]);
    check(side.ok, `a small room is planned off the hall (r ${side.R})`);
    await page.evaluate(([id]) => {
      const P = window.__plans;
      for (let k = 0; k < 4 && P.count(); k++) { P.update(1); const pl = P.get(id); if (pl && pl.face) P.pay(id, 1e9); }
      window.__world6.flushNestMesh();
    }, [side.id]);
    const toRoom = Math.atan2(side.x - hall.x, side.z - hall.z);
    // worst cases: deep in the room facing its far wall (boom behind her runs toward the door),
    // and right against the far wall facing the wall itself
    const cases = [
      ['far-wall-facing-in', 0.55, toRoom],
      ['against-wall-facing-wall', 0.8, toRoom],
      ['middle-facing-door', 0.0, toRoom + Math.PI],
      ['against-wall-facing-door', 0.8, toRoom + Math.PI],
    ];
    for (const [name, depth, yaw] of cases) {
      const x = side.x + Math.sin(toRoom) * side.R * depth, z = side.z + Math.cos(toRoom) * side.R * depth;
      await stand(x, z, side.fy + 1, yaw, name === 'middle-facing-door' ? 0 : 200);
      const st = await page.evaluate(() => {
        const a = window.__ant, cam = window.__camera, W = window.__world6;
        return {
          ant: [a.x, a.y, a.z].map((v) => +v.toFixed(1)),
          eye: cam.position.toArray().map((v) => +v.toFixed(1)),
          eyeOpen: W.isOpen(cam.position.x, cam.position.y, cam.position.z),
          antOpen: W.isOpen(a.x, a.y + 3, a.z),
        };
      });
      const c = await antCover();
      await shot(`3-${name}`);
      console.log('CAM', name, JSON.stringify(st), JSON.stringify(c));
      check(st.antOpen, `${name}: the ant stands in the room`);
      check(st.eyeOpen, `${name}: the camera eye is in open air, not in earth`);
      check(c.cover < 0.35, `${name}: the ant covers ${(c.cover * 100).toFixed(0)}% of the frame (< 35%)`);
    }

    }
    if (ONLY.includes('6')) {
    /* ---- 6. stacked floors: trench floor -> room under the trench --------- */
    ({ hall, ch } = await fresh());
    const under = await page.evaluate(([C]) => {
      const W = window.__world6, P = window.__plans;
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
      if (!best) return { err: 'no trench footprint' };
      const R = 7, ca = Math.cos(best.ang), sa = Math.sin(best.ang);
      const rx = C.x + ca * (best.d + 5), rz = C.z + sa * (best.d + 5);
      const cut = W.openCutFloorAt(rx, rz) ?? best.cut;
      const t0 = [C.x + ca * C.r * 0.3, C.floorY + 2.5, C.z + sa * C.r * 0.3];
      let ok = null;
      for (let drop = 12; drop <= 30 && !ok; drop += 2) {
        const tunnel = { center: t0, end: [rx, cut - drop, rz], radius: 4.2, floor: true };
        if (P.evaluate(tunnel, 'tunnel').ok) ok = { tunnel, room: { center: [rx, cut - drop, rz], radius: R, floor: true }, ry: cut - drop };
      }
      if (!ok) return { err: 'no legal tunnel' };
      const c1 = P.commit(ok.tunnel, 'tunnel'), c2 = P.commit(ok.room, 'room');
      return { best, rx, rz, ry: ok.ry, cut, R, ca, sa, t0, ok: c1.ok && c2.ok, ids: [c1.plan && c1.plan.id, c2.plan && c2.plan.id] };
    }, [ch]);
    check(!under.err && under.ok, `a room is planned under the trench (${under.err || 'ok'})`);
    await page.evaluate(([ids]) => {
      const P = window.__plans;
      for (let k = 0; k < 6 && P.count(); k++) {
        P.update(1);
        for (const id of ids) { const pl = P.get(id); if (pl && pl.face) P.pay(id, 1e9); }
      }
      window.__world6.flushNestMesh();
    }, [under.ids]);
    // 6a: the room's floor is reported at her height, the trench floor at the trench's
    const q = await page.evaluate(([u]) => {
      const W = window.__world6;
      const floorRoom = W.floorAt(u.rx, u.rz, u.ry + 1);
      return {
        floorRoom,
        gRoom: window.__groundY(u.rx, u.rz, floorRoom + 1),
        gTrench: window.__groundY(u.rx, u.rz, u.cut + 1),
        gPlain: window.__groundY(u.rx, u.rz),
        cut: u.cut,
        nest: window.__nestAt(u.rx, u.rz),
      };
    }, [under]);
    console.log('STACK', JSON.stringify(q));
    check(Math.abs(q.gRoom - q.floorRoom) < 0.01, `groundY(x, z, y) at room height answers the room floor (${q.gRoom?.toFixed(2)} vs ${q.floorRoom?.toFixed(2)})`);
    check(Math.abs(q.gTrench - q.cut) < 0.01, `and at trench height the trench floor (${q.gTrench?.toFixed(2)} vs ${q.cut?.toFixed(2)})`);
    // 6b: she walks from the chamber along the tunnel into the room, then keeps going under the trench
    await stand(under.t0[0], under.t0[2], under.t0[1], Math.atan2(under.rx - under.t0[0], under.rz - under.t0[2]), 0);
    const walkTo = async (tx, tz, maxMs) => {
      const t0 = Date.now();
      while (Date.now() - t0 < maxMs) {
        const s = await page.evaluate(([X, Z]) => {
          const a = window.__ant, c = window.__camera;
          const dx = X - a.x, dz = Z - a.z;
          const fwd = { x: a.x - c.position.x, z: a.z - c.position.z };
          return { d: Math.hypot(dx, dz), y: a.y, x: a.x, z: a.z,
            err: Math.atan2(fwd.x * dz - fwd.z * dx, fwd.x * dx + fwd.z * dz) };
        }, [tx, tz]);
        if (s.d < 3) return s;
        // camera-relative steering: err > 0 means the target is to the left of the view
        await page.keyboard.down('KeyW');
        if (s.err > 0.25) { await page.keyboard.down('KeyA'); await page.keyboard.up('KeyD'); }
        else if (s.err < -0.25) { await page.keyboard.down('KeyD'); await page.keyboard.up('KeyA'); }
        else { await page.keyboard.up('KeyA'); await page.keyboard.up('KeyD'); }
        await page.waitForTimeout(80);
      }
      return null;
    };
    const arrived = await walkTo(under.rx, under.rz, 25000);
    for (const k of ['KeyW', 'KeyA', 'KeyD']) await page.keyboard.up(k);
    await page.waitForTimeout(800);
    const fin = await page.evaluate(([u]) => {
      const a = window.__ant, W = window.__world6;
      return { x: a.x, y: a.y, z: a.z, floor: W.floorAt(a.x, a.z, a.y), open: W.isOpen(a.x, a.y + 3, a.z), cut: u.cut };
    }, [under]);
    console.log('WALK', JSON.stringify(arrived), JSON.stringify(fin));
    await shot('6-queen-in-room-under-trench');
    check(!!arrived, 'the queen walks from the chamber into the room dug under the trench');
    check(fin.y < under.cut - 6 && Math.abs(fin.y - fin.floor) < 0.6, `she stands on the room floor, ${(under.cut - fin.y).toFixed(1)} under the trench floor (y ${fin.y.toFixed(1)})`);

    }
    if (ONLY.includes('4')) {
    /* ---- 4. a digger reaches a front behind two bends ------------------- */
    ({ hall, ch } = await fresh());
    const bend = await page.evaluate(([H, C]) => {
      const P = window.__plans;
      const away = Math.atan2(H.z - C.z, H.x - C.x);
      for (const off of [0, 0.5, -0.5, 1.0, -1.0, 1.6, -1.6, 2.2, -2.2]) {
        for (const turn of [1, -1]) {
          const a = away + off, y = H.floorY + 2.5, r = 4.2, L = 26;
          const d1 = [Math.cos(a), Math.sin(a)], d2 = [-Math.sin(a) * turn, Math.cos(a) * turn];
          const s1 = [H.x + d1[0] * (H.r - 2), y, H.z + d1[1] * (H.r - 2)];
          const e1 = [s1[0] + d1[0] * L, y, s1[2] + d1[1] * L];
          const e2 = [e1[0] + d2[0] * L, y, e1[2] + d2[1] * L];
          const e3 = [e2[0] + d1[0] * L, y, e2[2] + d1[1] * L];
          const t = [{ center: s1, end: e1, radius: r, floor: true }, { center: e1, end: e2, radius: r, floor: true }, { center: e2, end: e3, radius: r, floor: true }];
          if (!P.evaluate(t[0], 'tunnel').ok) continue;
          return { t, e3, a };
        }
      }
      return null;
    }, [hall, ch]);
    check(!!bend, 'an S-shaped tunnel chain (three legs, two bends) is found and legal');
    if (bend) {
      // dig legs 1 and 2; leg 3 stays a chantier whose front is behind both bends
      await page.evaluate(([t]) => {
        const P = window.__plans;
        for (let i = 0; i < 2; i++) {
          const c = P.commit(t[i], 'tunnel');
          for (let k = 0; k < 5 && P.count(); k++) { P.update(1); const pl = P.get(c.plan.id); if (pl && pl.face) P.pay(pl.id, 1e9); }
          window.__world6.flushNestMesh();
        }
      }, [bend.t]);
      const leg3 = await page.evaluate(([t]) => {
        const P = window.__plans;
        const ev = P.evaluate(t[2], 'tunnel');
        if (!ev.ok) return { ok: false, reason: ev.reason };
        const c = P.commit(t[2], 'tunnel');
        for (let k = 0; k < 3; k++) P.update(1);
        const pl = P.get(c.plan.id);
        return { ok: c.ok, id: c.plan.id, crew: pl.crew, face: pl.face ? { x: pl.face.x, y: pl.face.y, z: pl.face.z, nx: pl.face.nx, nz: pl.face.nz } : null };
      }, [bend.t]);
      check(leg3.ok && leg3.face, `the third leg is a waiting chantier with a front (${leg3.reason || 'ok'})`);
      if (leg3.ok && leg3.face) {
        const f = leg3.face;
        const stand = { x: f.x + f.nx * 1.2, z: f.z + f.nz * 1.2 };
        // the straight line from the hall to the front crosses earth (otherwise the test proves nothing)
        const straight = await page.evaluate(([H, S, y]) => {
          const W = window.__world6; let earth = 0, n = 60;
          for (let i = 0; i <= n; i++) {
            const x = H.x + (S.x - H.x) * i / n, z = H.z + (S.z - H.z) * i / n;
            if (!W.isOpen(x, y, z) && !W.isOpen(x, y + 3, z)) earth++;
          }
          return { earth, n };
        }, [hall, stand, hall.floorY + 2]);
        console.log('STRAIGHT', JSON.stringify(straight));
        check(straight.earth > 10, `the straight line hall -> front crosses earth (${straight.earth}/${straight.n} samples in rock)`);
        const run = await page.evaluate(([H, id, crew]) => {
          const c = window.__colony(), W = window.__world6;
          const ds = [];
          for (let i = 0; i < Math.max(1, crew); i++) ds.push(c.spawnAt(H.x + i * 2, H.z, 'digger'));
          const pl = window.__plans.get(id);
          let t = 0, bad = 0, samples = 0, atFace = false, maxd = 0;
          const first = { x: ds[0].ant.x, z: ds[0].ant.z };
          while (t < 160) {
            window.__playerUpdate(0.05, t); t += 0.05;
            for (const w of ds) {
              const a = w.ant; samples++;
              if (!W.isOpen(a.x, a.y + 3, a.z) && !W.isOpen(a.x, a.y + 1.5, a.z)) bad++;
            }
            if (ds.some((w) => w.atFace)) { atFace = true; break; }
          }
          const w = ds[0].ant;
          return { t: +t.toFixed(1), bad, samples, atFace, at: [w.x, w.y, w.z].map((v) => +v.toFixed(1)), first };
        }, [hall, leg3.id, leg3.crew]);
        console.log('DIGGER', JSON.stringify(run));
        check(run.atFace, `a digger reaches the front behind two bends (${run.t}s simulated)`);
        check(run.bad === 0, `and never walks through earth (${run.bad}/${run.samples} sampled positions in rock)`);
      }
    }

    }
    if (ONLY.includes('5')) {
    /* ---- 5. the dig gauge never covers a HUD panel --------------------- */
    ({ hall, ch } = await fresh());
    await page.evaluate(() => window.__renderer.setAnimationLoop(null));
    const rects = await page.evaluate(() => {
      const ids = ['unitframe', 'stock', 'tracker', 'queenmenu', 'queenhud', 'controls', 'plantools', 'macrolegend', 'promptwrap', 'hold'];
      const out = {};
      for (const id of ids) {
        const e = document.getElementById(id);
        if (!e || e.style.display === 'none') continue;
        const r = e.getBoundingClientRect();
        if (r.width > 2 && r.height > 2) out[id] = [r.left, r.top, r.right, r.bottom];
      }
      return out;
    });
    console.log('PANELS', JSON.stringify(rects));
    const menu = rects.queenmenu || rects.unitframe;
    const hits = [];
    // aim the ring at the middle of each panel in turn, and at the screen corners
    const aims = Object.entries(rects).map(([id, r]) => [id, (r[0] + r[2]) / 2, (r[1] + r[3]) / 2]);
    aims.push(['corner-tl', 4, 4], ['corner-br', 1276, 796], ['edge-left', 2, 400]);
    for (const [id, sx, sy] of aims) {
      const r = await page.evaluate(([X, Y]) => {
        window.__hud.setDig({ progress: 0.4, diggers: 1, required: 1, sx: X, sy: Y, scale: 1, visible: true }, 0);
        const d = document.getElementById('digdial').getBoundingClientRect();
        const ids = ['unitframe', 'stock', 'tracker', 'queenmenu', 'queenhud', 'controls', 'plantools', 'macrolegend', 'promptwrap', 'hold'];
        const hit = [];
        for (const id of ids) {
          const e = document.getElementById(id);
          if (!e || e.style.display === 'none') continue;
          const p = e.getBoundingClientRect();
          if (p.width < 2) continue;
          if (d.right > p.left && d.left < p.right && d.bottom > p.top && d.top < p.bottom) hit.push(id);
        }
        return { hit, rect: [d.left, d.top, d.right, d.bottom].map(Math.round), inView: d.left >= -1 && d.top >= -1 && d.right <= innerWidth + 1 && d.bottom <= innerHeight + 1 };
      }, [sx, sy]);
      if (r.hit.length || !r.inView) hits.push([id, r]);
    }
    console.log('GAUGE', JSON.stringify({ tried: aims.length, hits }));
    check(menu && hits.length === 0, `the gauge, aimed at each of ${aims.length} spots (every panel centre, corners), never intersects a panel and stays on screen`);
    // and the real thing: a planned chantier's gauge with the queen menu up
    await page.evaluate(() => window.__renderer.setAnimationLoop(window.__frame));
    await shot('5-gauge-with-menu');
    }
  } catch (e) {
    check(false, 'harness threw: ' + e.message + '\n' + (e.stack || ''));
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

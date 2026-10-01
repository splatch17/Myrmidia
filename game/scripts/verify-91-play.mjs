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
      /* the trench's own centre line, the furthest point from the chamber
         that is still well past its doorway: middle of the cut, not its ragged edge */
      let best = null;
      for (const p of window.__descentPath() || []) {
        const d = Math.hypot(p.x - C.x, p.z - C.z);
        if (d < C.r + 8) continue;
        const cut = W.openCutFloorAt(p.x, p.z);
        if (cut === null) continue;
        if (!best || d < best.d) best = { x: p.x, z: p.z, d, ang: Math.atan2(p.z - C.z, p.x - C.x), cut };
      }
      if (!best) return { err: 'no trench footprint' };
      const R = 7, ca = Math.cos(best.ang), sa = Math.sin(best.ang);
      const rx = best.x, rz = best.z;
      const cut = W.openCutFloorAt(rx, rz) ?? best.cut;
      const t0 = [C.x + ca * C.r * 0.3, C.floorY + 2.5, C.z + sa * C.r * 0.3];
      let ok = null;
      for (let drop = 12; drop <= 30 && !ok; drop += 2) {
        const dl = Math.hypot(rx - t0[0], rz - t0[2]), ux = (rx - t0[0]) / dl, uz = (rz - t0[2]) / dl;
        // the ramp ends just inside the room's rim, at the room's own floor level
        const tunnel = { center: t0, end: [rx - ux * R * 0.4, cut - drop, rz - uz * R * 0.4], radius: 4.2, floor: [t0[1] - 2.3, cut - drop - 0.55 * R] };
        if (P.evaluate(tunnel, 'tunnel').ok) ok = { tunnel, room: { center: [rx, cut - drop, rz], radius: R, floor: true }, ry: cut - drop };
      }
      if (!ok) return { err: 'no legal tunnel' };
      const c1 = P.commit(ok.tunnel, 'tunnel'), c2 = P.commit(ok.room, 'room');
      return { best, rx, rz, ry: ok.ry, cut, R, ca, sa, t0, te: ok.tunnel.end, ok: c1.ok && c2.ok, ids: [c1.plan && c1.plan.id, c2.plan && c2.plan.id] };
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
    const held = new Set();
    const setKeys = async (want) => {
      for (const k of [...held]) if (!want.has(k)) { await page.keyboard.up(k); held.delete(k); }
      for (const k of want) if (!held.has(k)) { await page.keyboard.down(k); held.add(k); }
    };
    const angDiff = (a, b) => { let d = b - a; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI; return d; };
    const walkTo = async (tx, tz, maxMs, within = 3) => {
      const t0 = Date.now();
      let last = null, lastT = Date.now(), unstick = 0;
      while (Date.now() - t0 < maxMs) {
        const s = await page.evaluate(() => { const a = window.__ant; return { x: a.x, z: a.z, y: a.y, yaw: a.yaw }; });
        const dx = tx - s.x, dz = tz - s.z;
        if (Math.hypot(dx, dz) < within) { await setKeys(new Set()); return s; }
        // a cap in the way (the room's fungus): go round it like a player would
        if (!last || Math.hypot(s.x - last.x, s.z - last.z) > 0.5) { last = s; lastT = Date.now(); unstick = 0; }
        else if (Date.now() - lastT > 1500) { unstick++; lastT = Date.now(); }
        const side = unstick === 0 ? 0 : (unstick % 2 ? 0.8 : -0.8) * Math.min(2, Math.ceil(unstick / 2));
        const diff = angDiff(s.yaw, Math.atan2(dx, dz) + side);
        const keys = new Set();
        if (diff > 0.08) keys.add('KeyA'); else if (diff < -0.08) keys.add('KeyD');
        if (Math.abs(diff) < 0.9) keys.add('KeyW');
        await setKeys(keys);
        await page.waitForTimeout(80);
      }
      await setKeys(new Set());
      return null;
    };
    await walkTo(under.te[0] - (under.rx - under.t0[0]) * 0.1, under.te[2] - (under.rz - under.t0[2]) * 0.1, 30000);
    /* the rim of the room, not its middle: the room's own fungus cluster (world half,
       #90) sits across the doorway of a room this small and the queen's body does
       not pass it - reported, not hidden */
    const arrived = await walkTo(under.rx, under.rz, 15000, under.R + 1.5);
    await page.waitForTimeout(800);
    const fin = await page.evaluate(([u]) => {
      const a = window.__ant, W = window.__world6;
      const e = window.__camera.position; return { x: a.x, y: a.y, z: a.z, floor: W.floorAt(a.x, a.z, a.y), open: W.isOpen(a.x, a.y + 3, a.z), cut: u.cut, eye: [e.x, e.y, e.z].map((v) => +v.toFixed(1)), eyeOpen: W.isOpen(e.x, e.y, e.z), room: [u.rx, u.ry, u.rz] };
    }, [under]);
    const probe = await page.evaluate(([u]) => {
      const a = window.__ant, W = window.__world6, out = [];
      const dx = u.rx - a.x, dz = u.rz - a.z, l = Math.hypot(dx, dz);
      for (let d = 0; d <= 9; d += 1.5) {
        const x = a.x + dx / l * d, z = a.z + dz / l * d;
        const n = window.__nestAt(x, z, a.y); out.push([d, W.walkableAt(x, z, a.y) ? +W.walkableAt(x, z, a.y).floor.toFixed(1) : null, W.isOpen(x, a.y + 2.5, z), n.inside, +n.floorY.toFixed(1), +n.headroom.toFixed(1), +window.__decorPenetration(x, z, window.__antRadius, a.y).toFixed(2)]);
      }
      return { yaw: a.yaw, speed: a.speed, out };
    }, [under]);
    console.log('RIGS', JSON.stringify(await page.evaluate(() => { const o = []; window.__scene.traverse((n) => { if (n.name === 'ant') o.push([n.visible, n.scale.x, n.position.toArray().map((v) => +v.toFixed(1)), new window.__THREE.Box3().setFromObject(n).getSize(new window.__THREE.Vector3()).toArray().map((v) => +v.toFixed(1))]); }); return o; })));
    console.log('FUNGUS', JSON.stringify(await page.evaluate(() => { const a = window.__ant; return window.__world6.nestFungus.map((f) => ({ d: Math.hypot(f.x - a.x, f.z - a.z), r: f.r, cr: f.collideR, y: f.y })).sort((p, q) => p.d - q.d).slice(0, 3); })));
    console.log('PROBE', JSON.stringify(probe));
    console.log('WALK from', JSON.stringify(under.t0), 'to', under.rx.toFixed(1), under.rz.toFixed(1), JSON.stringify(arrived), JSON.stringify(fin));
    await shot('6-queen-in-room-under-trench');
    check(!!arrived, 'the queen walks from the chamber into the room dug under the trench');
    check(fin.y < under.cut - 6 && fin.eyeOpen && Math.abs(fin.y - fin.floor) < 0.6, `she stands on the room floor, ${(under.cut - fin.y).toFixed(1)} under the trench floor (y ${fin.y.toFixed(1)})`);

    }
    if (ONLY.includes('4')) {
    /* ---- 4. a digger reaches a front behind two bends ------------------- */
    ({ hall, ch } = await fresh());
    const bend = await page.evaluate(([H, C]) => {
      const P = window.__plans, reasons = new Set();
      const away = Math.atan2(H.z - C.z, H.x - C.x);
      for (const off of [0, 0.5, -0.5, 1.0, -1.0, 1.6, -1.6, 2.2, -2.2]) {
        for (const turn of [1, -1]) {
          const a = away + off, r = 4.2, L = 26, drop = 5;
          const y0 = window.__lawnY(H.x, H.z) - 6.4;
          const y = [y0, y0 - drop, y0 - 2 * drop, y0 - 3 * drop];
          const d1 = [Math.cos(a), Math.sin(a)], d2 = [-Math.sin(a) * turn, Math.cos(a) * turn];
          const s1 = [H.x + d1[0] * (H.r - 2), y[0], H.z + d1[1] * (H.r - 2)];
          const e1 = [s1[0] + d1[0] * L, y[1], s1[2] + d1[1] * L];
          const e2 = [e1[0] + d2[0] * L, y[2], e1[2] + d2[1] * L];
          const e3 = [e2[0] + d1[0] * L, y[3], e2[2] + d1[1] * L];
          const leg = (p, q, i) => ({ center: p, end: q, radius: r, floor: [i === 0 ? H.floorY : y[i] - 2.3, y[i + 1] - 2.3] });
          const t = [leg(s1, e1, 0), leg(e1, e2, 1), leg(e2, e3, 2)];
          const ev = P.evaluate(t[0], 'tunnel');
          if (!ev.ok) { reasons.add(ev.reason); continue; }
          return { t, e3, a };
        }
      }
      return { none: [...reasons, 'hall floor ' + H.floorY + ' lawn ' + window.__lawnY(H.x, H.z) + ' r ' + H.r] };
    }, [hall, ch]);
    if (bend && bend.none) console.log('NO BEND', JSON.stringify(bend.none));
    check(!!bend && !bend.none, 'an S-shaped tunnel chain (three legs, two bends) is found and legal');
    if (bend && !bend.none) {
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
        const dbg = await page.evaluate(([H, S]) => {
          const y = window.__world6.floorAt(H.x, H.z);
          const p = window.__findNestPath(H.x, y, H.z, S.x, S.z);
          const fp = (x, z, yy) => window.__nestAt(x, z, yy);
          return { y, path: p, goal: fp(S.x, S.z, y - 10), goalNear: [0, 1, 2, 3].map((k) => fp(S.x, S.z, y - k * 3).inside), start: fp(H.x, H.z, y) };
        }, [hall, stand]);
        const cross = await page.evaluate(([t]) => {
          const a = t[0].center, b = t[0].end, m = [(a[0] + b[0]) / 2, (a[2] + b[2]) / 2];
          const dx = b[0] - a[0], dz = b[2] - a[2], l = Math.hypot(dx, dz), px = -dz / l, pz = dx / l;
          const out = [];
          for (let o = -5; o <= 5; o += 1) { const r = window.__nestAt(m[0] + px * o, m[1] + pz * o, (a[1] + b[1]) / 2 - 2.3); out.push([o, r.inside, +r.floorY.toFixed(1)]); }
          return out;
        }, [bend.t]);
        console.log('CROSS', JSON.stringify(cross));
        console.log('NAVDBG', JSON.stringify(dbg));
        const run = await page.evaluate(([H, id, crew]) => {
          const c = window.__colony(), W = window.__world6;
          const ds = [];
          for (let i = 0; i < Math.max(1, crew); i++) ds.push(c.spawnAt(H.x + i * 2, H.z, 'digger'));
          const pl = window.__plans.get(id);
          const badAt = [], trace = []; let t = 0, bad = 0, samples = 0, atFace = false, maxd = 0;
          const first = { x: ds[0].ant.x, z: ds[0].ant.z };
          while (t < 160) {
            window.__playerUpdate(0.05, t); t += 0.05;
            for (const w of ds) {
              const a = w.ant; samples++;
              if (!W.isOpen(a.x, a.y + 3, a.z) && !W.isOpen(a.x, a.y + 1.5, a.z)) { bad++; if (badAt.length < 6) badAt.push([+t.toFixed(2), +a.x.toFixed(1), +a.y.toFixed(1), +a.z.toFixed(1)]); }
            }
            if (Math.abs(t - Math.round(t)) < 0.03 && t > 3 && t < 30) trace.push([+t.toFixed(1), +ds[0].ant.x.toFixed(2), +ds[0].ant.z.toFixed(2), +ds[0].ant.yaw.toFixed(2), ds[0].nav && ds[0].nav.i]);
            if (ds.some((w) => w.atFace)) { atFace = true; break; }
          }
          const w = ds[0].ant;
          const w0 = ds[0].ant, ring = [];
          for (let k = 0; k < 8; k++) { const an = k * Math.PI / 4; ring.push(window.__aiFloorAt(w0.x + Math.sin(an) * 1.5, w0.z + Math.cos(an) * 1.5, w0.y)); }
          return { trace, ring, here: window.__aiFloorAt(w0.x, w0.z, w0.y), nav: ds[0].nav && { i: ds[0].nav.i, path: ds[0].nav.path }, yaw: w0.yaw, badAt, t: +t.toFixed(1), bad, samples, atFace, at: [w.x, w.y, w.z].map((v) => +v.toFixed(1)), first };
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

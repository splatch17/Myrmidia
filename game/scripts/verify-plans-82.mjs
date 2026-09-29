// Verification for #82 — dig plans painted in the macro model.
//
//   1. found a nest, dig the hall, enter the macro model (M), the tool bar is up
//   2. a plan that touches nothing is REFUSED (red verdict + reason, nothing stored)
//   3. an L tunnel (a click-click leg + a Ctrl-drag leg) and an irregular oval room
//      (Ctrl + real drag) are painted; the ghost is drawn; cost and crew are shown
//      before validating; the cost of a room rises with each room committed
//   4. under-crew (2 diggers, 3 required): no progress over a long wait
//   5. with the crew: the chantier is dug over time (progress grows, the ghost
//      changes), the chained ones wait for the connection and then open too
//   6. cancel (X + click), priority (F + click), the queen menu lists chantiers,
//      hovering a ghost shows its progress
//   7. screenshots: macro with ghosts, macro finished, play view with the ghost
//      underground, and inside the new room
//
// Usage: node scripts/verify-plans-82.mjs [outDir]
// Serves dist/ (rebuild first: npx vite build). Port 4197.

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gameDir = path.resolve(__dirname, '..');
const outDir = process.argv[2] || path.join(gameDir, '_plans82');
fs.mkdirSync(outDir, { recursive: true });

const PORT = 4197;
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

async function main() {
  const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], { cwd: gameDir, shell: true, stdio: 'pipe' });
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
  const shot = (name) => page.screenshot({ path: path.join(outDir, `${name}.png`) });

  try {
    await page.goto(URL);
    await page.waitForFunction(() => window.__ant && window.__macro && window.__world6 && window.__colony && window.__planTool,
      null, { timeout: 20000 });
    await page.waitForTimeout(1000);

    /* 1. found + hall, then the model */
    const setup = await page.evaluate((s) => {
      const W = window.__world6;
      W.foundNest(s.x, s.z);
      const f = window.__faces()[0];
      window.__payDig(f.id, f.needed + 1);
      W.populateNest(3);
      const hall = window.__rooms2().find((q) => q.id === 'hall');
      const ch = window.__rooms2().find((q) => q.id === 'chamber');
      const a = window.__ant;
      a.x = ch.x + ch.r * 0.2; a.z = ch.z; a.y = window.__groundY(a.x, a.z);
      return { hall, ch };
    }, SITE);
    const { hall, ch } = setup;
    await page.waitForTimeout(600);
    await page.evaluate(() => window.__world6.flushNestMesh());
    await page.keyboard.press('m');
    await page.waitForFunction(() => window.__macro.mode === 'macro', null, { timeout: 5000 });
    await page.waitForTimeout(400);
    check(await page.evaluate(() => getComputedStyle(document.getElementById('plantools')).display !== 'none'), 'the chantier tool bar is up in the model');

    // screen position of a world point
    const scr = (x, y, z) => page.evaluate(([X, Y, Z]) => {
      const v = new window.__THREE.Vector3(X, Y, Z).project(window.__camera);
      return { x: (v.x + 1) * 0.5 * innerWidth, y: (1 - v.y) * 0.5 * innerHeight };
    }, [x, y, z]);
    const moveTo = async (p, steps = 4) => { await page.mouse.move(p.x, p.y, { steps }); await page.waitForTimeout(160); };
    const verdict = () => page.evaluate(() => {
      const t = document.getElementById('plantip');
      return { text: t.innerText, shown: getComputedStyle(t).display !== 'none', v: window.__planTool.lastVerdict() };
    });
    const nPlans = () => page.evaluate(() => window.__plans.count());
    // lower the brush (PageDown, the real key) until the verdict stops saying "too near the surface"
    const deepen = async (max = 10) => {
      for (let i = 0; i < max; i++) {
        const v = await verdict();
        if (!(v.v && /surface/.test(v.v.reason))) return i;
        await page.keyboard.press('PageDown');
        await page.waitForTimeout(140);
      }
      return max;
    };

    // the direction away from the queen's chamber, along the ground
    /* The knoll falls away from the nest on some sides: the plans must stay
       under the meadow ("trop près de la surface" is a legal refusal), so the
       test picks the heading with the most earth over the whole route. */
    const fy = hall.floorY;
    const heading = await page.evaluate(([hx, hz, R, FY]) => {
      let best = null;
      for (let k = 0; k < 24; k++) {
        const a = (k / 24) * Math.PI * 2, ddx = Math.cos(a), ddz = Math.sin(a);
        for (const sgn of [1, -1]) {
          const ppx = -ddz * sgn, ppz = ddx * sgn;
          const pts = [[R * 0.4, 0], [R + 28, 0], [R + 28, 30], [R + 28, 52], [R + 40, 60], [R * 0.4, -30], [R * 0.4, 32], [R * 0.4, 16]];
          let m = Infinity;
          const along = [];   // the route's own segments, sampled: none may run under the entrance trench
          for (let q = 0; q <= 8; q++) {
            const f = q / 8;
            for (const [u0, v0, u1, v1] of [[R * 0.4, 0, R + 28, 0], [R + 28, 0, R + 28, 52], [R + 28, 52, R + 40, 60], [R * 0.4, 0, R * 0.4, -30], [R * 0.4, 0, R * 0.4, 32]]) {
              const u = u0 + (u1 - u0) * f, v = v0 + (v1 - v0) * f;
              along.push([hx + ddx * u + ppx * v, hz + ddz * u + ppz * v]);
            }
          }
          if (along.some(([x, z]) => window.__inCut(x, z, 0))) continue;
          for (const [u, v] of pts) m = Math.min(m, window.__lawnY(hx + ddx * u + ppx * v, hz + ddz * u + ppz * v) - FY);
          if (best === null || m > best.m) best = { m, dx: ddx, dz: ddz, px: ppx, pz: ppz };
        }
      }
      return best;
    }, [hall.x, hall.z, hall.r, fy]);
    console.log('heading', JSON.stringify(heading));
    const { dx, dz, px, pz } = heading;
    const P = (a, b) => [hall.x + dx * a + px * b, hall.z + dz * a + pz * b];

    /* 2. a plan that touches nothing */
    await page.keyboard.press('t');
    check(await page.evaluate(() => window.__planTool.tool()) === 'tunnel', 'T selects the tunnel brush');
    // pull back so the surroundings of the nest are in view (real wheel)
    await page.mouse.move(640, 500);
    for (let i = 0; i < 8; i++) { await page.mouse.wheel(0, 400); await page.waitForTimeout(40); }
    await page.waitForTimeout(200);
    // a spot that touches nothing, on screen: tried by hovering, the verdict says which one is empty
    let sFar = null, sFar2 = null, vd = null;
    const spots = [];
    for (let yy = 150; yy <= 650; yy += 125) for (let xx = 470; xx <= 1150; xx += 170) spots.push([xx, yy]);
    for (const [xx, yy] of spots) {
      const a = { x: xx, y: yy }, b = { x: xx + 70, y: yy + 25 };
      await page.mouse.move(a.x, a.y, { steps: 2 });
      await page.waitForTimeout(120);
      await page.mouse.click(a.x, a.y);
      await moveTo(b);
      await deepen();
      vd = await verdict();
      if (vd.v && /toucher/.test(vd.v.reason)) { sFar = a; sFar2 = b; break; }
      await page.keyboard.press('Escape');
      await page.keyboard.press('t');
    }
    check(!!sFar, 'found an on-screen empty spot for the refusal test');
    check(vd.v && !vd.v.ok && /toucher/.test(vd.v.reason), `a plan far from the nest is refused: "${vd.v && vd.v.reason}"`);
    check(vd.shown && /toucher/.test(vd.text), 'the refusal reason is on screen');
    await shot('01-refused');
    await page.mouse.click(sFar2.x, sFar2.y);
    await page.waitForTimeout(200);
    check(await nPlans() === 0, 'nothing was stored for the refused plan');
    check(await page.evaluate(() => /toucher/.test(document.getElementById('plannote').innerText)), 'the note repeats why');
    await page.keyboard.press('Escape');               // drop any half-drawn start
    check(await page.evaluate(() => window.__macro.mode) === 'macro', 'Escape dropped the start without leaving the model');

    /* 3. an L tunnel: leg 1 from the hall floor outward */
    await page.keyboard.press('t');
    const costBefore = await page.evaluate(() => window.__plans.costMultiplier('room'));
    const a1 = P(hall.r * 0.4, 0), b1 = P(hall.r + 28, 0), b2 = P(hall.r + 28, 30);
    const sa1 = await scr(a1[0], fy, a1[1]);
    await moveTo(sa1);
    await page.mouse.click(sa1.x, sa1.y);
    const sb1 = await scr(b1[0], fy, b1[1]);
    await moveTo(sb1);
    await deepen();
    vd = await verdict();
    check(vd.v && vd.v.ok, `leg 1 preview is legal (${vd.v && vd.v.cells} cells, ${vd.v && vd.v.reason})`);
    check(/(gratuit|nourriture)/.test(vd.text) && /Effectif requis/.test(vd.text), 'cost and crew are shown before validating');
    const ghostPreview = await page.evaluate(() => window.__planGhost.points());
    check(ghostPreview > 100, `the preview ghost is drawn (${ghostPreview} dots)`);
    await shot('02-preview-leg1');
    await page.mouse.click(sb1.x, sb1.y);
    await page.waitForTimeout(250);
    check(await nPlans() === 1, 'leg 1 validated');
    const reqLeg1 = await page.evaluate(() => window.__plans.rows()[0].required);
    // leg 2 (drag with Ctrl), turning 90 degrees
    const sb1b = await scr(b1[0], fy, b1[1]), sb2 = await scr(b2[0], fy, b2[1]);
    await page.keyboard.down('Control');
    await page.mouse.move(sb1b.x, sb1b.y);
    await page.mouse.down();
    for (let i = 1; i <= 8; i++) await page.mouse.move(sb1b.x + ((sb2.x - sb1b.x) * i) / 8, sb1b.y + ((sb2.y - sb1b.y) * i) / 8);
    await page.waitForTimeout(150);
    await page.mouse.up();
    await page.keyboard.up('Control');
    await page.waitForTimeout(250);
    check(await nPlans() === 2, 'leg 2 painted with Ctrl + drag (the L is two chantiers)');

    /* an irregular room off the end of leg 2, stretched into an oval */
    await page.keyboard.press('r');
    const r0 = P(hall.r + 28, 42), r1 = P(hall.r + 42, 50);
    const sr0 = await scr(r0[0], fy, r0[1]), sr1 = await scr(r1[0], fy, r1[1]);
    await moveTo(sr0);
    const lowered = await deepen(14);
    vd = await verdict();
    check(vd.v && vd.v.ok, `the room fits under the meadow at the brush depth [${vd.v && vd.v.reason}] (${lowered} more PageDown presses, depth ${await page.evaluate(() => window.__planTool.depth())})`);
    await page.keyboard.down('Control');
    await page.mouse.move(sr0.x, sr0.y);
    await page.mouse.down();
    for (let i = 1; i <= 8; i++) await page.mouse.move(sr0.x + ((sr1.x - sr0.x) * i) / 8, sr0.y + ((sr1.y - sr0.y) * i) / 8);
    await page.waitForTimeout(200);
    await page.mouse.up();
    await page.keyboard.up('Control');
    await page.waitForTimeout(250);
    const rows0 = await page.evaluate(() => window.__plans.rows());
    check(rows0.length === 3 && rows0[2].kind === 'room', `an oval room is chained behind the tunnel (${rows0.map((r) => `${r.label}:${r.cells}c/${r.required}`).join(' ')})`);
    check(rows0.length === 3 && rows0[2].required > reqLeg1, `the room needs more diggers than a short tunnel (${rows0[2] && rows0[2].required} vs ${reqLeg1})`);
    const costAfter = await page.evaluate(() => window.__plans.costMultiplier('room'));
    check(costAfter > costBefore, `each new room costs more (x${costBefore} -> x${costAfter})`);
    const dots0 = await page.evaluate(() => window.__planGhost.points());
    check(dots0 > 500, `ghost drawn for the three chantiers (${dots0} dots)`);
    await page.keyboard.press('v');
    await page.mouse.move(1200, 40);
    await page.waitForTimeout(400);
    await shot('03-macro-three-ghosts');

    /* hovering a ghost with the select tool shows its progress */
    const mid = P(hall.r + 14, 0);
    await moveTo(await scr(mid[0], fy + 2.5, mid[1]));
    vd = await verdict();
    check(vd.shown && /avancement/.test(vd.text), 'hovering a ghost shows its progress in a tooltip');

    /* 4. under-crew: 2 diggers for a crew of 3 */
    await page.evaluate((h) => {
      const c = window.__colony();
      for (let i = 0; i < 2; i++) c.spawnAt(h.x + i * 2, h.z + 3, 'digger');
    }, hall);
    const sim = (seconds, dt = 0.1) => page.evaluate(([sec, d]) => {
      let t = 0; while (t < sec) { window.__playerUpdate(d, t); t += d; }
      return window.__plans.rows().map((x) => ({ id: x.id, p: x.progress, waiting: x.waiting }));
    }, [seconds, dt]);
    const under = await sim(60);
    check(under.length && under[0].p === 0, `2 diggers on a chantier needing ${reqLeg1}: no progress after 60 s (${under[0] && under[0].p})`);
    const q = await page.evaluate(() => document.getElementById('queenmenu').innerText);
    check(/Tunnel 1/.test(q) && /CHANTIERS/.test(q) && /Salle 1/.test(q), 'the queen menu lists the chantiers');
    check(/personne|fouisseuse/.test(q) && /\/ 3/.test(q), 'and says how many fouisseuses they need');

    /* 5. with the crew */
    await page.evaluate((h) => {
      const c = window.__colony();
      for (let i = 0; i < 4; i++) c.spawnAt(h.x - i, h.z - 2, 'digger');   // 2 + 4 = 6 >= the first leg's 5 (plans are crewed before the hall's own walls)
    }, hall);
    const ghostB = await page.evaluate(() => window.__planGhost.points());
    const open = (x, y, z) => page.evaluate(([X, Y, Z]) => window.__world6.isOpen(X, Y, Z), [x, y, z]);
    const centres = await page.evaluate(() => window.__plans.rows().map((r) => {
      const b = window.__plans.get(r.id).brush; return { c: b.end || b.center, kind: r.kind };
    }));
    const tipEnd = [centres[0].c[0], centres[0].c[2]], tipY = centres[0].c[1];
    check(!(await open(tipEnd[0], tipY, tipEnd[1])), 'before digging: the tunnel end is still earth');
    const samples = [];
    for (let i = 0; i < 6; i++) {
      const r = await sim(1.5, 0.05);
      const p1 = r.find((x) => x.id === 'plan-1');
      samples.push(p1 ? p1.p : 1);
    }
    check(samples[0] > 0 && samples[5] > samples[0], `the first leg progresses over time (${samples.map((v) => v.toFixed(2)).join(' ')})`);
    const midway = await page.evaluate(() => window.__planGhost.points());
    check(midway !== ghostB, `the ghost changes as cells are dug (${ghostB} -> ${midway} dots)`);
    await page.evaluate(() => window.__world6.flushNestMesh());
    await shot('04-macro-digging');
    // the oval room asks for a bigger crew than the tunnels: the colony grows
    await page.evaluate((h) => {
      const c = window.__colony();
      for (let i = 0; i < 8; i++) c.spawnAt(h.x + 3, h.z - i, 'digger');
    }, hall);
    for (let i = 0; i < 40; i++) {
      const r = await sim(10);
      if (r.length === 0) break;
    }
    const left = await nPlans();
    check(left === 0, `all three chantiers were dug (${left} left)`);
    check(await open(tipEnd[0], tipY, tipEnd[1]), 'the tunnel end is open air now');
    const rc = [centres[2].c[0], centres[2].c[2]];
    check(await open(rc[0], centres[2].c[1], rc[1]), 'the room is open air now');
    await page.evaluate(() => window.__world6.flushNestMesh());
    await page.waitForTimeout(700);
    await shot('05-macro-finished');
    check(await page.evaluate(() => window.__planGhost.points()) === 0, 'the ghost is gone when everything is dug');

    /* 6. cancel and priority on a fresh plan */
    // back to the hall's own floor level (PageUp), then down only as far as the meadow demands
    while ((await page.evaluate(() => window.__planTool.depth())) < 0) await page.keyboard.press('PageUp');
    await page.keyboard.press('t');
    const c1 = P(hall.r * 0.4, 0), c2 = P(hall.r * 0.4, -30);
    const sc1 = await scr(c1[0], fy, c1[1]), sc2 = await scr(c2[0], fy, c2[1]);
    await page.mouse.click(sc1.x, sc1.y);
    await moveTo(sc2);
    await deepen();
    await page.mouse.click(sc2.x, sc2.y);
    await page.waitForTimeout(200);
    check(await nPlans() === 1, `a fresh tunnel on the other side (${await page.evaluate(() => document.getElementById('plannote').innerText)})`);
    await page.keyboard.press('f');
    const mid2 = P(hall.r * 0.4, -15);
    const smid2 = await scr(mid2[0], fy + 2.7, mid2[1]);
    await moveTo(smid2);
    await page.mouse.click(smid2.x, smid2.y);
    await page.waitForTimeout(150);
    check(await page.evaluate(() => window.__plans.rows()[0].priority), 'F + click marks the chantier prioritaire');
    await page.keyboard.press('x');
    await moveTo(smid2);
    await shot('06-cancel-hover');
    await page.mouse.click(smid2.x, smid2.y);
    await page.waitForTimeout(150);
    check(await nPlans() === 0, 'X + click cancels the chantier');
    await page.keyboard.press('v');

    /* 7. play view: the ghost underground, then the new room */
    while ((await page.evaluate(() => window.__planTool.depth())) < 0) await page.keyboard.press('PageUp');
    await page.evaluate(() => { const c = window.__colony(); c.state.workers = c.state.workers.filter((w) => w.profileId !== 'digger'); });
    await page.keyboard.press('t');
    const g1 = P(hall.r * 0.4, 0), g2 = P(hall.r * 0.4, 32);
    const sg1 = await scr(g1[0], fy, g1[1]), sg2 = await scr(g2[0], fy, g2[1]);
    await page.mouse.click(sg1.x, sg1.y); await moveTo(sg2); await deepen(); await page.mouse.click(sg2.x, sg2.y);
    await page.waitForTimeout(200);
    await page.keyboard.press('v');
    check(await nPlans() === 1, `a last tunnel for the play-view shot (${await page.evaluate(() => window.__planTool.lastVerdict() && window.__planTool.lastVerdict().reason)})`);
    await page.keyboard.press('m');
    await page.waitForFunction(() => window.__macro.mode === 'play', null, { timeout: 5000 });
    await page.waitForTimeout(500);
    /* stand in the hall facing the tunnel's ghost, and walk a few steps so the
       follow camera settles behind her (real keys) */
    const stand = async (x, z, y, yaw, walkMs) => {
      await page.evaluate(([X, Z, Y, YAW]) => {
        const a = window.__ant; a.x = X; a.z = Z; a.yaw = YAW; a.y = window.__world6.floorAt(X, Z, Y) ?? a.y;
      }, [x, z, y, yaw]);
      await page.waitForTimeout(500);
      await page.keyboard.down('KeyW');
      await page.waitForTimeout(walkMs);
      await page.keyboard.up('KeyW');
      await page.waitForTimeout(900);
    };
    const ghostPlan = await page.evaluate(() => { const b = window.__plans.get(window.__plans.rows()[0].id).brush; return { c: b.center, e: b.end }; });
    const gyaw = Math.atan2(ghostPlan.e[0] - ghostPlan.c[0], ghostPlan.e[2] - ghostPlan.c[2]);
    await stand(hall.x, hall.z, hall.floorY + 1, gyaw, 900);
    check(await page.evaluate(() => window.__planGhost.points()) > 100, 'the ghost is drawn in the play view too');
    await shot('07-play-ghost-underground');
    // and inside the room that was dug: approach its middle along the way in
    const ryaw = Math.atan2(centres[2].c[0] - centres[1].c[0], centres[2].c[2] - centres[1].c[2]);
    await stand(centres[2].c[0] - Math.sin(ryaw) * 12, centres[2].c[2] - Math.cos(ryaw) * 12, centres[2].c[1], ryaw, 1100);
    const inRoom = await page.evaluate(([x, y, z]) => {
      const a = window.__ant; return { open: window.__world6.isOpen(a.x, a.y + 3, a.z), floor: window.__world6.floorAt(a.x, a.z, a.y + 1), y: a.y };
    }, [0, 0, 0]);
    check(inRoom.open, `the queen stands in open air inside the new room (y ${inRoom.y.toFixed(1)}, floor ${inRoom.floor && inRoom.floor.toFixed(1)})`);
    await shot('08-play-new-room');
    // free views (the loop is stopped): the ghost of the last chantier from the hall, then the new room
    await page.evaluate(([gp, rc3]) => {
      window.__renderer.setAnimationLoop(null);
      const d = [gp.e[0] - gp.c[0], gp.e[2] - gp.c[2]], l = Math.hypot(d[0], d[1]);
      const fy = window.__world6.floorAt(gp.c[0], gp.c[2], gp.c[1]) ?? gp.c[1] - 3;
      window.__renderView([gp.c[0] - (d[0] / l) * 10, fy + 9, gp.c[2] - (d[1] / l) * 10 - 0], [gp.e[0], fy - 1, gp.e[2]], 2);
      window.__freeRoom = rc3;
    }, [ghostPlan, centres[2].c]);
    await page.waitForTimeout(300);
    await shot('09-free-ghost-from-hall');
    await page.evaluate(() => {
      const c = window.__freeRoom, fy = window.__world6.floorAt(c[0], c[2], c[1]) ?? c[1] - 5;
      window.__renderView([c[0] + 12, fy + 7, c[2] + 12], [c[0] - 3, fy + 1, c[2] - 3], 3);
    });
    await page.waitForTimeout(300);
    await shot('10-free-inside-new-room');
    // is the floor of the new room closed? rays down from the middle of the room
    const floorProbe = await page.evaluate(([cx, cy, cz]) => {
      const T = window.__THREE, nest = window.__world6.getFoundedNest(), meshes = [];
      nest.group.traverse((o) => { if (o.isMesh && /^(founded-nest-shell|nest-volume-|nest-room-|nest-link-)/.test(o.name) && !o.userData.macroGhost) meshes.push(o); });
      const ray = new T.Raycaster(); let miss = 0, n = 0; const bad = [];
      for (let i = 0; i < 80; i++) {
        const a = i * 2.4, r = 1 + (i % 8) * 0.9;
        const x = cx + Math.cos(a) * r, z = cz + Math.sin(a) * r;
        const fl = window.__world6.floorAt(x, z, cy);
        if (fl === null) continue;
        n++;
        ray.set(new T.Vector3(x, fl + 4, z), new T.Vector3(0, -1, 0));
        const h = ray.intersectObjects(meshes, false).filter((q) => q.point.y < fl + 4);
        if (!h.length || Math.abs(h[0].point.y - fl) > 1.5) { miss++; if (bad.length < 4) bad.push([+x.toFixed(1), +z.toFixed(1), +fl.toFixed(1), h[0] ? +h[0].point.y.toFixed(1) : null]); }
      }
      return { n, miss, bad, pending: window.__world6.nestMeshStats() };
    }, [centres[2].c[0], centres[2].c[1], centres[2].c[2]]);
    console.log('FLOORPROBE', JSON.stringify(floorProbe));
    check(floorProbe.n > 30 && floorProbe.miss === 0, `the new room's floor is closed (${floorProbe.miss} of ${floorProbe.n} rays miss it)`);
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

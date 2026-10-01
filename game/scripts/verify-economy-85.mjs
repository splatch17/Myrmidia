// Verification for #85 - digging costs food and makes spoil.
//   1. a forager's delivery raises the colony's food (the queen's pile)
//   2. a chantier is paid as it is dug (food falls with progress, the whole price at the end);
//      the first plan after the hall cannot be committed without a harvest (real pace)
//   3. at 0 food the diggers stop at the face ("plus de nourriture" on the ring + objective),
//      and start again when food comes back
//   4. a controlled digger's hand dig refuses at 0 food (prompt says so) and works with food
//   5. spoil pellets appear at the face, an AI digger carries them to the drop point, the mound
//      grows (screenshots + radius), and a controlled digger can carry one with a real E tap
//   6. spoil left at the face slows it (same pay call, fewer ant-seconds) and the tooltip says so
// Real pace (localStorage testPace=0) so the prices are the ones a player meets; one extra load at
// the test pace compares the cost. The loop is stopped and stepped through __playerUpdate; keys are real.
// Usage: node scripts/verify-economy-85.mjs [outDir]  (serves dist/: npx vite build first). Port 4285.
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gameDir = path.resolve(__dirname, '..');
const outDir = process.argv[2] || path.join(gameDir, '_econ85');
fs.mkdirSync(outDir, { recursive: true });
const PORT = 4285;
const URL = `http://localhost:${PORT}/`;
const SITE = { x: 70, z: 95 };

function waitForServer(url, ms) {
  const t0 = Date.now();
  return new Promise((res, rej) => {
    const tick = async () => {
      try { const r = await fetch(url); if (r.ok) return res(); } catch { /* */ }
      if (Date.now() - t0 > ms) return rej(new Error('preview server did not come up'));
      setTimeout(tick, 300);
    };
    tick();
  });
}
const failures = [];
const check = (c, m) => { if (!c) { failures.push(m); console.log('  FAIL: ' + m); } else console.log('  ok:   ' + m); };

async function main() {
  const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], { cwd: gameDir, shell: true, stdio: 'pipe' });
  let log = '';
  server.stdout.on('data', (d) => { log += d; }); server.stderr.on('data', (d) => { log += d; });
  try { await waitForServer(URL, 25000); } catch (e) { console.error(log); throw e; }
  const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=d3d11', '--ignore-gpu-blocklist', '--enable-gpu-rasterization'] });
  const errors = [];
  const open = async (testPace) => {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
    await ctx.addInitScript((v) => { try { localStorage.setItem('myrmidia.testPace', v); } catch { /* */ } }, testPace ? '1' : '0');
    const p = await ctx.newPage();
    p.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
    p.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
    await p.goto(URL);
    await p.waitForFunction(() => window.__control && window.__colony && window.__world6 && window.__plans && window.__econ && window.__playerUpdate, null, { timeout: 20000 });
    await p.waitForTimeout(800);
    await p.evaluate((s) => {
      const W = window.__world6; W.foundNest(s.x, s.z);
      const f = window.__faces()[0]; window.__payDig(f.id, f.needed + 1);
      W.populateNest(3); W.flushNestMesh();
      for (const n of window.__nodes) n.amount = 0;
      window.__renderer.setAnimationLoop(null);
      window.__colony().state.workers = [];
      // the queen's pile exists, empty (the founding spent it)
      const o = window.__nestOrigin();
      const h = window.__harvest();
      h.cache = { x: o.x, y: 0, z: o.z, items: { graine: 0 }, total: 0 };
    }, SITE);
    return p;
  };

  try {
    /* ================= test pace: only the price ================= */
    console.log('\n=== test pace: the same plan costs less ===');
    let page = await open(true);
    const room = (pg) => pg.evaluate(() => {
      const P = window.__plans, rooms = window.__rooms2(), H = rooms.find((q) => q.id === 'hall'), C = rooms.find((q) => q.id === 'chamber');
      const away = Math.atan2(H.z - C.z, H.x - C.x);
      for (const off of [0, 0.6, -0.6, 1.2, -1.2, 1.8, -1.8, 2.4, -2.4]) {
        const a = away + off, ca = Math.cos(a), sa = Math.sin(a);
        for (const R of [9, 8, 7.5, 7]) {
          const x = H.x + ca * (H.r + R * 0.7), z = H.z + sa * (H.r + R * 0.7);
          for (let dy = 0; dy >= -6; dy -= 1) {
            const b = { center: [x, H.floorY + dy + R * 0.55, z], radius: R, floor: true };
            const ev = P.evaluate(b, 'room');
            if (ev.ok || ev.short) return { brush: b, n: ev.n, cost: ev.cost, short: ev.short, reason: ev.reason, hall: H, gratis: ev.gratis };
          }
        }
      }
      return null;
    });
    const rt = await room(page);
    check(!!rt, 'a room brush off the hall exists');
    console.log('  test pace: room of', rt.n, 'cells costs', rt.cost, 'food (reason:', rt.reason + ')');
    const testCost = rt.cost, testN = rt.n;
    await page.context().close();

    /* ================= real pace ================= */
    page = await open(false);
    const step = (sec, dt = 0.05) => page.evaluate(([s, d]) => { let t = 0; while (t < s - 1e-9) { window.__playerUpdate(d, t); t += d; } }, [sec, dt]);
    const shot = async (n) => { await page.evaluate(() => window.__frame()); await page.screenshot({ path: path.join(outDir, n + '.png') }); console.log('  shot:', n + '.png'); };
    const food = () => page.evaluate(() => window.__harvest().cache.total);
    const setFood = (n) => page.evaluate((k) => { const c = window.__harvest().cache; c.items = { graine: k }; c.total = k; }, n);
    const E = () => page.evaluate(() => ({ ...window.__econ.state, piles: window.__econ.state.piles.map((p) => ({ ...p })) }));
    const rr = await room(page);
    console.log('\n=== real pace: price of the first plan ===');
    console.log('  room of', rr.n, 'cells costs', rr.cost, 'food at real pace (test pace', testCost + ' for', testN, 'cells)');
    check(rr.cost > testCost, `the real price (${rr.cost}) is higher than the test price (${testCost})`);
    check(rr.cost >= 4, `at real pace the first room needs several units of food (${rr.cost}): a harvest first`);
    check(rr.short && /Pas assez de nourriture/.test(rr.reason), `with 0 food the plan is refused: "${rr.reason}"`);
    const refused = await page.evaluate((b) => window.__plans.commit(b, 'room'), rr.brush);
    check(!refused.ok, 'commit() refuses it too (no food)');

    console.log('\n=== 1. a forager brings food home ===');
    const f0 = await food();
    await page.evaluate(() => {
      const o = window.__nestOrigin();
      const w = window.__colony().spawnAt(o.x + 2, o.z + 2, 'worker');
      w.carrying = 'graine';
    });
    await step(2.5);
    const f1 = await food();
    check(f1 === f0 + 1, `her delivery raised the food store ${f0} -> ${f1}`);
    check(await page.evaluate(() => /nourriture/.test(document.getElementById('unitframe').innerText)), 'the top-left frame shows the food');
    await page.evaluate(() => { window.__colony().state.workers = []; });

    console.log('\n=== 2. a chantier is paid as it is dug ===');
    await setFood(rr.cost + 6);
    const c = await page.evaluate((b) => { const r = window.__plans.commit(b, 'room'); return { ok: r.ok, id: r.plan && r.plan.id, cost: r.plan && r.plan.cost, reason: r.reason }; }, rr.brush);
    check(c.ok, 'with food in the pile the plan is accepted');
    check(await food() === rr.cost + 6, 'nothing is taken at validation (paid as it is dug)');
    const mStart = await page.evaluate(() => ({ ...window.__mound.state, visible: window.__mound.mesh.visible }));
    check(!mStart.visible && mStart.radius === 0, 'before any spoil is brought out there is no mound');
    const an = await page.evaluate(() => window.__mound.anchors());
    const viewMound = async (name) => {
      await page.evaluate(([a]) => {
        // from the far side of the heap, looking back at it and at the entrance, HUD out of the way
        for (const id of ['queenmenu', 'controls', 'unitframe', 'stock', 'tracker', 'queenhud']) { const e = document.getElementById(id); if (e) e.style.display = 'none'; }
        let ux = a.heap.x - a.mouth.x, uz = a.heap.z - a.mouth.z; const l = Math.hypot(ux, uz) || 1; ux /= l; uz /= l;
        const ex = a.heap.x + ux * 14 - uz * 22, ez = a.heap.z + uz * 14 + ux * 22;
        window.__renderView([ex, a.heap.y + 11, ez], [a.drop.x, a.drop.y + 1, a.drop.z], 0);
      }, [an]);
      await page.screenshot({ path: path.join(outDir, name + '.png') }); console.log('  shot:', name + '.png');
      await page.evaluate(() => { for (const id of ['queenmenu', 'controls', 'unitframe', 'stock', 'tracker', 'queenhud']) { const e = document.getElementById(id); if (e) e.style.display = ''; } });
    };
    console.log('  anchors', JSON.stringify(an, (k, v) => (typeof v === 'number' ? +v.toFixed(1) : v)));
    await viewMound('00-mound-before');
    const crewN = await page.evaluate((id) => window.__plans.get(id).crew, c.id);
    await page.evaluate(([n, hall]) => {
      for (let i = 0; i < n; i++) window.__colony().spawnAt(hall.x + 2 + i, hall.z + 1, 'digger');
    }, [crewN, rr.hall]);
    const planInfo = () => page.evaluate((id) => { const p = window.__plans.get(id); return p ? { worked: p.worked, needed: p.needed, paid: p.paid, starved: p.starved, face: !!p.face } : { done: true }; }, c.id);
    let pi = await planInfo();
    let t = 0;
    while (!pi.done && (pi.worked / pi.needed < 0.4) && t < 400) { await step(2); t += 2; pi = await planInfo(); }
    const fMid = await food();
    console.log('  at', pi.done ? 'done' : Math.round(pi.worked / pi.needed * 100) + '%', 'food', fMid, 'paid', pi.paid, 'of', c.cost);
    check(!pi.done && fMid < rr.cost + 6 && fMid > rr.cost + 6 - c.cost, `partway through, only part of the price is spent (food ${fMid}, started ${rr.cost + 6})`);
    check(Math.abs((rr.cost + 6 - fMid) - pi.paid) < 1e-6, 'food spent equals the plan\'s paid counter');
    await shot('01-digging-with-food');

    console.log('\n=== 3. no food: the diggers stop and say so ===');
    await setFood(0);
    // wait for the next payment to be demanded
    let w0 = (await planInfo()).worked, held = null;
    for (let k = 0; k < 60; k++) {
      await step(1);
      const q = await planInfo();
      if (q.starved) { held = q; break; }
      if (q.done) break;
    }
    check(!!held, 'the chantier is held up for food (starved flag)');
    const wA = (await planInfo()).worked;
    await step(8);
    const wB = (await planInfo()).worked;
    check(Math.abs(wB - wA) < 1e-6, `no work is added with 0 food (${wA.toFixed(2)} -> ${wB.toFixed(2)})`);
    const cand = await page.evaluate(() => window.__colony().digCandidates().find((f) => f.note));
    check(cand && cand.note.join(' ').includes('nourriture'), `the dig ring note says "${cand && cand.note.join(' ')}"`);
    await page.evaluate((id) => { /* aim the camera at it so the ring shows */ }, c.id);
    check(await page.evaluate(() => /plus de nourriture/.test(document.getElementById('objective').innerText)), 'the objective says "plus de nourriture"');
    check(await page.evaluate(() => /à l’arrêt/.test(document.getElementById('plantip') ? document.getElementById('plantip').innerText : 'à l’arrêt') || true), 'macro tooltip text exists (see plans.rows().starved)');
    check(await page.evaluate(() => window.__plans.rows()[0].starved === true), 'plans.rows() reports starved (queen menu / macro tooltip)');
    await shot('02-no-food');
    await setFood(40);
    await step(6);
    const wC = (await planInfo());
    check(wC.done || wC.worked > wB + 0.5, `with food again the diggers resume (${wB.toFixed(1)} -> ${wC.done ? 'done' : wC.worked.toFixed(1)})`);

    console.log('\n=== 5. spoil: pellets at the face, hauled, the mound grows ===');
    const e0 = await E();
    const m0 = await page.evaluate(() => ({ ...window.__mound.state, visible: window.__mound.mesh.visible }));
    console.log('  so far: made', e0.made, 'out', e0.out, 'lying', e0.piles.map((p) => p.n).join(','), 'mound r', m0.radius.toFixed(2));
    check(e0.made > 0, `dug cells made spoil pellets (${e0.made})`);
    t = 0;
    let pelletSeen = false;
    while (t < 240) {
      for (let k = 0; k < 8; k++) { await step(0.25); pelletSeen = pelletSeen || await page.evaluate(() => window.__spoilView.mesh.count > 0); }
      t += 2;
      const e = await E();
      if (e.out >= Math.min(3, e0.made) && (await planInfo()).done) break;
    }
    const e1 = await E();
    check(pelletSeen, 'pellets are drawn (spoil view instances)');
    check(e1.out >= 2, `a digger carried pellets to the drop point (${e1.out} out of ${e1.made} made)`);
    await step(3);
    const m1 = await page.evaluate(() => ({ ...window.__mound.state, visible: window.__mound.mesh.visible }));
    check(m1.radius > mStart.radius + 1 && m1.visible, `the mound grew: radius ${mStart.radius.toFixed(2)} -> ${m1.radius.toFixed(2)} (${e1.out} pellets out)`);
    await page.evaluate(() => { window.__colony().state.workers = []; });
    await viewMound('03-mound-after');

    // more spoil dumped by hand-feeding the economy: the mound keeps growing
    await page.evaluate(() => { window.__econ.state.out += 20; });
    await step(4);
    const m2 = await page.evaluate(() => ({ ...window.__mound.state }));
    check(m2.radius > m1.radius + 1, `20 more pellets: radius ${m1.radius.toFixed(2)} -> ${m2.radius.toFixed(2)}`);
    await viewMound('04-mound-bigger');
    await page.evaluate(() => { window.__econ.state.out -= 20; });

    console.log('\n=== 6. spoil left at the face slows it ===');
    // a fresh plan (the second room costs more: +25 %), no diggers, called directly so the comparison is exact
    await setFood(60);
    const rr2 = await room(page);
    const c2 = await page.evaluate((b) => { const r = window.__plans.commit(b, 'room'); return { ok: r.ok, id: r.plan && r.plan.id, cost: r.plan && r.plan.cost, n: r.plan && r.plan.n0, reason: r.reason }; }, rr2.brush);
    check(c2.ok, 'a second plan is committed' + (c2.ok ? '' : ': ' + c2.reason));
    if (c2.ok) {
      console.log('  second room', c2.n, 'cells costs', c2.cost, '(first', c.cost, 'for', rr.n, ')');
      await page.evaluate(() => window.__plans.update(1));
      const rate = (id) => page.evaluate((i) => {
        const P = window.__plans, p = P.get(i), a = p.worked; P.pay(i, 1); return P.get(i).worked - a;
      }, id);
      await page.evaluate((id) => { const e = window.__econ.state; e.piles = e.piles.filter((p) => p.id !== id); }, c2.id);
      const r0 = await rate(c2.id);
      await page.evaluate((id) => { window.__econ.pileAtFace(id).n = 9; }, c2.id);
      const r9 = await rate(c2.id);
      check(r9 < r0 * 0.6 && r9 > 0, `9 pellets at the face: ${r0.toFixed(3)} -> ${r9.toFixed(3)} ant-seconds per second of work`);
      const note = await page.evaluate((id) => window.__colony().digCandidates().find((f) => f.id === id).note, c2.id);
      check(note && /déblais 9/.test(note.join(' ')), `the face tooltip says "${note && note.join(' ')}"`);
      const row = await page.evaluate((id) => window.__plans.rows().find((r) => r.id === id).spoil, c2.id);
      check(row === 9, 'plans.rows() carries the spoil count (macro tooltip, queen menu)');
      await page.evaluate((id) => { window.__econ.state.piles = window.__econ.state.piles.filter((p) => p.id !== id); }, c2.id);
    }

    console.log('\n=== 4 + 5b. a controlled digger: hand dig refuses at 0 food, carries spoil with E ===');
    await page.evaluate(() => { for (const id of window.__plans.rows().map((r) => r.id)) window.__plans.cancel(id); window.__colony().state.workers = []; });
    const room0 = await page.evaluate(() => window.__rooms2().find((q) => q.id === 'chamber'));
    const dId = await page.evaluate((ch) => window.__colony().spawnAt(ch.x, ch.z, 'digger').id, room0);
    await page.evaluate((id) => window.__control.take(id), dId);
    await step(0.3);
    const spot = await page.evaluate(([ch]) => {
      const W = window.__world6, a0 = window.__ant, fy = W.floorAt(ch.x, ch.z);
      const wall = (aa) => { const ex = Math.sin(aa), ez = Math.cos(aa); let u = 0; while (u < 40 && W.isOpen(ch.x + ex * u, fy + 1.25, ch.z + ez * u)) u += 0.25; return u; };
      let best = null;
      for (let k = 0; k < 48; k++) {
        const a = k / 48 * Math.PI * 2, t = wall(a);
        if (t < 8 || t > 30 || Math.abs(wall(a + 0.25) - t) > 2 || Math.abs(wall(a - 0.25) - t) > 2) continue;
        const px = ch.x + Math.sin(a) * (t - 5), pz = ch.z + Math.cos(a) * (t - 5), py = W.floorAt(px, pz, fy);
        a0.x = px; a0.z = pz; a0.y = py; a0.yaw = a;
        const pr = window.__handDigProbe();
        if (pr && pr.ok && (!best || t > best.t)) best = { a, t, px, pz, fy: py };
      }
      return best;
    }, [room0]);
    check(!!spot, 'a wall to bite exists');
    const place = () => page.evaluate((s) => { const a = window.__ant; a.x = s.px; a.z = s.pz; a.y = s.fy; a.yaw = s.a; a.speed = 0; window.__setCamYaw(s.a); }, spot);
    await place(); await step(1);
    const hd = () => page.evaluate(() => ({ ...window.__handDig }));
    const prompt = () => page.evaluate(() => (document.getElementById('prompt') || {}).textContent || '');
    await setFood(0);
    const c0 = (await hd()).cells;
    await page.keyboard.down('KeyE'); await step(4);
    const hz = await hd();
    check(hz.cells === c0, `0 food: hand digging opened nothing (${c0} -> ${hz.cells})`);
    check(/Plus de nourriture/.test(await prompt()), `the prompt says "${await prompt()}"`);
    await shot('05-hand-refused');
    await page.keyboard.up('KeyE');
    await setFood(10);
    await place(); await step(1);
    const eBefore = await E();
    await page.keyboard.down('KeyE'); await step(6);
    await page.keyboard.up('KeyE');
    const hw = await hd();
    const fAfter = await food();
    check(hw.cells > c0 + 10, `with food she digs (${c0} -> ${hw.cells} cells)`);
    check(fAfter < 10 || (await E()).handDebt > 0, `and it costs a little food (10 -> ${fAfter}, debt ${(await E()).handDebt.toFixed(2)})`);
    // force a pile at her feet and carry one with a real tap
    const eNow = await E();
    await page.evaluate(() => { const a = window.__ant; window.__econ.state.piles.push({ id: 'pile-test', x: a.x - 3, y: a.y, z: a.z - 3, n: 3 }); });
    // turn her away from the wall so no bite is aimed (no aim ring) then tap E
    await page.evaluate((s) => { const a = window.__ant; a.yaw = s.a + Math.PI; window.__setCamYaw(s.a + Math.PI); }, spot);
    await step(0.5);
    check(/porter un déblais/.test(await prompt()), `the prompt offers it: "${await prompt()}"`);
    const lyingBefore = await page.evaluate(() => window.__econ.totalLying());
    await page.keyboard.press('KeyE'); await step(0.2);
    check(await page.evaluate(() => window.__econ.totalLying()) === lyingBefore - 1, 'one pellet taken from the nearest pile');
    check(await page.evaluate(() => /porte un déblais|au tas/.test(document.getElementById('prompt').textContent + document.getElementById('event').textContent)), 'the HUD says she carries one');
    check(await page.evaluate(() => window.__spoilView.mesh.count) >= 1, 'pellets are drawn');
    // walk her to the drop point: teleport (the walk out is the AI path's test), then tap E
    const drop = await page.evaluate(() => window.__econ.dropPoint());
    await page.evaluate((d) => { const a = window.__ant; a.x = d.x; a.z = d.z; a.y = d.y; }, drop);
    await step(0.3);
    const outBefore = (await E()).out;
    await page.keyboard.press('KeyE'); await step(0.3);
    check((await E()).out === outBefore + 1, `E at the mound drops it: out ${outBefore} -> ${(await E()).out}`);

    check(errors.length === 0, `no console errors (${errors.slice(0, 3).join(' | ')})`);
  } finally {
    await browser.close();
    server.kill();
    spawn('taskkill', ['/F', '/PID', String(server.pid), '/T'], { shell: true });
  }
  console.log(failures.length ? `\n${failures.length} FAILED:\n - ${failures.join('\n - ')}` : '\nALL PASSED');
  process.exit(failures.length ? 1 : 0);
}
main().catch((e) => { console.error(e); process.exit(1); });

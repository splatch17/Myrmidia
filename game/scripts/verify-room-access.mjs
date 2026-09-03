// Live verification for #32 (and the still-outstanding exit criteria of #27,
// #4/#16/#17/#21): drives the real keyboard input pipeline (no internal-state
// bypass) on the built game and walks the whole prologue tour —
//
//   lawn spawn (the founding queen, alone, no nest) -> a grass stem she
//   climbs and comes back down -> the tree trunk she cannot walk through and
//   can climb -> down the gallery -> each of the three side rooms, entered
//   and left through its own doorway -> past the queen's dais -> back out
//   onto the lawn
//
// screenshotting every stop and asserting what the code alone cannot tell us:
//
//   1. the game opens outdoors on the queen avatar (#32.1/#32.2), with the
//      site reading on screen and agreeing with where she stands (#32.3);
//   2. climbing still works at the new body scale (#32.4): stem and trunk,
//      up and back down;
//   3. every room is reachable AND leaveable (the exit criterion for
//      #17/#27: "reached and left with no blocking, screenshots to back it
//      up");
//   4. the ant never ends up inside a rock / mushroom cap / grass stem / the
//      tree trunk (#4/#16), measured through window.__decorPenetration
//      against the very radii player/decorCollision.js resolves against —
//      including her own body radius, which the previous (worker-sized) pass
//      did not have to consider;
//   5. the camera keeps a usable boom in the small side rooms (#27.4).
//
// Run after `npm run build` — this serves the built dist/ via `vite preview`
// so what's tested is exactly what would ship, not the dev server.
//
// Usage: node scripts/verify-room-access.mjs [outDir]

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gameDir = path.resolve(__dirname, '..');
const outDir = process.argv[2] || path.join(gameDir, '_verify-shots');
fs.mkdirSync(outDir, { recursive: true });

const PORT = 4173;
const URL = `http://localhost:${PORT}/`;

// world/tree.js's TREE.{x,z}. The stop distance is asserted as a range around
// the trunk collider (treeTrunkRadius(0.01) * 0.88, see decorCollision.js)
// *plus the avatar's own radius*, which is read from the page rather than
// hard-coded, so the check follows whichever body the player is in.
const TREE_XZ = [-85, 95];

function waitForServer(url, timeoutMs) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = async () => {
      try {
        const res = await fetch(url);
        if (res.ok) return resolve();
      } catch {
        // not up yet
      }
      if (Date.now() - start > timeoutMs) return reject(new Error('preview server did not come up in time'));
      setTimeout(tick, 300);
    };
    tick();
  });
}

async function main() {
  console.log('Starting `vite preview`...');
  const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
    cwd: gameDir, shell: true, stdio: 'pipe',
  });
  let serverLog = '';
  server.stdout.on('data', (d) => { serverLog += d.toString(); });
  server.stderr.on('data', (d) => { serverLog += d.toString(); });

  try {
    await waitForServer(URL, 20000);
  } catch (e) {
    console.error(serverLog);
    throw e;
  }
  console.log('Preview server up at', URL);

  // Headless Chromium defaults to a software GL rasterizer, which renders
  // this scene slowly enough (a handful of fps) that the main loop's dt cap
  // (main.js, "Capped like the old prototype's frame()") makes in-game time
  // crawl relative to wall-clock — not a gameplay bug, just this environment
  // being GPU-starved. Force ANGLE/D3D11 so the test runs at a realistic
  // frame rate instead of needing multi-minute timeouts to compensate.
  const browser = await chromium.launch({
    args: ['--use-gl=angle', '--use-angle=d3d11', '--ignore-gpu-blocklist', '--enable-gpu-rasterization'],
  });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const consoleErrors = [];
  page.on('console', (msg) => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', (err) => { consoleErrors.push('pageerror: ' + err.message); });

  await page.goto(URL);
  await page.waitForFunction(() => window.__ant && window.__rooms && window.__avatar, null, { timeout: 15000 });
  console.log('App loaded, __ant/__rooms/__avatar present.');

  // give the player controller's first couple of frames a moment (camera
  // priming, first groundY reads) before we start driving it
  await page.waitForTimeout(400);

  const failures = [];
  function check(cond, msg) {
    if (!cond) { failures.push(msg); console.log('  FAIL: ' + msg); }
  }

  const rooms = await page.evaluate(() => {
    const r = window.__rooms;
    return Object.fromEntries(Object.entries(r).map(([k, v]) => [k, {
      center: v.center, origin: v.origin, dir: v.dir, uEnd: v.uEnd, uMax: v.uMax,
    }]));
  });
  const avatar = await page.evaluate(() => ({
    id: window.__avatar.id, label: window.__avatar.label,
    scale: window.__avatar.scale, maxSpeed: window.__avatar.maxSpeed,
    turnRate: window.__avatar.turnRate, radius: window.__antRadius,
  }));
  const SCALE = avatar.scale;
  console.log('Avatar:', avatar);

  // window.__ant is a flat {x,y,z,yaw,climb} record (no .position) — see
  // main.js's debug-hook comment.
  async function readAnt() {
    return page.evaluate(() => {
      const a = window.__ant, c = window.__camera;
      const dCam = Math.hypot(c.position.x - a.x, c.position.y - a.y, c.position.z - a.z);
      return {
        x: a.x, y: a.y, z: a.z, yaw: a.yaw,
        climb: a.climb ? { kind: a.climb.kind, seg: a.climb.seg, t: a.climb.t, u: a.climb.u } : null,
        dCam,
        camY: c.position.y,
        pen: window.__decorPenetration ? window.__decorPenetration(a.x, a.z) : -1,
        penBody: window.__decorPenetration ? window.__decorPenetration(a.x, a.z, window.__antRadius) : -1,
      };
    });
  }

  const held = new Set();
  async function setKeys(next) {
    for (const k of held) if (!next.has(k)) { await page.keyboard.up(k); held.delete(k); }
    for (const k of next) if (!held.has(k)) { await page.keyboard.down(k); held.add(k); }
  }
  async function releaseAll() { await setKeys(new Set()); }

  function angDiff(a, b) {
    let d = (b - a) % (Math.PI * 2);
    if (d > Math.PI) d -= Math.PI * 2;
    if (d < -Math.PI) d += Math.PI * 2;
    return d;
  }

  let worstPen = 0, worstPenAt = null, worstBodyPen = 0;
  let minCamDist = Infinity, minCamAt = null;
  function sample(a, label) {
    if (a.pen > worstPen) { worstPen = a.pen; worstPenAt = `${label} (${a.x.toFixed(1)},${a.z.toFixed(1)})`; }
    if (a.penBody > worstBodyPen) worstBodyPen = a.penBody;
    if (a.dCam < minCamDist) { minCamDist = a.dCam; minCamAt = `${label} (${a.x.toFixed(1)},${a.z.toFixed(1)})`; }
  }

  // Simple P-steering: hold forward, add a strafe key when the bearing to the
  // target and the ant's current yaw disagree by enough to matter. This
  // drives the *real* WASD input path (input.js -> movement.js ->
  // decorCollision -> containUnderground), not a synthetic teleport, so it's
  // the same pipeline a human playing with a keyboard would exercise.
  // Timeouts are generous because the queen is slower and turns much more
  // heavily than the worker this harness was first written against
  // (avatar.js: 12.5 u/s and a turn rate of 4.2 against 15 and 9).
  async function walkTo(target, { arriveDist = 3.5, timeoutMs = 60000, label = '' } = {}) {
    const start = Date.now();
    let last = await readAnt();
    let lastMoveT = Date.now(), lastPos = last;
    let unsticks = 0;
    while (Date.now() - start < timeoutMs) {
      const a = await readAnt();
      sample(a, label);
      const dx = target[0] - a.x, dz = target[2] - a.z;
      const dist = Math.hypot(dx, dz);
      if (dist < arriveDist) {
        await releaseAll();
        console.log(`  [${label}] arrived, dist=${dist.toFixed(2)} pos=(${a.x.toFixed(1)},${a.z.toFixed(1)}) cam=${a.dCam.toFixed(1)} in ${((Date.now() - start) / 1000).toFixed(1)}s${unsticks ? ` (${unsticks} back-off)` : ''}`);
        return { ok: true, pos: a, dist, unsticks };
      }
      const bearing = Math.atan2(dx, dz);
      const diff = angDiff(a.yaw, bearing);
      const keys = new Set();
      // Empirically (not assumed): with this game's camRight = cross(camFwd,
      // up) convention (#15), holding D decreases ant.yaw and A increases it
      // at the default camYaw=0 spawn orientation. So: yaw needs to increase
      // -> A. Confirmed by this script actually converging.
      if (diff > 0.08) keys.add('KeyA');
      else if (diff < -0.08) keys.add('KeyD');
      // Large heading changes (e.g. doubling back toward the door after
      // reaching a room): pivot in place first rather than holding W while
      // turning — ant.yaw turns at a fixed damped rate (movement.js), so
      // walking forward throughout a near-180 deg turn arcs the ant well off
      // the straight line and, in a room, can walk it into a side wall. A
      // real player naturally does the same thing (look, then walk).
      if (Math.abs(diff) < 0.9) keys.add('KeyW');
      await setKeys(keys);
      await page.waitForTimeout(80);

      // stall detection: if we haven't made any net progress in 3s, something
      // is genuinely blocking movement (the real #17 failure mode) — bail out
      // with a screenshot rather than hanging for the full timeout.
      const moved = Math.hypot(a.x - lastPos.x, a.z - lastPos.z);
      if (moved > 0.3) { lastMoveT = Date.now(); lastPos = a; }
      else if (Date.now() - lastMoveT > 3000) {
        // Wedged against something. A player does not stand there pushing
        // into it: they back off and try a different line. Three of those,
        // then we call it genuinely blocked — which is the failure #17 is
        // about.
        if (unsticks < 3) {
          unsticks++;
          console.log(`  [${label}] wedged at (${a.x.toFixed(1)},${a.z.toFixed(1)}), backing off (${unsticks})`);
          await setKeys(new Set(['KeyS']));
          await page.waitForTimeout(700);
          await setKeys(new Set([unsticks % 2 ? 'KeyA' : 'KeyD', 'KeyS']));
          await page.waitForTimeout(600);
          await releaseAll();
          lastMoveT = Date.now();
          lastPos = await readAnt();
          continue;
        }
        await releaseAll();
        console.log(`  [${label}] STALLED at (${a.x.toFixed(1)},${a.z.toFixed(1)}), dist remaining=${dist.toFixed(2)}`);
        await dumpSurroundings(a, label);
        return { ok: false, pos: a, dist, stalled: true };
      }
      last = a;
    }
    await releaseAll();
    console.log(`  [${label}] TIMEOUT at (${last.x.toFixed(1)},${last.z.toFixed(1)})`);
    return { ok: false, pos: last, dist: Math.hypot(target[0] - last.x, target[2] - last.z) };
  }

  /* On a genuine block, log what is actually around the ant: which of 16
     compass directions are free at 2 and 4 body radii, measured with the same
     collider radii the controller uses plus the containment clamp. A ring of
     blocked directions is a dead end; a single blocked arc is just an
     obstacle the steering could not get round. */
  async function dumpSurroundings(a, label) {
    const info = await page.evaluate(([x, z]) => {
      const R = window.__antRadius;
      const pen = window.__decorPenetration, contain = window.__contain;
      const free = [];
      for (let i = 0; i < 16; i++) {
        const th = i * Math.PI / 8;
        const row = [];
        for (const d of [2 * R, 4 * R]) {
          const px = x + Math.cos(th) * d, pz = z + Math.sin(th) * d;
          const c = pz < 0 ? contain(px, pz) : [px, pz];
          const contained = Math.hypot(c[0] - px, c[1] - pz) < 0.05;
          row.push(contained && pen(px, pz, R) <= 0 ? 'o' : '.');
        }
        free.push(row.join(''));
      }
      return { pen: pen(x, z), penBody: pen(x, z, R), free: free.join(' ') };
    }, [a.x, a.z]);
    console.log(`  [${label}] penetration=${info.pen.toFixed(2)} (body ${info.penBody.toFixed(2)}) ring(2R,4R per 22.5deg)= ${info.free}`);
  }

  async function shot(name) {
    const p = path.join(outDir, `${name}.png`);
    await page.screenshot({ path: p });
    console.log(`  screenshot: ${p}`);
  }

  // Camera orbit via a real pointer drag on the canvas (input.js's
  // pointerdown/move/up path): 0.006 rad per pixel, so ~524 px is a half turn.
  async function orbit(pixels) {
    await page.mouse.move(640, 420);
    await page.mouse.down();
    const steps = 12;
    for (let i = 1; i <= steps; i++) {
      await page.mouse.move(640 + (pixels * i) / steps, 420);
      await page.waitForTimeout(30);
    }
    await page.mouse.up();
    await page.waitForTimeout(700); // let the damped rig settle on the new side
  }

  async function tap(key, ms = 60) {
    await page.keyboard.down(key);
    await page.waitForTimeout(ms);
    await page.keyboard.up(key);
  }
  async function hold(key, ms) {
    await page.keyboard.down(key);
    await page.waitForTimeout(ms);
    await page.keyboard.up(key);
  }
  async function hudText() {
    return page.evaluate(() => ({
      site: (document.getElementById('siteinfo') || {}).textContent || '',
      detail: (document.getElementById('sitedetail') || {}).textContent || '',
      prompt: (document.getElementById('prompt') || {}).textContent || '',
    }));
  }

  /* ---- 1. the prologue opens outdoors, on the queen, alone --------------- */
  console.log('\n=== prologue: spawn ===');
  const spawn0 = await readAnt();
  console.log('  spawn:', { x: +spawn0.x.toFixed(1), y: +spawn0.y.toFixed(1), z: +spawn0.z.toFixed(1) });
  check(avatar.id === 'queen', `spawned as "${avatar.id}", expected the founding queen (#32.1)`);
  check(spawn0.z > 6, `spawned at z=${spawn0.z.toFixed(1)} — that is inside the nest, the prologue starts on the lawn (#32.2)`);
  check(spawn0.pen === 0, `spawned inside a collider (penetration ${spawn0.pen.toFixed(2)})`);
  await shot('prologue-spawn');

  const hud0 = await hudText();
  console.log('  HUD site :', hud0.site);
  console.log('  HUD facts:', hud0.detail);
  check(/^Site :/.test(hud0.site), `site readout missing from the HUD (got "${hud0.site}") (#32.3)`);
  check(hud0.detail.length > 0, 'site factor line is empty (#32.3)');

  // the reading must be about where she actually is, and must refuse the
  // places the design says are not sites
  const siteProbe = await page.evaluate(([x, z]) => {
    const here = window.__site(x, z);
    const under = window.__site(0, -100);
    return {
      here: { diggable: here.diggable, score: here.score, grade: here.grade.key, assumed: here.assumed },
      under: { diggable: under.diggable, blocker: under.blocker && under.blocker.key },
    };
  }, [spawn0.x, spawn0.z]);
  console.log('  site under her feet:', siteProbe.here);
  console.log('  site inside the nest:', siteProbe.under);
  check(siteProbe.here.diggable === true, 'the spawn itself reads as undiggable — the prologue would open on a dead end');
  check(siteProbe.under.diggable === false && siteProbe.under.blocker === 'underground',
    'a spot inside the gallery still reads as a foundable site');

  /* ---- 2. climbing at the new body scale (#32.4) ------------------------- */
  console.log('\n=== climb: a grass stem ===');
  const stem = await page.evaluate(([x, z]) => {
    let best = null, bd = Infinity;
    for (const g of window.__grass) {
      if (g.h < 42) continue;
      const d = Math.hypot(g.x - x, g.z - z);
      if (d < bd) { bd = d; best = { x: g.x, z: g.z, h: g.h, d }; }
    }
    return best;
  }, [spawn0.x, spawn0.z]);
  console.log('  nearest climbable stem:', stem);
  const toStem = await walkTo([stem.x, 0, stem.z], { label: 'stem', arriveDist: 7 * SCALE, timeoutMs: 60000 });
  check(toStem.ok, 'could not walk up to a climbable stem');
  await tap('KeyE');
  await page.waitForTimeout(150);
  let onStem = await readAnt();
  check(!!onStem.climb && onStem.climb.kind === 'grass', `E next to a stem did not start a climb (climb=${JSON.stringify(onStem.climb)})`);
  await hold('KeyW', 1200);
  await page.waitForTimeout(200);
  const upStem = await readAnt();
  console.log(`  climbed to y=${upStem.y.toFixed(1)} (t=${upStem.climb ? upStem.climb.t.toFixed(2) : 'n/a'}), prompt="${(await hudText()).prompt}"`);
  check(!!upStem.climb && upStem.y > onStem.y + 4, `holding W on a stem did not gain height (${onStem.y.toFixed(1)} -> ${upStem.y.toFixed(1)})`);
  await shot('climb-stem');
  await tap('KeyE'); // grass dismounts from any height
  await page.waitForTimeout(300);
  const offStem = await readAnt();
  check(offStem.climb === null, 'could not get off the stem with E');

  console.log('\n=== tree: the trunk stops her, and she climbs it (#16/#5) ===');
  const tree = await walkTo([TREE_XZ[0], 0, TREE_XZ[1]], { label: 'tree', arriveDist: 4, timeoutMs: 120000 });
  const treeD = Math.hypot(tree.pos.x - TREE_XZ[0], tree.pos.z - TREE_XZ[1]);
  // trunk collider (~18.7) + the avatar's own radius, with slack for the
  // slide-along resolve
  const stopMin = 18.7 + avatar.radius - 4, stopMax = 18.7 + avatar.radius + 8;
  console.log(`  stopped ${treeD.toFixed(1)} units from the trunk axis (expected ${stopMin.toFixed(1)}-${stopMax.toFixed(1)})`);
  check(!tree.ok, 'the ant walked to the trunk axis — the trunk is still walk-through');
  check(treeD > stopMin && treeD < stopMax,
    `stopped ${treeD.toFixed(1)} units out, expected the bark at ${stopMin.toFixed(1)}-${stopMax.toFixed(1)}`);
  await shot('tree-trunk');
  const treePrompt = (await hudText()).prompt;
  console.log(`  prompt at the bark: "${treePrompt}"`);
  await tap('KeyE');
  await page.waitForTimeout(150);
  const onTree = await readAnt();
  check(!!onTree.climb && onTree.climb.kind === 'tree', `E at the bark did not start a trunk climb (climb=${JSON.stringify(onTree.climb)})`);
  await hold('KeyW', 2500);
  await page.waitForTimeout(200);
  const upTree = await readAnt();
  console.log(`  trunk climb: y=${upTree.y.toFixed(1)} seg=${upTree.climb && upTree.climb.seg}`);
  check(!!upTree.climb && upTree.y > onTree.y + 15, `holding W on the trunk did not gain height (${onTree.y.toFixed(1)} -> ${upTree.y.toFixed(1)})`);
  await shot('climb-tree');
  await hold('KeyS', 4000); // the only way down a trunk is walking back down it
  await page.waitForTimeout(300);
  const downTree = await readAnt();
  console.log(`  after walking back down: y=${downTree.y.toFixed(1)} climb=${JSON.stringify(downTree.climb)}`);
  check(downTree.climb === null || downTree.y < onTree.y + 6, 'could not walk back down the trunk');
  if (downTree.climb) { await tap('KeyE'); await page.waitForTimeout(200); }
  check((await readAnt()).climb === null, 'still stuck on the tree after coming back down');

  /* ---- 3. the nest: in through the mouth, every room entered and left ---- */
  console.log('\n=== nest: down the gallery ===');
  const mouth = await walkTo([0, 0, 16], { label: 'mouth', arriveDist: 8, timeoutMs: 120000 });
  check(mouth.ok, 'could not walk back to the gallery mouth');
  await shot('lawn-mouth');

  const results = {};
  const MIN_BOOM = Math.max(7, 5 * SCALE);
  for (const name of ['midden', 'granary', 'brood']) {
    const r = rooms[name];
    // a point in the main gallery just outside this room's door: the branch
    // origin sits *in* the gallery wall, so step 5 units back down the
    // branch's own direction to stand in the tube facing the opening.
    const galleryWp = [r.origin[0] - r.dir[0] * 5, 0, r.origin[2]];

    console.log(`\n--- ${name}: gallery approach ---`);
    const approach = await walkTo(galleryWp, { label: `${name}:approach`, arriveDist: 5, timeoutMs: 90000 });
    check(approach.ok, `${name}: could not reach the gallery spot facing the door`);

    console.log(`--- ${name}: entering ---`);
    const enter = await walkTo(r.center, { label: `${name}:enter`, arriveDist: 5, timeoutMs: 60000 });
    check(enter.ok, `${name}: could not walk into the room`);
    const at = await readAnt();
    console.log(`  in-room camera boom: ${at.dCam.toFixed(1)} units`);
    await shot(`room-${name}${enter.ok ? '' : '-FAILED'}`);
    await orbit(524);
    await shot(`room-${name}-orbit180`);
    const orbited = await readAnt();
    console.log(`  after 180 orbit: camera boom ${orbited.dCam.toFixed(1)} units`);
    check(at.dCam > MIN_BOOM, `${name}: camera collapsed onto the ant (${at.dCam.toFixed(1)} units, want > ${MIN_BOOM.toFixed(1)}) on entry`);
    check(orbited.dCam > MIN_BOOM * 0.85, `${name}: camera collapsed onto the ant (${orbited.dCam.toFixed(1)} units) after orbiting`);

    console.log(`--- ${name}: leaving ---`);
    const door = await walkTo(r.origin, { label: `${name}:door`, arriveDist: 6, timeoutMs: 60000 });
    check(door.ok, `${name}: could not walk back out to the doorway`);
    await shot(`door-${name}${door.ok ? '' : '-FAILED'}`);
    const out = await walkTo(galleryWp, { label: `${name}:out`, arriveDist: 6, timeoutMs: 45000 });
    check(out.ok, `${name}: could not get back into the gallery`);

    results[name] = { enter: enter.ok, leave: door.ok && out.ok, camBoom: +at.dCam.toFixed(1) };
  }

  /* ---- 4. the queen's dais: camera must slide around her, not through --- */
  console.log('\n=== queen: orbiting the dais ===');
  const queenSpot = [25, 0, -124];
  const q = await walkTo(queenSpot, { label: 'queen', arriveDist: 7, timeoutMs: 90000 });
  check(q.ok, 'queen: could not walk up to the dais');
  await shot('queen-0');
  for (let i = 1; i <= 2; i++) {
    await orbit(350);
    await shot(`queen-orbit-${i}`);
  }

  /* ---- 5. and back out into the daylight -------------------------------- */
  console.log('\n=== home: back out onto the lawn ===');
  const backOut = await walkTo([0, 0, 14], { label: 'home:mouth', arriveDist: 9, timeoutMs: 150000 });
  check(backOut.ok, 'could not get back out of the gallery');
  const home = await walkTo([spawn0.x, 0, spawn0.z], { label: 'home:spawn', arriveDist: 10, timeoutMs: 150000 });
  check(home.ok, 'could not walk back to the spawn meadow');
  await shot('home-meadow');
  const hudEnd = await hudText();
  console.log('  HUD site at the end:', hudEnd.site, '|', hudEnd.detail);

  console.log('\nWorst decor penetration over the whole tour (centre):', worstPen.toFixed(3), worstPenAt || '');
  console.log('Worst decor penetration counting her body radius:', worstBodyPen.toFixed(3));
  check(worstPen < 1.0, `decor penetration ${worstPen.toFixed(2)} at ${worstPenAt} — the ant is standing inside a collider`);
  console.log('Tightest camera boom over the whole tour:', minCamDist.toFixed(1), minCamAt || '');
  console.log('Console errors observed:', consoleErrors.length ? consoleErrors : '(none)');
  console.log('Results:', results);

  await browser.close();
  server.kill();

  if (consoleErrors.length) failures.push(`${consoleErrors.length} console error(s)`);
  if (failures.length) {
    console.log('\nFAILURES:\n - ' + failures.join('\n - '));
    process.exitCode = 1;
  } else {
    console.log('\nAll checks passed.');
  }
}

main().catch((e) => { console.error(e); process.exitCode = 1; });

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
    // a fraction of the chamber radius, so the eye stays inside it whatever its size (#67)
    chamber.x - (fx / fl) * chamber.r * 0.75, founded.nest.floorY + 9, chamber.z - (fz / fl) * chamber.r * 0.75,
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
  /* The face that was worked is gone from the list; what is in it now is the
     work the hall itself carries (#62), which section 5 checks. */
  check(!opened.faces.some((f) => f.id === face.id), 'the finished face is no longer offered as work');

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

  /* ---- 4b. the doorway is actually open --------------------------------- */
  /* THE CHECK THIS FILE DID NOT HAVE, and the reason round 16 shipped a wall
     across the tunnel mouth. Everything above passes on a nest whose corridor
     is joined to the chamber in the height field and blocked by its mesh: the
     footprint, the floor step and the headroom are all answered by
     world/excavation.js, which has no idea what was built. So this asks the
     GEOMETRY, the same way verify-descent.mjs asks it about the ramp — a ray
     from the middle of the chamber to the middle of the hall at eye height,
     and two more a body's width either side, because a doorway you can only
     get through down the exact centre line is the round-15 defect again. */
  console.log('\n=== the doorway is open ===');
  const los = await page.evaluate(([c, h]) => {
    const { THREE } = window.__world6;
    const scene = window.__scene;
    const targets = [];
    scene.traverse((o) => {
      if (!o.isMesh) return;
      let n = o, isNest = false;
      while (n) { if (n.name === 'founded-nest') isNest = true; n = n.parent; }
      if (isNest) targets.push(o);
    });
    const dx = h.x - c.x, dz = h.z - c.z;
    const l = Math.hypot(dx, dz) || 1;
    const ux = dx / l, uz = dz / l;
    const px = -uz, pz = ux;          // across the corridor
    const EYE = 3.0;
    const rc = new THREE.Raycaster();
    const out = [];
    for (const off of [-3.3, 0, 3.3]) {
      const a = new THREE.Vector3(c.x + px * off, c.y + EYE, c.z + pz * off);
      const b = new THREE.Vector3(h.x + px * off, c.y + EYE, h.z + pz * off);
      const d = b.clone().sub(a);
      const len = d.length();
      rc.set(a, d.normalize());
      rc.near = 0.01; rc.far = len;
      const hit = rc.intersectObjects(targets, true);
      out.push({ off, blocked: hit.length > 0, at: hit.length ? +hit[0].distance.toFixed(1) : null, by: hit.length ? (hit[0].object.name || '?') : null });
    }
    return { targets: targets.map((t) => t.name), rays: out };
  }, [{ x: chamber.x, y: founded.nest.floorY, z: chamber.z }, hall]);
  console.log('  nest meshes:', JSON.stringify(los.targets));
  console.log('  rays:', JSON.stringify(los.rays));
  for (const r of los.rays) {
    check(!r.blocked, `nothing stands between the chamber and the hall ${r.off ? `${r.off > 0 ? 'left' : 'right'} of the centre line` : 'down the middle'}`
      + (r.blocked ? ` — hit ${r.by} at ${r.at}` : ''));
  }

  /* ---- 4c. no hole in the ground ----------------------------------------
     An invariant, and a cheap one: standing anywhere inside the nest, every
     ray cast DOWNWARD has to hit something. The floor is a closed surface or
     it is not. A ray that escapes means a crack — between a floor disc and
     the wall that stands on it, between a corridor and the room it joins —
     and a crack underground shows the sky through the ground, which is how
     this round's first two attempts were caught: by eye, in a screenshot,
     one at a time. This sees all of them at once. */
  console.log('\n=== the ground is closed ===');
  const holes = await page.evaluate(([c, h, fy]) => {
    const { THREE } = window.__world6;
    const targets = [];
    window.__scene.traverse((o) => {
      if (!o.isMesh) return;
      let n = o, isNest = false;
      while (n) { if (n.name === 'founded-nest') isNest = true; n = n.parent; }
      if (isNest || o.name === 'lawn') targets.push(o);
    });
    const from = [
      { id: 'chamber', x: c.x, z: c.z },
      { id: 'corridor', x: (c.x + h.x) / 2, z: (c.z + h.z) / 2 },
      { id: 'hall', x: h.x, z: h.z },
    ];
    const rc = new THREE.Raycaster();
    const out = [];
    for (const p of from) {
      let escaped = 0, total = 0;
      for (let i = 0; i < 24; i++) {
        for (let j = 1; j <= 6; j++) {
          const az = (i / 24) * Math.PI * 2;
          const el = -(j / 6) * (Math.PI / 2) * 0.95;      // below the horizon
          const d = new THREE.Vector3(Math.cos(az) * Math.cos(el), Math.sin(el), Math.sin(az) * Math.cos(el));
          rc.set(new THREE.Vector3(p.x, fy + 3.0, p.z), d.normalize());
          rc.near = 0.01; rc.far = 400;
          total++;
          if (!rc.intersectObjects(targets, true).length) escaped++;
        }
      }
      out.push({ id: p.id, escaped, total });
    }
    return out;
  }, [chamber, hall, founded.nest.floorY]);
  for (const r of holes) {
    console.log(`  from the ${r.id}: ${r.escaped} of ${r.total} downward rays escape`);
    check(r.escaped === 0, `the ground under the ${r.id} is closed (${r.escaped} rays escaped)`);
  }

  /* ---- 5. THE HALL CARRIES ITS OWN WORK (#62) ---------------------------
     The acceptance criterion of #62: from the hall, at least two faces on its
     walls. The costs are checked against the CONTRACT's own numbers, written
     here rather than read from the world — a harness that asks the code what it
     should cost proves only that it agrees with itself. §8: 75 for the first
     face, 120 for the hall's, 180 for the generation after, times the size
     factor the porter asked for (0.75 / 1.0 / 1.4). */
  console.log('\n=== the hall has faces of its own ===');
  const SIZE_K = { small: 0.75, medium: 1.0, large: 1.4 };
  const HALL_FACE_SECONDS = 120, DEEP_FACE_SECONDS = 180;
  const hallFaces = opened.faces;
  console.log('  faces on the hall:', JSON.stringify(hallFaces.map((f) => ({
    id: f.id, size: f.size, needed: f.needed, opens: f.opensId, r: f.opensR && +f.opensR.toFixed(1),
  }))));
  check(hallFaces.length >= 2, `the hall publishes at least two faces (${hallFaces.length})`);
  check(hallFaces.length <= 3, `and at most three (${hallFaces.length})`);
  for (const f of hallFaces) {
    check(!!SIZE_K[f.size], `face ${f.id} publishes the size of what it opens (${f.size})`);
    const want = Math.round(HALL_FACE_SECONDS * (SIZE_K[f.size] || 0));
    check(f.needed === want, `face ${f.id} costs ${want} ant-seconds (contract 120 x ${SIZE_K[f.size]}), reads ${f.needed}`);
    /* On the hall's WALL, not floating in it: within a unit of its radius, and
       with its normal pointing back into the room. */
    const d = Math.hypot(f.x - hall.x, f.z - hall.z);
    check(Math.abs(d - hall.r * 0.97) < 1.5, `face ${f.id} sits on the hall's wall (${d.toFixed(1)} from its centre, wall at ${(hall.r * 0.97).toFixed(1)})`);
    const inward = ((hall.x - f.x) * f.nx + (hall.z - f.z) * f.nz) / (d || 1);
    check(inward > 0.9, `face ${f.id}'s normal points into the hall (${inward.toFixed(2)})`);
  }
  /* Two faces on the same wall have to be in two places. */
  for (let i = 0; i < hallFaces.length; i++) {
    for (let j = i + 1; j < hallFaces.length; j++) {
      const sep = Math.hypot(hallFaces[i].x - hallFaces[j].x, hallFaces[i].z - hallFaces[j].z);
      check(sep > 8, `faces ${hallFaces[i].id} and ${hallFaces[j].id} are ${sep.toFixed(1)} apart on the wall`);
    }
  }

  /* Looking across the hall from its entrance, so its far wall — the one the
     new faces are on — fills the frame. The eye is a fraction of the radius
     from the middle, i.e. inside the room whatever size it is. The hall's floor
     is a generation lower than the chamber's now, so the height is taken from
     the HALL's own floor: floorY would have put the camera in its ceiling. */
  const hallY = (opened.rooms.find((r) => r.id === 'hall') || {}).floorY ?? founded.nest.floorY;
  const dux = (hall.x - chamber.x) / (Math.hypot(hall.x - chamber.x, hall.z - chamber.z) || 1);
  const duz = (hall.z - chamber.z) / (Math.hypot(hall.x - chamber.x, hall.z - chamber.z) || 1);
  await view([hall.x - dux * hall.r * 0.62, hallY + 7, hall.z - duz * hall.r * 0.62],
    [hall.x + dux * hall.r * 0.9, hallY + 4, hall.z + duz * hall.r * 0.9]);
  await page.waitForTimeout(300);
  await shot('08-the-hall-with-its-faces');

  /* ---- 6. a second generation ------------------------------------------- */
  console.log('\n=== a second generation opens ===');
  const target = hallFaces[0];
  const gen2 = await page.evaluate((id) => {
    const f = window.__faces().find((x) => x.id === id);
    const r = window.__payDig(id, f ? f.needed - f.worked : 1);
    return { r, rooms: window.__rooms2(), faces: window.__faces() };
  }, target.id);
  console.log('  payDigFace ->', JSON.stringify(gen2.r));
  console.log('  rooms      ->', JSON.stringify(gen2.rooms));
  check(!!(gen2.r && gen2.r.done && gen2.r.opened), 'the hall face reports done and opened something');
  check(gen2.rooms.length === 3, `the excavation now has three rooms (${gen2.rooms.length})`);
  const room2 = gen2.rooms.find((r) => r.id === (gen2.r.opened && gen2.r.opened.id));
  check(!!room2, 'the room it named is in the room list');
  if (room2) {
    check(room2.gen === 2, `it is one generation deeper than the hall (gen ${room2.gen})`);
    check(room2.floorY < founded.nest.floorY - 1,
      `and it is dug LOWER than the chamber (${room2.floorY.toFixed(1)} vs ${founded.nest.floorY.toFixed(1)})`);
    check(Math.abs(room2.r - hall.r * SIZE_K[target.size]) < 0.6,
      `its radius follows the size it published (${room2.r.toFixed(1)} = hall ${hall.r.toFixed(1)} x ${SIZE_K[target.size]})`);
  }
  const deepFaces = gen2.faces.filter((f) => f.id !== target.id && !hallFaces.some((h) => h.id === f.id));
  console.log('  faces on the new room:', JSON.stringify(deepFaces.map((f) => ({ id: f.id, size: f.size, needed: f.needed }))));
  check(deepFaces.length >= 1, `the new room carries work of its own (${deepFaces.length} faces)`);
  for (const f of deepFaces) {
    const want = Math.round(DEEP_FACE_SECONDS * (SIZE_K[f.size] || 0));
    check(f.needed === want, `face ${f.id} costs ${want} (contract 180 x ${SIZE_K[f.size]}), reads ${f.needed}`);
  }

  /* ---- 7. chamber -> hall -> room 2, on foot ----------------------------
     Continuity of the footprint over the WHOLE nest, and off the centre line:
     a body's width either side, because a test that follows the middle never
     touches a wall (PROGRESS.md trap 7). */
  console.log('\n=== the second room is reachable ===');
  const reach = await page.evaluate(([pts]) => {
    const W = window.__world6;
    const fp = W.nestFootprint();
    const out = { outside: 0, worstStep: 0, unroofed: 0, worstAt: null, legs: [] };
    for (let leg = 0; leg < pts.length - 1; leg++) {
      const a = pts[leg], b = pts[leg + 1];
      const dx = b.x - a.x, dz = b.z - a.z;
      const len = Math.hypot(dx, dz) || 1;
      const px = -dz / len, pz = dx / len;
      for (const off of [-3.3, 0, 3.3]) {
        let prevY = null;
        const n = Math.ceil(len / 0.5);
        for (let i = 0; i <= n; i++) {
          const t = i / n;
          const x = a.x + dx * t + px * off, z = a.z + dz * t + pz * off;
          if (!fp.contains(x, z)) out.outside++;
          const y = W.groundY(x, z);
          if (prevY !== null && Math.abs(y - prevY) > out.worstStep) {
            out.worstStep = Math.abs(y - prevY);
            out.worstAt = { x: +x.toFixed(1), z: +z.toFixed(1), off };
          }
          prevY = y;
          const hr = fp.headroom(x, z);
          if (!Number.isFinite(hr) || hr < 9) out.unroofed++;
        }
      }
      out.legs.push({ from: a.id, to: b.id, len: +len.toFixed(1) });
    }
    return out;
  }, [[{ id: 'chamber', x: chamber.x, z: chamber.z }, { id: 'hall', x: hall.x, z: hall.z },
    { id: 'room2', x: room2 ? room2.x : hall.x, z: room2 ? room2.z : hall.z }]]);
  console.log('  legs:', JSON.stringify(reach.legs));
  console.log(`  ${reach.outside} samples outside the footprint, worst step ${reach.worstStep.toFixed(3)} at ${JSON.stringify(reach.worstAt)}, ${reach.unroofed} with < 9 headroom`);
  check(reach.outside === 0, `chamber -> hall -> room 2 is continuous ground, walls included (${reach.outside} gaps)`);
  check(reach.worstStep < 1.0, `no step to fall down anywhere on it (worst ${reach.worstStep.toFixed(3)})`);
  check(reach.unroofed === 0, `a queen height of roof over all of it (${reach.unroofed} short)`);

  /* The doorway of the NEW corridor, asked of the geometry the same way section
     4b asks it of the first one. This is the check round 16 did not have, and
     the second doorway is cut out of a wall that did not exist at founding —
     a different code path from the first, so it needs its own ray. */
  /* The two ends are at DIFFERENT heights, and that is the point of the
     generation drop: the corridor ramps down to the deeper room, so a ray cast
     at one constant height is a ray through the floor at one end. Cast at eye
     height over each end's own floor, which is the line a walker's eye
     actually traces. Getting this wrong cost one run and looked exactly like a
     wall across the doorway. */
  const los2 = await page.evaluate(([a, b]) => {
    const { THREE } = window.__world6;
    const targets = [];
    window.__scene.traverse((o) => {
      if (!o.isMesh) return;
      let n = o, isNest = false;
      while (n) { if (n.name === 'founded-nest') isNest = true; n = n.parent; }
      if (isNest) targets.push(o);
    });
    const dx = b.x - a.x, dz = b.z - a.z;
    const l = Math.hypot(dx, dz) || 1;
    const px = -dz / l, pz = dx / l;
    const rc = new THREE.Raycaster();
    const out = [];
    for (const off of [-3.3, 0, 3.3]) {
      const p0 = new THREE.Vector3(a.x + px * off, a.y + 3.0, a.z + pz * off);
      const p1 = new THREE.Vector3(b.x + px * off, b.y + 3.0, b.z + pz * off);
      const d = p1.clone().sub(p0);
      const len = d.length();
      rc.set(p0, d.normalize());
      rc.near = 0.01; rc.far = len;
      const hit = rc.intersectObjects(targets, true);
      out.push({ off, blocked: hit.length > 0, by: hit.length ? (hit[0].object.name || '?') : null, at: hit.length ? +hit[0].distance.toFixed(1) : null });
    }
    return out;
  }, [{ x: hall.x, y: hallY, z: hall.z }, { x: room2.x, y: room2.floorY, z: room2.z }]);
  console.log('  hall -> room 2 rays:', JSON.stringify(los2));
  for (const r of los2) {
    check(!r.blocked, `nothing stands between the hall and room 2 at offset ${r.off}`
      + (r.blocked ? ` — hit ${r.by} at ${r.at}` : ''));
  }

  /* ---- 8. THE GROUND IS CLOSED, OVER THE WHOLE NEST ---------------------
     The check verify-descent.mjs makes, run here after two generations: a grid
     of straight-down rays over everything dug. A cell that hits nothing is a
     hole, and underground a hole shows the sky THROUGH the ground. */
  console.log('\n=== no open cell over the whole nest ===');
  const openCells = await page.evaluate(() => {
    const { THREE } = window.__world6;
    const W = window.__world6;
    const targets = [];
    window.__scene.traverse((o) => {
      if (!o.isMesh) return;
      let n = o, isNest = false;
      while (n) { if (n.name === 'founded-nest') isNest = true; n = n.parent; }
      if (isNest || o.name === 'lawn') targets.push(o);
    });
    const p = W.descentPath();
    const rooms = W.dugRooms();
    let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity;
    for (const q of [...p, ...rooms]) {
      const pad = 24 + (q.r || 0);
      x0 = Math.min(x0, q.x - pad); x1 = Math.max(x1, q.x + pad);
      z0 = Math.min(z0, q.z - pad); z1 = Math.max(z1, q.z + pad);
    }
    /* Clipped to the MEADOW's own extent, and it has to be: the lawn ends at
       z = 0 and the nest is dug within 30 units of it, so a box padded around
       the rooms reaches off the edge of the world — where a downward ray
       legitimately hits nothing. Unclipped, this reported 602 "holes", every one
       of them a cell of empty space beyond the lawn. */
    const lawn = targets.find((o) => o.name === 'lawn');
    if (lawn) {
      if (!lawn.geometry.boundingBox) lawn.geometry.computeBoundingBox();
      const b = lawn.geometry.boundingBox;
      x0 = Math.max(x0, b.min.x + 2); x1 = Math.min(x1, b.max.x - 2);
      z0 = Math.max(z0, b.min.z + 2); z1 = Math.min(z1, b.max.z - 2);
    }
    const rc = new THREE.Raycaster();
    const down = new THREE.Vector3(0, -1, 0);
    const found = [];
    let cells = 0;
    for (let x = x0; x <= x1; x += 1.8) {
      for (let z = z0; z <= z1; z += 1.8) {
        cells++;
        rc.set(new THREE.Vector3(x, 400, z), down);
        rc.near = 0.01; rc.far = 900;
        if (rc.intersectObjects(targets, true).length) continue;
        const fp = W.nestFootprint();
        found.push({ x: +x.toFixed(1), z: +z.toFixed(1), inNest: fp ? fp.contains(x, z) : false });
      }
    }
    return { cells, count: found.length, sample: found.slice(0, 12), box: [x0, x1, z0, z1].map((v) => +v.toFixed(0)) };
  });
  console.log(`  box ${JSON.stringify(openCells.box)}: ${openCells.count} of ${openCells.cells} cells see through to the sky`);
  if (openCells.count) console.log('  ', JSON.stringify(openCells.sample));
  check(openCells.count === 0, `no open cell over the whole two-generation nest (${openCells.count})`);

  if (room2) {
    const bx = (room2.x - hall.x) / (Math.hypot(room2.x - hall.x, room2.z - hall.z) || 1);
    const bz = (room2.z - hall.z) / (Math.hypot(room2.x - hall.x, room2.z - hall.z) || 1);
    await view([room2.x + bx * room2.r * 0.6, room2.floorY + 6, room2.z + bz * room2.r * 0.6],
      [hall.x, hallY + 4, hall.z]);
    await page.waitForTimeout(300);
    await shot('09-from-room-2-back-up-the-tunnel');

    await view([room2.x - bx * room2.r * 0.55, room2.floorY + 7, room2.z - bz * room2.r * 0.55],
      [room2.x + bx * room2.r * 0.9, room2.floorY + 4, room2.z + bz * room2.r * 0.9]);
    await page.waitForTimeout(300);
    await shot('10-the-second-room');

    /* From the hall into the new corridor: the doorway this round cut out of a
       wall that was itself built by a dig, and the ramp down to the deeper
       room. The one view where a mis-cut would be obvious. */
    await view([hall.x - bx * hall.r * 0.5, hallY + 6, hall.z - bz * hall.r * 0.5],
      [room2.x, room2.floorY + 5, room2.z]);
    await page.waitForTimeout(300);
    await shot('12-from-the-hall-into-the-new-tunnel');

    await view([hall.x, founded.nest.mouth.y + 78, hall.z + 10], [hall.x, founded.nest.floorY, hall.z]);
    await page.waitForTimeout(300);
    await shot('11-two-generations-from-above');
  }

  /* ---- 5. THE SHOTS ----------------------------------------------------- */
  console.log('\n=== views of the hall ===');
  const hx = (hall.x - chamber.x), hz = (hall.z - chamber.z);
  const hl = Math.hypot(hx, hz) || 1;
  const ux = hx / hl, uz = hz / hl;
  const floorY = founded.nest.floorY;

  /* Every eye below is placed INSIDE the volume it is looking from — the old
     ones were 10 and 13 units past the middle of a room of radius 8.5, i.e.
     buried in its wall, and three of the four shots this file takes were of
     the inside of a solid. A shot nobody can read is not a verification. */
  await view([chamber.x - ux * 6, floorY + 5, chamber.z - uz * 6], [hall.x, floorY + 4, hall.z]);
  await page.waitForTimeout(300);
  await shot('03-from-the-chamber-into-the-hall');

  await view([hall.x - ux * hall.r * 0.7, floorY + 7, hall.z - uz * hall.r * 0.7], [hall.x + ux * hall.r * 0.6, floorY + 4, hall.z + uz * hall.r * 0.6]);
  await page.waitForTimeout(300);
  await shot('04-the-hall');

  await view([hall.x + ux * 3, floorY + 5, hall.z + uz * 3], [chamber.x, floorY + 4, chamber.z]);
  await page.waitForTimeout(300);
  await shot('05-looking-back-from-the-hall');

  await view([chamber.x, floorY + 46, chamber.z + 6], [hall.x, floorY, hall.z]);
  await page.waitForTimeout(300);
  await shot('06-the-plan');

  /* The chamber facing its OWN entrance — the open cut the queen walked down.
     Taken because looking back from the hall shows daylight low over the
     chamber floor, and this is the view that says whether that is the ramp
     doing its job or a crack in the world. */
  await view([hall.x - ux * 2, floorY + 4.5, hall.z - uz * 2], [chamber.x - ux * 9, floorY + 3, chamber.z - uz * 9]);
  await page.waitForTimeout(300);
  await shot('07-through-the-chamber-to-the-ramp');

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

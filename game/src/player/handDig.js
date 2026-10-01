import * as THREE from 'three';
import {
  openCells, brushShape, isOpen, lawnY, openCutFloorAt, OPEN_CUT_CLEARANCE,
} from '../world/index.js';
import { CONTROL_DIG_MULT } from './colony.js';
import { SECONDS_PER_CELL } from './plans.js';

/* ==========================================================================
   Digging by hand (#83): a controlled fouisseuse, E held, opens earth where
   she looks.

   A fine brush - one small sphere a little past her mandibles - bites the
   first wall along her aim. Horizontally she aims where she faces (she turns
   to whatever she walks at, so walking into a wall points her at it); the
   camera pitch tilts the bite, so a ramp up or down is dug by looking up or
   down while she works.

   The pace is a budget of cells per second, the AI digger's own rate
   (1 / SECONDS_PER_CELL, the plans' accounting) times CONTROL_DIG_MULT (#36's
   x3). Each bite is paid in full before it opens, so the opening is a stream
   of small bites rather than one big hole.

   Inside a chantier the cells she opens are credited to it (plans.creditCells:
   the same fouisseuse-seconds an AI would have spent on them); outside any
   plan it is free exploration. `cost(cells)` is the hook #85 will use to make
   it cost food / raise spoil: it is called with each bite's cell count and
   returns false to refuse the bite.

   Rules a bite must pass: she stands in the nest's own volume (never from the
   meadow or the open trench), the bite keeps the volume's cover under the
   lawn (brush default), stays under MAX_DEPTH, and keeps the trench's
   clearance (the same test a chantier passes).
   ========================================================================== */

export const HAND_RATE = CONTROL_DIG_MULT / SECONDS_PER_CELL;   // cells per second
/* Sized so what she opens is a place a WORKER can stand in (nestPath.js: a span
   >= 3.5 high with open air a body's width either side): a thinner burrow would
   be dug and then be a wall to her own legs. The bite sits a little above her
   mandibles' line for the same reason. */
const BRUSH_R = 2.1;
const BITE_LIFT = 0.5;
const REACH_NEAR = 1.2, REACH_MAX = 8.0, MARCH = 0.25;
const MAX_DEPTH = 70;            // under the lawn, at the bite
const MIN_BITE = 2;              // cells: less is a graze, not a bite
const HEAD_Y = 1.25;             // mandible height, in body units
const NEUTRAL_PITCH = -0.19;     // the default camera pitch: aims level

const N_DUST = 64;

export function createHandDig({ scene, plans, cost = () => true, onDug = null }) {
  /* ---- the ring on the wall ------------------------------------------- */
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(0.7, 1.0, 40),
    new THREE.MeshBasicMaterial({
      color: new THREE.Color('#FFB03A').multiplyScalar(1.5), transparent: true, opacity: 0.85,
      depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    }),
  );
  ring.renderOrder = 999;
  ring.visible = false;
  ring.frustumCulled = false;
  scene.add(ring);

  /* ---- dust ------------------------------------------------------------ */
  const pos = new Float32Array(N_DUST * 3), vel = new Float32Array(N_DUST * 3), life = new Float32Array(N_DUST);
  for (let i = 0; i < N_DUST; i++) pos[i * 3 + 1] = -9999;
  const dustGeo = new THREE.BufferGeometry();
  dustGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const dust = new THREE.Points(dustGeo, new THREE.PointsMaterial({
    color: 0x9a7448, size: 0.45, sizeAttenuation: true, transparent: true, opacity: 0.9, depthWrite: false,
  }));
  dust.frustumCulled = false;
  scene.add(dust);
  let dustHead = 0;
  function puff(p, n, dir) {
    for (let k = 0; k < n; k++) {
      const i = dustHead; dustHead = (dustHead + 1) % N_DUST;
      pos[i * 3] = p[0] + (Math.random() - 0.5) * 1.2; pos[i * 3 + 1] = p[1] + (Math.random() - 0.5) * 1.2; pos[i * 3 + 2] = p[2] + (Math.random() - 0.5) * 1.2;
      vel[i * 3] = -dir[0] * 3 + (Math.random() - 0.5) * 4;
      vel[i * 3 + 1] = -dir[1] * 3 + Math.random() * 3;
      vel[i * 3 + 2] = -dir[2] * 3 + (Math.random() - 0.5) * 4;
      life[i] = 0.5 + Math.random() * 0.5;
    }
  }

  const state = {
    active: false,        // digging this frame (held with a valid bite)
    aim: false,           // a bite is available (ring visible)
    bites: 0, seconds: 0, cells: 0, planCells: 0, freeCells: 0, refused: 0,
    lastBite: null,
  };
  let budget = 0;

  /* The bite for this aim: first wall along the ray, or null. */
  function probe(ant, pitch) {
    const s = ant.scale || 1;
    const el = Math.max(-0.75, Math.min(0.75, pitch - NEUTRAL_PITCH));
    const ce = Math.cos(el);
    const dir = [Math.sin(ant.yaw) * ce, Math.sin(el), Math.cos(ant.yaw) * ce];
    const head = [ant.x, ant.y + HEAD_Y * s, ant.z];
    // from the nest's own air only: not the meadow, not the open trench
    if (!isOpen(head[0], head[1], head[2])) return null;
    let hit = -1;
    for (let t = REACH_NEAR * s; t <= REACH_MAX * s + 1e-6; t += MARCH) {
      if (!isOpen(head[0] + dir[0] * t, head[1] + dir[1] * t, head[2] + dir[2] * t)) { hit = t; break; }
    }
    if (hit < 0) return null;
    const surf = [head[0] + dir[0] * hit, head[1] + dir[1] * hit, head[2] + dir[2] * hit];
    const c = [surf[0] + dir[0] * 0.7, surf[1] + dir[1] * 0.7 + BITE_LIFT, surf[2] + dir[2] * 0.7];
    if (c[1] < lawnY(c[0], c[2]) - MAX_DEPTH) return { dir, surf, ok: false, why: 'depth' };
    // flat floor at her own (or the ramp's, when she aims up/down): no dipping a bit further every bite
    const brush = { center: c, radius: BRUSH_R, noise: 0.4, floor: ant.y + dir[1] * hit - 0.05 };
    const { sdf, box } = brushShape(brush);
    const out = [];
    for (let ix = Math.ceil(box[0]); ix <= Math.floor(box[3]); ix++) {
      for (let iz = Math.ceil(box[2]); iz <= Math.floor(box[5]); iz++) {
        for (let iy = Math.ceil(box[1]); iy <= Math.floor(box[4]); iy++) {
          if (sdf(ix, iy, iz) < 0 && !isOpen(ix, iy, iz)) out.push(ix, iy, iz);
        }
      }
    }
    if (out.length / 3 < MIN_BITE) return { dir, surf, ok: false, why: 'few ' + out.length / 3 };
    for (let i = 0; i < out.length; i += 3) {
      const cut = openCutFloorAt(out[i], out[i + 2]);
      if (cut !== null && cut - out[i + 1] < OPEN_CUT_CLEARANCE) return { dir, surf, ok: false, why: 'trench' };
    }
    return { dir, surf, ok: true, brush, cells: Int32Array.from(out) };
  }

  const _n = new THREE.Vector3();
  /**
   * One frame. `ant` null = not a digger being played (hide everything).
   * `held` = E is down and nothing else claims it. `pitch` = camera wantPitch.
   */
  function update(ant, held, pitch, dt) {
    if (state.refused > 0) state.refused -= dt;
    // dust always falls, whoever is controlled
    for (let i = 0; i < N_DUST; i++) {
      if (life[i] <= 0) continue;
      life[i] -= dt;
      if (life[i] <= 0) { pos[i * 3 + 1] = -9999; continue; }
      vel[i * 3 + 1] -= 14 * dt;
      pos[i * 3] += vel[i * 3] * dt; pos[i * 3 + 1] += vel[i * 3 + 1] * dt; pos[i * 3 + 2] += vel[i * 3 + 2] * dt;
    }
    dustGeo.attributes.position.needsUpdate = true;

    state.active = false; state.aim = false;
    if (!ant) { ring.visible = false; budget = 0; return state; }
    const pr = probe(ant, pitch);
    if (!pr || !pr.ok) {
      ring.visible = false;
      if (!held) budget = 0;
      return state;
    }
    state.aim = true;
    ring.visible = true;
    ring.position.set(pr.surf[0] - pr.dir[0] * 0.15, pr.surf[1] - pr.dir[1] * 0.15, pr.surf[2] - pr.dir[2] * 0.15);
    _n.set(ring.position.x - pr.dir[0], ring.position.y - pr.dir[1], ring.position.z - pr.dir[2]);
    ring.lookAt(_n);
    const pulse = held ? 1 + 0.12 * Math.sin(performance.now() * 0.03) : 1;
    ring.scale.setScalar(BRUSH_R * 0.9 * pulse);
    ring.material.opacity = held ? 1 : 0.65;

    if (!held) { budget = 0; return state; }
    state.active = true; state.seconds += dt;
    budget = Math.min(budget + HAND_RATE * dt, 60);
    const n = pr.cells.length / 3;
    if (budget >= n && cost(n, pr.cells) === false) { state.refused = 1.5; state.active = false; return state; }
    if (budget >= n) {
      budget -= n;
      const credited = plans && plans.creditCells ? plans.creditCells(pr.cells) : 0;
      const opened = openCells(pr.brush);
      if (opened > 0) {
        state.bites++; state.cells += opened;
        state.planCells += credited; state.freeCells += opened - credited;
        state.lastBite = { center: pr.brush.center, cells: opened, credited };
        puff(pr.surf, 4, pr.dir);
        if (onDug) onDug(opened - credited, pr.surf, ant);
      }
    }
    return state;
  }

  return {
    update, state, probe,
    promptText: () => (state.refused > 0 ? 'Plus de nourriture — rapportez des graines' : state.aim ? 'E maintenu — creuser' : null),
    dispose() { scene.remove(ring); scene.remove(dust); dustGeo.dispose(); },
  };
}

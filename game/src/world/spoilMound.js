import * as THREE from 'three';
import { vnoise } from '../core/noise.js';
import { lawnY } from './terrain.js';
import { descentPath, nestOrigin } from './founding.js';

/* ==========================================================================
   The spoil mound (#85): the earth the diggers carry out, piled on the lawn
   BESIDE the entrance (not on the ramp, which must stay a way in).

   Contract (design/api-monde-gameplay.md, "spoil mound"):
     spoilAnchors()           -> { mouth, dir, drop, heap } | null
         mouth  {x,y,z}  top of the ramp, where the nest meets the lawn
         dir    {x,z}    unit vector, outward from the nest through the mouth
         drop   {x,y,z}  where a hauler puts her pellet down (the heap's rim,
                         on the mouth side)
         heap   {x,z}    centre of the heap
     createSpoilMound(scene) -> { setAmount(pellets), update(dt), anchors(),
                                  state: { pellets, radius, height }, dispose() }

   It is a low organic dome in earth colours, grown from the number of pellets
   BROUGHT OUT (player/economy.js state.out): radius 2.2 + 1.9 sqrt(n) up to
   MAX_R, height 0.42 radius - a dozen pellets is a hillock the size of a
   chamber's mouth, a hundred is a proper tump. The radius eases toward its
   target so each pellet dropped reads as a shovelful landing. Nothing here
   knows what a pellet is; whoever owns the economy calls setAmount().
   ========================================================================== */

const MAX_R = 13;
const RADIAL = 12, ANGULAR = 40;
const radiusFor = (n) => (n <= 0 ? 0 : Math.min(MAX_R, 2.2 + 1.9 * Math.sqrt(n)));
const EARTH = [new THREE.Color('#6a4a30'), new THREE.Color('#8a6544'), new THREE.Color('#5a3f2a')];

/** Mouth, outward direction, drop point and heap centre, or null before the nest exists. */
export function spoilAnchors() {
  const path = descentPath();
  if (!path || path.length < 2) return null;
  // the END of the ramp that comes up to the lawn (the path is one end to the other; the highest
  // END, not the highest point: the lawn dips and the second sample can sit above the first)
  const last = path.length - 1;
  const top = path[0].y > path[last].y ? 0 : last;
  const nb = top === 0 ? path[1] : path[last - 1];
  let dx = path[top].x - nb.x, dz = path[top].z - nb.z;
  let l = Math.hypot(dx, dz);
  if (l < 1e-6) { const o = nestOrigin(); dx = path[top].x - (o ? o.x : 0); dz = path[top].z - (o ? o.z : 0); l = Math.hypot(dx, dz) || 1; }
  dx /= l; dz /= l;
  /* Beside the way out, not on it: past the end of the ramp (the trench's footprint stops
     there) and off to one side. Which side: the one whose ground is lower, so the heap
     does not sit on the hill. */
  const M = path[top];
  const px = -dz, pz = dx;
  const at = (fw, sd) => { const x = M.x + dx * fw + px * sd, z = M.z + dz * fw + pz * sd; return { x, y: lawnY(x, z), z }; };
  const side = lawnY(M.x + dx * 12 + px * 14, M.z + dz * 12 + pz * 14) <= lawnY(M.x + dx * 12 - px * 14, M.z + dz * 12 - pz * 14) ? 1 : -1;
  return {
    mouth: M, dir: { x: dx, z: dz },
    drop: at(12, 7 * side),
    heap: at(15, 15 * side),
  };
}

export function createSpoilMound(scene) {
  const geo = new THREE.BufferGeometry();
  const nv = 1 + RADIAL * ANGULAR;
  const pos = new Float32Array(nv * 3), col = new Float32Array(nv * 3);
  const idx = [];
  const vi = (r, a) => 1 + (r - 1) * ANGULAR + (a % ANGULAR);      // ring r (1..RADIAL), hub = 0
  for (let a = 0; a < ANGULAR; a++) idx.push(0, vi(1, a + 1), vi(1, a));
  for (let r = 1; r < RADIAL; r++) {
    for (let a = 0; a < ANGULAR; a++) idx.push(vi(r, a), vi(r, a + 1), vi(r + 1, a + 1), vi(r, a), vi(r + 1, a + 1), vi(r + 1, a));
  }
  geo.setIndex(idx);
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
    vertexColors: true, roughness: 1, metalness: 0, flatShading: true, side: THREE.DoubleSide,
  }));
  mesh.name = 'spoil-mound';
  mesh.frustumCulled = false;
  mesh.castShadow = true; mesh.receiveShadow = true;
  mesh.visible = false;
  scene.add(mesh);

  const state = { pellets: 0, radius: 0, height: 0 };
  let target = 0, anch = null, seed = 17.3;

  function rebuild() {
    if (!anch) return;
    const R = state.radius, H = state.height, c = anch.heap;
    const P = geo.attributes.position.array, C = geo.attributes.color.array;
    const set = (i, x, y, z, k) => {
      P[i * 3] = x; P[i * 3 + 1] = y; P[i * 3 + 2] = z;
      const t = vnoise(x * 0.4 + seed, z * 0.4 + seed);
      const e = EARTH[t < 0.4 ? 0 : t < 0.7 ? 1 : 2];
      const dark = 0.82 + 0.18 * k;        // a little lighter at the crown
      C[i * 3] = e.r * dark; C[i * 3 + 1] = e.g * dark; C[i * 3 + 2] = e.b * dark;
    };
    set(0, c.x, lawnY(c.x, c.z) + H, c.z, 1);
    for (let r = 1; r <= RADIAL; r++) {
      const t = r / RADIAL;
      for (let a = 0; a < ANGULAR; a++) {
        const th = (a / ANGULAR) * Math.PI * 2;
        const lump = (vnoise(Math.cos(th) * 2 + seed, Math.sin(th) * 2 + seed + t * 3) - 0.5) * 0.35;
        const rr = R * t * (1 + lump * 0.5);
        const x = c.x + Math.cos(th) * rr, z = c.z + Math.sin(th) * rr;
        // the hem goes a little into the meadow so it is buried, never floating
        const h = H * Math.pow(Math.max(0, 1 - t * t), 0.9) * (1 + lump) - 0.45 * Math.pow(t, 4);
        set(1 + (r - 1) * ANGULAR + a, x, lawnY(x, z) + h, z, 1 - t);
      }
    }
    geo.attributes.position.needsUpdate = true;
    geo.attributes.color.needsUpdate = true;
    geo.computeVertexNormals();
  }

  return {
    state,
    anchors() { if (!anch) anch = spoilAnchors(); return anch; },
    setAmount(n) { state.pellets = n; target = radiusFor(n); },
    update(dt) {
      if (!anch) { anch = spoilAnchors(); if (!anch) return; }
      if (Math.abs(state.radius - target) < 0.01) {
        if (state.radius !== target) { state.radius = target; state.height = 0.42 * target; rebuild(); }
        return;
      }
      state.radius += (target - state.radius) * Math.min(1, dt * 2.5);
      if (Math.abs(state.radius - target) < 0.01) state.radius = target;
      state.height = 0.42 * state.radius;
      mesh.visible = state.radius > 0.2;
      rebuild();
    },
    mesh,
    dispose() { scene.remove(mesh); geo.dispose(); mesh.material.dispose(); },
  };
}

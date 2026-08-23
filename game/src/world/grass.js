import * as THREE from 'three';
import { rng, vnoise } from '../core/noise.js';
import { antState } from '../core/antState.js';
import { bladeBaseWidth } from './blade.js';
import { groundY, LAWN_BOUNDS } from './terrain.js';

/* ==========================================================================
   Grass (#22): rebuilt as a THREE.InstancedMesh instead of the old
   prototype's one-ribbon-per-blade static mesh, with a vertex shader doing
   both idle wind sway (as before) and a new contact bend toward the ant.

   Per-blade geometry is unchanged in spirit from blade() in the old
   prototype (design/prototypes/sortie-fourmiliere.html): a flat ribbon bent
   by t²·h·0.26, segs=6 (7 rows, 6 quads — same low-poly budget as before).
   What moves to the GPU is the bend math itself: only 4 floats + 1 colour
   per *instance* (base xz+h, facing angle, wind phase, tip tint) are
   uploaded, and one small unit-blade geometry (14 verts, 36 indices) is
   shared by every instance — so the CPU cost of "N blades" no longer scales
   with N the way rebuilding a full ribbon per blade did.

   Contact bend: a single "bend target" (uAntPos/uAntRadius, updated from
   core/antState.js every frame) is pushed to the shader, in the same spirit
   the old prototype pushed small local lights (ALL_LIGHTS) to the fragment
   shader — one CPU-owned point + radius, consumed per-vertex. No physics
   engine: bend is a direct function of distance-to-target and t (stronger
   near the tip), not a simulated spring, which is enough for "the blade
   reacts to the ant" without the complexity of cannon-es/rapier.
   ========================================================================== */

const SEGS = 6;

function buildBladeGeometry() {
  const positions = [];
  const aT = [];
  const aSide = [];
  const indices = [];
  for (let s = 0; s <= SEGS; s++) {
    const t = s / SEGS;
    // placeholder shape only — the real, bent position is computed in the
    // vertex shader from aT/aSide + the per-instance attributes below; this
    // just gives the geometry a sane (if unused) bounding shape.
    positions.push(-0.5, t, 0, 0.5, t, 0);
    aT.push(t, t);
    aSide.push(-1, 1);
  }
  for (let s = 1; s <= SEGS; s++) {
    const L0 = (s - 1) * 2, R0 = L0 + 1, L1 = s * 2, R1 = L1 + 1;
    indices.push(L0, R0, R1, L0, R1, L1);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('aT', new THREE.Float32BufferAttribute(aT, 1));
  geo.setAttribute('aSide', new THREE.Float32BufferAttribute(aSide, 1));
  geo.setIndex(indices);
  return geo;
}

const C_MOSS_A = new THREE.Color('#4c5f2f');
const C_MOSS_B = new THREE.Color('#7d9c4e'), C_MOSS_TIP = new THREE.Color('#a8c774');

/**
 * Builds the grass field: an InstancedMesh plus the footprint data
 * Cataglyphis's climb/collision code needs (x, z, h, baseY, w, ang — same
 * shape as the old prototype's GRASS[] entries, so anything already written
 * against that shape ports over unchanged).
 */
export function createGrassField({ count = 620, seed = 7 } = {}) {
  const R = rng(seed);
  const geometry = buildBladeGeometry();

  const aBase = new Float32Array(count * 3);
  const aH = new Float32Array(count);
  const aAng = new Float32Array(count);
  const aPhase = new Float32Array(count);
  const aTip = new Float32Array(count * 3);
  const footprints = [];

  let i = 0;
  let guard = 0;
  // rejection loop mirrors the old prototype's "keep the exit sightline
  // open" skip (near = |x|<16 && z<34, 82% of candidates there discarded)
  while (i < count && guard < count * 8) {
    guard++;
    const bx = (R() - 0.5) * 340;
    const bz = 6 + R() * 236;
    const near = Math.abs(bx) < 16 && bz < 34;
    if (near && R() < 0.82) continue;

    const h = 26 + R() * 74 * (0.5 + 0.5 * vnoise(bx * 0.01, bz * 0.01));
    const ang = R() * Math.PI * 2;
    const baseY = groundY(bx, bz);
    const tip = new THREE.Color(C_MOSS_B).lerp(C_MOSS_TIP, R());

    aBase[i * 3] = bx; aBase[i * 3 + 1] = baseY; aBase[i * 3 + 2] = bz;
    aH[i] = h;
    aAng[i] = ang;
    aPhase[i] = R() * Math.PI * 2;
    aTip[i * 3] = tip.r; aTip[i * 3 + 1] = tip.g; aTip[i * 3 + 2] = tip.b;

    footprints.push({ x: bx, z: bz, h, baseY, w: bladeBaseWidth(h), ang });
    i++;
  }
  const actualCount = i;

  geometry.setAttribute('aBase', new THREE.InstancedBufferAttribute(aBase.subarray(0, actualCount * 3), 3));
  geometry.setAttribute('aH', new THREE.InstancedBufferAttribute(aH.subarray(0, actualCount), 1));
  geometry.setAttribute('aAng', new THREE.InstancedBufferAttribute(aAng.subarray(0, actualCount), 1));
  geometry.setAttribute('aPhase', new THREE.InstancedBufferAttribute(aPhase.subarray(0, actualCount), 1));
  geometry.setAttribute('aTip', new THREE.InstancedBufferAttribute(aTip.subarray(0, actualCount * 3), 3));

  // bounds aren't representative of the real (shader-computed) positions —
  // frustum culling against a per-vertex bounding sphere would be wrong, so
  // hand it one that covers the whole lawn instead of disabling culling
  // outright.
  const cx = (LAWN_BOUNDS.x0 + LAWN_BOUNDS.x1) / 2, cz = (LAWN_BOUNDS.z0 + LAWN_BOUNDS.z1) / 2;
  const radius = Math.hypot(LAWN_BOUNDS.x1 - cx, LAWN_BOUNDS.z1 - cz) + 120;
  geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(cx, 40, cz), radius);

  const uniforms = {
    uTime: { value: 0 },
    uWind: { value: 0.55 },
    uAntPos: { value: new THREE.Vector3(0, 0, -9999) },
    uAntRadius: { value: 0.9 },
    uBaseColor: { value: new THREE.Color(C_MOSS_A) },
  };

  const material = new THREE.MeshStandardMaterial({ roughness: 0.85, metalness: 0, side: THREE.DoubleSide });
  material.extensions = { derivatives: true };
  material.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms);

    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `
        attribute float aT;
        attribute float aSide;
        attribute vec3 aBase;
        attribute float aH;
        attribute float aAng;
        attribute float aPhase;
        attribute vec3 aTip;
        uniform float uTime;
        uniform float uWind;
        uniform vec3 uAntPos;
        uniform float uAntRadius;
        uniform vec3 uBaseColor;
        varying vec3 vGrassColor;
        #include <common>
      `)
      .replace('#include <beginnormal_vertex>', `
        float gT = aT;
        float dirX = cos(aAng), dirZ = sin(aAng);
        vec3 perp = vec3(-dirZ, 0.0, dirX);
        float dBend = 0.52 * aH * gT;
        vec3 tangentDir = normalize(vec3(dirX * dBend, aH * (1.0 - 0.26 * gT), dirZ * dBend));
        vec3 objectNormal = normalize(cross(tangentDir, perp));
      `)
      .replace('#include <begin_vertex>', `
        float bend = gT * gT * aH * 0.26;
        float taperK = (1.0 - gT) * (1.0 - gT * 0.25);
        float width = (1.7 + aH * 0.028) * taperK + 0.05;
        vec3 curvePos = aBase + vec3(dirX * bend, aH * gT * (1.0 - gT * 0.13), dirZ * bend);
        vec3 transformed = curvePos + perp * (width * aSide);

        // idle wind sway, phase-desynced per instance so the field doesn't
        // move as one rigid sheet
        float ph = aBase.x * 0.07 + aBase.z * 0.05 + aPhase;
        float amp = gT * gT * uWind;
        transformed.x += sin(uTime * 1.35 + ph) * amp + sin(uTime * 3.1 + ph * 2.3) * amp * 0.3;
        transformed.z += cos(uTime * 1.05 + ph * 1.4) * amp * 0.75;

        // contact bend: push away from the ant, stronger near the tip and
        // within uAntRadius -- see core/antState.js for the contract
        vec2 toBlade = transformed.xz - uAntPos.xz;
        float bladeDist = length(toBlade);
        float influence = clamp(1.0 - bladeDist / max(uAntRadius, 0.001), 0.0, 1.0);
        influence = influence * influence * gT;
        vec2 pushDir = bladeDist > 0.0001 ? toBlade / bladeDist : vec2(1.0, 0.0);
        transformed.xz += pushDir * influence * aH * 0.22;

        vGrassColor = mix(uBaseColor, aTip, gT) * (0.52 + 0.48 * gT);
      `);

    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `
        varying vec3 vGrassColor;
        #include <common>
      `)
      .replace('#include <color_fragment>', `
        #include <color_fragment>
        diffuseColor.rgb *= vGrassColor;
      `);
  };

  const mesh = new THREE.InstancedMesh(geometry, material, actualCount);
  mesh.name = 'grass';
  mesh.castShadow = false; // deferred: no custom shadow depth material for the bent shape yet
  const identity = new THREE.Matrix4();
  for (let k = 0; k < actualCount; k++) mesh.setMatrixAt(k, identity);
  mesh.instanceMatrix.needsUpdate = true;

  function update(dt, elapsed) {
    uniforms.uTime.value = elapsed;
    uniforms.uAntPos.value.copy(antState.position);
    uniforms.uAntRadius.value = antState.radius;
  }

  return { mesh, footprints, update };
}

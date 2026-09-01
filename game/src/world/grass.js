import * as THREE from 'three';
import { rng, vnoise, lerp } from '../core/noise.js';
import { antState } from '../core/antState.js';
import { bladeBaseWidth } from './blade.js';
import { groundY, waterDepthAt, LAWN_BOUNDS, TERRAIN_BOUNDS } from './terrain.js';

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

const C_MOSS_A = new THREE.Color('#5A7331');
const C_MOSS_B = new THREE.Color('#8FB055'), C_MOSS_TIP = new THREE.Color('#C6DC82');

/**
 * Builds the grass field: an InstancedMesh plus the footprint data
 * Cataglyphis's climb/collision code needs (x, z, h, baseY, w, ang — same
 * shape as the old prototype's GRASS[] entries, so anything already written
 * against that shape ports over unchanged).
 */
export function createGrassField({ count = 900, seed = 7 } = {}) {
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
    // spread over the meshed map, not just the playable box, so the far bank
    // across the river is grassed too — it is the backdrop of every view west
    const bx = lerp(TERRAIN_BOUNDS.x0 + 8, LAWN_BOUNDS.x1 - 4, R());
    const bz = 6 + R() * (LAWN_BOUNDS.z1 - 6);
    if (waterDepthAt(bx, bz) > 0) continue;          // nothing grows in the river
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
  const cx = (TERRAIN_BOUNDS.x0 + LAWN_BOUNDS.x1) / 2, cz = (LAWN_BOUNDS.z0 + LAWN_BOUNDS.z1) / 2;
  const radius = Math.hypot(LAWN_BOUNDS.x1 - cx, LAWN_BOUNDS.z1 - cz) + 120;
  geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(cx, 40, cz), radius);

  const uniforms = {
    uTime: { value: 0 },
    uWind: { value: 0.55 },
    uAntPos: { value: new THREE.Vector3(0, 0, -9999) },
    uAntRadius: { value: 0.9 },
    uBaseColor: { value: new THREE.Color(C_MOSS_A) },
    // near-camera fade window (world units). At ant scale the grass is the
    // main thing between the player and their character: walking into a
    // clump used to fill the screen with black slabs, which reads exactly
    // like the "je ne vois que les parois" the nest had. The old prototype
    // solved this camera-side with unoccludedFraction() raycasting GRASS[];
    // done here instead, per fragment, so it also covers blades that are
    // merely brushing the frustum rather than dead centre.
    uOccNear: { value: 5.0 },
    uOccFar: { value: 16.0 },
    // Leaf translucency floor. A blade whose face is turned away from the
    // sun gets nothing but the hemisphere light's ground colour, which is
    // near-black soil — so half the field was rendering as flat black slabs
    // (seen on screen, not assumed). Real grass never does that: it is thin
    // enough to glow with the light coming through it from behind. One
    // cheap constant term is enough to read as that, and it doubles as the
    // guarantee that a blade is never a silhouette the player can't see past.
    uTransl: { value: 0.16 },
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
        varying float vGrassDist;
        varying vec3 vGrassRay; // x: distance along the camera->ant ray, y: perpendicular distance from it, z: camera->ant distance
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
        vec3 grassWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;
        vGrassDist = distance(grassWorld, cameraPosition);
        // where this blade sits relative to the line of sight from the
        // camera to the ant — see the fragment side for what it's for
        vec3 toAnt = uAntPos - cameraPosition;
        float antDist = length(toAnt);
        vec3 sightDir = toAnt / max(antDist, 0.001);
        vec3 rel = grassWorld - cameraPosition;
        float along = dot(rel, sightDir);
        vGrassRay = vec3(along, length(rel - sightDir * along), antDist);
      `);

    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `
        varying vec3 vGrassColor;
        varying float vGrassDist;
        varying vec3 vGrassRay;
        uniform float uOccNear;
        uniform float uOccFar;
        uniform float uTransl;
        #include <common>
      `)
      // Dissolve rather than blend: the field is one InstancedMesh, so real
      // transparency would need per-instance depth sorting every frame (and
      // would still be wrong within a single blade). A stable screen-space
      // dither threshold gives the same "it thins out and I can see through
      // it" read for free, keeps the blades in the depth buffer where they
      // are still solid, and costs one discard.
      .replace('#include <clipping_planes_fragment>', `
        #include <clipping_planes_fragment>
        // Two reasons a blade gets dissolved. Near-camera: anything within
        // arm's reach of the eye is a slab across the whole screen and tells
        // the player nothing. In the line of sight: blades standing between
        // the camera and the ant hide the character outright — at ant scale,
        // with a 36-unit boom, a normal clump of grass is a wall. The old
        // prototype handled the second case camera-side, raycasting GRASS[]
        // (unoccludedFraction(), section 7); doing it here instead clears
        // exactly the blades that are in the way and leaves the rest of the
        // field standing, rather than yanking the whole camera in.
        float cone = 1.0 - smoothstep(4.0, 7.5, vGrassRay.y);
        float inFront = smoothstep(0.5, 3.0, vGrassRay.x)
                      * (1.0 - smoothstep(vGrassRay.z - 4.0, vGrassRay.z - 1.0, vGrassRay.x));
        float occFade = min(smoothstep(uOccNear, uOccFar, vGrassDist), 1.0 - cone * inFront);
        if (occFade < 0.999) {
          // 4x4 ordered Bayer threshold, computed rather than table-indexed
          // (dynamic indexing into a local array is not portable GLSL). A
          // fixed screen-space pattern, not noise, so the dissolve doesn't
          // crawl or shimmer as the camera moves.
          vec2 b1 = mod(gl_FragCoord.xy, 2.0);
          vec2 b2 = floor(0.5 * mod(gl_FragCoord.xy, 4.0));
          float th = (4.0 * mix(mix(0.0, 2.0, b1.y), mix(3.0, 1.0, b1.y), b1.x)
                          + mix(mix(0.0, 2.0, b2.y), mix(3.0, 1.0, b2.y), b2.x) + 0.5) / 16.0;
          if (occFade < th) discard;
        }
      `)
      .replace('#include <color_fragment>', `
        #include <color_fragment>
        diffuseColor.rgb *= vGrassColor;
      `)
      // after gl_FragColor is composed, before tone mapping — see uTransl
      .replace('#include <tonemapping_fragment>', `
        gl_FragColor.rgb += vGrassColor * uTransl;
        #include <tonemapping_fragment>
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

import * as THREE from 'three';
import { rng, vnoise, lerp } from '../core/noise.js';
import { antState } from '../core/antState.js';
import { bladeBaseWidth, bladeWidthFor } from './blade.js';
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
/* The blade's geometry, as one function, because it now has TWO consumers:
   the visible material and the shadow depth pass. A blade that casts the
   shadow of a straight, unbent, unswayed ribbon is worse than one that casts
   none — the shadow contradicts the picture. So the displacement is written
   once and both passes call it. Anything added below (a new wind term, a new
   bend) reaches the shadow for free, which is the whole point of the split.

   `phase` is the only reason this takes gT rather than reading aT directly:
   nothing. It takes gT for readability at the call sites. */
const GRASS_SHAPE = /* glsl */`
attribute float aT;
attribute float aSide;
attribute vec3 aBase;
attribute float aH;
attribute float aAng;
attribute float aPhase;
attribute vec3 aTip;
attribute float aWidth;
attribute float aTwist;
uniform float uTime;
uniform float uWind;
uniform vec3 uAntPos;
uniform float uAntRadius;
uniform vec3 uBaseColor;

/* Fills pos with the displaced vertex, nrm with its normal, in object
   space. Both passes call this; only the visible one uses nrm. */
void grassShape(out vec3 pos, out vec3 nrm) {
  float gT = aT;
  float dirX = cos(aAng), dirZ = sin(aAng);
  vec3 perp = vec3(-dirZ, 0.0, dirX);
  float dBend = 0.52 * aH * gT;
  vec3 tangentDir = normalize(vec3(dirX * dBend, aH * (1.0 - 0.26 * gT), dirZ * dBend));
  vec3 n0 = normalize(cross(tangentDir, perp));

  /* A twist along the blade (herbe-brins 5b). perp used to be fixed, so every
     ribbon faced one direction over its whole length and the field read as
     cards all hung the same way. One float per instance: some blades now
     present their edge and some their face, and each changes along itself. */
  float roll = aTwist * gT;
  float cr = cos(roll), sr = sin(roll);
  vec3 perpRolled = perp * cr + n0 * sr;
  vec3 nRolled    = n0   * cr - perp * sr;

  /* A keel in the NORMAL, not in the geometry (5a). A real blade is folded in
     a V across its section, and that fold is what gives it a light side and a
     dark side. Tilting the normal across the ribbon puts the two edges 63
     degrees apart for zero extra vertices. */
  nrm = normalize(nRolled - perpRolled * (aSide * 0.62));

  float bend = gT * gT * aH * 0.26;
  /* Holds its width for the first 60% and then points, instead of narrowing
     from the base (2). It reaches exactly zero, so the old + 0.05 goes: a tip
     cut off square is the loudest geometric tell in the set. The 0.02 floor
     only avoids a degenerate normal exactly at the tip. */
  float taperK = pow(1.0 - pow(gT, 2.6), 0.55);
  float width = aWidth * 0.5 * taperK + 0.02;
  vec3 curvePos = aBase + vec3(dirX * bend, aH * gT * (1.0 - gT * 0.13), dirZ * bend);
  pos = curvePos + perpRolled * (width * aSide);

  // idle wind sway, phase-desynced per instance so the field doesn't move as
  // one rigid sheet
  float ph = aBase.x * 0.07 + aBase.z * 0.05 + aPhase;
  float amp = gT * gT * uWind;
  pos.x += sin(uTime * 1.35 + ph) * amp + sin(uTime * 3.1 + ph * 2.3) * amp * 0.3;
  pos.z += cos(uTime * 1.05 + ph * 1.4) * amp * 0.75;

  // contact bend: push away from the ant, stronger near the tip and within
  // uAntRadius -- see core/antState.js for the contract
  vec2 toBlade = pos.xz - uAntPos.xz;
  float bladeDist = length(toBlade);
  float influence = clamp(1.0 - bladeDist / max(uAntRadius, 0.001), 0.0, 1.0);
  influence = influence * influence * gT;
  vec2 pushDir = bladeDist > 0.0001 ? toBlade / bladeDist : vec2(1.0, 0.0);
  pos.xz += pushDir * influence * aH * 0.22;
}
`;

/* 1800 since round 11, down from 3400. The player asked for clearly less grass
   while the game itself is built, and they are right for a reason beyond frame
   time: every proximity query in player/** is a linear scan over this array
   (see design/etat-des-lieux.md §2b), so the blade count is a CPU tax on
   walking, not only a GPU one. Halving it halves that tax today; the spatial
   index is what removes it. Turn it back up once that lands — quality.js
   already thins it live, and the field is seeded identically either way. */
export function createGrassField({ count = 1800, seed = 7 } = {}) {
  const R = rng(seed);
  const geometry = buildBladeGeometry();

  const aBase = new Float32Array(count * 3);
  const aH = new Float32Array(count);
  const aAng = new Float32Array(count);
  const aPhase = new Float32Array(count);
  const aTip = new Float32Array(count * 3);
  const aWidth = new Float32Array(count);
  const aTwist = new Float32Array(count);
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

    /* Two populations rather than one uniform range (§3): 22% climbable
       stems well clear of CLIMB_MIN_H, 78% short grass that never reaches it.
       The old single range straddled the threshold, so roughly half the field
       was borderline-climbable at a height that read as neither. */
    const patch = 0.72 + 0.28 * vnoise(bx * 0.01, bz * 0.01);
    const h = R() < 0.22 ? 48 + R() * 60 * patch : (14 + R() * 26) * patch;
    const ang = R() * Math.PI * 2;
    const baseY = groundY(bx, bz);
    const tip = new THREE.Color(C_MOSS_B).lerp(C_MOSS_TIP, R());

    aBase[i * 3] = bx; aBase[i * 3 + 1] = baseY; aBase[i * 3 + 2] = bz;
    aH[i] = h;
    aAng[i] = ang;
    aPhase[i] = R() * Math.PI * 2;
    aTip[i * 3] = tip.r; aTip[i * 3 + 1] = tip.g; aTip[i * 3 + 2] = tip.b;
    aWidth[i] = bladeWidthFor(h);
    aTwist[i] = (R() * 2 - 1) * 0.85;

    // footprints[].w stays the HALF width, as it always was — climb.js and
    // decorCollision.js read it. Their radii therefore shrink with the blade,
    // which is correct for a stem half as thick and is a change of feel at
    // contact: to be judged on a capture, not compensated for blind.
    /* `i` is the blade's own index in this array, carried on the record so a
       query that hands back the footprint can say WHICH blade it is without
       the caller searching for it (player/climb.js's ant.climb.i is an index
       into this array). Every consumer builds the field from the same seed
       and count, so the index means the same thing in all of them. */
    footprints.push({ i, x: bx, z: bz, h, baseY, w: bladeBaseWidth(h), ang });
    i++;
  }
  const actualCount = i;

  geometry.setAttribute('aBase', new THREE.InstancedBufferAttribute(aBase.subarray(0, actualCount * 3), 3));
  geometry.setAttribute('aH', new THREE.InstancedBufferAttribute(aH.subarray(0, actualCount), 1));
  geometry.setAttribute('aAng', new THREE.InstancedBufferAttribute(aAng.subarray(0, actualCount), 1));
  geometry.setAttribute('aPhase', new THREE.InstancedBufferAttribute(aPhase.subarray(0, actualCount), 1));
  geometry.setAttribute('aTip', new THREE.InstancedBufferAttribute(aTip.subarray(0, actualCount * 3), 3));
  geometry.setAttribute('aWidth', new THREE.InstancedBufferAttribute(aWidth.subarray(0, actualCount), 1));
  geometry.setAttribute('aTwist', new THREE.InstancedBufferAttribute(aTwist.subarray(0, actualCount), 1));

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

    /* SHADOW CASTING RANGE — the single biggest frame cost in the game, and
       the reason this pair of uniforms exists.

       Measured on the target machine (Intel Iris Xe, ANGLE/D3D11, 1280x720,
       scripts/verify-round10.mjs, GPU timer queries rather than wall clock):
       an 8.0 ms frame, of which 5.35 ms was the shadow map. Splitting that
       bill by freezing the depth pass while still sampling the map gave
       4.0 ms depth pass / 1.3 ms lookup — and turning grass casting off
       alone took the depth pass from 4.0 ms to 0.66 ms. So 3.4 ms of an
       8 ms frame, 42% of everything, was 3400 grass blades rasterising into
       a 2048^2 depth target. The lookup filter was not the problem (PCF hard
       measured the same as PCFSoft), and the map resolution was only a lever
       because it scales that same grass fill.

       The fix has to keep the round-7 win (grass that shades itself and the
       ground) while paying less for it. Shrinking the shadow BOX would not
       have worked: fewer blades fall inside it, but each one then covers
       proportionally more texels, and the total fill is unchanged. What
       actually reduces fill is drawing fewer blades into the map — so the
       depth pass keeps only the blades near where the shadow is looked at,
       and clips the rest out at the vertex stage, before rasterisation.

       Two centres, not one: the ant (that is where the player is looking at
       the ground, and where a blade's shadow is read at its real size) and
       the camera (which can be a long way from her on a 58-unit boom, and
       which is also the only centre a free-flown verification view has).
       A blade inside either disc casts. */
    uCastA: { value: new THREE.Vector3(0, 0, 0) },
    uCastB: { value: new THREE.Vector3(0, 0, 0) },
    uCastRadius: { value: 46 },
  };

  const material = new THREE.MeshStandardMaterial({ roughness: 0.85, metalness: 0, side: THREE.DoubleSide });
  material.extensions = { derivatives: true };
  material.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms);

    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', GRASS_SHAPE + `
        varying vec3 vGrassColor;
        varying float vGrassDist;
        varying vec3 vGrassRay; // x: distance along the camera->ant ray, y: perpendicular distance from it, z: camera->ant distance
        #include <common>
      `)
      .replace('#include <beginnormal_vertex>', `
        vec3 gPos, gNrm;
        grassShape(gPos, gNrm);
        vec3 objectNormal = gNrm;
      `)
      .replace('#include <begin_vertex>', `
        vec3 transformed = gPos;

        vGrassColor = mix(uBaseColor, aTip, aT) * (0.52 + 0.48 * aT);
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

  /* The shadow pass draws the same bent blade, by calling the same function.
     Until now grass had castShadow = false, and a lawn whose blades shade
     neither each other nor the ground stays a decal however good its profile
     is. The cost of getting it wrong is worse than none at all: Three would
     otherwise rasterise the *undisplaced* placeholder ribbon (a flat 1x1 card
     at the origin, see buildBladeGeometry), so every blade would cast the
     shadow of something that is not on screen. Hence GRASS_SHAPE. */
  const depthMaterial = new THREE.MeshDepthMaterial({
    depthPacking: THREE.RGBADepthPacking,
    side: THREE.DoubleSide,
  });
  depthMaterial.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', GRASS_SHAPE + `
        uniform vec3 uCastA;
        uniform vec3 uCastB;
        uniform float uCastRadius;
        #include <common>
      `)
      .replace('#include <begin_vertex>', `
        vec3 gPos, gNrm;
        grassShape(gPos, gNrm);
        vec3 transformed = gPos;
      `)
      /* Out-of-range blades are killed AFTER projection, by pushing the
         vertex outside the clip volume on every axis, rather than by
         collapsing it to a point. A degenerate triangle still enters
         rasterisation; a fully clipped one does not, and clipping is where
         the fragments this whole change is about get saved. Tested against
         aBase (the blade's root, one value per instance) so all 14 vertices
         of a blade always agree — a per-vertex test would tear blades in
         half at the boundary. See the uCast* uniforms for the measurement. */
      .replace('#include <project_vertex>', `
        #include <project_vertex>
        {
          float dA = distance(aBase.xz, uCastA.xz);
          float dB = distance(aBase.xz, uCastB.xz);
          if (min(dA, dB) > uCastRadius) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
        }
      `);
  };
  depthMaterial.customProgramCacheKey = () => 'grass-depth';

  const mesh = new THREE.InstancedMesh(geometry, material, actualCount);
  mesh.name = 'grass';
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.customDepthMaterial = depthMaterial;
  const identity = new THREE.Matrix4();
  for (let k = 0; k < actualCount; k++) mesh.setMatrixAt(k, identity);
  mesh.instanceMatrix.needsUpdate = true;

  function update(dt, elapsed, camera) {
    uniforms.uTime.value = elapsed;
    uniforms.uAntPos.value.copy(antState.position);
    uniforms.uAntRadius.value = antState.radius;
    uniforms.uCastA.value.copy(antState.position);
    if (camera) uniforms.uCastB.value.copy(camera.position);
  }

  /** Shadow-casting range in world units, for core/quality.js. */
  function setCastRadius(r) { uniforms.uCastRadius.value = r; }

  return { mesh, footprints, update, setCastRadius };
}

import * as THREE from 'three';
import { rng } from '../core/noise.js';
import { getFoundedNest, descentPath, dugRooms, LAMP_GLOWS, FUNGUS_GLOWS } from './founding.js';
import { RIG_FOUNDED } from './sun.js';
import { markEmitter } from '../core/bloom.js';

/* ==========================================================================
   Air in the nest (#78, the last two recipes of #28).

   1. LIGHT SHAFTS down the entrance cut. Not raymarched: a handful of
      camera-facing cards stretched along the daylight direction, additive,
      with streaks that crawl slowly down them. Fading along their length
      (strong at the sky, nothing where they meet the floor), across their
      width, and when the camera is close enough to stand in one, which is
      the job a depth-fade would do for the only case that shows here. They
      follow the cold shaft lamp: sealNest() takes both away together.

   2. DUST AND SPORES where light catches them (the cut, round each lamp, a
      spore cloud round each fungus cluster, #80), and a small visible body for each
      of the nest's cold lamps, in ONE Points draw call. Drift is computed in
      the vertex shader from a per-particle seed and the time uniform, so the
      CPU writes nothing per frame. Rebuilt only when a room opens.

   Everything here is additive and depthWrite-off: it can only add light,
   never occlude, so no sorting is needed. The motes are on the bloom layer
   (core/bloom.js): faint dust barely registers there, the lamp bodies and
   one spore in eight are bright enough to halo, which is the sparkle.
   ========================================================================== */

const SHAFT_COUNT = 6;
const SHAFT_COLOUR = new THREE.Color(0.52, 0.66, 1.0);   // COLD_SHAFT_LIGHT, cleaner
const SHAFT_GAIN = 0.1;

const DUST_COOL = new THREE.Color(0.62, 0.58, 1.0);
const DUST_WARM = new THREE.Color(1.0, 0.72, 0.36);

function shaftMaterial() {
  const m = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uGain: { value: 0 },
      uColour: { value: SHAFT_COLOUR.clone() },
    },
    vertexShader: /* glsl */`
      attribute vec3 aTop;
      attribute vec3 aCorner;   // u in -1..1 across, v in 0..1 along, seed
      attribute float aWidth;
      varying vec3 vUV;
      varying float vNear;
      void main() {
        vec3 base = position;
        vec3 axis = aTop - base;
        vec3 p = base + axis * aCorner.y;
        vec3 toCam = cameraPosition - p;
        vec3 side = cross(axis, toCam);
        side /= max(length(side), 1e-4);
        p += side * aCorner.x * aWidth * (0.55 + 0.45 * aCorner.y);
        vUV = aCorner;
        vNear = smoothstep(2.0, 9.0, length(toCam));
        gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
      }
    `,
    fragmentShader: /* glsl */`
      uniform float uTime;
      uniform float uGain;
      uniform vec3 uColour;
      varying vec3 vUV;
      varying float vNear;
      void main() {
        float u = vUV.x, v = vUV.y, s = vUV.z;
        float across = pow(max(1.0 - abs(u), 0.0), 1.6);
        float along = smoothstep(0.02, 0.45, v) * (1.0 - smoothstep(0.88, 1.0, v));
        float streak = 0.55 + 0.45 * sin(u * 7.0 + s * 13.0 + sin(v * 3.0 + uTime * 0.21 + s) * 1.6)
                     * sin(v * 5.0 - uTime * 0.35 + s * 5.0);
        float a = across * along * streak * vNear * uGain;
        gl_FragColor = vec4(uColour * a, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
    fog: false,
  });
  m.userData.shaderTag = 'nest-shafts';
  m.customProgramCacheKey = () => 'nest-shafts';
  return m;
}

function buildShafts(nest, path, seed) {
  const R = rng(seed ^ 0x3a7);
  const dir = new THREE.Vector3(...RIG_FOUNDED.sunDir).normalize();
  // steeper than the sun itself: a shaft that leans too far just lies on the
  // bank and reads as a smear rather than as light falling INTO the cut
  dir.y *= 1.8; dir.normalize();
  const base = [], top = [], corner = [], width = [], index = [];
  const n = path.length;
  for (let i = 0; i < SHAFT_COUNT; i++) {
    const t = 0.2 + 0.75 * (i + R() * 0.8) / SHAFT_COUNT;
    const k = Math.min(n - 2, Math.floor(t * (n - 1)));
    const f = t * (n - 1) - k;
    const a = path[k], b = path[k + 1];
    const px = a.x + (b.x - a.x) * f, py = a.y + (b.y - a.y) * f, pz = a.z + (b.z - a.z) * f;
    // across the cut, not along it
    const tx = b.x - a.x, tz = b.z - a.z, tl = Math.hypot(tx, tz) || 1;
    const off = (R() - 0.5) * nest.mouth.r * 1.1;
    const bx = px + (-tz / tl) * off, bz = pz + (tx / tl) * off;
    const L = (nest.mouth.y + 7 - py) / dir.y;
    const w = 1.6 + R() * 2.2, s = R() * 10;
    const v0 = base.length / 3;
    for (const [u, v] of [[-1, 0], [1, 0], [1, 1], [-1, 1]]) {
      base.push(bx, py - 0.5, bz);
      top.push(bx + dir.x * L, py - 0.5 + dir.y * L, bz + dir.z * L);
      corner.push(u, v, s);
      width.push(w);
    }
    index.push(v0, v0 + 1, v0 + 2, v0, v0 + 2, v0 + 3);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(base, 3));
  g.setAttribute('aTop', new THREE.Float32BufferAttribute(top, 3));
  g.setAttribute('aCorner', new THREE.Float32BufferAttribute(corner, 3));
  g.setAttribute('aWidth', new THREE.Float32BufferAttribute(width, 1));
  g.setIndex(index);
  const mesh = new THREE.Mesh(g, shaftMaterial());
  mesh.name = 'nest-light-shafts';
  mesh.frustumCulled = false;   // the cards are placed in the vertex shader
  mesh.renderOrder = 2;
  return mesh;
}

function moteMaterial() {
  const m = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uScale: { value: 400 },
    },
    vertexShader: /* glsl */`
      attribute vec4 aSeed;     // xyz phase, w: 0 dust, 1 lamp body
      attribute vec3 aColour;
      attribute float aSize;
      uniform float uTime;
      uniform float uScale;
      varying vec3 vColour;
      varying float vFade;
      void main() {
        vec3 p = position;
        float drift = 1.0 - aSeed.w;
        float t = uTime;
        p.x += drift * (sin(t * 0.11 + aSeed.x * 6.28) * 1.4 + sin(t * 0.37 + aSeed.y * 9.0) * 0.35);
        p.z += drift * (cos(t * 0.09 + aSeed.y * 6.28) * 1.4 + sin(t * 0.29 + aSeed.z * 7.0) * 0.35);
        p.y += drift * (sin(t * 0.07 + aSeed.z * 6.28) * 0.9);
        vec4 mv = viewMatrix * vec4(p, 1.0);
        float d = -mv.z;
        float tw = mix(0.55 + 0.45 * sin(t * (0.8 + aSeed.x) + aSeed.y * 20.0), 1.0, aSeed.w);
        vColour = aColour * tw;
        // a mote brushing the lens must not become a disc across the frame
        vFade = smoothstep(2.0, 7.0, d) * (1.0 - smoothstep(55.0, 80.0, d));
        gl_PointSize = clamp(aSize * uScale / max(d, 0.1), 1.0, mix(14.0, 40.0, aSeed.w));
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: /* glsl */`
      varying vec3 vColour;
      varying float vFade;
      void main() {
        vec2 c = gl_PointCoord * 2.0 - 1.0;
        float r2 = dot(c, c);
        if (r2 > 1.0) discard;
        float a = (1.0 - r2);
        a *= a;
        gl_FragColor = vec4(vColour * a * vFade, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    fog: false,
  });
  m.userData.shaderTag = 'nest-motes';
  m.customProgramCacheKey = () => 'nest-motes';
  return m;
}

/* Two Points objects sharing one material: the faint dust stays off the
   bloom layer (fed to it, hundreds of dim motes add up to a grey veil over the
   whole room), the spores and lamp bodies go on it.

   Dust only where light catches it (round 22, porter: "il y en a trop
   partout"): a column in the daylit cut, and a small cloud round each lamp.
   A dark room with no lamp stays clear, which is what makes the lit spots
   read as places. */
const DUST_IN_CUT = 60;
const DUST_PER_LAMP = 8;
/* #80: a fungus cluster breathes spores rather than gathering dust — fewer
   motes, more of them bright, hugging the caps rather than the lamp height.
   No orb: the caps are the lamp's body. */
const SPORES_PER_FUNGUS = 7;
function pushMote(sets, R, x, y, z, colour, sporeChance) {
  const spore = R() < sporeChance;
  const c = colour.clone().multiplyScalar(spore ? 2.2 : 0.38);
  const S = spore ? sets.bright : sets.dust;
  S.pos.push(x, y, z);
  S.sd.push(R(), R(), R(), 0);
  S.col.push(c.r, c.g, c.b);
  S.size.push(spore ? 0.34 : 0.22 + R() * 0.16);
}
function buildMotes(nest, path, lamps, seed, fungi = []) {
  const R = rng(seed ^ 0x51d);
  const sets = { dust: { pos: [], sd: [], col: [], size: [] }, bright: { pos: [], sd: [], col: [], size: [] } };
  if (path && path.length > 2) {
    const n = path.length;
    for (let i = 0; i < DUST_IN_CUT; i++) {
      const t = 0.05 + 0.6 * R();   // the upper cut, under the sky
      const k = Math.min(n - 2, Math.floor(t * (n - 1))), f = t * (n - 1) - k;
      const a = path[k], b = path[k + 1];
      const tx = b.x - a.x, tz = b.z - a.z, tl = Math.hypot(tx, tz) || 1;
      const off = (R() - 0.5) * nest.mouth.r * 1.2;
      pushMote(sets, R,
        a.x + (b.x - a.x) * f + (-tz / tl) * off,
        a.y + (b.y - a.y) * f + 0.6 + R() * 6,
        a.z + (b.z - a.z) * f + (tx / tl) * off,
        R() < 0.5 ? DUST_WARM : DUST_COOL, 0.03);
    }
  }
  for (const L of lamps) {
    const m = Math.max(L.c[0], L.c[1], L.c[2]) || 1;
    const tint = new THREE.Color(L.c[0] / m, L.c[1] / m, L.c[2] / m).lerp(DUST_COOL, 0.4);
    for (let i = 0; i < DUST_PER_LAMP; i++) {
      const a = R() * Math.PI * 2, rr = 0.6 + Math.sqrt(R()) * 2.6;
      pushMote(sets, R, L.p[0] + Math.cos(a) * rr, L.p[1] - 1.5 + R() * 3.5, L.p[2] + Math.sin(a) * rr, tint, 0.1);
    }
  }
  for (const L of fungi) {
    const m = Math.max(L.c[0], L.c[1], L.c[2]) || 1;
    const tint = new THREE.Color(L.c[0] / m, L.c[1] / m, L.c[2] / m);
    for (let i = 0; i < SPORES_PER_FUNGUS; i++) {
      const a = R() * Math.PI * 2, rr = 0.8 + Math.sqrt(R()) * 3.4;
      pushMote(sets, R, L.p[0] + Math.cos(a) * rr, L.p[1] - 2.2 + R() * 4.5, L.p[2] + Math.sin(a) * rr, tint, 0.3);
    }
  }
  for (const L of lamps) {
    const m = Math.max(L.c[0], L.c[1], L.c[2]) || 1;
    // a small bright core: the bloom does the glow, not the sprite
    const S = sets.bright;
    S.pos.push(L.p[0], L.p[1], L.p[2]);
    S.sd.push(0, 0, 0, 1);
    S.col.push((L.c[0] / m) * 2.6, (L.c[1] / m) * 2.6, (L.c[2] / m) * 2.6);
    S.size.push(0.8);
  }
  const material = moteMaterial();
  const group = new THREE.Group();
  group.name = 'nest-motes';
  const buf = new THREE.Vector2();
  for (const [name, S] of Object.entries(sets)) {
    if (!S.pos.length) continue;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(S.pos, 3));
    g.setAttribute('aSeed', new THREE.Float32BufferAttribute(S.sd, 4));
    g.setAttribute('aColour', new THREE.Float32BufferAttribute(S.col, 3));
    g.setAttribute('aSize', new THREE.Float32BufferAttribute(S.size, 1));
    const pts = new THREE.Points(g, material);
    pts.name = 'nest-motes-' + name;
    if (name === 'bright') markEmitter(pts);
    pts.frustumCulled = false;
    pts.renderOrder = 2;
    pts.onBeforeRender = (renderer, _scene, camera) => {
      renderer.getDrawingBufferSize(buf);
      material.uniforms.uScale.value = buf.y / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov || 50) / 2));
    };
    group.add(pts);
  }
  group.userData.material = material;
  return group;
}

export function createAtmosphere() {
  const group = new THREE.Group();
  group.name = 'nest-atmosphere';
  let forNest = null, shafts = null, motes = null, builtRooms = -1, builtLamps = -1, builtFungi = -1;

  function dispose(o) {
    if (!o) return;
    group.remove(o);
    o.traverse((c) => { if (c.geometry) c.geometry.dispose(); if (c.material) c.material.dispose(); });
  }

  function update(elapsed) {
    const nest = getFoundedNest();
    if (nest !== forNest) {
      dispose(shafts); dispose(motes);
      shafts = motes = null; builtRooms = builtLamps = builtFungi = -1;
      forNest = nest;
      if (nest) {
        const path = descentPath();
        if (path && path.length > 2) { shafts = buildShafts(nest, path, Math.round(nest.x * 7 + nest.z * 13)); group.add(shafts); }
      }
    }
    if (!nest) return;
    const rooms = dugRooms();
    if (rooms.length !== builtRooms || LAMP_GLOWS.length !== builtLamps || FUNGUS_GLOWS.length !== builtFungi) {
      dispose(motes);
      motes = buildMotes(nest, descentPath(), LAMP_GLOWS, Math.round(nest.x * 3 + nest.z * 5), FUNGUS_GLOWS);
      group.add(motes);
      builtRooms = rooms.length; builtLamps = LAMP_GLOWS.length; builtFungi = FUNGUS_GLOWS.length;
    }
    if (shafts) {
      shafts.material.uniforms.uTime.value = elapsed;
      shafts.material.uniforms.uGain.value = SHAFT_GAIN * (nest._coldFade ?? 1);
    }
    motes.userData.material.uniforms.uTime.value = elapsed;
  }

  return { group, update };
}

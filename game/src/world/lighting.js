import * as THREE from 'three';
import { TUNNEL_BACK, TUNNEL_MOUTH } from './underground.js';

/* ==========================================================================
   Nest shading: the two things that made the old prototype's underground
   read as a place rather than a brown wash, ported from
   design/prototypes/sortie-fourmiliere.html.

   1. daylight(): how much *exterior* light reaches a point. Underground it
      falls off from the mouth to the back of the queen's chamber (0.12 at
      the back, 1.0 at the mouth); outdoors it's a broad, shallow dapple.
      The old file baked it per vertex and multiplied ambient+sun by it. Here
      it is evaluated per fragment from world position instead — same curve,
      but it then applies to *every* material we patch (walls, props, queen,
      the ant itself) without needing a matching vertex attribute on each,
      which is what makes it usable as a scene-wide rig from main.js.

      This is also the fix for the sun leaking through solid rock: rather
      than trying to shadow-map a nest the sun can't see into, the exterior
      light is attenuated where the exterior can't reach — exactly what the
      old prototype did (it commuted exposure/fog between gallery and
      surface rather than shadowing the nest).

   2. ALL_LIGHTS: many small local lights, of which only the nearest
      LIGHT_SLOTS reach the shader each frame. This is why a mushroom garden,
      a glow-bead or a brood pile can each carry its own lamp without the
      shading cost growing with the number of lamps — a THREE.PointLight per
      prop would recompile/relight everything against N lights instead.
      Local lights are deliberately NOT multiplied by daylight(): they are
      the light *in* the dark, not a fraction of the light from outside.
   ========================================================================== */

/* #78: 8 -> 12. A founded nest with five clutches, the bead, the two
   entrance lamps and a hall's four cold lamps is twelve lit lamps within one
   view; at 8 the selection kept dropping either the hall's lamps (corridor a
   black slot) or two of the clutches (their warm pools gone), whichever was
   further from the camera. Measured: no visible change in frame time at the
   harness resolution (scripts/verify-mood-78.mjs). */
export const LIGHT_SLOTS = 12;

/* How much of the hemisphere fill survives at the deepest point of the nest
   (see the injection below).
   #71: was 0.55 — high enough that a founded chamber's own pit darkening
   (nestPitDark below settles near 0.09 at the chamber's centre) got clamped
   straight back up to a flat 55%, which is exactly why a populated brood
   chamber rendered as one evenly-lit brown room instead of a warm pool per
   clutch against near-black (before-03-brood.png). Local lamps are additive
   on top of this floor, not clamped by it, so lowering the floor only
   deepens the black BETWEEN lamps — it does not dim the lamps themselves. */
/* #90: 0.30 -> 0.60 (with HEMI_IN at 3.4, main.js): the gaps between lamps
   are now separated by saturation and value, no longer by black
   (design/ambiance-prologue.md §10b.2, amending §9d). */
const AMBIENT_FLOOR = 0.60;

const ALL_LIGHTS = [];

/** p: [x,y,z] world position. c: [r,g,b] radiance (may exceed 1).
 *  Returns the entry, so a caller can keep it and change its radiance later
 *  — a lamp that is not lit yet is a lamp with c = 0, because this pool is a
 *  flat array with no removal (world/founding.js relies on both). */
export function addLocalLight(p, c) {
  const L = { p: [p[0], p[1], p[2]], c: [c[0], c[1], c[2]], _d: 0 };
  ALL_LIGHTS.push(L);
  return L;
}

export function getLocalLights() { return ALL_LIGHTS; }

const lightPos = new Float32Array(LIGHT_SLOTS * 3);
const lightCol = new Float32Array(LIGHT_SLOTS * 3);

/* One uniform object per name, shared by every patched material: assigning
   these same {value} objects into each compiled shader's uniform map means
   writing the arrays in place below updates all of them at once. */
/* The run-time-dug nest (world/founding.js). It sits at z > 0, which the
   daylight falloff below calls "outdoors" — without a term for it, a chamber
   twenty units under the meadow is lit as if it were standing in the meadow.
   Packed as two vec4 rather than five scalars so the whole thing is two
   uniform writes and no extra program permutation:
     uPitA = (x, rim y, z, radius)   uPitB = (on, depth, x2, z2)

   The cavity is a CAPSULE from (x, z) to (x2, z2), not a disc. It was a disc
   round the chamber, and the first room dug past it was lit as the open
   meadow it sits under: sunlight and grass shadows striping the walls of a
   hall thirteen units underground. Two slots of uPitB were already free, so
   the nest growing costs no new uniform and no new program permutation — and
   with x2, z2 equal to x, z it is the old disc exactly. */
const pitA = new THREE.Vector4(0, 0, 0, 1);
const pitB = new THREE.Vector4(0, 1, 0, 0);
/* #78: the mouth of the cut, (x, z, half-width, on). The pit capsule above
   only covers the ROOFED end, on purpose (the open ramp must keep the sun).
   But the change of world has to happen on the ramp, as she walks down it,
   so the "how far inside are we" factor below also reads depth under the rim
   anywhere along mouth -> chamber. */
const mouthV = new THREE.Vector4(0, 0, 1, 0);

const sharedUniforms = {
  uLightPos: { value: lightPos },
  uLightCol: { value: lightCol },
  uPitA: { value: pitA },
  uPitB: { value: pitB },
  uNestMouth: { value: mouthV },
};

/* #78, the palette of the nest. Dug earth inside the nest is pulled toward a
   cold indigo-grey by how far inside the fragment is (nestInside below), so
   the warm lamps (brood, dig face, glow bead) are the only warm things left
   down there — the chaud/froid contrast the whole look rests on. Applied to
   the earth only (opt-in, see applyNestShading's `cool`), never to eggs, the
   queen or the bead: those are what must stay warm against it.
   COOL_TINT multiplies the albedo's luminance; COOL_MIX is how much of the
   original colour is replaced at full depth. */
/* #90: 0.78 -> 0.45 and a warmer tint. At 78 % the earth was an indigo grey
   with no hue left for the lamps to sing on; now it stays brown-pink at 55 %
   and turns violet at 45 % (§10b.3). */
const COOL_TINT = [0.95, 0.72, 1.10];
const COOL_MIX = 0.45;

/** Declare (or, with r = 0, clear) the run-time nest cavity: a capsule from
 *  (x, z) to (x2, z2), defaulting to a disc round (x, z). */
export function setNestPit(x, topY, z, r, depth, x2 = x, z2 = z) {
  pitA.set(x, topY, z, Math.max(r, 0.001));
  pitB.set(r > 0 ? 1 : 0, Math.max(depth, 0.001), x2, z2);
}

/** #78: where the cut opens onto the meadow, so the ramp itself can turn
 *  cold as it goes down. `hw` is the cut's half-width; hw = 0 clears it. */
export function setNestMouth(x, z, hw) {
  mouthV.set(x, z, Math.max(hw, 0.001), hw > 0 ? 1 : 0);
}

/** Horizontal distance from (x, z) to the cavity's spine. */
function pitSpineDistance(x, z) {
  const abx = pitB.z - pitA.x, abz = pitB.w - pitA.z;
  const ll = abx * abx + abz * abz;
  const t = ll > 1e-6 ? Math.min(1, Math.max(0, ((x - pitA.x) * abx + (z - pitA.z) * abz) / ll)) : 0;
  return Math.hypot(x - (pitA.x + abx * t), z - (pitA.z + abz * t));
}

/** CPU twin of pitDark() below — main.js commutes its fog with it. */
export function pitFactorAt(x, y, z) {
  if (pitB.x < 0.5) return 0;
  const ss = (t) => { const c = Math.min(1, Math.max(0, t)); return c * c * (3 - 2 * c); };
  const hd = pitSpineDistance(x, z);
  const inside = 1 - ss((hd - pitA.w * 0.9) / (pitA.w * 0.8));
  const depth = Math.min(1, Math.max(0, (pitA.y - y) / pitB.y));
  return inside * ss((depth - 0.04) / 0.46);
}

/** 0 on the meadow, 1 deep in the nest: the pit factor, or depth under the
 *  rim along the cut. CPU twin of nestInside() in the GLSL — main.js commutes
 *  fog, sky and hemisphere with it, so the air changes where the walls do. */
export function nestInsideAt(x, y, z) {
  if (pitB.x < 0.5) return 0;
  const ss = (a, b, t) => { const c = Math.min(1, Math.max(0, (t - a) / (b - a))); return c * c * (3 - 2 * c); };
  let cut = 0;
  if (mouthV.w > 0.5) {
    const ax = mouthV.x, az = mouthV.y, bx = pitA.x - ax, bz = pitA.z - az;
    const ll = bx * bx + bz * bz;
    const t = ll > 1e-6 ? Math.min(1, Math.max(0, ((x - ax) * bx + (z - az) * bz) / ll)) : 0;
    const hd = Math.hypot(x - (ax + bx * t), z - (az + bz * t));
    cut = (1 - ss(mouthV.z * 1.3, mouthV.z * 2.2, hd)) * ss(CUT_DEPTH0, CUT_DEPTH1, pitA.y - y);
  }
  return Math.max(pitFactorAt(x, y, z), cut);
}
/* Depth under the rim over which the cut turns from meadow to nest. Starts a
   little under the rim so a sloping site does not tint the lip of the bank. */
const CUT_DEPTH0 = 2.5, CUT_DEPTH1 = 11.0;

/** Selects the LIGHT_SLOTS lights nearest to `p` (usually the camera). */
export function updateLocalLights(p) {
  const cx = p.x, cy = p.y, cz = p.z;
  for (let i = 0; i < ALL_LIGHTS.length; i++) {
    const L = ALL_LIGHTS[i];
    const dx = L.p[0] - cx, dy = L.p[1] - cy, dz = L.p[2] - cz;
    /* #78: a lamp with no radiance (an unlaid clutch, a sealed shaft) must
       not take a slot from one that is lit — with five clutches, the bead and
       the two entrance lamps all near the chamber, the hall's own lamps were
       being pushed out and the corridor rendered as a black slot. */
    L._d = (L.c[0] + L.c[1] + L.c[2]) > 0 ? dx * dx + dy * dy + dz * dz : 1e30;
  }
  const near = ALL_LIGHTS.slice().sort((a, b) => a._d - b._d);
  for (let k = 0; k < LIGHT_SLOTS; k++) {
    const L = near[k];
    if (L) {
      lightPos[k * 3] = L.p[0]; lightPos[k * 3 + 1] = L.p[1]; lightPos[k * 3 + 2] = L.p[2];
      lightCol[k * 3] = L.c[0]; lightCol[k * 3 + 1] = L.c[1]; lightCol[k * 3 + 2] = L.c[2];
    } else {
      lightPos[k * 3] = lightPos[k * 3 + 1] = lightPos[k * 3 + 2] = 0;
      lightCol[k * 3] = lightCol[k * 3 + 1] = lightCol[k * 3 + 2] = 0;
    }
  }
}

/** The CPU-side twin of the GLSL below, for anything that needs the same
    falloff outside a shader (fog/exposure commutation in main.js). */
export function daylightAt(x, y, z) {
  if (z >= TUNNEL_MOUTH) return 0.9;
  const t = Math.max(0, Math.min(1, (z - TUNNEL_BACK) / (TUNNEL_MOUTH - TUNNEL_BACK)));
  return 0.12 + 0.88 * Math.pow(t, 1.6);
}

const GLSL_COMMON = /* glsl */`
uniform vec3 uLightPos[${LIGHT_SLOTS}];
uniform vec3 uLightCol[${LIGHT_SLOTS}];
varying vec3 vNestWorld;
float nestHash2(vec2 p) { return fract(sin(p.x * 127.1 + p.y * 311.7) * 43758.5453); }
float nestNoise(vec2 p) {
  vec2 i = floor(p), f = p - i;
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = nestHash2(i), b = nestHash2(i + vec2(1.0, 0.0));
  float c = nestHash2(i + vec2(0.0, 1.0)), d = nestHash2(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
uniform vec4 uPitA;   // (x, rim y, z, radius) of the run-time-dug nest
uniform vec4 uPitB;   // (on, depth, x2, z2): the capsule's far end
float nestPitDark(vec3 w) {
  if (uPitB.x < 0.5) return 1.0;
  vec2 pa = uPitA.xz, ab = uPitB.zw - uPitA.xz;
  float st = clamp(dot(w.xz - pa, ab) / max(dot(ab, ab), 1e-6), 0.0, 1.0);
  float hd = length(w.xz - (pa + ab * st));
  float inside = 1.0 - smoothstep(uPitA.w * 0.9, uPitA.w * 1.7, hd);
  float dep = clamp((uPitA.y - w.y) / uPitB.y, 0.0, 1.0);
  return mix(1.0, 0.10, inside * smoothstep(0.04, 0.50, dep));
}
uniform vec4 uNestMouth;   // (x, z, half-width, on)
float nestInside(vec3 w) {
  if (uPitB.x < 0.5) return 0.0;
  float pit = (1.0 - nestPitDark(w)) / 0.9;
  float cut = 0.0;
  if (uNestMouth.w > 0.5) {
    vec2 a = uNestMouth.xy, ab = uPitA.xz - a;
    float st = clamp(dot(w.xz - a, ab) / max(dot(ab, ab), 1e-6), 0.0, 1.0);
    float hd = length(w.xz - (a + ab * st));
    cut = (1.0 - smoothstep(uNestMouth.z * 1.3, uNestMouth.z * 2.2, hd))
        * smoothstep(${CUT_DEPTH0.toFixed(2)}, ${CUT_DEPTH1.toFixed(2)}, uPitA.y - w.y);
  }
  return clamp(max(pit, cut), 0.0, 1.0);
}
float nestDaylight(vec3 w) {
  float pit = nestPitDark(w);
  if (w.z >= ${TUNNEL_MOUTH.toFixed(1)}) return (0.82 + 0.18 * nestNoise(w.xz * 0.015)) * pit;
  float t = clamp((w.z - (${TUNNEL_BACK.toFixed(1)})) / (${(TUNNEL_MOUTH - TUNNEL_BACK).toFixed(1)}), 0.0, 1.0);
  return (0.12 + 0.88 * pow(t, 1.6)) * pit;
}
`;

/**
 * Patches a MeshStandardMaterial (or any material built on the standard
 * lighting chunks) with the daylight falloff + local light loop. Composes
 * with an existing onBeforeCompile rather than replacing it, so materials
 * that already inject their own code (grass wind/contact bend) keep it.
 * Idempotent — safe to call again on an already-patched material.
 */
export function applyNestShading(material, { cool = false } = {}) {
  if (!material || material.userData.nestShaded) return material;
  material.userData.nestShaded = true;
  const prev = material.onBeforeCompile;

  material.onBeforeCompile = function (shader, renderer) {
    if (prev) prev.call(this, shader, renderer);
    Object.assign(shader.uniforms, sharedUniforms);

    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', 'varying vec3 vNestWorld;\n#include <common>')
      /* instanceMatrix by hand: Three's <project_vertex> applies it to its
         own mvPosition and leaves `transformed` in the instance's local
         space, so modelMatrix alone puts every instance of an InstancedMesh
         at the same world position — which would light a hundred resource
         nodes as if they were all piled on the world origin. */
      .replace('#include <project_vertex>', `#include <project_vertex>
  vec4 nestLocal = vec4(transformed, 1.0);
  #ifdef USE_INSTANCING
    nestLocal = instanceMatrix * nestLocal;
  #endif
  vNestWorld = (modelMatrix * nestLocal).xyz;`);

    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', GLSL_COMMON + '\n#include <common>')
      /* after the vertex colour and the triplanar map have both landed in
         diffuseColor, before any lighting reads it */
      .replace('#include <roughnessmap_fragment>', cool ? /* glsl */`
        {
          float nestIn = nestInside(vNestWorld);
          float nestLum = dot(diffuseColor.rgb, vec3(0.30, 0.59, 0.11));
          vec3 nestCool = nestLum * vec3(${COOL_TINT.map((v) => v.toFixed(3)).join(', ')});
          diffuseColor.rgb = mix(diffuseColor.rgb, nestCool, ${COOL_MIX.toFixed(3)} * nestIn);
        }
        #include <roughnessmap_fragment>` : '#include <roughnessmap_fragment>')
      .replace('#include <lights_fragment_end>', /* glsl */`
        #include <lights_fragment_end>
        {
          float nestDay = nestDaylight(vNestWorld);
          reflectedLight.directDiffuse *= nestDay;
          reflectedLight.directSpecular *= nestDay;
          reflectedLight.indirectSpecular *= nestDay;
          // The ambient/hemisphere term keeps a floor underground instead of
          // being attenuated to nothing with the sun. Without it the nest is
          // lit by warm point lamps alone and every surface out of their reach
          // falls to black — the single most expensive defect for a stylised
          // look (design/charte-stylisation.md §1c: a shadow is a colour, not
          // an absence). The floor is what makes the hemisphere's cavern
          // blue-violet actually reach the walls. Outdoors nestDay is already
          // 0.82-1.0, so max() leaves the lawn untouched.
          reflectedLight.indirectDiffuse *= max(nestDay, ${AMBIENT_FLOOR.toFixed(2)});
          vec3 nestSum = vec3(0.0);
          for (int i = 0; i < ${LIGHT_SLOTS}; i++) {
            vec3 Ld = uLightPos[i] - vNestWorld;
            float d = length(Ld);
            // #71: 0.017 -> 0.024. With AMBIENT_FLOOR lowered, a slower
            // falloff was smearing every lamp's pool into its neighbour's —
            // a brood chamber with four clutches lit as one wash of amber
            // rather than four separate pools of light in the dark. Tighter
            // falloff keeps each lamp a pool with black between them, which
            // is the whole ask (one warm pool per clutch, not a lit room).
            float att = 1.0 / (1.0 + d * d * 0.024);
            nestSum += uLightCol[i] * max(dot(normal, Ld / max(d, 0.001)), 0.0) * att;
          }
          reflectedLight.directDiffuse += diffuseColor.rgb * nestSum;
        }
      `);
  };
  // Without this, two materials with identical *parameters* share one
  // compiled program even though their injected source differs — Three keys
  // the cache on the parameter hash, not on the text onBeforeCompile
  // produced. The tag carries whatever other injection the material already
  // had (userData.shaderTag, set by world/texturing.js and by the glow
  // material in nestDecor.js); dropping it is how the glow material's
  // emissive line could end up compiled into — or out of — the wrong program.
  const tag = (material.userData.shaderTag || '') + (cool ? '|cool' : '');
  material.userData.shaderTag = 'nest-shading|' + tag;
  material.customProgramCacheKey = () => 'nest-shading|' + tag;
  material.needsUpdate = true;
  return material;
}

/** Convenience: a matte, vertex-coloured, nest-shaded surface material. */
export function nestSurfaceMaterial(opts = {}) {
  return applyNestShading(new THREE.MeshStandardMaterial({
    vertexColors: true, roughness: 0.95, metalness: 0, side: THREE.DoubleSide, ...opts,
  }));
}

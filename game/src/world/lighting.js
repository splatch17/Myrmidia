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

export const LIGHT_SLOTS = 8;

/* How much of the hemisphere fill survives at the deepest point of the nest
   (see the injection below). */
const AMBIENT_FLOOR = 0.30;

const ALL_LIGHTS = [];

/** p: [x,y,z] world position. c: [r,g,b] radiance (may exceed 1). */
export function addLocalLight(p, c) {
  ALL_LIGHTS.push({ p: [p[0], p[1], p[2]], c: [c[0], c[1], c[2]], _d: 0 });
}

export function getLocalLights() { return ALL_LIGHTS; }

const lightPos = new Float32Array(LIGHT_SLOTS * 3);
const lightCol = new Float32Array(LIGHT_SLOTS * 3);

/* One uniform object per name, shared by every patched material: assigning
   these same {value} objects into each compiled shader's uniform map means
   writing the arrays in place below updates all of them at once. */
const sharedUniforms = {
  uLightPos: { value: lightPos },
  uLightCol: { value: lightCol },
};

/** Selects the LIGHT_SLOTS lights nearest to `p` (usually the camera). */
export function updateLocalLights(p) {
  const cx = p.x, cy = p.y, cz = p.z;
  for (let i = 0; i < ALL_LIGHTS.length; i++) {
    const L = ALL_LIGHTS[i];
    const dx = L.p[0] - cx, dy = L.p[1] - cy, dz = L.p[2] - cz;
    L._d = dx * dx + dy * dy + dz * dz;
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
float nestDaylight(vec3 w) {
  if (w.z >= ${TUNNEL_MOUTH.toFixed(1)}) return 0.82 + 0.18 * nestNoise(w.xz * 0.015);
  float t = clamp((w.z - (${TUNNEL_BACK.toFixed(1)})) / (${(TUNNEL_MOUTH - TUNNEL_BACK).toFixed(1)}), 0.0, 1.0);
  return 0.12 + 0.88 * pow(t, 1.6);
}
`;

/**
 * Patches a MeshStandardMaterial (or any material built on the standard
 * lighting chunks) with the daylight falloff + local light loop. Composes
 * with an existing onBeforeCompile rather than replacing it, so materials
 * that already inject their own code (grass wind/contact bend) keep it.
 * Idempotent — safe to call again on an already-patched material.
 */
export function applyNestShading(material) {
  if (!material || material.userData.nestShaded) return material;
  material.userData.nestShaded = true;
  const prev = material.onBeforeCompile;

  material.onBeforeCompile = function (shader, renderer) {
    if (prev) prev.call(this, shader, renderer);
    Object.assign(shader.uniforms, sharedUniforms);

    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', 'varying vec3 vNestWorld;\n#include <common>')
      .replace('#include <project_vertex>',
        '#include <project_vertex>\n  vNestWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;');

    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', GLSL_COMMON + '\n#include <common>')
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
            float att = 1.0 / (1.0 + d * d * 0.017);
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
  const tag = material.userData.shaderTag || '';
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

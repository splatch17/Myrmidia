import * as THREE from 'three';
import barkUrl from '../assets/textures/bark/bark_albedo.png';
import dirtUrl from '../assets/textures/tunnel-dirt/tunnel-dirt_albedo.png';
import lawnUrl from '../assets/textures/lawn-soil/lawn-soil_albedo.png';
import stoneUrl from '../assets/textures/stone/stone_albedo.png';
import capUrl from '../assets/textures/mushroom-cap/mushroom-cap_albedo.png';

/* ==========================================================================
   Hand-painted albedo on the world's procedural surfaces (#26).

   Convention, budget and the sRGB gotcha are all in design/pipeline-textures.md
   — the two things that file asks of this side are honoured below:
     - every albedo gets colorSpace = SRGBColorSpace (without it the render
       comes out washed out, silently);
     - wrapS/wrapT = RepeatWrapping, and `repeat` is the one tiling knob
       (world units per tile, see loadAlbedo).

   WHY TRIPLANAR RATHER THAN THE UV ATTRIBUTE
   The geometry here is procedural, world-space baked and regenerated on
   every parameter change (see world/underground.js, world/tree.js), so a
   per-face unwrap is out. The generic fallback — a single dominant-axis
   world projection per vertex, which MeshBuilder now bakes into `uv` — is
   fine on a heightfield but not on a tube: the dominant axis flips somewhere
   inside the quads that straddle 45 degrees, and on the gallery that draws
   four smeared stripes running the whole length of the tunnel. Blending the
   three projections by |normal| in the fragment shader removes the flip
   entirely, costs two extra samples out of a 128x128 texture (fully cached
   at this size), and needs no attribute at all: the world position is
   already there in the vertex shader.

   WHY THE TEXTURE IS MEAN-NORMALISED
   All of the underground's readability lives in the vertex colours — baked
   crevice shading, per-room palette, the midden's cavityMul dimming. A raw
   multiply by a mid-brown albedo would halve every one of those and turn the
   nest into mud. Dividing the sample by the texture's own mean (measured
   from the decoded image, so it tracks whatever Cephalotes regenerates)
   leaves the average albedo exactly equal to the vertex colour and lets the
   texture contribute only its variation. That is the "modulates, doesn't
   replace" requirement of #26, made robust to the texture being repainted.
   ========================================================================== */

/* sRGB byte -> linear, so the mean is measured in the same space the shader
   samples in (the texture is uploaded as SRGB8_ALPHA8; the GPU hands back
   linear values). Averaging the raw bytes instead would bias the mean high
   and leave the world slightly too dark. */
const SRGB_TO_LINEAR = new Float32Array(256);
for (let i = 0; i < 256; i++) {
  const c = i / 255;
  SRGB_TO_LINEAR[i] = c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

function measureMeanLinear(image, target) {
  const cv = document.createElement('canvas');
  cv.width = image.width; cv.height = image.height;
  const ctx = cv.getContext('2d', { willReadFrequently: true });
  ctx.drawImage(image, 0, 0);
  const d = ctx.getImageData(0, 0, cv.width, cv.height).data;
  let r = 0, g = 0, b = 0;
  const n = cv.width * cv.height;
  for (let i = 0; i < d.length; i += 4) {
    r += SRGB_TO_LINEAR[d[i]]; g += SRGB_TO_LINEAR[d[i + 1]]; b += SRGB_TO_LINEAR[d[i + 2]];
  }
  target.set(Math.max(r / n, 1e-3), Math.max(g / n, 1e-3), Math.max(b / n, 1e-3));
}

const loader = new THREE.TextureLoader();

/**
 * @param url         PNG url (Vite asset import)
 * @param worldPerTile world units covered by one tile — the density knob.
 *                     Stored as texture.repeat (= tiles per world unit), read
 *                     back by the triplanar sampler, so there is exactly one
 *                     number to tune per material and both sampling paths
 *                     (plain `uv` and triplanar) agree on it.
 */
function loadAlbedo(url, worldPerTile) {
  const mean = new THREE.Vector3(0.5, 0.5, 0.5);
  const tex = loader.load(url, (t) => {
    // measured once, on load: a repainted texture with a different overall
    // brightness must not shift the world's palette (see header)
    try { measureMeanLinear(t.image, mean); } catch (e) { console.warn('albedo mean unavailable', e); }
  });
  tex.colorSpace = THREE.SRGBColorSpace;      // required — see design/pipeline-textures.md
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(1 / worldPerTile, 1 / worldPerTile);
  tex.anisotropy = 4;
  tex.userData.meanLinear = mean;
  return tex;
}

/* Tile sizes in world units. Ant body ~9.6 long, gallery radius 7.2, trunk
   radius 22 (see the scale pass in #19). Swept on screen at 3.5/5/8 (dirt)
   and 9/14/22 (bark) rather than guessed: a dirt tile of 13 spanned most of
   the visible gallery wall and its own large-scale cavity noise read as
   marbling, not grain; bark grooves narrower than ~2 units per ridge stop
   reading as bark from an ant's distance and turn into corduroy. */
/* Densities are the art direction's, derived from how big one *motif* should
   read on screen against the ant's ~6-7 unit body — see the table in
   design/charte-stylisation.md §7.5. tunnel-dirt moved 3.5 -> 5.0 there: at
   3.5 the clods fall under the readable threshold and the wall goes back to
   being noise. */
export const DIRT_TILE = 5.0;
export const BARK_TILE = 16;
export const LAWN_TILE = 45;
export const STONE_TILE = 12;
export const CAP_TILE = 2.5;

let _dirt = null, _bark = null, _lawn = null, _stone = null, _cap = null;
export function dirtAlbedo() { return (_dirt ||= loadAlbedo(dirtUrl, DIRT_TILE)); }
export function barkAlbedo() { return (_bark ||= loadAlbedo(barkUrl, BARK_TILE)); }
export function lawnAlbedo() { return (_lawn ||= loadAlbedo(lawnUrl, LAWN_TILE)); }
export function stoneAlbedo() { return (_stone ||= loadAlbedo(stoneUrl, STONE_TILE)); }
export function capAlbedo() { return (_cap ||= loadAlbedo(capUrl, CAP_TILE)); }

const TRIPLANAR_PARS = /* glsl */`
uniform vec3 uTexMid;
uniform vec2 uTexRepeat;
uniform float uTexStrength;
varying vec3 vTexWorld;
varying vec3 vTexNormal;
vec3 gTriTex = vec3(1.0);   // filled by the <map_fragment> injection below,
                            // reused by the emissive one (which runs later)
`;

/* Sharpness of the projection blend. 4 keeps each plane dominant over most
   of a face and confines the crossfade to the 45-degree band, which is where
   any of the three projections is equally (in)correct anyway. */
const BLEND_POW = 4.0;

const TRIPLANAR_MAP = /* glsl */`
{
  vec3 tn = normalize(vTexNormal);
  vec3 bw = pow(abs(tn), vec3(${BLEND_POW.toFixed(1)}));
  bw /= max(bw.x + bw.y + bw.z, 1e-4);
  vec3 wp = vTexWorld;
  vec3 tex = texture2D(map, wp.zy * uTexRepeat).rgb * bw.x
           + texture2D(map, wp.xz * uTexRepeat).rgb * bw.y
           + texture2D(map, wp.xy * uTexRepeat).rgb * bw.z;
  // pow, not mix(1, ratio): the sample is linear, so a highlight sits 3x
  // above the mean where perceptually it is barely twice as bright, and a
  // linear blend toward white keeps those highlights while flattening the
  // darks. A gamma on the ratio compresses both sides by the same factor and
  // leaves 1.0 (the mean) fixed, so uTexStrength really is "how much grain",
  // with the vertex colour untouched at the average.
  gTriTex = pow(max(tex / uTexMid, vec3(1e-3)), vec3(uTexStrength));
  diffuseColor.rgb *= gTriTex;
}
`;

/* The two injections, applied to any material that carries a `map`. Split out
   so the emissive variant below can reuse exactly the same sampler. */
function injectTriplanar(shader, texUniforms) {
  Object.assign(shader.uniforms, texUniforms);

  shader.vertexShader = shader.vertexShader
    .replace('#include <common>', 'varying vec3 vTexWorld;\nvarying vec3 vTexNormal;\n#include <common>')
    /* instanceMatrix applied by hand — see the same note in
       world/lighting.js: <project_vertex> leaves `transformed` in instance
       space, so without this every instance would sample the texture at the
       same world position. */
    .replace('#include <project_vertex>', `#include <project_vertex>
      vec4 texLocal = vec4(transformed, 1.0);
      vec3 texNrm = objectNormal;
      #ifdef USE_INSTANCING
        texLocal = instanceMatrix * texLocal;
        texNrm = mat3(instanceMatrix) * texNrm;
      #endif
      vTexWorld = (modelMatrix * texLocal).xyz;
      vTexNormal = mat3(modelMatrix) * texNrm;`);

  shader.fragmentShader = shader.fragmentShader
    .replace('#include <common>', TRIPLANAR_PARS + '\n#include <common>')
    .replace('#include <map_fragment>', TRIPLANAR_MAP);
}

function texUniformsFor(map, strength) {
  /* One uniform object per name, kept on the material and assigned *into*
     the compiled shader (same trick as world/lighting.js's sharedUniforms):
     writing .value here retunes the live render, which is how the tile size
     and strength were settled — on screen, at several viewpoints, in one
     browser session, instead of by rebuild-and-guess. */
  return {
    uTexMid: { value: map.userData.meanLinear },
    uTexRepeat: { value: map.repeat },
    uTexStrength: { value: strength },
  };
}

/**
 * A vertex-coloured surface material whose albedo is modulated by a
 * world-space triplanar sample of `map`.
 *
 * Composes with (never replaces) any onBeforeCompile already on the material,
 * and is itself composed with by world/lighting.js's applyNestShading() from
 * main.js — that one calls the previous hook first, so both injections end up
 * in the same program: this one rewrites <map_fragment>, that one
 * <lights_fragment_end>, and they don't touch each other's chunks.
 */
export function texturedSurfaceMaterial({ map, strength = 1.0, ...opts }) {
  const material = new THREE.MeshStandardMaterial({
    vertexColors: true, roughness: 0.95, metalness: 0, map, ...opts,
  });

  const texUniforms = texUniformsFor(map, strength);
  material.userData.texUniforms = texUniforms;
  material.onBeforeCompile = (shader) => injectTriplanar(shader, texUniforms);

  // Same guard as world/lighting.js: an injected material must not be served
  // a program compiled for a differently-injected one. applyNestShading()
  // later folds this tag into its own key (userData.shaderTag) rather than
  // overwriting it, so a textured surface and a textured *emitter* can never
  // collide in the program cache.
  material.userData.shaderTag = 'triplanar-albedo';
  material.customProgramCacheKey = () => 'triplanar-albedo';
  return material;
}

/**
 * Same triplanar sampler, but the texture drives the *emission* as well as
 * the albedo: `totalEmissiveRadiance += vColor * grain * emissive`, so the
 * pale warts of a mushroom cap glow brighter than the cap around them and a
 * smooth sphere reads as a living lamp instead of moulded plastic
 * (design/charte-stylisation.md §7.8). Emitters are excluded from the
 * daylight attenuation on purpose — see nestDecor.js.
 */
export function texturedEmissiveMaterial({ map, strength = 1.0, emissive = 1.6, ...opts }) {
  const material = new THREE.MeshStandardMaterial({
    vertexColors: true, roughness: 0.6, metalness: 0, map, ...opts,
  });

  const texUniforms = texUniformsFor(map, strength);
  material.userData.texUniforms = texUniforms;
  material.onBeforeCompile = (shader) => {
    injectTriplanar(shader, texUniforms);
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <emissivemap_fragment>',
      `#include <emissivemap_fragment>
       totalEmissiveRadiance += vColor * gTriTex * ${emissive.toFixed(2)};`);
  };
  material.userData.shaderTag = 'triplanar-emissive';
  material.customProgramCacheKey = () => 'triplanar-emissive';
  return material;
}

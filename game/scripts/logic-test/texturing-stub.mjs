// Stand-in for world/texturing.js under scripts/test-logic.mjs (see
// loader.mjs). Every export here matches texturing.js's real signature
// closely enough that callers (terrain.js, founding.js, underground.js,
// nestDecor.js, tree.js) can build their meshes without ever noticing the
// swap — the geometry and containment logic under test never reads back
// into the material/texture, so an inert THREE object is enough.

import * as THREE from 'three';

function dummyTexture() {
  const tex = new THREE.Texture();
  tex.userData.meanLinear = new THREE.Vector3(0.5, 0.5, 0.5);
  return tex;
}

export function dirtAlbedo() { return dummyTexture(); }
export function barkAlbedo() { return dummyTexture(); }
export function lawnAlbedo() { return dummyTexture(); }
export function stoneAlbedo() { return dummyTexture(); }
export function capAlbedo() { return dummyTexture(); }

// Real texturing.js destructures `strength`/`emissive` out for its own use
// (the triplanar shader injection) rather than passing them to THREE — mirror
// that here so the stub doesn't trip THREE's "unknown property" warning.
export function texturedSurfaceMaterial({ map, strength, ...opts } = {}) {
  return new THREE.MeshStandardMaterial({ vertexColors: true, ...opts });
}
export function texturedEmissiveMaterial({ map, strength, emissive, ...opts } = {}) {
  return new THREE.MeshStandardMaterial({ vertexColors: true, ...opts });
}

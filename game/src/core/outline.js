import * as THREE from 'three';

/* ==========================================================================
   Inverted-hull outline on creatures (#28, design/charte-stylisation.md §1c).

   The queen is a dark brown body walking on dark brown ground under a low sun
   that takes her from behind half the time. She is the object the player looks
   at 100% of the time and she was the hardest thing on screen to find. An
   outline is the cheapest fix that does not require repainting either her or
   the ground.

   WHY A HULL AND NOT A FULL-SCREEN PASS. The charte rejects the screen-space
   edge detector explicitly, and for a reason that matters here: an edge filter
   outlines *everything*, so a field of 1600 grass blades comes back drawn in
   ink. The hull outlines only what is asked, which is the whole point when the
   subject is one creature in a mess of vegetation.

   THICKNESS. w = clamp(0.0017 * distance, 0.06, 0.16) world units, so the line
   is roughly constant on screen (~1.3 px at 1280x720, 50 deg FOV) instead of
   thinning to nothing as the camera pulls out. A fixed world-unit outline is
   worse than none: it flickers in and out with the zoom. The clamps kill both
   degeneracies — invisible in close-up, felt-tip at distance.

   The queen's boom clamp is [16, 140] rather than the worker's [10, 85] the
   charte was written against, so the far end of her zoom sits on the 0.16
   ceiling and the line thins slightly there. Left as is: capping is the right
   behaviour, and the alternative is a second constant per avatar for a
   difference visible only at full zoom-out.

   COLOUR IS NEVER BLACK — the charte again. Slate on the lawn, a warmer near
   black in the nest, commuted by the same scalar main.js uses for fog and sky.
   ========================================================================== */

const C_LAWN = new THREE.Color('#393741');
const C_NEST = new THREE.Color('#241D22');

const outlineMaterial = new THREE.MeshBasicMaterial({
  color: C_LAWN.clone(),
  side: THREE.BackSide,
  // The hull must not write depth over the body it wraps: it is drawn first
  // (renderOrder below) and the body then paints on top of it. Writing depth
  // would let the inflated shell win the test against the real surface at
  // grazing angles and coat the silhouette's inside edge.
  depthWrite: false,
});

outlineMaterial.onBeforeCompile = (shader) => {
  shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', /* glsl */`
    #include <begin_vertex>
    float oDist = -(modelViewMatrix * vec4(position, 1.0)).z;
    transformed += normal * clamp(0.0017 * oDist, 0.06, 0.16);
  `);
};
outlineMaterial.customProgramCacheKey = () => 'inverted-hull';

/** 0 = deep in the nest, 1 = out on the lawn. Called from main.js's
 *  applyEnvironment(), so the outline changes zone with the fog rather than
 *  keeping a lawn colour underground. */
export function setOutlineZone(outside) {
  outlineMaterial.color.copy(C_NEST).lerp(C_LAWN, outside);
}

/**
 * Wraps every mesh under `root` in a back-facing shell, and returns a group to
 * add to the scene.
 *
 * The shells SHARE their source geometry by reference rather than cloning it —
 * which is what makes this work at all on an IK creature: antMesh.js rewrites
 * those buffers every frame, and a cloned geometry would leave the outline
 * standing in the ant's T-pose while the ant walked away from it.
 */
export function buildOutlineHull(root) {
  const hull = new THREE.Group();
  hull.name = 'outline-hull';
  root.traverse((o) => {
    if (!o.isMesh || !o.geometry) return;
    const shell = new THREE.Mesh(o.geometry, outlineMaterial);
    shell.castShadow = false;
    shell.receiveShadow = false;
    shell.frustumCulled = false;   // the source meshes are placed in world
                                   // space by the IK, not by their transform
    hull.add(shell);
  });
  // before the body, so the body's own depth writes trim the shell down to the
  // rim that sticks out past its silhouette
  hull.renderOrder = -1;
  return hull;
}

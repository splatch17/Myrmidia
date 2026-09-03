import * as THREE from 'three';
import { groundY } from '../world/index.js';

/* ==========================================================================
   The ring under whatever E is currently about to act on.

   The user's report on the build was that the gameplay is unreadable: nothing
   on screen says which of the two thousand objects around the queen she can
   actually touch. A prompt line at the bottom of the frame names the thing,
   but naming is not pointing — at ant height, with 1600 blades in the way, a
   line reading "récolter brindille" does not tell you *which* brindille.

   So: a ring on the ground at the target's feet. Chosen over highlighting the
   object itself for two reasons that both come from the scale of this game.
   A glow on the object is hidden by the same grass that hides the object; a
   ring on the ground is read from the shadow it sits in. And resource nodes
   are drawn from one instanced buffer per species, so tinting a single one
   means either a per-instance colour attribute rewritten every frame or a
   second draw call — where a ring is one small mesh that already exists.

   It draws with depthTest off, so it is never lost behind a blade. That is a
   deliberate exception to how everything else in the scene is drawn: this is
   an interface element wearing the world's clothes, and an interface element
   that is sometimes invisible is worse than none.
   ========================================================================== */

/* Warm honey, the colour design/ressources-et-fondation.md gives to "this can
   be picked up", so the ring and the props it points at speak the same
   language. The refusal colour is the HUD's own, so a red ring and a red
   sentence are visibly one statement.

   Both are pushed past their nominal hex: the frame goes through ACES tone
   mapping on the way out, which pulls a warm mid-tone toward grey, and the
   first version of this marker came back reading as pale concrete. */
const C_OK = new THREE.Color('#FFB03A').multiplyScalar(1.5);
const C_BLOCKED = new THREE.Color('#E8663A').multiplyScalar(1.4);

/* HOW THIS IS DRAWN, AND WHY IT CHANGED.

   The first version was a flat ring of triangles with hard edges. On a
   capture it read as a plastic washer lying in the grass — the player's word
   for it was that it "ne rend pas très bien", and they pointed at how real
   MMORPGs do it. They are right, and the difference is not the shape:

     - a hard edge is the tell. Selection decals in the genre are soft on both
       the inside and the outside, so the ring sits IN the ground rather than
       ON it. Here that is a smoothstep band, not a pair of radii.
     - they glow rather than paint. Additive blending against dark ground is
       what makes a selection ring readable in a dim scene without making it
       opaque in a bright one, and this game's ground is dark.
     - they move, slowly, and always in the same direction. A pulse says
       "look"; a rotation says "this is still selected" without ever stopping
       being legible. Both are used below, the rotation carried by an angular
       gradient so the ring has a bright arc that sweeps rather than a texture
       that spins.
     - they are wider than they look. A thin ring aliases into dashes at
       distance; a wide soft band holds together.

   One quad, one shader, no texture. */

const BAND_MID = 0.72;    // where the ring sits, as a fraction of the radius
const BAND_HALF = 0.20;   // half-width of the soft band

const MARKER_FRAG = /* glsl */`
uniform vec3 uColor;
uniform float uTime;
uniform float uOpacity;
varying vec2 vMarkerUv;

void main() {
  vec2 p = vMarkerUv * 2.0 - 1.0;
  float r = length(p);
  if (r > 1.0) discard;

  // the soft band: fades to nothing on both sides, so there is no edge
  float band = 1.0 - smoothstep(0.0, ${BAND_HALF.toFixed(2)}, abs(r - ${BAND_MID.toFixed(2)}));
  band = pow(band, 1.6);

  // a bright arc sweeping around it, so the ring reads as alive without
  // changing size — three lobes, because one reads as a bug and many read
  // as a texture
  float a = atan(p.y, p.x);
  float sweep = 0.55 + 0.45 * sin(a * 3.0 - uTime * 1.9);

  // a faint wash inside the band, which is what stops the middle of a large
  // ring from looking empty on open ground
  float fill = (1.0 - smoothstep(0.0, ${BAND_MID.toFixed(2)}, r)) * 0.14;

  float alpha = (band * sweep + fill) * uOpacity;
  gl_FragColor = vec4(uColor * (0.75 + 0.55 * band), alpha);
}
`;

export function createTargetMarker(scene) {
  const uniforms = {
    uColor: { value: C_OK.clone() },
    uTime: { value: 0 },
    uOpacity: { value: 1 },
  };

  const material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: /* glsl */`
      varying vec2 vMarkerUv;
      void main() {
        vMarkerUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: MARKER_FRAG,
    transparent: true,
    // Additive, so the ring lights the ground it lies on instead of covering
    // it. depthWrite off for the same reason every additive sprite has it off.
    blending: THREE.AdditiveBlending,
    depthTest: false,
    depthWrite: false,
    side: THREE.DoubleSide,
  });

  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
  mesh.rotation.x = -Math.PI / 2;   // a decal lies flat
  mesh.name = 'target-marker';
  mesh.renderOrder = 900;
  mesh.frustumCulled = false;
  mesh.visible = false;
  scene.add(mesh);

  return {
    /**
     * @param at      {x, z} of the thing E acts on, or null to hide
     * @param radius  world radius of the ring
     * @param blocked true when E would refuse (the ring says so before the
     *                sentence is read)
     * @param elapsed seconds, for the sweep
     */
    show(at, radius, blocked, elapsed) {
      if (!at) { mesh.visible = false; return; }
      mesh.visible = true;
      // Sits a little above the ground rather than on it: coplanar with the
      // lawn it would z-fight on any slope, and depthTest is off anyway so
      // the lift costs nothing and keeps it clear of a rise.
      mesh.position.set(at.x, groundY(at.x, at.z) + 0.35, at.z);
      mesh.scale.setScalar(radius);
      uniforms.uTime.value = elapsed;
      uniforms.uColor.value.copy(blocked ? C_BLOCKED : C_OK);
      // a slow breath on top of the sweep, so a ring that has just appeared
      // is caught by the eye
      uniforms.uOpacity.value = blocked ? 0.95 : 0.80 + 0.20 * Math.sin(elapsed * 3.4);
    },
    dispose() {
      scene.remove(mesh);
      mesh.geometry.dispose();
      material.dispose();
    },
  };
}

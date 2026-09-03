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

const R_INNER = 0.80, R_OUTER = 1.0;   // as a fraction of the ring's radius
const SEGMENTS = 40;

/* Warm honey, the colour design/ressources-et-fondation.md gives to "this can
   be picked up", so the ring and the props it points at speak the same
   language. The refusal colour is the HUD's own, so a red ring and a red
   sentence are visibly the same statement. */
/* Pushed past the nominal hex on purpose: a MeshBasicMaterial is not lit, but
   it still goes through ACES tone mapping on the way out, which pulls a warm
   mid-tone toward grey. #FFC46A on the way in came back reading as pale
   concrete. These are the values that survive the transform as honey. */
const C_OK = new THREE.Color('#FFB03A').multiplyScalar(1.45);
const C_BLOCKED = new THREE.Color('#E8663A').multiplyScalar(1.35);

function ringGeometry() {
  const pos = [], idx = [];
  for (let i = 0; i <= SEGMENTS; i++) {
    const a = (i / SEGMENTS) * Math.PI * 2;
    const c = Math.cos(a), s = Math.sin(a);
    pos.push(c * R_INNER, 0, s * R_INNER, c * R_OUTER, 0, s * R_OUTER);
  }
  for (let i = 0; i < SEGMENTS; i++) {
    const a0 = i * 2, b0 = a0 + 1, a1 = a0 + 2, b1 = a0 + 3;
    idx.push(a0, b0, b1, a0, b1, a1);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  return g;
}

export function createTargetMarker(scene) {
  const material = new THREE.MeshBasicMaterial({
    color: C_OK.clone(), transparent: true, opacity: 0.85,
    side: THREE.DoubleSide, depthTest: false, depthWrite: false, fog: false,
  });
  const mesh = new THREE.Mesh(ringGeometry(), material);
  mesh.name = 'target-marker';
  mesh.renderOrder = 900;      // over the world, under nothing else
  mesh.frustumCulled = false;
  mesh.visible = false;
  scene.add(mesh);

  return {
    /**
     * @param at      {x, z} of the thing E acts on, or null to hide
     * @param radius  world radius of the ring
     * @param blocked true when E would refuse (the ring says so before the
     *                sentence is read)
     * @param elapsed seconds, for the breathing
     */
    show(at, radius, blocked, elapsed) {
      if (!at) { mesh.visible = false; return; }
      mesh.visible = true;
      // Sits a little above the ground rather than on it: coplanar with the
      // lawn it would z-fight on any slope, and depthTest is off anyway so
      // the lift costs nothing and keeps it off the dirt on a rise.
      mesh.position.set(at.x, groundY(at.x, at.z) + 0.35, at.z);
      // breathing, so a ring that has just appeared is caught by the eye —
      // the movement is what reads at this scale, not the colour
      const pulse = 1 + 0.045 * Math.sin(elapsed * 4.2);
      mesh.scale.setScalar(radius * pulse);
      material.color.copy(blocked ? C_BLOCKED : C_OK);
      material.opacity = blocked ? 0.92 : 0.82 + 0.14 * Math.sin(elapsed * 4.2);
    },
    dispose() {
      scene.remove(mesh);
      mesh.geometry.dispose();
      material.dispose();
    },
  };
}

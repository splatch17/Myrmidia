import * as THREE from 'three';
import { floorAt } from '../world/index.js';

/* ==========================================================================
   The spoil pellets you can see (#85): small clods of earth lying in a pile at
   the face that made them, and the one an ant carries up to the entrance.
   One InstancedMesh, rewritten each frame (a few dozen at most). Built at
   construction, like handDig's meshes, so the nest shading traverse sees it.
   ========================================================================== */

const MAX = 192;
const R = 0.75;

export function createSpoilView(scene) {
  const mesh = new THREE.InstancedMesh(
    new THREE.IcosahedronGeometry(R, 0),
    new THREE.MeshStandardMaterial({ color: 0x8a6544, emissive: 0x3a2412, emissiveIntensity: 0.6, roughness: 1, flatShading: true }),
    MAX,
  );
  mesh.name = 'spoil-pellets';
  mesh.frustumCulled = false;
  mesh.count = 0;
  scene.add(mesh);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), p = new THREE.Vector3(), s = new THREE.Vector3();

  function put(i, x, y, z, k) {
    e.set(k * 1.7, k * 2.9, k * 0.6); q.setFromEuler(e);
    const sc = 0.8 + ((k * 7.13) % 0.5);
    p.set(x, y, z); s.set(sc, sc * 0.85, sc);
    m.compose(p, q, s);
    mesh.setMatrixAt(i, m);
  }

  return {
    mesh,
    /** piles: economy.state.piles; carriers: [{ x, y, z, yaw }] (ants holding one) */
    update(piles, carriers) {
      let n = 0;
      for (const pile of piles) {
        const fy = floorAt(pile.x, pile.z, pile.y);
        const y = (fy === null || fy === undefined ? pile.y : fy) + R * 0.6;
        for (let k = 0; k < pile.n && n < MAX; k++, n++) {
          const a = k * 2.399, r = 0.9 * Math.sqrt(k + 0.5);   // a heap spiralling out
          put(n, pile.x + Math.cos(a) * r, y + (k > 6 ? 0.9 : 0), pile.z + Math.sin(a) * r, k + 1);
        }
      }
      for (const c of carriers) {
        if (n >= MAX) break;
        put(n, c.x + Math.sin(c.yaw) * 1.3, c.y + 1.7, c.z + Math.cos(c.yaw) * 1.3, 3.3);
        n++;
      }
      mesh.count = n;
      mesh.instanceMatrix.needsUpdate = true;
    },
    dispose() { scene.remove(mesh); mesh.geometry.dispose(); mesh.material.dispose(); },
  };
}

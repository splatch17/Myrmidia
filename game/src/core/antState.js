import * as THREE from 'three';

// Contract with Cataglyphis's player controller: it writes `position`
// (world-space) and `radius` (contact-influence radius) into this object
// every frame from wherever the ant actually is; any render-side system
// (currently: grass contact bend in world/grass.js) reads from it every
// frame. No events, no ownership handshake — last write wins each frame,
// this module is read-only from the render side.
export const antState = {
  position: new THREE.Vector3(0, 0, 0),
  radius: 0.9,
};

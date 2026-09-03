import * as THREE from 'three';

// Perf budget: cap devicePixelRatio (retina/4K displays otherwise multiply
// fragment cost 4x+ for no visible gain at typical viewing distance) and
// keep shadow maps modest. Tune here, not per-feature.
const MAX_PIXEL_RATIO = 1.5;

export function createRenderer(container) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, MAX_PIXEL_RATIO));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.appendChild(renderer.domElement);

  let onResize = null;
  renderer.setResizeCallback = (fn) => { onResize = fn; };

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    onResize?.(window.innerWidth / window.innerHeight);
  });

  return renderer;
}

export function createCamera() {
  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 500);
  camera.position.set(0, 20, 36);
  return camera;
}

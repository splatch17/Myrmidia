import * as THREE from 'three';
import { current, onQualityChange } from './quality.js';

/* ==========================================================================
   Bloom on light sources only (#78, reprise of #28).

   SELECTIVE, NOT A THRESHOLD. Emitters (the glow bead, the lamp bodies and
   spores of world/atmosphere.js) live on BLOOM_LAYER only; the main camera
   sees both layers, so they draw normally in the main pass. The glow itself
   is built in a quarter-resolution side target:

     1. every ordinary object, drawn black with a flat override material —
        this is only there to lay down depth, so a lamp behind a wall does
        not glow through it;
     2. the emitters, with their own materials, depth-tested against (1);
     3. a separable blur at 1/4 and again at 1/8 resolution;
     4. both blurs added onto the canvas with one full-screen triangle.

   Why not UnrealBloomPass over an HDR copy of the frame: measured on the
   ANGLE/D3D11 path the harnesses use, a multisampled half-float target
   capped the frame near 48 fps whatever the scene held, and dropping its
   MSAA gives up the antialias on 1600 grass blades. This way the main frame
   is untouched (same canvas, same MSAA, same tone mapping) and the lawn
   cannot bloom by construction: nothing out there is on the layer.

   It also costs NOTHING when nothing is lit: the side passes are skipped
   whenever no emitter is visible (nothing founded yet, or the camera far
   from the nest), so the surface keeps its frame time. Off in the quality
   panel (P, 6).
   ========================================================================== */

export const BLOOM_LAYER = 1;
export const BLOOM_STRENGTH = 1.6;

/** Put an object (and its children) on the bloom layer only. */
export function markEmitter(obj) {
  obj.traverse((o) => { o.layers.set(BLOOM_LAYER); });
  return obj;
}

const FS_TRI = new THREE.BufferGeometry();
FS_TRI.setAttribute('position', new THREE.Float32BufferAttribute([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3));

const VS = /* glsl */`
  varying vec2 vUv;
  void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;

function blurMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { tSrc: { value: null }, uDir: { value: new THREE.Vector2() } },
    vertexShader: VS,
    // 9 taps from 5 bilinear fetches
    fragmentShader: /* glsl */`
      uniform sampler2D tSrc;
      uniform vec2 uDir;
      varying vec2 vUv;
      void main() {
        vec3 c = texture2D(tSrc, vUv).rgb * 0.2270270;
        c += texture2D(tSrc, vUv + uDir * 1.3846154).rgb * 0.3162162;
        c += texture2D(tSrc, vUv - uDir * 1.3846154).rgb * 0.3162162;
        c += texture2D(tSrc, vUv + uDir * 3.2307692).rgb * 0.0702703;
        c += texture2D(tSrc, vUv - uDir * 3.2307692).rgb * 0.0702703;
        gl_FragColor = vec4(c, 1.0);
      }
    `,
    depthTest: false, depthWrite: false,
  });
}

export function createBloom(renderer, scene, camera) {
  const opts = { type: THREE.HalfFloatType, depthBuffer: false };
  const rtSrc = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, depthBuffer: true });
  const rtA1 = new THREE.WebGLRenderTarget(1, 1, opts), rtA2 = new THREE.WebGLRenderTarget(1, 1, opts);
  const rtB1 = new THREE.WebGLRenderTarget(1, 1, opts), rtB2 = new THREE.WebGLRenderTarget(1, 1, opts);

  /* Both sides (#91): the nest's walls face INTO their rooms, so from above a
     room (standing in the trench over it) its ceiling is a back face, and a
     front-only occluder let the room's lamps halo through the ground. */
  const black = new THREE.MeshBasicMaterial({ color: 0x000000, fog: false, side: THREE.DoubleSide });
  const blur = blurMaterial();
  const composite = new THREE.ShaderMaterial({
    uniforms: { tA: { value: rtA1.texture }, tB: { value: rtB1.texture }, uStrength: { value: BLOOM_STRENGTH } },
    vertexShader: VS,
    fragmentShader: /* glsl */`
      uniform sampler2D tA;
      uniform sampler2D tB;
      uniform float uStrength;
      varying vec2 vUv;
      void main() {
        vec3 g = (texture2D(tA, vUv).rgb * 0.55 + texture2D(tB, vUv).rgb * 0.85) * uStrength;
        // soft shoulder so a halo never clips flat. Added as is, without a
        // linear-to-sRGB curve: that curve lifts the faint tails of the blur
        // into a grey veil with visible square edges at 1/8 resolution.
        gl_FragColor = vec4(1.0 - exp(-g), 1.0);
      }
    `,
    blending: THREE.AdditiveBlending, transparent: true, depthTest: false, depthWrite: false,
  });
  const quad = new THREE.Mesh(FS_TRI, blur);
  quad.frustumCulled = false;
  const quadScene = new THREE.Scene();
  quadScene.add(quad);
  const quadCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  camera.layers.enable(BLOOM_LAYER);

  let enabled = current().bloom !== false;
  onQualityChange((q) => { enabled = q.bloom !== false; });

  const buf = new THREE.Vector2();
  let lastW = 0, lastH = 0;
  function sync() {
    renderer.getDrawingBufferSize(buf);
    if (buf.x === lastW && buf.y === lastH) return;
    lastW = buf.x; lastH = buf.y;
    const w4 = Math.max(1, Math.round(buf.x / 4)), h4 = Math.max(1, Math.round(buf.y / 4));
    const w8 = Math.max(1, Math.round(buf.x / 8)), h8 = Math.max(1, Math.round(buf.y / 8));
    rtSrc.setSize(w4, h4); rtA1.setSize(w4, h4); rtA2.setSize(w4, h4);
    rtB1.setSize(w8, h8); rtB2.setSize(w8, h8);
  }

  function pass(src, dst, dx, dy, w, h) {
    quad.material = blur;
    blur.uniforms.tSrc.value = src.texture;
    blur.uniforms.uDir.value.set(dx / w, dy / h);
    renderer.setRenderTarget(dst);
    renderer.render(quadScene, quadCam);
  }

  /* Is any emitter worth a side pass this frame? Set by world code through
     setActive(); defaults to on so a missing caller shows too much, not
     nothing. */
  let active = true;

  function glow() {
    sync();
    const prevTarget = renderer.getRenderTarget();
    const prevAuto = renderer.autoClear;
    const prevBg = scene.background, prevFog = scene.fog;
    const prevMask = camera.layers.mask;
    const prevShadow = renderer.shadowMap.autoUpdate;
    const prevClear = renderer.getClearAlpha();
    renderer.getClearColor(_cc);

    renderer.shadowMap.autoUpdate = false;   // the main pass already drew it
    scene.background = null;
    scene.fog = null;
    renderer.setClearColor(0x000000, 1);

    renderer.setRenderTarget(rtSrc);
    renderer.clear(true, true, false);
    renderer.autoClear = false;
    camera.layers.set(0);
    scene.overrideMaterial = black;
    renderer.render(scene, camera);
    scene.overrideMaterial = null;
    camera.layers.set(BLOOM_LAYER);
    renderer.render(scene, camera);
    camera.layers.mask = prevMask;
    scene.background = prevBg;
    scene.fog = prevFog;

    const w4 = rtA1.width, h4 = rtA1.height, w8 = rtB1.width, h8 = rtB1.height;
    pass(rtSrc, rtA2, 1, 0, w4, h4);
    pass(rtA2, rtA1, 0, 1, w4, h4);
    pass(rtA1, rtB2, 2, 0, w8, h8);
    pass(rtB2, rtB1, 0, 2, w8, h8);

    renderer.setRenderTarget(prevTarget);
    quad.material = composite;
    renderer.render(quadScene, quadCam);

    renderer.autoClear = prevAuto;
    renderer.shadowMap.autoUpdate = prevShadow;
    renderer.setClearColor(_cc, prevClear);
  }
  const _cc = new THREE.Color();

  return {
    get enabled() { return enabled; },
    set enabled(v) { enabled = !!v; },
    setActive(v) { active = !!v; },
    get active() { return active; },
    render() {
      renderer.render(scene, camera);
      if (enabled && active) glow();
    },
  };
}

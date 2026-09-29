import * as THREE from 'three';
import { latticeD, onVolumeChange } from './nestVolume.js';

/* ==========================================================================
   The GHOST of planned digs (#82): translucent glowing dots on the shell of
   every planned-but-not-yet-dug volume, in the macro model and (subtly) in the
   play view underground.

   It draws what it is HANDED, not what the world stores: player/plans.js owns
   the plans (cost, crew, order) and hands over each one's cell list
   (Int32Array of lattice x,y,z triplets). Which of those cells are still earth
   is read from the volume every rebuild, so the ghost SHRINKS by itself as the
   diggers open cells — nothing here is told about progress.

   Only the surface of the remaining cells is drawn (a cell with a solid-air
   neighbour, or a neighbour outside the plan): a room of 4000 cells is ~1500
   dots, and a translucent shell reads as a volume. Additive and depth-tested
   but not depth-writing, so it never hides the model behind it.

   kinds: 0 a plan, 1 a preview that can be validated, 2 a preview that is
   refused (red), 3 the plan under the cursor (brighter).
   ========================================================================== */

const MAX_POINTS = 36000;
const OFF = 1024;
const key = (x, y, z) => ((x + OFF) * 2048 + (y + OFF)) * 2048 + (z + OFF);
const NB = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];

export function createPlanGhost() {
  const group = new THREE.Group();
  group.name = 'plan-ghost';

  const pos = new Float32Array(MAX_POINTS * 3);
  const kind = new Float32Array(MAX_POINTS);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('aKind', new THREE.BufferAttribute(kind, 1));
  geo.setDrawRange(0, 0);

  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uScale: { value: 800 }, uSize: { value: 1.5 }, uAlpha: { value: 0.3 }, uTime: { value: 0 },
    },
    vertexShader: /* glsl */`
      attribute float aKind;
      uniform float uScale, uSize, uTime;
      varying float vKind;
      varying float vPulse;
      void main() {
        vKind = aKind;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vPulse = 0.8 + 0.2 * sin(uTime * 3.0 + position.x * 0.3 + position.y * 0.5 + position.z * 0.3);
        gl_PointSize = clamp(uSize * uScale / max(-mv.z, 1.0), 2.0, 34.0);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */`
      uniform float uAlpha;
      varying float vKind;
      varying float vPulse;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        float a = smoothstep(0.5, 0.05, d);
        if (a < 0.02) discard;
        vec3 col = vKind < 0.5 ? vec3(0.45, 0.92, 1.0)
                 : vKind < 1.5 ? vec3(0.55, 1.0, 0.62)
                 : vKind < 2.5 ? vec3(1.0, 0.28, 0.24)
                 : vec3(1.0, 0.86, 0.45);
        gl_FragColor = vec4(col * vPulse, a * uAlpha * (vKind > 0.5 ? 1.6 : 1.0));
        #include <colorspace_fragment>
      }`,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false,
  });
  const points = new THREE.Points(geo, mat);
  points.name = 'plan-ghost-points';
  points.frustumCulled = false;
  points.renderOrder = 14;
  group.add(points);

  let plans = [];                // [{ id, cells }]
  let preview = null;            // { cells, ok }
  let highlight = null;
  let dirty = true, rebuildT = 0;
  let count = 0;
  const unsub = onVolumeChange(() => { dirty = true; });

  function collect(cells, k, out, room) {
    // the cells still earth, then the shell of that set
    const set = new Set();
    for (let i = 0; i < cells.length; i += 3) {
      if (latticeD(cells[i], cells[i + 1], cells[i + 2]) >= 0) set.add(key(cells[i], cells[i + 1], cells[i + 2]));
    }
    const stride = Math.max(1, Math.ceil(set.size / Math.max(room, 1) * 0.5));
    let n = 0;
    for (let i = 0; i < cells.length; i += 3) {
      const x = cells[i], y = cells[i + 1], z = cells[i + 2];
      if (!set.has(key(x, y, z))) continue;
      let edge = false;
      for (let j = 0; j < 6; j++) {
        if (!set.has(key(x + NB[j][0], y + NB[j][1], z + NB[j][2]))) { edge = true; break; }
      }
      if (!edge) continue;
      if (stride > 1 && (n++ % stride)) continue;
      if (count >= MAX_POINTS) return;
      pos[count * 3] = x; pos[count * 3 + 1] = y; pos[count * 3 + 2] = z;
      kind[count] = k;
      count++;
    }
  }

  function rebuild() {
    count = 0;
    if (preview) collect(preview.cells, preview.ok ? 1 : 2, null, MAX_POINTS / 3);
    for (const p of plans) collect(p.cells, p.id === highlight ? 3 : 0, null, (MAX_POINTS - count) / Math.max(1, plans.length));
    geo.setDrawRange(0, count);
    geo.attributes.position.needsUpdate = true;
    geo.attributes.aKind.needsUpdate = true;
    dirty = false;
  }

  return {
    group,
    /** [{ id, cells: Int32Array(x,y,z...) }] — every chantier still open */
    setPlans(list) { plans = list; dirty = true; },
    /** the brush under the cursor, before it is validated; null clears */
    setPreview(cells, ok) { preview = cells ? { cells, ok } : null; dirty = true; },
    setHighlight(id) { if (id !== highlight) { highlight = id; dirty = true; } },
    /** number of dots drawn (harness) */
    points: () => count,
    update(dt, elapsed, camera, macroMix, viewH) {
      rebuildT -= dt;
      if (dirty && rebuildT <= 0) { rebuildT = 0.2; rebuild(); }
      mat.uniforms.uTime.value = elapsed;
      mat.uniforms.uScale.value = viewH / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)));
      mat.uniforms.uAlpha.value = THREE.MathUtils.lerp(0.26, 0.8, macroMix);
      mat.uniforms.uSize.value = THREE.MathUtils.lerp(1.3, 1.6, macroMix);
      group.visible = count > 0;
    },
    dispose() { unsub(); geo.dispose(); mat.dispose(); },
  };
}

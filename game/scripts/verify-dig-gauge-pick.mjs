// Unit-level proof for #62 requirement 2: the HUD draws the dig-face gauge
// only for the face the player is LOOKING at, not one ring per open face.
//
// No browser: pickDigGauge() (src/player/digGauge.js) takes plain candidates
// and a THREE.Camera, and THREE's maths run fine under plain node — there is
// no reason to pay for a build + a headless GPU to check an arithmetic rule.
// It also sidesteps the same gap verify-queen-menu-faces.mjs notes: the world
// side of #62 has not landed more than one real dig face in this worktree
// yet, so proving "several open at once" needs synthetic candidates either
// way.
//
// Usage: node scripts/verify-dig-gauge-pick.mjs

import * as THREE from 'three';
import { pickDigGauge, LOOK_NDC_MAX } from '../src/player/digGauge.js';

let failures = 0;
const check = (c, m) => { if (!c) { failures++; console.log('  FAIL: ' + m); } else console.log('  ok:   ' + m); };

// A camera at the origin looking down -Z, matching the game's own FOV (50).
const camera = new THREE.PerspectiveCamera(50, 16 / 9, 0.1, 500);
camera.position.set(0, 0, 0);
camera.lookAt(0, 0, -1);
camera.updateMatrixWorld();

console.log('=== no faces ===');
check(pickDigGauge([], camera) === null, 'nothing to draw when nothing is open');
check(pickDigGauge(null, camera) === null, 'a null candidate list is handled, not thrown on');

console.log('\n=== one face, dead ahead ===');
{
  const g = pickDigGauge([{ id: 'a', x: 0, y: -6.5, z: -20, progress: 0.4, diggers: 1 }], camera);
  check(!!g, 'the one open face is drawn');
  check(g.id === 'a', 'it is the right one');
  check(g.ndc < 0.05, `it lands near screen centre (ndc ${g.ndc.toFixed(3)})`);
}

console.log('\n=== three faces open at once (the hall\'s own walls, #62) ===');
{
  // One dead ahead, one far off to the side (behind peripheral vision, still
  // technically in the frustum), one directly behind her.
  const faces = [
    { id: 'centre', x: 0, y: -6.5, z: -20, progress: 0.1, diggers: 0 },
    { id: 'side', x: 60, y: -6.5, z: -20, progress: 0.9, diggers: 3 },
    { id: 'behind', x: 0, y: -6.5, z: 20, progress: 0.0, diggers: 0 },
  ];
  const g = pickDigGauge(faces, camera);
  check(!!g, 'exactly one gauge is chosen, not zero');
  check(g.id === 'centre', `the one nearest screen centre wins, not the busiest crew or the highest progress (got "${g && g.id}")`);
  // This is the defect itself: never more than one candidate should ever
  // satisfy the "draw this" test in the same frame.
  const passing = faces.filter((f) => {
    const p = pickDigGauge([f], camera);
    return p && p.ndc <= LOOK_NDC_MAX;
  });
  check(passing.length === 1, `only one of the three faces is even eligible this frame (got ${passing.length}) — no overlapping gauges`);
}

console.log('\n=== a face at the very edge of the frustum is not "looked at" ===');
{
  // Near the edge of a 50deg-vertical / ~converted horizontal FOV frustum,
  // technically inside it (visible === true) but off past LOOK_NDC_MAX.
  const g = pickDigGauge([{ id: 'edge', x: 0, y: -6.5 + 18, z: -20, progress: 0.5, diggers: 1 }], camera);
  check(g === null, 'a face at the rim of the view draws nothing rather than the least-bad option');
}

console.log('\n=== a face behind her draws nothing ===');
{
  const g = pickDigGauge([{ id: 'back', x: 0, y: -6.5, z: 100, progress: 0.2, diggers: 1 }], camera);
  check(g === null, 'a face behind the camera is not drawn, even though it would otherwise be nearest');
}

console.log(failures ? `\n${failures} FAILURE(S)` : '\nALL CHECKS PASSED');
process.exit(failures ? 1 : 0);

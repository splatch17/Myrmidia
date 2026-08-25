import * as THREE from 'three';
import { antState } from '../core/antState.js';
import { clamp } from '../core/noise.js';
import { START, groundY } from '../world/index.js';
import { makeAnt, makeLegState, updateLegs } from './legs.js';
import { buildAntMesh } from './antMesh.js';
import { createInput } from './input.js';
import { createCameraRig } from './camera.js';
import { computeWishDir, stepAnt } from './movement.js';
import { nearestClimbable, tryInteract, stepClimb } from './climb.js';
import { dampAngle } from './mathUtil.js';

/**
 * Wires up the whole player: ant state, IK mesh, input, camera, movement +
 * underground/lawn collision (#21), and stem/tree climbing (#5 — see
 * climb.js). Call update(dt, elapsed) once a frame, after world.update() so
 * the ant walks on this frame's terrain, before renderer.render() so the
 * camera it moved is the one that gets drawn.
 */
export function createPlayerController({ scene, camera, domElement }) {
  const ant = makeAnt(START[0], 0, START[1]);
  ant.y = groundY(ant.x, ant.z);

  const legState = makeLegState();
  const { group, updatePose } = buildAntMesh();
  scene.add(group);

  const input = createInput(domElement);
  const cameraRig = createCameraRig(camera);
  // prime the rig so frame 1 has a valid eye/aim to build camera-relative
  // input from (mirrors the old prototype's camReady snap-in) — see
  // movement.js's computeWishDir() for why this ordering matters.
  cameraRig.update(ant, input.state.camYaw, input.state.wantPitch, input.state.camDist, 0);

  function update(dt, elapsed) {
    const intent = input.readMoveIntent();

    // E/interact: enter/exit climbing. curClimbTarget only matters when not
    // already climbing (see climb.js's tryInteract) — skip the GRASS/tree
    // proximity scan entirely while climbing, no target is needed to dismount.
    if (input.consumeInteract()) {
      tryInteract(ant, ant.climb ? null : nearestClimbable(ant));
    }

    if (ant.climb) {
      // climbing: forward/back walks the ant along the blade/trunk's own
      // curve; left/right is unused (see climb.js/the old prototype)
      stepClimb(ant, clamp(intent.iy, -1, 1), dt);
    } else {
      const wish = computeWishDir(intent, cameraRig.eye, cameraRig.aim);
      stepAnt(ant, wish, intent, dt);
    }

    updateLegs(ant, legState, dt);
    updatePose(ant, legState, elapsed);
    group.position.set(0, 0, 0); // parts are already placed in world space (see antMesh.js)

    antState.position.set(ant.x, ant.y, ant.z);
    antState.radius = 2.5; // roughly the ant's footprint half-width, for grass contact bend

    // the camera drifts back behind the ant while it walks, so the pair
    // converges instead of chasing each other — suppressed while climbing,
    // same as the old prototype (ant.yaw never changes there, so chasing it
    // would just freeze camYaw wherever it happened to be on entry)
    if (!input.state.dragging && !ant.climb && intent.mag > 0.02) {
      input.state.camYaw = dampAngle(input.state.camYaw, ant.yaw, 2.2, dt);
    }
    cameraRig.update(ant, input.state.camYaw, input.state.wantPitch, input.state.camDist, dt);
  }

  function dispose() {
    input.dispose();
  }

  return { ant, group, update, dispose };
}

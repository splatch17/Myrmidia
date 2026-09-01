import { antState } from '../core/antState.js';
import { clamp } from '../core/noise.js';
import { groundY } from '../world/index.js';
import { PLAYER_AVATAR, collideRadius } from './avatar.js';
import { makeAnt, makeLegState, updateLegs } from './legs.js';
import { buildAntMesh } from './antMesh.js';
import { createInput } from './input.js';
import { createCameraRig } from './camera.js';
import { computeWishDir, stepAnt } from './movement.js';
import { nearestClimbable, tryInteract, stepClimb, climbPromptText, GRASS } from './climb.js';
import { deepestPenetration, resolveDecorCollision, mushroomRadii } from './decorCollision.js';
import { evaluateSite, siteHeadline, siteDetail } from './siteQuality.js';
import { createHud } from './hud.js';
import { dampAngle } from './mathUtil.js';

/**
 * Wires up the whole player: ant state, IK mesh, input, camera, movement +
 * underground/lawn collision (#21), decor non-penetration (#4/#16), stem/tree
 * climbing (#5), and the site reading the founding queen walks around with
 * (#32). Call update(dt, elapsed) once a frame, after world.update() so the
 * ant walks on this frame's terrain, before renderer.render() so the camera
 * it moved is the one that gets drawn.
 */

/* Where the game opens (design/boucle-de-jeu.md §0, #32): out on the lawn,
   the queen alone, no nest. Not world/underground.js's START (the queen's
   chamber) any more — that nest is now the "already founded" state, reached
   in play, and the prologue happens before it exists.

   Chosen far enough up the meadow (z=110) that the existing gallery mouth at
   z=0 is well behind the camera at spawn, and off to the right of the tree at
   (-85, 95) so the first thing on screen is open grass with the trunk giving
   scale on the left. It will want revisiting once Atta's relief/river land
   (#31) — the spawn should end up somewhere that reads as a landing site, and
   deliberately *not* on the best soil of the map. */
const SURFACE_START = [20, 110];
const SPAWN_YAW = 0; // facing +Z, into the meadow, nest mouth behind her

// site readout cadence: often enough that walking a few body-lengths updates
// it, rare enough that the grass scans in siteQuality.js never show up in a
// frame budget
const SITE_INTERVAL = 0.25, SITE_MOVE = 3;

export function createPlayerController({ scene, camera, domElement, profile = PLAYER_AVATAR }) {
  const ant = makeAnt(SURFACE_START[0], 0, SURFACE_START[1], profile);
  ant.yaw = SPAWN_YAW;
  ant.y = groundY(ant.x, ant.z);
  // she is 2.2x a worker: a spawn point that was clear for a worker can still
  // overlap a pebble or a stem for her. Two resolves settle it (see
  // decorCollision.js on why the second pass exists) before the first frame,
  // rather than having her visibly shoved aside on frame one.
  resolveDecorCollision(ant, 0);
  resolveDecorCollision(ant, 0);
  ant.y = groundY(ant.x, ant.z);

  const legState = makeLegState(profile);
  const { group, updatePose } = buildAntMesh(profile);
  scene.add(group);

  const input = createInput(domElement, profile);
  const cameraRig = createCameraRig(camera);
  const hud = createHud();
  // prime the rig so frame 1 has a valid eye/aim to build camera-relative
  // input from (mirrors the old prototype's camReady snap-in) — see
  // movement.js's computeWishDir() for why this ordering matters.
  cameraRig.update(ant, input.state.camYaw, input.state.wantPitch, input.state.camDist, 0);

  let siteTimer = 0, siteAt = null, site = null;

  function refreshSite(dt) {
    siteTimer -= dt;
    const moved = siteAt ? Math.hypot(ant.x - siteAt[0], ant.z - siteAt[1]) : Infinity;
    if (site && siteTimer > 0 && moved < SITE_MOVE) return;
    siteTimer = SITE_INTERVAL;
    siteAt = [ant.x, ant.z];
    site = evaluateSite(ant.x, ant.z);
    hud.setSite(siteHeadline(site), siteDetail(site), site.diggable);
  }

  function update(dt, elapsed) {
    const intent = input.readMoveIntent();

    // E/interact: enter/exit climbing. climbTarget only matters when not
    // already climbing (see climb.js's tryInteract) — skip the GRASS/tree
    // proximity scan entirely while climbing, no target is needed to dismount.
    const climbTarget = ant.climb ? null : nearestClimbable(ant);
    if (input.consumeInteract()) tryInteract(ant, climbTarget);

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
    antState.radius = collideRadius(profile); // footprint half-width, for grass contact bend

    refreshSite(dt);
    hud.setPrompt(climbPromptText(ant, climbTarget));

    // the camera drifts back behind the ant while it walks, so the pair
    // converges instead of chasing each other — suppressed while climbing,
    // same as the old prototype (ant.yaw never changes there, so chasing it
    // would just freeze camYaw wherever it happened to be on entry)
    if (!input.state.dragging && !ant.climb && intent.mag > 0.02) {
      input.state.camYaw = dampAngle(input.state.camYaw, ant.yaw, 2.2, dt);
    }
    cameraRig.update(ant, input.state.camYaw, input.state.wantPitch, input.state.camDist, dt);
  }

  // Debug/verification hooks (not gameplay, mirrors main.js's window.__ant):
  // __decorPenetration lets scripts/verify-room-access.mjs assert the ant is
  // never inside a rock/mushroom/stem/trunk, measured against the very radii
  // the collision resolver uses (#4/#16); __site lets it assert the site
  // reading agrees with where the ant is standing (#32).
  if (typeof window !== 'undefined') {
    window.__decorPenetration = deepestPenetration;
    window.__antRadius = collideRadius(profile);
    window.__site = (x, z) => evaluateSite(x, z);
    window.__avatar = profile;
    window.__mushroomRadii = mushroomRadii;
    window.__grass = GRASS;  // so the harness can walk to a real climbable stem
  }

  function dispose() {
    input.dispose();
    hud.dispose();
  }

  return { ant, group, update, dispose };
}

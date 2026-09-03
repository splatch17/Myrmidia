import { antState } from '../core/antState.js';
import { clamp } from '../core/noise.js';
import { groundY, distanceToWater } from '../world/index.js';
import { PLAYER_AVATAR, collideRadius } from './avatar.js';
import { buildOutlineHull } from '../core/outline.js';
import { makeAnt, makeLegState, updateLegs } from './legs.js';
import { buildAntMesh } from './antMesh.js';
import { createInput } from './input.js';
import { createCameraRig } from './camera.js';
import { computeWishDir, stepAnt } from './movement.js';
import { stepClimb, GRASS } from './climb.js';
import { deepestPenetration, resolveDecorCollision, mushroomRadii } from './decorCollision.js';
import { evaluateSite, siteHeadline, siteDetail } from './siteQuality.js';
import { createInteraction } from './interaction.js';
import { createProps } from './props.js';
import { resourceNodes } from './resources.js';
import { nestOrigin, canFound, refusalText } from './founding.js';
import { createHud } from './hud.js';
import { dampAngle } from './mathUtil.js';

/**
 * Wires up the whole player: ant state, IK mesh, input, camera, movement +
 * underground/lawn collision (#21), decor non-penetration (#4/#16), stem/tree
 * climbing (#5), the site reading the founding queen walks around with (#32),
 * and the harvest/founding loop (#29/#33 — interaction.js owns which verb the
 * interact key means, this file only routes input into it and its text out to
 * the HUD). Call update(dt, elapsed) once a frame, after world.update() so the
 * ant walks on this frame's terrain, before renderer.render() so the camera
 * it moved is the one that gets drawn.
 */

/* Where the game opens (design/boucle-de-jeu.md §0, #32): out on the lawn,
   the queen alone, no nest. Not world/underground.js's START (the queen's
   chamber) any more — that nest is now the "already founded" state, reached
   in play, and the prologue happens before it exists.

   Replayed against the finished world (PROGRESS.md defect #5: the old
   (20, 110) predated the relief, and the first pick made against the relief
   alone predated the resource nodes and the real shade). Surveyed through the
   game's own evaluateSite()/canFoundAt()/grass footprints over the whole map,
   this is the open ground on the east flank, and it was chosen for what it
   denies as much as for what it offers:
     - it is *not* good ground. Site ~51/100 on a map that reaches 90, and the
       90s are all 280 units west, past the bowl, near the tree. If the queen
       landed on the best soil there is, looking for a site would be a
       formality — which is exactly what defect #5 objects to.
     - it is open. Eight grass blades within 22 units against a median of 14
       (and 33 at the worst): the first thing on screen is sky, ground and
       the far rim rather than the inside of a thicket, which is what a
       landing has to read as. The first pick failed on precisely this, and
       it took the capture to see it.
     - there is something to do here and somewhere to go: resource nodes
       within ~30 units for the first load, the bowl a short walk west, the
       tree on the horizon beyond it, and the pre-#11 gallery mouth 220 units
       away — out of sight, which it has to be while it is still a leftover.
   Verified clear of every decor collider, and foundable (canFoundAt), before
   it was chosen. */
const SURFACE_START = [140, 170];
const SPAWN_YAW = -Math.PI / 2; // facing -X: the meadow, the bowl and the far tree

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
  /* The outline is built from the finished mesh rather than inside
     antMesh.js, so the rendering trick and the anatomy stay separable: a
     second creature gets an outline by being passed through here, not by
     having one baked into how it is modelled. */
  scene.add(buildOutlineHull(group));

  const input = createInput(domElement, profile);
  // the boom starts behind her, not behind +Z: camYaw defaults to 0 in
  // input.js, which with a spawn facing west would open the game on a side
  // view of the queen instead of on the meadow she is looking at
  input.state.camYaw = SPAWN_YAW;
  const cameraRig = createCameraRig(camera);
  const hud = createHud();
  const interaction = createInteraction({ profile });
  // Props (carried item, the pile, stand-in resource markers) are built here,
  // before main.js's one-shot scene.traverse() applies the nest shading — see
  // props.js.
  const props = createProps({ scene, profile });
  // prime the rig so frame 1 has a valid eye/aim to build camera-relative
  // input from (mirrors the old prototype's camReady snap-in) — see
  // movement.js's computeWishDir() for why this ordering matters.
  cameraRig.update(ant, input.state.camYaw, input.state.wantPitch, input.state.camDist, 0);

  let siteTimer = 0, siteAt = null, site = null, nestCard = null;

  function refreshSite(dt) {
    siteTimer -= dt;
    const moved = siteAt ? Math.hypot(ant.x - siteAt[0], ant.z - siteAt[1]) : Infinity;
    if ((site || nestCard) && siteTimer > 0 && moved < SITE_MOVE) return;
    siteTimer = SITE_INTERVAL;
    siteAt = [ant.x, ant.z];

    /* Once the colony is founded, the readout changes what it is *about*
       (#33): "is this a good place to dig" has been answered for good, so the
       line stops following her feet and becomes the card of the place she
       chose. Where the nest is relative to her is the objective line's job
       (interaction.js), not this one's. */
    const origin = nestOrigin();
    if (origin) {
      if (!nestCard) nestCard = evaluateSite(origin.x, origin.z);
      hud.setSite(`Nid fondé — site ${nestCard.grade.label} (${nestCard.score}/100)`,
        siteDetail(nestCard), true);
      return;
    }
    site = evaluateSite(ant.x, ant.z);
    hud.setSite(siteHeadline(site), siteDetail(site), site.diggable);
  }

  function update(dt, elapsed) {
    const intent = input.readMoveIntent();

    /* E, resolved in context (interaction.js): climb on/off, harvest a node,
       drop what she carries, or dig the first chamber. Both readings of the
       key go down — the consumed edge for the instant verbs, the raw held
       state for the ones that take time — because which of the two matters is
       the ladder's decision, not this file's. Run before movement, so a climb
       entered this frame is walked this frame (the order the old prototype's
       frame() used). */
    const act = interaction.update(ant, input.consumeInteract(), input.isInteractHeld(), dt);

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

    props.update(ant, interaction.harvest.state);

    refreshSite(dt);
    hud.setPrompt(interaction.promptText(ant, act));
    hud.setObjective(interaction.objectiveText(ant));
    hud.setStock(interaction.inventoryText());
    hud.setEvent(interaction.message());
    interaction.endFrame();

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
    // #29/#33: the harness has to know where a node is in order to walk to
    // it, and what the loop thinks she is holding — it still *drives* with
    // real key events.
    window.__nodes = resourceNodes;
    window.__harvest = () => interaction.harvest.state;
    window.__nestOrigin = nestOrigin;
    // the founding verdict + the sentence it produces, so the harness can
    // check the refusals for ground the queen would have to walk minutes to
    // reach (#33), and the waterline the movement clamp now follows (#4)
    window.__canFound = (x, z) => { const v = canFound(x, z); return { ...v, text: refusalText(v.reason) }; };
    window.__toWater = distanceToWater;
  }

  function dispose() {
    input.dispose();
    hud.dispose();
    props.dispose();
  }

  return { ant, group, update, dispose };
}

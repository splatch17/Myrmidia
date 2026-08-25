import { clamp } from '../core/noise.js';

/* ==========================================================================
   Input: keyboard (WASD/ZQSD/arrows + Shift to sprint), pointer-drag camera
   orbit, wheel zoom, a touch joystick, and the E/interact key — ported from
   design/prototypes/sortie-fourmiliere.html section 6. No HUD wiring this
   round (no #objective/#playerhud/#prompt in game/index.html yet — out of
   scope, see the mission notes); this module only owns raw input state,
   camera.js and player/index.js consume it.
   ========================================================================== */

export function createInput(domElement) {
  const keys = {};
  const state = {
    camYaw: 0,
    wantPitch: -0.19,
    // Default pulled back to 36 / clamp [10,85] (#18) — kept identical to
    // the validated old-prototype constants, see the mission brief.
    camDist: 36,
    dragging: false,
  };

  const touchMove = { active: false, id: -1, ox: 0, oy: 0, dx: 0, dy: 0 };
  let dragPointer = -1, lastPX = 0, lastPY = 0;
  // edge-triggered (not "is held"): climbing on/off and future harvest
  // pickups should fire once per press, same as the old prototype's
  // keydown-time tryInteract() call rather than a per-frame poll.
  let interactPressed = false;

  function isMoveKey(codes) {
    for (let i = 0; i < codes.length; i++) if (keys[codes[i]]) return true;
    return false;
  }

  function onKeyDown(e) {
    keys[e.code] = true;
    if (e.code === 'KeyE') interactPressed = true;
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].indexOf(e.code) >= 0) e.preventDefault();
  }
  function onKeyUp(e) { keys[e.code] = false; }
  function onBlur() { for (const k in keys) keys[k] = false; }

  function onPointerDown(e) {
    domElement.setPointerCapture(e.pointerId);
    if (e.pointerType === 'touch' && e.clientX < window.innerWidth * 0.5) {
      touchMove.active = true; touchMove.id = e.pointerId;
      touchMove.ox = e.clientX; touchMove.oy = e.clientY;
    } else {
      state.dragging = true; dragPointer = e.pointerId;
      lastPX = e.clientX; lastPY = e.clientY;
    }
  }
  function onPointerMove(e) {
    if (touchMove.active && e.pointerId === touchMove.id) {
      const dx = clamp(e.clientX - touchMove.ox, -46, 46);
      const dy = clamp(e.clientY - touchMove.oy, -46, 46);
      touchMove.dx = dx / 46; touchMove.dy = dy / 46;
      return;
    }
    if (state.dragging && e.pointerId === dragPointer) {
      state.camYaw -= (e.clientX - lastPX) * 0.006;
      state.wantPitch = clamp(state.wantPitch - (e.clientY - lastPY) * 0.004, -0.85, 0.55);
      lastPX = e.clientX; lastPY = e.clientY;
    }
  }
  function endPointer(e) {
    if (touchMove.active && e.pointerId === touchMove.id) {
      touchMove.active = false; touchMove.dx = 0; touchMove.dy = 0;
    }
    if (e.pointerId === dragPointer) { state.dragging = false; dragPointer = -1; }
  }
  function onWheel(e) {
    // widened alongside the #18 default so there's room to pull out further
    // than the new default, not just up to it
    state.camDist = clamp(state.camDist + e.deltaY * 0.03, 10, 85);
    e.preventDefault();
  }

  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('keyup', onKeyUp);
  window.addEventListener('blur', onBlur);
  domElement.addEventListener('pointerdown', onPointerDown);
  domElement.addEventListener('pointermove', onPointerMove);
  domElement.addEventListener('pointerup', endPointer);
  domElement.addEventListener('pointercancel', endPointer);
  domElement.addEventListener('wheel', onWheel, { passive: false });

  function readMoveIntent() {
    let ix = 0, iy = 0;
    if (isMoveKey(['KeyW', 'KeyZ', 'ArrowUp'])) iy += 1;
    if (isMoveKey(['KeyS', 'ArrowDown'])) iy -= 1;
    if (isMoveKey(['KeyA', 'KeyQ', 'ArrowLeft'])) ix -= 1;
    if (isMoveKey(['KeyD', 'ArrowRight'])) ix += 1;
    if (touchMove.active) { ix += touchMove.dx; iy -= touchMove.dy; }
    const mag = Math.min(Math.hypot(ix, iy), 1);
    const sprint = (keys.ShiftLeft || keys.ShiftRight) ? 1.75 : 1;
    return { ix, iy, mag, sprint };
  }

  /* Consumes the pending interact press (if any) — reading it resets it, so
     a single keydown maps to exactly one call site reacting to it per press,
     no matter how many frames the key stays physically held afterward. */
  function consumeInteract() {
    const v = interactPressed;
    interactPressed = false;
    return v;
  }

  function dispose() {
    window.removeEventListener('keydown', onKeyDown);
    window.removeEventListener('keyup', onKeyUp);
    window.removeEventListener('blur', onBlur);
    domElement.removeEventListener('pointerdown', onPointerDown);
    domElement.removeEventListener('pointermove', onPointerMove);
    domElement.removeEventListener('pointerup', endPointer);
    domElement.removeEventListener('pointercancel', endPointer);
    domElement.removeEventListener('wheel', onWheel);
  }

  return { state, readMoveIntent, consumeInteract, dispose };
}

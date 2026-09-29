import * as THREE from 'three';

/* ==========================================================================
   MACRO MODE (#34) — the nest seen from outside, as a scale model.

   A MODE, not a camera trick: this owns a small state machine
   (play -> enter -> macro -> exit -> play), its own orbit camera, its own
   pointer input and its own picking. world/macroView.js owns the look.
   While the mode is anything but 'play' the player controller is frozen
   (freezesPlayer()): no steering, no follow camera, so leaving the mode
   lands exactly on the pose the player left — the transition out ends on
   the saved camera position and quaternion, not on a recomputed one.

   Built to be the base of nest building, so the verbs are pluggable:
   setTool({ hover(pick), click(pick) }) replaces what the pointer does in
   the model. The default tool selects a room and tells onSelect()
   listeners; a future "paint a dig volume" or "assign a room function"
   tool is another object with the same two methods, and gets the same
   picks (room under the cursor + the ground point hit), for free.
   ========================================================================== */

const TRANSITION = 0.6;              // seconds, both ways
const PITCH_MIN = 0.22, PITCH_MAX = 1.45;
const smooth = (t) => { const k = Math.min(Math.max(t, 0), 1); return k * k * (3 - 2 * k); };

const ROOM_NAME = (r) => (r.id === 'chamber' ? 'Chambre de fondation'
  : r.id === 'hall' ? 'Le hall' : `Salle ${r.id.replace(/^hall-/, '').toUpperCase()}`);
const SIZE_NAME = { chamber: 'chambre de la reine', small: 'petite salle', medium: 'salle moyenne', large: 'grande salle' };

/**
 * @param camera      the game's PerspectiveCamera (written while not 'play')
 * @param domElement  the canvas
 * @param view        world/macroView.js's createMacroView()
 * @param getAnt      () => {x, y, z} of the queen, the focus when nothing is founded
 * @param forEachAnt  (fn) => fn(x, y, z, kind) per ant, for the dots
 * @param faceCrew    (face) => {diggers, required} | null, for the tooltip
 * @param hud         player HUD (setMacro)
 * @param pickAnt     (px, py) => ant id | null, the ant pin under a click (#36)
 * @param onAntPick   (id) => void, called instead of the tool when pickAnt hits
 */
export function createMacroMode({ camera, domElement, view, getAnt, forEachAnt, faceCrew, hud, pickAnt, onAntPick }) {
  let mode = 'play', t = 0;
  const playPos = new THREE.Vector3(), playQuat = new THREE.Quaternion();
  const fromPos = new THREE.Vector3(), fromQuat = new THREE.Quaternion();
  const orbitPos = new THREE.Vector3(), orbitQuat = new THREE.Quaternion();
  const target = new THREE.Vector3();
  const orbit = { yaw: 0, pitch: 0.95, dist: 150, minDist: 30, maxDist: 300 };
  const box = { x0: 0, x1: 0, z0: 0, z1: 0 };
  let founded = false;

  const _m = new THREE.Matrix4(), _up = new THREE.Vector3(0, 1, 0), _f = new THREE.Vector3();
  const _r = new THREE.Vector3(), _ndc = new THREE.Vector2(), _v = new THREE.Vector3();
  const ray = new THREE.Raycaster();

  /* ---- DOM: tooltip + "no nest yet" note (the legend is the HUD's) ---- */
  const hasDom = typeof document !== 'undefined';
  const tip = hasDom ? document.createElement('div') : null;
  const note = hasDom ? document.createElement('div') : null;
  if (hasDom) {
    tip.id = 'macrotip';
    tip.className = 'mm mm-frame';
    tip.style.cssText = 'display:none;padding:7px 11px;font-size:12px;line-height:1.5;max-width:280px;';
    note.id = 'macronote';
    note.className = 'mm';
    note.style.cssText = 'display:none;left:50%;top:18px;transform:translateX(-50%);'
      + 'font:700 16px/1.3 var(--mm-title);color:var(--mm-gold);letter-spacing:.05em;';
    note.textContent = 'Pas encore de fourmilière';
    document.body.append(tip, note);
  }

  /* ---- selection + tools --------------------------------------------- */
  let hovered = null, selected = null, tipKey = null, tipTimer = 0;
  const listeners = new Set();
  const selectTool = {
    name: 'select',
    hover() {},
    click(pick) {
      selected = pick.room ? { ...pick.room } : null;
      view.setSelected(selected);
      for (const fn of listeners) fn(selected);
      return true;
    },
  };
  let tool = selectTool;

  function fitBounds() {
    const b = view.bounds();
    founded = !!b;
    if (b) {
      box.x0 = b.x0; box.x1 = b.x1; box.z0 = b.z0; box.z1 = b.z1;
      target.set((b.x0 + b.x1) / 2, (b.y0 + b.y1) / 2 - 2, (b.z0 + b.z1) / 2);
      const radius = 0.5 * Math.hypot(b.x1 - b.x0, b.z1 - b.z0, b.y1 - b.y0);
      const fit = radius / Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * 1.05;
      orbit.maxDist = Math.min(fit * 1.6, camera.far * 0.8);
      orbit.minDist = Math.max(b.minR * 4, 40);   // one small room fills the view
      return fit;
    }
    const a = getAnt();
    box.x0 = a.x - 50; box.x1 = a.x + 50; box.z0 = a.z - 50; box.z1 = a.z + 50;
    target.set(a.x, a.y, a.z);
    orbit.maxDist = 220; orbit.minDist = 30;
    return 140;
  }

  function orbitPose() {
    const cp = Math.cos(orbit.pitch);
    orbitPos.set(
      target.x + orbit.dist * cp * Math.sin(orbit.yaw),
      target.y + orbit.dist * Math.sin(orbit.pitch),
      target.z + orbit.dist * cp * Math.cos(orbit.yaw));
    _m.lookAt(orbitPos, target, _up);
    orbitQuat.setFromRotationMatrix(_m);
  }

  function enter() {
    playPos.copy(camera.position);
    playQuat.copy(camera.quaternion);
    fromPos.copy(playPos); fromQuat.copy(playQuat);
    const a = getAnt();
    view.setActive(true, _v.set(a.x, a.y, a.z));
    const fit = fitBounds();
    // keep the heading the player was looking along: the model turns up in
    // front of them rather than from an arbitrary side
    camera.getWorldDirection(_f);
    orbit.yaw = Math.atan2(-_f.x, -_f.z);
    orbit.pitch = 0.95;
    orbit.dist = Math.min(fit, orbit.maxDist);
    mode = 'enter'; t = 0; lastNow = 0;
    if (hud && hud.setMacro) hud.setMacro(true);
    if (note) note.style.display = founded ? 'none' : 'block';
  }

  function exit() {
    fromPos.copy(camera.position); fromQuat.copy(camera.quaternion);
    mode = 'exit'; t = 0; lastNow = 0;
    setHover(null);
    if (note) note.style.display = 'none';
  }

  function toggle() {
    if (mode === 'play') enter();
    else if (mode === 'exit') { fromPos.copy(camera.position); fromQuat.copy(camera.quaternion); mode = 'enter'; t = 0; }
    else exit();
  }

  /* ---- input (only listened to while not in 'play') ------------------- */
  let drag = null;            // { kind: 'orbit'|'pan', x, y, sx, sy }
  let mouseX = -1, mouseY = -1, mouseIn = false;

  function onKey(e) {
    // #82: the active tool gets the key first (brush shortcuts, Escape to drop a half-drawn plan)
    if (mode === 'macro' && e.code !== 'KeyM' && tool.key && tool.key(e)) return;
    if (e.code === 'KeyM' && !e.repeat) toggle();
    else if (e.code === 'Escape' && mode !== 'play') exit();
  }
  function onDown(e) {
    if (mode === 'play') return;
    /* #82: Ctrl + drag paints with a brush tool (a tunnel from A to B, a room
       stretched into an oval) instead of orbiting; a plain click still places. */
    if (mode === 'macro' && e.button === 0 && e.ctrlKey && tool.paint) {
      drag = { kind: 'paint', x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY, button: 0 };
      return;
    }
    const pan = e.button === 2 || e.shiftKey;
    drag = { kind: pan ? 'pan' : 'orbit', x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY, button: e.button };
  }
  function onMove(e) {
    mouseX = e.clientX; mouseY = e.clientY; mouseIn = true;
    if (mode === 'play' || !drag) return;
    if (drag.kind === 'paint') { if (tool.paintMove) tool.paintMove(drag.sx, drag.sy, e.clientX, e.clientY); return; }
    const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
    drag.x = e.clientX; drag.y = e.clientY;
    if (drag.kind === 'orbit') {
      orbit.yaw -= dx * 0.006;
      orbit.pitch = Math.min(Math.max(orbit.pitch + dy * 0.005, PITCH_MIN), PITCH_MAX);
    } else {
      // along the ground, in screen directions
      const k = orbit.dist * 0.0017;
      _r.set(Math.cos(orbit.yaw), 0, -Math.sin(orbit.yaw));
      _f.set(-Math.sin(orbit.yaw), 0, -Math.cos(orbit.yaw));
      target.addScaledVector(_r, -dx * k).addScaledVector(_f, dy * k);
      target.x = Math.min(Math.max(target.x, box.x0), box.x1);
      target.z = Math.min(Math.max(target.z, box.z0), box.z1);
    }
  }
  function onUp(e) {
    if (mode === 'play' || !drag) { drag = null; return; }
    const moved = Math.hypot(e.clientX - drag.sx, e.clientY - drag.sy);
    const wasLeft = drag.button === 0;
    if (drag.kind === 'paint') {
      const d = drag; drag = null;
      if (mode === 'macro') tool.paint(d.sx, d.sy, e.clientX, e.clientY);
      return;
    }
    drag = null;
    if (moved < 5 && wasLeft && mode === 'macro') {
      /* #36: a click on an ant pin takes control of that ant, before the room
         tool sees it (a pin is drawn over the room it stands in). */
      const id = pickAnt ? pickAnt(e.clientX, e.clientY) : null;
      if (id !== null && id !== undefined && onAntPick) onAntPick(id);
      else tool.click(pickAt(e.clientX, e.clientY));
    }
  }
  function onWheel(e) {
    if (mode === 'play') return;
    if (mode === 'macro' && tool.wheel && tool.wheel(e)) return;   // #82: Alt + wheel sizes the brush
    orbit.dist = Math.min(Math.max(orbit.dist * Math.exp(e.deltaY * 0.0012), orbit.minDist), orbit.maxDist);
  }
  function onContext(e) { if (mode !== 'play') e.preventDefault(); }
  function onLeave() { mouseIn = false; }

  if (hasDom) {
    window.addEventListener('keydown', onKey);
    domElement.addEventListener('pointerdown', onDown);
    domElement.addEventListener('pointermove', onMove);
    domElement.addEventListener('pointerup', onUp);
    domElement.addEventListener('pointercancel', onUp);
    domElement.addEventListener('pointerleave', onLeave);
    domElement.addEventListener('wheel', onWheel, { passive: true });
    domElement.addEventListener('contextmenu', onContext);
  }

  /* ---- picking: a room is hit where the ray crosses its floor disc ---- */
  const pick = { room: null, point: new THREE.Vector3(), hit: false };
  function pickAt(px, py) {
    const w = domElement.clientWidth || window.innerWidth, h = domElement.clientHeight || window.innerHeight;
    _ndc.set((px / w) * 2 - 1, -(py / h) * 2 + 1);
    ray.setFromCamera(_ndc, camera);
    const o = ray.ray.origin, d = ray.ray.direction;
    let best = null, bestT = Infinity;
    for (const r of view.rooms()) {
      if (Math.abs(d.y) < 1e-4) continue;
      const tt = (r.floorY + 1.5 - o.y) / d.y;
      if (tt <= 0 || tt >= bestT) continue;
      const x = o.x + d.x * tt, z = o.z + d.z * tt;
      if (Math.hypot(x - r.x, z - r.z) < r.r * 1.05) { best = r; bestT = tt; }
    }
    pick.room = best;
    pick.hit = !!best;
    if (best) pick.point.copy(o).addScaledVector(d, bestT);
    return pick;
  }

  function setHover(room) {
    hovered = room;
    view.setHover(room);
    if (!room && tip) { tip.style.display = 'none'; tipKey = null; }
  }

  function tipText(room) {
    const size = SIZE_NAME[room.size] || '';
    const lines = [`<div class="mm-title">${ROOM_NAME(room)}</div>`,
      `<div style="color:var(--mm-dim)">${size}${size ? ' · ' : ''}Ø ${Math.round(room.r * 2)} · profondeur ${room.gen}</div>`];
    // faces on THIS room's wall: the nearest room to a face is the one it is cut in
    const own = view.faces().filter((f) => {
      let near = null, nd = Infinity;
      for (const r of view.rooms()) {
        const d = Math.abs(Math.hypot(f.x - r.x, f.z - r.z) - r.r);
        if (d < nd) { nd = d; near = r; }
      }
      return near && near.id === room.id;
    });
    if (!own.length) lines.push('<div style="color:var(--mm-dim)">Aucun chantier</div>');
    for (const f of own) {
      const pct = f.needed > 0 ? Math.round((100 * f.worked) / f.needed) : 0;
      const crew = faceCrew ? faceCrew(f) : null;
      const who = crew ? ` · ${crew.diggers}/${crew.required} fouisseuses` : '';
      lines.push(`<div>Chantier → ${SIZE_NAME[f.size] || 'salle'} : <b>${pct} %</b>${who}</div>`);
    }
    return lines.join('');
  }

  /* ---- per frame ------------------------------------------------------ */
  let lastNow = 0;
  function update(dt, elapsed) {
    if (mode === 'play') return;
    /* Wall-clock, not the frame's dt: main.js caps dt at 0.05, so on a slow
       first frame the transition would stretch past its 0.6 s. */
    const now = performance.now() / 1000;
    t += lastNow ? Math.min(now - lastNow, 0.25) : dt;
    lastNow = now;
    orbitPose();
    if (mode === 'enter') {
      const k = smooth(t / TRANSITION);
      camera.position.lerpVectors(fromPos, orbitPos, k);
      camera.quaternion.slerpQuaternions(fromQuat, orbitQuat, k);
      if (t >= TRANSITION) mode = 'macro';
    } else if (mode === 'macro') {
      camera.position.copy(orbitPos);
      camera.quaternion.copy(orbitQuat);
    } else if (mode === 'exit') {
      const k = smooth(t / TRANSITION);
      camera.position.lerpVectors(fromPos, playPos, k);
      camera.quaternion.slerpQuaternions(fromQuat, playQuat, k);
      if (t >= TRANSITION) {
        camera.position.copy(playPos);
        camera.quaternion.copy(playQuat);
        mode = 'play';
        view.setActive(false);
        if (hud && hud.setMacro) hud.setMacro(false);
        camera.updateMatrixWorld();
        return;
      }
    }
    camera.updateMatrixWorld();

    view.update(dt, elapsed, camera, forEachAnt, target);

    if (mode === 'macro' && mouseIn && !drag) {
      const p = pickAt(mouseX, mouseY);
      if (tool.noRoomTip) { if (hovered) setHover(null); }
      else if (p.room !== hovered && (!p.room || !hovered || p.room.id !== hovered.id)) setHover(p.room);
      else if (p.room) hovered = p.room;    // same room, fresher reading
      tool.hover(p);
    } else if (hovered && mode !== 'macro') setHover(null);

    if (tip && hovered) {
      // text rebuilt on a new room or at 4 Hz (it allocates), moved every frame
      tipTimer -= dt;
      if (hovered.id !== tipKey || tipTimer <= 0) { tip.innerHTML = tipText(hovered); tipKey = hovered.id; tipTimer = 0.25; }
      tip.style.display = 'block';
      // kept on screen: flipped to the cursor's left near the right edge
      const tw = tip.offsetWidth || 240, th = tip.offsetHeight || 70;
      const vw = window.innerWidth, vh = window.innerHeight;
      const lx = mouseX + 16 + tw > vw - 8 ? mouseX - 16 - tw : mouseX + 16;
      tip.style.left = `${Math.max(8, lx)}px`;
      tip.style.top = `${Math.min(Math.max(8, mouseY + 14), vh - th - 8)}px`;
    }
  }

  /** Screen position (CSS px) of a room's floor centre — for harnesses. */
  function roomScreen(id) {
    const r = view.rooms().find((q) => q.id === id);
    if (!r) return null;
    _v.set(r.x, r.floorY + 1.5, r.z).project(camera);
    const w = domElement.clientWidth || window.innerWidth, h = domElement.clientHeight || window.innerHeight;
    return { x: (_v.x + 1) * 0.5 * w, y: (1 - _v.y) * 0.5 * h };
  }

  return {
    toggle,
    update,
    /** 'play' | 'enter' | 'macro' | 'exit' */
    get mode() { return mode; },
    /** true while the player controller must neither steer nor move the camera */
    freezesPlayer: () => mode !== 'play',
    /** 0 in play, 1 in the model; follows the transition */
    mix: () => (mode === 'play' ? 0 : mode === 'macro' ? 1
      : mode === 'enter' ? smooth(t / TRANSITION) : 1 - smooth(t / TRANSITION)),
    founded: () => founded,
    orbit,
    target,
    /** #36: re-aim the pose play resumes from (after taking another ant) */
    setPlayPose(eye, aim) {
      playPos.set(eye[0], eye[1], eye[2]);
      _v.set(aim[0], aim[1], aim[2]);
      _m.lookAt(playPos, _v, _up);
      playQuat.setFromRotationMatrix(_m);
    },
    /** the camera pose that play will resume from */
    playPose: () => ({ pos: playPos.toArray(), quat: playQuat.toArray() }),
    hovered: () => hovered,
    getSelection: () => selected,
    /** fn(room | null) on every click that selects or clears */
    onSelect(fn) { listeners.add(fn); return () => listeners.delete(fn); },
    /** replace what the pointer does in the model; null restores 'select' */
    setTool(next) {
      if (next !== tool && tool.leave) tool.leave();
      tool = next || selectTool;
      if (tool.enter) tool.enter();
    },
    /** the default tool (select a room), for a tool that delegates plain clicks to it */
    selectTool,
    get tool() { return tool; },
    roomScreen,
    pickAt: (x, y) => { const p = pickAt(x, y); return { room: p.room, point: p.point.toArray() }; },
  };
}

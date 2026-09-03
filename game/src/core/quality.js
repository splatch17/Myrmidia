import * as THREE from 'three';

/* ==========================================================================
   Graphics settings, live, with an FPS readout — asked for so the game can be
   tested on the machine it is actually played on.

   The point is not a settings menu for players; it is a diagnostic. "Ça lagge
   un peu" is not something anyone can act on from a different computer, and
   the frame costs measured here (shadow map roughly half the frame, everything
   else small) were measured on a machine where the game runs at 1.1 ms. Being
   able to switch one thing off and watch the number move is what turns that
   report into a fix.

   RESOLUTION IS FIRST FOR A REASON. Every other item on the list changes what
   is drawn; resolution changes how many times the expensive part of it runs.
   On an integrated GPU at devicePixelRatio 2 a full-resolution frame does four
   times the fragment work of a half-resolution one, and this scene is fragment
   bound — 1600 alpha-dithered grass blades, a soft-shadow lookup on every lit
   pixel. If dropping to 0.6 fixes it, nothing else on the list matters.
   ========================================================================== */

const LEVELS = {
  // renderer pixel ratio ceiling; the browser's own devicePixelRatio still caps it
  resolution: [
    { label: '50 %', value: 0.5 },
    { label: '75 %', value: 0.75 },
    { label: '100 %', value: 1.0 },
    { label: '150 % (net)', value: 1.5 },
  ],
  shadows: [
    { label: 'aucune', value: 0 },
    { label: 'basses (1024)', value: 1024 },
    { label: 'normales (2048)', value: 2048 },
  ],
  grass: [
    { label: 'clairsemée', value: 0.35 },
    { label: 'moyenne', value: 0.65 },
    { label: 'dense', value: 1.0 },
  ],
};

/* Persisted, because the setting that matters is the one someone chose to
   diagnose a problem, and losing it on every reload is how a diagnostic tool
   stops being used. Wrapped: a private window throws on access rather than
   returning null. */
const STORE = 'myrmidia.quality';
function load() {
  const d = { resolution: 2, shadows: 2, grass: 2, textures: true };
  try {
    const raw = localStorage.getItem(STORE);
    return raw ? { ...d, ...JSON.parse(raw) } : d;
  } catch { return d; }
}
function save() { try { localStorage.setItem(STORE, JSON.stringify(state)); } catch { /* ignore */ } }

const state = load();

const listeners = [];
export function onQualityChange(fn) { listeners.push(fn); }
function emit() { for (const fn of listeners) fn(current()); }

export function current() {
  return {
    resolution: LEVELS.resolution[state.resolution].value,
    shadowMap: LEVELS.shadows[state.shadows].value,
    grassFraction: LEVELS.grass[state.grass].value,
    textures: state.textures,
  };
}

/* Cycling rather than a slider: one key per setting, each press steps to the
   next value and the panel says what it landed on. A slider needs a pointer,
   and the pointer in this game is already turning the camera. */
function cycle(key) { state[key] = (state[key] + 1) % LEVELS[key].length; }

export function createQualityPanel({ renderer, sun, scene }) {
  const baseRatio = Math.min(window.devicePixelRatio || 1, 2);

  function applyResolution() {
    renderer.setPixelRatio(baseRatio * current().resolution);
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function applyShadows() {
    const size = current().shadowMap;
    renderer.shadowMap.enabled = size > 0;
    if (size > 0) {
      sun.shadow.mapSize.set(size, size);
      // the map is only reallocated when the old one is thrown away
      sun.shadow.map?.dispose();
      sun.shadow.map = null;
    }
    renderer.shadowMap.needsUpdate = true;
  }

  /* Textures off swaps every map out for null and keeps the original on the
     material, rather than disposing anything: the point is to answer "is the
     texture fetch what costs me", and an answer you cannot undo without a
     reload is not much of an answer. Vertex colours carry the whole palette
     underneath, so the world stays readable with every map gone — which is
     also what makes this a useful A/B rather than a black screen. */
  function applyTextures() {
    const on = state.textures;
    scene.traverse((o) => {
      const mats = Array.isArray(o.material) ? o.material : (o.material ? [o.material] : []);
      for (const m of mats) {
        if (on) {
          if (m.userData.savedMap !== undefined) { m.map = m.userData.savedMap; m.userData.savedMap = undefined; }
        } else if (m.map) {
          m.userData.savedMap = m.map;
          m.map = null;
        } else continue;
        m.needsUpdate = true;
      }
    });
  }

  /* Grass thins by drawing fewer instances of the same buffer. InstancedMesh
     honours `count` directly, so this is instant and costs nothing — no
     rebuild, no reallocation, and the blades that remain are the ones that
     were always there rather than a differently-seeded field. */
  let grassMesh = null, grassMax = 0;
  function applyGrass() {
    if (!grassMesh) {
      scene.traverse((o) => { if (o.name === 'grass') grassMesh = o; });
      if (!grassMesh) return;
      grassMax = grassMesh.count;
    }
    grassMesh.count = Math.max(1, Math.round(grassMax * current().grassFraction));
  }

  applyResolution();
  applyShadows();

  if (typeof document === 'undefined') {
    return { update() {}, toggle() {}, dispose() {} };
  }

  const panel = document.createElement('div');
  panel.id = 'quality';
  panel.style.cssText = 'position:fixed;right:12px;bottom:12px;padding:9px 12px;'
    + 'background:rgba(12,10,8,0.68);border-radius:5px;color:#e6d3ab;'
    + 'font:12px/1.7 monospace;pointer-events:none;z-index:6;'
    + 'text-shadow:0 1px 3px rgba(0,0,0,0.9);display:none;';
  document.body.appendChild(panel);

  const fps = document.createElement('div');
  fps.id = 'fps';
  fps.style.cssText = 'position:fixed;right:12px;bottom:12px;padding:4px 8px;'
    + 'background:rgba(12,10,8,0.55);border-radius:4px;color:#cfe0a8;'
    + 'font:12px/1.4 monospace;pointer-events:none;z-index:6;'
    + 'text-shadow:0 1px 3px rgba(0,0,0,0.9);';
  document.body.appendChild(fps);

  let open = false;
  function render() {
    const rows = [
      ['1', 'Résolution', LEVELS.resolution[state.resolution].label],
      ['2', 'Ombres', LEVELS.shadows[state.shadows].label],
      ['3', 'Herbe', LEVELS.grass[state.grass].label + ' (au prochain chargement)'],
      ['4', 'Textures', state.textures ? 'oui' : 'non'],
    ];
    panel.innerHTML = '<div style="opacity:0.75;margin-bottom:3px">Graphismes — P pour fermer</div>'
      + rows.map(([k, name, val]) =>
          `<div><span style="color:#ffe6b0">${k}</span>`
          + `<span style="opacity:0.7"> ${name} : </span>`
          + `<span style="color:#cfe0a8">${val}</span></div>`).join('');
  }
  render();

  /* Frame timing is smoothed over a second rather than shown per frame: an
     instantaneous number flickers too fast to read, and the thing being
     diagnosed is a sustained rate, not a spike. */
  let frames = 0, acc = 0, shown = 0;

  /* The panel owns its keys instead of going through player/input.js: these
     are not gameplay bindings, they must work when the player is not being
     controlled, and routing them through the controller would tie a
     diagnostic to a game state. */
  function onKeyDown(e) { if (api.key(e.code)) e.preventDefault(); }
  window.addEventListener('keydown', onKeyDown);

  // whatever was persisted is applied before the first frame, not on first use
  applyGrass();
  applyTextures();

  const api = {
    /** Call once a frame with the raw delta. */
    update(dt) {
      frames++; acc += dt;
      if (acc >= 0.5) {
        shown = Math.round(frames / acc);
        frames = 0; acc = 0;
        const gl = renderer.getContext();
        fps.textContent = open
          ? `${shown} i/s · ${gl.drawingBufferWidth}x${gl.drawingBufferHeight} · ${renderer.info.render.calls} appels`
          : `${shown} i/s · P : graphismes`;
      }
    },
    /** A digit key while the panel is open, or 'P' to open/close it. */
    key(code) {
      if (code === 'KeyP') {
        open = !open;
        panel.style.display = open ? 'block' : 'none';
        fps.style.bottom = open ? '104px' : '12px';
        return true;
      }
      if (!open) return false;
      if (code === 'Digit1') { cycle('resolution'); applyResolution(); }
      else if (code === 'Digit2') { cycle('shadows'); applyShadows(); }
      else if (code === 'Digit3') { cycle('grass'); applyGrass(); }
      else if (code === 'Digit4') { state.textures = !state.textures; applyTextures(); }
      else return false;
      render();
      save();
      emit();
      return true;
    },
    dispose() {
      window.removeEventListener('keydown', onKeyDown);
      panel.remove();
      fps.remove();
    },
  };
  return api;
}

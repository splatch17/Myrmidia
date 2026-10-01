import * as THREE from 'three';
import { getFoundedNest, floorAt } from '../world/index.js';
import { ensureUiTheme, keycap } from './uiTheme.js';

/* ==========================================================================
   The chantier tools of the macro model (#82): a small bar (mm skin) and the
   brushes behind it. They plug into core/macroMode.js's setTool() — the same
   verb slot the room selection uses — so nothing here is a second mode.

     Tunnel (T)   click the start, click the end (or Ctrl + drag A -> B)
     Salle (R)    click to place a sphere; Ctrl + drag stretches it into an oval
     Annuler (X)  click a ghost to cancel it (the unspent food comes back)
     Prioritaire (F)  click a ghost: its diggers are crewed first
     Choisir (V)  the default: select a room; a ghost under the cursor shows its progress

   WHERE THE BRUSH GOES. The cursor's ray is cast on the nest meshes, and the
   brush is put at the depth of the SURFACE it hits (a floor: that floor; a
   wall: the floor under that wall point). Pointing at empty earth uses the
   last depth read, so an oblique ray never sends the brush through the model.
   PageUp / PageDown raise or lower that depth by two units, for a room over or
   under another. The brush always has a flat floor (`floor: true`) so what is
   dug can be walked.

   The ghost under the cursor is the validation: green when the plan is legal,
   red with the reason when it is not (player/plans.js evaluate()), and the
   cost and crew are shown before anything is spent.
   ========================================================================== */

const TUNNEL_R = { min: 4, max: 8, def: 4.5 };
const ROOM_R = { min: 6, max: 18, def: 10 };
const DEPTH_STEP = 2;
const CAVITY = /^(founded-nest-shell|nest-volume-|nest-room-|nest-link-)/;

const TOOLS = [
  { id: 'select', label: 'Choisir', key: 'V' },
  { id: 'tunnel', label: 'Tunnel', key: 'T' },
  { id: 'room', label: 'Salle', key: 'R' },
  { id: 'cancel', label: 'Annuler chantier', key: 'X' },
  { id: 'prio', label: 'Prioritaire', key: 'F' },
];

export function createPlanTool({ macro, plans, ghost, camera, domElement, diggerCount = () => 0, crewAt = () => 0 }) {
  if (typeof document === 'undefined') return { update() {}, tool: () => 'select' };
  ensureUiTheme();

  let toolId = 'select';
  const size = { tunnel: TUNNEL_R.def, room: ROOM_R.def };
  let depthOff = 0;
  let level = null;              // the last floor depth read from the model
  let start = null;              // a tunnel's first click: { x, y, z }
  let mx = -1, my = -1;
  let lastHover = 0, lastEval = null, lastKey = '';
  let cur = null;                // the cursor's surface point, { x, y, z, level }

  /* ---- DOM ------------------------------------------------------------- */
  const bar = document.createElement('div');
  bar.id = 'plantools';
  bar.className = 'mm mm-frame';
  bar.style.cssText = 'display:none;left:calc(50% + 100px);top:14px;transform:translateX(-50%);padding:7px 10px 6px;'
    + 'text-align:center;white-space:nowrap;';
  const row = document.createElement('div');
  row.style.cssText = 'display:flex;gap:6px;align-items:center;justify-content:center;';
  const buttons = {};
  for (const t of TOOLS) {
    const b = document.createElement('div');
    b.dataset.tool = t.id;
    b.innerHTML = `${keycap(t.key)} <span>${t.label}</span>`;
    b.style.cssText = 'pointer-events:auto;cursor:pointer;padding:3px 9px;border:1px solid var(--mm-bronze);'
      + 'border-radius:4px;background:rgba(0,0,0,.35);font-size:12px;';
    b.addEventListener('click', (e) => { e.stopPropagation(); setToolId(t.id); });
    b.addEventListener('pointerdown', (e) => e.stopPropagation());
    row.appendChild(b);
    buttons[t.id] = b;
  }
  const sizeWrap = document.createElement('label');
  sizeWrap.style.cssText = 'pointer-events:auto;display:none;align-items:center;gap:6px;margin-left:8px;font-size:12px;color:var(--mm-dim);';
  const slider = document.createElement('input');
  slider.type = 'range'; slider.step = '0.5'; slider.id = 'plansize';
  slider.style.cssText = 'width:110px;accent-color:#f3cf7a;';
  const sizeTxt = document.createElement('b');
  sizeTxt.style.color = 'var(--mm-text)';
  sizeWrap.append('taille', slider, sizeTxt);
  slider.addEventListener('input', () => { size[toolId] = Number(slider.value); refreshSize(); lastKey = ''; });
  slider.addEventListener('pointerdown', (e) => e.stopPropagation());
  row.appendChild(sizeWrap);
  const help = document.createElement('div');
  help.style.cssText = 'margin-top:5px;font-size:11px;color:var(--mm-dim);';
  bar.append(row, help);

  const tip = document.createElement('div');
  tip.id = 'plantip';
  tip.className = 'mm mm-frame';
  tip.style.cssText = 'display:none;padding:7px 11px;font-size:12px;line-height:1.5;max-width:300px;';
  const note = document.createElement('div');
  note.id = 'plannote';
  note.className = 'mm';
  note.style.cssText = 'display:none;left:50%;top:78px;transform:translateX(-50%);'
    + 'font:700 14px/1.3 var(--mm-title);letter-spacing:.05em;';
  document.body.append(bar, tip, note);

  function say(text, bad) {
    note.textContent = text;
    note.style.color = bad ? '#ff8a7a' : 'var(--mm-gold)';
    note.style.display = 'block';
    clearTimeout(say.t);
    say.t = setTimeout(() => { note.style.display = 'none'; }, 3200);
  }

  function refreshSize() {
    const r = toolId === 'tunnel' ? TUNNEL_R : ROOM_R;
    slider.min = r.min; slider.max = r.max; slider.value = size[toolId];
    sizeTxt.textContent = `Ø ${(size[toolId] * 2).toFixed(0)}`;
    sizeWrap.style.display = toolId === 'tunnel' || toolId === 'room' ? 'flex' : 'none';
  }

  function refreshHelp() {
    const common = `${keycap('Alt')}+molette taille · ${keycap('PgHaut')}/${keycap('PgBas')} profondeur`
      + `${depthOff ? ` (${depthOff > 0 ? '+' : ''}${depthOff})` : ''} · ${keycap('Échap')} annuler`;
    help.innerHTML = toolId === 'tunnel'
      ? `clic — départ, clic — arrivée · ${keycap('Ctrl')}+glisser · ${common}`
      : toolId === 'room' ? `clic — poser · ${keycap('Ctrl')}+glisser — ovale · ${common}`
        : toolId === 'cancel' ? 'clic sur un chantier fantôme — l’annuler (la nourriture non dépensée revient)'
          : toolId === 'prio' ? 'clic sur un chantier — ses fouisseuses le creusent en premier'
            : 'clic — choisir une salle · passer sur un fantôme — voir l’avancement';
  }

  function setToolId(id) {
    if (id === toolId) return;
    toolId = id;
    start = null;
    clearPreview();
    macro.setTool(id === 'select' ? selectDelegate : tool);
    for (const t of TOOLS) {
      const on = t.id === id;
      buttons[t.id].style.background = on ? 'rgba(243,207,122,.25)' : 'rgba(0,0,0,.35)';
      buttons[t.id].style.borderColor = on ? 'var(--mm-gold)' : 'var(--mm-bronze)';
      buttons[t.id].style.color = on ? 'var(--mm-gold)' : 'var(--mm-text)';
    }
    refreshSize(); refreshHelp();
  }

  function clearPreview() {
    ghost.setPreview(null, false); ghost.setHighlight(null);
    lastEval = null; lastKey = '';
    tip.style.display = 'none';
  }

  /* ---- picking the model ------------------------------------------------ */
  const ray = new THREE.Raycaster();
  const _ndc = new THREE.Vector2(), _n = new THREE.Vector3(), _p = new THREE.Vector3();
  let meshes = [], meshFor = null, meshCount = -1;

  function nestMeshes() {
    const nest = getFoundedNest();
    if (!nest) return [];
    if (nest !== meshFor || nest.group.children.length !== meshCount) {
      meshes = [];
      nest.group.traverse((o) => { if (o.isMesh && CAVITY.test(o.name) && !o.userData.macroGhost) meshes.push(o); });
      meshFor = nest; meshCount = nest.group.children.length;
    }
    return meshes;
  }

  function setRay(px, py) {
    const w = domElement.clientWidth || window.innerWidth, h = domElement.clientHeight || window.innerHeight;
    _ndc.set((px / w) * 2 - 1, -(py / h) * 2 + 1);
    ray.setFromCamera(_ndc, camera);
  }

  /** The point the cursor means, with the depth of the surface under it. */
  function surfaceAt(px, py) {
    setRay(px, py);
    const nest = getFoundedNest();
    if (!nest) return null;
    const hits = ray.intersectObjects(nestMeshes(), false);
    const d = ray.ray.direction;
    for (const h of hits) {
      if (!h.face) continue;
      _n.copy(h.face.normal).transformDirection(h.object.matrixWorld);
      if (_n.dot(d) >= 0) continue;                 // the far side of a shell: not what is drawn
      const y = h.point.y;
      level = _n.y > 0.6 ? y : (floorAt(h.point.x, h.point.z, y) ?? y);
      return { x: h.point.x, y, z: h.point.z, level, hit: true };
    }
    if (level === null) level = nest.floorY ?? nest.chamber.y ?? 0;
    const L = level + depthOff;
    if (Math.abs(d.y) < 1e-4) return null;
    const t = (L - ray.ray.origin.y) / d.y;
    if (t <= 0) return null;
    _p.copy(ray.ray.origin).addScaledVector(d, t);
    return { x: _p.x, y: L, z: _p.z, level, hit: false };
  }

  const brushPoint = (s, r) => [s.x, s.level + depthOff + r * 0.55, s.z];

  function makeBrush(a, b, kind) {
    const r = size[kind];
    const brush = { center: brushPoint(a, r), radius: r, floor: true };
    if (b) brush.end = brushPoint(b, r);
    return brush;
  }

  /* ---- the ghost under the cursor, and its verdict ---------------------- */
  function preview(a, b, kind) {
    const brush = makeBrush(a, b, kind);
    const key = `${kind}|${brush.center.map((v) => Math.round(v * 2)).join(',')}|${brush.end ? brush.end.map((v) => Math.round(v * 2)).join(',') : ''}|${brush.radius}|${plans.count()}`;
    if (key !== lastKey) {
      lastKey = key;
      lastEval = { brush, kind, ev: plans.evaluate(brush, kind) };
      ghost.setPreview(lastEval.ev.cells, lastEval.ev.ok);
    }
    return lastEval;
  }

  function costText(ev) {
    const crew = diggerCount();
    return `<div>${ev.n} cellules · <b>${ev.gratis ? 'gratuit (test)' : `${ev.cost} nourriture`}</b>${ev.gratis ? '' : ` (payée en creusant)`}</div>`
      + `<div>Effectif requis : <b>${ev.crew}</b> fouisseuses `
      + `<span style="color:${crew >= ev.crew ? '#9fe0a0' : '#ffb07a'}">(vous en avez ${crew})</span></div>`;
  }

  function showTip(html, x, y) {
    tip.innerHTML = html;
    tip.style.display = 'block';
    const tw = tip.offsetWidth || 240, th = tip.offsetHeight || 70;
    const lx = x + 18 + tw > window.innerWidth - 8 ? x - 18 - tw : x + 18;
    tip.style.left = `${Math.max(8, lx)}px`;
    tip.style.top = `${Math.min(Math.max(8, y + 14), window.innerHeight - th - 8)}px`;
  }

  function planTip(p, extra = '') {
    const r = plans.rows(crewAt).find((q) => q.id === p.id);
    const crewNow = crewAt(p.id);
    const pct = Math.round((r ? r.progress : 0) * 100);
    return `<div class="mm-title">${p.label}${p.priority ? ' ★' : ''}</div>`
      + `<div>${r && r.waiting ? 'en attente du chantier voisin' : `avancement <b>${pct} %</b>`}</div>`
      + `<div>${crewNow} / ${p.crew} fouisseuses · ${p.n0} cellules</div>`
      + (r && r.starved ? '<div style="color:#ff9d8a">plus de nourriture : le chantier est à l’arrêt</div>' : '')
      + (r && r.spoil > 0 ? `<div>déblais au front : <b>${r.spoil}</b>${r.spoil > 3 ? ' (le front ralentit)' : ''}</div>` : '') + extra;
  }

  function hover() {
    if (macro.mode !== 'macro') return;
    const now = performance.now();
    if (now - lastHover < 60) return;
    lastHover = now;
    if (mx < 0) return;
    if (toolId === 'select' || toolId === 'cancel' || toolId === 'prio') {
      setRay(mx, my);
      const p = plans.pickPlan(ray.ray.origin, ray.ray.direction);
      ghost.setHighlight(p && toolId !== 'select' ? p.id : null);
      if (p) {
        const extra = toolId === 'cancel'
          ? `<div style="color:#ff9d8a">clic — annuler${p.gratis ? '' : ` (payé au fur et à mesure : ${p.paid} / ${p.cost} déjà dépensées, non rendues)`}</div>`
          : toolId === 'prio' ? `<div style="color:var(--mm-gold)">clic — ${p.priority ? 'retirer la priorité' : 'prioritaire'}</div>` : '';
        showTip(planTip(p, extra), mx, my);
      } else tip.style.display = 'none';
      return;
    }
    const cur2 = surfaceAt(mx, my);
    cur = cur2;
    if (!cur2) { clearPreview(); return; }
    const pv = preview(start || cur2, start ? cur2 : null, toolId);
    const title = toolId === 'tunnel' ? (start ? 'Tunnel — choisissez l’arrivée' : 'Tunnel — choisissez le départ')
      : `Salle Ø ${(size.room * 2).toFixed(0)}`;
    showTip(`<div class="mm-title">${title}</div>${costText(pv.ev)}`
      + (pv.ev.ok ? '<div style="color:#9fe0a0">clic — valider le chantier</div>'
        : `<div style="color:#ff8a7a">✕ ${pv.ev.reason}</div>`), mx, my);
  }

  function place(a, b, kind) {
    const pv = (a && preview(a, b, kind)) || null;
    if (!pv) return false;
    const res = plans.commit(pv.brush, kind);
    if (!res.ok) { say(res.reason, true); return false; }
    say(`Chantier posé : ${res.plan.label} · ${res.eval.crew} fouisseuses requises`);
    lastKey = '';
    ghost.setPreview(null, false);
    start = null;
    return true;
  }

  function click() {
    if (macro.mode !== 'macro') return;
    if (toolId === 'tunnel') {
      const s = surfaceAt(mx, my);
      if (!s) return;
      if (!start) { start = { x: s.x, y: s.y, z: s.z, level: s.level }; lastKey = ''; }
      else place(start, s, 'tunnel');
    } else if (toolId === 'room') {
      const s = surfaceAt(mx, my);
      if (s) place(s, null, 'room');
    } else if (toolId === 'cancel' || toolId === 'prio') {
      setRay(mx, my);
      const p = plans.pickPlan(ray.ray.origin, ray.ray.direction);
      if (!p) return;
      if (toolId === 'cancel') { plans.cancel(p.id); say(`Chantier annulé : ${p.label}`); }
      else say(`${p.label} : ${plans.togglePriority(p.id) ? 'prioritaire' : 'priorité retirée'}`);
      ghost.setHighlight(null);
      tip.style.display = 'none';
    }
  }

  function paintMove(sx, sy, ex, ey) {
    if (toolId !== 'tunnel' && toolId !== 'room') return;
    const a = surfaceAt(sx, sy), b = surfaceAt(ex, ey);
    if (a && b) { mx = ex; my = ey; preview(a, b, toolId); }
  }
  function paint(sx, sy, ex, ey) {
    if (toolId !== 'tunnel' && toolId !== 'room') return;
    const a = surfaceAt(sx, sy), b = surfaceAt(ex, ey);
    if (a && b) place(a, b, toolId);
  }

  /* ---- the tool objects macroMode.js drives ------------------------------ */
  const shared = {
    key(e) {
      const hit = TOOLS.find((t) => `Key${t.key}` === e.code);
      if (hit && !e.repeat && !e.ctrlKey && !e.altKey) { setToolId(hit.id); return true; }
      if (e.code === 'PageUp' || e.code === 'PageDown') {
        depthOff += e.code === 'PageUp' ? DEPTH_STEP : -DEPTH_STEP;
        lastKey = ''; refreshHelp(); e.preventDefault();
        return true;
      }
      if (e.code === 'Escape') {
        if (start) { start = null; clearPreview(); return true; }
        if (toolId !== 'select') { setToolId('select'); return true; }
      }
      return false;
    },
    wheel(e) {
      if (!e.altKey || (toolId !== 'tunnel' && toolId !== 'room')) return false;
      const r = toolId === 'tunnel' ? TUNNEL_R : ROOM_R;
      size[toolId] = Math.min(r.max, Math.max(r.min, size[toolId] + (e.deltaY < 0 ? 0.5 : -0.5)));
      refreshSize(); lastKey = '';
      return true;
    },
    paint, paintMove,
    noRoomTip: true,
    noAntPick: true,
    enter() {},
    leave() { start = null; clearPreview(); },
  };
  const tool = { name: 'plan', ...shared, hover, click };
  /* 'Choisir' keeps macroMode's room selection, and adds the ghost tooltip */
  const selectDelegate = {
    ...shared, name: 'select', noRoomTip: false, noAntPick: false, paint: undefined, paintMove: undefined,
    hover(p) { macro.selectTool.hover(p); hover(); },
    click(p) { macro.selectTool.click(p); },
  };

  window.addEventListener('pointermove', (e) => { mx = e.clientX; my = e.clientY; }, { capture: true });
  domElement.addEventListener('pointerup', (e) => { mx = e.clientX; my = e.clientY; }, { capture: true });

  let wasOn = false;
  toolId = '';                       // force the first setToolId to paint the bar
  setToolId('select');

  return {
    tool: () => toolId,
    setTool: setToolId,
    /** harness: the last verdict shown under the cursor */
    lastVerdict: () => (lastEval ? { kind: lastEval.kind, ...lastEval.ev, cells: lastEval.ev.n, brush: lastEval.brush, cur, level } : null),
    depth: () => depthOff,
    sizes: () => ({ ...size }),
    /** once a frame */
    update() {
      const on = macro.mode === 'macro' && macro.founded();
      if (on !== wasOn) {
        wasOn = on;
        bar.style.display = on ? 'block' : 'none';
        if (!on) { setToolId('select'); clearPreview(); note.style.display = 'none'; }
        else macro.setTool(selectDelegate);
      }
    },
  };
}

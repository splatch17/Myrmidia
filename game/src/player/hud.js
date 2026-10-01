/* ==========================================================================
   The HUD — created from JS rather than added to game/index.html so the whole
   player feature stays inside player/**.

   Round 17 gave it a look (player/uiTheme.js: the MMO register the porter
   asked for). What it SAYS did not change, and neither did where to find it:
   every slot keeps the id the old prototype gave it, and the harnesses read
   them by id and match their words.
     #unitframe  — who is being played: portrait, name, the pile (NEW, r17)
     #stock      — what she carries and what is on the pile (harvest.js)
     #objective  — the standing goal of the prologue (interaction.js)
     #siteinfo   — what the ground under the queen is worth (siteQuality.js)
     #sitedetail — the factors behind that verdict
     #prompt     — the current contextual interaction (E: climb / harvest /
                   drop / found), on a plate with its key
     #hold       — a cast bar that fills while a held action runs
     #event      — a short-lived line for what just happened, as zone text
     #controls   — the key bindings, open at first launch, toggled with H
     #digdial    — the circular gauge on the dig face (#51)
     #queenhud   — bottom-left: the queen's health bar and the caste roster
                   (#75) — see setQueenHp()/setCastes() below

   The controls panel is not decoration. The player's report on an earlier
   build was that they could not tell what the game wanted from them: nothing
   on screen had ever said that E exists, that it must be *held* for some
   actions, or that the mouse turns the camera. It opens by itself the first
   time and closes on the first successful harvest — a panel the player must
   dismiss to start playing is a toll, and one still up after they have
   clearly understood is noise.
   ========================================================================== */

import { ensureUiTheme, keycap, portraitSvg } from './uiTheme.js';

/* #91: the dig ring is anchored on a dig face, which can sit behind a HUD
   panel (it covered the queen's menu). The panels are the frame of the screen
   and the ring is the thing that moves: if its square would touch one, it
   slides to the nearest free spot (right/left/up/down of the panel), and
   stays inside the viewport. */
const PANEL_IDS = ['unitframe', 'stock', 'tracker', 'queenmenu', 'queenhud', 'controls', 'plantools',
  'macrolegend', 'promptwrap', 'hold'];
export function visiblePanelRects() {
  const out = [];
  for (const id of PANEL_IDS) {
    const e = document.getElementById(id);
    if (!e || e.style.display === 'none') continue;
    const r = e.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) continue;
    if (getComputedStyle(e).visibility === 'hidden' || getComputedStyle(e).opacity === '0') continue;
    out.push(r);
  }
  return out;
}
function hitsAny(cx, cy, h, rects) {
  for (const r of rects) if (cx + h > r.left && cx - h < r.right && cy + h > r.top && cy - h < r.bottom) return r;
  return null;
}
export function placeClearOfPanels(cx, cy, h) {
  const W = window.innerWidth, H = window.innerHeight;
  const rects = visiblePanelRects();
  const x0 = Math.max(h, Math.min(W - h, cx)), y0 = Math.max(h, Math.min(H - h, cy));
  if (!hitsAny(x0, y0, h, rects)) return [x0, y0];
  let best = null, bestD = Infinity;
  for (const r of rects) {
    for (const [x, y] of [[r.right + h + 4, y0], [r.left - h - 4, y0], [x0, r.top - h - 4], [x0, r.bottom + h + 4]]) {
      if (x < h || x > W - h || y < h || y > H - h || hitsAny(x, y, h, rects)) continue;
      const d = Math.hypot(x - x0, y - y0);
      if (d < bestD) { bestD = d; best = [x, y]; }
    }
  }
  if (best) return best;
  // boxed in on every side: bottom centre, above the bar, is always free
  return [W / 2, H - h - 130];
}

function el(id, cls, parent = document.body) {
  const d = document.createElement('div');
  d.id = id;
  if (cls) d.className = cls;
  parent.appendChild(d);
  return d;
}

/** No-op stand-in when there is no DOM (a node harness importing the
 *  controller), so callers never have to guard. */
function nullHud() {
  return {
    setSite() {}, setPrompt() {}, setObjective() {}, setStock() {}, setEvent() {},
    setHold() {}, setDig() {}, setEventNow() {}, setUnit() {}, setControlHint() {},
    setQueenHp() {}, setQueenReserve() {}, setCastes() {}, setMacro() {},
    toggleControls() {}, closeControls() {}, dispose() {},
  };
}

/* Written here rather than read from input.js because these are the *player's*
   words for the keys, not the engine's codes: input.js accepts WASD and ZQSD
   and the arrows for the same movement, and listing three alternatives on
   three lines would be worse than naming the one a French keyboard has under
   its fingers. Alternatives are split on ' / ' into separate key-caps. */
const CONTROLS = [
  ['ZQSD / WASD', 'se déplacer'],
  ['Maj', 'courir'],
  ['Souris', 'tourner la caméra (glisser)'],
  ['Molette', 'reculer / rapprocher la vue'],
  ['E', 'action — appui court, ou maintenu'],
  ['5 / 6', 'prochaine ponte : ouvrières / fouisseuses'],
  ['Tab', 'changer de fourmi (Maj+Tab : la précédente)'],
  ['Clic', 'prendre le contrôle d’une fourmi'],
  ['C', 'gestion de la reine (à distance aussi)'],
  ['M', 'vue d’ensemble du nid (maquette)'],
  ['P', 'graphismes et cadence de test'],
  ['H', 'afficher / masquer cette aide'],
];

const cap = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : '');

export function createHud() {
  if (typeof document === 'undefined') return nullHud();
  ensureUiTheme();

  /* ---- unit frame (top left) ------------------------------------------- */
  const unit = el('unitframe', 'mm');
  const portrait = document.createElement('div');
  portrait.className = 'mm-portrait';
  const body = document.createElement('div');
  body.className = 'mm-frame mm-unit-body';
  body.innerHTML = '<div class="mm-unit-name"></div>'
    + '<div class="mm-bar"><i></i><span></span></div>'
    + '<div class="mm-chips"></div>';
  unit.append(portrait, body);
  const uName = body.querySelector('.mm-unit-name');
  // #36: under the stock line, always: how to leave this ant (a sibling, so
  // the unit frame keeps its own height whichever caste it shows)
  const uHint = document.createElement('div');
  uHint.id = 'controlhint';
  uHint.className = 'mm';
  uHint.style.cssText = 'left:20px;top:106px;font-size:11px;color:var(--mm-dim);letter-spacing:.02em;';
  document.body.appendChild(uHint);
  const uBar = body.querySelector('.mm-bar');
  const uBarFill = uBar.querySelector('i');
  const uBarText = uBar.querySelector('span');
  const uChips = body.querySelector('.mm-chips');
  unit.style.display = 'none';
  const stock = el('stock', 'mm');

  /* ---- objective tracker (top right) ----------------------------------- */
  const tracker = el('tracker', 'mm');
  tracker.innerHTML = '<div class="mm-track-h">Objectif</div>';
  const objective = el('objective', '', tracker);
  const siteHead = document.createElement('div');
  siteHead.className = 'mm-track-h mm-track-sub';
  siteHead.textContent = 'Le site';
  tracker.appendChild(siteHead);
  const site = el('siteinfo', '', tracker);
  const detail = el('sitedetail', '', tracker);

  /* ---- the action: a plate with its key, and a cast bar under it --------
     The key-cap is a SIBLING of #prompt, not inside it, so #prompt's text is
     exactly the sentence interaction.js wrote — which is what the harnesses
     match against. */
  const promptWrap = el('promptwrap', 'mm mm-frame mm-off');
  promptWrap.innerHTML = keycap('E');
  const prompt = el('prompt', '', promptWrap);

  const holdOuter = el('hold', 'mm mm-frame');
  holdOuter.innerHTML = '<div class="mm-cast-track"><div class="mm-cast-fill"></div></div>';
  const holdFill = holdOuter.querySelector('.mm-cast-fill');
  holdOuter.style.display = 'none';

  const event = el('event', 'mm');

  /* ---- key bindings ----------------------------------------------------- */
  const controls = el('controls', 'mm mm-frame');
  controls.innerHTML = '<div class="mm-title" style="margin-bottom:3px">Commandes</div>'
    + CONTROLS.map(([k, what]) =>
        `<div class="mm-row"><span class="mm-keys">${k.split(' / ').map(keycap).join('<i class="mm-or">/</i>')}</span>`
        + `<span class="mm-what">${what}</span></div>`).join('');
  let controlsOpen = true;

  /* ---- the dig gauge (#51) ----------------------------------------------
     A ring, drawn AT the dig face rather than in a corner of the screen.

     The straight bar this replaces was pinned to the bottom of the viewport
     while the work it described happened somewhere the player could not see —
     you were told a percentage and never told where to look. The porter asked
     for the register modern games use for exactly this: a circular cast bar
     over the thing being worked.

     SVG rather than canvas: one element, no per-frame raster, and the ring is
     a single stroke-dashoffset write per frame. It is positioned by a screen
     point the caller projects, so this file never learns what a camera is.
     Round 17 gilded it — a bezel, a gradient fill, the title face for the
     number — without touching a single id the harness reads. */
  const DIAL = 108;
  const R_RING = 40;
  const CIRC = 2 * Math.PI * R_RING;
  const dial = el('digdial', 'mm');
  dial.style.cssText = 'left:0;top:0;width:108px;height:108px;transform-origin:50% 50%;';
  dial.innerHTML = `<svg viewBox="0 0 ${DIAL} ${DIAL}" width="100%" height="100%">
    <defs>
      <linearGradient id="dialbezel" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#f3cf7a"/><stop offset="0.5" stop-color="#8a6429"/><stop offset="1" stop-color="#4a3314"/>
      </linearGradient>
      <linearGradient id="dialgrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#ffe29a"/><stop offset="1" stop-color="#e88a2a"/>
      </linearGradient>
    </defs>
    <circle cx="54" cy="54" r="49" fill="none" stroke="url(#dialbezel)" stroke-width="3"/>
    <circle cx="54" cy="54" r="${R_RING + 5}" fill="rgba(14,9,4,0.78)" stroke="#000" stroke-width="1.5"/>
    <circle id="dialtrack" cx="54" cy="54" r="${R_RING}" fill="none"
            stroke="rgba(255,214,150,0.14)" stroke-width="7"/>
    <circle id="dialfill" cx="54" cy="54" r="${R_RING}" fill="none"
            stroke="url(#dialgrad)" stroke-width="7" stroke-linecap="round"
            transform="rotate(-90 54 54)"
            stroke-dasharray="${CIRC}" stroke-dashoffset="${CIRC}"/>
    <circle id="dialpulse" cx="54" cy="54" r="${R_RING}" fill="none"
            stroke="#ffe6b0" stroke-width="4" opacity="0"/>
    <text id="dialpct" x="54" y="51" text-anchor="middle" dominant-baseline="middle"
          style="font:700 20px var(--mm-title)" fill="#f3cf7a">0%</text>
    <text id="dialcrew" x="54" y="69" text-anchor="middle" dominant-baseline="middle"
          style="font:600 9.5px var(--mm-body)" fill="#e6d3ab" opacity="0.85"></text>
  </svg>`;
  dial.style.display = 'none';
  const dialFill = dial.querySelector('#dialfill');
  const dialPulse = dial.querySelector('#dialpulse');
  const dialPct = dial.querySelector('#dialpct');
  const dialCrew = dial.querySelector('#dialcrew');
  let lastPct = -1, lastCrewText = null, pulseT = 0, wasFull = false;

  /* ---- bottom-left: queen health + caste roster (#75) -------------------
     One frame, always on screen — not gated on which ant is controlled
     (design/castes-et-micro-macro.md 3: the queen's vitals are hers, not
     "the player's"). The caste squares are built lazily, one DOM node per
     id the caller ever hands in, and updated in place after that: the
     roster is fixed for a session (PRODUCED_CASTES, avatar.js) so this
     never has to tear anything down, only the dig ring/queen bar are
     re-drawn every frame. */
  const queenhud = el('queenhud', 'mm');
  queenhud.innerHTML = '<div class="mm-frame mm-qhp">'
    + '<div class="mm-qhp-name">LA REINE</div>'
    + '<div class="mm-bar mm-qhp-bar"><i></i><span></span></div>'
    + '<div class="mm-qhp-name mm-qres-name">RÉSERVES</div>'
    + '<div class="mm-bar mm-qhp-bar mm-qres-bar"><i></i><span></span></div>'
    + '</div>'
    + '<div class="mm-frame mm-casterow"></div>';
  const qhpFill = queenhud.querySelector('.mm-qhp-bar > i');
  const qhpText = queenhud.querySelector('.mm-qhp-bar > span');
  const qresBar = queenhud.querySelector('.mm-qres-bar');
  const qresFill = qresBar.querySelector('i');
  const qresText = qresBar.querySelector('span');
  let lastQueenResKey = null;
  const casterow = queenhud.querySelector('.mm-casterow');
  const casteEls = new Map();     // id -> { root, ring, ico, cap, ...cache }
  const CASTE_RING_R = 15, CASTE_RING_C = 2 * Math.PI * CASTE_RING_R;

  /**
   * A <button>, not a <div> — round 2 of #75 makes these clickable: picking
   * the next clutch's caste the same way keys 5/6 do (player/index.js's
   * selectCaste(), handed in per-frame as `onSelect` since `.mm` panels are
   * rebuilt by data, not by identity). `entry.onSelect`/`.id`/`.clickable`
   * are read INSIDE the listener rather than captured at construction time,
   * because the square is built once (casteEls, above) and reused for the
   * rest of the session while what it may do changes frame to frame (locked
   * -> unlocked, or `manages` flipping the day #36 lets the player leave the
   * queen).
   *
   * Both `pointerdown` and `click` stop propagation: the button is not a
   * descendant of the canvas input.js listens on, so nothing would reach it
   * either way, but a click meant for a caste square must never fall through
   * to a camera-orbit drag or a pointer-lock request if that ever changes.
   */
  function buildCasteSquare() {
    const root = document.createElement('button');
    root.type = 'button';
    root.className = 'mm-caste-sq';
    root.innerHTML = `<svg class="mm-caste-ring" viewBox="0 0 32 32" width="32" height="32">
        <circle cx="16" cy="16" r="${CASTE_RING_R}" fill="none" stroke="rgba(255,214,150,.16)" stroke-width="2.4"/>
        <circle class="mm-caste-ringfill" cx="16" cy="16" r="${CASTE_RING_R}" fill="none"
                stroke="#f3cf7a" stroke-width="2.4" stroke-linecap="round" transform="rotate(-90 16 16)"
                stroke-dasharray="${CASTE_RING_C}" stroke-dashoffset="${CASTE_RING_C}"/>
      </svg><span class="mm-caste-ico"></span><span class="mm-caste-count"></span>`
      + `<div class="mm-caste-cap"></div>`;
    root.querySelector('.mm-caste-ring').style.display = 'none';
    const entry = {
      root,
      ring: root.querySelector('.mm-caste-ring'),
      ringFill: root.querySelector('.mm-caste-ringfill'),
      ico: root.querySelector('.mm-caste-ico'),
      count: root.querySelector('.mm-caste-count'),
      cap: root.querySelector('.mm-caste-cap'),
      state: null, icoText: null, capText: null, countText: null,
      selected: null, clickable: null, id: null, onSelect: null,
    };
    root.addEventListener('pointerdown', (e) => e.stopPropagation());
    root.addEventListener('click', (e) => {
      e.stopPropagation();
      if (entry.clickable && entry.onSelect) entry.onSelect(entry.id);
    });
    return entry;
  }
  let lastQueenHpKey = null;

  /* ---- macro mode (#34): legend + what hides ---------------------------- */
  const macroLegend = el('macrolegend', 'mm mm-frame');
  macroLegend.style.cssText = 'display:none;left:50%;bottom:16px;transform:translateX(-50%);'
    + 'padding:5px 14px;font-size:12px;color:var(--mm-dim);white-space:nowrap;';
  macroLegend.innerHTML = '<b style="color:var(--mm-gold)">M</b> — revenir · glisser — tourner · '
    + 'molette — zoom · clic droit / Maj — déplacer · clic — choisir une salle';
  const macroStyle = document.createElement('style');
  macroStyle.textContent = 'body.mm-macro #controls, body.mm-macro #promptwrap, body.mm-macro #hold,'
    + ' body.mm-macro #digdial, body.mm-macro #tracker { display: none !important; }';
  document.head.appendChild(macroStyle);

  let lastSite = null, lastDetail = null, lastPrompt = null;
  let lastObjective = null, lastStock = null, lastEvent = null;
  let lastUnitId = null, lastUnitKey = null;

  // every setter writes only on change: these run every frame, and
  // reassigning textContent unconditionally dirties layout for nothing
  const setText = (node, text, prev) => {
    if (text === prev) return prev;
    node.textContent = text || '';
    return text;
  };

  return {
    /** headline + factors; `ok` false tints it (a refusal reads at a glance,
     *  before the sentence is read). */
    setSite(headline, factors, ok) {
      if (headline !== lastSite) {
        site.textContent = headline;
        site.style.color = ok ? '#ecdcb8' : '#e58a6a';
        lastSite = headline;
      }
      if (factors !== lastDetail) { detail.textContent = factors; lastDetail = factors; }
    },
    setPrompt(text) {
      if (text === lastPrompt) return;
      lastPrompt = setText(prompt, text, lastPrompt);
      promptWrap.classList.toggle('mm-off', !text);
    },

    /**
     * The unit frame: who is being played, and — for a caste that manages a
     * colony — the one number that says when she can lay next (the pile
     * against the price of a clutch) and the headcount.
     *
     * Keyed on the PROFILE, never on "the player": design/castes-et-micro-
     * macro.md 3 says the HUD depends on who is controlled, and a forager
     * taken over by #36 gets her own face and no colony bar, with no change
     * here. `s` is the same colony reading the queen's panel is handed.
     */
    setControlHint(text) { if (text !== uHint.textContent) uHint.textContent = text || ''; },
    setUnit(profile, s, tag = '') {
      if (!profile) {
        if (unit.style.display !== 'none') unit.style.display = 'none';
        return;
      }
      if (unit.style.display !== 'flex') unit.style.display = 'flex';
      /* `tag` tells two ants of one caste apart ("n° 3"): the key has to
         carry it, or a Tab between two workers would leave the old name up. */
      const idKey = `${profile.id}|${tag}`;
      if (idKey !== lastUnitId) {
        if (!lastUnitId || lastUnitId.split('|')[0] !== profile.id) portrait.innerHTML = portraitSvg(profile);
        portrait.classList.toggle('mm-elite', !!profile.manages);
        uName.textContent = cap(profile.label) + (tag ? ` ${tag}` : '');
        lastUnitId = idKey;
        lastUnitKey = null;
      }
      const colonyShown = !!(s && profile.manages);
      const k = colonyShown
        ? `${s.reserve}|${s.cost}|${s.counts.worker}|${s.counts.digger}|${s.counts.eggs}|${s.food}|${s.spoilLying}|${s.spoilOut}`
        : 'none';
      if (k === lastUnitKey) return;
      lastUnitKey = k;
      uBar.style.display = colonyShown ? 'block' : 'none';
      uChips.style.display = colonyShown ? 'flex' : 'none';
      if (!colonyShown) return;
      const p = s.cost > 0 ? Math.min(1, s.reserve / s.cost) : 0;
      uBarFill.style.width = `${(p * 100).toFixed(1)}%`;
      uBarText.textContent = `Réserve ${s.reserve} / ${s.cost}`;
      uChips.innerHTML = `<span><b>${s.counts.worker}</b> ouvrières</span>`
        + `<span><b>${s.counts.digger}</b> fouisseuses</span>`
        + `<span><b>${s.counts.eggs}</b> œufs</span>`
        + (s.food === null ? '' : `<span id="foodchip"><b>${s.food}</b> nourriture</span>`)
        + (s.spoilLying + s.spoilOut > 0 ? `<span id="spoilchip"><b>${s.spoilLying}</b> déblais au front · <b>${s.spoilOut}</b> au tas</span>` : '');
    },

    /**
     * Draw the dig gauge. `g` is null when there is nothing being dug, else
     * { progress, diggers, required, sx, sy, scale, visible } — the caller
     * does the projection, so this file stays a DOM file and knows no
     * geometry. `required` is the minimum crew (#76): below it the face is
     * not progressing at all, and the text below the ring says so.
     *
     * It shows at zero as soon as there is a face, dimmed and empty: the
     * player has to be able to learn where the work happens BEFORE laying
     * anything, or the first clutch of fouisseuses is a guess.
     */
    setDig(g, dt = 0) {
      const on = !!g && g.visible;
      if (on !== (dial.style.display === 'block')) {
        dial.style.display = on ? 'block' : 'none';
      }
      if (!on) { wasFull = false; return; }

      const p = Math.max(0, Math.min(1, g.progress));
      dialFill.style.strokeDashoffset = `${CIRC * (1 - p)}`;
      dialFill.style.opacity = g.diggers > 0 ? '1' : '0.5';

      const pct = Math.round(p * 100);
      if (pct !== lastPct) { dialPct.textContent = `${pct}%`; lastPct = pct; }
      /* #76: below the required crew the face is not slow, it is WAITING —
         and the gauge has to say why, in the crew's own numbers, rather than
         let a stalled ring at 0% read as a bug. That sentence does not fit
         the ring on one line the way "N au front" always has, so it is the
         one case drawn as two short tspans instead of plain text. */
      const req = g.required || 1;
      const short = g.diggers > 0 && g.diggers < req;
      const crewText = g.note ? g.note
        : g.diggers === 0
        ? 'personne ne creuse'
        : short
          ? [`il faut ${req} fouisseuses,`, `il y en a ${g.diggers}`]
          : `${g.diggers} au front`;
      const crewKey = Array.isArray(crewText) ? crewText.join('|') : crewText;
      if (crewKey !== lastCrewText) {
        lastCrewText = crewKey;
        if (Array.isArray(crewText)) {
          dialCrew.innerHTML = `<tspan x="54" dy="-0.45em" style="font-size:8px">${crewText[0]}</tspan>`
            + `<tspan x="54" dy="1.05em" style="font-size:8px">${crewText[1]}</tspan>`;
        } else {
          dialCrew.textContent = crewText;
        }
      }

      /* Completion pulse: one ring expanding out of the dial. It is the only
         thing that says "look here, it just opened" at the moment the room
         appears, and the room appears off to one side of the ring. */
      if (p >= 1 && !wasFull) { wasFull = true; pulseT = 0.85; }
      if (p < 1) wasFull = false;
      if (pulseT > 0) {
        pulseT = Math.max(0, pulseT - dt);
        const k = 1 - pulseT / 0.85;
        dialPulse.setAttribute('r', `${R_RING + k * 26}`);
        dialPulse.style.opacity = `${(1 - k) * 0.9}`;
      } else if (dialPulse.style.opacity !== '0') {
        dialPulse.style.opacity = '0';
      }

      /* Placed by its centre, and scaled with distance so it reads as being
         in the world rather than pasted on it — but clamped, because a ring
         that fills the screen when she stands on top of the face is worse
         than one that does not. */
      const k = Math.max(0.55, Math.min(1.7, g.scale));
      const at = placeClearOfPanels(g.sx, g.sy, DIAL * k * 0.5 + 2);
      dial.style.transform = `translate(${at[0] - 54}px, ${at[1] - 54}px) scale(${k})`;
    },

    /** An event line that replaces whatever is there, for a player action
     *  rather than a world event. */
    setEventNow(text) { lastEvent = setText(event, text, null); },
    /** the standing goal of the prologue */
    setObjective(text) { lastObjective = setText(objective, text, lastObjective); },
    /** carried item + what is on the pile */
    setStock(text) { lastStock = setText(stock, text, lastStock); },
    /** short-lived "what just happened" line */
    setEvent(text) { lastEvent = setText(event, text, lastEvent); },
    /** 0..1 while a held action runs, null when none is. */
    setHold(progress) {
      const on = progress !== null && progress > 0.001;
      if (on !== (holdOuter.style.display === 'block')) {
        holdOuter.style.display = on ? 'block' : 'none';
      }
      if (on) holdFill.style.width = `${Math.min(100, progress * 100)}%`;
    },
    /**
     * The queen's health, WoW/Dofus register: frame, fill, "cur / max". No
     * damage exists yet (#78) so this always reads full — the point is the
     * screen space and the shape being right before the mechanic is, so a
     * real hit only ever has to change the two numbers it is handed.
     */
    setQueenHp(hp) {
      if (!hp) return;
      const max = Math.max(1, hp.max || 1);
      const cur = Math.max(0, Math.min(max, hp.cur));
      const key = `${cur}|${max}`;
      if (key === lastQueenHpKey) return;
      lastQueenHpKey = key;
      qhpFill.style.width = `${((cur / max) * 100).toFixed(1)}%`;
      qhpText.textContent = `${Math.round(cur)} / ${Math.round(max)}`;
    },

    /**
     * #84: the queen's reserves, under her health. { cur, max } plus the
     * state it is in: 'low' pulses, 'settled' stops the clock (the bar then
     * says who feeds her instead of a number that no longer moves).
     */
    setQueenReserve(r, settled = false) {
      if (!r) return;
      const max = Math.max(1, r.max || 1);
      const cur = Math.max(0, Math.min(max, r.cur));
      const low = !settled && cur / max <= 0.25;
      const key = `${Math.round(cur)}|${max}|${low}|${settled}`;
      if (key === lastQueenResKey) return;
      lastQueenResKey = key;
      qresFill.style.width = `${((settled ? 1 : cur / max) * 100).toFixed(1)}%`;
      qresText.textContent = settled ? 'installée' : `${Math.round(cur)} / ${Math.round(max)}`;
      qresBar.classList.toggle('mm-low', low);
      qresBar.classList.toggle('mm-settled', !!settled);
    },

    /**
     * The caste roster: one square per produced caste (list handed in by
     * the caller, read off avatar.js's own PRODUCED_CASTES so this file
     * never hardcodes which castes exist). Each entry is
     *   { id, label, unlocked, progress, hint }
     * `progress` null/undefined means "not currently incubating" (state
     * "unlocked", plain letter); a number means "in production" (the ring
     * sweeps, the square shows a percentage); `unlocked` false means
     * "locked" (greyed, not clickable, the square's own caption becomes
     * `hint` — what unlocks it).
     *
     * Round 2 of #75: each entry also carries `selected` (is this the caste
     * the next clutch will be — a gold border/glow, independent of the
     * in-production ring, since a caste can be both mid-hatch AND picked for
     * the clutch after it) and `count` (how many of that caste the colony
     * already has, a small badge). `opts.manages` gates whether the square is
     * clickable at all: the panel's own rule (queenMenu.js) — never "is this
     * the player", only "does the controlled profile manage a colony" — a
     * locked square stays unclickable regardless of `manages`.
     */
    setCastes(list, opts) {
      if (!list) return;
      const manages = !!(opts && opts.manages);
      const onSelect = (opts && opts.onSelect) || null;
      for (const c of list) {
        let e = casteEls.get(c.id);
        if (!e) { e = buildCasteSquare(); casterow.appendChild(e.root); casteEls.set(c.id, e); }
        e.id = c.id;
        e.onSelect = onSelect;
        e.root.dataset.caste = c.id; // lets a harness/selector target a square by caste id
        const inProd = c.unlocked && c.progress !== null && c.progress !== undefined;
        const state = !c.unlocked ? 'locked' : (inProd ? 'inprod' : 'active');
        if (e.state !== state) {
          e.root.classList.toggle('mm-caste-locked', state === 'locked');
          e.root.classList.toggle('mm-caste-inprod', state === 'inprod');
          e.ring.style.display = state === 'inprod' ? '' : 'none';
          e.state = state;
        }
        if (state === 'inprod') {
          const p = Math.max(0, Math.min(1, c.progress));
          e.ringFill.style.strokeDashoffset = `${CASTE_RING_C * (1 - p)}`;
        }
        const icoText = state === 'inprod'
          ? `${Math.round(c.progress * 100)}%`
          : (c.label ? c.label.charAt(0).toUpperCase() : '?');
        if (e.icoText !== icoText) { e.ico.textContent = icoText; e.icoText = icoText; }
        const capText = state === 'locked' && c.hint ? c.hint : (c.label || '');
        if (e.capText !== capText) { e.cap.textContent = capText; e.capText = capText; }
        const countText = c.count > 0 ? String(c.count) : '';
        if (e.countText !== countText) {
          e.count.textContent = countText;
          e.count.style.display = countText ? 'flex' : 'none';
          e.countText = countText;
        }
        const selected = state !== 'locked' && !!c.selected;
        if (e.selected !== selected) {
          e.root.classList.toggle('mm-caste-selected', selected);
          e.selected = selected;
        }
        const clickable = manages && state !== 'locked';
        if (e.clickable !== clickable) {
          e.root.disabled = !clickable;
          e.clickable = clickable;
        }
      }
    },

    /* #34 macro mode: the play-only panels step aside (commands, prompt,
       cast bar, dig ring, objective tracker), the queen's bar and the caste
       squares stay, and a one-line legend says how to drive the model. One
       body class + !important, because every setter above writes an inline
       display and must keep doing so untouched underneath. */
    setMacro(on) {
      document.body.classList.toggle('mm-macro', !!on);
      macroLegend.style.display = on ? 'block' : 'none';
    },
    toggleControls() {
      controlsOpen = !controlsOpen;
      controls.style.display = controlsOpen ? 'block' : 'none';
    },
    /** Closed once the player has visibly understood, not on a keypress. */
    closeControls() {
      if (!controlsOpen) return;
      controlsOpen = false;
      controls.style.display = 'none';
    },
    dispose() {
      for (const n of [unit, uHint, stock, tracker, promptWrap, holdOuter, event, controls, dial, queenhud, macroLegend, macroStyle]) {
        if (n.parentNode) n.parentNode.removeChild(n);
      }
    },
  };
}

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

   The controls panel is not decoration. The player's report on an earlier
   build was that they could not tell what the game wanted from them: nothing
   on screen had ever said that E exists, that it must be *held* for some
   actions, or that the mouse turns the camera. It opens by itself the first
   time and closes on the first successful harvest — a panel the player must
   dismiss to start playing is a toll, and one still up after they have
   clearly understood is noise.
   ========================================================================== */

import { ensureUiTheme, keycap, portraitSvg } from './uiTheme.js';

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
    setHold() {}, setDig() {}, setEventNow() {}, setUnit() {},
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
  ['C', 'gestion de la reine'],
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
    setUnit(profile, s) {
      if (!profile) {
        if (unit.style.display !== 'none') unit.style.display = 'none';
        return;
      }
      if (unit.style.display !== 'flex') unit.style.display = 'flex';
      if (profile.id !== lastUnitId) {
        portrait.innerHTML = portraitSvg(profile);
        portrait.classList.toggle('mm-elite', !!profile.manages);
        uName.textContent = cap(profile.label);
        lastUnitId = profile.id;
        lastUnitKey = null;
      }
      const colonyShown = !!(s && profile.manages);
      const k = colonyShown
        ? `${s.reserve}|${s.cost}|${s.counts.worker}|${s.counts.digger}|${s.counts.eggs}`
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
        + `<span><b>${s.counts.eggs}</b> œufs</span>`;
    },

    /**
     * Draw the dig gauge. `g` is null when there is nothing being dug, else
     * { progress, diggers, sx, sy, scale, visible } — the caller does the
     * projection, so this file stays a DOM file and knows no geometry.
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
      const crewText = g.diggers > 0
        ? `${g.diggers} au front`
        : 'personne ne creuse';
      if (crewText !== lastCrewText) { dialCrew.textContent = crewText; lastCrewText = crewText; }

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
      dial.style.transform = `translate(${g.sx - 54}px, ${g.sy - 54}px) scale(${k})`;
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
      for (const n of [unit, stock, tracker, promptWrap, holdOuter, event, controls, dial]) {
        if (n.parentNode) n.parentNode.removeChild(n);
      }
    },
  };
}

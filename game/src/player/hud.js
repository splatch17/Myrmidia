/* ==========================================================================
   Minimal text HUD — two lines, created from JS rather than added to
   game/index.html so the whole player feature stays inside player/**.

   Deliberately unstyled beyond legibility: #32 asks for the site reading to
   be "un simple retour texte pour l'instant, pas de HUD travaillé, la DA
   passera après", and #29/#33 kept that instruction. So this is the plumbing
   (what is said, when, and where it is anchored), not the look. Slots, named
   after the old prototype's DOM ids so a later DA pass can move them into
   index.html untouched:
     #objective  — the standing goal of the prologue (interaction.js)
     #stock      — what she carries and what is on the pile (harvest.js)
     #siteinfo   — what the ground under the queen is worth (siteQuality.js)
     #sitedetail — the factors behind that verdict
     #prompt     — the current contextual interaction (E: climb / harvest /
                   drop / found), including the progress of a held action
     #event      — a short-lived line for what just happened (took a seed,
                   founded the colony)
     #hold       — a bar that fills while a held action runs, under #prompt
     #controls   — the key bindings, open at first launch, toggled with H

   The controls panel is not decoration. The player's report on the previous
   build was that they could not tell what the game wanted from them: nothing
   on screen had ever said that E exists, that it must be *held* for some
   actions, or that the mouse turns the camera. A prototype that has to be
   explained out of band is a prototype nobody can playtest.

   It opens by itself the first time and closes on the first successful
   harvest — a panel the player must dismiss to start playing is a toll, and
   one that is still up after they have clearly understood is noise.
   ========================================================================== */

const BASE = 'position:fixed;color:#e6d3ab;font:13px/1.5 monospace;pointer-events:none;'
  + 'text-shadow:0 1px 3px rgba(0,0,0,0.9);z-index:5;';

function el(id, style) {
  const d = document.createElement('div');
  d.id = id;
  d.style.cssText = BASE + style;
  document.body.appendChild(d);
  return d;
}

/** No-op stand-in when there is no DOM (a node harness importing the
 *  controller), so callers never have to guard. */
function nullHud() {
  return {
    setSite() {}, setPrompt() {}, setObjective() {}, setStock() {}, setEvent() {},
    setHold() {}, setDig() {}, setEventNow() {},
    toggleControls() {}, closeControls() {}, dispose() {},
  };
}

/* Written here rather than read from input.js because these are the *player's*
   words for the keys, not the engine's codes: input.js accepts WASD and ZQSD
   and the arrows for the same movement, and listing three alternatives on
   three lines would be worse than naming the one a French keyboard has under
   its fingers. */
const CONTROLS = [
  ['ZQSD / WASD', 'se déplacer'],
  ['Maj', 'courir'],
  ['Souris (glisser)', 'tourner la caméra'],
  ['Molette', 'reculer / rapprocher la vue'],
  ['E', 'action — appui court, ou maintenu quand la barre apparaît'],
  ['5 / 6', 'prochaine ponte : ouvrières / fouisseuses'],
  ['C', 'gestion de la reine — ponte, effectifs, chantiers'],
  ['P', 'graphismes — et la cadence de test (raccourcit les attentes)'],
  ['H', 'afficher / masquer cette aide'],
];

export function createHud() {
  if (typeof document === 'undefined') return nullHud();

  /* One left-hand column rather than the old prototype's centred #prompt:
     with an objective line long enough to explain itself, a centred prompt
     lands on top of it (seen on the first capture of the harvest loop, not
     reasoned about). Stacked lines cannot overlap whatever they say.

     The offsets are hand-packed rather than a flex column because the hold bar
     is 5px where every other slot is a 19px line, and it has to sit tight
     under the prompt it belongs to. First attempt put it at 98 and it landed
     on the objective line — again caught on a capture. */
  const event = el('event', 'left:12px;bottom:142px;color:#cfe0a8;');
  const prompt = el('prompt', 'left:12px;bottom:122px;font-size:14px;color:#ffe6b0;');
  const objective = el('objective', 'left:12px;bottom:88px;color:#f0dfb8;');
  const stock = el('stock', 'left:12px;bottom:70px;opacity:0.85;');
  const site = el('siteinfo', 'left:12px;bottom:52px;');
  const detail = el('sitedetail', 'left:12px;bottom:34px;opacity:0.62;font-size:12px;');

  /* The hold bar sits directly under the prompt that names the action, so the
     sentence and the progress are read as one thing. Two nested divs rather
     than a canvas: a width in percent is the whole animation. */
  const holdOuter = el('hold', 'left:12px;bottom:112px;width:190px;height:5px;'
    + 'background:rgba(0,0,0,0.45);border-radius:3px;overflow:hidden;');
  const holdFill = document.createElement('div');
  holdFill.style.cssText = 'height:100%;width:0%;background:#ffc46a;border-radius:3px;';
  holdOuter.appendChild(holdFill);
  holdOuter.style.display = 'none';

  const controls = el('controls', 'right:12px;top:12px;padding:10px 14px;'
    + 'background:rgba(12,10,8,0.62);border-radius:5px;line-height:1.8;');
  controls.innerHTML = '<div style="opacity:0.75;margin-bottom:4px">Commandes</div>'
    + CONTROLS.map(([k, what]) =>
        `<div><span style="color:#ffe6b0">${k}</span>`
        + `<span style="opacity:0.72"> — ${what}</span></div>`).join('');
  let controlsOpen = true;

  /* ---- the dig gauge (#51) ----------------------------------------------
     A ring, drawn AT the dig face rather than in a corner of the screen.

     The straight bar this replaces was pinned to the bottom of the viewport
     while the work it described happened somewhere the player could not see —
     you were told a percentage and never told where to look. The porter asked
     for the register modern games use for exactly this: a circular cast bar
     over the thing being worked.

     SVG rather than canvas: one element, no per-frame raster, and the ring is
     a single stroke-dasharray write per frame. It is positioned by a screen
     point the caller projects, so this file never learns what a camera is. */
  const DIAL = 108;                     // viewBox units; CSS scales it
  const R_RING = 42;
  const CIRC = 2 * Math.PI * R_RING;
  const dial = el('digdial', 'left:0;top:0;width:108px;height:108px;'
    + 'pointer-events:none;transform-origin:50% 50%;');
  dial.innerHTML = `<svg viewBox="0 0 ${DIAL} ${DIAL}" width="100%" height="100%">
    <circle cx="54" cy="54" r="${R_RING}" fill="rgba(10,7,4,0.45)" stroke="rgba(0,0,0,0.55)" stroke-width="7"/>
    <circle id="dialtrack" cx="54" cy="54" r="${R_RING}" fill="none"
            stroke="rgba(255,214,150,0.16)" stroke-width="7"/>
    <circle id="dialfill" cx="54" cy="54" r="${R_RING}" fill="none"
            stroke="#ffc46a" stroke-width="7" stroke-linecap="round"
            transform="rotate(-90 54 54)"
            stroke-dasharray="${CIRC}" stroke-dashoffset="${CIRC}"/>
    <circle id="dialpulse" cx="54" cy="54" r="${R_RING}" fill="none"
            stroke="#ffe6b0" stroke-width="4" opacity="0"/>
    <text id="dialpct" x="54" y="52" text-anchor="middle" dominant-baseline="middle"
          font-family="monospace" font-size="21" fill="#ffe6b0">0%</text>
    <text id="dialcrew" x="54" y="70" text-anchor="middle" dominant-baseline="middle"
          font-family="monospace" font-size="11" fill="#e6d3ab" opacity="0.8"></text>
  </svg>`;
  dial.style.display = 'none';
  const dialFill = dial.querySelector('#dialfill');
  const dialPulse = dial.querySelector('#dialpulse');
  const dialPct = dial.querySelector('#dialpct');
  const dialCrew = dial.querySelector('#dialcrew');
  let lastPct = -1, lastCrewText = null, pulseT = 0, wasFull = false;

  let lastSite = null, lastDetail = null, lastPrompt = null;
  let lastObjective = null, lastStock = null, lastEvent = null;

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
        site.style.color = ok ? '#e6d3ab' : '#d98b6a';
        lastSite = headline;
      }
      if (factors !== lastDetail) { detail.textContent = factors; lastDetail = factors; }
    },
    setPrompt(text) { lastPrompt = setText(prompt, text, lastPrompt); },
    /**
     * Draw the dig gauge. `g` is null when there is nothing being dug, else
     * { progress, diggers, sx, sy, scale, visible } — the caller does the
     * projection, so this file stays a DOM file and knows no geometry.
     *
     * It shows at zero as soon as there is a face, greyed and empty: the
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
      dialFill.style.stroke = g.diggers > 0 ? '#ffc46a' : 'rgba(255,196,106,0.45)';

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
      for (const n of [objective, stock, site, detail, prompt, event, holdOuter, controls, dial]) {
        if (n.parentNode) n.parentNode.removeChild(n);
      }
    },
  };
}

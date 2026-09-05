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
  ['5 / 6', 'prochaine ponte : ouvrières / creuseuses'],
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

  /* The dig gauge sits apart from the hold bar, centred and wider: a hold is
     something the player is doing right now with a finger on a key, and it
     belongs under the prompt that names it. This one is the colony working
     while the player does something else entirely, possibly on the other side
     of the map, and it has to be legible without being looked for. */
  const digWrap = el('digbar', 'left:50%;transform:translateX(-50%);bottom:18px;'
    + 'width:280px;text-align:center;');
  const digLabel = document.createElement('div');
  digLabel.style.cssText = 'font:12px/1.6 monospace;color:#e6d3ab;opacity:0.85;';
  const digOuter = document.createElement('div');
  digOuter.style.cssText = 'height:6px;background:rgba(0,0,0,0.5);border-radius:3px;overflow:hidden;';
  const digFill = document.createElement('div');
  digFill.style.cssText = 'height:100%;width:0%;background:#d8a24e;border-radius:3px;';
  digOuter.appendChild(digFill);
  digWrap.appendChild(digLabel);
  digWrap.appendChild(digOuter);
  digWrap.style.display = 'none';

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
    /** Progress of the first gallery, 0..1, or null when there is nothing to
     *  show. `caste` names what the next clutch will be, because the two are
     *  read together: the gauge is slow *because* of what was laid. */
    setDig(progress, caste) {
      const on = progress !== null && progress !== undefined;
      if (on !== (digWrap.style.display === 'block')) {
        digWrap.style.display = on ? 'block' : 'none';
      }
      if (!on) return;
      digFill.style.width = `${Math.min(100, progress * 100)}%`;
      const pct = Math.round(progress * 100);
      digLabel.textContent = `Creusement de la première galerie — ${pct} %`
        + (caste === 'digger' ? '' : '  (6 : pondre des creuseuses)');
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
      for (const n of [objective, stock, site, detail, prompt, event, holdOuter, controls, digWrap]) {
        if (n.parentNode) n.parentNode.removeChild(n);
      }
    },
  };
}

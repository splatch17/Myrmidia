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
     #broodinfo  — the ponte (#6 §2, extended by #38): couvain in progress /
                   capacity, time to the next hatch, the live population
                   split by caste (#38's own HUD criterion — "un compteur de
                   population par caste"), which caste C currently has
                   selected for the NEXT lay (visible before P is ever
                   pressed, not only after), and (for a few seconds) whatever
                   the last P press just said — success or refusal. Empty
                   before the colony is founded, there being nothing to
                   report yet. brood.js/index.js decide *what* happened; this
                   file only ever prints the sentence player/index.js hands it.
     #diginfo    — the chantier (#57): which dig site(s) are being worked
                   right now, at what percent each, and how many diggers are
                   on each one — contract §7's "additive by construction"
                   made legible rather than only true offstage. Same recipe
                   as #broodinfo (amber, small type), not a new layout idea.
                   Empty while no chantier is open.
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
    setHold() {}, setBrood() {}, setDig() {}, toggleControls() {}, closeControls() {}, dispose() {},
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
  ['C', 'choisir la caste à pondre (ouvrière / creuseuse)'],
  ['P', 'pondre (dans le couvoir, une fois la colonie fondée)'],
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
  // #57: sits above #event, same 20px rhythm as the rest of the stack
  // (142+20=162, matching every other gap in this column) rather than
  // squeezed into an existing slot — one new line, one new offset, nothing
  // else moves.
  const dig = el('diginfo', 'left:12px;bottom:162px;font-size:12px;color:#e8c98f;');
  const event = el('event', 'left:12px;bottom:142px;color:#cfe0a8;');
  const prompt = el('prompt', 'left:12px;bottom:122px;font-size:14px;color:#ffe6b0;');
  const objective = el('objective', 'left:12px;bottom:88px;color:#f0dfb8;');
  const stock = el('stock', 'left:12px;bottom:70px;opacity:0.85;');
  const site = el('siteinfo', 'left:12px;bottom:52px;');
  const detail = el('sitedetail', 'left:12px;bottom:34px;opacity:0.62;font-size:12px;');
  /* Below everything else: it only has anything to say once the colony is
     founded (player/index.js gates it on isFounded()), by which point the
     site card above has already stopped changing every step — this is the
     line that is still moving after that. Warm amber rather than the sand
     tone the rest of the column uses, echoing the brood lamps' own colour
     (world/founding.js's BROOD_LIGHT) rather than inventing a fourth tint. */
  const brood = el('broodinfo', 'left:12px;bottom:14px;font-size:12px;color:#e8c98f;');

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

  let lastSite = null, lastDetail = null, lastPrompt = null;
  let lastObjective = null, lastStock = null, lastEvent = null, lastBrood = null, lastDig = null;

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
    /** the standing goal of the prologue */
    setObjective(text) { lastObjective = setText(objective, text, lastObjective); },
    /** carried item + what is on the pile */
    setStock(text) { lastStock = setText(stock, text, lastStock); },
    /** short-lived "what just happened" line */
    setEvent(text) { lastEvent = setText(event, text, lastEvent); },
    /** the ponte readout (#6 §2) — null before the colony is founded */
    setBrood(text) { lastBrood = setText(brood, text, lastBrood); },
    /** the chantier readout (#57) — null while no dig site is open */
    setDig(text) { lastDig = setText(dig, text, lastDig); },
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
      for (const n of [objective, stock, site, detail, prompt, event, brood, dig, holdOuter, controls]) {
        if (n.parentNode) n.parentNode.removeChild(n);
      }
    },
  };
}

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
  return { setSite() {}, setPrompt() {}, setObjective() {}, setStock() {}, setEvent() {}, dispose() {} };
}

export function createHud() {
  if (typeof document === 'undefined') return nullHud();

  /* One left-hand column rather than the old prototype's centred #prompt:
     with an objective line long enough to explain itself, a centred prompt
     lands on top of it (seen on the first capture of the harvest loop, not
     reasoned about). Six stacked lines cannot overlap whatever they say. */
  const event = el('event', 'left:12px;bottom:124px;color:#cfe0a8;');
  const prompt = el('prompt', 'left:12px;bottom:106px;font-size:14px;color:#ffe6b0;');
  const objective = el('objective', 'left:12px;bottom:88px;color:#f0dfb8;');
  const stock = el('stock', 'left:12px;bottom:70px;opacity:0.85;');
  const site = el('siteinfo', 'left:12px;bottom:52px;');
  const detail = el('sitedetail', 'left:12px;bottom:34px;opacity:0.62;font-size:12px;');

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
    /** the standing goal of the prologue */
    setObjective(text) { lastObjective = setText(objective, text, lastObjective); },
    /** carried item + what is on the pile */
    setStock(text) { lastStock = setText(stock, text, lastStock); },
    /** short-lived "what just happened" line */
    setEvent(text) { lastEvent = setText(event, text, lastEvent); },
    dispose() {
      for (const n of [objective, stock, site, detail, prompt, event]) if (n.parentNode) n.parentNode.removeChild(n);
    },
  };
}

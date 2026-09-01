/* ==========================================================================
   Minimal text HUD — two lines, created from JS rather than added to
   game/index.html so the whole player feature stays inside player/**.

   Deliberately unstyled beyond legibility: #32 asks for the site reading to
   be "un simple retour texte pour l'instant, pas de HUD travaillé, la DA
   passera après". So this is the plumbing (what is said, when, and where it
   is anchored), not the look. Two slots, matching the old prototype's DOM
   names so a later DA pass can move them into index.html untouched:
     #siteinfo — what the ground under the queen is worth (siteQuality.js)
     #prompt   — the current contextual interaction (climb.js's
                 climbPromptText(), later harvest/dig)
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
  return { setSite() {}, setPrompt() {}, dispose() {} };
}

export function createHud() {
  if (typeof document === 'undefined') return nullHud();

  const site = el('siteinfo', 'left:12px;bottom:52px;');
  const detail = el('sitedetail', 'left:12px;bottom:34px;opacity:0.62;font-size:12px;');
  const prompt = el('prompt', 'left:0;right:0;bottom:86px;text-align:center;font-size:14px;color:#ffe6b0;');

  let lastSite = null, lastDetail = null, lastPrompt = null;

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
    setPrompt(text) {
      if (text === lastPrompt) return;
      prompt.textContent = text || '';
      lastPrompt = text;
    },
    dispose() {
      for (const n of [site, detail, prompt]) if (n.parentNode) n.parentNode.removeChild(n);
    },
  };
}

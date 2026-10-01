import { ensureUiTheme, keycap } from './uiTheme.js';

/* ==========================================================================
   The DOM of #84: the "settle here?" confirmation, the summary toast after
   it, and the end-of-game screen. Rules and numbers are settle.js; this file
   only draws what it is handed, in the same mm- skin as the rest of the HUD.

   The confirmation is a real choice and not a key-repeat trap: settling is
   permanent, so it says what she gets AND what it costs (she will never walk
   again), with two buttons and the keys named on them.
   ========================================================================== */

const STYLE_ID = 'mm-settle-style';
const CSS = `
.mm-modal { position: fixed; z-index: 30; left: 50%; top: 38%; transform: translate(-50%, -50%);
  width: 360px; padding: 16px 20px 16px; text-align: center; pointer-events: auto; }
.mm-modal .mm-title { font-size: 16px; margin-bottom: 8px; }
.mm-modal p { margin: 6px 0; color: var(--mm-text); }
.mm-modal .mm-dimline { color: var(--mm-dim); font-size: 12px; }
.mm-btn { display: inline-block; margin: 8px 5px 0; padding: 6px 14px; cursor: pointer; pointer-events: auto;
  font: 700 12px/1.2 var(--mm-title); letter-spacing: .06em; color: #fff1cf; appearance: none;
  background: linear-gradient(180deg, #5c4322, #2a1d0c); border: 1px solid #a37b3a; border-radius: 4px;
  box-shadow: 0 1px 0 #000, inset 0 1px 0 rgba(255,230,170,.25); }
.mm-btn:hover:not(:disabled) { border-color: var(--mm-gold); background: linear-gradient(180deg, #7a5a2d, #3a2812); }
.mm-btn:disabled { opacity: .45; cursor: default; }
#settletoast { left: 50%; top: 22%; transform: translateX(-50%); text-align: center; padding: 10px 22px;
  font: 700 17px/1.4 var(--mm-title); color: var(--mm-gold); letter-spacing: .04em; white-space: nowrap;
  transition: opacity .8s ease; }
#endscreen { position: fixed; inset: 0; z-index: 40; display: none; align-items: center; justify-content: center;
  background: radial-gradient(ellipse at center, rgba(20,6,4,.72), rgba(4,2,1,.93)); pointer-events: auto; }
#endscreen { color: var(--mm-text); font: 13px/1.45 var(--mm-body); }
#endscreen .mm-endbox { width: 420px; padding: 22px 28px 24px; text-align: center; position: relative; }
#endscreen h1 { font: 700 24px/1.2 var(--mm-title); color: var(--mm-gold); letter-spacing: .1em; margin: 0 0 6px; }
#endscreen .mm-endsub { color: var(--mm-dim); margin-bottom: 14px; }
#endscreen .mm-kv { font-size: 14px; padding: 2px 0; }
`;

export function createSettleUi() {
  if (typeof document === 'undefined') {
    return { confirm() {}, cancel() {}, isConfirming: () => false, toast() {}, endScreen() {}, dispose() {} };
  }
  ensureUiTheme();
  if (!document.getElementById(STYLE_ID)) {
    const s = document.createElement('style');
    s.id = STYLE_ID; s.textContent = CSS;
    document.head.appendChild(s);
  }

  const modal = document.createElement('div');
  modal.id = 'settleconfirm';
  modal.className = 'mm mm-frame mm-modal';
  modal.style.display = 'none';
  document.body.appendChild(modal);

  const toastEl = document.createElement('div');
  toastEl.id = 'settletoast';
  toastEl.className = 'mm mm-frame';
  toastEl.style.display = 'none';
  document.body.appendChild(toastEl);

  const end = document.createElement('div');
  end.id = 'endscreen';
  document.body.appendChild(end);

  let handlers = null, toastTimer = 0;
  const stop = (e) => e.stopPropagation();
  modal.addEventListener('pointerdown', stop);
  modal.addEventListener('click', (e) => {
    e.stopPropagation();
    const a = e.target.closest && e.target.closest('[data-act]');
    if (!a || !handlers) return;
    const h = handlers;
    if (a.dataset.act === 'yes') h.yes(); else h.no();
  });
  end.addEventListener('pointerdown', stop);
  end.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('[data-act="restart"]');
    if (a && end._restart) end._restart();
  });

  const fmtTime = (s) => `${Math.floor(s / 60)} min ${String(Math.floor(s % 60)).padStart(2, '0')} s`;

  return {
    /** Ask, with what she gets in the question. `b` is settle.js's bonuses. */
    confirm(b, { yes, no }) {
      handlers = { yes, no };
      modal.innerHTML = `<div class="mm-title">S’INSTALLER ICI ?</div>`
        + `<p>Profondeur ${b.depth.toFixed(0)} u : ponte <b>+${Math.round(b.layBonus * 100)} %</b>, `
        + `défense <b>+${Math.round((b.defense - 1) * 100)} %</b></p>`
        + `<p class="mm-dimline">C’est définitif : la reine ne bougera plus jamais. `
        + `Elle pourra toujours pondre, et vous passerez dans une ouvrière.</p>`
        + `<button class="mm-btn" data-act="yes">Je m’installe ${keycap('I')}</button>`
        + `<button class="mm-btn" data-act="no">Pas encore ${keycap('Échap')}</button>`;
      modal.style.display = 'block';
    },
    cancel() { handlers = null; modal.style.display = 'none'; },
    isConfirming: () => modal.style.display === 'block',

    toast(text, seconds = 9) {
      toastEl.textContent = text;
      toastEl.style.display = 'block'; toastEl.style.opacity = '1';
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        toastEl.style.opacity = '0';
        toastTimer = setTimeout(() => { toastEl.style.display = 'none'; }, 900);
      }, seconds * 1000);
    },

    /** { time (s), depth (u), rooms, laid, cause } and what Recommencer does. */
    endScreen(s, onRestart) {
      end._restart = onRestart;
      end.innerHTML = `<div class="mm-frame mm-endbox"><h1>LA REINE EST MORTE</h1>`
        + `<div class="mm-endsub">${s.cause}</div>`
        + `<div class="mm-kv"><span>temps survécu</span><b>${fmtTime(s.time)}</b></div>`
        + `<div class="mm-kv"><span>profondeur atteinte</span><b>${s.depth.toFixed(0)} u</b></div>`
        + `<div class="mm-kv"><span>salles creusées</span><b>${s.rooms}</b></div>`
        + `<div class="mm-kv"><span>fourmis pondues</span><b>${s.laid}</b></div>`
        + `<button class="mm-btn" data-act="restart" style="margin-top:16px">Recommencer</button></div>`;
      end.style.display = 'flex';
    },

    dispose() {
      clearTimeout(toastTimer);
      for (const n of [modal, toastEl, end]) if (n.parentNode) n.parentNode.removeChild(n);
    },
  };
}

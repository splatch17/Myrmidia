/* ==========================================================================
   The queen's management panel (#53, step 5 of the arbitrated order).

   WHY IT IS ATTACHED TO A PROFILE AND NOT TO THE PLAYER. The arbitration in
   design/castes-et-micro-macro.md §3, repeated in REPRISE.md §2, is explicit
   and is not to be reopened:

     In micro mode you will be able to take control of ANY ant. And when you
     take control of the queen, a particular management menu appears.

   Two consequences are already binding, and this file is the first thing that
   has to honour them. Point 1: no ant is structurally "the player" — control
   is an attribute. Point 3: the HUD has to be able to depend on WHO is
   controlled. So this panel does not ask "is this the player"; it asks the
   profile whether it manages a colony, and `manages` is one flag on one line
   of avatar.js, exactly like every other caste difference. The day #36 lands
   and the player hops into a forager, this panel disappears on its own,
   without a line changing here.

   KEYBOARD ONLY, and the same keys that already worked. 5 and 6 still choose
   the caste of the next clutch whether the panel is open or not: the panel is
   a place to SEE the state, not a second way to change it, and a menu that
   introduces its own bindings is a menu the player has to learn twice.

   Round 17 dressed it as an MMO window (player/uiTheme.js): a framed panel
   with a gilded title, sections under ornamental rules, castes as slots with
   their key-caps. Every word it says is the word it said before —
   scripts/verify-queen-menu.mjs matches LA REINE, PONTE, COLONIE, CHANTIERS,
   the reserve as "n /", "le hall", "personne" and "verrouill" in its text.

   It reads state it is handed. No world imports, no colony import: everything
   comes through render(), so this file cannot be the place two answers to the
   same question start to disagree.
   ========================================================================== */

import { ensureUiTheme, keycap } from './uiTheme.js';

const PANEL_ID = 'queenmenu';

/* Kept out of the markup so a caste added to avatar.js shows up here without
   this file being edited. */
const CASTE_ORDER = ['worker', 'digger'];

export function createQueenMenu(root = document.body) {
  ensureUiTheme();
  const el = document.createElement('div');
  el.id = PANEL_ID;
  /* Left, under the unit frame: the portrait above it says whose panel this
     is, which is the genre's own layout for a character window. */
  el.className = 'mm mm-frame';
  el.style.display = 'none';
  root.appendChild(el);

  let open = false;
  let lastHtml = null;

  const kv = (label, value) => `<div class="mm-kv"><span>${label}</span><b>${value}</b></div>`;
  const heading = (t) => `<div class="mm-h">${t}</div>`;
  const bar = (p) => {
    const w = Math.round(Math.max(0, Math.min(1, p)) * 100);
    return `<div class="mm-bar mm-thin"><i style="width:${w}%"></i></div>`;
  };

  return {
    /** Is the profile currently controlled one that gets this panel at all? */
    availableFor(profile) { return !!(profile && profile.manages); },

    isOpen() { return open; },

    /** Toggle, but only for a profile that has the panel. A forager pressing
     *  the key gets nothing, which is the point of the flag. */
    toggle(profile) {
      if (!this.availableFor(profile)) { open = false; return false; }
      open = !open;
      return open;
    },

    /**
     * @param profile  the profile of the ant being controlled right now
     * @param s {
     *   caste,            id of the caste the next clutch will be
     *   casteUnlocked,    (id) => boolean
     *   casteLabel,       (id) => string
     *   reserve, cost,    units on the pile, units a clutch costs
     *   counts,           { worker, digger, eggs }
     *   brood,            clutches laid
     *   rooms,            [{ id }]
     *   faces,            [{ id, worked, needed, diggers }]
     * }
     */
    render(profile, s) {
      const show = open && this.availableFor(profile) && !!s;
      if (show !== (el.style.display === 'block')) {
        el.style.display = show ? 'block' : 'none';
      }
      if (!show) return;

      const casteRows = CASTE_ORDER.map((id, i) => {
        const unlocked = s.casteUnlocked(id);
        const picked = s.caste === id;
        const cls = `mm-slot${picked ? ' mm-picked' : ''}${unlocked ? '' : ' mm-locked'}`;
        const tag = unlocked ? (picked ? 'prochaine' : '') : 'verrouillée';
        return `<div class="${cls}">${keycap(5 + i)}`
          + `<span class="mm-slot-name">${s.casteLabel(id)}</span>`
          + `<span class="mm-slot-tag">${tag}</span></div>`;
      }).join('');

      /* Work in progress, from the world's own face list. Listed even when
         nobody is on it — an empty chantier with a crew of zero is the whole
         reason to lay fouisseuses, and a panel that hides it hides the
         decision it exists to support. */
      const faceRows = (s.faces || []).length
        ? s.faces.map((f) => {
            const p = f.needed > 0 ? f.worked / f.needed : 0;
            return kv(f.id === 'face-hall' ? 'le hall' : f.id,
              f.diggers > 0 ? `${f.diggers} au front` : 'personne')
              + bar(p);
          }).join('')
        : '<div class="mm-empty">rien à creuser pour l\'instant</div>';

      const html = `<div class="mm-win-title"><span class="mm-title">LA REINE</span>${keycap('C')}</div>`
        + `<div class="mm-win-sub">${profile.label}</div>`
        + heading('PONTE')
        + casteRows
        + kv('réserve', `${s.reserve} / ${s.cost}`)
        + kv('couvées', s.brood)
        + heading('COLONIE')
        + kv(s.casteLabel('worker'), s.counts.worker)
        + kv(s.casteLabel('digger'), s.counts.digger)
        + kv('œufs', s.counts.eggs)
        + kv('salles creusées', s.rooms.length)
        + heading('CHANTIERS')
        + faceRows
        + `<div class="mm-win-foot">${keycap('C')} — fermer  ·  ${keycap('E')} — pondre</div>`;

      // written only on change: this runs every frame
      if (html !== lastHtml) { el.innerHTML = html; lastHtml = html; }
    },

    dispose() { if (el.parentNode) el.parentNode.removeChild(el); },
  };
}

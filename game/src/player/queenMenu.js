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
   same question start to disagree. That is also why the caste list is read
   off `s.casteOrder` rather than imported from avatar.js directly (#75) — the
   order is player/index.js's own PRODUCED_CASTES (avatar.js), handed in with
   the rest of the reading rather than a second door into the same data.

   OPEN BY DEFAULT (#75). The porter's ask was that the screen reads as an
   MMO "from the first second" — a management panel nobody has ever opened is
   not that. `open` now starts true; nothing about WHO gets the panel
   changed, only whether it starts shown to the profile that does. The
   shortcut to put it away is written on the panel itself (the title row's
   own key-cap, labelled "masquer") rather than left to the help panel alone.
   ========================================================================== */

import { ensureUiTheme, keycap } from './uiTheme.js';

const PANEL_ID = 'queenmenu';

export function createQueenMenu(root = document.body, handlers = {}) {
  ensureUiTheme();
  const el = document.createElement('div');
  el.id = PANEL_ID;
  /* Left, under the unit frame: the portrait above it says whose panel this
     is, which is the genre's own layout for a character window. */
  el.className = 'mm mm-frame';
  el.style.display = 'none';
  root.appendChild(el);
  /* #84: the panel's two buttons (settle, lay at a distance). Delegated: the
     markup is rewritten on change, the listener is not. */
  el.addEventListener('pointerdown', (e) => e.stopPropagation());
  el.addEventListener('click', (e) => {
    e.stopPropagation();
    const b = e.target.closest && e.target.closest('[data-act]');
    if (!b || b.disabled) return;
    const fn = handlers[b.dataset.act];
    if (fn) fn();
  });

  let open = true;
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
     *   faces,            [{ id, worked, needed, diggers, required }]
     * }
     */
    render(profile, s) {
      const show = open && this.availableFor(profile) && !!s;
      if (show !== (el.style.display === 'block')) {
        el.style.display = show ? 'block' : 'none';
      }
      if (!show) return;

      const casteRows = (s.casteOrder || []).map((id, i) => {
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
         decision it exists to support.

         #76: the crew value now names the REQUIREMENT alongside who is
         there, "2 / 3 fouisseuses" — the number that decides whether the bar
         below it is going to move at all — rather than just how many are
         present. "personne" stays the word for zero (scripts/verify-queen-
         menu.mjs matches it), with the requirement added alongside it. */
      const faceRows = (s.faces || []).length
        ? s.faces.map((f) => {
            const p = f.needed > 0 ? f.worked / f.needed : 0;
            const req = f.required || 1;
            const plural = req > 1 ? 's' : '';
            const crewLabel = f.diggers > 0
              ? `${f.diggers} / ${req} fouisseuse${plural}`
              : `personne (0 / ${req})`;
            return kv(f.id === 'face-hall' ? 'le hall' : f.id, crewLabel) + bar(p);
          }).join('')
        : ((s.plans || []).length ? '' : '<div class="mm-empty">rien à creuser pour l\'instant</div>');

      /* #82: the chantiers painted in the macro model, after the hall's own
         walls. Same crew reading ("2 / 3 fouisseuses"), a star when the player
         made it prioritaire, and "en attente" while it only touches a chantier
         that is not open yet. */
      const planRows = (s.plans || []).map((p) => {
        const plural = p.required > 1 ? 's' : '';
        const crew = p.waiting ? 'en attente du chantier voisin'
          : p.diggers > 0 ? `${p.diggers} / ${p.required} fouisseuse${plural}` : `personne (0 / ${p.required})`;
        const price = p.gratis ? '' : ` · ${p.paid} / ${p.cost} nourriture`;
        const warn = p.starved ? '<div class="mm-empty">plus de nourriture : à l’arrêt</div>' : (p.spoil > 3 ? `<div class="mm-empty">déblais ${p.spoil} au front : ralenti</div>` : '');
        return kv(`${p.priority ? '★ ' : ''}${p.label} · ${Math.round(p.progress * 100)} %${price}`, crew) + bar(p.progress) + warn;
      }).join('');

      /* #84: settling, then what it paid. The button is live even when she
         cannot settle yet: it answers with the reason instead of being a
         grey box nobody can read. */
      const st = s.settle;
      let settleBlock = '';
      if (st && st.settled) {
        settleBlock = heading('INSTALLATION')
          + kv('profondeur', `${st.settled.depth.toFixed(0)} u`)
          + kv('ponte', `+${Math.round(st.settled.layBonus * 100)} %`)
          + kv('défense', `+${Math.round((st.settled.defense - 1) * 100)} %`)
          + `<div style="text-align:center"><button class="mm-btn" data-act="lay"${st.canLay ? '' : ' disabled'}>Pondre</button></div>`;
      } else if (st) {
        settleBlock = heading('INSTALLATION')
          + kv('profondeur', `${st.depth.toFixed(0)} / ${st.minDepth} u`)
          + (st.reason ? `<div class="mm-empty">${st.reason}</div>` : '')
          + `<div style="text-align:center"><button class="mm-btn" data-act="settle"${st.ok ? '' : ' style="opacity:.55"'}>S\u2019installer ici ${keycap('I')}</button></div>`;
      }

      const html = `<div class="mm-win-title"><span class="mm-title">LA REINE</span>`
        + `<span class="mm-win-hide">${keycap('C')} masquer</span></div>`
        + `<div class="mm-win-sub">${profile.label}</div>`
        + heading('PONTE')
        + casteRows
        + kv('nourriture', s.food === null ? '—' : `${s.food}`)
        + kv('réserve', `${s.reserve} / ${s.cost}`)
        + kv('couvées', s.brood)
        + heading('COLONIE')
        + kv(s.casteLabel('worker'), s.counts.worker)
        + kv(s.casteLabel('digger'), s.counts.digger)
        + kv('œufs', s.counts.eggs)
        + kv('salles creusées', s.rooms.length)
        + kv('déblais', `${s.spoilLying} au front · ${s.spoilOut} au tas`)
        + heading('CHANTIERS')
        + faceRows
        + planRows
        + settleBlock
        + `<div class="mm-win-foot">${keycap('C')} — masquer  ·  ${keycap('E')} — pondre</div>`;

      // written only on change: this runs every frame
      if (html !== lastHtml) { el.innerHTML = html; lastHtml = html; }
    },

    dispose() { if (el.parentNode) el.parentNode.removeChild(el); },
  };
}

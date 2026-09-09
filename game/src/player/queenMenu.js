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
   introduces its own bindings is a menu the player has to learn twice. What it
   adds is that the choice, its cost, what is in reserve, the headcount and the
   work in progress are finally in one place instead of being a two-key
   shortcut with no screen (#53).

   It reads state it is handed. No world imports, no colony import: everything
   comes through render(), so this file cannot be the place two answers to the
   same question start to disagree.
   ========================================================================== */

const PANEL_ID = 'queenmenu';

/* Kept out of the markup so a caste added to avatar.js shows up here without
   this file being edited — the entry the panel does not know about is listed
   by its own label rather than skipped. */
const CASTE_ORDER = ['worker', 'digger'];

export function createQueenMenu(root = document.body) {
  const el = document.createElement('div');
  el.id = PANEL_ID;
  /* Below the controls panel rather than centred on the right edge: both are
     right-aligned, and centred it sat straight on top of the help the player
     is most likely to still have open the first time they press C. */
  el.style.cssText = 'position:absolute;right:12px;top:288px;'
    + 'width:290px;padding:12px 14px;font:12px/1.65 monospace;color:#e6d3ab;'
    + 'background:rgba(12,10,8,0.78);border:1px solid rgba(255,214,150,0.18);'
    + 'border-radius:6px;pointer-events:none;user-select:none;';
  el.style.display = 'none';
  root.appendChild(el);

  let open = false;
  let lastHtml = null;

  const row = (label, value, dim) =>
    `<div style="display:flex;justify-content:space-between;gap:10px${dim ? ';opacity:0.55' : ''}">`
    + `<span style="opacity:0.75">${label}</span><span>${value}</span></div>`;

  const heading = (t) =>
    `<div style="margin:9px 0 3px;color:#ffe6b0;opacity:0.9;letter-spacing:0.06em">${t}</div>`;

  function bar(p) {
    const w = Math.round(Math.max(0, Math.min(1, p)) * 100);
    return '<div style="height:4px;background:rgba(0,0,0,0.5);border-radius:2px;overflow:hidden;margin:2px 0 4px">'
      + `<div style="height:100%;width:${w}%;background:#d8a24e"></div></div>`;
  }

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
        const key = 5 + i;
        const mark = picked ? '<span style="color:#ffc46a">&#9679;</span>' : '<span style="opacity:0.3">&#9675;</span>';
        const name = s.casteLabel(id);
        return row(`${mark} <span style="color:#ffe6b0">${key}</span> ${name}`,
          unlocked ? (picked ? 'prochaine' : '') : 'verrouillée', !unlocked);
      }).join('');

      /* Work in progress, from the world's own face list. Listed even when
         nobody is on it — an empty chantier with a crew of zero is the whole
         reason to lay fouisseuses, and a panel that hides it hides the
         decision it exists to support. */
      const faceRows = (s.faces || []).length
        ? s.faces.map((f) => {
            const p = f.needed > 0 ? f.worked / f.needed : 0;
            return row(f.id === 'face-hall' ? 'le hall' : f.id,
              f.diggers > 0 ? `${f.diggers} au front` : 'personne')
              + bar(p);
          }).join('')
        : '<div style="opacity:0.55">rien à creuser pour l\'instant</div>';

      const html = '<div style="color:#ffe6b0;letter-spacing:0.08em;margin-bottom:4px">LA REINE</div>'
        + `<div style="opacity:0.6;margin-bottom:2px">${profile.label}</div>`
        + heading('PONTE')
        + casteRows
        + row('réserve', `${s.reserve} / ${s.cost}`)
        + row('couvées', s.brood)
        + heading('COLONIE')
        + row(s.casteLabel('worker'), s.counts.worker)
        + row(s.casteLabel('digger'), s.counts.digger)
        + row('œufs', s.counts.eggs)
        + row('salles creusées', s.rooms.length)
        + heading('CHANTIERS')
        + faceRows
        + '<div style="margin-top:9px;opacity:0.55">C — fermer  ·  E — pondre</div>';

      // written only on change: this runs every frame
      if (html !== lastHtml) { el.innerHTML = html; lastHtml = html; }
    },

    dispose() { if (el.parentNode) el.parentNode.removeChild(el); },
  };
}

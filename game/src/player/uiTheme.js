/* ==========================================================================
   The interface skin (round 17): one stylesheet, injected once, that every
   DOM panel in player/** draws with.

   WHY A SKIN AND NOT A REDESIGN. The porter asked for menus "un peu plus
   jolis, inspiration World of Warcraft / autres MMORPG connus", and to get
   there "petit a petit". So this round changes how things LOOK and where they
   SIT, and nothing about what they SAY: every slot keeps its id and its words,
   because four harnesses find them by id and match their text.

   What is borrowed from the genre, and why each piece:
     - FRAMED PANELS — bronze rule, dark umber ground, gilded corner studs. The
       classic MMO window, in the nest's own earth palette rather than WoW's
       stone grey, so the interface and the tunnels read as one world.
     - A UNIT FRAME, top left: portrait, name, bar. The genre's answer to "who
       am I playing" — and here the question is literal. The portrait is drawn
       from the controlled profile's own chitin colours, so the day the player
       takes a forager (#36) the frame changes by itself, which is what
       design/castes-et-micro-macro.md 3 asks of the HUD.
     - AN OBJECTIVE TRACKER, top right: text on a fade, not a box. The quest
       log's register, and it leaves the top-right corner's first 170 px free
       for the minimap that is coming.
     - THE ACTION AS A PROMPT PLATE with a key-cap, and a CAST BAR under it,
       centre bottom, where the eye already is.
     - "WHAT JUST HAPPENED" AS ZONE TEXT, centred high, in the title face.

   One webfont — Cinzel, titles only, loaded in index.html — with a system
   serif behind it. It is the closest free face to the genre's engraved
   capitals and costs ~20 KB; body text stays on the system UI font, which is
   more legible at 13 px and costs nothing. No backdrop-filter anywhere: it is
   the one CSS feature here that would cost GPU time on every frame.
   ========================================================================== */

const STYLE_ID = 'mm-ui-theme';

const STUD = 'radial-gradient(circle, var(--mm-gold) 0 1.6px, #7a5626 2.2px 3px, transparent 3.6px)';

const CSS = `
:root {
  --mm-gold: #f3cf7a; --mm-gold-2: #c99a45; --mm-bronze: #6e4f22; --mm-ink: #120c06;
  --mm-text: #ecdcb8; --mm-dim: #a99573; --mm-amber: #ffb44d;
  --mm-title: 'Cinzel', 'Trajan Pro', Georgia, 'Times New Roman', serif;
  --mm-body: 'Segoe UI', system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif;
}
.mm {
  position: fixed; z-index: 5; pointer-events: none; user-select: none;
  color: var(--mm-text); font: 13px/1.45 var(--mm-body);
  text-shadow: 0 1px 2px rgba(0,0,0,.9);
}
.mm-frame {
  background: linear-gradient(180deg, rgba(40,28,14,.94), rgba(17,11,5,.94));
  border: 1px solid var(--mm-bronze); border-radius: 5px;
  box-shadow: 0 0 0 1px rgba(0,0,0,.85), 0 8px 22px rgba(0,0,0,.5),
              inset 0 1px 0 rgba(255,222,160,.14), inset 0 0 22px rgba(0,0,0,.4);
}
.mm-frame::before {
  content: ''; position: absolute; inset: -4px; pointer-events: none;
  background: ${STUD} 0 0 / 8px 8px no-repeat, ${STUD} 100% 0 / 8px 8px no-repeat,
              ${STUD} 0 100% / 8px 8px no-repeat, ${STUD} 100% 100% / 8px 8px no-repeat;
}
.mm-title {
  font: 700 13px/1.25 var(--mm-title); color: var(--mm-gold);
  letter-spacing: .08em;
}
.mm-key {
  display: inline-block; min-width: 12px; height: 17px; padding: 0 5px;
  text-align: center; vertical-align: middle; white-space: nowrap;
  font: 700 11px/16px var(--mm-body); color: #fff1cf;
  background: linear-gradient(180deg, #5c4322, #2a1d0c);
  border: 1px solid #a37b3a; border-bottom-color: #4a3416; border-radius: 3px;
  box-shadow: 0 1px 0 #000, inset 0 1px 0 rgba(255,230,170,.25);
  text-shadow: 0 1px 0 #000;
}
.mm-bar {
  position: relative; height: 13px; border-radius: 2px; overflow: hidden;
  background: linear-gradient(180deg, #0c0803, #1d150a);
  border: 1px solid #000; box-shadow: 0 0 0 1px var(--mm-bronze);
}
.mm-bar > i {
  position: absolute; left: 0; top: 0; bottom: 0; width: 0;
  background: linear-gradient(180deg, #ffd98a 0%, #f0a33a 48%, #b8661a 100%);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.35);
  transition: width .25s ease-out;
}
.mm-bar > span {
  position: absolute; inset: 0; text-align: center;
  font: 600 10px/13px var(--mm-body); color: #fff5de;
  text-shadow: 0 1px 1px #000, 0 0 3px #000;
}
.mm-bar.mm-thin { height: 5px; margin: 2px 0 5px; }

/* ---- unit frame ---- */
#unitframe { left: 14px; top: 14px; display: flex; align-items: center; }
.mm-portrait {
  position: relative; z-index: 2; flex: none; width: 66px; height: 66px;
  border-radius: 50%; overflow: hidden;
  box-shadow: 0 0 0 2px #1a1108, 0 0 0 4px var(--mm-bronze), 0 0 0 5px #000,
              0 4px 12px rgba(0,0,0,.6);
}
.mm-portrait.mm-elite {
  box-shadow: 0 0 0 2px #1a1108, 0 0 0 4px var(--mm-gold-2), 0 0 0 5px #000,
              0 0 16px rgba(243,207,122,.35), 0 4px 12px rgba(0,0,0,.6);
}
.mm-unit-body { position: relative; margin-left: -14px; padding: 6px 11px 7px 22px; width: 200px; }
.mm-unit-name {
  font: 700 13px/1.2 var(--mm-title); color: var(--mm-gold);
  letter-spacing: .04em; margin-bottom: 5px; white-space: nowrap;
}
.mm-chips { display: flex; gap: 9px; margin-top: 5px; font-size: 11px; color: var(--mm-dim); white-space: nowrap; }
.mm-chips b { color: var(--mm-text); font-weight: 600; font-variant-numeric: tabular-nums; }
#stock { left: 20px; top: 90px; font-size: 12px; opacity: .85; }

/* ---- objective tracker ---- */
#tracker {
  right: 0; top: 12px; width: 330px; padding: 8px 16px 10px 44px; text-align: right;
  background: linear-gradient(270deg, rgba(10,7,3,.62) 0%, rgba(10,7,3,.36) 62%, rgba(10,7,3,0) 100%);
}
.mm-track-h {
  font: 700 12px/1.3 var(--mm-title); color: var(--mm-gold);
  letter-spacing: .12em; margin: 2px 0 3px;
}
.mm-track-h::after {
  content: ''; display: block; height: 1px; margin-top: 3px;
  background: linear-gradient(270deg, rgba(243,207,122,.6), transparent);
}
.mm-track-sub { margin-top: 9px; font-size: 11px; color: var(--mm-gold-2); }
#objective { color: #fff0cc; }
#sitedetail { font-size: 11.5px; opacity: .7; }

/* ---- action: prompt plate + cast bar ---- */
#promptwrap {
  left: 50%; bottom: 128px; transform: translateX(-50%);
  display: flex; align-items: center; gap: 9px; padding: 5px 14px 5px 7px; white-space: nowrap;
}
#promptwrap.mm-off { display: none; }
#prompt { font: 600 14px/1.3 var(--mm-body); color: #fff0cc; }
#hold { left: 50%; bottom: 104px; transform: translateX(-50%); width: 250px; height: 14px; }
.mm-cast-track { position: absolute; inset: 2px; overflow: hidden; border-radius: 1px; background: #0c0803; }
.mm-cast-fill {
  position: relative; height: 100%; width: 0;
  background: linear-gradient(180deg, #ffe29a, #f5a93c 50%, #c8701d);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.4);
}
.mm-cast-fill::after {
  content: ''; position: absolute; right: -4px; top: -3px; bottom: -3px; width: 8px;
  background: radial-gradient(ellipse at center, rgba(255,246,215,.95), rgba(255,200,110,0) 70%);
}

/* ---- zone text ---- */
#event {
  left: 50%; top: 14%; transform: translateX(-50%); text-align: center; white-space: nowrap;
  font: 700 20px/1.3 var(--mm-title); color: var(--mm-gold); letter-spacing: .05em;
  text-shadow: 0 0 12px rgba(0,0,0,.95), 0 2px 2px #000, 0 0 24px rgba(255,190,90,.28);
}
#event:empty { display: none; }

/* ---- key bindings ---- */
#controls { right: 14px; bottom: 44px; padding: 9px 13px 10px; font-size: 12px; line-height: 1.95; }
#controls .mm-row { display: flex; align-items: center; gap: 9px; }
#controls .mm-keys { min-width: 124px; display: flex; gap: 3px; justify-content: flex-end; align-items: center; }
#controls .mm-or { color: var(--mm-dim); font-style: normal; padding: 0 1px; }
#controls .mm-what { color: var(--mm-dim); }

/* ---- the dig ring ---- */
#digdial { filter: drop-shadow(0 0 6px rgba(255,170,60,.45)); }

/* ---- windows (the queen's panel, and whatever comes next) ---- */
#queenmenu { left: 16px; top: 122px; width: 300px; padding: 10px 14px 11px; font-size: 12.5px; }
.mm-win-title { display: flex; align-items: center; justify-content: space-between; }
.mm-win-title .mm-title { font-size: 15px; }
.mm-win-sub { color: var(--mm-dim); font-size: 11px; letter-spacing: .06em; margin: 1px 0 2px; }
.mm-h {
  display: flex; align-items: center; gap: 8px; margin: 10px 0 4px;
  font: 700 11px/1.2 var(--mm-title); color: var(--mm-gold-2); letter-spacing: .14em;
}
.mm-h::before, .mm-h::after { content: ''; flex: 1; height: 1px; }
.mm-h::before { background: linear-gradient(90deg, transparent, rgba(201,154,69,.6)); }
.mm-h::after { background: linear-gradient(90deg, rgba(201,154,69,.6), transparent); }
.mm-slot {
  display: flex; align-items: center; gap: 8px; padding: 3px 6px; margin: 3px 0;
  border: 1px solid rgba(110,79,34,.55); border-radius: 3px; background: rgba(0,0,0,.28);
}
.mm-slot.mm-picked {
  border-color: var(--mm-gold-2);
  background: linear-gradient(90deg, rgba(243,207,122,.17), rgba(0,0,0,.2));
  box-shadow: inset 0 0 9px rgba(243,207,122,.16);
}
.mm-slot.mm-locked { opacity: .5; }
.mm-slot-name { flex: 1; }
.mm-slot-tag { font-size: 10.5px; letter-spacing: .07em; text-transform: uppercase; color: var(--mm-gold); }
.mm-locked .mm-slot-tag { color: var(--mm-dim); }
.mm-kv { display: flex; justify-content: space-between; gap: 10px; }
.mm-kv > span { color: var(--mm-dim); }
.mm-kv > b { font-weight: 600; font-variant-numeric: tabular-nums; }
.mm-empty { color: var(--mm-dim); font-style: italic; }
.mm-win-foot {
  margin-top: 9px; padding-top: 6px; border-top: 1px solid rgba(110,79,34,.5);
  color: var(--mm-dim); font-size: 11px; text-align: center;
}
`;

/** Inject the skin once. Safe to call from every panel's constructor. */
export function ensureUiTheme() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const s = document.createElement('style');
  s.id = STYLE_ID;
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** A key-cap. The key is shown as written. */
export function keycap(k) { return `<kbd class="mm-key">${k}</kbd>`; }

/** 0xrrggbb -> '#rrggbb' */
export function hex(n) { return `#${(n >>> 0).toString(16).padStart(6, '0').slice(-6)}`; }

/**
 * The unit frame's portrait: an ant's head, face on, in the profile's own
 * colours. Drawn rather than rendered — a second camera on the avatar would
 * be a second render pass every frame for a 66-pixel circle. A caste that
 * `manages` a colony wears a crown between its antennae, which is the one
 * silhouette difference that reads at this size.
 */
export function portraitSvg(profile) {
  const c = profile.colors || {};
  const id = profile.id || 'ant';
  const A = hex(c.chitinA ?? 0xc98a3c), B = hex(c.chitinB ?? 0x855828);
  const L = hex(c.limb ?? 0x8a5b28), Md = hex(c.mandible ?? 0xc9903f), E = hex(c.eye ?? 0x100c06);
  const crown = profile.manages
    ? '<path d="M24.5 18 L26 10.5 L29.2 14.4 L32 8.2 L34.8 14.4 L38 10.5 L39.5 18 Z" fill="#f3cf7a" stroke="#6e4a1c" stroke-width="0.9" stroke-linejoin="round"/>'
      + '<circle cx="32" cy="8.4" r="1.3" fill="#fff4cf"/>'
    : '';
  return `<svg viewBox="0 0 64 64" width="100%" height="100%" aria-hidden="true">
  <defs>
    <radialGradient id="mmpbg-${id}" cx="50%" cy="36%" r="72%">
      <stop offset="0" stop-color="#4d3619"/><stop offset="1" stop-color="#120b04"/>
    </radialGradient>
    <linearGradient id="mmphd-${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${A}"/><stop offset="1" stop-color="${B}"/>
    </linearGradient>
  </defs>
  <circle cx="32" cy="32" r="32" fill="url(#mmpbg-${id})"/>
  <path d="M27.5 23 Q23 14.5 15 12.5 Q9.5 11.2 7 5.5" fill="none" stroke="${L}" stroke-width="2.3" stroke-linecap="round"/>
  <path d="M36.5 23 Q41 14.5 49 12.5 Q54.5 11.2 57 5.5" fill="none" stroke="${L}" stroke-width="2.3" stroke-linecap="round"/>
  <path d="M26 44 Q22.5 52.5 29.5 58 Q30 52 31.6 47 Z" fill="${Md}"/>
  <path d="M38 44 Q41.5 52.5 34.5 58 Q34 52 32.4 47 Z" fill="${Md}"/>
  <ellipse cx="32" cy="35" rx="15.5" ry="14" fill="url(#mmphd-${id})"/>
  <ellipse cx="27" cy="28.5" rx="6.5" ry="3" fill="#fff" opacity="0.16"/>
  <ellipse cx="21.5" cy="33" rx="3.6" ry="4.6" fill="${E}"/>
  <ellipse cx="42.5" cy="33" rx="3.6" ry="4.6" fill="${E}"/>
  <circle cx="20.6" cy="31.5" r="1.1" fill="#fff" opacity="0.7"/>
  <circle cx="41.6" cy="31.5" r="1.1" fill="#fff" opacity="0.7"/>
  ${crown}
</svg>`;
}

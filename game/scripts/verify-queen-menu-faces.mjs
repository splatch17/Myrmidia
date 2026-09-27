// Unit-level proof for #62 requirement 1: the queen menu lists open
// worksites generically — not just "le hall" — and renders correctly whether
// there are zero, one, or three of them.
//
// No browser, no build, no server: queenMenu.js is deliberately pure DOM with
// no world or THREE import (its own header explains why — "this file cannot
// be the place two answers to the same question start to disagree"), so a
// handful of stub DOM objects are enough to drive its render() directly. This
// is what lets the "3 faces" case be proved at all: the world side of #62
// (the hall's own walls opening several faces at once) has not landed in this
// worktree yet, and a live harness has nothing to open three of. It
// complements verify-queen-menu.mjs's live, single-face proof (the real
// digFaces() as founding leaves it) rather than replacing it.
//
// Usage: node scripts/verify-queen-menu-faces.mjs

import { createQueenMenu } from '../src/player/queenMenu.js';

class FakeEl {
  constructor(tag) { this.tag = tag; this.style = {}; this.children = []; this._html = ''; }
  appendChild(c) { this.children.push(c); return c; }
  removeChild(c) { this.children = this.children.filter((x) => x !== c); return c; }
  set innerHTML(v) { this._html = v; }
  get innerHTML() { return this._html; }
  set textContent(v) { this._html = v; }
  get textContent() { return this._html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(); }
}
/* Pre-existing gap, unrelated to #75: uiTheme.js's ensureUiTheme() (round 17)
   calls document.getElementById()/document.head.appendChild() to inject the
   skin's <style> once, and this stub never grew those — every run of this
   harness was throwing before a single check ran. Filled in rather than
   worked around, since queenMenu.js now calls ensureUiTheme() unconditionally
   on construction and always will. */
global.document = {
  createElement: (tag) => new FakeEl(tag),
  getElementById: () => null,
  body: new FakeEl('body'),
  head: new FakeEl('head'),
};

let failures = 0;
const check = (c, m) => { if (!c) { failures++; console.log('  FAIL: ' + m); } else console.log('  ok:   ' + m); };

const profile = { manages: true, label: 'reine fondatrice' };
const casteLabel = (id) => (id === 'digger' ? 'fouisseuse' : 'ouvrière');

function baseState(faces) {
  return {
    caste: 'worker', casteUnlocked: () => true, casteLabel,
    casteOrder: ['worker', 'digger'],
    reserve: 3, cost: 5, brood: 1,
    counts: { worker: 2, digger: 1, eggs: 0 },
    rooms: [{ id: 'chamber' }],
    faces,
  };
}

/** A fresh panel per call — createQueenMenu appends one element to `root`
 *  and it is that element's own open/render state we are reading back.
 *  #75: the panel now starts OPEN for a profile that manages, so render()
 *  alone is enough — no toggle() needed before it (a toggle here would now
 *  CLOSE the default-open panel and render nothing, which is the opposite
 *  of what this file is checking). */
function renderPanel(faces) {
  const root = new FakeEl('root');
  const menu = createQueenMenu(root);
  menu.render(profile, baseState(faces));
  return root.children[0];
}

console.log('=== 0 faces ===');
{
  const el = renderPanel([]);
  console.log('  text:', el.textContent);
  check(el.style.display === 'block', 'the panel still shows with nothing to dig');
  check(/rien.*creuser/.test(el.textContent), 'an empty chantier list reads as such, not as a blank line');
}

console.log('\n=== 1 face ===');
{
  const el = renderPanel([{ id: 'face-hall', worked: 30, needed: 75, diggers: 2 }]);
  console.log('  text:', el.textContent);
  check(/le hall/.test(el.textContent), 'the founding face is still named "le hall"');
  check(/2 au front/.test(el.textContent), 'its crew size is shown');
}

console.log('\n=== 3 faces ===');
{
  const faces = [
    { id: 'face-hall-n', worked: 75, needed: 75, diggers: 0 },
    { id: 'face-hall-e', worked: 10, needed: 75, diggers: 3 },
    { id: 'face-hall-w', worked: 0, needed: 75, diggers: 0 },
  ];
  const el = renderPanel(faces);
  console.log('  text:', el.textContent);
  for (const f of faces) check(new RegExp(f.id).test(el.textContent), `face ${f.id} is listed, by its own id, no hardcoded name`);
  check(/3 au front/.test(el.textContent), 'the busiest face shows its crew');
  check((el.textContent.match(/personne/g) || []).length === 2, 'the two idle faces both read as unattended');
}

console.log(failures ? `\n${failures} FAILURE(S)` : '\nALL CHECKS PASSED');
process.exit(failures ? 1 : 0);

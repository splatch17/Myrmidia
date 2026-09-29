/* ==========================================================================
   The entity layer (#36): every ant is the same kind of record, and being
   played is an attribute one of them has.

   AN ENTITY IS an ant-record (`ant`, legs.js), its `legState`, a `profile`
   (the caste — avatar.js), a brain name `ai` and a `controlled` flag:

       queen   : { id: 'queen', profileId: 'queen', ai: 'idle',   ... }  built here
       workers : { id, profileId: 'worker'|'digger', ai: 'forage'|'dig', ... }  colony.js

   The queen is not in colony.state.workers (she is founded, never hatched, and
   the colony's loops assume a worker), so this layer is the one place that
   sees both. It owns NOTHING about how an ant moves: the controlled one is
   steered by player/index.js through movement.js, every other one by its
   brain (colony.js runs `forage` and `dig`; `idle` is "stand still and let the
   legs settle", done by index.js because it needs the mesh rig).

   EXACTLY ONE ANT IS CONTROLLED AT A TIME. takeControl(id) is the only door:
   it flips the two flags, tells the colony to restart the released ant's brain
   from a clean slate (colony.resetBrain), and tells every listener — the
   player controller (body, camera, HUD) and, from #84, the "the queen has
   settled, play the first worker" rule. Listeners get
       { from: entity|null, to: entity, reason: string }
   and the same payload is dispatched on `window` as a `control-change`
   CustomEvent, for code that has no reference to this object.

   ROSTER ORDER (Tab): the queen, then workers in hatch order. A stable order
   is learnable — a nearest-first order reshuffles as you walk, so the same
   key lands somewhere different each time. Nearest ant by pointing is the
   click (index.js pickAntAt()).
   ========================================================================== */

export function createEntities({ queen, colony }) {
  queen.controlled = true;
  const listeners = new Set();
  const roster = [];

  function all() {
    roster.length = 0;
    roster.push(queen);
    const ws = colony.state.workers;
    for (let i = 0; i < ws.length; i++) roster.push(ws[i]);
    return roster;
  }

  function get(id) {
    if (id === queen.id) return queen;
    return colony.state.workers.find((w) => w.id === id) || null;
  }

  function controlled() {
    if (queen.controlled) return queen;
    return colony.state.workers.find((w) => w.controlled) || queen;
  }

  /** The entity that manages the colony (the profile's `manages` flag) — the
   *  owner of the queen's menu, wherever the player happens to be. */
  function manager() {
    const list = all();
    for (let i = 0; i < list.length; i++) if (list[i].profile.manages) return list[i];
    return null;
  }

  /**
   * Move control to ant `id`. Returns false (and changes nothing) for an
   * unknown id, for the ant already controlled, or when `allowed()` refuses
   * (index.js: not while the burrow beat / laying sequence drives the queen).
   */
  let allowed = () => true;
  function takeControl(id, reason = 'api') {
    const to = get(id);
    if (!to) return false;
    const from = controlled();
    if (to === from) return false;
    if (!allowed(to, from)) return false;
    from.controlled = false;
    to.controlled = true;
    if (from !== queen) colony.resetBrain(from);
    const ev = { from, to, reason };
    for (const fn of listeners) fn(ev);
    if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') {
      window.dispatchEvent(new CustomEvent('control-change', { detail: ev }));
    }
    return true;
  }

  /** Tab (dir = 1) / Shift+Tab (dir = -1): the next ant in roster order. */
  function cycle(dir = 1, reason = 'tab') {
    const list = all();
    if (list.length < 2) return false;
    const i = list.indexOf(controlled());
    for (let k = 1; k < list.length; k++) {
      const cand = list[(i + dir * k + list.length * k) % list.length];
      if (takeControl(cand.id, reason)) return true;
    }
    return false;
  }

  return {
    queen, all, get, controlled, manager, takeControl, cycle,
    setGuard(fn) { allowed = fn || (() => true); },
    onChange(fn) { listeners.add(fn); return () => listeners.delete(fn); },
  };
}

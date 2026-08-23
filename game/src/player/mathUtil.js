// One small helper the rest of the player module needs that doesn't belong
// in core/noise.js (which is world-generation math, not player/camera math):
// damp an angle toward a target the short way around the circle. Ported
// verbatim from design/prototypes/sortie-fourmiliere.html's dampAngle().
export function dampAngle(a, b, rate, dt) {
  const d = ((b - a + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
  return a + d * (1 - Math.exp(-rate * dt));
}

/**
 * Limite une valeur numérique à un intervalle spécifié.
 *
 * @param {number} value - La valeur à contraindre.
 * @param {number} min   - La borne inférieure de l'intervalle.
 * @param {number} max   - La borne supérieure de l'intervalle.
 * @returns {number} La valeur contrainte : `min` si `value` est inférieur à `min`,
 *                   `max` si `value` est supérieur à `max`, sinon `value`.
 *
 * @example
 * // Retourne 5
 * clampToRange(3, 5, 10);
 *
 * // Retourne 10
 * clampToRange(12, 5, 10);
 *
 * // Retourne 7
 * clampToRange(7, 5, 10);
 */
export function clampToRange(value, min, max) {
    if (value < min) {
        return min;
    }
    if (value > max) {
        return max;
    }
    return value;
}

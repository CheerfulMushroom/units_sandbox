/** Проверка массива на монотонность */
/** Например, isMono([0, 1, 5, 9, 15]) вернет true */
/**
 *
 * @param {Array} values
 */
export function isMono(values) {
    if (values.length <= 2) {
        return true;
    }

    const delta = values[1] - values[0];

    for (let i = 0; i < values.length - 1; i++) {
        if (values[i+1] - values[i] !== delta) {
            return false;
        }
    }

    return true;
}

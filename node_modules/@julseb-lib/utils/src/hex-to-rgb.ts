/*=============================================== Hex to RGB ===============================================*/

/**
 * @description Convert a Hex value to RGB
 * @param hex: string
 * @example hexToRgb("#1B4568") => (27, 69, 104)
 */

export function hexToRgb(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

    if (!result) return null

    const r = parseInt(result[1], 16)
    const g = parseInt(result[2], 16)
    const b = parseInt(result[3], 16)

    return `(${r}, ${g}, ${b})`
}

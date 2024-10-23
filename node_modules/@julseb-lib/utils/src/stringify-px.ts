/*=============================================== Stringify px ===============================================*/

/**
 * @description Transform a value to `{value}px`
 * @param value: number | string
 * @example stringifyPx(123) => 123px
 */

export function stringifyPx(value: number | string): string {
    if (typeof value === "string") {
        return value
    } else {
        return `${value}px`
    }
}

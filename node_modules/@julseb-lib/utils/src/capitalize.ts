/*=============================================== Capitalize ===============================================*/

/**
 * @description Capitalize a string
 * @param string: string
 * @example capitalize("hello world") => Hello world
 */

export function capitalize(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

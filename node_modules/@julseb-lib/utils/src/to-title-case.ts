/*=============================================== To title case ===============================================*/

import { toBaseCase } from "./to-base-case"

/**
 * @description Transforms a string To Title Case
 * @param string: string
 * @example toTitleCase("hello world") => Hello World
 */

export function toTitleCase(string: string): string {
    const formattedString = toBaseCase(string)

    const arr = formattedString.toLowerCase().split(" ")

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }

    return arr.join(" ")
}

/*=============================================== To camel case ===============================================*/

import { toBaseCase } from "./to-base-case"

/**
 * @description Transforms a string toCamelCase
 * @param string: string
 * @example toCamelCase("hello world") => helloWorld
 */

export function toCamelCase(string: string): string {
    const formattedString = toBaseCase(string)

    return formattedString
        .toLowerCase()
        .replace(new RegExp(/[-_]+/g), " ")
        .replace(new RegExp(/[^\w\s]/g), "")
        .replace(
            new RegExp(/\s+(.)(\w*)/g),
            (_, $2, $3) => `${$2.toUpperCase() + $3}`
        )
}

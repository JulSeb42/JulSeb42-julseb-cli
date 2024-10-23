/*=============================================== To sentence case ===============================================*/

import { toBaseCase } from "./to-base-case"

/**
 * @description Transforms a string To sentence case
 * @param string: string
 * @example toSentenceCase("hello world") => Hello world
 */

export function toSentenceCase(string: string): string | undefined {
    const formattedString = toBaseCase(string)

    return (
        formattedString.toLowerCase().charAt(0).toUpperCase() +
        formattedString.slice(1).toLowerCase()
    )
}

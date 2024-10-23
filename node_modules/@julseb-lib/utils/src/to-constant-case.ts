/*=============================================== To constant case ===============================================*/

import { toBaseCase } from "./to-base-case"

/**
 * @description Transforms a string TO_CONSTANT_CASE
 * @param string: string
 * @example toConstantCase("hello world") => HELLO_WORLD
 */

export function toConstantCase(string: string): string | undefined {
    const formattedString = toBaseCase(string)

    return formattedString
        .match(
            /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
        )
        ?.map(x => x.toLowerCase())
        .join("_")
        .toUpperCase()
}

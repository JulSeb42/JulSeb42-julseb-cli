/*=============================================== To dot case ===============================================*/

import { toBaseCase } from "./to-base-case"

/**
 * @description Transforms a string to.dot.case
 * @param string: string
 * @example toDotCase("hello world") => hello.world
 */

export function toDotCase(string: string): string | undefined {
    const formattedString = toBaseCase(string)

    return formattedString
        .match(
            /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
        )
        ?.map(x => x.toLowerCase())
        .join(".")
}

/*=============================================== To path case ===============================================*/

import { toBaseCase } from "./to-base-case"

/**
 * @description Transforms a string to/path/case
 * @param string: string
 * @example toPathCase("hello world") => hello/world
 */

export function toPathCase(string: string): string | undefined {
    const formattedString = toBaseCase(string)

    return formattedString
        .match(
            /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
        )
        ?.map(x => x.toLowerCase())
        .join("/")
}

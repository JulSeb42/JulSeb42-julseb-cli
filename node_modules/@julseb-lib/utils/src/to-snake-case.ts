/*=============================================== To snake case ===============================================*/

import { toBaseCase } from "./to-base-case"

/**
 * @description Transforms a string to_snake_case
 * @param string: string
 * @example toSnakeCase("hello world") => hello_world
 */

export function toSnakeCase(string: string): string | undefined {
    const formattedString = toBaseCase(string)

    return formattedString
        .match(
            /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
        )
        ?.map(x => x.toLowerCase())
        .join("_")
}

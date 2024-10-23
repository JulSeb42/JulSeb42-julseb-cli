/*=============================================== To kebab case ===============================================*/

import { slugify } from "./slugify"

/**
 * @description Transforms a string to-kebab-case
 * @param string: string
 * @example toKebabCase("hello world") => hello-world
 */

export function toKebabCase(string: string): string {
    return slugify(string)
}

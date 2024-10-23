/*=============================================== Convert to email ===============================================*/

import { slugify } from "./slugify"

/**
 * @description Converts a string to an email address
 * @param name: string
 * @param domain?: string
 * @example convertToEmail("Foo Baz") => foo.baz@email.com
 */

export function convertToEmail(name: string, domain = "email.com"): string {
    return `${slugify(name).replace(/-/g, ".").replace(/ /g, ".")}@${domain}`
}

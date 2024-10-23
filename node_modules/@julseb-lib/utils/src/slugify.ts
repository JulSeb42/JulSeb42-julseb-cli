/*=============================================== Slugify ===============================================*/

import { toBaseCase } from "./to-base-case"

/**
 * @description Slugify string
 * @param string: string
 * @example slugify("Hello World") => hello-world
 */

export function slugify(string: string): string {
    let formattedString = toBaseCase(string)

    formattedString = formattedString.replace(/^\s+|\s+$/g, "")
    formattedString = formattedString.toLowerCase()

    const from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;-"
    const to = "aaaaeeeeiiiioooouuuunc-- --- "
    for (let i = 0, l = from.length; i < l; i++) {
        formattedString = formattedString.replace(
            new RegExp(from.charAt(i), "g"),
            to.charAt(i)
        )
    }

    formattedString = formattedString
        .replace(/[^a-z0-9 -]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")

    return formattedString
}

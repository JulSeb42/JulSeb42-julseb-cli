/*=============================================== Unslugify ===============================================*/

import { toSentenceCase } from "./to-sentence-case"

/**
 * @description Unslugify a string
 * @param string: string
 * @example unslugify("hello_world-foo") => Hello world foo
 */

export function unslugify(string: string): string | undefined {
    return toSentenceCase(string.replace(/-/g, " ").replace(/_/g, " "))
}

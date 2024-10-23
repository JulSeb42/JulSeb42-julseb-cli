/*=============================================== Detect language ===============================================*/

/**
 * @description Detects `lang` value in local storage or from navigator
 * @example detectLanguage() => fr
 */

export function detectLanguage() {
    if (typeof window !== "undefined") {
        if (localStorage.getItem("language") !== null) {
            return localStorage.getItem("language")
        } else if (localStorage.getItem("lang") !== null) {
            return localStorage.getItem("lang")
        } else {
            return navigator.language
        }
    }
}

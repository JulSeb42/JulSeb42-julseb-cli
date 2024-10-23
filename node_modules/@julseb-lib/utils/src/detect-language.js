"use strict";
/*=============================================== Detect language ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectLanguage = void 0;
/**
 * @description Detects `lang` value in local storage or from navigator
 * @example detectLanguage() => fr
 */
function detectLanguage() {
    if (typeof window !== "undefined") {
        if (localStorage.getItem("language") !== null) {
            return localStorage.getItem("language");
        }
        else if (localStorage.getItem("lang") !== null) {
            return localStorage.getItem("lang");
        }
        else {
            return navigator.language;
        }
    }
}
exports.detectLanguage = detectLanguage;

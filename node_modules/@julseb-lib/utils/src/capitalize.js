"use strict";
/*=============================================== Capitalize ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = void 0;
/**
 * @description Capitalize a string
 * @param string: string
 * @example capitalize("hello world") => Hello world
 */
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
exports.capitalize = capitalize;

"use strict";
/*=============================================== RGB to Hex ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgbToHex = void 0;
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
/**
 * @description Convert a RGB value to Hex
 * @param r: number
 * @param g: number
 * @param b: number
 * @example rgbToHex(27, 69, 104) => ("#1B4568")
 */
function rgbToHex(r, g, b) {
    return "#".concat(componentToHex(r)).concat(componentToHex(g)).concat(componentToHex(b));
}
exports.rgbToHex = rgbToHex;

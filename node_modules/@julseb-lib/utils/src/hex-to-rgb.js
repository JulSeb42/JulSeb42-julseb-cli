"use strict";
/*=============================================== Hex to RGB ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexToRgb = void 0;
/**
 * @description Convert a Hex value to RGB
 * @param hex: string
 * @example hexToRgb("#1B4568") => (27, 69, 104)
 */
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result)
        return null;
    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);
    return "(".concat(r, ", ").concat(g, ", ").concat(b, ")");
}
exports.hexToRgb = hexToRgb;

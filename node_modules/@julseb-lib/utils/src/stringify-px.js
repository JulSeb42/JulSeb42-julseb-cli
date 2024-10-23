"use strict";
/*=============================================== Stringify px ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringifyPx = void 0;
/**
 * @description Transform a value to `{value}px`
 * @param value: number | string
 * @example stringifyPx(123) => 123px
 */
function stringifyPx(value) {
    if (typeof value === "string") {
        return value;
    }
    else {
        return "".concat(value, "px");
    }
}
exports.stringifyPx = stringifyPx;

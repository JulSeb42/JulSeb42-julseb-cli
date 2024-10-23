"use strict";
/*=============================================== To title case ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.toTitleCase = void 0;
var to_base_case_1 = require("./to-base-case");
/**
 * @description Transforms a string To Title Case
 * @param string: string
 * @example toTitleCase("hello world") => Hello World
 */
function toTitleCase(string) {
    var formattedString = (0, to_base_case_1.toBaseCase)(string);
    var arr = formattedString.toLowerCase().split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
}
exports.toTitleCase = toTitleCase;

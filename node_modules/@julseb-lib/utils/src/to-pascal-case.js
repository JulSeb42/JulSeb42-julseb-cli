"use strict";
/*=============================================== To pascal case ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPascalCase = void 0;
var to_base_case_1 = require("./to-base-case");
/**
 * @description Transforms a string ToPascalCase
 * @param string: string
 * @example toPascalCase("hello world") => HelloWorld
 */
function toPascalCase(string) {
    var formattedString = (0, to_base_case_1.toBaseCase)(string);
    return formattedString
        .toLowerCase()
        .replace(new RegExp(/[-_]+/g), " ")
        .replace(new RegExp(/[^\w\s]/g), "")
        .replace(new RegExp(/\s+(.)(\w*)/g), function (_, $2, $3) { return "".concat($2.toUpperCase() + $3); })
        .replace(new RegExp(/\w/), function (s) { return s.toUpperCase(); });
}
exports.toPascalCase = toPascalCase;

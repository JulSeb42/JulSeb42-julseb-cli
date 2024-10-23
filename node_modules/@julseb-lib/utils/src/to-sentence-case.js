"use strict";
/*=============================================== To sentence case ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSentenceCase = void 0;
var to_base_case_1 = require("./to-base-case");
/**
 * @description Transforms a string To sentence case
 * @param string: string
 * @example toSentenceCase("hello world") => Hello world
 */
function toSentenceCase(string) {
    var formattedString = (0, to_base_case_1.toBaseCase)(string);
    return (formattedString.toLowerCase().charAt(0).toUpperCase() +
        formattedString.slice(1).toLowerCase());
}
exports.toSentenceCase = toSentenceCase;

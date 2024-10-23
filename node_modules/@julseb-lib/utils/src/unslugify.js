"use strict";
/*=============================================== Unslugify ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.unslugify = void 0;
var to_sentence_case_1 = require("./to-sentence-case");
/**
 * @description Unslugify a string
 * @param string: string
 * @example unslugify("hello_world-foo") => Hello world foo
 */
function unslugify(string) {
    return (0, to_sentence_case_1.toSentenceCase)(string.replace(/-/g, " ").replace(/_/g, " "));
}
exports.unslugify = unslugify;

"use strict";
/*=============================================== To kebab case ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.toKebabCase = void 0;
var slugify_1 = require("./slugify");
/**
 * @description Transforms a string to-kebab-case
 * @param string: string
 * @example toKebabCase("hello world") => hello-world
 */
function toKebabCase(string) {
    return (0, slugify_1.slugify)(string);
}
exports.toKebabCase = toKebabCase;

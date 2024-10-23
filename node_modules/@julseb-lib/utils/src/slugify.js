"use strict";
/*=============================================== Slugify ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.slugify = void 0;
var to_base_case_1 = require("./to-base-case");
/**
 * @description Slugify string
 * @param string: string
 * @example slugify("Hello World") => hello-world
 */
function slugify(string) {
    var formattedString = (0, to_base_case_1.toBaseCase)(string);
    formattedString = formattedString.replace(/^\s+|\s+$/g, "");
    formattedString = formattedString.toLowerCase();
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;-";
    var to = "aaaaeeeeiiiioooouuuunc-- --- ";
    for (var i = 0, l = from.length; i < l; i++) {
        formattedString = formattedString.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
    }
    formattedString = formattedString
        .replace(/[^a-z0-9 -]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
    return formattedString;
}
exports.slugify = slugify;

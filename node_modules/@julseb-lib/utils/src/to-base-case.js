"use strict";
/*=============================================== To base case ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBaseCase = void 0;
// ! DO NOT EXPORT THIS COMPONENT FROM LIBRARY
function toBaseCase(string) {
    var splitted = string
        .split(/\.?(?=[A-Z])/)
        .join(" ")
        .toLowerCase();
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;-";
    var to = "aaaaeeeeiiiioooouuuunc-- --- ";
    for (var i = 0, l = from.length; i < l; i++) {
        splitted = splitted.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
    }
    return splitted;
}
exports.toBaseCase = toBaseCase;

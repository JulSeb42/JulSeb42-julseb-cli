"use strict";
/*=============================================== Get initials ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInitials = void 0;
/**
 * @description Get initials of a full name
 * @param fullName: string
 * @example getInitials("John Doe") => JD
 */
function getInitials(fullName) {
    var splitted = fullName.split(" ");
    return "".concat(splitted[0][0]).concat(splitted[splitted.length - 1][0]);
}
exports.getInitials = getInitials;

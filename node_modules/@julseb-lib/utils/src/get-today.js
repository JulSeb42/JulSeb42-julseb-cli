"use strict";
/*=============================================== Get today ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToday = void 0;
/**
 * @description Get today's date in format `yyyy-mm-dd`
 * @example getToday() => 2023-08-21
 */
function getToday() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yy = today.getFullYear();
    if (dd < 10) {
        dd = "0" + dd;
    }
    if (mm < 10) {
        mm = "0" + mm;
    }
    return "".concat(yy, "-").concat(mm, "-").concat(dd);
}
exports.getToday = getToday;

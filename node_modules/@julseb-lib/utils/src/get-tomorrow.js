"use strict";
/*=============================================== Get tomorrow ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTomorrow = void 0;
/**
 * @description Get tomorrow's date in format `yyyy-mm-dd`
 * @example getTomorrow() => 2023-08-22
 */
function getTomorrow() {
    var tomorrow = new Date(Date.now() + 3600 * 1000 * 24);
    var dd = tomorrow.getDate();
    var mm = tomorrow.getMonth() + 1;
    var yy = tomorrow.getFullYear();
    if (dd < 10) {
        dd = "0" + dd;
    }
    if (mm < 10) {
        mm = "0" + mm;
    }
    return "".concat(yy, "-").concat(mm, "-").concat(dd);
}
exports.getTomorrow = getTomorrow;

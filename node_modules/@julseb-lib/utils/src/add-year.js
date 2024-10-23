"use strict";
/*=============================================== Add year ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.addYear = void 0;
var get_today_1 = require("./get-today");
/**
 * @description Add a number of years to a set date
 * @param numberOfYears: number
 * @param dateFrom? string
 * @example addYear(1, "24-08-23") => Sat Aug 23 2025 02:00:00 GMT+0200
 */
function addYear(numberOfYears, dateFrom) {
    if (dateFrom === void 0) { dateFrom = (0, get_today_1.getToday)(); }
    var date = new Date(dateFrom);
    return new Date(date.setFullYear(date.getFullYear() + numberOfYears));
}
exports.addYear = addYear;

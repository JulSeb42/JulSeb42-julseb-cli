"use strict";
/*=============================================== Add month ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMonth = void 0;
var get_today_1 = require("./get-today");
/**
 * @description Add a number of months to a set date
 * @param numberOfMonths: number
 * @param dateFrom? string
 * @example addMonth(1, "24-08-23") => Mon Sep 23 2024 02:00:00 GMT+0200
 */
function addMonth(numberOfMonths, dateFrom) {
    if (dateFrom === void 0) { dateFrom = (0, get_today_1.getToday)(); }
    var date = new Date(dateFrom);
    return new Date(date.setMonth(date.getMonth() + numberOfMonths));
}
exports.addMonth = addMonth;

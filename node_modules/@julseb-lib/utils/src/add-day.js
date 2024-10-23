"use strict";
/*=============================================== Add day ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDay = void 0;
var get_today_1 = require("./get-today");
/**
 * @description Add a number of days to a set date
 * @param numberOfDays: number
 * @param dateFrom? string
 * @example addDay(1, "24-08-23") => Sat Aug 24 2024 02:00:00 GMT+0200
 */
function addDay(numberOfDays, dateFrom) {
    if (dateFrom === void 0) { dateFrom = (0, get_today_1.getToday)(); }
    var date = new Date(dateFrom);
    return new Date(date.setDate(date.getDate() + numberOfDays));
}
exports.addDay = addDay;

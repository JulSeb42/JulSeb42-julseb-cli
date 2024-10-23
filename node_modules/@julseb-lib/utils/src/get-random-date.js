"use strict";
/*=============================================== Get a random date ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomDate = void 0;
/**
 * @description Get a random date with format `yyyy-mm-dd`
 * @param minYear?: number
 * @param maxYear?: number
 * @default minYear: current year
 * @default maxYear: current year
 * @example getRandomDate(2021, 2022) => 2021-09-17
 */
function getRandomDate(minYear, maxYear) {
    var thisYear = new Date().getFullYear();
    var getMinYear = minYear || thisYear;
    var getMaxYear = maxYear || thisYear;
    var day = Math.floor(Math.random() * (30 - 1)) + 1;
    var month = Math.floor(Math.random() * (12 - 1)) + 1;
    var year = Math.floor(Math.random() * (getMaxYear - getMinYear + 1) + getMinYear);
    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }
    if (month === "02") {
        day = Math.floor(Math.random() * (28 - 1)) + 1;
    }
    return "".concat(year, "-").concat(month, "-").concat(day);
}
exports.getRandomDate = getRandomDate;

"use strict";
/*=============================================== Convert date ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertDate = void 0;
/**
 * @description Convert a date string to a full date
 * @param date: Date | string
 * @example convertDateShort("2023-08-12") => 12 August 2023
 */
function convertDate(date) {
    date = typeof date === "string" ? new Date(date) : date;
    var formatDate = function (year, month, day) {
        return "".concat(year, "-").concat(month < 10 ? 0 : "").concat(month, "-").concat(day);
    };
    var formated = formatDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
    var splitted = formated.split("-");
    var day = splitted[2];
    var month = splitted[1];
    var year = splitted[0];
    var convertedMonth = month === "01"
        ? "January"
        : month === "02"
            ? "February"
            : month === "03"
                ? "March"
                : month === "04"
                    ? "April"
                    : month === "05"
                        ? "May"
                        : month === "06"
                            ? "June"
                            : month === "07"
                                ? "July"
                                : month === "08"
                                    ? "August"
                                    : month === "09"
                                        ? "September"
                                        : month === "10"
                                            ? "October"
                                            : month === "11"
                                                ? "November"
                                                : month === "12"
                                                    ? "December"
                                                    : "Error in date";
    return "".concat(day, " ").concat(convertedMonth, " ").concat(year);
}
exports.convertDate = convertDate;

"use strict";
/*=============================================== Format hour ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatHour = void 0;
/**
 * @description Format hour with half times
 * @param hour: number
 * @example formatHour(3.5) => 03:30
 */
function formatHour(hour) {
    var hourTime = (hour < 10 ? "0" : "") + Math.floor(hour);
    var minutes = "".concat(hour % 1 !== 0 ? 3 : 0, "0");
    return "".concat(hourTime, ":").concat(minutes);
}
exports.formatHour = formatHour;

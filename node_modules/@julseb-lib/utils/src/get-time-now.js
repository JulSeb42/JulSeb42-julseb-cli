"use strict";
/*=============================================== Get time now ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimeNow = void 0;
/**
 * @description Get the time now
 * @param options?: { withSeconds?: boolean; withMiliSeconds?: boolean }
 * @example getTimeNow() => 11:22
 */
function getTimeNow(options) {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var mili = today.getMilliseconds();
    if (hours < 10) {
        hours = "0".concat(hours);
    }
    if (minutes < 10) {
        minutes = "0".concat(minutes);
    }
    if (seconds < 10) {
        seconds = "0".concat(seconds);
    }
    if (mili < 10) {
        mili = "0".concat(mili);
    }
    return "".concat(hours, ":").concat(minutes).concat((options === null || options === void 0 ? void 0 : options.withSeconds) || (options === null || options === void 0 ? void 0 : options.withMiliSeconds) ? ":".concat(seconds) : "").concat((options === null || options === void 0 ? void 0 : options.withMiliSeconds) ? ":".concat(mili) : "");
}
exports.getTimeNow = getTimeNow;

"use strict";
/*=============================================== Get random time ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomTime = void 0;
/**
 * @description Get a random time
 * @param min?: number
 * @param max?: number
 * @param withSeconds?: boolean
 * @default min: 0
 * @default max: 23
 * @default withSeconds: false
 * @example getRandomTime() => 03:04
 */
function getRandomTime(min, max, withSeconds) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 23; }
    var hour = Math.floor(Math.random() * (max - min)) + min;
    var minutes = Math.floor(Math.random() * (59 - 0) + 0);
    var seconds = Math.floor(Math.random() * (59 - 0) + 0);
    if (hour < 10) {
        hour = "0".concat(hour);
    }
    if (minutes < 10) {
        minutes = "0".concat(minutes);
    }
    if (seconds < 10) {
        seconds = "0".concat(seconds);
    }
    return "".concat(hour, ":").concat(minutes).concat(withSeconds ? ":".concat(seconds) : "");
}
exports.getRandomTime = getRandomTime;

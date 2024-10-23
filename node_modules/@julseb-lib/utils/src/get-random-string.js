"use strict";
/*=============================================== Get random string ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomString = void 0;
/**
 * @description Get a random string
 * @param length?: number
 * @default length: 20
 * @example getRandomString() => MHFTIzosZmtqHokDtJJA
 */
function getRandomString(length, noNumbers) {
    if (length === void 0) { length = 20; }
    var randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789";
    var fullString = noNumbers ? randomChars : "".concat(randomChars).concat(numbers);
    var result = "";
    for (var i = 0; i < length; i++) {
        result += fullString.charAt(Math.floor(Math.random() * fullString.length));
    }
    return result;
}
exports.getRandomString = getRandomString;

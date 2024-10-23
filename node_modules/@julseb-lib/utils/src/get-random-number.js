"use strict";
/*=============================================== Get random number ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomNumber = void 0;
/**
 * @description Get random number between set values
 * @param min?: number
 * @param max?: number
 * @default min: 0
 * @default max: 100
 * @example getRandomNumber(18, 56) => 42
 */
function getRandomNumber(min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 100; }
    return Math.floor(Math.random() * (max - min + 1) + min);
}
exports.getRandomNumber = getRandomNumber;

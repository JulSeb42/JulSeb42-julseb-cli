"use strict";
/*=============================================== Generate numbers ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNumbers = void 0;
/**
 * @description Generates an array of numbers
 * @param min?: number
 * @param max?: number
 * @param step?: number
 * @example generateNumbers(0, 4) => [0, 1, 2, 3, 4]
 */
function generateNumbers(min, max, step) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 100; }
    if (step === void 0) { step = 1; }
    var arr = [];
    for (var i = min; i < max + 1; i += step) {
        arr.push(i);
    }
    return arr;
}
exports.generateNumbers = generateNumbers;

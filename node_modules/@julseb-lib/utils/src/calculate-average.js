"use strict";
/*=============================================== Calculate average ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAverage = void 0;
/**
 * @description Calculate an average number for an array of numbers
 * @param array: number[]
 * @example calculateAverage([1, 2, 3, 4]) => 2.5
 */
function calculateAverage(array) {
    return array.reduce(function (a, b) { return a + b; }, 0) / array.length;
}
exports.calculateAverage = calculateAverage;

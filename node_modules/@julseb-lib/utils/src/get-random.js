"use strict";
/*=============================================== Get random ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandom = void 0;
/**
 * @description Get a random value from an array
 * @param array: T[]
 * @example getRandom([1, 2, 3, 4]) => 3
 */
function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}
exports.getRandom = getRandom;

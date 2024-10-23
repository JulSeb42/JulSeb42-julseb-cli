"use strict";
/*=============================================== Get percentage ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPercentage = void 0;
/**
 * @description Get percentage of given value
 * @param partial: number
 * @param total: number
 * @example getPercentage(200, 500) => 40
 */
function getPercentage(partial, total) {
    return (100 * partial) / total;
}
exports.getPercentage = getPercentage;

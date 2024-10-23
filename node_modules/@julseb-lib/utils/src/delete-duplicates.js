"use strict";
/*=============================================== Delete duplicates ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDuplicates = void 0;
/**
 * @description Delete duplicated values from array
 * @param array: T[]
 * @example deleteDuplicates([1, 1, 1, 2, 3]) => [1, 2, 3]
 */
function deleteDuplicates(array) {
    return array.filter(function (v, i, a) {
        // @ts-ignore
        return a.findIndex(function (v2) { return JSON.stringify(v2) === JSON.stringify(v); }) === i;
    });
}
exports.deleteDuplicates = deleteDuplicates;

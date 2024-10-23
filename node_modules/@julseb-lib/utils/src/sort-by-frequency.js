"use strict";
/*=============================================== Sort by frequency ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortByFrequency = void 0;
/**
 * @description Sort array of strings by frequency of values
 * @param array: T[]
 * @example sortByFrequency(["Hello", "Foo", "baz", "hello", "heLlo", "foo"]) => hello, foo, baz
 */
function sortByFrequency(array) {
    var frequency = {};
    var value;
    for (var i = 0; i < array.length; i++) {
        value = array[i].toLowerCase();
        if (value in frequency) {
            frequency[value]++;
        }
        else {
            frequency[value] = 1;
        }
    }
    var uniques = [];
    for (value in frequency) {
        uniques.push(value.toLowerCase());
    }
    var compareFrequency = function (a, b) {
        if (frequency[a] === frequency[b]) {
            return a - b;
        }
        return frequency[b] - frequency[a];
    };
    return uniques.sort(compareFrequency);
}
exports.sortByFrequency = sortByFrequency;

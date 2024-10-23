"use strict";
/*=============================================== Filter object ===============================================*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterObject = void 0;
/**
 * @description Filter any object by value
 * @param object: T
 * @param callback: (entry: Entry<T>, i: number, arr: Entry<T>[]) => boolean
 * @example filterObject({ id: 0, name: null }, ([_, v]) => v !== null) => { id: 0 }
 */
function filterObject(object, callback) {
    var next = __assign({}, object);
    var entries = [];
    for (var key in object) {
        entries.push([key, object[key]]);
    }
    for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];
        if (!callback(entry, i, entries)) {
            delete next[entry[0]];
        }
    }
    return next;
}
exports.filterObject = filterObject;

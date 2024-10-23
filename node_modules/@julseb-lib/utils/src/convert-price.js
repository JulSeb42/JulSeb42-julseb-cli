"use strict";
/*=============================================== Convert price to 100,00 € ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertPrice = void 0;
/**
 * @description Convert a price with currency
 * @param price: number
 * @param currency?: string
 * @default currency: "EUR"
 * @example convertPrice(100) => 100,00 €
 */
function convertPrice(price, currency) {
    if (currency === void 0) { currency = "EUR"; }
    var formatter = new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: currency,
    });
    return formatter.format(price);
}
exports.convertPrice = convertPrice;

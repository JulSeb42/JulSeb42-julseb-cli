/*=============================================== Convert price to 100,00 € ===============================================*/

/**
 * @description Convert a price with currency
 * @param price: number
 * @param currency?: string
 * @default currency: "EUR"
 * @example convertPrice(100) => 100,00 €
 */

export function convertPrice(price: number, currency: string = "EUR"): string {
    const formatter = new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: currency,
    })

    return formatter.format(price)
}

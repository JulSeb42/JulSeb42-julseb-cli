/*=============================================== Add month ===============================================*/

import { getToday } from "./get-today"

/**
 * @description Add a number of months to a set date
 * @param numberOfMonths: number
 * @param dateFrom? string
 * @example addMonth(1, "24-08-23") => Mon Sep 23 2024 02:00:00 GMT+0200
 */

export function addMonth(
    numberOfMonths: number,
    dateFrom: string = getToday()
) {
    const date = new Date(dateFrom)
    return new Date(date.setMonth(date.getMonth() + numberOfMonths))
}

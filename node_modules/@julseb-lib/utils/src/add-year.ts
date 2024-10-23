/*=============================================== Add year ===============================================*/

import { getToday } from "./get-today"

/**
 * @description Add a number of years to a set date
 * @param numberOfYears: number
 * @param dateFrom? string
 * @example addYear(1, "24-08-23") => Sat Aug 23 2025 02:00:00 GMT+0200
 */

export function addYear(numberOfYears: number, dateFrom: string = getToday()) {
    const date = new Date(dateFrom)
    return new Date(date.setFullYear(date.getFullYear() + numberOfYears))
}

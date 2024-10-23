/*=============================================== Add day ===============================================*/

import { getToday } from "./get-today"

/**
 * @description Add a number of days to a set date
 * @param numberOfDays: number
 * @param dateFrom? string
 * @example addDay(1, "24-08-23") => Sat Aug 24 2024 02:00:00 GMT+0200
 */

export function addDay(numberOfDays: number, dateFrom: string = getToday()) {
    const date = new Date(dateFrom)
    return new Date(date.setDate(date.getDate() + numberOfDays))
}

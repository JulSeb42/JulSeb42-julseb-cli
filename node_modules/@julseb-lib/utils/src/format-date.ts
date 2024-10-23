/*=============================================== Format date ===============================================*/

/**
 * @description Format a Date to `yyyy-mm-dd`
 * @param date: Date | string
 * @example formatDate(new Date("Mon Aug 21 2023 17:01:50 GMT+0100")) => 2023-08-21
 */

export function formatDate(date: Date | string): string {
    const formattedDate = new Date(date.toString())

    const year = formattedDate.getFullYear()
    let month: string | number = formattedDate.getMonth() + 1
    let day: string | number = formattedDate.getDate()

    if (month < 10) month = `0${month}`

    if (day < 10) day = `0${day}`

    return `${year}-${month}-${day}`
}

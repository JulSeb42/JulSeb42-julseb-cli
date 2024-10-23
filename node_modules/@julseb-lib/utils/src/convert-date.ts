/*=============================================== Convert date ===============================================*/

/**
 * @description Convert a date string to a full date
 * @param date: Date | string
 * @example convertDateShort("2023-08-12") => 12 August 2023
 */

export function convertDate(date: Date | string): string {
    date = typeof date === "string" ? new Date(date) : date

    const formatDate = (year: number, month: number, day: number) =>
        `${year}-${month < 10 ? 0 : ""}${month}-${day}`

    const formated = formatDate(
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
    )

    const splitted = formated.split("-")

    const day = splitted[2]
    let month = splitted[1]
    const year = splitted[0]

    let convertedMonth =
        month === "01"
            ? "January"
            : month === "02"
            ? "February"
            : month === "03"
            ? "March"
            : month === "04"
            ? "April"
            : month === "05"
            ? "May"
            : month === "06"
            ? "June"
            : month === "07"
            ? "July"
            : month === "08"
            ? "August"
            : month === "09"
            ? "September"
            : month === "10"
            ? "October"
            : month === "11"
            ? "November"
            : month === "12"
            ? "December"
            : "Error in date"

    return `${day} ${convertedMonth} ${year}`
}

/*=============================================== Get a random date ===============================================*/

/**
 * @description Get a random date with format `yyyy-mm-dd`
 * @param minYear?: number
 * @param maxYear?: number
 * @default minYear: current year
 * @default maxYear: current year
 * @example getRandomDate(2021, 2022) => 2021-09-17
 */

export function getRandomDate(minYear?: number, maxYear?: number): string {
    const thisYear = new Date().getFullYear()
    const getMinYear = minYear || thisYear
    const getMaxYear = maxYear || thisYear

    let day: number | string = Math.floor(Math.random() * (30 - 1)) + 1
    let month: number | string = Math.floor(Math.random() * (12 - 1)) + 1
    let year = Math.floor(
        Math.random() * (getMaxYear - getMinYear + 1) + getMinYear
    )

    if (day < 10) {
        day = "0" + day
    }

    if (month < 10) {
        month = "0" + month
    }

    if (month === "02") {
        day = Math.floor(Math.random() * (28 - 1)) + 1
    }

    return `${year}-${month}-${day}`
}

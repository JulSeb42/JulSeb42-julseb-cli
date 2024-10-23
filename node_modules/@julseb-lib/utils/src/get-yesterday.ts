/*=============================================== Get tomorrow ===============================================*/

/**
 * @description Get yesterday's date in format `yyyy-mm-dd`
 * @example getYesterday() => 2023-08-20
 */

export function getYesterday(): string {
    const tomorrow = new Date(Date.now() - 3600 * 1000 * 24)
    let dd: string | number = tomorrow.getDate()
    let mm: string | number = tomorrow.getMonth() + 1
    let yy: string | number = tomorrow.getFullYear()

    if (dd < 10) {
        dd = "0" + dd
    }

    if (mm < 10) {
        mm = "0" + mm
    }

    return `${yy}-${mm}-${dd}`
}

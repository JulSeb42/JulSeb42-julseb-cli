/*=============================================== Get tomorrow ===============================================*/

/**
 * @description Get tomorrow's date in format `yyyy-mm-dd`
 * @example getTomorrow() => 2023-08-22
 */

export function getTomorrow(): string {
    const tomorrow = new Date(Date.now() + 3600 * 1000 * 24)
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

/*=============================================== Get time now ===============================================*/

/**
 * @description Get the time now
 * @param options?: { withSeconds?: boolean; withMiliSeconds?: boolean }
 * @example getTimeNow() => 11:22
 */

export function getTimeNow(options?: {
    withSeconds?: boolean
    withMiliSeconds?: boolean
}): string {
    const today = new Date()
    let hours: number | string = today.getHours()
    let minutes: number | string = today.getMinutes()
    let seconds: number | string = today.getSeconds()
    let mili: number | string = today.getMilliseconds()

    if (hours < 10) {
        hours = `0${hours}`
    }

    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    if (seconds < 10) {
        seconds = `0${seconds}`
    }

    if (mili < 10) {
        mili = `0${mili}`
    }

    return `${hours}:${minutes}${
        options?.withSeconds || options?.withMiliSeconds ? `:${seconds}` : ""
    }${options?.withMiliSeconds ? `:${mili}` : ""}`
}

/*=============================================== Get random time ===============================================*/

/**
 * @description Get a random time
 * @param min?: number
 * @param max?: number
 * @param withSeconds?: boolean
 * @default min: 0
 * @default max: 23
 * @default withSeconds: false
 * @example getRandomTime() => 03:04
 */

export function getRandomTime(
    min = 0,
    max = 23,
    withSeconds?: boolean
): string {
    let hour: number | string = Math.floor(Math.random() * (max - min)) + min
    let minutes: number | string = Math.floor(Math.random() * (59 - 0) + 0)
    let seconds: number | string = Math.floor(Math.random() * (59 - 0) + 0)

    if (hour < 10) {
        hour = `0${hour}`
    }

    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    if (seconds < 10) {
        seconds = `0${seconds}`
    }

    return `${hour}:${minutes}${withSeconds ? `:${seconds}` : ""}`
}

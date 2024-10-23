/*=============================================== Format hour ===============================================*/

/**
 * @description Format hour with half times
 * @param hour: number
 * @example formatHour(3.5) => 03:30
 */

export function formatHour(hour: number): string {
    const hourTime = (hour < 10 ? "0" : "") + Math.floor(hour)
    const minutes = `${hour % 1 !== 0 ? 3 : 0}0`

    return `${hourTime}:${minutes}`
}

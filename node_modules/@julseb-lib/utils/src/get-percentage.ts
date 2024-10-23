/*=============================================== Get percentage ===============================================*/

/**
 * @description Get percentage of given value
 * @param partial: number
 * @param total: number
 * @example getPercentage(200, 500) => 40
 */

export function getPercentage(partial: number, total: number): number {
    return (100 * partial) / total
}

/*=============================================== Calculate average ===============================================*/

/**
 * @description Calculate an average number for an array of numbers
 * @param array: number[]
 * @example calculateAverage([1, 2, 3, 4]) => 2.5
 */

export function calculateAverage(array: number[]): number {
    return array.reduce((a, b) => a + b, 0) / array.length
}

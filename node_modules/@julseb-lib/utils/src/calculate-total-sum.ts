/*=============================================== Calculate total sum ===============================================*/

/**
 * @description Calculate the total sum of an array
 * @param array: number[]
 * @example calculateTotalSum([1, 2, 3, 4]) => 10
 */

export function calculateTotalSum(array: number[]): number {
    return array.map(item => item).reduce((partialSum, a) => partialSum + a, 0)
}

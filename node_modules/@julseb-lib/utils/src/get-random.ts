/*=============================================== Get random ===============================================*/

/**
 * @description Get a random value from an array
 * @param array: T[]
 * @example getRandom([1, 2, 3, 4]) => 3
 */

export function getRandom<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)]
}

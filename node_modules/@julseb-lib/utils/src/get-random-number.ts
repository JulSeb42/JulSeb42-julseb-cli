/*=============================================== Get random number ===============================================*/

/**
 * @description Get random number between set values
 * @param min?: number
 * @param max?: number
 * @default min: 0
 * @default max: 100
 * @example getRandomNumber(18, 56) => 42
 */

export function getRandomNumber(min = 0, max = 100): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

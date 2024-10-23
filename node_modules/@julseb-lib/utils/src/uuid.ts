/*=============================================== UUID ===============================================*/

/**
 * @description Generate a random UUID
 * @example uuid() => 518670321012
 */

export function uuid(): string {
    return Math.floor(Math.random() * Date.now()).toString()
}

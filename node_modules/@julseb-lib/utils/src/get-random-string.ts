/*=============================================== Get random string ===============================================*/

/**
 * @description Get a random string
 * @param length?: number
 * @default length: 20
 * @example getRandomString() => MHFTIzosZmtqHokDtJJA
 */

export function getRandomString(length = 20, noNumbers?: boolean): string {
    const randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const numbers = "0123456789"

    const fullString = noNumbers ? randomChars : `${randomChars}${numbers}`

    let result = ""

    for (let i = 0; i < length; i++) {
        result += fullString.charAt(
            Math.floor(Math.random() * fullString.length)
        )
    }

    return result
}

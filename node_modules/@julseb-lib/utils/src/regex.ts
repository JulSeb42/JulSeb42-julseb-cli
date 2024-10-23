/*=============================================== Regex tests ===============================================*/

/**
 * @description Regular expression for password
 * @example passwordRegex.test("hello")
 */

const passwordRegex: RegExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/

/**
 * @description Regular expression for email
 * @example emailRegex.test("hello")
 */

const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export { passwordRegex, emailRegex }

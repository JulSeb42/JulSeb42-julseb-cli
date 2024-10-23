"use strict";
/*=============================================== Regex tests ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailRegex = exports.passwordRegex = void 0;
/**
 * @description Regular expression for password
 * @example passwordRegex.test("hello")
 */
var passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
exports.passwordRegex = passwordRegex;
/**
 * @description Regular expression for email
 * @example emailRegex.test("hello")
 */
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
exports.emailRegex = emailRegex;

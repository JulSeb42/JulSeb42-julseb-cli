"use strict";
/*=============================================== Get random avatar ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomAvatar = void 0;
/**
 * @description Get random avatar from cartoon-avatar library: https://github.com/Ashwinvalento/cartoon-avatar
 * @param gender?: "male" | "female" | "other"
 * @default gender: "other"
 * @example getRandomAvatar("male") => https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/9.png
 */
function getRandomAvatar(gender) {
    if (gender === void 0) { gender = "other"; }
    var random = Math.floor(Math.random() * (114 - 1 + 1) + 1);
    var randomMf = Math.floor(Math.random() + 0.5);
    var mf = ["male", "female"];
    var genderPicture = gender === "male"
        ? "male"
        : gender === "female"
            ? "female"
            : mf[randomMf];
    return "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/".concat(genderPicture, "/").concat(random, ".png");
}
exports.getRandomAvatar = getRandomAvatar;

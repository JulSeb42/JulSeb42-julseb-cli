"use strict";
/*=============================================== Convert Youtube link ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertYoutube = void 0;
/**
 * @description Converts a YouTube url to an embed url
 * @param url: string
 * @example convertYoutube("https://www.youtube.com/watch?v=C9k0_rNyK-E") => https://www.youtube.com/embed/C9k0_rNyK-E
 */
function convertYoutube(url) {
    return url.replace("watch?v=", "embed/");
}
exports.convertYoutube = convertYoutube;

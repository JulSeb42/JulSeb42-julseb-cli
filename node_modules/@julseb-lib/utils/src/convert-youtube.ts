/*=============================================== Convert Youtube link ===============================================*/

/**
 * @description Converts a YouTube url to an embed url
 * @param url: string
 * @example convertYoutube("https://www.youtube.com/watch?v=C9k0_rNyK-E") => https://www.youtube.com/embed/C9k0_rNyK-E
 */

export function convertYoutube(url: string): string {
    return url.replace("watch?v=", "embed/")
}

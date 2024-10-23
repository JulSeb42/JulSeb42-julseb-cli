/*=============================================== Disable scroll ===============================================*/

/**
 * @description Disable page scroll
 * @example disableScroll()
 */

export function disableScroll(): void {
    const body = document.body

    body.style.height = "100vh"
    body.style.overflow = "hidden"

    return
}

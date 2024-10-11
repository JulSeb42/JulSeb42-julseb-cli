/*=============================================== Add Open Brackets ===============================================*/

/**
 * Use as {{addOpenBrackets}}
 */

export default (/** @type {import('plop').NodePlopAPI} */ plop) => {
    const { setHelper } = plop

    setHelper("addOpenBrackets", () => {
        return `{{`
    })
}

/*=============================================== Add Open Brackets ===============================================*/

/**
 * Use as {{addOpenBrackets}}
 */

module.exports = (/** @type {import('plop').NodePlopAPI} */ plop) => {
    const { setHelper } = plop

    setHelper("addOpenBrackets", () => {
        return `{{`
    })
}

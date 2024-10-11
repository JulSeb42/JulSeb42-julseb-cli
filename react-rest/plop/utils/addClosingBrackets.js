/*=============================================== Add Closing Brackets ===============================================*/

/**
 * Use as {{addClosingBrackets}}
 */

module.exports = (/** @type {import('plop').NodePlopAPI} */ plop) => {
    const { setHelper } = plop

    setHelper("addClosingBrackets", () => {
        return `}}`
    })
}

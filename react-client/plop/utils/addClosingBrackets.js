/*=============================================== Add Closing Brackets ===============================================*/

/**
 * Use as {{addClosingBrackets}}
 */

export default (/** @type {import('plop').NodePlopAPI} */ plop) => {
    const { setHelper } = plop

    setHelper("addClosingBrackets", () => {
        return `}}`
    })
}

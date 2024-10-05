/*=============================================== Surrond brackets in hbs ===============================================*/

/**
 * Use as {{surroundBrackets "your text"}}
 */

const surroundBrackets = (/** @type {import('plop').NodePlopAPI} */ plop) => {
    const { setHelper } = plop

    setHelper("surroundBrackets", text => {
        return `{{ ${text} }}`
    })
}

module.exports = { surroundBrackets }

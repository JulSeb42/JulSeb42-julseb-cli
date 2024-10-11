/**
 * Use as {{surroundBrackets "your text"}}
 */
module.exports = (/** @type {import('plop').NodePlopAPI} */ plop) => {
    const { setHelper } = plop

    setHelper("surroundBrackets", text => {
        return `{{ ${text} }}`
    })
}

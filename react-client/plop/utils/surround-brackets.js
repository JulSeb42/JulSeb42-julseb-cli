/**
 * Use as {{surroundBrackets "your text"}}
 */
export default (/** @type {import('plop').NodePlopAPI} */ plop) => {
    const { setHelper } = plop

    setHelper("surroundBrackets", text => {
        return `{{ ${text} }}`
    })
}

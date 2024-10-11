/*=============================================== SurrondBrackets ===============================================*/
/**
 * Use as {{surroundBrackets "your text"}}
 */
export default (plop) => {
    const { setHelper } = plop;
    setHelper("surroundBrackets", (text) => {
        return `{{ ${text} }}`;
    });
};

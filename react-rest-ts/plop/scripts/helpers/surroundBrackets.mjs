/**
 * Use as {{surroundBrackets "your text"}}
 */
export const surroundBrackets = (plop) => {
    const { setHelper } = plop;
    setHelper("surroundBrackets", (text) => {
        return `{{ ${text} }}`;
    });
};

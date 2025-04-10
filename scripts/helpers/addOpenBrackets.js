/**
 * Use as {{addOpenBrackets}}
 */
export default (plop) => {
    const { setHelper } = plop;
    setHelper("addOpenBrackets", (text) => {
        return `{{`;
    });
};

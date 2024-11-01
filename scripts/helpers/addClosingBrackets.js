/*=============================================== Add Closing Brackets ===============================================*/
/**
 * Use as {{addClosingBrackets}}
 */
export default (plop) => {
    const { setHelper } = plop;
    setHelper("addClosingBrackets", () => {
        return `}}`;
    });
};

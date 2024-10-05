import type { NodePlopAPI } from "plop"

/**
 * Use as {{surroundBrackets "your text"}}
 */
export const surroundBrackets = (plop: NodePlopAPI) => {
    const { setHelper } = plop

    setHelper("surroundBrackets", (text: string) => {
        return `{{ ${text} }}`
    })
}

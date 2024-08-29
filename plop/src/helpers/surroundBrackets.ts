import type { NodePlopAPI } from "plop"

export default (plop: NodePlopAPI) => {
    const { setHelper } = plop

    setHelper("surroundBrackets", (text: string) => {
        return `{{ ${text} }}`
    })
}

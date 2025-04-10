import type { NodePlopAPI } from "plop"
import welcome from "cli-welcome"
import runCommandAction from "./actions/run-command.js"
import projectGenerator from "./generators/project.js"
import surroundBracketsHelper from "./helpers/surroundBrackets.js"
import addOpenBrackets from "./helpers/addOpenBrackets.js"
import addClosingBrackets from "./helpers/addClosingBrackets.js"

const plop = (plop: NodePlopAPI) => {
    welcome({
        title: "Julseb CLI",
        tagLine: "A tool to generate React with TS apps",
        description: "",
        bgColor: "#ffffff",
        color: "#000000",
        bold: true,
        clear: true,
        version: "1.0.0",
    })

    runCommandAction(plop)

    projectGenerator(plop) // plop:p

    surroundBracketsHelper(plop) // Use as {{surroundBrackets "pascalCase name" }}
    addOpenBrackets(plop) // Use as {{ addOpenBrackets }}
    addClosingBrackets(plop) // Use as {{ addClosingBrackets }}
}

export default plop

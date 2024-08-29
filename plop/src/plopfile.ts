import type { NodePlopAPI } from "plop"
import runCommandAction from "./actions/run-command.js"
import projectGenerator from "./generators/project.js"
import surroundBracketsHelper from "./helpers/surroundBrackets.js"

const plop = (plop: NodePlopAPI) => {
    // Function to run commands inside the terminal
    runCommandAction(plop)

    projectGenerator(plop) // plop:p

    // Helpers
    surroundBracketsHelper(plop) // Use as {{surroundBrackets "pascalCase name" }}
}

export default plop

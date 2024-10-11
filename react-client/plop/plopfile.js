/*=============================================== Plopfile ===============================================*/

import { runCommand } from "./actions/index.js"
import {
    generateComponent,
    generatePage,
    generateSingleComponent,
    generateType,
} from "./generators/index.js"
import {
    surroundBrackets,
    addOpenBrackets,
    addClosingBrackets,
} from "./utils/index.js"

export default (/** @type {import('plop').NodePlopAPI} */ plop) => {
    /*====================== Actions ======================*/

    runCommand(plop) // With this helper you can run commands in a terminal => { type: "runCommand", command: "console.log("hello world")" }

    /*====================== Generators ======================*/

    generateComponent(plop) // yarn plop:c
    generateSingleComponent(plop) // yarn plop:sc
    generatePage(plop) // yarn plop:p
    generateType(plop) // yarn plop:ty

    /*====================== Helpers ======================*/

    addOpenBrackets(plop) // Use in template files => title={{addOpenBracket}}
    addClosingBrackets(plop) // Use in template files => "hello" {{addClosingBrackets}}
    surroundBrackets(plop) // Use in template files => size={{surroundBrackets 'size: "l"' }}
}

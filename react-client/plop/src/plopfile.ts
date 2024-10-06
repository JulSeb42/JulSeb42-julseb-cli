/*=============================================== Plopfile ===============================================*/

import type { NodePlopAPI } from "plop"
import { generateComponent } from "./generators/component.js"
import { generatePage } from "./generators/page.js"
import { generateSingleFileComponent } from "./generators/single-component.js"
import { generateType } from "./generators/type.js"
import runCommand from "./actions/run-command.js"
import addOpenBrackets from "./helpers/addOpenBrackets.js"
import addClosingBrackets from "./helpers/addClosingBrackets.js"
import surroundBrackets from "./helpers/surroundBrackets.js"

export default (plop: NodePlopAPI) => {
    /*====================== Generators ======================*/

    generateComponent(plop) // yarn plop:c
    generateSingleFileComponent(plop) // yarn plop:sc
    generatePage(plop) // yarn plop:p
    generateType(plop) // yarn plop:ty

    /*====================== Actions ======================*/

    runCommand(plop) // Run terminal commands, use: { type: "runCommand", command: "rm -rf <fileName>" }

    /*====================== Helpers ======================*/

    addOpenBrackets(plop) // Use in template files => title={{addOpenBracket}}
    addClosingBrackets(plop) // Use in template files => "hello" {{addClosingBrackets}}
    surroundBrackets(plop) // Use in template files => size={{surroundBrackets 'size: "l"' }}
}

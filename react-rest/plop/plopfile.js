/*=============================================== Plopfile ===============================================*/

const runCommandAction = require("./actions/run-command")
const {
    generateComponent,
    generateModel,
    generatePage,
    generateRoute,
    generateSingleComponent,
    generateType,
} = require("./generators")
const {
    addOpenBrackets,
    addClosingBrackets,
    generatePageRoute,
    surroundBrackets,
} = require("./utils")

// Generate components, etc.

module.exports = (/** @type {import('plop').NodePlopAPI} */ plop) => {
    /*====================== Actions ======================*/

    runCommandAction(plop) // With this helper you can run commands in a terminal

    /*====================== Utils ======================*/

    generatePageRoute(plop) // Generate a client route as anon, protected or none of those
    surroundBrackets(plop) // Surround with brackets in templates when needed
    addOpenBrackets(plop) // Add double open brackets {{ where needed
    addClosingBrackets(plop) // Add double closing brackets }} where needed

    /*====================== Client ======================*/

    generateComponent(plop) // yarn plop:c
    generateSingleComponent(plop) // yarn plop:sc
    generatePage(plop) // yarn plop:p
    generateType(plop) // yarn plop:ty

    /*====================== Server ======================*/

    generateRoute(plop) // yarn plop:r
    generateModel(plop) // yarn plop:m
}

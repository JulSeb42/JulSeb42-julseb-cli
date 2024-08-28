/*=============================================== Plopfile ===============================================*/

const {
    generateComponent,
    generateModel,
    generatePage,
    generateRoute,
    generateSingleFileComponent,
} = require("./generators/index.js")

// Generate components, etc.

module.exports = (/** @type {import('plop').NodePlopAPI} */ plop) => {
    generateComponent(plop) // yarn plop:c
    generateSingleFileComponent(plop) // yarn plop:sc
    generateModel(plop) // yarn plop:m
    generatePage(plop) // yarn plop:p
    generateRoute(plop) // yarn plop:r
}

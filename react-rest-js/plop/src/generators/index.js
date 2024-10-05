/*=============================================== Exports ===============================================*/

const { generateComponent } = require("./component")
const { generateModelAndType } = require("./model")
const { generatePage } = require("./page")
const { generateRoute } = require("./route")
const { generateSingleFileComponent } = require("./single-component")

module.exports = {
    generateComponent,
    generateModelAndType,
    generatePage,
    generateRoute,
    generateSingleFileComponent,
}

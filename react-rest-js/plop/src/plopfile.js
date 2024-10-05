/*=============================================== Plopfile ===============================================*/

const {
    generateComponent,
    generatePage,
    generateRoute,
    generateSingleFileComponent,
    generateModelAndType,
} = require("./generators")

// Generate components, etc.

export default (/** @type {import('plop').NodePlopAPI} */ plop) => {
    /*====================== Client ======================*/
    generateComponent(plop) // yarn plop:c ✅
    generateSingleFileComponent(plop) // yarn plop:sc ✅
    generatePage(plop) // yarn plop:p ✅

    /*====================== Server ======================*/
    generateRoute(plop) // yarn plop:r ✅
    generateModelAndType(plop) // yarn plop:m ✅
}

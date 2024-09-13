/*=============================================== Generate model ===============================================*/

const {
    generateModelActions,
    generateTypeActions,
} = require("../utils/generate-actions.mts")

const generateModel = (/** @type {import('plop').NodePlopAPI} */ plop) => {
    const { setGenerator } = plop

    setGenerator("model", {
        description: "Mongoose model",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "Enter model's name",
                validate: data => {
                    if (!data) return "Name is required"
                    return true
                },
            },
        ],
        actions: [...generateModelActions, ...generateTypeActions(false)],
    })
}

module.exports = { generateModel }

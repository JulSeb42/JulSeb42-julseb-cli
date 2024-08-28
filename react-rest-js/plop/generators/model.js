/*=============================================== Generate model ===============================================*/

const { generateModelActions } = require("../utils/generate-actions")

const generateModel = (/** @type {import('plop').NodePlopAPI} */ plop) => {
    const { setGenerator } = plop

    setGenerator("model", {
        description: "Mongoose model",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "Enter route's name",
            },
        ],
        actions: generateModelActions,
    })
}

module.exports = { generateModel }

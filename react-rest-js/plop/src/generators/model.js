/*=============================================== Generate model & type ===============================================*/

const { BASE_SERVER_PATH, BASE_SHARED_PATH } = require("../utils")

const generateModelAndType = (
    /** @type {import('plop').NodePlopAPI} */ plop
) => {
    const { setGenerator } = plop

    setGenerator("model", {
        description: "Generate a mongoose model with its corresponding type",
        prompts: [
            { type: "input", name: "name", message: "Enter model's name" },
        ],
        actions: [
            {
                type: "add",
                path: `${BASE_SERVER_PATH}/models/{{ pascalCase name }}.model.js`,
                templateFile: "../templates/model.hbs",
            },
            {
                type: "modify",
                path: `${BASE_SERVER_PATH}/models/index.js`,
                template:
                    'const { {{ pascalCase name }}Model } = require("./{{ pascalCase name }}.model")\n$1',
                pattern: /(\/\* prepend import - do not remove \*\/)/g,
            },
            {
                type: "modify",
                path: `${BASE_SERVER_PATH}/models/index.js`,
                template: "{{ pascalCase name }}Model,\n\t$1",
                pattern: /(\/\* prepend export - do not remove \*\/)/g,
            },
        ],
    })
}

module.exports = { generateModelAndType }

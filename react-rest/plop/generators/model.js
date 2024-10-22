/*=============================================== Generate model & type ===============================================*/

const { BASE_SERVER_PATH, BASE_SHARED_PATH } = require("../utils")

module.exports = (/** @type {import('plop').NodePlopAPI} */ plop) => {
    const { setGenerator } = plop

    setGenerator("model", {
        description: "Generate a mongoose model with its corresponding type",
        prompts: [
            { type: "input", name: "name", message: "Enter model's name" },
        ],
        actions: [
            {
                type: "add",
                path: `${BASE_SERVER_PATH}/models/{{ pascalCase name }}.model.ts`,
                templateFile: "./templates/model.hbs",
            },
            {
                type: "modify",
                path: `${BASE_SERVER_PATH}/models/index.ts`,
                template: 'export * from "./{{ pascalCase name }}.model"\n$1',
                pattern: /(\/\* prepend - do not remove \*\/)/g,
            },
            {
                type: "add",
                path: `${BASE_SHARED_PATH}/types/{{ pascalCase name }}.type.ts`,
                templateFile: "./templates/types/type.hbs",
            },
            {
                type: "modify",
                path: `${BASE_SHARED_PATH}/types/index.ts`,
                template: 'export * from "./{{ pascalCase name }}.type"\n$1',
                pattern: /(\/\* prepend - do not remove \*\/)/g,
            },
        ],
    })
}

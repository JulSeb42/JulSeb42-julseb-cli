/*=============================================== Generate single file component ===============================================*/

const { BASE_CLIENT_PATH } = require("../utils")

module.exports = (/** @type {import('plop').NodePlopAPI} */ plop) => {
    const { setGenerator } = plop

    setGenerator("single-component", {
        description: "Generate single file React component",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "Enter the component's name",
            },
            {
                type: "confirm",
                name: "props",
                message: "Add props?",
                default: false,
            },
            {
                type: "input",
                name: "tag",
                message: "Which HTML tag?",
                default: "div",
            },
        ],
        actions: [
            "Creating your new component",
            {
                type: "add",
                path: `${BASE_CLIENT_PATH}/components/{{ pascalCase name }}.tsx`,
                templateFile: "./templates/single-component.hbs",
            },
            "Exporting your new component",
            {
                type: "modify",
                path: `${BASE_CLIENT_PATH}/components/index.ts`,
                template:
                    'export * from "components/{{ pascalCase name }}"\n$1',
                pattern: /(\/\* prepend - do not remove \*\/)/g,
            },
        ],
    })
}

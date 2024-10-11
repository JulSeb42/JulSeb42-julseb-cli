/*=============================================== Generate component ===============================================*/

import { BASE_CLIENT_PATH } from "../utils"

module.exports = (/** @type {import('plop').NodePlopAPI} */ plop) => {
    const { setGenerator } = plop

    setGenerator("component", {
        description: "React component",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "Enter component's name",
            },
            {
                type: "input",
                name: "tag",
                message: "Enter HTML tag",
                default: "div",
            },
            {
                type: "input",
                name: "attribute",
                message: "Enter HTML attribute",
                default: data => data.tag,
            },
            {
                type: "confirm",
                name: "forward",
                message: "Add `forwardRef`?",
                default: false,
            },
            {
                type: "confirm",
                name: "as",
                message: "Add `as` prop?",
                default: false,
            },
            {
                type: "confirm",
                name: "children",
                message: "Add `children` prop?",
                default: true,
            },
        ],
        actions: [
            "Creating new files",
            {
                type: "addMany",
                destination: `${BASE_CLIENT_PATH}/components/{{ pascalCase name }}`,
                templateFiles: "../templates/component/*.hbs",
                base: "../templates/component",
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

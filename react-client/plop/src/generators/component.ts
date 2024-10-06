/*=============================================== Generate component ===============================================*/

import type { NodePlopAPI } from "plop"
import { BASE_PATH } from "../utils/index.js"

export const generateComponent = (plop: NodePlopAPI) => {
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
                default: (data: { tag: string }) => data.tag,
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
                destination: `${BASE_PATH}/components/{{ pascalCase name }}`,
                templateFiles: "../templates/component/*.hbs",
                base: "../templates/component",
            },

            "Exporting your new component",
            {
                type: "modify",
                path: `${BASE_PATH}/components/index.ts`,
                template:
                    'export * from "components/{{ pascalCase name }}"\n$1',
                pattern: /(\/\* prepend - do not remove \*\/)/g,
            },
        ],
    })
}

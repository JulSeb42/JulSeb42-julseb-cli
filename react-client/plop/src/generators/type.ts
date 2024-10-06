/*=============================================== Generate TS type ===============================================*/

import type { NodePlopAPI } from "plop"
import { BASE_PATH } from "../utils/index.js"

export const generateType = (plop: NodePlopAPI) => {
    const { setGenerator } = plop

    setGenerator("type", {
        description: "TS type",
        prompts: [
            { type: "input", name: "name", message: "Enter's name" },
            {
                type: "confirm",
                name: "interface",
                message: "Create it as interface?",
                default: false,
            },
            {
                type: "confirm",
                name: "shared",
                message:
                    "Add it to the shared folder? (will be created in the client directory if no)",
                default: true,
            },
        ],
        actions: data => {
            const fileNameAdd = `{{ pascalCase name }}.${
                data?.interface ? "interface" : "type"
            }.ts`
            const fileName = `./{{ pascalCase name }}.${
                data?.interface ? "interface" : "type"
            }`

            const actions = [
                {
                    type: "add",
                    path: `${BASE_PATH}/types/${fileNameAdd}`,
                    templateFile: "../templates/type.hbs",
                },
                {
                    type: "modify",
                    path: `${BASE_PATH}/types/index.ts`,
                    template: `export * from "${fileName}"\n$1`,
                    pattern: /(\/\* prepend - do not remove \*\/)/g,
                },
            ]

            const actionsClient = [
                {
                    type: "add",
                    path: `${BASE_PATH}/types/${fileNameAdd}`,
                    templateFile: "../templates/type.hbs",
                },
                {
                    type: "modify",
                    path: `${BASE_PATH}/types/index.ts`,
                    template: `export * from "${fileName}"\n$1`,
                    pattern: /(\/\* prepend - do not remove \*\/)/g,
                },
            ]

            return data?.shared ? actions : actionsClient
        },
    })
}

/*=============================================== Generate TS type ===============================================*/

import type { NodePlopAPI } from "plop"
import { BASE_SHARED_PATH } from "../utils/index.mjs"

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
                    path: `${BASE_SHARED_PATH}/types/${fileNameAdd}`,
                    templateFile: "./templates/type.hbs",
                },
                {
                    type: "modify",
                    path: `${BASE_SHARED_PATH}/types/index.ts`,
                    template: `export * from "${fileName}"\n$1`,
                    pattern: /(\/\/ prependHere)/g,
                },
            ]

            return actions
        },
    })
}

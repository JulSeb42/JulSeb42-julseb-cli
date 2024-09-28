/*=============================================== Generate route ===============================================*/

import type { NodePlopAPI } from "plop"
import { BASE_SERVER_PATH, BASE_CLIENT_PATH } from "../utils/consts.mjs"

export const generateRoute = (plop: NodePlopAPI) => {
    const { setGenerator } = plop

    setGenerator("route", {
        description: "Generate route",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "Enter route's name",
            },
        ],
        actions: [
            {
                type: "add",
                path: `${BASE_SERVER_PATH}/routes/{{ kebabCase name }}.ts`,
                templateFile: "../templates/route/route.hbs",
            },
            {
                type: "modify",
                path: `${BASE_SERVER_PATH}/routes/index.ts`,
                template:
                    'import {{ camelCase name }} from "./{{ kebabCase name }}"\n$1',
                pattern: /(\/\* prepend import - do not remove \*\/)/g,
            },
            {
                type: "modify",
                path: `${BASE_SERVER_PATH}/routes/index.ts`,
                template:
                    'router.use("/{{ kebabCase name }}", {{ camelCase name }})\n$1',
                pattern: /(\/\* prepend router use - do not remove \*\/)/g,
            },
            {
                type: "modify",
                path: `${BASE_CLIENT_PATH}/routes/paths.ts`,
                template:
                    '{{ constantCase name }}: "/{{ kebabCase name }}",\n$1',
                pattern: /(\/\* prepend path - do not remove \*\/)/g,
            },
            {
                type: "add",
                path: `${BASE_CLIENT_PATH}/api/{{ kebabCase name }}.service.ts`,
                templateFile: "../templates/route/service.hbs",
            },
            {
                type: "modify",
                path: `${BASE_CLIENT_PATH}/api/index.ts`,
                template:
                    'export * from "api/{{ kebabCase name }}.service"\n$1',
                pattern: /(\/\* prepend - do not remove \*\/)/g,
            },
        ],
    })
}

/*=============================================== Generate page ===============================================*/

import type { NodePlopAPI } from "plop"
import { toKebabCase, toTitleCase } from "ts-utils-julseb"
import { generatePageRoute } from "../utils/generate-page-route.mjs"
import { BASE_CLIENT_PATH } from "../utils/consts.mjs"

export const generatePage = (plop: NodePlopAPI) => {
    const { setGenerator } = plop

    setGenerator("page", {
        description: "Generate page",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "Enter page's name",
            },
            {
                type: "input",
                name: "title",
                message: "Enter page title",
                default: (data: { name: string }) => toTitleCase(data.name),
            },
            {
                type: "input",
                name: "path",
                message: "Enter url path",
                default: (data: { name: string }) => toKebabCase(data.name),
            },
            {
                type: "confirm",
                name: "multi",
                message: "Is this a multi file page?",
                default: false,
            },
            {
                type: "list",
                name: "protected",
                message: "Is your page protected or anon?",
                choices: ["none", "protected", "anon"],
                default: "none",
            },
        ],

        actions: data => {
            const actions = [
                "Creating your new page",
                {
                    type: "add",
                    path: data?.multi
                        ? `${BASE_CLIENT_PATH}/pages/{{ pascalCase name }}/{{ pascalCase name }}.tsx`
                        : `${BASE_CLIENT_PATH}/pages/{{ pascalCase name }}.tsx`,
                    templateFile: "../templates/page/page-file.hbs",
                },
                // "Importing your new page in routes file",
                // {
                //     type: "modify",
                //     path: `${BASE_CLIENT_PATH}/routes/routes.tsx`,
                //     template:
                //         'import { {{ pascalCase name }} } from "pages/{{ pascalCase name }}"\n$1',
                //     pattern: /(\/\/ prependImport)/g,
                // },
                // "Adding your new page to the paths array",
                // {
                //     type: "modify",
                //     path: `${BASE_CLIENT_PATH}/routes/routes.tsx`,
                //     template: generatePageRoute(data?.protected),
                //     pattern: /(\/\/ prependRoute)/g,
                // },
                // "Adding path to paths list",
                // {
                //     type: "modify",
                //     path: `${BASE_CLIENT_PATH}/routes/paths.ts`,
                //     template:
                //         '{{ constantCase name }}: "/{{ pathCase path }}",\n$1',
                //     pattern: /(\/\/ prependPath)/g,
                // },
            ]

            // if (data?.multi) {
            //     actions.push(
            //         ...[
            //             "Creating export from new folder",
            //             {
            //                 type: "add",
            //                 path: `${BASE_CLIENT_PATH}/pages/{{ pascalCase name }}/index.ts`,
            //                 templateFile: "../templates/page/page-index.hbs",
            //             },
            //         ]
            //     )
            // }

            // if (data?.test) {
            //     actions.push(
            //         ...[
            //             "Creating test file",
            //             {
            //                 type: "add",
            //                 path: `../client/cypress/e2e/{{ pascalCase name }}.cy.ts`,
            //                 templateFile: "../templates/react-rest-ts/",
            //             },
            //         ]
            //     )
            // }

            return actions
        },
    })
}

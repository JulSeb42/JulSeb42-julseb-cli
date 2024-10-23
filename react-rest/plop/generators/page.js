/*=============================================== Generate page ===============================================*/

const { toKebabCase, toTitleCase } = require("@julseb-lib/utils")
const { generatePageRoute, BASE_CLIENT_PATH } = require("../utils")

module.exports = (/** @type {import('plop').NodePlopAPI} */ plop) => {
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
                default: data => toTitleCase(data.name),
            },
            {
                type: "confirm",
                name: "admin",
                message: "Is this an admin page?",
                default: false,
            },
            {
                type: "input",
                name: "path",
                message: "Enter url path",
                default: data =>
                    data.admin
                        ? `/admin/${toKebabCase(data.name)}`
                        : `/${toKebabCase(data.name)}`,
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
                when: data => !data.admin,
            },
        ],

        actions: data => {
            const actions = []

            if (data?.admin) {
                actions.push("Creating your new page", {
                    type: "add",
                    path: data?.multi
                        ? `${BASE_CLIENT_PATH}/pages/admin/{{ pascalCase name }}/{{ pascalCase name }}.tsx`
                        : `${BASE_CLIENT_PATH}/pages/admin/{{ pascalCase name }}.tsx`,
                    templateFile: "./templates/admin/page-file.hbs",
                })
            }

            if (!data?.admin) {
                actions.push("Creating your new page", {
                    type: "add",
                    path: data?.multi
                        ? `${BASE_CLIENT_PATH}/pages/{{ pascalCase name }}/{{ pascalCase name }}.tsx`
                        : `${BASE_CLIENT_PATH}/pages/{{ pascalCase name }}.tsx`,
                    templateFile: "./templates/page/page-file.hbs",
                })
            }

            actions.push(
                "Importing your new page in routes file",
                {
                    type: "modify",
                    path: `${BASE_CLIENT_PATH}/routes/routes.tsx`,
                    template: data?.admin
                        ? 'import { {{ pascalCase name }} } from "pages/admin/{{ pascalCase name }}"\n$1'
                        : 'import { {{ pascalCase name }} } from "pages/{{ pascalCase name }}"\n$1',
                    pattern: /(\/\* prepend import - do not remove \*\/)/g,
                },
                "Adding your new page to the paths array",
                {
                    type: "modify",
                    path: `${BASE_CLIENT_PATH}/routes/routes.tsx`,
                    template: data?.admin
                        ? generatePageRoute(data?.protected, true)
                        : generatePageRoute(data?.protected),
                    pattern: /(\/\* prepend route - do not remove \*\/)/g,
                },
                "Adding path to paths list",
                {
                    type: "modify",
                    path: `${BASE_CLIENT_PATH}/routes/paths.ts`,
                    template: data?.admin
                        ? 'ADMIN_{{ constantCase name }}: "/{{ pathCase path }}",\n\t$1'
                        : '{{ constantCase name }}: "/{{ pathCase path }}",\n\t$1',
                    pattern: /(\/\* prepend path - do not remove \*\/)/g,
                }
            )

            if (data?.multi) {
                actions.push("Creating export from new folder", {
                    type: "add",
                    path: data?.admin
                        ? `${BASE_CLIENT_PATH}/pages/admin/{{ pascalCase name }}/index.ts`
                        : `${BASE_CLIENT_PATH}/pages/{{ pascalCase name }}/index.ts`,
                    templateFile: data?.admin
                        ? "./templates/admin/page-index.hbs"
                        : "./templates/page/page-index.hbs",
                })
            }

            return actions
        },
    })
}

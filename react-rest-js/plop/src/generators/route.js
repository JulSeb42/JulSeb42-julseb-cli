/*=============================================== Generate route ===============================================*/

const {
    BASE_SERVER_PATH,
    BASE_CLIENT_PATH,
    BASE_SHARED_PATH,
} = require("../utils")

const generateRoute = (/** @type {import('plop').NodePlopAPI} */ plop) => {
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
            "Creating new server route",
            {
                type: "add",
                path: `${BASE_SERVER_PATH}/routes/{{ kebabCase name }}.js`,
                templateFile: "../templates/route/route.hbs",
            },
            "Importing your new route to all the other routes",
            {
                type: "modify",
                path: `${BASE_SERVER_PATH}/routes/index.js`,
                template:
                    'import {{ camelCase name }} from "./{{ kebabCase name }}"\n$1',
                pattern: /(\/\* prepend import - do not remove \*\/)/g,
            },
            "Adding your new route to the router",
            {
                type: "modify",
                path: `${BASE_SERVER_PATH}/routes/index.js`,
                template:
                    "router.use(SERVER_PATHS.{{ constantCase name }}.ROOT, {{ camelCase name }})\n$1",
                pattern: /(\/\* prepend router - do not remove \*\/)/g,
            },
            "Creating a new interface in shared types",
            {
                type: "add",
                path: `${BASE_SHARED_PATH}/types/{{ pascalCase name }}.interface.js`,
                templateFile: "../templates/types/interface.hbs",
            },
            "Exporting your new interface",
            {
                type: "modify",
                path: `${BASE_SHARED_PATH}/types/index.js`,
                template: `export * from "./{{ pascalCase name }}.interface"\n$1`,
                pattern: /(\/\* prepend - do not remove \*\/)/g,
            },
            "Creating a new model",
            {
                type: "add",
                path: `${BASE_SERVER_PATH}/models/{{ pascalCase name }}.model.js`,
                templateFile: "../templates/model.hbs",
            },
            "Exporting the new model",
            {
                type: "modify",
                path: `${BASE_SERVER_PATH}/models/index.js`,
                template: 'export * from "./{{ pascalCase name }}.model"\n$1',
                pattern: /(\/\* prepend - do not remove \*\/)/g,
            },
            "Creating new server path",
            {
                type: "modify",
                path: `${BASE_SHARED_PATH}/server-paths.js`,
                template: `{{ constantCase name }}: "/{{ kebabCase name }}",\n\t$1`,
                pattern: /(\/\* prepend path root - do not remove \*\/)/g,
            },
            "Creating basic API calls",
            {
                type: "modify",
                path: `${BASE_SHARED_PATH}/server-paths.js`,
                template:
                    '{{ constantCase name }}: {\n\t\tROOT: SERVER_PATH_ROOTS.{{ constantCase name }},\n\t\tALL_{{ constantCase name }}S: "/all-{{ kebabCase name }}",\n\t\tGET_{{ constantCase name }}: (id = ":id") => `/{{ kebabCase name }}/${id}`,\n\t},\n\t$1',
                pattern: /(\/\* prepend server path - do not remove \*\/)/g,
            },
            "Creating a new client service",
            {
                type: "add",
                path: `${BASE_CLIENT_PATH}/api/{{ kebabCase name }}.service.js`,
                templateFile: "../templates/route/service.hbs",
            },
            "Exporting the new service",
            {
                type: "modify",
                path: `${BASE_CLIENT_PATH}/api/index.js`,
                template:
                    'export * from "api/{{ kebabCase name }}.service"\n$1',
                pattern: /(\/\* prepend - do not remove \*\/)/g,
            },
        ],
    })
}

module.exports = { generateRoute }

/*=============================================== Generate route ===============================================*/

const { generateModelActions } = require("../utils/generate-actions")

const generateRoute = (/** @type {import('plop').NodePlopAPI} */ plop) => {
    const { setGenerator } = plop

    setGenerator("route", {
        description: "Generate route",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "Enter route's name",
                validate: data => {
                    if (!data) return "Name is required"
                    return true
                },
            },
        ],
        actions: [
            {
                type: "add",
                path: "../server/routes/{{ kebabCase name }}.js",
                templateFile: "./templates/route/route.hbs",
            },
            {
                type: "modify",
                path: "../server/routes/index.js",
                template:
                    'const {{ camelCase name }} = require("./{{ kebabCase name }}")\n$1',
                pattern: /(\/\/ prependImport)/g,
            },
            {
                type: "modify",
                path: "../server/routes/index.js",
                template:
                    "router.use(SERVER_PATHS.{{ constantCase name }}.ROOT, {{ camelCase name }})\n$1",
                pattern: /(\/\/ prependRouterUse)/g,
            },
            {
                type: "modify",
                path: "../server/utils/server-paths.js",
                template:
                    '{{ constantCase name }}: "/{{ kebabCase name }}",\n$1',
                pattern: /(\/\/ prependRoot)/g,
            },
            {
                type: "modify",
                path: "../client/src/data/server-paths.js",
                template:
                    '{{ constantCase name }}: "/{{ kebabCase name }}",\n$1',
                pattern: /(\/\/ prependRoot)/g,
            },
            {
                type: "modify",
                path: "../server/utils/server-paths.js",
                template:
                    '{{ constantCase name }}: {\n        ROOT: SERVER_PATH_ROOTS.{{ constantCase name }},\n        ALL_{{ constantCase name }}S: "/all-{{ kebabCase name }}s",\n        GET_{{ constantCase name }}: (id = ":id") => `/{{ kebabCase name }}/${id}`,\n    },\n$1',
                pattern: /(\/\/ prependServerPath)/g,
            },
            {
                type: "modify",
                path: "../client/src/data/server-paths.js",
                template:
                    '{{ constantCase name }}: {\n        ROOT: SERVER_PATH_ROOTS.{{ constantCase name }},\n        ALL_{{ constantCase name }}S: "/all-{{ kebabCase name }}s",\n        GET_{{ constantCase name }}: (id = ":id") => `/{{ kebabCase name }}/${id}`,\n    },\n$1',
                pattern: /(\/\/ prependServerPath)/g,
            },
            {
                type: "add",
                path: "../client/src/api/{{ kebabCase name }}.service.js",
                templateFile: "./templates/route/service.hbs",
            },
            {
                type: "modify",
                path: "../client/src/api/index.js",
                template:
                    'export * from "api/{{ kebabCase name }}.service"\n$1',
                pattern: /(\/\/ prependHere)/g,
            },
            ...generateModelActions,
        ],
    })
}

module.exports = { generateRoute }

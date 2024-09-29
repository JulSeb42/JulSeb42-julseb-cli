/*=============================================== Generate route ===============================================*/
import { BASE_SERVER_PATH, BASE_SHARED_PATH, } from "../utils/consts.mjs";
export const generateRoute = (plop) => {
    const { setGenerator } = plop;
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
            // ? create new file: route in server/routes, template route/route.hbs
            {
                type: "add",
                path: `${BASE_SERVER_PATH}/routes/{{ kebabCase name }}.ts`,
                templateFile: "../templates/route/route.hbs",
            },
            // ? import new route in server/routes/index.ts
            {
                type: "modify",
                path: `${BASE_SERVER_PATH}/routes/index.ts`,
                template: 'import {{ camelCase name }} from "./{{ kebabCase name }}"\n$1',
                pattern: /(\/\* prepend import - do not remove \*\/)/g,
            },
            // ? add router.use(newRoute) in server/routes/index.ts
            {
                type: "modify",
                path: `${BASE_SERVER_PATH}/routes/index.ts`,
                template: "router.use(SERVER_PATHS.{{ constantCase name }}.ROOT, {{ camelCase name }})\n$1",
                pattern: /(\/\* prepend router use - do not remove \*\/)/g,
            },
            // ? create new interface in shared/types
            {
                type: "add",
                path: `${BASE_SHARED_PATH}/types/{{ pascalCase name }}.interface.ts`,
                templateFile: "../templates/types/interface.hbs",
            },
            // ? export new interface from shared/types
            {
                type: "modify",
                path: `${BASE_SHARED_PATH}/types/index.ts`,
                template: `export * from "./{{ pascalCase name }}.interface"\n$1`,
                pattern: /(\/\* prepend - do not remove \*\/)/g,
            },
            // ? create new model from templates/model/model.hbs
            {
                type: "add",
                path: `${BASE_SERVER_PATH}/models/{{ pascalCase name }}.model.ts`,
                templateFile: "../templates/model.hbs",
            },
            // ? export new model
            {
                type: "modify",
                path: `${BASE_SERVER_PATH}/models/index.ts`,
                template: 'export * from "./{{ pascalCase name }}.model"\n$1',
                pattern: /(\/\* prepend - do not remove \*\/)/g,
            },
            // ? create new path in shared/server-paths ROOTS
            {
                type: "modify",
                path: `${BASE_SHARED_PATH}/server-paths.ts`,
                template: `{{ constantCase name }}: "/{{ kebabCase name }}",\n\t$1`,
                pattern: /(\/\* prepend path root - do not remove \*\/)/g,
            },
            // ? create 3 basic paths in server paths => ROOT, getAll, getById
            {
                type: "modify",
                path: `${BASE_SHARED_PATH}/server-paths.ts`,
                template: '{{ constantCase name }}: {\n\t\tROOT: SERVER_PATH_ROOTS.{{ constantCase name }},\n\t\tALL_{{ constantCase name }}S: "/all-{{ kebabCase name }}",\n\t\t{{ constantCase name }}: (id = ":id") => `/{{ kebabCase name }}/${id}`,\n\t},\n\t$1',
                pattern: /(\/\* prepend server path - do not remove \*\/)/g,
            },
            // ? create new service in client/src/api
            // ? export new service in client/src/api/index.ts
            // ? create new path in shared server paths
            // ? create route file in server/routes => template
            // ? import new server path and route and create new route in router index
            // ? generate new interface in shared types
            // ? create new model and import new interface
            // ? create new service in client/src/api => template
            // {
            //     type: "add",
            //     path: `${BASE_SERVER_PATH}/routes/{{ kebabCase name }}.ts`,
            //     templateFile: "../templates/route/route.hbs",
            // },
            // {
            //     type: "modify",
            //     path: `${BASE_SERVER_PATH}/routes/index.ts`,
            //     template:
            //         'import {{ camelCase name }} from "./{{ kebabCase name }}"\n$1',
            //     pattern: /(\/\* prepend import - do not remove \*\/)/g,
            // },
            // {
            //     type: "modify",
            //     path: `${BASE_SERVER_PATH}/routes/index.ts`,
            //     template:
            //         'router.use("/{{ kebabCase name }}", {{ camelCase name }})\n$1',
            //     pattern: /(\/\* prepend router use - do not remove \*\/)/g,
            // },
            // {
            //     type: "modify",
            //     path: `${BASE_CLIENT_PATH}/routes/paths.ts`,
            //     template:
            //         '{{ constantCase name }}: "/{{ kebabCase name }}",\n$1',
            //     pattern: /(\/\* prepend path - do not remove \*\/)/g,
            // },
            // {
            //     type: "add",
            //     path: `${BASE_CLIENT_PATH}/api/{{ kebabCase name }}.service.ts`,
            //     templateFile: "../templates/route/service.hbs",
            // },
            // {
            //     type: "modify",
            //     path: `${BASE_CLIENT_PATH}/api/index.ts`,
            //     template:
            //         'export * from "api/{{ kebabCase name }}.service"\n$1',
            //     pattern: /(\/\* prepend - do not remove \*\/)/g,
            // },
            // {
            //     type: "add",
            //     path: "../server/models/{{ pascalCase name }}.model.ts",
            //     templateFile: "./templates/model.hbs",
            // },
            // {
            //     type: "modify",
            //     path: "../server/models/index.ts",
            //     template: 'export * from "./{{ pascalCase name }}.model"\n$1',
            //     pattern: /(\/\* prepend - do not remove \*\/)/g,
            // },
            // {
            //     type: "add",
            //     path: `../shared/types/{{ pascalCase name }}.interface.ts`,
            //     templateFile: "./templates/type.hbs",
            // },
            // {
            //     type: "modify",
            //     path: "../shared/types/index.ts",
            //     template: `export * from "./{{ pascalCase name }}.interface"\n$1`,
            //     pattern: /(\/\* prepend - do not remove \*\/)/g,
            // },
        ],
    });
};

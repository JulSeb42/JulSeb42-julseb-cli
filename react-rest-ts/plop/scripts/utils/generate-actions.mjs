/*=============================================== Generate actions ===============================================*/
// Array of new actions, not to repeat this code
export const generateModelActions = [
    {
        type: "add",
        path: "../server/models/{{ pascalCase name }}.model.ts",
        templateFile: "./templates/model.hbs",
    },
    {
        type: "modify",
        path: "../server/models/index.ts",
        template: 'export * from "./{{ pascalCase name }}.model"\n$1',
        pattern: /(\/\/ prependHere)/g,
    },
];
export const generateTypeActions = (withInterface) => {
    return [
        {
            type: "add",
            path: `../shared/types/{{ pascalCase name }}.${withInterface ? "interface" : "type"}.ts`,
            templateFile: "./templates/type.hbs",
        },
        {
            type: "modify",
            path: "../shared/types/index.ts",
            template: `export * from "./{{ pascalCase name }}.${withInterface ? "interface" : "type"}"\n$1`,
            pattern: /(\/\/ prependHere)/g,
        },
    ];
};

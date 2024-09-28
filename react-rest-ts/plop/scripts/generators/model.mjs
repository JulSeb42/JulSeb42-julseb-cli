/*=============================================== Generate model ===============================================*/
import { BASE_SERVER_PATH } from "../utils/consts.mjs";
export const generateModel = (plop) => {
    const { setGenerator } = plop;
    setGenerator("model", {
        description: "Mongoose model",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "Enter model's name",
            },
        ],
        actions: [
            "Creating new model file",
            {
                type: "add",
                path: `${BASE_SERVER_PATH}/models/{{ pascalCase name }}.model.ts`,
                templateFile: "../templates/model.hbs",
            },
            "Exporting your new model",
            {
                type: "modify",
                path: `${BASE_SERVER_PATH}/models/index.ts`,
                template: 'export * from "./{{ pascalCase name }}.model"\n$1',
                pattern: /(\/\/ prependHere)/g,
            },
        ],
    });
};

/*=============================================== Generate single file component ===============================================*/
import { BASE_CLIENT_PATH } from "../utils/consts.mjs";
export const generateSingleFileComponent = (plop) => {
    const { setGenerator } = plop;
    setGenerator("single-component", {
        description: "Generate single file React component",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "Enter the component's name",
            },
            {
                type: "confirm",
                name: "props",
                message: "Add props?",
                default: false,
            },
            {
                type: "input",
                name: "tag",
                message: "Which HTML tag?",
                default: "div",
            },
            {
                type: "input",
                name: "components",
                message: "Import other components?",
            },
        ],
        actions: [
            {
                type: "add",
                path: `${BASE_CLIENT_PATH}/components/{{ pascalCase name }}.tsx`,
                templateFile: "./templates/single-component.hbs",
            },
            {
                type: "modify",
                path: `${BASE_CLIENT_PATH}/components/index.ts`,
                template: 'export * from "components/{{ pascalCase name }}"\n$1',
                pattern: /(\/\/ prependHere)/g,
            },
        ],
    });
};

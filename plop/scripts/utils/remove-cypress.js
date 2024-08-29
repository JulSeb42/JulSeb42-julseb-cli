export function removeCypress(projectName) {
    const actions = [
        "Removing Cypress",
        {
            type: "runCommand",
            command: `cd ${projectName}/client && rm -rf package.json && rm -rf cypress && rm -rf cypress.config.ts`,
        },
        "Add new package.json",
        {
            type: "add",
            path: `${process.cwd()}/${projectName}/client/package.json`,
            templateFile: "../templates/react-rest-ts/package.hbs",
        },
        "Remove plop generator for component and page",
        {
            type: "runCommand",
            command: `rm -rf ${projectName}/plop/generators/component.js ${projectName}/plop/generators/page.js`,
        },
        "Add new plop generator for component",
        {
            type: "add",
            path: `${process.cwd()}/${projectName}/plop/generators/component.js`,
            templateFile: "../templates/react-rest-ts/plop-component-no-tests.hbs",
        },
        "Add new plop generator for page",
        {
            type: "add",
            path: `${process.cwd()}/${projectName}/plop/generators/page.js`,
            templateFile: "../templates/react-rest-ts/plop-page-no-tests.hbs",
        },
    ];
    return actions;
}

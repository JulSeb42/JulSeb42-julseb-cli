/*=============================================== Generate actions ===============================================*/

// Array of new actions, not to repeat this code

const generateModelActions = [
    {
        type: "add",
        path: "../server/models/{{ pascalCase name }}.model.js",
        templateFile: "./templates/model.hbs",
    },
    {
        type: "modify",
        path: "../server/models/index.js",
        template:
            'const { {{ pascalCase name }}Model } = require("./{{ pascalCase name }}.model")\n$1',
        pattern: /(\/\/ prependImport)/g,
    },
    {
        type: "modify",
        path: "../server/models/index.js",
        template: "{{ pascalCase name }}Model,\n$1",
        pattern: /(\/\/ prependExport)/g,
    },
]

module.exports = { generateModelActions }

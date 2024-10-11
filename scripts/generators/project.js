import { toKebabCase } from "@julseb-lib/utils";
import { projectTypes, packageManagers, packageManagersNames, REPOS_BASE_URL, } from "../utils/constants.js";
import { replaceProjectNameModifyFullStack } from "../utils/replace-project-name-fullstack.js";
import { copyFullStackEnv } from "../utils/copy-env.js";
import { addCommandPrefix } from "../utils/add-command-prefix.js";
export default (plop) => {
    const { setGenerator } = plop;
    setGenerator("project", {
        prompts: [
            {
                type: "input",
                message: "Enter project's name",
                name: "projectName",
            },
            {
                type: "list",
                message: "What type of project are you building?",
                choices: projectTypes.map(project => project.alias),
                default: projectTypes[0].alias,
                name: "projectType",
            },
            {
                type: "list",
                message: "What package manager are you using?",
                choices: packageManagersNames,
                default: packageManagers[1].name,
                name: "packageManager",
            },
            {
                type: "confirm",
                message: "Do you want to have a switch between light and dark theme?",
                default: false,
                name: "switch",
            },
        ],
        actions: data => {
            var _a;
            const actions = [];
            const projectType = (_a = projectTypes.find(type => (data === null || data === void 0 ? void 0 : data.projectType) === type.alias)) === null || _a === void 0 ? void 0 : _a.name;
            const projectName = toKebabCase(data === null || data === void 0 ? void 0 : data.projectName);
            const projectPath = `../../${projectName}`;
            const pathToReplace = `${process.cwd()}/${projectName}`;
            const packageManager = packageManagers.find(m => m.name === (data === null || data === void 0 ? void 0 : data.packageManager));
            actions.push(...[
                "Cloning your new project",
                {
                    type: "runCommand",
                    command: `git init ${projectName}`,
                },
                ...addCommandPrefix(data === null || data === void 0 ? void 0 : data.projectName, [
                    {
                        type: "runCommand",
                        command: "rm -rf .git && git init",
                    },
                    {
                        type: "runCommand",
                        command: `git remote add origin ${REPOS_BASE_URL}`,
                    },
                    {
                        type: "runCommand",
                        command: "git config core.sparseCheckout true",
                    },
                    {
                        type: "runCommand",
                        command: `echo "${projectType}" >> .git/info/sparse-checkout`,
                    },
                    {
                        type: "runCommand",
                        command: "git pull origin master",
                    },
                    {
                        type: "runCommand",
                        command: "rm -rf ./plop",
                    },
                    { type: "runCommand", command: "rm -rf .git" },
                    {
                        type: "runCommand",
                        command: `mv ${projectType}/* ./ && mv ${projectType}/.gitignore ./ && mv ${projectType}/.prettierrc ./ && rm -rf ${projectType}`,
                    },
                ]),
            ]);
            if (projectType === projectTypes[0].name) {
                actions.push(...[
                    "Replace all titles inside your new app",
                    ...replaceProjectNameModifyFullStack(projectType, projectName),
                    "Create .env files",
                    ...copyFullStackEnv(projectName),
                ]);
                if ((data === null || data === void 0 ? void 0 : data.switch) === false) {
                    actions.push("Removing the theme switch", {
                        type: "runCommand",
                        command: `cd ${projectName} && rm -rf client/src/App.tsx client/src/main.tsx client/src/components/layouts/Nav.tsx client/src/components/layouts/Page.tsx`,
                    }, {
                        type: "add",
                        path: `${pathToReplace}/client/src/App.tsx`,
                        templateFile: "../templates/react-rest/App.hbs",
                        // skipIfExists: true,
                    }, 
                    // React + Rest API yarn n
                    {
                        type: "add",
                        path: `${pathToReplace}/client/src/main.tsx`,
                        templateFile: "../templates/react-rest/main.hbs",
                        // skipIfExists: true,
                    }, {
                        type: "add",
                        path: `${pathToReplace}/client/src/components/layouts/Page.tsx`,
                        templateFile: "../templates/react-rest/Page.hbs",
                        // skipIfExists: true,
                    });
                }
            }
            if (projectType === projectTypes[1].name &&
                (data === null || data === void 0 ? void 0 : data.switch) === false) {
                actions.push("Removing the theme switch", {
                    type: "runCommand",
                    command: `cd ${projectName} && rm -rf src/App.tsx src/main.tsx src/components/layouts/Page.tsx`,
                }, {
                    type: "add",
                    templateFile: "../templates/react-client/App.hbs",
                    path: `${pathToReplace}/src/App.tsx`,
                }, {
                    type: "add",
                    templateFile: "../templates/react-client/main.hbs",
                    path: `${pathToReplace}/src/main.tsx`,
                }, {
                    type: "add",
                    templateFile: "../templates/react-client/Page.hbs",
                    path: `${pathToReplace}/src/components/layouts/Page.tsx`,
                });
            }
            actions.push(...[
                "Init git",
                {
                    type: "runCommand",
                    command: `cd ${projectName} && rm -rf .git && git init && git add . && git commit -m "Initial commit"`,
                },
            ]);
            if ((packageManager === null || packageManager === void 0 ? void 0 : packageManager.name) === "npm") {
                actions.push("Replace all instances of yarn by npm", {
                    type: "modify",
                    path: `${projectPath}/package.json`,
                    template: "npm run",
                    pattern: /(yarn)/g,
                }, {
                    type: "modify",
                    path: `${projectPath}/plop/src/plopfile.mts`,
                    template: "npm run",
                    pattern: /(yarn)/g,
                });
                actions.push("Replace install command in package.json", {
                    type: "modify",
                    path: `${projectPath}/package.json`,
                    template: '"install": "cd client && npm install"',
                    pattern: /("install": "cd client && npm run")/g,
                });
                actions.push("Replace all examples with yarn in README", {
                    type: "modify",
                    path: `${projectPath}/README.md`,
                    template: "`npm install`",
                    pattern: "`yarn`",
                });
                actions.push({
                    type: "modify",
                    path: `${projectPath}/README.md`,
                    template: "npm run",
                    pattern: /(yarn)/g,
                });
            }
            actions.push(...[
                "Start install...",
                {
                    type: "runCommand",
                    command: `cd ${projectName} && ${packageManager === null || packageManager === void 0 ? void 0 : packageManager.name} ${packageManager === null || packageManager === void 0 ? void 0 : packageManager.installCommand}`,
                },
            ]);
            actions.push("Cleaning...", {
                type: "runCommand",
                command: `cd ${projectName} && rm -rf templates`
            });
            actions.push(`All good, now run \`cd ${projectName}\` and have fun coding 🚀`);
            return actions;
        },
    });
};

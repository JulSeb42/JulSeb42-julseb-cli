import { toKebabCase } from "ts-utils-julseb";
import { projectTypes, packageManagers, packageManagersNames, REPOS_BASE_URL, languages, } from "../utils/constants.js";
import { replaceProjectNameModifyFullStack } from "../utils/replace-project-name-fullstack.js";
import { copyFullStackEnv } from "../utils/copy-env.js";
import { removeCypress } from "../utils/remove-cypress.js";
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
                message: "Which language do you want?",
                choices: languages.map(lang => lang.alias),
                default: languages[1].alias,
                name: "projectLang",
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
                message: "Add Cypress tests on front end?",
                default: false,
                name: "cypressTesting",
            },
        ],
        actions: data => {
            var _a, _b;
            const actions = [];
            const projectType = (_a = projectTypes.find(type => (data === null || data === void 0 ? void 0 : data.projectType) === type.alias)) === null || _a === void 0 ? void 0 : _a.name;
            const projectLang = (_b = languages.find(lang => (data === null || data === void 0 ? void 0 : data.projectLang) === lang.alias)) === null || _b === void 0 ? void 0 : _b.name;
            const boilerplate = `${projectType}-${projectLang}`;
            const packageManager = packageManagers.find(m => m.name === (data === null || data === void 0 ? void 0 : data.packageManager));
            actions.push(...[
                "Cloning project",
                {
                    type: "runCommand",
                    command: `git init ${toKebabCase(data === null || data === void 0 ? void 0 : data.projectName)}`,
                },
                ...addCommandPrefix(data === null || data === void 0 ? void 0 : data.projectName, [
                    "Remove and add again git",
                    {
                        type: "runCommand",
                        command: "rm -rf .git && git init",
                    },
                    "Add git remote",
                    {
                        type: "runCommand",
                        command: `git remote add origin ${REPOS_BASE_URL}`,
                    },
                    "Add sparseCheckout",
                    {
                        type: "runCommand",
                        command: "git config core.sparseCheckout true",
                    },
                    "Echo",
                    {
                        type: "runCommand",
                        command: `echo "${boilerplate}" >> .git/info/sparse-checkout`,
                    },
                    "Pull",
                    {
                        type: "runCommand",
                        command: "git pull origin master",
                    },
                    "Move all files from cloned folder to new folder",
                    {
                        type: "runCommand",
                        command: "rm -rf ./plop",
                    },
                    {
                        type: "runCommand",
                        command: `mv ${boilerplate}/* ./ && mv ${boilerplate}/.gitignore ./ && mv ${boilerplate}/.prettierrc ./ && rm -rf ${boilerplate}`,
                    },
                    { type: "runCommand", command: "rm -rf .git" },
                ]),
            ]);
            if (projectType === projectTypes[0].name ||
                projectType === projectTypes[1].name) {
                if ((data === null || data === void 0 ? void 0 : data.cypressTesting) === false) {
                    actions.push(...removeCypress(data.projectName, boilerplate));
                }
                actions.push(...[
                    "Replace all titles inside your new app",
                    ...replaceProjectNameModifyFullStack(boilerplate, projectLang),
                    "Create .env files",
                    ...copyFullStackEnv(data === null || data === void 0 ? void 0 : data.projectName),
                ]);
            }
            if (projectType === projectTypes[2].name) {
                if ((data === null || data === void 0 ? void 0 : data.cypressTesting) === false) {
                }
            }
            // ? Init repo
            actions.push(...[
                "Init git",
                {
                    type: "runCommand",
                    command: `cd ${data === null || data === void 0 ? void 0 : data.projectName} && rm -rf .git && git init && git add . && git commit -m "Initial commit"`,
                },
            ]);
            // ? Install packages
            actions.push(...[
                "Start install...",
                {
                    type: "runCommand",
                    command: `cd ${data === null || data === void 0 ? void 0 : data.projectName} && ${packageManager === null || packageManager === void 0 ? void 0 : packageManager.name} ${packageManager === null || packageManager === void 0 ? void 0 : packageManager.installCommand}`,
                },
            ]);
            return actions;
        },
    });
};

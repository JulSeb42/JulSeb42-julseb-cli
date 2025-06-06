import { toKebabCase } from "@julseb-lib/utils";
import { projectTypes, packageManagers, packageManagersNames, } from "../utils/constants.js";
import { replaceProjectNameModifyFullStack, replaceProjectNameModifyClient, replaceProjectNameServer, } from "../utils/replace-project-name-fullstack.js";
import { copyFullStackEnv, copyServerEnv } from "../utils/copy-env.js";
import { addCommandPrefix } from "../utils/add-command-prefix.js";
import { themeSwitchClient, } from "../utils/remove-theme-switch.js";
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
                type: "confirm",
                message: "Do you want a theme switch on your app?",
                default: false,
                name: "theme",
                when: data => data.projectType !== projectTypes[2].alias,
            },
            {
                type: "list",
                message: "What package manager are you using?",
                choices: packageManagersNames,
                default: packageManagers[0].name,
                name: "packageManager",
            },
        ],
        actions: data => {
            var _a, _b;
            const actions = [];
            const projectType = (_a = projectTypes.find(type => (data === null || data === void 0 ? void 0 : data.projectType) === type.alias)) === null || _a === void 0 ? void 0 : _a.name;
            const cloneProject = (_b = projectTypes.find(type => (data === null || data === void 0 ? void 0 : data.projectType) === type.alias)) === null || _b === void 0 ? void 0 : _b.clone;
            const projectName = toKebabCase(data === null || data === void 0 ? void 0 : data.projectName);
            const projectPath = `../${projectName}`;
            const shellProjectPath = `./${projectName}`;
            const packageManager = packageManagers.find(m => m.name === (data === null || data === void 0 ? void 0 : data.packageManager));
            actions.push("Start cloning your project", {
                type: "runCommand",
                command: `mkdir ${projectName}`,
            }, ...addCommandPrefix(projectName, [
                {
                    type: "runCommand",
                    command: `git clone ${cloneProject}`,
                },
                {
                    type: "runCommand",
                    command: `mv ./${projectType}/* ./`,
                },
                {
                    type: "runCommand",
                    command: `mv ./${projectType}/.vscode ./${projectType}/.gitignore ./${projectType}/.prettierrc ./`,
                },
                {
                    type: "runCommand",
                    command: `rm -rf ${projectType}`,
                },
            ]));
            if (projectType === projectTypes[0].name) {
                actions.push("Replace all titles inside your new app", ...replaceProjectNameModifyFullStack(projectType, projectName), "Create .env files", ...copyFullStackEnv(projectName));
                if (data === null || data === void 0 ? void 0 : data.theme) {
                    actions.push("Removing all pages which will use the theme", {
                        type: "runCommand",
                        command: `rm -rf ${shellProjectPath}/client/src/main.tsx ${shellProjectPath}/client/src/App.tsx ${shellProjectPath}/client/src/components/admin/AdminNav/AdminNav.tsx ${shellProjectPath}/client/src/components/admin/AdminNav/styles.tsx ${shellProjectPath}/client/src/components/admin/AdminUserCard/styles.tsx ${shellProjectPath}/client/src/types/global.d.ts ${shellProjectPath}/client/src/components/layouts/Nav.tsx`,
                    }, "Adding pages using the theme switch", {
                        type: "add",
                        path: `${process.cwd()}/{{ kebabCase projectName }}/client/src/main.tsx`,
                        templateFile: `../templates/react-rest/switch-full/main.hbs`,
                    }, {
                        type: "add",
                        path: `${process.cwd()}/{{ kebabCase projectName }}/client/src/App.tsx`,
                        templateFile: "../templates/react-rest/switch-full/App.hbs",
                    }, {
                        type: "add",
                        path: `${process.cwd()}/{{ kebabCase projectName }}/client/src/components/admin/AdminNav/AdminNav.tsx`,
                        templateFile: "../templates/react-rest/switch-full/AdminNav.hbs",
                    }, {
                        type: "add",
                        path: `${process.cwd()}/{{ kebabCase projectName }}/client/src/components/admin/AdminNav/styles.tsx`,
                        templateFile: "../templates/react-rest/switch-full/AdminNavStyles.hbs",
                    }, {
                        type: "add",
                        path: `${process.cwd()}/{{ kebabCase projectName }}/client/src/components/admin/AdminUserCard/styles.tsx`,
                        templateFile: "../templates/react-rest/switch-full/AdminUserCardStyles.hbs",
                    }, {
                        type: "add",
                        path: `${process.cwd()}/{{ kebabCase projectName }}/client/src/types/global.d.ts`,
                        templateFile: "../templates/react-rest/switch-full/global.d.ts.hbs",
                    }, {
                        type: "add",
                        path: `${process.cwd()}/{{ kebabCase projectName }}/client/src/components/layouts/Nav.tsx`,
                        templateFile: "../templates/react-rest/switch-full/Nav.hbs",
                    });
                }
            }
            if (projectType === projectTypes[1].name) {
                actions.push("Replace all titles inside your new app", ...replaceProjectNameModifyClient(projectType, projectName));
                if (data === null || data === void 0 ? void 0 : data.theme) {
                    actions.push(...themeSwitchClient(shellProjectPath, projectPath));
                }
            }
            if (projectType === projectTypes[2].name) {
                actions.push("Replace all titles inside your new app", ...replaceProjectNameServer(projectType, projectName), "Create .env files", ...copyServerEnv(projectName));
            }
            if ((packageManager === null || packageManager === void 0 ? void 0 : packageManager.name) === "npm") {
                actions.push("Replace all instances of npm by yarn", {
                    type: "modify",
                    path: `${projectPath}/package.json`,
                    template: "yarn",
                    pattern: /(npm run)/g,
                });
                actions.push("Replace install command in package.json", {
                    type: "modify",
                    path: `${projectPath}/package.json`,
                    template: '"install": "cd client && yarn"',
                    pattern: /("install": "cd client && yarn run")/g,
                });
                actions.push("Replace all examples with yarn in README", {
                    type: "modify",
                    path: `${projectPath}/README.md`,
                    template: "`yarn`",
                    pattern: /(npm run)/g,
                });
            }
            actions.push("Installing packages, this may take a while...", {
                type: "runCommand",
                command: `cd ${projectName} && ${packageManager === null || packageManager === void 0 ? void 0 : packageManager.name} ${packageManager === null || packageManager === void 0 ? void 0 : packageManager.installCommand}`,
            });
            actions.push("Init git", {
                type: "runCommand",
                command: `cd ${projectName} && git init && git add . && git commit -m "Initial commit"`,
            });
            actions.push(`All good, now run \`cd ${projectName}\` and have fun coding 🚀`);
            return actions;
        },
    });
};

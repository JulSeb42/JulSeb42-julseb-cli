import type { NodePlopAPI, ActionType } from "plop"
import { toKebabCase } from "@julseb-lib/utils"
import {
    projectTypes,
    packageManagers,
    packageManagersNames,
} from "../utils/constants.js"
import {
    replaceProjectNameModifyFullStack,
    replaceProjectNameModifyClient,
} from "../utils/replace-project-name-fullstack.js"
import { copyFullStackEnv } from "../utils/copy-env.js"
import { addCommandPrefix } from "../utils/add-command-prefix.js"

export default (plop: NodePlopAPI) => {
    const { setGenerator } = plop

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
                default: packageManagers[0].name,
                name: "packageManager",
            },
            {
                type: "confirm",
                message:
                    "Do you want to have a switch between light and dark theme?",
                default: false,
                name: "switch",
            },
        ],

        actions: data => {
            const actions: (ActionType & { command?: string })[] = []
            const projectType = projectTypes.find(
                type => data?.projectType === type.alias
            )?.name
            const cloneProject = projectTypes.find(
                type => data?.projectType === type.alias
            )?.clone
            const projectName = toKebabCase(data?.projectName)
            const projectPath = `../${projectName}`

            const pathToReplace = `${process.cwd()}/${projectName}`

            const packageManager = packageManagers.find(
                m => m.name === data?.packageManager
            )

            actions.push(
                "Cloning your new project",
                {
                    type: "runCommand",
                    command: `mkdir ${projectName}`,
                },
                ...addCommandPrefix(projectName, [
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
                ])
            )

            if (projectType === projectTypes[0].name) {
                actions.push(
                    "Replace all titles inside your new app",
                    ...(replaceProjectNameModifyFullStack(
                        projectType,
                        projectName
                    ) as any),
                    "Create .env files",
                    ...(copyFullStackEnv(projectName) as any)
                )

                if (data?.switch === false) {
                    actions.push(
                        "Removing the theme switch",
                        {
                            type: "runCommand",
                            command: `cd ${projectName} && rm -rf client/src/App.tsx client/src/main.tsx client/src/components/layouts/Nav.tsx client/src/components/layouts/Page.tsx`,
                        },
                        {
                            type: "add",
                            path: `${pathToReplace}/client/src/App.tsx`,
                            templateFile: "../templates/react-rest/App.hbs",
                        },
                        {
                            type: "add",
                            path: `${pathToReplace}/client/src/main.tsx`,
                            templateFile: "../templates/react-rest/main.hbs",
                        },
                        {
                            type: "add",
                            path: `${pathToReplace}/client/src/components/layouts/Page.tsx`,
                            templateFile: "../templates/react-rest/Page.hbs",
                        }
                    )
                }
            }

            if (projectType === projectTypes[1].name) {
                actions.push(
                    ...(replaceProjectNameModifyClient(
                        projectType,
                        projectName
                    ) as any)
                )

                if (data?.switch === false) {
                    actions.push(
                        "Removing the theme switch",
                        {
                            type: "runCommand",
                            command: `cd ${projectName} && rm -rf src/App.tsx src/main.tsx src/components/layouts/Page.tsx`,
                        },
                        {
                            type: "add",
                            templateFile: "../templates/react-client/App.hbs",
                            path: `${pathToReplace}/src/App.tsx`,
                        },
                        {
                            type: "add",
                            templateFile: "../templates/react-client/main.hbs",
                            path: `${pathToReplace}/src/main.tsx`,
                        },
                        {
                            type: "add",
                            templateFile: "../templates/react-client/Page.hbs",
                            path: `${pathToReplace}/src/components/layouts/Page.tsx`,
                        }
                    )
                }

                if (packageManager?.name === "npm") {
                    actions.push(
                        "Replace all instances of yarn by npm",
                        {
                            type: "modify",
                            path: `${projectPath}/package.json`,
                            template: "npm run",
                            pattern: /(yarn)/g,
                        },
                        {
                            type: "modify",
                            path: `${projectPath}/plop/plopfile.ts`,
                            template: "npm run",
                            pattern: /(yarn)/g,
                        }
                    )

                    actions.push("Replace install command in package.json", {
                        type: "modify",
                        path: `${projectPath}/package.json`,
                        template: '"install": "cd client && npm install"',
                        pattern: /("install": "cd client && npm run")/g,
                    })

                    actions.push("Replace all examples with yarn in README", {
                        type: "modify",
                        path: `${projectPath}/README.md`,
                        template: "`npm install`",
                        pattern: "`yarn`",
                    })

                    actions.push({
                        type: "modify",
                        path: `${projectPath}/README.md`,
                        template: "npm run",
                        pattern: /(yarn)/g,
                    })
                }
            }

            actions.push("Start install...", {
                type: "runCommand",
                command: `cd ${projectName} && ${packageManager?.name} ${packageManager?.installCommand}`,
            })

            actions.push("Init git", {
                type: "runCommand",
                command: `cd ${projectName} && git init && git add . && git commit -m "Initial commit"`,
            })

            actions.push(
                `All good, now run \`cd ${projectName}\` and have fun coding 🚀`
            )

            return actions
        },
    })
}

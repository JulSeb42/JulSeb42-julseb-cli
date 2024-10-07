import type { NodePlopAPI, ActionType } from "plop"
import { toKebabCase } from "@julseb-lib/utils"
import {
    projectTypes,
    packageManagers,
    packageManagersNames,
    REPOS_BASE_URL,
} from "../utils/constants.js"
import { replaceProjectNameModifyFullStack } from "../utils/replace-project-name-fullstack.js"
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
                default: packageManagers[1].name,
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
            const projectName = toKebabCase(data?.projectName)
            const projectPath = `../../${projectName}`

            const packageManager = packageManagers.find(
                m => m.name === data?.packageManager
            )

            actions.push(
                ...[
                    "Cloning your new project",
                    {
                        type: "runCommand",
                        command: `git init ${projectName}`,
                    },
                    ...addCommandPrefix(data?.projectName, [
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
                ]
            )

            if (
                projectType === projectTypes[0].name ||
                projectType === projectTypes[1].name
            ) {
                actions.push(
                    ...[
                        "Replace all titles inside your new app",
                        ...(replaceProjectNameModifyFullStack(
                            projectType,
                            projectName
                        ) as any),
                        "Create .env files",
                        ...copyFullStackEnv(projectName),
                    ]
                )

                if (data?.switch === false) {
                    actions.push(
                        "Removing the theme switch",
                        ...addCommandPrefix(projectName, [
                            {
                                type: "runCommand",
                                command:
                                    "rm -rf client/src/App.tsx client/src/main.tsx client/src/components/layouts/Nav.tsx client/src/components/layouts/Page.tsx",
                            },
                        ]),
                        {
                            type: "add",
                            path: `${projectPath}/client/src/App.tsx`,
                            templateFile: "../templates/react-rest/App.hbs",
                        },
                        {
                            type: "add",
                            path: `${projectPath}/client/src/main.tsx`,
                            templateFile: "../templates/react-rest/main.hbs",
                        },
                        {
                            type: "add",
                            path: `${projectPath}/client/src/components/layouts/Page.tsx`,
                            templateFile: "../templates/react-rest/Page.hbs",
                        }
                    )
                }
            }

            if (
                projectType === projectTypes[2].name &&
                data?.switch === false
            ) {
                actions.push(
                    ...addCommandPrefix(projectName, [
                        {
                            type: "runCommand",
                            command:
                                "rm -rf src/App.tsx src/main.tsx src/components/layouts/Page.tsx",
                        },
                    ]),
                    {
                        type: "add",
                        templateFile: "../templates/react-client/App.hbs",
                        path: `${projectPath}/src/App.tsx`,
                    },
                    {
                        type: "add",
                        templateFile: "../templates/react-client/App.hbs",
                        path: `${projectPath}/src/main.tsx`,
                    },
                    {
                        type: "add",
                        templateFile: "../templates/react-client/Page.hbs",
                        path: `${projectPath}/src/components/layouts/Page.tsx`,
                    }
                )
            }

            actions.push(
                ...[
                    "Init git",
                    {
                        type: "runCommand",
                        command: `cd ${projectName} && rm -rf .git && git init && git add . && git commit -m "Initial commit"`,
                    },
                ]
            )

            actions.push(
                ...[
                    "Start install...",
                    {
                        type: "runCommand",
                        command: `cd ${projectName} && ${packageManager?.name} ${packageManager?.installCommand}`,
                    },
                ]
            )

            return actions
        },
    })
}

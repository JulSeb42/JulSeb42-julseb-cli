import type { NodePlopAPI, ActionType } from "plop"
import { toKebabCase } from "ts-utils-julseb"
import {
    projectTypes,
    packageManagers,
    packageManagersNames,
    REPOS_BASE_URL,
    languages,
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
        ],

        actions: data => {
            const actions: (ActionType & { command?: string })[] = []
            const projectType = projectTypes.find(
                type => data?.projectType === type.alias
            )?.name
            const projectLang = languages.find(
                lang => data?.projectLang === lang.alias
            )?.name

            const boilerplate = `${projectType}-${projectLang}`

            const packageManager = packageManagers.find(
                m => m.name === data?.packageManager
            )

            actions.push(
                ...[
                    "Cloning your new project",
                    {
                        type: "runCommand",
                        command: `git init ${toKebabCase(data?.projectName)}`,
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
                            command: `echo "${boilerplate}" >> .git/info/sparse-checkout`,
                        },
                        {
                            type: "runCommand",
                            command: "git pull origin master",
                        },
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
                            boilerplate,
                            projectLang!
                        ) as any),
                        "Create .env files",
                        ...copyFullStackEnv(data?.projectName),
                    ]
                )
            }

            actions.push(
                ...[
                    "Init git",
                    {
                        type: "runCommand",
                        command: `cd ${data?.projectName} && rm -rf .git && git init && git add . && git commit -m "Initial commit"`,
                    },
                ]
            )

            actions.push(
                ...[
                    "Start install...",
                    {
                        type: "runCommand",
                        command: `cd ${data?.projectName} && ${packageManager?.name} ${packageManager?.installCommand}`,
                    },
                ]
            )

            return actions
        },
    })
}

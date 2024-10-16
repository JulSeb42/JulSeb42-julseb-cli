import type { ActionType } from "plop"
import { toKebabCase, toTitleCase } from "@julseb-lib/utils"
import { addPathPrefix } from "./add-command-prefix.js"
import { projectTypes } from "./constants.js"

export function replaceProjectNameModifyFullStack(
    repoName: string,
    projectName: string
) {
    // ? Replace vite-rest by toKebabCase(data.projectName) in server package.json
    // ? Replace client-vite-rest by toKebabCase(`client-${projectName}`) in client package.json
    // ? Replace MONGODB_URI vite-rest in server/consts
    // ? Replace repoName by toTitleCase(data.projectName) in shared site-data
    // ? Replace cloudinary config projectName
    // ? Replace index.html client title for projectName

    const paths: Array<ActionType> = [
        `Replacing ${repoName} by your new project's name where needed`,
        {
            type: "modify",
            path: "package.json",
            template: "{{ kebabCase projectName }}",
            pattern: repoName,
        },
        {
            type: "modify",
            path: "client/package.json",
            template: "client-{{ kebabCase projectName }}",
            pattern: `client-${repoName}`,
        },
        {
            type: "modify",
            path: `server/utils/consts.ts`,
            template: "{{ kebabCase projectName }}",
            pattern: repoName,
        },
        {
            type: "modify",
            path: `server/config/cloudinary.config.ts`,
            template: "{{ kebabCase projectName }}",
            pattern: repoName,
        },
        {
            type: "modify",
            path: "client/index.html",
            template: toTitleCase(projectName),
            pattern: repoName,
        },
        {
            type: "modify",
            path: `shared/site-data.ts`,
            template: toTitleCase(projectName),
            pattern: repoName,
        },
        {
            type: "modify",
            path: "server/db/seed/seed.js",
            template: toKebabCase(projectName),
            pattern: repoName,
        },
    ]

    return addPathPrefix(paths)
}

export function replaceProjectNameModifyClient(
    repoName: string,
    projectName: string
) {
    const paths: Array<ActionType> = [
        `Replacing ${repoName} by your new project's name where needed`,
        {
            type: "modify",
            path: "package.json",
            template: toKebabCase(projectName),
            pattern: repoName,
        },
        {
            type: "modify",
            path: "index.html",
            template: toTitleCase(projectName),
            pattern: repoName,
        },
        {
            type: "modify",
            path: "src/data/site-data.ts",
            template: toTitleCase(projectName),
            pattern: repoName,
        },
    ]

    return addPathPrefix(paths)
}

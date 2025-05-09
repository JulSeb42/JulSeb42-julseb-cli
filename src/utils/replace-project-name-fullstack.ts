import type { ActionType } from "plop"
import { toKebabCase, toTitleCase } from "@julseb-lib/utils"
import { addPathPrefix } from "./add-command-prefix.js"
import { projectTypes } from "./constants.js"

export function replaceProjectNameModifyFullStack(
    projectType: string,
    projectName: string
) {
    // ? Replace vite-rest by toKebabCase(data.projectName) in server package.json
    // ? Replace client-vite-rest by toKebabCase(`client-${projectName}`) in client package.json
    // ? Replace MONGODB_URI vite-rest in server/consts
    // ? Replace projectType by toTitleCase(data.projectName) in shared site-data
    // ? Replace cloudinary config projectName
    // ? Replace index.html client title for projectName

    const paths: Array<ActionType> = [
        {
            type: "modify",
            path: "package.json",
            template: "{{ kebabCase projectName }}",
            pattern: projectType,
        },
        {
            type: "modify",
            path: "client/package.json",
            template: "client-{{ kebabCase projectName }}",
            pattern: `client-${projectType}`,
        },
        {
            type: "modify",
            path: `server/utils/consts.ts`,
            template: "{{ kebabCase projectName }}",
            pattern: projectType,
        },
        {
            type: "modify",
            path: `server/config/cloudinary.config.ts`,
            template: "{{ kebabCase projectName }}",
            pattern: projectType,
        },
        {
            type: "modify",
            path: "client/index.html",
            template: toTitleCase(projectName),
            pattern: projectType,
        },
        {
            type: "modify",
            path: `shared/site-data.ts`,
            template: toTitleCase(projectName),
            pattern: projectType,
        },
        {
            type: "modify",
            path: "seed/seed.ts",
            template: toKebabCase(projectName),
            pattern: projectType,
        },
    ]

    return addPathPrefix(paths)
}

export function replaceProjectNameModifyClient(
    repoName: string,
    projectName: string
) {
    const paths: Array<ActionType> = [
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

export function replaceProjectNameServer(
    projectType: string,
    projectName: string
) {
    const paths: Array<ActionType> = [
        {
            type: "modify",
            path: "package.json",
            template: "{{ kebabCase projectName }}",
            pattern: projectType,
        },
        {
            type: "modify",
            path: `server/utils/consts.ts`,
            template: "{{ kebabCase projectName }}",
            pattern: projectType,
        },
        {
            type: "modify",
            path: `server/config/cloudinary.config.ts`,
            template: "{{ kebabCase projectName }}",
            pattern: projectType,
        },
        {
            type: "modify",
            path: `server/data/site-data.ts`,
            template: toTitleCase(projectName),
            pattern: projectType,
        },
        {
            type: "modify",
            path: "seed/seed.ts",
            template: toKebabCase(projectName),
            pattern: projectType,
        },
    ]

    return addPathPrefix(paths)
}

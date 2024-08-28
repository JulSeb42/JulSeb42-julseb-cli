import { 
// addCommandPrefix,
addPathPrefix, } from "./add-command-prefix.js";
// import { replaceStringInFile } from "./replace-in-file.js"
// import { toKebabCase, toTitleCase } from "ts-utils-julseb"
/**
 * @deprecated
 */
export function replaceProjectNameCommandsFullStack(projectName, repoName) {
    // ? Replace vite-rest by toKebabCase(data.projectName) in server package.json
    // ? Replace client-vite-rest by toKebabCase(`client-${projectName}`) in client package.json
    // ? Replace MONGODB_URI vite-rest in server/consts
    // ? Replace repoName by toTitleCase(data.projectName) in shared site-data
    // ? Replace cloudinary config projectName
    // ? Replace index.html client title for projectName
    // const kebabName = toKebabCase(projectName)
    // const titleName = toTitleCase(projectName)
    // return addCommandPrefix(projectName, [
    //     {
    //         type: "runCommand",
    //         command: replaceStringInFile("package.json", repoName, kebabName),
    //     },
    //     {
    //         type: "runCommand",
    //         command: replaceStringInFile(
    //             "client/package.json",
    //             `client-${repoName}`,
    //             `client-${kebabName}`
    //         ),
    //     },
    //     {
    //         type: "runCommand",
    //         command: replaceStringInFile(
    //             "server/utils/consts.ts",
    //             repoName,
    //             kebabName
    //         ),
    //     },
    //     {
    //         type: "runCommand",
    //         command: replaceStringInFile(
    //             "server/config/cloudinary.config.ts",
    //             repoName,
    //             kebabName
    //         ),
    //     },
    //     {
    //         type: "runCommand",
    //         command: replaceStringInFile(
    //             "client/index.html",
    //             repoName,
    //             titleName
    //         ),
    //     },
    //     {
    //         type: "runCommand",
    //         command: replaceStringInFile(
    //             "shared/site-data.ts",
    //             repoName,
    //             titleName
    //         ),
    //     },
    // ])
    return addPathPrefix([
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
            path: "server/utils/consts.ts",
            template: "{{ kebabCase projectName }}",
            pattern: repoName,
        },
        {
            type: "modify",
            path: "server/config/cloudinary.config.ts",
            template: "{{ kebabCase projectName }}",
            pattern: repoName,
        },
        {
            type: "modify",
            path: "client/index.html",
            template: "{{ titleCase projectName }}",
            pattern: repoName,
        },
        {
            type: "modify",
            path: "shared/site-data.ts",
            template: "{{ titleCase projectName }}",
            pattern: repoName,
        },
    ]);
}
export function replaceProjectNameModifyFullStack(repoName) {
    // ? Replace vite-rest by toKebabCase(data.projectName) in server package.json
    // ? Replace client-vite-rest by toKebabCase(`client-${projectName}`) in client package.json
    // ? Replace MONGODB_URI vite-rest in server/consts
    // ? Replace repoName by toTitleCase(data.projectName) in shared site-data
    // ? Replace cloudinary config projectName
    // ? Replace index.html client title for projectName
    return addPathPrefix([
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
            path: "server/utils/consts.ts",
            template: "{{ kebabCase projectName }}",
            pattern: repoName,
        },
        {
            type: "modify",
            path: "server/config/cloudinary.config.ts",
            template: "{{ kebabCase projectName }}",
            pattern: repoName,
        },
        {
            type: "modify",
            path: "client/index.html",
            template: "{{ titleCase projectName }}",
            pattern: repoName,
        },
        {
            type: "modify",
            path: "shared/site-data.ts",
            template: "{{ titleCase projectName }}",
            pattern: repoName,
        },
    ]);
}

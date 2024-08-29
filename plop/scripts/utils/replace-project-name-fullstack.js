import { 
// addCommandPrefix,
addPathPrefix, } from "./add-command-prefix.js";
// import { replaceStringInFile } from "./replace-in-file.js"
// import { toKebabCase, toTitleCase } from "${lang}-utils-julseb"
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
    //             "server/utils/consts.${lang}",
    //             repoName,
    //             kebabName
    //         ),
    //     },
    //     {
    //         type: "runCommand",
    //         command: replaceStringInFile(
    //             "server/config/cloudinary.config.${lang}",
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
    //             "shared/site-data.${lang}",
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
            path: "server/utils/consts.${lang}",
            template: "{{ kebabCase projectName }}",
            pattern: repoName,
        },
        {
            type: "modify",
            path: "server/config/cloudinary.config.${lang}",
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
            path: "shared/site-data.${lang}",
            template: "{{ titleCase projectName }}",
            pattern: repoName,
        },
    ]);
}
export function replaceProjectNameModifyFullStack(repoName, lang) {
    // ? Replace vite-rest by toKebabCase(data.projectName) in server package.json
    // ? Replace client-vite-rest by toKebabCase(`client-${projectName}`) in client package.json
    // ? Replace MONGODB_URI vite-rest in server/consts
    // ? Replace repoName by toTitleCase(data.projectName) in shared site-data
    // ? Replace cloudinary config projectName
    // ? Replace index.html client title for projectName
    const paths = [
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
            path: `server/utils/consts.${lang}`,
            template: "{{ kebabCase projectName }}",
            pattern: repoName,
        },
        {
            type: "modify",
            path: `server/config/cloudinary.config.${lang}`,
            template: "{{ kebabCase projectName }}",
            pattern: repoName,
        },
        {
            type: "modify",
            path: "client/index.html",
            template: "{{ titleCase projectName }}",
            pattern: repoName,
        },
    ];
    if (lang === "ts")
        paths.push({
            type: "modify",
            path: `shared/site-data.${lang}`,
            template: "{{ titleCase projectName }}",
            pattern: repoName,
        });
    if (lang === "js")
        paths.push(...[
            {
                type: "modify",
                // @ts-ignore
                path: `server/utils/site-data.${lang}`,
                template: "{{ titleCase projectName }}",
                pattern: repoName,
            },
            {
                type: "modify",
                path: `client/src/data/site-data.${lang}`,
                template: "{{ titleCase projectName }}",
                pattern: repoName,
            },
        ]);
    return addPathPrefix(paths);
}

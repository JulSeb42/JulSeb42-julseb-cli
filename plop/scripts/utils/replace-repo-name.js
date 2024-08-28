import { toKebabCase } from "ts-utils-julseb";
export function replaceRepoName(repoName, projectName) {
    return [
        `Replace ${repoName} by ${toKebabCase(projectName)}`,
        {
            type: "runCommand",
            command: `mv ${repoName} ${toKebabCase(projectName)}`,
        },
    ];
}

import { toKebabCase } from "ts-utils-julseb"

export function replaceRepoName(repoName: string, projectName: string) {
    return [
        `Replace ${repoName} by ${toKebabCase(projectName)}`,
        {
            type: "runCommand",
            command: `mv ${repoName} ${toKebabCase(projectName)}`,
        },
    ]
}

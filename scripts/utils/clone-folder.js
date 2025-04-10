/**
 * @param projectName string
 * @param boilerplate string
 */
export function cloneFolder(projectName, boilerplate) {
    const commands = [
        { type: "runCommand", command: `git init ${projectName}` },
        { type: "runCommand", command: `cd ${projectName}` },
        {
            type: "runCommand",
            command: `git remote add origin https://github.com/JulSeb42/JulSeb42-julseb-cli.git`,
        },
        { type: "runCommand", command: "git config core.sparseCheckout true" },
        {
            type: "runCommand",
            command: `echo "${boilerplate}" >> .git/info/sparse-checkout`,
        },
        { type: "runCommand", command: "git pull origin master" },
        // move all content from downloaded folder to root project folder
        { type: "runCommand", command: "rm -rf .git" },
        { type: "runCommand", command: "git init" },
        { type: "runCommand", command: "git add ." },
        { type: "runCommand", command: 'git commit -m "Initial commit"' },
    ];
    return commands;
}

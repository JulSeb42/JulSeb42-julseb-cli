import { toKebabCase } from "@julseb-lib/utils";
export function addCommandPrefix(projectName, commands) {
    return commands.map(command => {
        if (typeof command === "string")
            return command;
        return Object.assign(Object.assign({}, command), { command: `cd ${toKebabCase(projectName)} && ${command.command}` });
    });
}
export function addPathPrefix(commands) {
    return commands.map(command => typeof command === "string"
        ? command
        : Object.assign(Object.assign({}, command), { path: command.path
                ? `${process.cwd()}/{{ kebabCase projectName }}/${command.path}`
                : null }));
}

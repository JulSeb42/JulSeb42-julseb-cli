import { toKebabCase } from "@julseb-lib/utils";
import { BASE_PATH } from "./constants.js";
export function addCommandPrefix(projectName, commands) {
    return commands.map(command => {
        if (typeof command === "string")
            return command;
        return Object.assign(Object.assign({}, command), { command: `cd ${BASE_PATH}/${toKebabCase(projectName)} && ${command.command}` });
    });
}
export function addPathPrefix(commands) {
    return commands.map(command => typeof command === "string"
        ? command
        : Object.assign(Object.assign({}, command), { path: command.path
                ? `${BASE_PATH}/{{ kebabCase projectName }}/${command.path}`
                : null }));
}

import type { ActionType, ModifyActionConfig } from "plop"
import { toKebabCase } from "@julseb-lib/utils"
import { BASE_PATH } from "./constants.js"
import type { ActionCommandType } from "./types.js"

export function addCommandPrefix(
    projectName: string,
    commands: (ActionCommandType | string)[]
) {
    return commands.map(command => {
        if (typeof command === "string") return command

        return {
            ...command,
            command: `cd ${BASE_PATH}/${toKebabCase(projectName)} && ${
                command.command
            }`,
        }
    })
}

export function addPathPrefix(commands: Array<ActionType>) {
    return commands.map(command =>
        typeof command === "string"
            ? command
            : {
                  ...command,
                  path: (command as ModifyActionConfig).path
                      ? `${BASE_PATH}/{{ kebabCase projectName }}/${
                            (command as ModifyActionConfig).path
                        }`
                      : null,
              }
    )
}

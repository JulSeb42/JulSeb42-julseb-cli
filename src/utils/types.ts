import type {
    ActionConfig,
    AddActionConfig,
    AddManyActionConfig,
    AppendActionConfig,
    CustomActionFunction,
    ModifyActionConfig,
} from "plop"

export type PackageManager = {
    name: string
    installCommand: string
    uninstallCommand: string
}

export type ActionCommandType = {
    type: "runCommand"
    command: string
    message?: string
}

export type ExtendedActionTypes =
    | ActionCommandType
    | ActionConfig
    | AddActionConfig
    | AddManyActionConfig
    | ModifyActionConfig
    | AppendActionConfig
    | CustomActionFunction
    | string

export type PlopCaseModifier =
    | "camelCase"
    | "snakeCase"
    | "kebabCase"
    | "dotCase"
    | "pathCase"
    | "properCase/pascalCase"
    | "lowerCase"
    | "sentenceCase"
    | "constantCase"
    | "titleCase"

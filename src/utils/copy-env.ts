import { addCommandPrefix, addPathPrefix } from "./add-command-prefix.js"
import { CLIENT_LOCAL } from "./constants.js"

export function copyFullStackEnv(projectName: string) {
    // ? Copy template.env to .env in server & client
    // ? Replace <url-to-client> in server .env by http://localhost:5173
    // ? Replace <your-db-name> in server .env by toKebabCase(data.projectName)

    const commands = addCommandPrefix(projectName, [
        {
            type: "runCommand",
            command:
                "cp template.env .env && cp client/template.env client/.env",
        },
    ])

    const otherActions = addPathPrefix([
        {
            type: "modify",
            template: CLIENT_LOCAL,
            path: ".env",
            pattern: "<url-to-client>",
        },
        {
            type: "modify",
            template: "{{ kebabCase projectName }}",
            path: ".env",
            pattern: "<your-db-name>",
        },
    ])

    return [...commands, ...otherActions]
}

export function copyServerEnv(projectName: string) {
    // ? Copy template.env to .env in server & client
    // ? Replace <url-to-client> in server .env by http://localhost:5173
    // ? Replace <your-db-name> in server .env by toKebabCase(data.projectName)

    const commands = addCommandPrefix(projectName, [
        {
            type: "runCommand",
            command: "cp template.env .env",
        },
    ])

    const otherActions = addPathPrefix([
        {
            type: "modify",
            template: "{{ kebabCase projectName }}",
            path: ".env",
            pattern: "<your-db-name>",
        },
    ])

    return [...commands, ...otherActions]
}

/*=============================================== Constants ===============================================*/

import type { PackageManager } from "./types.js"

export const projectTypes: Array<{ name: string; alias: string }> = [
    { name: "react-rest", alias: "React + Rest API" },
    { name: "react-graphql", alias: "React + GraphQL API" },
    { name: "react-client", alias: "React (client only)" },
]

export const packageManagers: PackageManager[] = [
    { name: "npm", installCommand: "install", uninstallCommand: "uninstall" },
    { name: "yarn", installCommand: "", uninstallCommand: "remove" },
]

export const packageManagersNames: string[] = packageManagers.map(m => m.name)

export const REPOS_BASE_URL =
    "https://github.com/JulSeb42/JulSeb42-julseb-cli.git"

export const CLIENT_LOCAL = "http://localhost:5173"

// yarn plop hello-world "React + Rest API" yarn n
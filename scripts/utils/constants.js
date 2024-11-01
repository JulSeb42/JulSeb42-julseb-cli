/*=============================================== Constants ===============================================*/
export const projectTypes = [
    {
        name: "julseb-lib-boilerplate-fullstack",
        alias: "React + Rest API",
        clone: "https://github.com/JulSeb42/julseb-lib-boilerplate-fullstack.git",
    },
    // { name: "react-graphql", alias: "React + GraphQL API" },
    {
        name: "julseb-lib-boilerplate-client",
        alias: "React (client only)",
        clone: "https://github.com/JulSeb42/julseb-lib-boilerplate-client.git",
    },
];
export const packageManagers = [
    {
        name: "npm",
        installCommand: "install --force",
        uninstallCommand: "uninstall",
    },
    { name: "yarn", installCommand: "", uninstallCommand: "remove" },
];
export const packageManagersNames = packageManagers.map(m => m.name);
export const REPOS_BASE_URL = "https://github.com/JulSeb42/JulSeb42-julseb-cli.git";
export const CLIENT_LOCAL = "http://localhost:5173";

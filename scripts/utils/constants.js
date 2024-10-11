/*=============================================== Constants ===============================================*/
export const projectTypes = [
    { name: "react-rest", alias: "React + Rest API" },
    // { name: "react-graphql", alias: "React + GraphQL API" },
    { name: "react-client", alias: "React (client only)" },
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

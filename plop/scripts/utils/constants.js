/*=============================================== Constants ===============================================*/
export const projectTypes = [
    // "Express Rest + Vite + React + TS", // Same with JS
    // "Express GraphQL + Vite + React + TS", // Same with JS
    // "Vite + React + TS", // Same with JS
    // // Coming soon
    // // "Next.js",
    // // "Remix",
    // // "Angular FE + Full",
    // // "Vue FE + Full"
    // "react-js",
    // "react-js-graphql",
    // "react-js-test",
    // "react-ts",
    // "react-ts-graphql",
    // "react-ts-rest",
    { name: "react-rest", alias: "React + Rest API" },
    { name: "react-graphql", alias: "React + GraphQL API" },
    { name: "react-client", alias: "React (client only)" },
];
export const languages = [
    { name: "js", alias: "JavaScript" },
    { name: "ts", alias: "TypeScript" },
];
export const packageManagers = [
    { name: "npm", installCommand: "install", uninstallCommand: "uninstall" },
    { name: "yarn", installCommand: "", uninstallCommand: "remove" },
];
export const packageManagersNames = packageManagers.map(m => m.name);
export const REPOS_BASE_URL = "https://github.com/JulSeb42/JulSeb42-julseb-cli.git";
export const REPOS_URLS = {
    VITE_REST: "vite-rest",
    VITE_APOLLO: "vite-apollo",
    VITE_FE_ONLY: "vite-styled",
};
export const CLIENT_LOCAL = "http://localhost:5173";

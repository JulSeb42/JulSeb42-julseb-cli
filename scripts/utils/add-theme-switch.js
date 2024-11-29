/*=============================================== Add theme switch ===============================================*/
export const themeSwitchFull = (shellPath, projectPath) => {
    const actions = [
        "Adding a Theme Switch for the whole app",
        {
            type: "runCommand",
            command: `rm -rf ${shellPath}/client/src/main.tsx ${shellPath}/client/src/App.tsx ${shellPath}/client/src/components/admin/AdminNav/AdminNav.tsx ${shellPath}/client/src/components/admin/AdminNav/styles.tsx ${shellPath}/client/src/components/admin/AdminUserCard/styles.tsx ${shellPath}/client/src/types/global.d.ts ${shellPath}/client/src/components/layouts/Nav.tsx`,
        },
        {
            type: "add",
            path: `${projectPath}/client/src/main.tsx`,
            templateFile: "../templates/react-rest/switch-full/main.hbs",
        },
        {
            type: "add",
            path: `${projectPath}/client/src/App.tsx`,
            templateFile: "../templates/react-rest/switch-full/App.hbs",
        },
        {
            type: "add",
            path: `${projectPath}/client/src/components/admin/AdminNav/AdminNav.tsx`,
            templateFile: "../templates/react-rest/switch-full/AdminNav.hbs",
        },
        {
            type: "add",
            path: `${projectPath}/client/src/components/admin/AdminNav/styles.tsx`,
            templateFile: "../templates/react-rest/switch-full/AdminNavStyles.hbs",
        },
        {
            type: "add",
            path: `${projectPath}/client/src/components/admin/AdminUserCard/styles.tsx`,
            templateFile: "../templates/react-rest/switch-full/AdminUserCardStyles.hbs",
        },
        {
            type: "add",
            path: `${projectPath}/client/src/types/global.d.ts`,
            templateFile: "../templates/react-rest/switch-full/global.d.ts.hbs",
        },
        {
            type: "add",
            path: `${projectPath}/client/src/components/layouts/Nav.tsx`,
            templateFile: "../templates/react-rest/switch-full/Nav.hbs",
        },
    ];
    return actions;
};
export const themeSwitchClient = (shellPath, projectPath) => {
    const actions = [
        {
            type: "runCommand",
            command: `rm -rf ${shellPath}/src/App.tsx ${shellPath}/src/main.tsx ${shellPath}/src/components/FactCard/styles.tsx ${shellPath}/src/components/layouts/Header/Nav.tsx ${shellPath}/src/components/layouts/Header/SwitchTheme.tsx ${shellPath}/src/pages/DemoApi.tsx ${shellPath}/src/types/global.d.ts`,
        },
        {
            type: "add",
            path: `${projectPath}/src/App.tsx`,
            templateFile: "../templates/react-client/switch/App.hbs",
        },
        {
            type: "add",
            path: `${projectPath}/src/main.tsx`,
            templateFile: "../templates/react-client/switch/main.hbs",
        },
        {
            type: "add",
            path: `${projectPath}/src/components/FactCard/styles.tsx`,
            templateFile: "../templates/react-client/switch/FactCardStyles.hbs",
        },
        {
            type: "add",
            path: `${projectPath}/src/components/layouts/Header/Nav.tsx`,
            templateFile: "../templates/react-client/switch/Nav.hbs",
        },
        {
            type: "add",
            path: `${projectPath}/src/components/layouts/Header/SwitchTheme.tsx`,
            templateFile: "../templates/react-client/switch/HeaderSwitchTheme.hbs",
        },
        {
            type: "add",
            path: `${projectPath}/src/types/global.d.ts`,
            templateFile: "../templates/react-client/switch/global.d.ts.hbs",
        },
        {
            type: "add",
            path: `${projectPath}/src/pages/DemoApi.tsx`,
            templateFile: "../templates/react-client/switch/DemoApi.hbs",
        },
    ];
    return actions;
};

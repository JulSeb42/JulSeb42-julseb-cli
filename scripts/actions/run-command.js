import { exec } from "child_process";
export default (plop) => {
    const { setActionType } = plop;
    setActionType("runCommand", (answers, config, plop) => new Promise((resolve, reject) => {
        exec(config.command, (error, stdout, stderr) => {
            // console.log(config)
            if (config.message) {
                console.log(config.message);
            }
            if (error) {
                console.error(error.message);
                reject(error);
            }
            resolve(stdout);
        });
    }));
};

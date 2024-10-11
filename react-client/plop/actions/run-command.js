/*=============================================== Run command action ===============================================*/

import { exec } from "child_process"

export default (/** @type {import('plop').NodePlopAPI} */ plop) => {
    const { setActionType } = plop

    setActionType(
        "runCommand",
        (_, config) =>
            new Promise((resolve, reject) => {
                exec(config.command, (error, stdout) => {
                    if (error) {
                        console.error(error.message)
                        reject(error)
                    }

                    resolve(stdout)
                })
            })
    )
}

/*=============================================== Run command action ===============================================*/

import type { NodePlopAPI } from "plop"
import { exec, type ExecException } from "child_process"

export const runCommandAction = (plop: NodePlopAPI) => {
    const { setActionType } = plop

    setActionType(
        "runCommand",
        (_, config) =>
            new Promise((resolve, reject) => {
                exec(
                    config.command,
                    (error: ExecException | null, stdout: string) => {
                        if (error) {
                            console.error(error.message)
                            reject(error)
                        }

                        resolve(stdout)
                    }
                )
            })
    )
}

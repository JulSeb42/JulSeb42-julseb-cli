import type { NodePlopAPI } from "plop"
import { exec, type ExecException } from "child_process"

export default (plop: NodePlopAPI) => {
    const { setActionType } = plop

    setActionType(
        "runCommand",
        (answers, config, plop) =>
            new Promise((resolve, reject) => {
                exec(
                    config.command,
                    (
                        error: ExecException | null,
                        stdout: string,
                        stderr: string
                    ) => {
                        // console.log({ config })

                        // if (config.message) {
                        //     console.log(config.message)
                        // }

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

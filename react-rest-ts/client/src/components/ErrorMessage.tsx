/*=============================================== ErrorMessage component ===============================================*/

import { Alert, uuid } from "@julseb-lib/react"
import type { IErrorMessage as ErrorMessageType } from "types"

export const ErrorMessage: FC<IErrorMessage> = ({ error }) => {
    if (!error) return null

    if (Array.isArray(error)) {
        return error.map(err => (
            <Alert color="danger" key={uuid()}>
                {err}
            </Alert>
        ))
    }

    return (
        <Alert color="danger">
            {typeof error === "string" ? error : error?.response?.data?.message}
        </Alert>
    )
}

interface IErrorMessage {
    error: ErrorMessageType
}

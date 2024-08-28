/*=============================================== ErrorMessage component ===============================================*/

import { Alert } from "@julseb-lib/react"

export function ErrorMessage({ error }) {
    if (!error) return null

    if (Array.isArray(error)) {
        return error.map(err => <Alert color="danger">{err}</Alert>)
    }

    return (
        <Alert color="danger">
            {typeof error === "string" ? error : error?.response?.data?.message}
        </Alert>
    )
}

/*=============================================== AnonRoute ===============================================*/

import { Navigate } from "react-router-dom"
import { PageLoading } from "@julseb-lib/react"
import { useAuthContext } from "context"
import { PATHS } from "routes"

export function AnonRoute({
    children,
    redirectTo = PATHS.MY_ACCOUNT,
}) {
    const { isLoggedIn, isLoading } = useAuthContext()

    return isLoading ? (
        <PageLoading />
    ) : !isLoggedIn ? (
        children
    ) : (
        <Navigate to={redirectTo} />
    )
}

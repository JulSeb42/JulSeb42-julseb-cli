/*=============================================== PublicProfile ===============================================*/

import { useParams } from "react-router-dom"
import { useFetch } from "@julseb-lib/react"
import { userService } from "api"
import { Page, UserHeader } from "components"

export const PublicProfile = () => {
    const { id } = useParams()

    const { response, error, loading } = useFetch(userService.getUser(id))
    const user = response?.data

    return (
        <Page title={loading ? "Loading" : user ? user?.fullName : "Error"}>
            <UserHeader user={user} isLoading={loading} error={error} />
        </Page>
    )
}

/*=============================================== NotLoggedIn ===============================================*/

import { Text } from "@julseb-lib/react"
import { Page } from "components"

export function NotLoggedIn() {
    return (
        <Page title="Verify your account">
            <Text tag="h1">You are not logged in!</Text>

            <Text>Please log in to verify your account.</Text>
        </Page>
    )
}

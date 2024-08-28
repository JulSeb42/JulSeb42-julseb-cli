/*=============================================== ForgotSent ===============================================*/

import { Text } from "@julseb-lib/react"
import { Page } from "components"

export function ForgotSent() {
    return (
        <Page title="Email sent successfully!">
            <Text tag="h1">Email sent successfully!</Text>

            <Text>
                We just sent you an email with a link to reset your password.
            </Text>
        </Page>
    )
}

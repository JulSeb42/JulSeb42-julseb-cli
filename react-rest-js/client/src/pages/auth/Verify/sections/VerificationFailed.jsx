/*=============================================== VerificationFailed ===============================================*/

import { Text } from "@julseb-lib/react"
import { Page, ErrorMessage } from "components"

export const VerificationFailed = ({ errorMessages }) => {
    return (
        <Page title="Verify your account">
            <Text tag="h1">Verification failed</Text>

            <Text>
                Your account could not be verified, please try again later.
            </Text>

            <ErrorMessage error={errorMessages} />
        </Page>
    )
}

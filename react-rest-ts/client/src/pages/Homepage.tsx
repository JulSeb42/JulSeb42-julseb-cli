/*=============================================== Homepage ===============================================*/

import { Text } from "@julseb-lib/react"
import { useAuthContext } from "context"
import { Page } from "components"

export const Homepage = () => {
    const { isLoggedIn, user } = useAuthContext()

    const imports = [
        'import { Schema, model } from "mongoose"',
    ]

    return (
        <Page title="Home">
            <Text tag="h1">Hello World!</Text>

            <ul>
                {imports.map(i => {
                    if (i.includes("{"))
                        return (
                            <li key={i}>
                                {i.split(" ")[0].replaceAll("import", "const")}{" "}
                                {i.substring(i.indexOf("{"), i.indexOf("}"))}
                                {` }`}
                                {` = require(${i.split("from")[1]})`}
                            </li>
                        )

                    return (
                        <li key={i}>
                            {i.split(" ")[0].replaceAll("import", "const")}{" "}
                            {i.split(" ")[1]}
                            {` = require(${i.split("from")[1]})`}
                            {/* {i.replaceAll("from", ' = require("')}
                            {`")`} */}
                        </li>
                    )
                })}
            </ul>

            {isLoggedIn && (
                <Text>Hello {user?.fullName}, you are logged in!</Text>
            )}
        </Page>
    )
}

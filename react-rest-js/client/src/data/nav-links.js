/*=============================================== NavLinks ===============================================*/

import { PATHS } from "routes"

export const baseLinks = [
    { text: "Home", to: PATHS.ROOT, end: true },
    { text: "All users", to: PATHS.USERS },
]

export const anonLinks = [
    { text: "Log in", to: PATHS.LOGIN },
    { text: "Sign up", to: PATHS.SIGNUP },
]

export const protectedLinks = [{ text: "My account", to: PATHS.MY_ACCOUNT }]

/*=============================================== NavLinks ===============================================*/

import { PATHS } from "routes"
import type { INavLink } from "types"

export const baseLinks: Array<INavLink> = [
    { text: "Home", to: PATHS.ROOT, end: true },
    { text: "All users", to: PATHS.USERS },
]

export const anonLinks: Array<INavLink> = [
    { text: "Log in", to: PATHS.LOGIN },
    { text: "Sign up", to: PATHS.SIGNUP },
]

export const protectedLinks: Array<INavLink> = [
    { text: "My account", to: PATHS.MY_ACCOUNT },
]

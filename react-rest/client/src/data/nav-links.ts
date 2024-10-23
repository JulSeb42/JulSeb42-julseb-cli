/*=============================================== NavLinks ===============================================*/

import { PATHS } from "routes"
import type { INavLink, INavLinkExtended } from "types"

export const navLinks: Array<INavLinkExtended> = [
    { text: "Homepage", to: PATHS.ROOT, type: "none", role: "user", end: true },
    { text: "All users", to: PATHS.USERS, type: "none", role: "user" },

    { text: "Log in", to: PATHS.LOGIN, type: "anon", role: "user" },
    { text: "Sign up", to: PATHS.SIGNUP, type: "anon", role: "user" },

    {
        text: "My account",
        to: PATHS.MY_ACCOUNT,
        type: "protected",
        role: "user",
    },
    { text: "Admin", to: PATHS.ADMIN_HOME, type: "protected", role: "admin" },
]

export const adminNavLinks: Array<INavLink> = [
    { text: "Home", to: PATHS.ADMIN_HOME },
    { text: "Users", to: PATHS.ADMIN_USERS },
]

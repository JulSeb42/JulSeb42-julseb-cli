/*=============================================== NavLinks ===============================================*/

import { PATHS } from "routes"
import type { INavLink } from "types"

export const navLinks: Array<INavLink> = [
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
    { text: "Admin", to: PATHS.ADMIN, type: "protected", role: "admin" },
]

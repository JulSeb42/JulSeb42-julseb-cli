/*=============================================== Nav link types ===============================================*/

import type { LibButtonLinkRequired } from "@julseb-lib/react/types"
import type { UserRole } from "types"

export type INavLink = LibButtonLinkRequired & {
    text: string

    end?: boolean
}

export type INavLinkExtended = INavLink & {
    type: "none" | "protected" | "anon"
    role: UserRole
}

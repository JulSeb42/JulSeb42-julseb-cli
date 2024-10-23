/*=============================================== Nav link types ===============================================*/

import type { LibButtonLinkRequired } from "@julseb-lib/react/types"
import type { UserRole } from "types"

export type INavLink = LibButtonLinkRequired & {
    text: string
    type: "none" | "protected" | "anon"
    role: UserRole
    end?: boolean
}

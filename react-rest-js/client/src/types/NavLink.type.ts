/*=============================================== Nav link types ===============================================*/

import type { LibButtonLinkRequired } from "@julseb-lib/react/types"

export type NavLink = LibButtonLinkRequired & {
    text: string
    end?: boolean
}

/*=============================================== Nav link types ===============================================*/

import type { LibButtonLinkRequired } from "@julseb-lib/react/types"

export type INavLink = LibButtonLinkRequired & {
    text: string
    end?: boolean
}

/*=============================================== Global types ===============================================*/

import type { FunctionComponent } from "react"
import type {
    ReactChildren,
    DispatchState as DispatchType,
} from "@julseb-lib/react/types"

declare global {
    type Children = ReactChildren
    type DispatchState<T> = DispatchType<T>
    type FC<T = FunctionComponent> = FunctionComponent<T>
}

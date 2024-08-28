/*=============================================== Generate server route ===============================================*/

import { SERVER_PATHS } from "data"

export function generateServerRoute(route, path, param) {
    const PATHS = SERVER_PATHS[route]
    const root = PATHS.ROOT
    const foundRoute = PATHS[path]

    const routeFn = typeof foundRoute === "string" ? null : foundRoute

    if (param && routeFn) {
        return `${root}${routeFn(param)}`
    }

    return `${root}${foundRoute}`
}

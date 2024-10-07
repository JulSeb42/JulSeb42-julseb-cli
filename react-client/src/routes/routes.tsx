/*=============================================== Routes ===============================================*/

// import { Navigate } from "react-router-dom"
import { PATHS } from "routes"
import { Homepage } from "pages/Homepage"
import { NotFound } from "pages/NotFound"
import { AboutPage } from "pages/About"
/* prepend import - do not remove */

type Route = {
    path: string
    element: JSX.Element
}

const redirects: Array<Route> = [
    // {
    //     path: "",
    //     element: <Navigate to="" />,
    // },
]

export const routes: Array<Route> = [
    { path: PATHS.ROOT, element: <Homepage /> },
    { path: "*", element: <NotFound /> },

    { path: PATHS.ABOUT, element: <AboutPage /> },

    /* prepend route - do not remove */

    ...redirects,
]

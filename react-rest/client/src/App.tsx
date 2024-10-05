/*=============================================== App ===============================================*/

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ThemeProvider, PageLoading, useLibTheme } from "@julseb-lib/react"
import { routes } from "routes"

export const App = () => {
    const { theme } = useLibTheme()

    return (
        <ThemeProvider theme={theme}>
            <RouterProvider
                router={createBrowserRouter(routes)}
                fallbackElement={<PageLoading />}
            />
        </ThemeProvider>
    )
}

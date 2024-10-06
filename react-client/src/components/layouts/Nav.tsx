/*=============================================== Nav ===============================================*/

import { NavLink } from "react-router-dom"
import { uuid, ButtonIcon, useLibTheme } from "@julseb-lib/react"
import { navLinks } from "data"

export const Nav = () => {
    const { toggleTheme, selectedTheme } = useLibTheme()

    return (
        <>
            {navLinks.map(({ text, to, onClick, end }) =>
                to ? (
                    <NavLink to={to} end={end} key={uuid()}>
                        {text}
                    </NavLink>
                ) : (
                    <button onClick={onClick} key={uuid()}>
                        {text}
                    </button>
                )
            )}

            <ButtonIcon
                icon={selectedTheme === "dark" ? "sun" : "moon"}
                size={24}
                variant="transparent"
                color="background"
                onClick={toggleTheme}
                aria-label="Toggle theme"
            />
        </>
    )
}

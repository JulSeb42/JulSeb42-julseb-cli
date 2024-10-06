/*=============================================== Nav ===============================================*/

import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { uuid, Skeleton } from "@julseb-lib/react"
import { useAuthContext } from "context"
import { baseLinks, anonLinks, protectedLinks } from "data"
import type { INavLink } from "types"

export const Nav = () => {
    const { isLoggedIn, logoutUser, isLoading } = useAuthContext()
    const [allLinks, setAllLinks] = useState<Array<INavLink>>(baseLinks)

    useEffect(() => {
        if (isLoggedIn) {
            setAllLinks([
                ...baseLinks,
                ...protectedLinks,
                { text: "Logout", onClick: logoutUser },
            ])
        } else {
            setAllLinks([...baseLinks, ...anonLinks])
        }
    }, [isLoggedIn])

    const skeletonProps = {
        width: 48,
        height: 24,
        backgroundColor: "transparent" as any,
        animation: "shine" as any,
    }

    if (isLoading)
        return (
            <>
                <Skeleton {...skeletonProps} />
                <Skeleton {...skeletonProps} />
                <Skeleton {...skeletonProps} />
            </>
        )

    return (
        <>
            {allLinks?.map(({ text, to, onClick, end }) =>
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
        </>
    )
}

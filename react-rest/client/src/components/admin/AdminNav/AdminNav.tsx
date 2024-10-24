/*=============================================== AdminNav component ===============================================*/

import { useEffect, useState } from "react"
import { Icon } from "@julseb-lib/react"
import { NavLink as Link } from "react-router-dom"
import { useAuthContext } from "context"
import { adminNavLinks, adminBottomLinks } from "data"
import { StyledAdminNav, LinkList, ListFooter, IconContainer } from "./styles"
import type { INavLinkAdmin } from "types"

export const AdminNav = () => {
    const [footerLinks, setFooterLinks] = useState(adminBottomLinks)

    const { logoutUser } = useAuthContext()

    useEffect(() => {
        setFooterLinks([
            ...adminBottomLinks,
            {
                text: "Log out",
                onClick: logoutUser,
                icon: "logout",
            },
        ])
    }, [])

    return (
        <StyledAdminNav>
            <LinkList>
                {adminNavLinks.map(link => (
                    <NavLink key={link.text} link={link}>
                        <NavIcon icon={link.icon} />
                        {link.text}
                    </NavLink>
                ))}
            </LinkList>

            <ListFooter>
                {footerLinks.map(link => (
                    <NavLink key={link.text} link={link}>
                        <NavIcon icon={link.icon} />
                        {link.text}
                    </NavLink>
                ))}
            </ListFooter>
        </StyledAdminNav>
    )
}

const NavLink: FC<{ link: INavLinkAdmin; children?: Children }> = ({
    link,
    children,
}) => {
    if (link.onClick)
        return (
            <button onClick={link.onClick} {...(link as any)}>
                {children}
            </button>
        )

    if (link.href)
        return (
            <a
                href={link.href}
                target={link.blank && "_blank"}
                rel={link.blank && "noreferrer noopener"}
                {...(link as any)}
            >
                {children}
            </a>
        )

    if (link.to)
        return (
            <Link
                to={link.to}
                target={link.blank && "_blank"}
                rel={link.blank && "noreferrer noopener"}
                {...(link as any)}
            >
                {children}
            </Link>
        )

    return null
}

const NavIcon: FC<{ icon: string }> = ({ icon }) => {
    return (
        <IconContainer>
            <Icon src={icon} size={16} />
        </IconContainer>
    )
}

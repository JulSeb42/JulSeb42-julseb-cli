/*=============================================== Page ===============================================*/

import { PageLayout } from "@julseb-lib/react"
import type { LibMainSize, LibHeaderLink } from "@julseb-lib/react/types"
import type { ILibPageLayout } from "@julseb-lib/react/component-props"
import { SITE_DATA } from "shared"
import { PATHS } from "routes"
import { useAuthContext } from "context"
import { Nav } from "components/layouts/Nav"
import { baseLinks, anonLinks, protectedLinks } from "data"

export const Page: FC<IPage> = ({
    "data-testid": testid,
    children,
    isLoading,
    title,
    description,
    keywords,
    cover,
    mainWidth = "default",
}) => {
    const { isLoggedIn } = useAuthContext()
    const restLinks = isLoggedIn ? protectedLinks : anonLinks
    const links: Array<LibHeaderLink> = [...baseLinks, ...restLinks]

    return (
        <PageLayout
            isLoading={isLoading}
            helmet={{
                title: `${title} | ${SITE_DATA.NAME}`,
                description,
                keywords: [...SITE_DATA.KEYWORDS, keywords] as Array<string>,
                cover: cover || SITE_DATA.COVER,
                siteName: SITE_DATA.NAME,
                favicon: SITE_DATA.FAVICON,
                author: SITE_DATA.AUTHOR,
                type: SITE_DATA.TYPE,
                language: SITE_DATA.LANGUAGE,
            }}
            header={{
                "data-testid": testid && `${testid}.Header`,
                logo: { text: SITE_DATA.NAME, to: PATHS.ROOT },
                nav: <Nav />,
                // links,
            }}
            main={{ size: mainWidth }}
        >
            {children}
        </PageLayout>
    )
}

type IPage = ILibPageLayout & {
    "data-testid"?: string
    title: string
    description?: string
    keywords?: string | Array<string>
    cover?: string
    mainWidth?: LibMainSize
}

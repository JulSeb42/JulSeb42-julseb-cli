/*=============================================== Page ===============================================*/

import { PageLayout } from "@julseb-lib/react"
import { SITE_DATA } from "data"
import { PATHS } from "routes"
import { Nav } from "components/layouts/Nav"

export function Page({
    "data-testid": testid,
    children,
    isLoading,
    title,
    description,
    keywords,
    cover,
    mainWidth = "default",
}) {
    return (
        <PageLayout
            isLoading={isLoading}
            helmet={{
                title: `${title} | ${SITE_DATA.NAME}`,
                description,
                keywords: [...SITE_DATA.KEYWORDS, keywords],
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
            }}
            main={{ size: mainWidth }}
        >
            {children}
        </PageLayout>
    )
}

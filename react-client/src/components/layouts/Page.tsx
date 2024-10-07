/*=============================================== Page ===============================================*/

import { useState, useEffect } from "react"
import { PageLayout, ButtonIcon, useLibTheme } from "@julseb-lib/react"
import type { LibMainSize } from "@julseb-lib/react/types"
import type { ILibPageLayout } from "@julseb-lib/react/component-props"
import { SITE_DATA, navLinks } from "data"
import { PATHS } from "routes"

export const Page: FC<IPage> = ({
    children,
    isLoading,
    title,
    description,
    keywords,
    cover,
    mainWidth = "default",
}) => {
    const { selectedTheme, toggleTheme } = useLibTheme()
    const [icon, setIcon] = useState<undefined | "sun" | "moon">(undefined)

    useEffect(() => {
        if (selectedTheme === "light") setIcon("moon")
        if (selectedTheme === "dark") setIcon("sun")
    }, [selectedTheme])

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
                logo: { text: SITE_DATA.NAME, to: PATHS.ROOT },
                nav: (
                    <ButtonIcon
                        icon={icon as string}
                        size={24}
                        variant="transparent"
                        color="background"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    />
                ),
                links: navLinks,
            }}
            main={{ size: mainWidth }}
        >
            {children}
        </PageLayout>
    )
}

type IPage = ILibPageLayout & {
    title: string
    description?: string
    keywords?: string | Array<string>
    cover?: string
    mainWidth?: LibMainSize
}

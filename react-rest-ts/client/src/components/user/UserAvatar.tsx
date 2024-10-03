/*=============================================== UserAvatar component ===============================================*/

import { Avatar, getInitials } from "@julseb-lib/react"
import type { ILibAvatar } from "@julseb-lib/react/component-props"
import { useAuthContext } from "context"

export const UserAvatar: FC<IAvatar> = props => {
    const { user } = useAuthContext()

    if (!user?.avatar)
        return <Avatar {...props} letter={getInitials(user?.fullName || "")} />

    return (
        <Avatar
            {...props}
            img={{ src: user.avatar, alt: `Avatar ${user.fullName}` }}
        />
    )
}

type IAvatar = Omit<
    ILibAvatar,
    | "img"
    | "letter"
    | "icon"
    | "iconSize"
    | "iconBaseUrl"
    | "backgroundColor"
    | "contentColor"
>

/*=============================================== UserAvatar component ===============================================*/

import { Avatar, getInitials, Skeleton } from "@julseb-lib/react"

export const UserAvatar = ({ size, user, isLoading }) => {
    if (isLoading && !user)
        return <Skeleton width={size} height={size} animation="shine" />

    if (!user.avatar || user.avatar === "")
        return <Avatar letter={getInitials(user.fullName || "")} />

    return <Avatar img={{ src: user.avatar, alt: `Avatar ${user.fullName}` }} />
}

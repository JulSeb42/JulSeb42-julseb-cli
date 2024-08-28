/*=============================================== UserCard component ===============================================*/

import { Avatar, Text } from "@julseb-lib/react"
import { PATHS } from "routes"
import { StyledUserCard } from "components/user/UserCard/styles"
import type { UserCardProps } from "components/user/UserCard/types"

export function UserCard({ user }: UserCardProps) {
    return (
        <StyledUserCard
            to={PATHS.USER(user?._id)}
            border={{ width: 1 }}
            gap="xs"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            padding="xs"
            borderRadius="m"
        >
            <Avatar img={user?.avatar} size={48} />
            <Text tag="strong">{user?.fullName}</Text>
        </StyledUserCard>
    )
}

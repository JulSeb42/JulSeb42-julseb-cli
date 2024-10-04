/*=============================================== UserCardSkeleton ===============================================*/

import type { FC } from "react"
import { SkeletonCard, Skeleton } from "@julseb-lib/react"

export const UserCardSkeleton: FC = () => {
    return (
        <SkeletonCard
            borderRadius="m"
            border={{ width: 1 }}
            flexDirection="column"
            gap="xs"
            alignItems="center"
            justifyContent="center"
            padding="s"
            isShiny
        >
            <Skeleton width={32} height={32} borderRadius="circle" />
            <Skeleton width="70%" height={24} borderRadius="s" />
        </SkeletonCard>
    )
}

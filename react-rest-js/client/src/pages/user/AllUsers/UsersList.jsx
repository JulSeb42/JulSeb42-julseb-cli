/*=============================================== UsersList ===============================================*/

import { useFetch, Text, Grid, generateNumbers } from "@julseb-lib/react"
import { userService } from "api"
import { UserCard, UserCardSkeleton } from "components"

export function UsersList() {
    const { response, error, loading } = useFetch(userService.allUsers())
    const users = response?.data

    if (loading || (!response && !error)) return <UsersListSkeleton />

    if (error) return <Text>Error while fetching users: {error.message}</Text>

    if (!users?.length) return <Text>No user yet.</Text>

    return (
        <Grid col={3} gap="s">
            {users.map(user => (
                <UserCard user={user} key={user._id} />
            ))}
        </Grid>
    )
}

function UsersListSkeleton() {
    return (
        <Grid col={3} gap="s">
            {generateNumbers(0, 4).map(n => (
                <UserCardSkeleton key={n} />
            ))}
        </Grid>
    )
}

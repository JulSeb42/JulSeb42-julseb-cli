/*=============================================== User service ===============================================*/

import { http } from "api"
import type { ApiResponse } from "types"

type User = {
    _id: string
    fullName: string
}

const PATHS = {
    ALL_USERS: "/users",
    GET_USER: (id = ":id") => `/user/${id}`,
}

class UserService {
    allUsers = async (): ApiResponse<Array<User>> =>
        await http.get(PATHS.ALL_USERS)

    getUser = async (id: string): ApiResponse<User> =>
        await http.get(PATHS.GET_USER(id))
}

export const userService = new UserService()

/*=============================================== User service ===============================================*/

import { http } from "api"
import { SERVER_PATHS } from "shared"
import type {
    ApiResponse,
    User,
    EditAccountFormData,
    EditPasswordFormData,
} from "types"

const { USERS: PATHS } = SERVER_PATHS

class UserService {
    allUsers = async (): ApiResponse<Array<User>> =>
        await http.get(PATHS.ALL_USERS)

    getUser = async (id: string): ApiResponse<User> =>
        await http.get(PATHS.USER(id))

    editAccount = async (id: string, data: EditAccountFormData) =>
        await http.put(PATHS.EDIT_ACCOUNT(id), data)

    editPassword = async (id: string, data: EditPasswordFormData) =>
        await http.put(PATHS.EDIT_ACCOUNT(id), data)

    deleteAccount = async (id: string) =>
        await http.delete(PATHS.DELETE_ACCOUNT(id))
}

export const userService = new UserService()

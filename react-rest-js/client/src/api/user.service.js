/*=============================================== User service ===============================================*/

import { http } from "api"
import { SERVER_PATHS } from "shared"

const { USERS: PATHS } = SERVER_PATHS

class UserService {
    allUsers = async () => await http.get(PATHS.ALL_USERS)

    getUser = async id => await http.get(PATHS.USER(id))

    editAccount = async (id, data) =>
        await http.put(PATHS.EDIT_ACCOUNT(id), data)

    editPassword = async (id, data) =>
        await http.put(PATHS.EDIT_PASSWORD(id), data)

    deleteAccount = async id => await http.delete(PATHS.DELETE_ACCOUNT(id))
}

export const userService = new UserService()

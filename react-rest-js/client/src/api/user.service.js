/*=============================================== User service ===============================================*/

import { http } from "api"
import { generateServerRoute } from "utils"

const generateRoute = (route, id) => generateServerRoute("USERS", route, id)

class UserService {
    async allUsers() {
        return await http.get(generateRoute("ALL_USERS"))
    }

    async getUser(id) {
        return await http.get(generateRoute("USER", id))
    }

    async editAccount(id, data) {
        return await http.put(generateRoute("EDIT_ACCOUNT", id), data)
    }

    async editPassword(id, data) {
        return await http.put(generateRoute("EDIT_PASSWORD", id), data)
    }

    async deleteAccount(id) {
        return await http.delete(generateRoute("DELETE_ACCOUNT", id))
    }
}

export const userService = new UserService()

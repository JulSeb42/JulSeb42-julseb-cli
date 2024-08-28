/*=============================================== Auth service ===============================================*/

import { http } from "api"
import { generateServerRoute } from "utils"

const generateRoute = route => generateServerRoute("AUTH", route)

class AuthService {
    async signup(data) {
        return await http.post(generateRoute("SIGNUP"), data)
    }

    async login(data) {
        return await http.post(generateRoute("LOGIN"), data)
    }

    async loggedIn(data) {
        return await http.get(generateRoute("LOGGED_IN"), data)
    }

    async verify(id, token) {
        return await http.put(
            generateServerRoute("AUTH", "VERIFY", [id, token])
        )
    }

    async forgotPassword(data) {
        return await http.post(generateRoute("FORGOT_PASSWORD"), data)
    }

    async resetPassword(data) {
        return await http.put(generateRoute("RESET_PASSWORD"), data)
    }
}

export const authService = new AuthService()

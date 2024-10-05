/*=============================================== Auth service ===============================================*/

import { http } from "api"
import { SERVER_PATHS } from "shared"

const { AUTH: PATHS } = SERVER_PATHS

class AuthService {
    signup = async data => await http.post(PATHS.SIGNUP, data)

    login = async data => await http.post(PATHS.LOGIN, data)

    loggedIn = async data => await http.get(PATHS.LOGGED_IN, data)

    verify = async (id, token) => await http.put(PATHS.VERIFY([id, token]))

    forgotPassword = async data => await http.post(PATHS.FORGOT_PASSWORD, data)

    resetPassword = async data => await http.put(PATHS.RESET_PASSWORD, data)
}

export const authService = new AuthService()

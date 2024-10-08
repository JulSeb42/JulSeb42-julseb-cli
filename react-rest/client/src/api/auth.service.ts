/*=============================================== Auth service ===============================================*/

import { http } from "api"
import { SERVER_PATHS } from "shared"
import type {
    SignupFormData,
    LoginFormData,
    LoggedInFormData,
    ForgotPasswordFormData,
    ResetPasswordFormData,
} from "types"

const { AUTH: PATHS } = SERVER_PATHS

class AuthService {
    signup = async (data: SignupFormData) => await http.post(PATHS.SIGNUP, data)

    login = async (data: LoginFormData) => await http.post(PATHS.LOGIN, data)

    loggedIn = async (data: LoggedInFormData) =>
        await http.get(PATHS.LOGGED_IN, data)

    verify = async (id: string, token: string) =>
        await http.put(PATHS.VERIFY([id, token]))

    forgotPassword = async (data: ForgotPasswordFormData) =>
        await http.post(PATHS.FORGOT_PASSWORD, data)

    resetPassword = async (data: ResetPasswordFormData) =>
        await http.put(PATHS.RESET_PASSWORD, data)
}

export const authService = new AuthService()

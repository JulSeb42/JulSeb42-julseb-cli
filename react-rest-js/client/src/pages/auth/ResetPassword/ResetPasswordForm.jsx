/*=============================================== ResetPasswordForm ===============================================*/

import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {
    Form,
    Input,
    passwordRegex,
    Text,
    Skeleton,
    Flexbox,
} from "@julseb-lib/react"
import { authService, userService } from "api"
import { ErrorMessage } from "components"
import { COMMON_TEXTS } from "shared"
import { PATHS } from "routes"

export const ResetPasswordForm = () => {
    const navigate = useNavigate()
    const { token, id } = useParams()

    const [foundUser, setFoundUser] = useState(undefined)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const findUser = () =>
            userService.allUsers().then(res => {
                const users = res.data
                const getUser = users?.filter(user => user?._id === id)[0]

                if (getUser) setFoundUser(getUser)
                else setFoundUser(null)
            })

        setTimeout(() => {
            findUser()
            setIsLoading(false)
        }, 1000)
    }, [id])

    const [password, setPassword] = useState("")
    const [validation, setValidation] = useState(undefined)
    const [errorMessage, setErrorMessage] = useState(undefined)

    const handlePassword = e => {
        const value = e.target.value

        setPassword(value)

        if (value.length > 0) {
            if (passwordRegex.test(value)) {
                setValidation(true)
            } else {
                setValidation(false)
            }
        } else {
            setValidation(undefined)
        }
    }

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .resetPassword({
                password,
                resetToken: token,
                _id: id,
            })
            .then(() => navigate(PATHS.LOGIN))
            .catch(err => setErrorMessage(err))
    }

    if (isLoading)
        return (
            <Flexbox gap="xxs" flexDirection="column">
                <Text color="primary">New password</Text>
                <Skeleton height={32} borderRadius="s" animation="shine" />
            </Flexbox>
        )

    if (!foundUser) return <Text>No user has been found with this ID!</Text>

    return (
        <>
            <Form onSubmit={handleSubmit} buttonPrimary={{ text: "Send" }}>
                <Input
                    id="password"
                    type="password"
                    label="New password"
                    value={password}
                    onChange={handlePassword}
                    validation={{
                        status: validation,
                        message: COMMON_TEXTS.ERRORS.PASSWORD_NOT_VALID,
                    }}
                />
            </Form>

            <ErrorMessage error={errorMessage} />
        </>
    )
}

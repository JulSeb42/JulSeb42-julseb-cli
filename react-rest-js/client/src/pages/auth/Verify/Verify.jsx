/*=============================================== Verify ===============================================*/

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAuthContext } from "context"
import { authService } from "api"
import {
    VerifySkeleton,
    NotLoggedIn,
    VerificationFailed,
    VerificationSuccess,
} from "pages/auth/Verify/sections"

export const Verify = () => {
    const { user, setUser, isLoggedIn, setToken } = useAuthContext()
    const { token, id } = useParams()

    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState(undefined)

    useEffect(() => {
        if (isLoggedIn !== null && isLoading) {
            if (id && token && isLoggedIn) {
                authService
                    .verify(id, token)
                    .then(res => {
                        setUser(res.data.user)
                        setToken(res.data.authToken)
                        setIsLoading(false)
                    })
                    .catch(err => {
                        console.log(err)
                        setErrorMessage(err)
                        setIsLoading(false)
                    })
            } else if (!id || !token) {
                if (!id) setErrorMessage([...errorMessage, "ID is missing"])
                if (!token)
                    setErrorMessage([...errorMessage, "Token is missing"])
                setIsLoading(false)
            } else if (!isLoggedIn) {
                setErrorMessage("You are not logged in.")
                setIsLoading(false)
            }
        }
    }, [id, isLoggedIn, isLoading, setToken, setUser, token, user])

    if (isLoading) return <VerifySkeleton />

    if (!isLoggedIn) return <NotLoggedIn />

    if (errorMessage) return <VerificationFailed errorMessages={errorMessage} />

    return <VerificationSuccess />
}

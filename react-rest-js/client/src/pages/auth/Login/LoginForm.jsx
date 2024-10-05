/*=============================================== LoginForm ===============================================*/

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Input } from "@julseb-lib/react"
import { useAuthContext } from "context"
import { authService } from "api"
import { ErrorMessage } from "components"

export const LoginForm = () => {
    const navigate = useNavigate()
    const { loginUser } = useAuthContext()

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    })
    const [errorMessage, setErrorMessage] = useState(undefined)

    const handleInputs = e =>
        setInputs({
            ...inputs,
            [e.target.id]: e.target.value,
        })

    const handleSubmit = async e => {
        e.preventDefault()

        await authService
            .login(inputs)
            .then(res => {
                loginUser(res.data.authToken)
                navigate(-1)
            })
            .catch(err => setErrorMessage(err))
    }

    return (
        <>
            <Form onSubmit={handleSubmit} buttonPrimary="Log in">
                <Input
                    id="email"
                    type="email"
                    value={inputs.email}
                    onChange={handleInputs}
                    label="Email"
                    autoFocus
                />

                <Input
                    id="password"
                    type="password"
                    value={inputs.password}
                    onChange={handleInputs}
                    label="Password"
                />
            </Form>

            <ErrorMessage error={errorMessage} />
        </>
    )
}

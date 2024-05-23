import { useState } from "react"
import { useLogIn } from "../hooks/useLogIn"

const LogIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogIn()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

    return (
        <div className="WraplLog">
            <div className="Login">
                <form onSubmit={handleSubmit}>
                    <h3>Log In</h3>

                    <label>Email:</label>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />

                    <label>Password:</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />

                    <button disabled={isLoading} className="custom-button">
                        Log In
                    </button>
                    {error && <div className="error">{error}</div>}
                </form>
            </div>
        </div>
    )
}

export default LogIn
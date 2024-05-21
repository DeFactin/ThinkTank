import { useState } from "react"

const LogIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(email, password)
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
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />

                    <button className="custom-button">
                        Log In
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LogIn
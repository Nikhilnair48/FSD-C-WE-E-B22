import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useLogin } from "./LoginContext";

function Login() {
    const [username, setUsername] = useState("");
    const { setUser } = useLogin();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username: username });
        navigate("/profile");
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Username..."
                value={username}
                onChange={ (e) => setUsername(e.target.value) }
            />
            <input type="password" required />
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login;

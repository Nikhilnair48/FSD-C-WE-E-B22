import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const LoginContext = createContext();

export function LoginProvider({ children }) {
    const[user, setUser] = useState(null);

    return (
        <LoginContext.Provider value={{ user, setUser }}>
            {children}
        </LoginContext.Provider>
    )
}

export function useLogin() {
    return useContext(LoginContext);
}
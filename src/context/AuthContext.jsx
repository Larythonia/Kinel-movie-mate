// // 3 stages of useContext hook
// 1)  Create the context
// 2) Provide the context
// 3) Consume the context

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        // Validate your email and password here
        if(!email || !password) {
            alert("Please enter email and password");
            return;
        }

        const fakeUser = {
            id: 1,
            email: email,
            password: password
        }

        setUser(fakeUser);
        return;
    }

    const logout = () => {
        setUser(null);
    }

    const value = {
        // this is the values we're making globally available to all components that consume this context
        user, login, logout
    }
    
    return <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
}

// Create a custom hook to consume the AuthContext, this is just a convention to make it easier to use the context in our components
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used inside an AuthProvider");
    }
    return context;
}
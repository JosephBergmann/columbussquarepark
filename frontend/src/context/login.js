import React, { createContext, useContext, useState, useEffect } from 'react';

const LoginContext = createContext();

export function LoginProvider({children}) {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <LoginContext.Provider value={{ showLogin, setShowLogin }}>
            {children}
        </LoginContext.Provider>
    );
}

export function useLogin() {
    return useContext(LoginContext);
}

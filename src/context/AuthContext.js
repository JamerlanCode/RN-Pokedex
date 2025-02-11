import React,{useState, createContext, Children} from "react";

export const AuthContext = createContext({
    auth: undefined,
    login: () => {},
    logout: () => {},
});

export function AuthProvider (props) {
    const {children} = props;
    const [auth, setAuth] = useState(undefined)

    const login = (useData) => {
        setAuth(useData);
    };

    const logout = () => {
        setAuth(undefined)
    }
    
    const valueContext = {
        auth,
        login,
        logout,
    }

    return (
        <AuthContext.Provider value={valueContext}>
            {children}
        </AuthContext.Provider>
    )
}
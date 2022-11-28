import React, {createContext, useState} from "react";

export const AuthContext = createContext({})

function AuthProvider(props){
    const [token, setToken] = useState(localStorage.getItem("token"))
console.log(token);
    return(
        <AuthContext.Provider value={{token, setToken}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
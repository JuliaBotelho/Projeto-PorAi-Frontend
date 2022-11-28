import React, {createContext, useState} from "react";

export const AuthContext = createContext({})

function AuthProvider(props){
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [name, setName] = useState(localStorage.getItem("name"))
    const [email, setEmail] = useState(localStorage.getItem("email"))
    const [phoneNumber, setPhoneNumber] = useState(localStorage.getItem("phoneNumber"))
    const [paymentMethod, setPaymentMethod] = useState({ payment: "" });
    const [total, setTotal] = useState(0);
    const [myCart, setMyCart] = useState([]);
console.log(token);
    return(
        <AuthContext.Provider value={{myCart, setMyCart, total, setTotal,paymentMethod, setPaymentMethod,phoneNumber, setPhoneNumber,email, setEmail,token, setToken, name, setName}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
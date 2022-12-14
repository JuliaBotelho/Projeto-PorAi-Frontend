import react from "react";
import axios from "axios";
import styled from "styled-components";
import { AuthContext } from "../contextelements/auth.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { setToken , setName, setEmail, setPhoneNumber} = react.useContext(AuthContext);

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function loginApp(e) {
    e.preventDefault();
  }

  function login() {
    const URL = "https://store-porai.onrender.com/sign-in";

    const promise = axios.post(URL, form);
    promise.then((res) => {
      setToken(res.data.token);
      setName(res.data.name);
      setEmail(res.data.email);
      setPhoneNumber(res.data.phoneNumber);
      console.log(res.data);
localStorage.setItem("token",res.data.token)
localStorage.setItem("name",res.data.name)
localStorage.setItem("email",res.data.email)
localStorage.setItem("phoneNumber",res.data.phoneNumber)
      navigate("/");
    });

    promise.catch((err) => {
      alert(err.response.data.message);
    });
  }


  return (
    <SigninContent>
      <StyleFormSignin>
        <form onSubmit={loginApp}>
          <input
            name="email"
            value={form.email}
            onChange={handleForm}
            type="email"
            placeholder="Digite seu email"
            required
          />
          <input
            name="password"
            value={form.password}
            onChange={handleForm}
            type="password"
            placeholder="Digite sua senha"
            required
          />
          <button onClick={login} type="submit">
            Login
          </button>
        </form>
      </StyleFormSignin>
    </SigninContent>
  );
}

const SigninContent = styled.div`
  margin-top: 100px;
  display:flex;
  justify-content:center;
`

const StyleFormSignin = styled.div`
width: 303px;
height: 147px;
display:flex;
justify-content:center;
margin-left:36px;
flex-direction:column;
align-items:center;
input{
    height: 58px;
    width: 326px;
    border-radius: 5px;
    border:none;
    margin-bottom:13px;
 
  }
button{
    width:326px;
    height: 46px;
    background-color:#e5becb;
    border-radius: 4.64px;
    border:none;
   }
h2{
    font-family: Raleway;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
color:#ffffff;     
}
`

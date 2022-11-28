import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function SignUp() {
  const [email, setEmail] = useState("");
  const [validateEmail, setValidateEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [validatePass, setValidatePass] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();

  function registerUser(e) {
    e.preventDefault()
    const URL = "http://localhost:5000/sign-up";

    const body = {
      name,
      email,
      validateEmail,
      password,
      validatePass,
      phoneNumber
    };
    const promise = axios.post(URL, body);

    promise.then(() => {
      navigate("/entrar");
    });

    promise.catch((err) => {
      console.log(err.response.data.message);
    });
  }


  return (
    <SignupContent>
      <StyleFormSignUp>
        <form onSubmit={registerUser}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Nome"
            required
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="E-mail"
            required
          />
          <input
            value={validateEmail}
            onChange={(e) => setValidateEmail(e.target.value)}
            type="email"
            placeholder="Confirme o E-mail"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Senha"
            required
          />
          <input
            value={validatePass}
            onChange={(e) => setValidatePass(e.target.value)}
            type="password"
            placeholder="Confirme a senha"
            required
          />

          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="tel"
            placeholder="Digite o seu telefone"
            required
          />
          <button type="submit">
            <h2>Cadastrar</h2>
          </button>
        </form>
      </StyleFormSignUp>
    </SignupContent >
  );

}

const SignupContent = styled.div`
    margin-top: 40px;
    margin-bottom: 50px;
    display:flex;
    justify-content:center;
  `

const StyleFormSignUp = styled.div`
width: 303px;
/* height: 147px; */
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
    background-color:#BA55D3;
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
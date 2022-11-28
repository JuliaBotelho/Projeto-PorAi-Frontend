import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { AuthContext } from "../contextelements/auth.js";
import react from "react";

export default function CheckoutPage() {
  const { paymentMethod } = react.useContext(AuthContext);
  const { name, email, phoneNumber, token, total ,myCart, setMyCart} = react.useContext(AuthContext);
  const config = { headers: { Authorization: `Bearer ${token}` } };
 

  return (
    <CheckoutPageContent>
      <h1>Aqui estão os dados de sua compra!</h1>
      <h1>Desejamos uma ótima viagem!</h1>
      <ReceiptContent>
        <h2>Dados do Usuário:</h2>
        <h3>Nome: {name}</h3>
        <h4>Email: {email}</h4>
        <h4>Telefone: {phoneNumber}</h4>
        <h4>Forma de Pagamento: {paymentMethod.payment}</h4>
      </ReceiptContent>
      <CardPageContentc>
        <ul>
          {myCart.map((p) => (
            <li key={p._id}>
              <h1> Preço p/ pessoa : {p.price}</h1>
              <h1>Origem : {p.from}</h1>
              <h1>Destino : {p.to}</h1>
              <h1>Quantidade : {p.quantity}</h1>
            </li>
          ))}
        </ul>
      <h1>Total :{total}</h1>
      </CardPageContentc>
    </CheckoutPageContent>
  );
}

const CheckoutPageContent = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 28px;
    color: #77b5fe;
    margin-top: 5px;
    margin-bottom: 25px;
  }
`;

const ReceiptContent = styled.div`
  width: 600px;
  padding: 15px;
  border-radius: 15px;
  background-color: #ffffff;
  border: 1px solid #2e1c00;
  h2 {
    font-size: 20px;
    color: #384357;
    margin-top: 20px;
    margin-bottom: 9px;
  }
  h3 {
    font-size: 15px;
    color: #384357;
    margin-bottom: 8px;
  }
  h4 {
    font-size: 14px;
    color: #72384b;
    margin-bottom: 8px;
  }
`;
const CardPageContentc = styled.div`
  margin-top: 90px;
  background-color: #FFFFFF;
  margin-bottom: 15px;
  width: 80%;


  h5 {
    font-size: 28px;
    color: #77b5fe;
    margin-top: 40px;
    margin-bottom: 20px;
    margin-left: 20px;
  }
  h6 {
    font-size: 18px;
    color: #757577;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: 20px;
  }
`;

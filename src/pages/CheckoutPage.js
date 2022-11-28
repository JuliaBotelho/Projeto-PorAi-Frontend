import styled from "styled-components";

export default function CheckoutPage(){
    return(
        <CheckoutPageContent>
            <h1>Aqui estão os dados de sua compra!</h1>
            <h1>Desejamos uma ótima viagem!</h1>
            <ReceiptContent>
                <h2>Dados do Usuário:</h2>
                <h3>Nome: shsuhua hsauhaushua suhauhs</h3>
                <h4>Email: djhdsjksakkd</h4>
                <h4>Telefone: bdhsahdhd</h4>
            </ReceiptContent>
        </CheckoutPageContent>
    )
}

const CheckoutPageContent = styled.div`
    margin-top:30px;
    display:flex;
    flex-direction:column;
    align-items:center;
    h1{
        font-size: 28px;
        color: #77b5fe;
        margin-top: 5px;
        margin-bottom: 25px;
    }
`

const ReceiptContent = styled.div`
    width:600px;
    padding:15px;
    border-radius: 15px;
    background-color:#ffffff;
    border: 1px solid #2e1c00;
    h2{
        font-size:20px;
        color: #384357;
        margin-top: 20px;
        margin-bottom: 9px;
    }
    h3{
        font-size:15px;
        color: #384357;
        margin-bottom: 8px;
    }
    h4{
        font-size: 14px;
        color:#72384b;
        margin-bottom: 8px;
    }
`

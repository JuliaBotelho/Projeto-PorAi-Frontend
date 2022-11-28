import styled from "styled-components"
import CartCard from "../components/CartCard"

export default function CartPage(){
    return(
        <CardPageContent>
            <h5>Confira seu carrinho antes de fechar o pedido!</h5>
            <CartCard/>
            <button>Fechar Pedido</button>
        </CardPageContent>
    )
}

const CardPageContent = styled.div`
    margin-top:90px;
    h5{
        font-size: 28px;
        color: #77b5fe;
        margin-top: 55px;
        margin-bottom: 45px;
        margin-left: 20px;
    }
    button{
        margin: 20px 40px;
        width: 390px;
        color: #ffffff;
        height: 60px;
        font-size: 21px;
        background-color:#49628f;
        border: 2px solid #49628f;
        border-radius: 3px;
        align-self: center;
    }
`
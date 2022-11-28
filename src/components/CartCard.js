import styled from "styled-components"

export default function CartCard(){
    return(
        <>
        <CartCarddDiv>
            <img src = {"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/59/12/0c/caption.jpg?w=1200&h=-1&s=1"}/>
            <CardText>
                <h1>njnsajnkj → ndjhjanj</h1>
                <h3>Quantidade: </h3>
                <h4>Valor: R$4000,00</h4>
                <ion-icon name="trash"></ion-icon>
            </CardText>
        </CartCarddDiv>
        </>
    )
}

const CartCarddDiv = styled.div`
    display:flex;
    height:180px;
    margin-left:20px;
    max-width: 650px;
    border-radius: 5px;
    border: 1px solid #8899b8;
    justify-content: flex-start;
    align-items: center;
    img{
        width: 210px;
        height: 140px;
        border-radius: 3px;
        margin-left: 20px;
    }
`

const CardText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 15px;
    h1{
        font-size:19px;
        color: #384357;
        margin-top: 20px;
        margin-bottom: 9px;
    }
    h2{
        font-size:14px;
        color: #384357;
        margin-bottom: 8px;
    }
    h3{
        font-size: 14px;
        color:#72384b;
        margin-bottom: 8px;
    }
    h4{
        font-size: 14px;
        color:#72384b;
        margin-bottom: 11px;
    }
    ion-icon{
        font-size: 20px;
        color:#72384b;
        margin-bottom:13px;
    }

`
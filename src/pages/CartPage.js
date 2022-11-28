import styled from "styled-components"
import CartCard from "../components/CartCard"
import { useState, useContext, useEffect } from "react"
import axios from "axios"

import { AuthContext } from "../contextelements/auth"

export default function CartPage() {
    const [myCart, setMyCart] = useState([])
    const [myId, setMyId] = useState({})
    const [paymentMethod, setPaymentMethod] = useState({payment:""})
    const [deleteClicked, setDeleteClicked] = useState(false)
    const [total, setTotal] = useState(undefined)

    const { token } = useContext(AuthContext)
    const config = { headers: { "Authorization": `Bearer ${token}` } }

    function handlePayment(e){
        const {name,value} = e.target
        setPaymentMethod({...paymentMethod, [name]:value})
    }

    useEffect(() => {
        axios.get("https://store-porai.onrender.com/shoppingCart", config)
            .then(res => {
                setMyCart(res.data.carts)
                setMyId(res.data.user)
                setTimeout(defineTotal(), 3000)
            })
            .catch(err => {
                console.log(err)
            })
    }, [total])

    if (!myCart) {
        return <CardPageContent><h5>Carregando...</h5></CardPageContent>
    }

    function defineTotal(){
        const numbersSetOne=[]
        const numbersSeTwo=[]
        let sum = 0
        myCart.forEach((p)=>numbersSetOne.push(p.price.replace("R$ ","")))

        numbersSetOne.forEach((value)=>numbersSeTwo.push(Number(value.replace(",00",""))))

        numbersSeTwo.forEach((v)=> sum += v)
        setTotal(sum.toFixed(2))   
    }

    

    return (
        <CardPageContent>
            <h5>Olá {myId.name}! Confira seu carrinho antes de fechar o pedido!</h5>
            <h6>Email: {myId.email}</h6>
            {myCart.map(packCart =>
                    <CartCard packCart={packCart} setDeleteClicked={setDeleteClicked}/>
            )}
            <h6>Total: R${total}</h6>
            <h6>Por Favor selecione o método de pagamento:</h6>
            <PaymentSetting onChange={handlePayment}>
                <input type="radio" value="dinheiro" name="payment"/>Dinheiro
                <input type="radio" value="pix" name="payment"/>Pix
            </PaymentSetting>
            <button onClick={"andreia"}>Fechar Pedido</button>
        </CardPageContent>
    )
}

const CardPageContent = styled.div`
    margin-top:90px;
    h5{
        font-size: 28px;
        color: #77b5fe;
        margin-top: 40px;
        margin-bottom: 20px;
        margin-left: 20px;
    }
    h6{
        font-size: 18px;
        color: #757577;
        margin-top: 30px;
        margin-bottom: 30px;
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

const PaymentSetting = styled.div`
    margin-left: 20px;
    margin-top: 18px;
    margin-bottom: 19px;
`
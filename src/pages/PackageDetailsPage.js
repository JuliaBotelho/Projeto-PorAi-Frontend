import styled from "styled-components";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { AuthContext } from "../contextelements/auth";

export default function PackageDetailsPage() {
    const { idPack } = useParams()
    const navigate = useNavigate()
    const [myPack, setMyPack] = useState(undefined)
    const [formQuantity, setFormQuantity] = useState({ quantity: 0 })

    const {token} = useContext(AuthContext)

    useEffect(() => {
        axios.get("https://store-porai.onrender.com/catalogue")
            .then(res => setMyPack((res.data.filter(p => p._id === idPack))[0]))
            .catch(err => console.log(err))
    }, [])

    if (!myPack) {
        return <PageTitle>Carregando...</PageTitle>
    }

    function handleFormQuantity(e) {
        const { name, value } = e.target
        setFormQuantity({ ...formQuantity, [name]: value })
    }


    function addToCart() {

        const config = {headers: {"Authorization": `Bearer ${token}`}} 

        const body = {
            price: myPack.price,
            from: myPack.from,
            to: myPack.to,
            quantity: formQuantity.quantity
        } 

        axios.post("https://store-porai.onrender.com/shoppingCart", body, config)
                    .then(() => navigate("/carrinho") )
                    .catch((err)=> console.log(err.response.data))
    }

    

    return (
        <>
            <PageTitle>✰ {myPack.from} → {myPack.to} ✰ </PageTitle>
            <PageTitle>{myPack.daysamount} dias!</PageTitle>
            <ImageAndDetails>
                <img src={myPack.image} />
                <Details>
                    <h2>{myPack.firstday} - {myPack.lastday}</h2>
                    <h5>{myPack.description}</h5>
                    <h4>Estadia: {myPack.stay}</h4>
                    <h3>{myPack.price}</h3>
                    <input
                        name="quantity"
                        type="number"
                        value={formQuantity.quantity}
                        onChange={handleFormQuantity}
                        placeholder="Quantas pessoas estarão viajando?"
                        required
                    />
                    <button onClick={addToCart} >Adicionar ao carrinho 🛒</button>
                </Details>
            </ImageAndDetails>
        </>
    )
}

const PageTitle = styled.h1`
            font-size: 36px;
            color: #be5e7e;
            margin-top: 19px;
            margin-bottom: 20px;
            margin-left: 20px;
            font-family: 'Syne', sans-serif;
            `

const ImageAndDetails = styled.div`
            display:flex;
            padding-left: 20px;
            justify-content: flex-start;
            margin-bottom: 40px;
            img{
                width: 500px;
                border-radius:5px;
                box-shadow: 0px 2px 4px 2px #0000001A;
            }
`
const Details = styled.div`
    width: 490px;
    display: flex;
    flex-direction: column;
    padding-left: 18px;
    h2{
    font-size:18px;
    color: #262e3d;
    margin-bottom: 25px;
    }
    h3{
        font-size:25px;
        color: #607bab;
        margin-bottom: 35px;
    }
    h4{
        font-size: 19px;
        color:#72384b;
        margin-bottom: 20px;
    }
    h5{
        font-size: 16px;
        color:#72384b;
        margin-bottom: 16px;
    }
    input{
        height: 40px;
        width: 150px;
        margin: 8px 0px;
    }
    button{
        width: 390px;
        color: #ab5471;
        height: 60px;
        font-size: 21px;
        background-color:#e5becb;
        border: 2px solid #e5becb;
        border-radius: 3px;
        align-self: center;
    }
`



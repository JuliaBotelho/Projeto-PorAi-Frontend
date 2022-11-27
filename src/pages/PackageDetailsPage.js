import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PackageDetailsPage() {
    const { idPack } = useParams()
    const [myPack, setMyPack] = useState(undefined)

    useEffect(() => {
        axios.get("http://localhost:5000/catalogue")
            .then(res => setMyPack((res.data.filter(p => p._id === idPack))[0]))
            .catch(err => console.log(err))
    }, [])

    if (!myPack){
        return <PageTitle>Carregando...</PageTitle>
    }
    return (
        <>
            <PageTitle>✰ {myPack.from} → {myPack.to} ✰ {myPack.daysamount} dias!</PageTitle>
            <ImageAndDetails>
                <img src={myPack.image} />
                <Details>
                    <h2>{myPack.firstday} - {myPack.lastday}</h2>
                    <h5>{myPack.description}</h5>
                    <h4>Estadia: {myPack.stay}</h4>
                    <h3>{myPack.price}</h3>
                    <button>Adicionar ao carrinho 🛒</button>
                </Details>
            </ImageAndDetails>
        </>
    )
}

const PageTitle = styled.h1`
            font-size: 36px;
            color: #be5e7e;
            margin-top: 80px;
            margin-bottom: 40px;
            margin-left: 20px;
            `

const ImageAndDetails = styled.div`
            display:flex;
            padding-left: 20px;
            justify-content: flex-start;
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
    button{
        width: 390px;
        color: #ab5471;
        min-height: 60px;
        font-size: 21px;
        background-color:#e5becb;
        border: 2px solid #e5becb;
        border-radius: 3px;
        align-self: center;
    }
`



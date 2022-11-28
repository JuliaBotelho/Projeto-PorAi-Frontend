import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PackageCard from "../components/PackageCard";
import axios from "axios";

import react from "react"
export default function MainPage() {
    const [catalogue, setCatalogue] = useState([])
   
    useEffect(() => {
        axios.get("https://store-porai.onrender.com/catalogue")
            .then(res => setCatalogue(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <PageContent>
            <PageTitle>Bem-vindo!</PageTitle>
            <>
                <OriginsConteiners>
                    <h4>Vamos planejar a viagem dos seus sonhos!</h4>
                    <PackageConteiner>
                        {catalogue.map(travel => 
                            <Link to={`/pacote/${travel._id}`} key={travel._id}>
                                <PackageCard travel={travel} />
                            </Link>
                        )}
                    </PackageConteiner>
                </OriginsConteiners>
            </>
        </PageContent>
    )
}

const PageContent = styled.div`
            display: flex;
            flex-direction: column;
            align-items: center;
            `

const PageTitle = styled.h6`
            font-size: 36px;
            color: #be5e7e;
            margin-top: 80px;
            margin-bottom: 40px;
            `
const OriginsConteiners = styled.div`
            width:100%;
            display:flex;
            flex-direction: column;
            align-items:flex-start;
        h4{
            font-size: 28px;
            color: #77b5fe;
            margin-top: 40px;
            margin-bottom: 45px;
            margin-left: 20px;
        }
            `
const PackageConteiner = styled.div`
            width:100%;
            display:flex;
            justify-content: center;
            flex-wrap: wrap;
            align-items:center;
            margin-bottom: 30px;
            box-sizing: border-box;
            `


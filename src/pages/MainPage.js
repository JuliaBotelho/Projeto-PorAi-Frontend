import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PackageCard from "../components/PackageCard";
import axios from "axios";

export default function MainPage() {
    const [catalogue, setCatalogue] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/catalogue")
            .then(res => setCatalogue(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <PageContent>
            <PageTitle>De onde está viajando?</PageTitle>
            <>
                <OriginsConteiners>
                    <h7>Rio de Janeiro - RJ</h7>
                <PackageConteiner>
                        {catalogue.map(travel => travel.from === "Rio de Janeiro - RJ" ? (
                            <Link to={`/pacote/${travel._id}`} key={travel}>
                                <PackageCard travel={travel} />
                            </Link>
                        ) : (
                            <></>
                        ))}
                    </PackageConteiner>
                    <h7>São Paulo - SP</h7>
                    <PackageConteiner>
                        {catalogue.map(travel => travel.from === "São Paulo - SP" ? (
                            <Link to={`/pacote/${travel._id}`} key={travel}>
                                <PackageCard travel={travel} />
                            </Link>
                        ) : (
                            <></>
                        ))}
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
            h7{
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
            justify-content: flex-start;
            align-items:center;
            margin-bottom: 30px;
            box-sizing: border-box;
            `


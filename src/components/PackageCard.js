import styled from "styled-components";

export default function PackageCard({travel}){
    return (
        <PackageDiv>
            <h1>{travel.from} → {travel.to}</h1>
            <h1>{travel.daysamount} dias</h1>
            <img src={travel.image}/>
            <h2>{travel.firstday} - {travel.lastday}</h2>
            <h2>Estadia: {travel.stay}</h2>
            <h2>{travel.price}</h2>
        </PackageDiv>
    )
}

const PackageDiv = styled.div`
    display: flex;
    width: 400px;
    height: 320px;
    padding: 10px;
    flex-direction:column;
    align-items: center;
    border-radius:3px;
    background-color:#fddee7;
    margin : 8px 15px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    box-sizing: border-box;
    h1{
        font-size:15px;
        color: #384357;
        margin-top: 5px;
        line-height: 22px;
    }
    h2{
        font-size:15px;
        color: #262e3d;
        margin-bottom: 9px;
    }
    img{
        width: 220px;
        height: 150px;
        border-radius:3px;
        margin-top:15px;
        margin-bottom: 10px;
    }
`

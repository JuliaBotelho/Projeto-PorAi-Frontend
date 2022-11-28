import styled from "styled-components";

export default function PackageCard({travel}){
    return (
        <PackageDiv>
            <h1>{travel.from} → {travel.to}</h1>
            <h1>{travel.daysamount} dias</h1>
            <img src={travel.image}/>
            <h2>{travel.firstday} - {travel.lastday}</h2>
            <h4>Estadia: {travel.stay}</h4>
            <h3>{travel.price}</h3>
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
    h3{
        font-size:17px;
        color: #be5e7e;
        margin-bottom: 8px;
    }
    h4{
        font-size: 14px;
        color:#72384b;
        margin-bottom: 8px;
    }
    img{
        width: 220px;
        height: 150px;
        border-radius:3px;
        margin-top:15px;
        margin-bottom: 10px;
    }
`
/* const TextPackageDiv = styled.div`` */

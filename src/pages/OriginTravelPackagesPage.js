import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import PackageCard from "../components/PackageCard";

export default function OriginTravelPackagesPage() {

  const { origem } = useParams();

  const [origin, setOrigin] = useState([]);
  const [title, setTitle] = useState("")

  useEffect(() => {
    axios
      .get(`https://store-porai.onrender.com/catalogue?from=${origem}`)

      .then((res) => {
        console.log(res.data);
        setOrigin(res.data);
        setTitle(res.data[0].from)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [origem]);

  if (!origin) {
    return <StateFrom>Carregando...</StateFrom>
  }

  return (
    <>
      <StateFrom>Viagens partindo de {title}</StateFrom>
      <StylePack>
        {origin.map((opt) => (
          <Link to={`/pacote/${opt._id}`} key={opt._id}>
            <PackageCard travel={opt} />
          </Link>
        ))}
      </StylePack>
    </>
  );
}
const StylePack = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
`;

const StateFrom = styled.h1`
    font-size: 28px;
    color: #77b5fe;
    margin-top: 55px;
    margin-bottom: 45px;
    margin-left: 20px;
`

const StyleHeader = styled.div` 
width: 100%;
height: 50px;
background-color: #FFFFFF;
display:flex;
align-items: space-between;
flex-direction:row;
li{
    width: 290px;
    height:50px;
    background-color:red;
    margin-left:20px;
    decoration:none;
}
`

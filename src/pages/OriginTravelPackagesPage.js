import { useEffect, useState } from "react";
import axios from "axios";
import Package from "./Package";
import styled from "styled-components";
import { useParams } from "react-router-dom";

export default function OriginTravelPackagesPage() {
    
  const {origem} = useParams();

  const [origin, setOrigin] = useState([]);
  
  useEffect(() => {
    axios
      .get(`http://localhost:5000/catalogue?from=${origem}`)

      .then((res) => {
        console.log(res.data);
        setOrigin(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [origem]);

  return (
    <>
  
      <StylePack>
        {origin.map((opt) => (
          <Package
            from={opt.from}
            key={opt.id}
            image={opt.image}
            firstday={opt.firstday}
            lastday={opt.lastday}
            description={opt.description}
            daysamount={opt.daysamount}
            price={opt.price}
            stay={opt.stay}
            to={opt.to}
          />
        ))}
      </StylePack>
    </>
  );
}
const StylePack = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
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

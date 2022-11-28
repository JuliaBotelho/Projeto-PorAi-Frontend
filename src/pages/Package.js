import styled from "styled-components";

export default function Package(props) {
  const {
    from,
    key,
    image,
    firstday,
    lastday,
    description,
    daysamount,
    price,
    stay,
    to,
  } = props;

  return (
    <>
      <Card>
        <img src={image}/>
        <h2>{description}</h2>
        <h1>Vôo direto <u>{from}</u> <u>{to}</u></h1>
        <h1>{price}</h1>
      </Card>
    </>
  );
}
const Card = styled.div`
  width: 265px;
  height: 295px;
  background-color:lightgray;
  border-radius: 5px;
  display:flex;
  align-items:center;
  flex-direction:column;
margin-left:15px;
  margin-bottom:15px;
  img {
    width: 265px;
    height: 150px;
  }
`;

import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Headers({ from, title }) {
  return (
    <>
      <StyleHeader>
        <Link to={`/origem/${from}`}>
            <h1>{title}</h1>
        </Link>
      </StyleHeader>
    </>
  );
}
const StyleHeader = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: #e5becb;
  li {
    width: 250px;
    height: 50px;
    background-color: red;
    margin-left: 20px;
    text-decoration: none;
  }
`;


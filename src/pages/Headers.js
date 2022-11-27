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
  height: 50px;
  background-color: #ffffff;
  display: flex;
  align-items: space-between;
  flex-direction: row;
  li {
    width: 290px;
    height: 50px;
    background-color: red;
    margin-left: 20px;
    decoration: none;
  }
`;

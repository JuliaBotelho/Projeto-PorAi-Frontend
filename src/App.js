import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./contextelements/auth.js"
import GlobalStyle from "./GlobalStyle.js";

import CartPage from "./pages/CartPage.js";
import MainPage from "./pages/MainPage.js";
import PackageDetailsPage from "./pages/PackageDetailsPage.js";
import OriginTravelPackagesPage from "./pages/OriginTravelPackagesPage";
import Signin from "./pages/SigninPage.js";
import SignUp from "./pages/SignUp.js";
import Headers from "./pages/Headers.js";
import styled from "styled-components";

function App() {
  const origins = [{ title: "Viagens saindo de São Paulo", from: "sp" }, { title: "Viagens saindo do Rio de Janeiro", from: "rj" }]
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AuthProvider>
        <StyleHeader>
          {origins.map((o) => <Headers key={o._id} from={o.from} title={o.title} />)}
        </StyleHeader>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/pacote/:idPack" element={<PackageDetailsPage/>}/>
          <Route path="/origem/:origem" element={<OriginTravelPackagesPage />} />
          <Route path="/cadastrar" element={<SignUp />} />
          <Route path="/entrar" element={<Signin />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
const StyleHeader = styled.div` 
width: 100%;
height: 75px;
background-color: #FFFFFF;
display:flex;
align-items: space-between;
flex-direction:row;
box-shadow: 0px 2px 4px 2px #0000001A;
li{
    width: 290px;
    height:50px;
    background-color:red;
    margin-left:20px;
    text-decoration:none;
}
`
export default App;

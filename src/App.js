import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AuthProvider from "./contextelements/auth.js"
import GlobalStyle from "./GlobalStyle.js";
import logo from "./image/logo.png"

import CartPage from "./pages/CartPage.js";
import MainPage from "./pages/MainPage.js";
import PackageDetailsPage from "./pages/PackageDetailsPage.js";
import OriginTravelPackagesPage from "./pages/OriginTravelPackagesPage";
import Signin from "./pages/SigninPage.js";
import SignUp from "./pages/SignUp.js";
import CheckoutPage from "./pages/CheckoutPage.js";
import Headers from "./pages/Headers.js";
import styled from "styled-components";
import { AuthContext } from "./contextelements/auth.js";
import react from 'react';

function App() {
  const { token } = react.useContext(AuthContext);
  console.log(token, "teste");
  const origins = [{_id:1, title: "Viagens saindo de São Paulo", from: "sp" }, {_id:2, title: "Viagens saindo do Rio de Janeiro", from: "rj" }]
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AuthProvider>
        <StyleHeader>
          {origins.map((o) => <Headers key={o._id} from={o.from} title={o.title} />)}
          {!token &&
          <>
          <Link to={"/entrar"}><button>Login</button></Link>
          <Link to={"/cadastrar"}><button>Cadastre-se aqui!</button></Link>
          </>
        }
          <Link to={"/"}><img src={logo}/></Link>
        </StyleHeader>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/pacote/:idPack" element={<PackageDetailsPage/>}/>
          <Route path="/origem/:origem" element={<OriginTravelPackagesPage />} />
          <Route path="/carrinho" element={<CartPage />} />
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
background-color: #e5becb;
display:flex;
align-items: center;
justify-content:space-between;
flex-direction:row;
box-shadow: 0px 2px 4px 2px #0000001A;
li{
    width: 290px;
    height:50px;
    background-color:red;
    margin-left:20px;
    text-decoration:none;
}
img{
  height:70px;
  margin-left: 15px;
}
button{
  height:45px;
  min-width: 150px;
  background-color: #e5becb;
  border: 2px solid #e5becb;
  border-right: 2px solid #616164;
  font-size: 15px;
}
`
export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./contextelements/auth.js"
import GlobalStyle from "./GlobalStyle.js";
import Signin from "./pages/SigninPage.js";
import SignUp from "./pages/SignUp.js";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AuthProvider>
        <Routes>
        <Route path="/cadastrar" element={<SignUp/>} />
        <Route path="/entrar" element={<Signin/>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

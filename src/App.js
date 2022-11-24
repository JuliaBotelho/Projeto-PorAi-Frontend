import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./contextelements/auth.js"
import GlobalStyle from "./GlobalStyle.js";
import SignUp from "./pages/SignUp.js";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AuthProvider>
        <Routes>
        <Route path="/cadastrar" element={<SignUp/>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

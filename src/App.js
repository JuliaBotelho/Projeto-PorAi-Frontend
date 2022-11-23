import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./contextelements/auth.js"
import GlobalStyle from "./GlobalStyle.js";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AuthProvider>
        <Routes>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

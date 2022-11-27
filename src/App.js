import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./contextelements/auth.js"
import GlobalStyle from "./GlobalStyle.js";
import MainPage from "./pages/MainPage.js";
import PackageDetailsPage from "./pages/PackageDetailsPage.js";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/pacote/:idPack" element={<PackageDetailsPage/>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

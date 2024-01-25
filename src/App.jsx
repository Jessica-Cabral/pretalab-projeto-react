import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import ContadorPage from "./pages/ContadorPage";
import { Route, Routes } from "react-router-dom";
import InicioPage from "./pages/InicioPage";
import ErrorPage from "./pages/ErrorPage";
import SobrePage from "./pages/Sobrepages";
import SobreMimPage from "./pages/Sobrepages/SobreMimPages/Index";
import SobrePretaLabPages from "./pages/Sobrepages/SobrePretaLabPages";
import PokemonPage from "./pages/PokemonPage";
import EnderecoPage from "./pages/EnderecoPage";

function App() {
  return (
    <>
      <Header />

      <div style={{ marginBottom: "130px"}}>
        <Routes>  
          <Route path="/" element={<InicioPage />} />
          <Route path="/contador" element={<ContadorPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/endereco" element={<EnderecoPage />} />
          <Route path="/sobre">
            <Route index element={<SobrePage />} />
                <Route path ="mim" element={<SobreMimPage />} />
                <Route path ="sobrePreta-lab" element={<SobrePretaLabPages />} />
            </Route>
          <Route path="/pokemon" element={<PokemonPage/>} />
        </Routes>
      </div>

      <Footer mensagem = "Desenvolvido por Jéssica Caroline Pires Cabral"/>
    </>
  );
}

export default App;
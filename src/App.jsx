import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import ContadorPage from "./pages/ContadorPage";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import SobrePage from "./pages/Sobrepages";
import SobreMimPage from "./pages/Sobrepages/SobreMimPage";
import SobreEstudantesPage from "./pages/Sobrepages/SobreEstudantesPage";
import SobrePretaLabPage from "./pages/Sobrepages/SobrePretaLabPage";
import PokemonPage from "./pages/PokemonPage";
import EnderecoPage from "./pages/EnderecoPage";

function App() {
  return (
    <>
      <Header />

      <div style={{ marginBottom: "130px"}}>
        <Routes>  
        <Route path="/" element={<SobreMimPage />} />
          <Route path="/sobre">
            <Route index element={<SobrePage />} />
                <Route path ="mim" element={<SobreMimPage />} />
                <Route path ="preta-lab" element={<SobrePretaLabPage />} />
                <Route path ="estudantes" element={<SobreEstudantesPage />} />
            </Route>
          <Route path="/contador" element={<ContadorPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/endereco" element={<EnderecoPage />} />
          <Route path="/pokemon" element={<PokemonPage/>} />
        </Routes>
      </div>
      <Footer mensagem = "Desenvolvido por Jéssica Caroline Pires Cabral"/>
    </>
  );
}

export default App;
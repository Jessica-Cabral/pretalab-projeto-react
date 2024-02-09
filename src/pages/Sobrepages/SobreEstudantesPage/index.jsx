import { useEffect, useState } from "react";
import Formulario from "../../../componentes/Formulario";
import ListaDeEstudantes from "../../../componentes/ListaDeEstudantes";
import { estudantes } from "../../../data/estudantes";

const InicioPage = () => {
  const listaStorage = localStorage.getItem("estudantes");
  const [lista, setLista] = useState(JSON.parse(listaStorage) || estudantes);

  // onCreate
  useEffect(() => {
    if (listaStorage) {
      setLista(JSON.parse(listaStorage));
    }
  }, []);

  // onUpdate
  useEffect(() => {
    localStorage.setItem("estudantes", JSON.stringify(lista));
  }, [lista]);

  return (
    <>
      <Formulario setLista={setLista} lista={lista} />
      <ListaDeEstudantes lista={lista} />
    </>
  );
};

export default InicioPage;
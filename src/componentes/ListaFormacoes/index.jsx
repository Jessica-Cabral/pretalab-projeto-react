import Formacao from "../Formacao";

const ListaFormacoes = ({ itens }) => {

console.ListaFormacoes
  return (
    <div className="wrapper">
      {itens.map((formacao, index) => (
        <Formacao
          key={index}
          curso={formacao.curso}
          instituicao={formacao.instituicao}
          linkInstituicao={formacao.linkInstituicao}
          descricao={formacao.descricao}
        />
      ))}
    </div>
  );
};

export default ListaFormacoes;
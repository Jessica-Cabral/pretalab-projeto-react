import "./styles.css"

const Botao = ( {texto, acao}) => {
    return(
        <button className="botaoNovoCard" onClick={acao}> {texto} </button>
    );
};
   
export default Botao
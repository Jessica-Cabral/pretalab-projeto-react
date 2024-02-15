import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Formacao = ({ 
  curso,
  instituicao,
  linkInstituicao,
  descricao,


}) => {
    return (
      <ul>
        <li>
          <Typography variant="h5"> {curso}</Typography>
          <Link target="_blank" href={linkInstituicao} underline="always">{instituicao} </Link>
          <Typography variant="h7"> {descricao}</Typography>
        </li>
      </ul>
    );
};

export default Formacao;




 

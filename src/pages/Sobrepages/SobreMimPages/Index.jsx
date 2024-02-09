import "./styles.css";
import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { formacao } from "../../../data/formacao";
import Link from "@mui/material/Link";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";



const SobreMimPage = () => {
      return (
      <main>

        <section>
          <Stack mt="100px" alignItems="center" >
            <Avatar src="/avatar.png" alt="Foto perfil" sx={{ width: 150, height: 150, border:5, borderColor: "#be89cb",}}/>
            <Typography variant="h4"> Jéssica Cabral Pires Cabral </Typography>
            <Typography variant="h6"> Estudante de Técnico de Desenvolvimento de Sistemas </Typography>
          </Stack>
      
        </section> 
        <section>
          <Stack mt="100px" alignItems="left" >
            <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}> Formação  </Typography>
            <ul>
              <li>
                <Typography variant="h5">Técico em desenvolvimento de sistemas</Typography>
                <Link target="_blank" href="https://www.senac.br/" underline="always">SENAC </Link>
                <p> Desenvolvimento de sistemas web, mobile e desktop. Desenvolvimento de técnicas e ferramentas para a análise de requisitos, desenvolvimento, teste, publicação e manutenção das aplicações.</p>
              </li>
              <li>
                <Typography variant="h5">Formação Básica em Tecnológia da Informação</Typography>
                <Link target="_blank" href="https://www.pretalab.com/" underline="always">PretaLab </Link>
                <p> "Formação com metodologia baseada no desenvolvemento técnico, autogestão e autoconhecimento, através do estudo de conceitos e pratica com exercícios e desenvolvemento de projetos nas áreas de HTML5, CSS3, JavaScript e React; versionamento com Github.</p>
              </li>
              <li>
                <Typography variant="h5">Pós Graduação em Gerência de Projeto</Typography>
                <Link target="_blank" href="https://www.iesb.br/" underline="always">IESB </Link>
                <p> "Desenvolvimento de técnicas e ferramentas de Gerenciamento, Gestão de equipe e Projetos.Desenvolvimento de competências para planejar, controlar, executar e finalizar projeto com base nas áreas de conhecimento preconizadas pelo PMI: escopo, cronograma, custos, qualidade, comunicação, riscos, stakeholders, recursos, aquisições e integração.</p>
              </li>
            </ul>
          </Stack>
        </section>  

        <section>
          <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}> Meus Projetos  </Typography>
          <Card sx={{ maxWidth: 450 }}>
            <CardMedia
              sx={{ height: 220 }}
              image="https://i.imgur.com/NSoayeN.png"
              title="green iguana"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Calculadora
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Linguagem: HTML - CSS - JavaScrip
            </Typography>
          </CardContent>
            <CardActions>
              <Button size="small" href="https://github.com/Jessica-Cabral/calculadoras/tree/botoesOperacoes">GitHub</Button>
              <Button size="small" href="https://calc-jessica.netlify.app/">PUBLICACAO</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 450 }}>
            <CardMedia
              sx={{ height: 220 }}
              image="https://i.imgur.com/dbXMDrb.png"
              title="green iguana"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Página E-commerce - Mulheres Negras
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Linguagem: HTML - CSS
            </Typography>
          </CardContent>
            <CardActions>
              <Button size="small" target="_blank" href="https://github.com/Jessica-Cabral/Modulo_2_html_css.git">GitHub</Button>
              <Button size="small" href="https://jessica-cabral-portfolio.netlify.app/">PUBLICACAO</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 450 }}>
            <CardMedia
              sx={{ height: 220 }}
              image="https://imgur.com/LvdZ55U.png"
              title="green iguana"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Portfólio profissional
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Linguagem: HTML - CSS
            </Typography>
          </CardContent>
            <CardActions>
              <Button size="small" href="https://github.com/Jessica-Cabral/meu-portfolio.git">GitHub</Button>
              <Button size="small" href="https://jessica-cabral-portfolio.netlify.app/">PUBLICACAO</Button>
            </CardActions>
          </Card>
        </section>
      </main>
    );  
  
  };

export default SobreMimPage;    

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import * as React from 'react';

const Projetos = ({
    fotoProjeto,
    nomeProjeto,
    linguagem,
    linkGitHub,
    linkPublicacao,
}) => {
    return (
                
        <Card sx={{ maxWidth:450}} display:flex>
            <CardMedia
                sx={{ heigth:250}}
                img={fotoProjeto}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">{nomeProjeto}</Typography>
                <Typography variant="body2" color="text.secondary">{linguagem}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" target="_blank" href={linkGitHub}>GITHUB</Button>
                <Button size="small" target="_blank" href={linkPublicacao}>PUBLICAÇÃO</Button>
            </CardActions>
    
        </Card>          
    );
};

export default Projetos;

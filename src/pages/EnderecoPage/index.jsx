import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import { useState } from "react";


const EnderecoPage = () => {
    const [cep, steCep] = useState ("")
    const [cidade, steCidade] = useState ("")
    const [estado, steEstado] = useState ("")
    const [latitude, steLatidude] = useState ("")
    const [longitude, steLogitude] = useState ("")
   
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignIteMs="center"
        flexDirection="column"
        marginTop={2}
        gap={3}
      >
        <Stack width="70vw" alignItems="center" gap={1}>
            <Typography variant="h2"> Consulte seu cep</Typography>
            <Link target="_blank" href="https://brasilapi.com.br/" underline="always"> via Brasil API</Link>
        </Stack>

        <Stack width="70vw" alignContent="center" gap={1} direction="row">
            <TextField
                placeholder="50012007" 
                required 
                inputProps={{maxLength: 8}}
                value={cep}
                onChange={(event) => setCep(event.target.value)}
            />
        </Stack>

        <Stack width="70vh">
            <TextField label="Rua"  fullWidth readonly value={rua} />
            <TextField label="Cidade"  fullWidth readonly value={cidade} />
            <TextField label="Estado"  fullWidth readonly value={estado} />
            <TextField label="Latititude"  fullWidth readonly value={latitude} />
            <TextField label="Longitude"  fullWidth readonly value={longitude} />
        </Stack>
      </Box>  
    )
};

export default EnderecoPage;
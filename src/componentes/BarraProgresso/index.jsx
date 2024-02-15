import LinearProgress from "@mui/material/LinearProgress"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography";
import PropTypes from 'prop-types';
import * as React from 'react';


const BarraProgresso = (props) => {
    return (
        <Box sx={{display: "flex", alignItems: "center", mt:40}}>
            <Box sx={{width:"100%", mr:1}}>
                <LinearProgress variant="determinate" sx={{borderColor:"#be89cb"}}{...props} />
            </Box>
            <Box sx={{minWidth:35}}>
                <Typography variant="body2" color="text.secondaty">{`${Math.round(props.value,)}%`}</Typography>
            </Box>
        </Box>
    );
}

BarraProgresso.prototype ={value:PropTypes.number.isRequired}

export default BarraProgresso;
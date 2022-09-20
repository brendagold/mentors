import { Typography } from '@mui/material'
import React from 'react'
import { green } from '@mui/material/colors';

const Footer = () => {
  return (
    <div style={{backgroundColor: `${green[900]}`, marginTop: "30px"}}>
       <Typography  sx={{padding: "20px", textAlign: "center", fontWeight: "bold", color: "white"}}>
        FreeMentors © 2022
    </Typography> 
    </div>
    
  )
}

export default Footer
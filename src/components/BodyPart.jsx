import React from 'react'
import { Box, Stack, Typography, Button ,TextField } from '@mui/material'

import icon from "../assets/icons/gym.png"
function BodyPart({item,setBodypart,bodypart}) {
  return (
   <Stack    type="button" 
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{
        
        borderTop:bodypart===item?"4px solid #ff2625":"",
        
        backgroundColor:"#fff",
    borderBottomLeftRaduis:"20px",
    width:"270px",
    height:"280px",
    cursor:"pointer",
    gap:"47px",
    }}


    onClick={()=>{
        setBodypart(item)
     window.scrollTo({top:"1900",left:"100",behavior:"smooth"})
    }}
    
    > <img  src={icon} alt="dumbel" style={{width:"40px",height:"40px"}}></img>
    <Typography fontSize="24px" fontWeight="bold" color="#3a1212" textTransform="capitalize">{item}</Typography>
    </Stack>
  )
}

export default BodyPart
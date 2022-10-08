import { Box, Stack, Typography, Button } from '@mui/material'

import React from 'react'
 import Hero from  "../assets/images/banner.png"
function HeroBanner() {
  return (
   <Box sx={{ mt:{lg:"212px",xs:"70px"}, ml:{
    sm:"50px"
   }}} position="relative" p="20px">


    <Typography  color="#FF2625" fontWeight="600" fontSize="26px">

        Fitness club
    </Typography>
    <Typography fontWeight={700} sx={{fontSize:{lg:"44px",xs:"40px"}}} mb="23px" mt="30px">


        Sweat Smile <br/> and repeat
    </Typography>
    <Typography fontSize="22px " lineHeight="35px" mb={4}>


    Check the most effective exercise
    </Typography>
    <Button sx={{backgroundColor:"#ff2625", padding:"15px"}} variant="contained" color="error"  href="#exercises">explore excersises</Button>
    <Typography fontWeight={600} color="#ff2625" sx={{opacity:.1,display:{lg:"block" ,xs:"none"}}

}fontSize="200px">Exercise</Typography>
    <img  src={Hero} alt="banner" className='hero-banner-img' />
   </Box>
  )
}

export default HeroBanner
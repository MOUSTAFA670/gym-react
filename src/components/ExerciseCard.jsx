import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Stack, Typography, Button ,TextField } from '@mui/material'
function ExerciseCard({ee}) {

  return (
 <Link className='exercise-card' to={`/exercise/${ee.id}`}>

<img src={ee.gifUrl }   alt={ee.name}  loading="lazy"></img>


<Stack direction="row">

<Button sx={{ml:"21px",color:"#fff",background:"#ffa9a9" ,fontSize:"14px",borderRadius:"20px",textTransform:"capitalize"}}>{ee.bodyPart
}</Button>
<Button sx={{ml:"21px",color:"#fff",background:"#fcc757" ,fontSize:"14px",borderRadius:"20px",textTransform:"capitalize"}}>{ee.target
}</Button>

</Stack>
<Typography  sx={{ml:"21px" ,fontSize:"24px" ,pb:"10px", color:"#000"  ,fontWeight:"bold", mt:"11px", textTransform:"capitalize"}}>{ee.name}</Typography>
 </Link>
  )
}

export default ExerciseCard
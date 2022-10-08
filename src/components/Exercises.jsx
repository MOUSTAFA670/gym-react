import React from 'react'
import  { useState ,useEffect } from 'react'
import { Box, Stack, Typography, Button ,TextField } from '@mui/material'
import Pagination  from "@mui/material/Pagination" 
import {exerciseOption,fetchData} from "../utils/fetchData"
import ExerciseCard from './ExerciseCard'

function Exercises({setExercises,bodypart,exercises, currentPage , setCurrentPage }) {
  const perpage=9

 useEffect(()=>{
const fetchExerciseData=async()=>{
let exerciseData=[]
if(bodypart==="all"){

  exerciseData= await  fetchData('https://exercisedb.p.rapidapi.com/exercises',
     exerciseOption);

}
else{
  exerciseData= await  fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodypart}`,
     exerciseOption);

}
setExercises(exerciseData)
}
fetchExerciseData()
 },[bodypart])
  
const lastindex=currentPage*perpage
const firstindex=lastindex-perpage
const exerciseshow=exercises.slice(firstindex,lastindex)
  const paginate=(e,value)=>{
    setCurrentPage(value)
 
    window.scrollTo({top:"1800",behavior:"smooth"})



  }
  
  return (
<Box id="exercises"

sx={{mt:{lg:"110px"}}}

mt="50px"
p="20px"
>



<Typography  variant='h3' mb="46px" pb="5px" borderBottom="3px solid black" width="150px">Results</Typography>

<Stack direction="row" sx={{gap:{lg:"110px",xs:"50px"}}} flexWrap="Wrap" justifyContent="center">

{exerciseshow.map((ee,index)=>(

<ExerciseCard key={index  }  ee={ee} ></ExerciseCard>



))}



</Stack>
<Stack mt="100px"  alignItems="center">




  {exercises.length>9&&(<Pagination color="standard" shape="rounded"
  defaultPage={1} count={Math.ceil(exercises.length/perpage)} page={currentPage} onChange={paginate}></Pagination>)} 
</Stack>
</Box>
  )
}

export default Exercises
import React from 'react'
import  { useState ,useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { Box, Stack, Typography, Button ,TextField } from '@mui/material'
import {exerciseOption,fetchData} from "../utils/fetchData"
import  Detail from "./Detail"

import  SimilarExercises from "./SimilarExercises"
function ExerciseDetail() {


  const [exerciseDetail,setExerciseDetail]=useState({})
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const {id} =useParams()
 
  useEffect(() => {
    const fetchExerciseData=async()=>{

    
        const exerciseData=  'https://exercisedb.p.rapidapi.com' 
      const exerciseDetailData=await fetchData(`${exerciseData}/exercises/exercise/${id}`,    exerciseOption) 
 

      const targetMuscleExercisesData = await fetchData(`${exerciseData}/exercises/target/${exerciseDetailData.target}`, exerciseOption);
      setTargetMuscleExercises(targetMuscleExercisesData);
      const equimentExercisesData = await fetchData(`${exerciseData}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOption);
      setEquipmentExercises(equimentExercisesData);

     setExerciseDetail(exerciseDetailData)


    }


    fetchExerciseData()
  }, [id])
  
  return (
<Box  sx={{ mt: { lg: '96px', xs: '60px' } }}>
<Detail  exerciseDetail={exerciseDetail}></Detail>

<SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}></SimilarExercises>
</Box>
  )
}

export default ExerciseDetail
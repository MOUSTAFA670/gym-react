import { Box } from '@mui/material'
import React, { useState } from 'react'
import Exercises from './components/Exercises'
import HeroBanner from './components/HeroBanner'
import SearchExercises from './components/SearchExercises'


function Home() {
  const [exercises, setExercises] = useState([])
  const [bodypart, setBodypart] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  return (
   <Box>
<HeroBanner></HeroBanner>

<SearchExercises currentPage={currentPage}  setCurrentPage={setCurrentPage}  setExercises={setExercises} bodypart={bodypart} setBodypart={setBodypart} ></SearchExercises>
<Exercises  exercises={exercises} currentPage={currentPage}  setCurrentPage={setCurrentPage}  setExercises={setExercises} bodypart={bodypart} setBodypart={setBodypart}></Exercises>
   </Box>
  )
}

export default Home
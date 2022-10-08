import { Box } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ExerciseDetail from './components/ExerciseDetail'
import Navbar from './components/Navbar'
import Home from './Home'
import Footer from "./components/Footer"
function App() {
  return (
    <Box width="400px" sx={{width:{xl:"1488px"}}} m="auto">


<Navbar></Navbar>


        <Routes  >


<Route  element={<Home></Home>} path='/' ></Route>
<Route  element={<ExerciseDetail></ExerciseDetail>} path='/exercise/:id' ></Route>
        </Routes>
<Footer></Footer>
    </Box>

  )
}

export default App
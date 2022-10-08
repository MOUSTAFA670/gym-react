import React , { useContext } from 'react'
import { Box, Stack, Typography, Button ,TextField } from '@mui/material'
import  { useState ,useEffect } from 'react'
import {exerciseOption,fetchData} from "../utils/fetchData"
import  ScrollBar from "./ScrollBar"

function SearchExercises({setExercises,bodypart,setBodypart, currentPage , setCurrentPage}) {

    const [search, setsearch] = useState("")
  
    const [bodyParts, setBodyParts] = useState([])
    useEffect(()=>{
const fetchexercisesdata=async ()=>{
    const bodypartData=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    exerciseOption);
 setBodyParts(["all",...bodypartData])
 
}

fetchexercisesdata()

    },[])
    const handleSearch= async() =>{
if(search){
     const exerciseData=await  fetchData('https://exercisedb.p.rapidapi.com/exercises',
     exerciseOption);

   
const searched=exerciseData.filter((item) => item.name.toLowerCase().includes(search)
|| item.target.toLowerCase().includes(search)
|| item.equipment.toLowerCase().includes(search)
|| item.bodyPart.toLowerCase().includes(search)



);
setsearch("");
setExercises(searched);

setCurrentPage(1)
    }
    
    }
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center"  p="20px">


<Typography fontWeight={700} sx={{ fontSize:{lg:"44px",xs:"30px"}}} mb="50px" textAlign="center" >
    Awesome Exercises you <br/>
    should know
</Typography>
<Box position="relative" mb="72px">
    <TextField   height="76px" value={search}  onChange={(e)=>setsearch(e.target.value.toLowerCase())}  placeholder="search exercises" type="text" sx={{
        input:{fontWeight:"700",border:"none",borderRadius:"4px"
    },width:{lg:"800px",xs:"350px"},backgroundColor:"#fff",borderRadius:"40px"}}></TextField>
     <Button onClick={handleSearch} sx={{bgcolor:"#ff2625",color:"#fff",textTransform:"none",width:{lg:"175px",xs:"12px"},fontSize:{lg:"20px",xs:"14px"},
     height:"56px" ,position:"absolute",right:"0"}}  className='search-btn'>Search</Button>

</Box>
<Box  sx={{position:"relative",width:"100%",p:"20px"}}>

<ScrollBar data={bodyParts} bodypart={bodypart}  setBodypart={setBodypart} isbodyparts></ScrollBar>
</Box>
    </Stack>
  )
}

export default SearchExercises
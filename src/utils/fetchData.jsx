
export const exerciseOption= {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
		,
		'X-RapidAPI-Key': "2a0a9061e4msh210003fd5d20b8cp1ee88bjsn4418ebc3967e"
		
	}
}


export const fetchData=async(url,options)=>{
    const response=await fetch(url,options)
const data= await response.json()

return data
}
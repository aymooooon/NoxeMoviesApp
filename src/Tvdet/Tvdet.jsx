import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect,useState } from 'react'


export default function Peopledetails() {




    let {tvid}=useParams()
    
    let[persondet,setpersondet]=useState({})
    
    async function gettvdet(id){
    
    let {data}=await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=748eec17c29a0816fdf24c58f2275736`)
     
    
    setpersondet(data)
    console.log(data)
    }
    
    
    useEffect(() => {
      
        gettvdet(tvid)
    
      console.log(persondet)
    }, [])
    





  return (
    

<>




<div className='container mt-5'>
     <div className='row '>
      
      <div className='col-md-4 mt-5'>
        <div>

        
        
        <img className=' w-100' src={`https://image.tmdb.org/t/p/w500${persondet.poster_path}`} alt="" />
        </div>
        </div>



      <div className='col-md-8'><div>
        
        <p className='mt-4'>tvname:{persondet.name}</p>
        <p className='mt-4'>lang:{persondet.languages}</p>
    
        {/* <div className=' mt-4 text-white btn btn-success'>{} </div> */}

<p className='mt-4'>{persondet.overview}</p>
        
        </div>
         </div>
      </div> 
    
    
    
    </div>








</>














    
  )
}

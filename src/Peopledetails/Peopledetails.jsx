import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect,useState } from 'react'


export default function Peopledetails() {




    let {Personid}=useParams()
    
    let[persondet,setpersondet]=useState({})
    
    async function getpeopledet(id){
    
    let {data}=await axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=748eec17c29a0816fdf24c58f2275736`)
     
    
    setpersondet(data)
    console.log(data)
    }
    
    
    useEffect(() => {
      
        getpeopledet(Personid)
    
      console.log(persondet)
    }, [])
    





  return (
    

<>




<div className='container mt-5'>
     <div className='row'>
      
      <div className='col-md-4'><div>
        
        
        <img className=' w-100' src={`https://image.tmdb.org/t/p/w500${persondet.profile_path}`} alt="" />
        </div>
        </div>
      <div className='col-md-8'><div>
        
        <p className='mt-4'>moviename:{persondet.biography}</p>
        <p className='mt-4'>birthdate:{persondet.birthday}</p>
    
        {/* <div className=' mt-4 text-white btn btn-success'>{} </div> */}

<p className='mt-4'>{persondet.overview}</p>
        
        </div> </div>
      </div> 
    
    
    
    </div>








</>














    
  )
}

import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom' 
import { useEffect } from 'react'
export default function Movisdetails() {

let {movieid}=useParams()
let[moviedet,setmoviedet]=useState({})

async function getmoviedet(id){

let {data}=await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=748eec17c29a0816fdf24c58f2275736`)
 

setmoviedet(data)
console.log(data)
}


useEffect(() => {
  
  getmoviedet(movieid)

  console.log(moviedet)
}, [])


  return (
    <div className='container mt-5'>
     <div className='row'>
      
      <div className='col-md-4'><div>
        
        
        <img className=' w-100' src={`https://image.tmdb.org/t/p/w500${moviedet.poster_path}`} alt="" />
        </div>
        </div>
      <div className='col-md-8'><div>
        
        <p className=''>moviename:{moviedet.title}</p>
        <p className='mt-4'>release date:{moviedet.release_date}</p>
        {/* <div className=' mt-4 text-white btn btn-info'>{moviedet.genres[0].name }</div>
        <div className=' mt-4 text-white btn btn-success'>{moviedet.genres[1].name} </div> */}

<p className='mt-'>{moviedet.overview}</p>
        
        </div> </div>
      </div> 
    
    
    
    </div>
  )
}

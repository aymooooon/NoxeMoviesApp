import React, { useContext, useEffect } from 'react'

import { Link } from 'react-router-dom'
import { MediaContext } from '../Context/Context'





export default function  Home() {

  let{trendingmovis,trendingtv,trendingpeople} =  useContext(MediaContext) 

  let movies=[...trendingmovis]
 let tv= [...trendingtv]
 let people= [...trendingpeople]

  
  



    

  
  return (
    
    <>
    {console.log(trendingmovis)}
<div className='container'>

<div className='row'>  

<div className=' col-md-4'> 
<div>
  <hr />
  <h1>trendingmovis <br /> towatch <br /> now</h1>
</div>
</div>

{movies.splice(0,10).map((movie,index)=>{
  return  <div key={index} className='col-md-2   gy-5 overflow-hidden  ' >
<div className=' position-relative  overflow-hidden pp'>
  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='  w-100' alt="" />

  <div className=' position-absolute top-0   end-0 bg-danger '> {movie.vote_average}</div>


<Link to={`/Movisdetails/${movie.id}`}>
  <div className=' position-absolute layer  top-0 end-0 start-0 bottom-0 text-white overflow-hidden'>
    
    <p>{movie.overview}</p>
     </div>
     </Link>

</div>
<p> {movie.title?movie.title:"movie"}</p>


</div>


})}


<div className=' col-md-4'> 
<div>
  <hr />
  <h1>trendingtv <br /> towatch <br /> now</h1>
</div>
</div>


{tv.splice(0,10).map((tv,index)=>{
  return <div key={index} className='col-md-2   gy-5 overflow-hidden  ' >
<div className=' position-relative  overflow-hidden pp'>
  <img src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} className='  w-100' alt="" />

  <div className=' position-absolute top-0   end-0 bg-danger '> {tv.vote_average}</div>



  <div className=' position-absolute layer  top-0 end-0 start-0 bottom-0 text-white overflow-hidden'>
    
    <p>{tv.overview}</p>
     </div>

</div>
<p> {tv.name ?tv.name:"tv"}</p>


</div>


})}


<div className=' col-md-4'> 
<div>
  <hr />
  <h1>trendingpeople <br /> towatch <br /> now</h1>
</div>
</div>


{people.splice(0,10).map((people,index)=>{
  return <div key={index} className='col-md-2   gy-5 overflow-hidden  ' >
<div className=' position-relative  overflow-hidden pp'>
  <img src={`https://image.tmdb.org/t/p/w500${people.profile_path}`} className='  w-100' alt="" />

  <div className=' position-absolute top-0   end-0 bg-danger '> {people.popularity}</div>



  <div className=' position-absolute layer  top-0 end-0 start-0 bottom-0 text-white overflow-hidden'>
    
    <p>{people.overview}</p>
     </div>

</div>
<p> {people.name ?people.name:"people"}</p>


</div>


})}




</div>

</div>
    </>
  
  )
  }
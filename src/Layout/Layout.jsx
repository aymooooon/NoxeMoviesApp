import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from  "./../Navbar/Navbar";
import { MediaContext } from '../Context/Context';
import { Link } from 'react-router-dom';





export default function Layout(props) {

  let {searchMovie}=useContext(MediaContext);
  
  return (
 
<>
<Navbar   isLogin={props.isLogin} setisLogin={props.setisLogin} tokendata={props.tokendata} />
{console.log(searchMovie.length)}
<div className="container mtest">     

{props.isLogin===true&&searchMovie.length!==0?
 <div className="row">{searchMovie.map((movie,index)=>{
   return <div className="col-lg-2">
     <div className="position-relative"> 
     <Link to={`/movieDetails/${movie.id}`}>
      <img className='w-100' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" /></Link>
      <div className='  position-absolute layer  top-0 end-0 start-0 bottom-0 text-white overflow-hidden'>
        
        <p>{movie.overview}</p>
         </div>
   
       <p>{movie.title}</p>
       <div className='position-absolute top-0 end-0 p-2 bg-info'>{movie.vote_average!==0?movie.vote_average:""}</div>

     </div>
   </div>
  
 })}
</div>

:<Outlet/>} 
 
</div>   








</>


  
    
  )
}

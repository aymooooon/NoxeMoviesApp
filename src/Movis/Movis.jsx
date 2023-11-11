import React from 'react'
import axios from 'axios'
import {  useState, useEffect} from 'react'
import { useContext } from 'react'
import { MediaContext } from '../Context/Context'

import { Link } from 'react-router-dom'

export default function Movis() {
  let{trendingmovis} =  useContext(MediaContext)  
  let [movis,setmovis]=useState([])

  let [pagenum,setpagenum]=useState(1)


  async function  moviesall(mediatype,setfun,pagenum){
  
    let {data}= await axios.get(`https://api.themoviedb.org/3/trending/${mediatype}/day?api_key=748eec17c29a0816fdf24c58f2275736&page=${pagenum}`)
    console.log(data.results)
    setfun(data.results)
    console.log(movis)
    
      
    }

    
    
    useEffect(() => {
      moviesall("movie",setmovis,pagenum)
      console.log(trendingmovis);

      
      // console.log(trendingmovis)
          }, [])

  return (
    <>
  <div className="container">

<div className="row">


{movis.map((movie,index)=>{
  return <div key={index} className='col-md-2   gy-5 overflow-hidden  ' >
<div className=' position-relative  overflow-hidden pp'>

  <Link to={`/Movisdetails/${movie.id}`}> <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='  w-100' alt="" /></Link>
  

  <div className=' position-absolute top-0   end-0 bg-danger '> {movie.vote_average}</div>



 <Link to={`/Movisdetails/${movie.id}`}> 
 <div className='  position-absolute layer  top-0 end-0 start-0 bottom-0 text-white overflow-hidden'>
    
    <p>{movie.overview}</p>
     </div>
     
     </Link>

</div>
<p> {movie.title?movie.title:"movie"}</p>


</div>


})}





</div>

  </div>
      <div className='d-flex  justify-content-center '> 
  <nav aria-label="..." className='  '> 
  <ul className="pagination">
  <li className="page-item">
      <Link className="page-link" onClick={()=>{


setpagenum(pagenum-1)
moviesall("movie",setmovis,pagenum)



      }} >previous</Link>
    </li>
    
    <li className="page-item"><Link className="page-link"  onClick={()=>{
  moviesall("movie",setmovis,1)
      setpagenum(1)

 
    }}>1</Link></li>

<li className="page-item"><Link className="page-link"  onClick={()=>{
  moviesall("movie",setmovis,2)
      setpagenum(2)


    }} >2</Link></li>


    <li className="page-item"><Link className="page-link"  onClick={()=>{
  moviesall("movie",setmovis,3)

      setpagenum(3)

    }} >3</Link></li>




<li className="page-item"><Link className="page-link"  onClick={()=>{
  moviesall("movie",setmovis,4)

      setpagenum(4)

    }} >4</Link></li>

    <li className="page-item">
      <Link className="page-link" onClick={()=>{


setpagenum(pagenum+1)
moviesall("movie",setmovis,pagenum)



      }} >Next</Link>
    </li>
    
  </ul>
</nav>
</div>



    </>
  )
}

import React from 'react'

import axios from 'axios'

import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function People() {

  let [people,setpeople]=useState([])
  let [pagenum,setpagenum]=useState(1)


  // let [pnum,setpnum]=useState([])
  
 


  async function  peopleall(mediatype,setfun,pagenum){
    
console.log("fun"+pagenum)  

let x=pagenum

    let {data}= await axios.get(`https://api.themoviedb.org/3/trending/${mediatype}/day?api_key=748eec17c29a0816fdf24c58f2275736&page=${x}`)
    
    console.log(data.results)
    setfun(data.results)

    
      
    }
    useEffect(() => {
peopleall("tv",setpeople,1)

console.log("pnum"+pagenum)
          }, [])




  return (
    <>  <div className="container">
{console.log(pagenum)}
    <div className="row">
    
    
    {people.map((person,index)=>{
      return  <div key={index} className='col-md-2   gy-5 overflow-hidden  ' >
    <div className=' position-relative  overflow-hidden pp'>
    
      <Link to={`/Peopldetails/${person.id}`}> <img src={`https://image.tmdb.org/t/p/w500${person.poster_path}`} className='  w-100' alt="" /></Link>
      
    
      <div className=' position-absolute top-0   end-0 bg-danger '> {Math.floor(person.popularity)}</div>
    
    
    
     <Link className=' text-decoration-none' to={`/Tvdet/${person.id}`}> 
     <div className='  position-absolute layer  top-0 end-0 start-0 bottom-0 text-white overflow-hidden'>
        
        <p>{person.overview}</p>
         </div>
    
         </Link>
         
    </div>
    <p> {person.name?person.name:"actor"}</p>
    
    
    </div>
    

    
    })}



    
    
    
    
    </div>
    
      </div>
      
      <div className=' d-flex justify-content-center'>
      <nav aria-label="..." className=' '> 
  <ul className="pagination">
  <li className="page-item">
      <Link className="page-link" onClick={()=>{


setpagenum(pagenum-1)
peopleall("tv",setpeople,pagenum)



      }} >previous</Link>
    </li>
    
    <li className="page-item"><Link className="page-link"  onClick={()=>{
      peopleall("tv",setpeople,1)
      setpagenum(1)

 
    }}>1</Link></li>

<li className="page-item"><Link className="page-link"  onClick={()=>{
      peopleall("tv",setpeople,2)
      setpagenum(2)


    }} >2</Link></li>


    <li className="page-item"><Link className="page-link"  onClick={()=>{
      peopleall("tv",setpeople,3)

      setpagenum(3)

    }} >3</Link></li>




<li className="page-item"><Link className="page-link"  onClick={()=>{
      peopleall("tv",setpeople,4)

      setpagenum(4)

    }} >4</Link></li>

    <li className="page-item">
      <Link className="page-link" onClick={()=>{


setpagenum(pagenum+1)
peopleall("tv",setpeople,pagenum)



      }} >Next</Link>
    </li>
    
  </ul>
</nav>
</div>
      </>
  )
}

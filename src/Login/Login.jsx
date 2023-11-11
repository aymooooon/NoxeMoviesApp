import React from 'react'
import { useState } from 'react'
import Joi from 'joi'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login(props) {
  let navigateto=useNavigate()
  const[validateerr,setvalidateerr]=useState([])
  const[apimsg,setapimsg]=useState("")


  const [userdata,setuserdata]=useState({

    email:"",
    password:"",
    
    
    
    
    })
  
  let myUser={...userdata}

  function validation(){
    const rules=Joi.object({
   
   
    
    
     email:Joi.string().email({minDomainSegments:2, tlds:{allow:["com"]}}).required(),
     password :Joi.string().required(),
     
     
   
    }
    
    
   
    ) 
   
   
   let validateres= rules.validate(userdata,{abortEarly:false})
   console.log(validateres)
   if(validateres.error!==undefined){
   
   
     setvalidateerr(validateres.error.details)
     return false;
   
   
   
     
   }
   else{
     setvalidateerr([])
     return true ;
   
   
   
   
   }
   
   }
 

  
   
   

  async function  Login(){
    if(validation()){
    let {data}= await axios.post("https://movies-api.routemisr.com/signin",userdata)
    console.log(data)
    
    if(data.errors){
    setapimsg(data.errors.message)
    
    }else{
    setapimsg(data.message)
    if (data.message==="success"){

localStorage.setItem("token",data.token)
props.setisLogin(true)

      navigateto("/Home")
    
    }
    
      
    }
    
    
    }
    }

    function showalert(inputname){
   
      console.log(validateerr)
       let x =validateerr.filter((error)=>{
        return error.message.includes(inputname)
       
       }) 
      
      if(x.length > 0&&x!==null && x!==undefined){
      
      console.log(x[0].message)
      
       return <p>{x[0].message}</p>
      }
      else { return "  "}
      
      
      }

  return (
    <>

  
  <div   className=' mt'>
<form action="" className='  w-50 m-auto shadow-lg mt-5' onSubmit={(e)=>{
e.preventDefault()
// validation()
Login()



    }}>





<label htmlFor="email">email</label>
<input type="text" id ="email"  className=' form-control' 

onChange={(e=>{

  myUser.email=e.target.value
  setuserdata(myUser)
  
  
  
  })}
/>    
{showalert("email")} 

    <label htmlFor="password">password</label>
<input type="text" id ="password"  className='form-control' 


onChange={(e=>{

  myUser.password=e.target.value
  setuserdata(myUser)
  
  
  
  })}

/>    
{showalert("password")} 
<button className='btn btn-danger' > login </button>

    </form>
    </div>
    <p className=' bg-danger'>{apimsg}</p>
    
  

       
  
  
  
     
     
     </>
  )
}

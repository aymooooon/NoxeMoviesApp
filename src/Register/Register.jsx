import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Joi, { date } from 'joi'
import { useNavigate } from 'react-router-dom'
export default function Register() {


const [userdata,setuserdata]=useState({

first_name:"",
last_name:"",
email:"",
password:"",
age:""



})
const[validateerr,setvalidateerr]=useState([])
const[apimsg,setapimsg]=useState("")

let myUser={...userdata}
let navigateto=useNavigate()

useEffect(() => {
  
  console.log(userdata)
console.log (validateerr)

}, [userdata])

async function  registerition(){
if(validation()){
let {data}= await axios.post("https://movies-api.routemisr.com/signup",userdata)
console.log(data)

if(data.errors){
setapimsg(data.errors.email.message)

}else{
setapimsg(data.message)
if (data.message=="success"){
  navigateto("/Login")

}

  
}


}
}

function validation(){
 const rules=Joi.object({


  first_name:Joi.string().required().min(3).max(15),
  last_name:Joi.string().required().min(3).max(15),
  email:Joi.string().email({minDomainSegments:2, tlds:{allow:["com"]}}).required(),
  password :Joi.string().required(),
  age:Joi.number().min(15).max(100)
  

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


function showalert(inputname){
   
console.log(validateerr)
 let x =validateerr.filter((error)=>{
  return error.message.includes(inputname)
 
 }) 

if(x.length > 0&&x!==null && x!==undefined){

console.log(x[0].message)

 return <p>{x[0].message}</p>
}
else { return ""
}


}



  return (
    <>


<div className=' mt'>
    <form action="" className=' w-50 m-auto  mt-5 shadow-lg' onSubmit={(e)=>{
e.preventDefault()
// validation()
 registerition()



    }}>

      <label htmlFor="firstname"> firstname</label>
<input type="text" id ="firstname"   className=' form-control' onChange={(e=>{

myUser.first_name=e.target.value
setuserdata(myUser)



})} />

 {showalert("first_name")} 

<label htmlFor="last-name">lastname</label>
<input type="text" id='lastname'  className=' form-control' onChange={(e=>{

myUser.last_name=e.target.value
setuserdata(myUser)



})} />
 {showalert("last_name")} 

<label htmlFor="password">email</label>
<input type="text" id ="password"  className=' form-control' 

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

  <label htmlFor="age">age</label>
<input type="text" id ="age"  className=' form-control'  

onChange={(e=>{

  myUser.age=e.target.value
  setuserdata(myUser)
  
  
  
  })}
/>
<button className='btn btn-danger' > submit  </button>



{showalert("age")} 


    </form>
    <p className=' bg-danger'>{apimsg}</p>
    </div>
    </>
  )
}

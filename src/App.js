





import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import Layout from "./Layout/Layout";
import Tvdet from "./Tvdet/Tvdet";
import Movis from './Movis/Movis';
import Login from './Login/Login';
import People from './People/People';
import Register from './Register/Register'
import Home from './Home/Home';
import Tvshow from './Tvshow/Tvshow';
import jwtDecode from 'jwt-decode';
import Movisdetails from './Movisdetails/Movisdetails';

import { useState } from 'react';
import Protectedroute from './Protectedroute/Protectedroute';
import Peopledetails from './Peopledetails/Peopledetails';

import Search from './Search/Search';



  


function App() {
  

  let [isLogin,setisLogin]=useState(null)
let [tokendata,setTokendata]=useState("")


useEffect(() => {
   
  if(localStorage.getItem("token") ){
 
 let token=localStorage.getItem("token") 
 let userdata=jwtDecode(token) 
 setTokendata(userdata)
 console.log(userdata)
 setisLogin(true)

 
  }
 
 
   }, [isLogin])
   

const routs=createBrowserRouter([
  {path: '/', element:<Layout   isLogin={isLogin} setisLogin={setisLogin}  tokendata={tokendata} />,children:[
   
  {path:'Movis',element: <Protectedroute><Movis/> </Protectedroute> },
  {path:'Home', element: <Protectedroute> <Home /></Protectedroute>  },
  {index:true,element:<Register/> },  
  {path:'People',element:<Protectedroute><People/></Protectedroute> },
  

  {path:'Login',element:<Login  setisLogin={setisLogin} />},

  {path:'Movisdetails/:movieid',element:<Movisdetails/>},
  {path:'Peopldetails/:Personid',element:<Peopledetails/>},
  {path:'Search',element:<Search/>},

  {path:'Tvdet/:tvid',element:<Tvdet/>},


  {path:'Tvshow',element:<Tvshow/>  },   
 
  {path:'*',element:<h1>rr</h1>},


  
  
  ]}
  
  
  ]
  
  
  )
  useEffect(() => {
   
 if(localStorage.getItem("token") ){

let token=localStorage.getItem("token") 

setTokendata(token)

 }


  }, [])
  

  
  return (
    



<RouterProvider  router={routs} />








  
  )
  }

export default App;
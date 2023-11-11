import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MediaContext } from '../Context/Context';



export default function Navbar(props) {


let navigateTo=useNavigate()

function logout(){
localStorage.removeItem("token")
props.setisLogin(false)

navigateTo("/Login")
}

let {getSearch}=useContext(MediaContext)






console.log(props.tokendata.first_name  )

  return (

<>
<nav className="navbar navbar-expand-sm navbar-dark  fixed-top bg-info  bg-opacity-25">
    <div className="container">
    <NavLink className={   ({ isActive, isPending }) =>
                      isActive? "active bg-danger  nav-link": "nav-link"
                     
                    }   >Noxe</NavLink>





    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
      aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>


    <div className="collapse navbar-collapse" id="collapsibleNavId">
      <ul className="navbar-nav me-auto mt-2 mt-lg-0">
   


{!props.isLogin ?<>
      <li className="nav-item">
          <NavLink className={   ({ isActive, isPending }) =>
                      isActive? "active bg-danger  nav-link": "nav-link"
                     
                    }  to="Login">login</NavLink>
        </li>

        
        <li className="nav-item">
          <NavLink className={   ({ isActive, isPending }) =>
                      isActive? "active bg-danger  nav-link": "nav-link"
                     
                    }  to="">Registr</NavLink>
        </li>
        </>:""  }
    

     
  {props.isLogin ? <>
  
  <li className="nav-item">
          <NavLink className={   ({ isActive, isPending }) =>
                      isActive? "active bg-danger  nav-link": "nav-link"
                     
                    }  to="Home">home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className={   ({ isActive, isPending }) =>
                      isActive? "active bg-danger  nav-link": "nav-link"
                     
                    }  to="People">people</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={   ({ isActive, isPending }) =>
                      isActive? "active bg-danger  nav-link": "nav-link"
                     
                    }  to="Tvshow">tv</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={   ({ isActive, isPending }) =>
                      isActive? "active bg-danger  nav-link": "nav-link"
                     
                    }  to="Movis">movis</NavLink>
        </li>
        { <li className='nav-item me-2'>
              <input onChange={(e)=>{
                getSearch(e.target.value)
              }} className='form form-control ' type="text" name="" id="" />

            </li> }
        </>:""  } 
  
      </ul>

      <ul className='ms-auto navbar-nav mt-2'>

      <li className="nav-item">
          <NavLink className=" nav-link" > { props.isLogin?  props.tokendata.first_name:""}</NavLink>
        </li>

        
      </ul>
  
    </div>

      {/* <input className=" " type="search" placeholder="Search" id='serchin' aria-label="Search" onKeyUp={search}></input > */}
{/* <input type="text"  id=''/> */}

{props.isLogin ? <button className="btn btn-outline-success my-2 my-sm-0"onClick={logout} type="submit">logout</button>:""}
  </div>
</nav>

</>
  )
}

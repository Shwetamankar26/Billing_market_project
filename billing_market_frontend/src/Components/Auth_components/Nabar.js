import React from 'react'
import { NavLink } from 'react-router-dom'
 

function Nabar() {
  return (
    <>

     
   
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
  <div className="container-fluid">
  
    <NavLink className="navbar-toggler "  to="#"><b>Admin Page...</b></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link active" aria-current="page" to="/login"><h1><b style={{color:'white'}}> <u>Admin Login </u></b></h1></NavLink>&nbsp;
        <NavLink className="nav-link" to="/auth"><h1><b style={{color:'white'}} ><u> AddUser </u> </b  ></h1></NavLink>&nbsp;
        <NavLink className="nav-link" to="/login2"><h1><b style={{color:'white'}}><u>Login2 </u></b></h1></NavLink>&nbsp;
       
      </div>
    </div>
    
  </div>
</nav>

    </>
  )
}

export default Nabar
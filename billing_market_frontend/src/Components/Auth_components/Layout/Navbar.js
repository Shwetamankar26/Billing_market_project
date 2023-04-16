import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


function Navbar() {
  const[isAuth,setIsAuth]=useState(false);
  useEffect(()=>{
    if (localStorage.getItem('access_token') !== null){
      setIsAuth(true);
    }
  },[isAuth]);
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
      {/* <NavLink className="nav-link active" aria-current="page" to="/axios">axios</NavLink> */}
      <NavLink className="nav-link active" aria-current="page" to="/login">token</NavLink>
      <NavLink className="nav-link active" aria-current="page" to="/signin">Login Form</NavLink>
     {/*<NavLink className="nav-link active" aria-current="page" to="/logout">Logout Form</NavLink>
         <NavLink className="nav-link active" aria-current="page" to="/auth_component/add">User Form</NavLink>
        <NavLink className="nav-link" to="/auth_component/show">Employee Details</NavLink> */}
        <NavLink className="nav-link" to="#">Pricing</NavLink>
        <NavLink className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</NavLink>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
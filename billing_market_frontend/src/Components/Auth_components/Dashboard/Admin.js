import React from 'react'
import { NavLink } from 'react-router-dom'

function Admin() {
  return (
   <>
   <h2>Admin Dashboard</h2>
   <NavLink className="nav-link " aria-current="page" to="/auth_component/add">User Form</NavLink>
        <NavLink className="nav-link " to="/auth_component/show">User Details</NavLink>
   </>
  )
}

export default Admin
import React from 'react'
import Navbar from '../Layout/Navbar'

function AdminDashboard() {
  return (
    <>
    <nav classname="navbar navbar-expand-lg navbar-light bg-light">
  <div classname="container-fluid">
    <navlink classname="navbar-brand" to="#">Super Market</navlink>
    <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span classname="navbar-toggler-icon"></span>
    </button>
    <div classname="collapse navbar-collapse" id="navbarSupportedContent">
      <ul classname="navbar-nav me-auto mb-2 mb-lg-0">
        <li classname="nav-item">
          <navlink classname="nav-link active" aria-current="/addemployee" to="">Add Emploee</navlink>
        </li>
        <li classname="nav-item">
          <navlink classname="nav-link" to="/addexpenses">Add Expenses</navlink>
        </li>
        {/* <li classname="nav-item dropdown">
          <navlink classname="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </navlink>
          <ul classname="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><navlink classname="dropdown-item" to="#">Action</navlink></li>
            <li><navlink classname="dropdown-item" to="#">Another action</navlink></li>
            <li><hr></hr> classname="dropdown-divider"</li>
            <li><navlink classname="dropdown-item" to="#">Something else here</navlink></li>
          </ul>
        </li> */}
        <li classname="nav-item">
          <navlink classname="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</navlink>
        </li>
      </ul>
      <form classname="d-flex">
        <input classname="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button classname="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </>
  )
}

export default AdminDashboard
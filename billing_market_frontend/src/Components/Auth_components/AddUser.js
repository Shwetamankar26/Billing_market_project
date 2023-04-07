import React from 'react'

function AddUser() {
  return (
    <>
    
    <div className='container'>
          <center><h1 style={{color:'blue'}}><i>ADD EMPLOYEE FORM..<br></br></i></h1></center>
          <br></br>
          <form>
            <br/>
            <label htmlFor='er'>Employee Roll</label>
            <input type='text' id='er' className='form-control'/>
            <br/>
            <br/>
            <label htmlFor='en'>Name of Employee</label>
            <input type='text' id='en' className='form-control'/>
            <br/>
            <br/>
            <label htmlFor='email'>Email ID</label>
            <input type='text' id='email' className='form-control'/>
            <br/>
            <br/>
            <label htmlFor='add'>Address</label>
            <input type='text' id='add' className='form-control'/>
            <br/>
            <br/>
            <label htmlFor='pwd'> ENTER PASSWORD</label>
            <input type='password' id='pwd' className='form-control'/>
            <br/>
            <br/>
            <label htmlFor='repwd'> REENTER PASSWORD</label>
            <input type='password' id='repwd' className='form-control'/>
            <br/>
            <br/>
            <center><input type='submit' value='SUBMIT' className='btn btn-outline-primary col-3 me-3'/>
            <input type='reset' value='RESET' className='btn btn-outline-warning col-3'/></center>
          </form>
        </div>
    </>
  )
}

export default AddUser
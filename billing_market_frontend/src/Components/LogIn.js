import React from 'react'

function LogIn() {

  return (
    <>
        <div className='container'>
          <center><h1 style={{color:'blue'}}><i>LOGIN FORM..<br></br></i></h1></center>
          <br></br>
          <form>
            <br/>
            <label htmlFor='un'>USERNAME</label>
            <input type='text' id='un' className='form-control'/>
            <br/>
            <br/>
            <label htmlFor='pwd'>PASSWORD</label>
            <input type='password' id='pwd' className='form-control'/>
            <br/>
            <br/>
            <center><input type='submit' value='SUBMIT' className='btn btn-outline-primary col-3 me-3'/>
            <input type='reset' value='RESET' className='btn btn-outline-warning col-3'/></center>
          </form>
        </div>
    </>
  )
}

export default LogIn
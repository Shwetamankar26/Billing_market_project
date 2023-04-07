import React from 'react'

function AddExpenses() {
  return (
    <>
    
    <div >
          <center><h1 style={{color:'blue'}}><i>ADD EXPENSES FORM..<br></br></i></h1></center>
          <br></br>
          <form className='container'>
            <br/>
            <label htmlFor='ei'>Employee ID</label>
            <input type='text' id='ei' className='form-control'/>
            <br/>
            <br/>
            <label htmlFor='en'>Date of Expense</label>
            <input type='text' id='en' className='form-control'/>
            <br/>
            <br/>
            <label htmlFor='email'>Type of Expense </label>
            <input type='text' id='email' className='form-control'/>
            <br/>
            <br/>
            <label htmlFor='add'>Amount Paid</label>
            <input type='text' id='add' className='form-control'/>
            <br/>
            <br/>
            <br/>
            <br/>
            <center><input type='submit' value='SUBMIT' className='btn btn-outline-primary col-6'/>
            <input type='reset' value='RESET' className='btn btn-outline-warning col-6'/></center>
          </form>
        </div>
    
    </>
    
    
  )
}

export default AddExpenses
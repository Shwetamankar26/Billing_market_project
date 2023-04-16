import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

function AddUser() {
     const {register,handleSubmit}=useForm();
     function savaData(data){
       axios.post('http://127.0.0.1:8000/api/user/',data)
       
     }

  return (
    <>

    <form className='container'  onSubmit={handleSubmit(savaData)}>
        
      
        <label htmlFor='address'><b>Address:</b></label>
        <textarea  id='address' className='form-control'placeholder='e.g Mumbai'
        {...register('address')}/>
        <label htmlFor='username'><b>Username:</b></label>
        <input text="text"  id='username' className='form-control'placeholder='eg.sandhya'
        {...register('username')}/>
        <label htmlFor='password'><b>Password:</b></label>
        <input type='password' id='password' className='form-control'placeholder='e.g Mumbai'
        {...register('password')}/>

        <label htmlFor='email'><b>Email id:</b></label>
        <input type='email' id='email' className='form-control' placeholder='e.g s@gmail.com'
         {...register('email')}></input>
        <label htmlFor='no'><b>Mobile No:</b></label>
        <input type='number' id='no' className='form-control'  placeholder='e.g +910000000'
         {...register('contact')}></input>
        <label htmlFor='pincode'><b>Pincode:</b></label>
        <input  trpe='number' id='pincode' className='form-control'placeholder='e.g 412101'
         {...register('pincode')}/>

        {/* Role:<select htmlFor='role'>
          <section id='role'
           {...register('role')}>Admin</section>
          <section id='role'
           {...register('role')}>Staff</section>
          <section id='role'
           {...register('role')}>Cashier</section>
          <section id='role'
           {...register('role')}>Manager</section>
        </select> */}
        <input type='submit'></input>
    </form>
    </>
  )
}

export default AddUser;
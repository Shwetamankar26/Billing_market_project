import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

function UpdatePassword() {
    const {userID}=useParams();
    const navigate=useNavigate()
    const {register,handleSubmit, setValue,formState:{errors},reset}=useForm()
     async function FetchDetail(){
        const result=  await  axios.post(`http://127.0.0.1:8000/api/login/${userID}/`)
        setValue('password',result.data.password)
        
     }
     const savaData=data=>{
        axios.put(`http://127.0.0.1:8000/api/login/${userID}/`)
        navigate('/login')
     }

    
       

     useEffect(()=>{FetchDetail()},[])
       
  return (
   <>
   <form  className='container' onSubmit={handleSubmit(savaData)}>
   <label htmlFor='pass1'>New Password</label>
   <input type='password' id='pass1' className='form-control'
   {...register('password')}/>
   <br>
   </br>
   <label htmlFor='pass2'>Confrim Password</label>
   <input type='password' id='pass2' className='form-control'
   {...register('password')}></input>
   <br></br>
   <center><input type='submit'></input></center>
   
   </form>
   </>
  )
}

export default UpdatePassword
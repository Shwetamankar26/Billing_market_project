import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { login } from '../ApiServices/ApiServices'
import { ErrorMessage } from '@hookform/error-message'

function Login(){
  const {register,handleSubmit,formState:{errors},reset}=useForm()
  const nav =useNavigate()
  

  const LoginUser= async (userData)=>{
    const resp= await login(userData)
    if (resp.status !== 200){
    document.getElementById('err').innerHTML='username and password Invalid'
    }
    else{
      const data=resp.data
      sessionStorage.setItem('sessionid',data.access)
      sessionStorage.setItem('refresh',data.refresh)
      sessionStorage.setItem('roleid',data.role)
      if(data.role==='owner'){
        nav('/auth')
      }else if(data.role==='salesman')
      {
        nav('/sales')
      }else if(data.role==='staff')
      {
        nav('/staff')
      }else if(data.role==='manager')
      {
        nav('/manager')
      }
    }
  }
 return(
    <>
  
        
          <div className='card-header' style={{backgroundColor:'black'}} >
        
           <center><h1 style={{color:'orange'}}><b><marquee><i>LOGIN FORM..</i></marquee></b></h1></center>
           </div>
           <form className='container' onSubmit={handleSubmit(LoginUser)}  >
           <div className='input-container'>
            
           
            <div className='mb-3'>
             <label htmlFor='un'><b>USERNAME</b></label>
            <input type='text' id='un' className='form-control' placeholder='USERNAME'
            {...register('username',{
              required:{
                value:true,
                message:"this field required"
              }
            })}/>
            <p className='text-danger'><ErrorMessage errors={errors} name='username'></ErrorMessage></p>
            
            </div>
             <br/>
             <br/>
             <div className='input-container'>
             <label htmlFor='pwd'><b>PASSWORD</b></label>
             <input  type='password' id='pwd' className='form-control' placeholder='PASSWORD'
             {...register('password',{
              required:{
                value:true,
                message:"this field required"
              }
            })}/>
            <p className='text-danger'><ErrorMessage errors={errors} name='password'></ErrorMessage></p>
            
             
             </div>
            
             <br/>
             <br/>
             <center><input type='submit' value='LOGIN' className='btn btn-primary btn-lg'/>&nbsp;
            <button type='button' value='RESET' onClick={()=>{reset()}} className='btn btn-warning btn-lg '>RESET</button></center>
            </div>
          </form>
          
          
         
        
    </>
   
    );
  }
 

export default Login;
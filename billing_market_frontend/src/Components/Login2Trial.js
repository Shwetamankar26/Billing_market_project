import React, { useState } from "react";
import ReactDOM from "react-dom";
import supermarket from '../Images/supermarket.jpg'
import '../App.css'
import {NavLink, useNavigate} from 'react-router-dom'



function Login2Trial() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rest,setRest]=useState(false);
  const nav=useNavigate()

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
];

const errors = {
  uname: "invalid username",
  pass: "invalid password"
};

const handleSubmit = (event) => {
  //Prevent page reload
  event.preventDefault();

  var { uname, pass } = document.forms[0]; 

  // Find user login info
  const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (

     
   
   
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label><b>Username: </b></label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label><b>Password </b></label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <NavLink to='/email'><u>forgot password</u></NavLink>
        <div className="button-container">
          <input type="submit" /> &nbsp;
          <input type="reset"/>
        </div>
      </form>
    </div>
  );

  return (
    <>
    <div style={{
        width:'800',
        height:'100vh',
        
        backgroundImage:`url(${supermarket})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        

      }}>
        <div className="app">
       
       <div className="login-form">
         <div className="title">Sign In</div>
         {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
       </div>
       </div>
       
    </div>
        
    
      
      </>
  );
}
export default Login2Trial;
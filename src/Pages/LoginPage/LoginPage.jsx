import React, { useState } from 'react'
import "./LoginPage.css"
import RegistrationPage from './RegistrationPage';
import { Link } from 'react-router-dom';

const LoginPage = () => {

  const [remenber,setRemenber] = useState(false);
  return (
    <div className='login'>
      {/* <i class="fa-solid fa-right-to-bracket"></i>
      <i class="fa-solid fa-user-plus"></i> */}
     <div className="login-form">
<div className="wellcome">
<i class="fa-solid fa-right-to-bracket"></i>
      <h2>Wellcome</h2>
        <h3>Please sign your account</h3>
</div>
     <form action="">
          <div className="email-input">
          <label htmlFor="email">Email</label>
          <i class="fa-solid fa-envelope"></i>
          <input type="email" placeholder='Enter your Email' id="" />
          </div>
       <div className="pass">
        <label htmlFor="password">password</label>
        <i class="fa-solid fa-lock"></i>
        <input type="password" name="" placeholder="Enter Your Password" id="" />
       </div>
        <div className="remenber">
         <div className="remember-1">
         <input type="checkbox"
          onClick={(e)=>{setRemenber.remenber(e.target.checked)}}
          />
          Remember Me
         </div>
         <div className="remember-2">
          <p>forget The Password</p>
         </div>
         
         
        </div>
        <button>Submit<i class="fa-solid fa-caret-right"></i></button>
        <p className="rieg">
            Don't have an account?{' '}
            <Link to="/registration" className="link">
              Register here
            </Link>
          </p>


      </form>
          
     </div>
      </div>
  )
}

export default LoginPage;
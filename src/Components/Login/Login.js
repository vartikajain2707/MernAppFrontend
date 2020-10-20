import React from 'react';
import './Login.css';

const Login = () => {
     return (
          <div className="loginContainer">
               <h1 className="heading">
                    Welcome back!
               </h1>
               <p className="sub">
                    Sign in to your account
               </p>
               <form className="loginForm">
                    <div className="inputContainer">
                         <input type="email" className="input" id="email" name="email" placeholder="Email"/>
                         <label htmlFor="email" className="inputLabel">
                              Email
                         </label>
                    </div>
                    <div className="inputContainer">
                         <input type="password" className="input" id="password" name="password" placeholder="Password"/>
                         <label htmlFor="password" className="inputLabel">
                              Password
                         </label>
                    </div>
                    <p className="forgot">Forgot Password?</p>
                    <button type="submit" className="btn">LOGIN</button>
               </form>
          </div>
     );
}

export default Login;
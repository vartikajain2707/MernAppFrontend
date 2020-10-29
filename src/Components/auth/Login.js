import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";
import './Login.css';

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
    
        try {
          const loginUser = { email, password };
          const loginRes = await Axios.post("http://localhost:3000/login", loginUser);
          setUserData({
            token: loginRes.data.token,
            user: loginRes.data.user,
          });
          localStorage.setItem("auth-token", loginRes.data.token);
          history.push("/home");
        } catch (err) {
          err.response.data.msg && setError(err.response.data.msg);
        }
      };
    
    return (
        <div className="page">
        <h1 className='heading'>Welcome Back!</h1>
        {error && (
          <ErrorNotice message={error} clearError={() => setError(undefined)} />
        )}
        <form className="loginForm" onSubmit={submit}>
          <div className='inputContainer'>
            <input
              id="login-email"
              type="email"
              className='input'
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="login-email" className='inputLabel'>Email</label>
          </div>
          <div className='inputContainer'>
            <input
              id="password"
              placeholder='Password'
              type="password"
              className='input'
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="login-password" className='inputLabel'>Password</label>
          </div>
          <input type="submit" value="Login" className='btn' />
        </form>
      </div>
    )
}

export default Login

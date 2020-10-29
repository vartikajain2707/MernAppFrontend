import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";
import './Register.css';

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [displayName, setDisplayName] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const newUser = { email, password, passwordCheck, displayName };
      await Axios.post("http://localhost:3000/register", newUser);
      const loginRes = await Axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/login");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <div className="page">
      <h2 className='heading'>Welcome!</h2>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <form className="registerForm" onSubmit={submit}>
      <div className='inputContainer'>
        <input
          id="register-display-name"
          type="text"
          className='input'
          placeholder='Name'
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <label htmlFor="register-display-name" className='inputLabel'>Name</label>
        </div>
        <div className='inputContainer'>
          <input
            id="register-email"
            type="email"
            className='input'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="register-email" className='inputLabel'>Email</label>
        </div>
        <div className='inputContainer'>
          <input
            id="register-password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className='input'
            placeholder='Password'
            
          />
          <label htmlFor="register-password" className='inputLabel'>Password</label>

        </div>
        
        <div className='inputContainer'>
          <input
            type="password"
            
            className='input'
            onChange={(e) => setPasswordCheck(e.target.value)}
            placeholder="Re-Enter password"
          />
          <label htmlFor='register-password2' className='inputLabel'>Re-Enter Password</label>
          
        </div>
        
        
        

        <input type="submit" value="Register" className='btn' />
      </form>
      <Link to='/login'>
        <p className='register_check'>Have An Account ? Click here !</p>
      </Link>
    </div>
  );
}
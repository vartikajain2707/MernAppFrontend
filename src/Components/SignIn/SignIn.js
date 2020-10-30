import React, { useState } from "react";
import "./SignIn.css";
import { useAuth } from "../../Context/AuthContext";
import { Link, useHistory } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signin, googleSignin } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await signin(email, password);
      history.push("/");
    } catch {
      setError("Failed to sign in. Please try again!");
    }
    setLoading(false);
  };

  const handleSocial = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await googleSignin();
      history.push("/");
    } catch {
      setError("Failed to sign in using Gmail. Please try again!")
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="SignInContainer">
        <h1 className="heading">Welcome Back!</h1>
        {
             error
        }
        <div className="inputContainer">
          <input
            type="email"
            className="input"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email" className="inputLabel">
            Email Address
          </label>
        </div>
        <div className="inputContainer">
          <input
            type="password"
            className="input"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password" className="inputLabel">
            Password
          </label>
        </div>
        <button disabled={loading} type="submit" className="btn">
          Sign In
        </button>
        <div className="w-100 text-center">
          New here? Create an account! <Link className="Link" to="/signup">Sign Up</Link>
        </div>
      </form>
      <div className="socialSignUp w-100 text-center">
        <p>Or, sign in using Gmail.</p>
        <svg xmlns="http://www.w3.org/2000/svg" className="gmail" viewBox="0 0 48 48" width="48px" height="48px" onClick={ handleSocial }>
          <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"/>
          <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"/>
          <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"/>
          <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"/>
          <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"/>
        </svg>
      </div>
    </div>
  );
};

export default SignIn;
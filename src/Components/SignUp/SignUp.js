import React, { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { Link, useHistory } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return setError("Passwords do not match!");
    }
    try {
      setError("");
      setLoading(true);
      await signup(email, password);
      history.push("/");
    } catch {
      setError("Failed to sign up. Please try again!");
    }
    setLoading(false);
  };

  return (
    <div className="formContainer">
      <h1 className="heading">Create a new account!</h1>

      {error && <div className="alert">{error}</div>}

      <form className="form" onSubmit={handleSubmit}>
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
        <div className="inputContainer">
          <input
            type="password"
            className="input"
            id="passwordConfirm"
            name="passwordConfirm"
            placeholder="Password Confirm"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <label htmlFor="passwordConfirm" className="inputLabel">
            Confirm Password
          </label>
        </div>

        <button disabled={loading} type="submit" className="signup btn">
          Sign Up
        </button>
      </form>

      <div className="footer">
        <p className="foot">
          Already have an account? <Link className="Link" to="/signin">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
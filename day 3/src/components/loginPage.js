import React, { useState } from "react";
import "../components/login.css";
import { Link } from "react-router-dom";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUserName = (e) => {
    const value = e.target.value;
    setEmail(value);
    console.log(value);
  };

  const handleChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <h1>Login</h1>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={handleChangeUserName}
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleChangePassword}
            />
            <button className="btn2" type="submit">
             <strong>Login</strong> 
            </button>
            <Link to ="/Signup"  className="link1">
            <strong>Sign Up?</strong>
          </Link>          
          </div>
        </form>
      </div>
    </div>
  );
}

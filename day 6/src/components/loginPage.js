import React, { useState,useEffect } from "react";
import "../components/login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useDispatch} from 'react-redux';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type:"POSTEMAIL",payload:email});
  
    try {
      const response = await axios.post('http://127.0.0.1:8181/api/v1/auth/authenticate', {
        gmail: email,
        password: password,
      });
  
      let token = response.data.token;
      let user = response.data.userResponse;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
  
      navigate('/home');
    } catch (error) {
      console.error('Error: ', error);
      alert("User not found. Please check your credentials.");
      }
    };  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <h1>Login</h1>
            <input
              type="email"
              placeholder="Enter your email address"
              required
              value={email}
              onChange={handleChangeUserName}
            />
            <input
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={handleChangePassword}
            />
            <button className="btn2" type="submit" >
             <strong>Login</strong> 
            </button>
            <Link to ="/Signup"  className="link1">
            <strong>Don't have an account? Sign Up</strong>
          </Link>          
          </div>
        </form>
      </div>
    </div>
  );
}

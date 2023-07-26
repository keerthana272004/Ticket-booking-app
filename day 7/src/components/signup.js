import React, { useState,useEffect } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleChangeContact = (e) => {
    setContact(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8181/api/v1/auth/register",
        {
          name:username,
          gmail: email,
          mobno: contact,
          password: password,
        }
      );

      if (response.status === 200) {
        navigate("/");
        setUsername("");
        setContact("");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };
  return (
    <div className="container1">
      <div className="form-container1">
        <form onSubmit={handleSubmit}>
          <div className="input">
            <h1>SIGN UP</h1>
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={handleChangeUsername}
            />
            <input
              type="text"
              placeholder="Contact Number"
              required
              value={contact}
              onChange={handleChangeContact}
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={handleChangeEmail}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={handleChangePassword}
            />
            <button className="btn">
              <strong>Submit</strong>
            </button>
           <div> <Link to="/" className="link">
              <strong>Back</strong>
            </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

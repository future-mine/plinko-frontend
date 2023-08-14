import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useAuth } from "../../auth/AuthContext";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const auth = useAuth();
  const handleRegister = async() => {
    if (!email || !password || !username) {
      return
    }
    let resp = await axios.post('http://localhost:4001/api/v1/user/register', {
      email,
      password,
    })
    if(resp.status !== 201) {
      console.log('Signup failed')
      return false;
    }
    resp = await axios.post('http://localhost:4001/api/v1/user/login', {
      email,
      password,
    })
    if(resp.status !== 200) {
      console.log('Login failed')
      return false;
    }
    auth.login(resp.data.accessToken)
    navigate('/dashboard')
  };

  return (
    <div className="form-container">
      <h2>Sign up</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="button" onClick={handleRegister}>
            Sign up
          </button>
        </div>
      </form>
      <p className="link">
        If you already signed up,{" "}
        <strong onClick={() => navigate("/login")}>
          please login to your account
        </strong>
        .
      </p>
    </div>
  );
};

export default Register;

import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from 'axios'
import { useAuth } from "../../auth/AuthContext";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const auth = useAuth()

  const handleLogin = async () => {
    if (!email || !password) {
      return
    }
    const resp = await axios.post('http://localhost:4001/api/v1/user/login', {
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
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Email</label>
          <input
            type="text"
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
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </form>
      <p className="link">
        If you didn't sign up,{" "}
        <strong onClick={() => navigate("/register")}>
          please create a new account
        </strong>
        .
      </p>
    </div>
  );
};

export default Login;

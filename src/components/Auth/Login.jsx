import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleLogin = () => {
    // Implement login logic here
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
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

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleRegister = () => {
    // Implement registration logic here
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

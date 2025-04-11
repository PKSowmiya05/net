import React from "react";
import "./Login.css";

const Login = ({ onLogin }) => {
  return (
    <div className="login-container">
      <h2>Netflix</h2>
      <form onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Login;


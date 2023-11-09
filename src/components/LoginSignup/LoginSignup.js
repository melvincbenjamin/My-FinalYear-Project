import React from "react";
import './LoginSignup.css';

const handleLogin = (e) => {
  e.preventDefault();
  // Implement your login logic here
};

const LoginSignup = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <form onSubmit={handleLogin}>
        <div className="input-container">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button type="submit">Log In</button>
      </form>
      <div className="forgot-password">
        Lost Password? <span>Click Here!</span>
      </div>
      <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit">Login</div>
      </div>
    </div>
  );
};

export default LoginSignup;

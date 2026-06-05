import React from "react";
import "./Login.css";
import logo from "../../assets/logo.png";

const Login = () => {
  return (
    <div className="login">
        <img src={logo} alt="Logo" className="login-logo"/>
        <div className="login-container">
          <h1>Sign up</h1>
          <form>
            <input type="text" placeholder="Your Name" required/>
            <input type="email" placeholder="Email" required/>
            <input type="password" placeholder="Password" required/>
            <button type="submit">Sign Up</button>
            <div className="form-help">
              <div className="remember">
              <input type="checkbox" id="remember"/>
              <label htmlFor="remember">Remember me</label>
            </div>
            <p>Need help?</p>
            </div>
          </form>
          <div className="form-switch">
            <p>New to Netflix? <span>Sign up</span></p>
            <p>Already have an account? <span>Sign in now</span></p>
          </div>
        </div>
      </div>
  );
};

export default Login;
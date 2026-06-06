import React from "react";
import { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";


const Login = () => {

  const[signin,setSingin]=useState("Sign in");
  return (
    <div className="login">
        <img src={logo} alt="Logo" className="login-logo"/>
        <div className="login-container">
          <h1>{signin}</h1>
          <form>
            {signin === "Sign in"?<input type="text" placeholder="Your Name" required/> :<> </>}
            <input type="email" placeholder="Email" required/>
            <input type="password" placeholder="Password" required/>
            <button type="submit">{signin}</button>
            <div className="form-help">
              <div className="remember">
              <input type="checkbox" id="remember"/>
              <label htmlFor="remember">Remember me</label>
            </div>
            <p>Need help?</p>
            </div>
          </form>
          <div className="form-switch">
            {signin === "Sign in" ? (
              <p>New to Netflix? <span onClick={() => setSingin("Sign up")}>Sign up</span></p>
            ) : (
              <p>Already have an account? <span onClick={() => setSingin("Sign in")}>Sign in now</span></p>
            )}
          </div>
        </div>
      </div>
  );
};

export default Login;
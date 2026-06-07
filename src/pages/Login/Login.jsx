import React from "react";
import { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import {login, singup} from "../../firebase.js";

const Login = () => {

  const[signin,setSingin]=useState("Sign in");
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const user_auth = async (e)=>{
    e.preventDefault();
    if(signin==="Sign in"){
      await login(email,password);
    }else{
      await singup(name,email,password);
    }
  }

  return (
    <div className="login">
        <img src={logo} alt="Logo" className="login-logo"/>
        <div className="login-container">
          <h1>{signin}</h1>
          <form>
            {signin === "Sign in"?<input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Your Name" required/> :<> </>}
            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Email" required/>
            <input value={password} onChange={(e)=>{setPassword(e.target.value)}}type="password" placeholder="Password" required/>
            <button onClick={user_auth} type="submit">{signin}</button>
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
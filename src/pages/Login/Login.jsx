import React from "react";
import { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import {login, signup} from "../../firebase.js";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const[signin,setSingin]=useState("Sign in");
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[error, setError] = useState("");
  const[loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateInputs = () => {
    if (signin === "Sign in") {
      if (!email || !password) {
        setError("Please enter email and password");
        return false;
      }
    } else {
      if (!name || !email || !password) {
        setError("Please fill in all fields");
        return false;
      }
      if (password.length < 6) {
        setError("Password must be at least 6 characters");
        return false;
      }
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return false;
    }
    
    setError("");
    return true;
  };

  const user_auth = async (e)=>{
    e.preventDefault();
    
    if (!validateInputs()) {
      return;
    }
    
    setLoading(true);
    try {
      let result;
      if(signin==="Sign in"){
        result = await login(email,password);
      }else{
        result = await signup(name,email,password);
      }
      
      if(result.success){
        navigate("/");
      } else {
        setError(result.error || "Authentication failed");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login">
        <img src={logo} alt="Logo" className="login-logo"/>
        <div className="login-container">
          <h1>{signin}</h1>
          <form onSubmit={user_auth}>
            {signin === "Sign up"?<input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Your Name" required/> :<> </>}
            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Email" required/>
            <input value={password} onChange={(e)=>{setPassword(e.target.value)}}type="password" placeholder="Password" required/>
            {error && <div style={{color: '#ff0000', marginBottom: '10px', fontSize: '14px'}}>{error}</div>}
            <button type="submit" disabled={loading}>{loading ? "Processing..." : signin}</button>
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
              <p>New to Netflix? <span onClick={() => {setSingin("Sign up"); setError("");}}>Sign up</span></p>
            ) : (
              <p>Already have an account? <span onClick={() => {setSingin("Sign in"); setError("");}}>Sign in now</span></p>
            )}
          </div>
        </div>
      </div>
  );
};

export default Login;
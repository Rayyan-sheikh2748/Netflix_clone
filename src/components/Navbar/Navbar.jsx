import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_icon from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { useRef } from "react";
import { useEffect } from "react";
import { logout } from "../../firebase";
import { ToastContainer, toast } from 'react-toastify';
// import TVShow from "./pages/Home/TV Show.jsx";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const Navbar = () => {
  const dropdownRef = useRef();
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY >=80){
        dropdownRef.current.classList.add('nav-dark');
      }else{
        dropdownRef.current.classList.remove('nav-dark');
      }
    })
  },[]);

  return (
    <div ref={dropdownRef} className="navbar">
        <div className="navbar-left">
          <Link to={`/`} >
          <img src={logo} alt="Netflix Logo" /> </Link>
          <ul>
            <li><Link to={`/TVshow`} className="nav-routes"> TV Shows</Link></li>
            <li><Link to={`/Movies`} className="nav-routes"> Movies</Link></li>
            <li><Link to={`/Mylist`} className="nav-routes"> My List</Link></li>
            <li><Link to={`/New&Popular`} className="nav-routes">New & Popular</Link></li>
            <li><Link to={`/ByLanguage`} className="nav-routes"> Browse By language</Link></li>
          </ul>
        </div>
        <div className="navbar-right">
          <img src={search_icon} alt="Search" className="icons" />
          <p>Childern</p>
          <img src={bell_icon} alt="Notifications" className="icons" />
          <div className="navbar-profile">
           <img src={profile_icon} alt="Profile" className="icons" />
           <img src={caret_icon} alt="" />
           <div className="dropdown">
            <p onClick={()=>{logout()}}>Sign out of Netflix</p>
           </div>
          </div>
        </div>
    </div>
  );
};

export default Navbar;
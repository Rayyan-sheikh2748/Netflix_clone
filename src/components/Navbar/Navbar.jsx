import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_icon from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { useRef } from "react";
import { useEffect } from "react";


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
          <img src={logo} alt="Netflix Logo" />
          <ul>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>My List</li>
            <li>New & Popular</li>
            <li>Browse By language</li>
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
            <p>Sign out of Netflix</p>
           </div>
          </div>
        </div>
    </div>
  );
};

export default Navbar;
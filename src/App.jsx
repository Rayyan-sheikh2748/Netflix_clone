import React from "react";
import Home from "./pages/Home/Home.jsx";
import {Routes,Route, useNavigate} from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Player from "./pages/Player/Player.jsx";
import TVShow from "./pages/Home/TV Show.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js"
import { useEffect } from "react";
import { ToastContainer } from "react-toastify/unstyled";
import Bylanguage from "./pages/Home/Bylanguage.jsx";
import Mylist from "./pages/Home/Mylist.jsx";
import N_P from "./pages/Home/New&Popular.jsx";
import Movies from "./pages/Home/Movies.jsx";

const App = () => {

 const navigate = useNavigate();
 useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, async(user)=>{
    const currentPath = window.location.pathname;
    if(user){
      console.log("Logged In");
      if(currentPath === "/login"){
        navigate("/");
      }
    }else{
      console.log("Logged Out");
      if(currentPath !== "/login"){
        navigate("/login");
      }
    }
  })
  return () => unsubscribe();
 },[])

  return (
    <div>
       <ToastContainer theme="dark"/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/player/:id" element={<Player/>}/>
        <Route path="/tvshow" element={<TVShow/>}/>
        <Route path="/Movies" element={<Movies/>}/>
        <Route path="/New&Popular" element={<N_P/>}/>
        <Route path="/Bylanguage" element={<Bylanguage/>}/>
        <Route path="/Mylist" element={<Mylist/>}/>
      </Routes>
    </div>
  );
}

export default App;
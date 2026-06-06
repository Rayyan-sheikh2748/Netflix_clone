import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title  from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCard from "../../components/TitleCards/TitleCard.jsx";
import Footer from "../../components/Footere/Footer.jsx"

const Home = () => {
  return (
    <div className="home">
        <Navbar/>
        <div className="home">
         <img src={hero_banner} alt="" className="banner-img" />
          <div className="hero-caption">
            <img src={hero_title} alt="" className="caption-img" />
            <p>Watch the new hit series from the creator of Stranger Things, The Duffer Brothers. A group of teenagers in a small town uncover a secret government experiment and supernatural forces that threaten their lives.</p>
            <div className="hero-btns">
              <button  className="play-btn"> <img src={play_icon} alt="Play" />Play</button>
              <button className="info-btn"> <img src={info_icon} alt="Info" />More Info</button>
            </div>
            <TitleCard/>
          </div>
        </div>
        <div className="more-cards">
          <TitleCard title="Blochbuster Movies" category="top_rated" />
          <TitleCard title="New Releases" category="popular" />
          <TitleCard title="Only on Netflix" category="now_playing" />
          <TitleCard title="Top pics for you" category="upcoming" />
        </div>
        <Footer/>
    </div>
  );
};

export default Home;
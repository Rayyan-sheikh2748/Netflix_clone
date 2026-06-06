import React, { useEffect,useState } from "react";
import { useRef } from "react";
import "./TitleCard.css";
import cards_data from "../../assets/cards/Cards_data.js";
import { Link } from "react-router-dom";



const TitleCard = ({title , category}) => {
   
  const [apidata, setApidata] = useState([]);
  const cardsRef = useRef();
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZmMyNmYzMjM1NGJhMDA1MThhZmFjMGRkYzYzYjI1ZSIsIm5iZiI6MTc4MDcyMjUwNi4zNTUsInN1YiI6IjZhMjNhYjRhM2MxMGNhOTU3YmYxYzU1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C7avMWWYaINlSbCuGL5QVmDEmd8x2ms0gEI6XZ8DxUY'
  }
};

useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${category ? category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApidata(res.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener("wheel", (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  });
}, []);


  return (
    <div className="title-card">
        <h2>{title?title:"Trending Now"}</h2>
        <div className="card-list" ref={cardsRef}>
          {apidata.map((card,index)=>{
            return (
              < Link to={`/player/${card.id}`} className="card" key={index}>
                <img  src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
                <p>{card.original_title}</p>
              </Link>
            );
          })}
        </div>
      </div>
    );
  };

export default TitleCard;
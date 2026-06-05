import React, { useEffect } from "react";
import { useRef } from "react";
import "./TitleCard.css";
import cards_data from "../../assets/cards/Cards_data.js";



const TitleCard = ({title , category}) => {

  const cardsRef = useRef();
useEffect(() => {
  cardsRef.current.addEventListener("wheel", (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  });
}, []);


  return (
    <div className="title-card">
        <h2>{title?title:"Trending Now"}</h2>
        <div className="card-list" ref={cardsRef}>
          {cards_data.map((card,index)=>{
            return (
              <div className="card" key={index}>
                <img src={card.image} alt="" />
                <p>{card.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

export default TitleCard;
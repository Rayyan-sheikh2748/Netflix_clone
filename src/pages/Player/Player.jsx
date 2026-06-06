import React, {useState, useEffect} from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useParams, useNavigate } from "react-router-dom";


const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();
  const [videoKey, setVideoKey] = useState({
    name: "",
    key: "",
    type: "",
    published_at: "",
  });

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZmMyNmYzMjM1NGJhMDA1MThhZmFjMGRkYzYzYjI1ZSIsIm5iZiI6MTc4MDcyMjUwNi4zNTUsInN1YiI6IjZhMjNhYjRhM2MxMGNhOTU3YmYxYzU1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C7avMWWYaINlSbCuGL5QVmDEmd8x2ms0gEI6XZ8DxUY'
  }
};

useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setVideoKey(res.results[0]))
  .catch(err => console.error(err));
},[]);
  return (
    <div className="player">
        <h1>Player Page</h1>
        <img src={back_arrow_icon} alt="Back" onClick={() => navigate(-1)} />
        <iframe width='90%' height='90%'
        src={`https://www.youtube.com/embed/${videoKey.key}`}
        title="trailr" frameBorder='0' allowFullScreen></iframe>
        <div className="player_info">
          <p>Published Date: {videoKey.published_at.slice(0, 10)}</p>
          <p>Name: {videoKey.name}</p>
          <p>Type: {videoKey.type}</p>
        </div>
    </div>
  );
};

export default Player;
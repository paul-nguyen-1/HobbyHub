import React from "react";
import ReactPlayer from 'react-player'
import './Meal.css'

function Meal({ index, name, youtube }) {
  return (
    <div key={index}>
      <h1 style={{textAlign:"center"}}>{name}</h1>
      <div className="youtubeBox">
      <ReactPlayer url={youtube} />
      </div>
    </div>
  );
}

export default Meal;

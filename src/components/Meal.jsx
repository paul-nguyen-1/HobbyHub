import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./Meal.css";

function Meal({
  index,
  name,
  youtube,
  instructions,
  category,
  area,
  image,
  source,
}) {
  const sentences = instructions
    .split(".")
    .filter((sentence) => sentence.trim() !== "");

  return (
    <div key={index} className="meal">
      <div className="mealHeader">
        <img
          src={image}
          alt="image"
          style={{ height: "100px", width: "100px", borderRadius: "90px" }}
        />
        <h1>{name}</h1>
      </div>
      <h2>{`${area}/${category}`}</h2>
      <button>Save Dish</button>
      <div className="mealContainer">
        <div className="mealSource">
          <a
            href={source}
            target="_blank"
            style={{ color: "blue", marginBottom: "10px" }}
          >
            Full Recipe
          </a>
          <div className="youtubeBox">
            <ReactPlayer url={youtube} controls={true} />
          </div>
        </div>
        <div className="mealInstruction">
          <h3>Instructions:</h3>
          {sentences.map((sentence, index) => (
            <p key={index}>
              <span className="sentenceLabel">{index + 1})</span>
              {sentence.trim()}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Meal;

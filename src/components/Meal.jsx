import React, { useState } from "react";
import ReactPlayer from "react-player";
import Ingredients from "./Ingredients";
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
  const [activeIngredients, setActiveIngredients] = useState(false);

  const sentences = instructions.split(". ");

  const handleIngredients = () => {
    setActiveIngredients(!activeIngredients);
  };
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
      <button onClick={handleIngredients}>Ingredients</button>
      {activeIngredients && <Ingredients />}
      {sentences.map((sentence, index) => (
        <p key={index}>
          <span className="sentenceLabel">{index + 1})</span>
          {sentence.trim()}
        </p>
      ))}
      <a
        href={source}
        target="_blank"
        style={{ color: "blue", marginBottom: "20px" }}
      >
        Source
      </a>
      <div className="youtubeBox">
        <ReactPlayer url={youtube} />
      </div>
    </div>
  );
}

export default Meal;

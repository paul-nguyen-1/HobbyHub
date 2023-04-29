import React, { useState } from "react";
import ReactPlayer from "react-player";
import { supabase } from "../client";
import "./Meal.css";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

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
  const [input, setInput] = useState({
    title: "",
    description: "",
    image: "",
    upvote: 0,
    comments: [],
    url: "",
  });

  const sentences = instructions
    .split(".")
    .filter((sentence) => sentence.trim() !== "");

  const createPost = async (event) => {
    event.preventDefault();
    await supabase
      .from("Meals")
      .insert({
        title: name,
        description: instructions,
        image: image,
        upvote: input.upvote,
        comments: input.comments,
        url: source,
      })
      .select();

    window.location = "/";

    setInput({
      title: "",
      description: "",
      image: "",
      upvote: 0,
      comments: [],
      url: "",
    });
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
      <button onClick={createPost} className="mealButton">
      Save Dish&nbsp;<LibraryAddIcon />
      </button>
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

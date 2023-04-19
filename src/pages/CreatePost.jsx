import React, { useState } from "react";
import "./CreatePost.css";
import { supabase } from "../client";

function CreatePost() {
  const [input, setInput] = useState({
    title: "",
    description: "",
    image: "",
    upvote: 0,
    comments: [],
  });

  const handleChange = (e) => {
    const name = e.target.name;
    setInput((prev) => {
      return { ...prev, [name]: e.target.value };
    });
    console.log(input);
  };

  const createPost = async (event) => {
    event.preventDefault();
    await supabase
      .from("Meals")
      .insert({
        title: input.title,
        description: input.description,
        image: input.image,
        upvote: input.upvote,
        comments: input.comments,
      })
      .select();

    window.location = "/";

    setInput({
      title: "",
      description: "",
      image: "",
      upvote: 0,
      comments: [],
    });
  };
  return (
    <div className="createPost">
      <form className="container">
        <input
          type="text"
          id="title"
          name="title"
          value={input.title}
          onChange={handleChange}
        ></input>
        <textarea
          type="text"
          id="description"
          name="description"
          value={input.description}
          onChange={handleChange}
        ></textarea>
        <input
          type="text"
          id="image"
          name="image"
          value={input.image}
          onChange={handleChange}
        ></input>
        <input
          type="submit"
          value="Create Post"
          onClick={createPost}
          style={{
            width: "100px",
            height: "30px",
            backgroundColor: "#B7791F",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        />
      </form>
    </div>
  );
}

export default CreatePost;

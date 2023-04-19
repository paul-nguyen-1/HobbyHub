import React, { useState } from "react";
import { supabase } from "../client";
import { useParams } from "react-router-dom";

function UpdatePostID() {
  const { id } = useParams();
  const [input, setInput] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    setInput((prev) => {
      return { ...prev, [name]: e.target.value };
    });
    console.log(input);
  };

  const updatePost = async (event) => {
    event.preventDefault();
    await supabase
      .from("Meals")
      .update({
        title: input.title,
        description: input.description,
        image: input.image,
      })
      .select()
      .eq("id", id);

    window.location = "/";

    setInput({
      title: "",
      description: "",
      image: "",
    });
  };
  return (
    <div className="createPost">
      <form className="container">
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          value={input.title}
          onChange={handleChange}
        ></input>
        <textarea
          type="text"
          id="description"
          name="description"
          placeholder="Description"
          value={input.description}
          onChange={handleChange}
        ></textarea>
        <input
          type="text"
          id="image"
          name="image"
          placeholder="Image"
          value={input.image}
          onChange={handleChange}
        ></input>
        <input
          type="submit"
          value="Submit"
          onClick={updatePost}
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

export default UpdatePostID;

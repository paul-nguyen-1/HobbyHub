import React from "react";
import "./CreatePost.css";

function CreatePost() {
  return (
    <div className="createPost">
      <form className="container">
        <input></input>
        <textarea></textarea>
        <input></input>
        <input type="submit" value="Submit" style={{ width: "75px" }} />
      </form>
    </div>
  );
}

export default CreatePost;

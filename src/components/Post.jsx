import React, { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../client";
import "./Post.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

function Post({ id, created, title, image, upvote }) {
  const [count, setCount] = useState(upvote);

  //Update count on click
  const updateCount = async () => {
    await supabase
      .from("Meals")
      .update({ upvote: count + 1 })
      .eq("id", id);
    setCount((count) => count + 1);
  };

  // Get the current date and convert created time to get date
  const currentDate = new Date();
  const createdDate = new Date(created);
  const createdTimestamp = createdDate.getTime();

  // Calculate elapsed time
  let elapsedTime = currentDate.getTime() - createdTimestamp;

  // Get time Intervals
  const oneHour = 60 * 60 * 1000;
  const oneDay = 24 * oneHour;

  if (elapsedTime < oneHour) {
    elapsedTime = "Posted less than 1 hour ago";
  } else if (elapsedTime < oneDay) {
    const hours = Math.floor(elapsedTime / oneHour);
    elapsedTime = `Posted ${hours}h ago`;
  } else {
    const days = Math.floor(elapsedTime / oneDay);
    elapsedTime = `Posted ${days}d ago`;
  }

  return (
    <div className="post">
      <Link to={`post/${id}`}>
        <div style={{ width: "85vw", cursor: "pointer" }}>
          <p>{elapsedTime}</p>
          <h1>{title}</h1>
          {image && <img src={image} alt={image} />}
        </div>
      </Link>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <p onClick={updateCount}>{count} upvotes</p>
        <p
          style={{ cursor: "pointer", marginLeft: "10px" }}
          onClick={updateCount}
        >
          <ThumbUpOffAltIcon />
        </p>
      </div>
    </div>
  );
}

export default Post;

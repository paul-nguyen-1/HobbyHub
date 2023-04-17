import React, { useState, useEffect } from "react";
import "./PostCard.css";
import { useParams } from "react-router-dom";
import { supabase } from "../client";

function PostCard({ created, title, image, upvote, comments }) {
  const { id } = useParams();
  const [comment, setComment] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      submitComment();
      comments.push(comment);
    }
  };

  const submitComment = () => {
    // console.log(`Submitting comment: ${comment}`);
    setComment("");
  };

  useEffect(() => {
    const updateComments = async () => {
      await supabase
        .from("Meals")
        .update({
          comments: [...comments, comment],
        })
        .eq("id", id);
    };
    updateComments();
  }, [comment]);

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
    elapsedTime = "Post less than 1 hour ago";
  } else if (elapsedTime < oneDay) {
    const hours = Math.floor(elapsedTime / oneHour);
    elapsedTime = `Posted ${hours}h ago`;
  } else {
    const days = Math.floor(elapsedTime / oneDay);
    elapsedTime = `Posted ${days}d ago`;
  }

  return (
    <div className="postCard">
      <div className="card">
        <p>{elapsedTime}</p>
        <h1>{title}</h1>
        <img src={image} />
        <p>{upvote} upvotes</p>
      </div>
      <div className="comment">
        {comments.map((comment, index) => (
          <div key={index}>{comment}</div>
        ))}
        <p>{comment}</p>
        <input
          placeholder="Leave a comment..."
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          onKeyPress={handleKeyPress}
        ></input>
      </div>
    </div>
  );
}

export default PostCard;

import React, { useState, useEffect } from "react";
import "./PostCard.css";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../client";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

function PostCard({ created, title, image, upvote, description }) {
  const { id } = useParams();
  const [count, setCount] = useState(upvote);
  const [comment, setComment] = useState("");
  //Must have a letter or number and allows for empty white space in between
  const regex = /^[a-zA-Z0-9][a-zA-Z0-9\s]+$/;
  const [postComments, setPostComments] = useState([]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && regex.test(comment)) {
      submitComment();
      postComments.push(comment);
    }
  };

  const submitComment = () => {
    // console.log(`Submitting comment: ${comment}`);
    setComment("");
  };

  useEffect(() => {
    const updateComments = async () => {
      if (comment !== "") {
        await supabase
          .from("Meals")
          .update({
            comments: [...postComments, comment],
          })
          .eq("id", id);
      }
    };
    updateComments();
  }, [comment]);

  const deletePost = async (e) => {
    e.preventDefault();
    await supabase.from("Meals").delete().eq("id", id);
    window.location = "/";
  };

  useEffect(() => {
    const fetchComments = async () => {
      const { data } = await supabase
        .from("Meals")
        .select("comments")
        .eq("id", id);
      // console.log(data);
      setPostComments(data[0].comments);
    };
    fetchComments();
  }, [id]);

  const deleteComment = async (index) => {
    //create copy of arr and remove comment at specific index selected
    const newComments = [...postComments];
    newComments.splice(index, 1);
    setPostComments(newComments);
    await supabase.from("Meals").update({ comments: newComments }).eq("id", id);
  };

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
        <p>{description}</p>
        <img src={image} />
        <div className="postUpdate">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <p>{count} upvotes</p>
            <p
              style={{ cursor: "pointer", marginLeft: "10px" }}
              onClick={updateCount}
            >
              <ThumbUpOffAltIcon />
            </p>
          </div>
          <div className="updateDelete">
            <Link to={`/updatePost/${id}`}>
              <p style={{ marginRight: "5px" }}>Update</p>
            </Link>
            <p style={{ marginLeft: "5px" }} onClick={deletePost}>
              Delete
            </p>
          </div>
        </div>
      </div>
      <div className="comment">
        {postComments.map((comment, index) => (
          <div key={index}>
            <div>
              - {comment}
              <button
                style={{ backgroundColor: "white" }}
                onClick={() => deleteComment(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
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

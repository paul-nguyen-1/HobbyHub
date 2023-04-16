import React from "react";

function PostCard({ created, title, image, upvote }) {
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
    <div>
      <p>{elapsedTime}</p>
      <h1>{title}</h1>
      <img src={image} />
      <p>{upvote}</p>
    </div>
  );
}

export default PostCard;

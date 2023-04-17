import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";
import { useEffect } from "react";
import PostCard from "../components/PostCard";

function PostID() {
  const { id } = useParams();
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await supabase.from("Meals").select().eq("id", id);
      // console.log(data);
      setPost(data);
    };
    fetchPost();
  }, [id]);

  return (
    <div className="postID">
      {posts && posts.length > 0 ? (
        posts.map((post, index) => (
          <PostCard
            key={index}
            created={post.created_at}
            title={post.title}
            image={post.image}
            upvote={post.upvote}
          />
        ))
      ) : (
        <h2>{"Nothing to see yet 😞"}</h2>
      )}
    </div>
  );
}

export default PostID;

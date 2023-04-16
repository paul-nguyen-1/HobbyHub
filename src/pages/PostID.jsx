import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";
import { useEffect } from "react";

function PostID() {
  const { id } = useParams();
  const [post, setPost] = useState({});

  const updatePost = async (e) => {
    e.preventDefault();

    await supabase
      .from("Meals")
      .update({
        title: post.title,
        speed: post.speed,
        color: post.color,
      })
      .eq("id", id);

    window.location = "/";
  };

  const deletePost = async (e) => {
    e.preventDefault();
    await supabase.from("Meals").delete().eq("id", id);
    window.location = "/gallery";
  };

  const handleChange = (e) => {
    const name = e.target.name;
    setPost((prev) => {
      return { ...prev, [name]: e.target.value };
    });
  };

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await supabase.from("Meals").select().eq("id", id);
      // console.log(data);
      setPost(data[0]);
    };
    fetchPost();
  }, [id]);

  return (
    <div>
      <h1></h1>
      <p></p>
      <img />
    </div>
  );
}

export default PostID;

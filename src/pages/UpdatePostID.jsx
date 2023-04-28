import React, { useState, useEffect } from "react";
import { supabase } from "../client";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function UpdatePostID() {
  const URL =
    "https://cbpfflduoaryrtiobtjf.supabase.co/storage/v1/object/public/images/";
  const [uploadFile, setUploadFile] = useState(null);
  const [images, setImages] = useState([]);
  const { id } = useParams();
  const [uuid, setUuid] = useState(null);
  const [input, setInput] = useState({
    title: "",
    description: "",
    image: "",
    url: "",
  });

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await supabase.from("Meals").select().eq("id", id);
      console.log(data[0]);
      setInput((prevInput) => ({
        ...prevInput,
        title: data[0].title,
        description: data[0].description,
        url: data[0].url,
      }));
    };
    fetchPost();
  }, [id]);

  async function getImages() {
    const { data, error } = await supabase.storage.from("images").list("/");

    if (data !== null) {
      setImages(data);
    } else {
      console.log(error);
    }
  }

  const handleChange = (e) => {
    const name = e.target.name;
    setInput((prev) => {
      return { ...prev, [name]: e.target.value };
    });
    // console.log(input);
  };

  const updatePost = async (event) => {
    event.preventDefault();
    await supabase
      .from("Meals")
      .update({
        title: input.title,
        description: input.description,
        image: uploadFile,
        url: input.url,
      })
      .select()
      .eq("id", id);

    window.location = "/";

    setInput({
      title: "",
      description: "",
      image: "",
      url: "",
    });
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const uuid = uuidv4();
    const upload_url = URL + uuid + "/" + file.name;
    setUploadFile(upload_url);

    const { data, error } = await supabase.storage
      .from("images")
      .upload(`${uuid}/${file.name}`, file);

    if (data) {
      setUuid(uuid); // Store the UUID in state
      getImages();
      console.log(data);
    } else {
      console.log(error);
    }
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
          placeholder="Choose file"
          type="file"
          accept="image/png, image/jpeg"
          onChange={(e) => uploadImage(e)}
        ></input>
        <input
          type="text"
          id="url"
          name="url"
          placeholder="Recipe URL"
          value={input.url}
          onChange={handleChange}
        ></input>
        <input
          type="submit"
          value="Update"
          onClick={updatePost}
          style={{
            width: "100px",
            height: "30px",
            backgroundColor: "#3399CC",
            borderRadius: "5px",
            cursor: "pointer",
            border: "none",
          }}
        />
      </form>
    </div>
  );
}

export default UpdatePostID;

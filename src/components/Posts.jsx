import React, { useState } from "react";
import { userPost } from "../api/index";
import { useHistory } from "react-router";

const userToken = localStorage.getItem("userToken");

const Posts = () => {
  const [body, setBody] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  let history = useHistory();
  const onPostClick = async (event) => {
    event.preventDefault();
    let json = await userPost(
      userToken,
      title,
      description,
      price,
      willDeliver
    );
    setBody(json.data);
    console.log(body);
    history.push("/home");
  };
  const updateTitle = (event) => setTitle(event.target.value);
  const updateDescription = (event) => setDescription(event.target.value);
  const updatePrice = (event) => setPrice(event.target.value);
  const updateWillDeliver = (event) => setWillDeliver(event.target.value);

  return (
    <div className="inputContainer">
      <h1>Post an item for sale</h1>
      <form onSubmit={onPostClick} value={body}>
        <input
          onChange={updateTitle}
          type="text"
          value={title}
          placeholder="Item Name:"
        ></input>

        <input
          onChange={updatePrice}
          type="text"
          value={price}
          placeholder="Price: $"
        ></input>

        <textarea
          onChange={updateDescription}
          value={description}
          rows="5"
          cols="30"
          type="text"
          placeholder="Item Description: (with condition)"
        ></textarea>

        <input
          onChange={updateWillDeliver}
          type="text"
          value={willDeliver}
          placeholder="Will Deliver?"
        ></input>

        <button type="submit" key={userPost}>
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Posts;
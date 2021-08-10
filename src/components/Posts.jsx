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
    console.log(json.data);
    window.alert("You've successfully posted another weird thing");
    history.push("/home");
  };
  const updateTitle = (event) => setTitle(event.target.value);
  const updateDescription = (event) => setDescription(event.target.value);
  const updatePrice = (event) => setPrice(event.target.value);
  const updateWillDeliver = (event) => setWillDeliver(event.target.value);

  return (
    <div>
      <h1>Post an item for sale</h1>
      <form onSubmit={onPostClick} className="postContainer">
        <label>Item Name:</label>
        <input
          onChange={updateTitle}
          type="text"
          value={title}
          placeholder="Name Your Item"
        ></input>
        <label>Name Your Price:</label>
        <input
          onChange={updatePrice}
          type="text"
          value={price}
          placeholder="$$$"
        ></input>
        <label>Item Description:</label>
        <textarea
          onChange={updateDescription}
          value={description}
          rows="5"
          cols="30"
          type="text"
          placeholder="Describe your item and its weird condition"
        ></textarea>
        <label>Delivery Options (select):</label>
        <select value={willDeliver} onChange={updateWillDeliver}>
          <option value="true">
            Yes, I will carry it to you on silver platter!
          </option>
          <option value="false">Hell No, (but maybe for a fee $) </option>
        </select>
        <button type="submit" key={userPost}>
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Posts;

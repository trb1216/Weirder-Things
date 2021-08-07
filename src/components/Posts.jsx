import React, { useEffect, useState } from "react";
import { userPost } from "../api/index";
import { useHistory } from "react-router-dom";

const Posts = () => {
  const [body, setBody] = useState([]);

  useEffect(() => {
    userPost();
  }, []);
  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log("Testing Form Submission");
  };
  let history = useHistory();
  return (
    <div>
      <h1>Posts</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setBody(body);
        }}
      >
        <input
          type="text"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        >
          <input type="text" placeholder="Item Name"></input>
          <input type="text" placeholder="Item Condition"></input>
        </input>
        <input type="text" placeholder="Item Description"></input>
        <button
          onSubmit={onFormSubmit}
          type="submit"
          onClick={() => {
            history.push("../Home");
          }}
        ></button>
      </form>
    </div>
  );
};

export default Posts;

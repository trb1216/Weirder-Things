import React, { useEffect, useState } from "react";
import { userPost } from "../api/index";

const Posts = () => {
  const [body, setBody] = useState([]);

  useEffect(() => {
    userPost();
  }, []);

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
        ></input>
      </form>
    </div>
  );
};

export default Posts;

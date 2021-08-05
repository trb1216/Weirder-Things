import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
const POSTS_URL =
  "https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-PT/posts";

const Posts = () => {
  const [body, setBody] = useState([]);
  const userPost = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer TOKEN_STRING_HERE",
    },
    body: JSON.stringify({
      /* whatever things you need to send to the API */
    }),
  };
  useEffect(() => {
    fetch(POSTS_URL, userPost)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setBody(json);
      });
  }, []);

  return (
    <div>
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

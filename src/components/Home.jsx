import React, { useEffect, useState } from "react";
import { userMessages } from "../api/index";

const userToken = localStorage.getItem("userToken");

const Home = ({ username, posts, _id }) => {
  const [messages, setMessages] = useState();
  useEffect(() => {
    userMessages(userToken).then(setMessages);
  }, []);

  return (
    <div>
      <h1>Welcome Home {username}!</h1>
      <h2>Posts</h2>
      {posts && posts.length > 0
        ? posts.map((post) => {
          return (
            <div className="Postings" key={post._id}>
              <h4>{post.title}</h4>
              <p>
                Who: <b>{post.author}</b>
              </p>
              <p>
                When: <b>{post.createdAt}</b>
              </p>
              <p>
                What: <b>{post.description}</b>
              </p>
              <p>
                Price: <b>{post.price}</b>
              </p>
            </div>
          );
        })
        : "Loading..."}

      <h2>Messages</h2>
      {messages && messages.length > 0
        ? messages.map((message) => {
          return (
            <div className="Postings" key={message._id}>
              <h4>{message.post.title}</h4>
              <p>
                From: <b>{message.fromUser.username}</b>
              </p>
              <p>
                Message: <b>{message.content}</b>
              </p>
            </div>
          );
        })
        : "Loading..."}
    </div>
  );
};

export default Home;

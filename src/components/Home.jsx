import React from "react";
import { userInfo } from "../api/index";
import { useEffect } from "react";

const userToken = localStorage.getItem("userToken");

const Home = ({ username, posts, messages, _id }) => {
  useEffect(() => {
    userInfo(userToken);
  }, []);

  return (
    <div>
      <h1>Welcome Home {username}!</h1>
      <h2>Posts</h2>

      {posts.map((post) => {
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
      })}

      <h2>Messages</h2>
      {messages.map((message) => {
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
      })}
    </div>
  );
};

export default Home;

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
      <h3>Posts</h3>
      { posts.map((post)=>(
        <div className="Postings" key={post._id}>
          <h4>{post.title}</h4>
        <p>Who: <b>{post.author}</b></p>
        <p>When: <b>{post.createdAt}</b></p>
        <p>What: <b>{post.description}</b></p>
        <p>Price: <b>{post.price}</b></p>
      )}

      <h3>Messages</h3>
      { messages.map((message)=> (
        <div className="Postings" key={message._id}>
        <h4>{message.post.title}</h4>
        <p>From: <b>{message.fromUser.username}</b></p>
        <p>Message: <b>{message.content}</b></p>
      )}
    </div>)
}

export default Home;

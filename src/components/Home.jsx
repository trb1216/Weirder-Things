import React, { useEffect, useState } from "react";
import { userMessages } from "../api/index";



const Home = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    console.log(userToken)
    userMessages(userToken).then((result) => {
      console.log(result)
      setMessages(result)
    });

  }, []);

  return (
    <div>
      <h1>Welcome Home</h1>

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

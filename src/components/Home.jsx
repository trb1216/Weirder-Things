import React from "react";
import { userInfo } from "../api/index";

const Home = () => {
  let username = () => userInfo();
  return (
    <div>
      <h1>Welcome Home {username}</h1>
      <h3>Inbox</h3>
      <p></p>
      {/* need to map over messages */}
      <h3>Sent</h3>
      <p></p>
      {/* need to map over messages */}
    </div>
  );
};

export default Home;

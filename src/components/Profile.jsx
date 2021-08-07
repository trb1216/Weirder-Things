import React, { useEffect, useState } from "react";
import { userInfo } from "../api/index";
const Profile = () => {
  const [body, setBody] = useState([]);

  useEffect(() => {
    userInfo();
  }, []);

  return (
    <div
      value={body}
      onChange={(e) => {
        e.preventDefault();
        setBody(body);
      }}
    >
      <h1>Profile</h1>
    </div>
  );
};

export default Profile;

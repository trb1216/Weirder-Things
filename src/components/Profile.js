import React, { useEffect, useState } from "react";
const Profile = () => {
  const [body, setBody] = useState([]);
  const ME_URL =
    "https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-PT/users/me";
  const userInfo = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer TOKEN_STRING_HERE",
    },
  };
  fetch(ME_URL, userInfo);
  const controlMessages = async () => {
    const res = await fetch(ME_URL, userInfo);
    const json = await res.json();
    console.log(json);
    setBody(json);
  };
  useEffect(() => {
    controlMessages();
  }, []);
  return (
    <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          setBody(body);
        }}></form>
      <h1>Profile</h1>
    </div>
  );
};
export default Profile;
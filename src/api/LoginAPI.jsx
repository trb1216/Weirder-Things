import React, { useState } from "react";

 const LoginAPI = ({ setName }) => {
  const [credentials, setCredentials] = useState(["--"]);

  const LOGIN_URL =
    "https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-PT/users/login";

  const UserLogin = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: "test",
        password: "test",
      },
    }),
  };

  fetch(LOGIN_URL, UserLogin)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    })
    .catch(error => console.error(error));

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setName(credentials);
      }}
    >
      <input
        type="text"
        value={credentials}
        onChange={(e) => {
          setCredentials(e.target.value);
        }}
      ></input>
    </form>
  );
};
export default LoginAPI;



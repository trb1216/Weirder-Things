import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import "../App.css";

// Placeholder function to work with onChnage in buttons//

const Login = () => {
  const [body, setBody] = useState([]);
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);

  const LOGIN_URL =
    "https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-PT/users/login";

  const userLogin = {
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

  const stopOutOfControlMessages = async () => {
    const res = await fetch(LOGIN_URL, userLogin);
    const json = await res.json();

    console.log(json);
    setBody(json);
  };
  useEffect(() => {
    stopOutOfControlMessages();
=======
import "./Page.css";
import { userLogin } from "../api/index";
// Placeholder function to work with onChnage in buttons//

const Login = () => {
  // what are we using this for? : const [body, setBody] = useState([]);
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);

  useEffect(() => {
    userLogin();
>>>>>>> a09bda56b3c6089f0bfd7f58bfe491178757e00e
  }, []);

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log("Testing Form Submission");
  };

  //Login field, which will have to revisited with forms//
  const updateUsername = (event) => setUsername(event.target.value);
  const updatePassword = (event) => setPassword(event.target.value);

  return (
<<<<<<< HEAD
    <div>
      <form onSubmit={onFormSubmit} className="inputContainer">
        <label>User ID:</label>
        <input
          className="inputField"
=======
    <div className="inputContainer">
      <form onSubmit={onFormSubmit}>
        <label>User ID:</label>
        <input
>>>>>>> a09bda56b3c6089f0bfd7f58bfe491178757e00e
          type="text"
          value={username}
          placeholder="Your ID Here"
          onChange={updateUsername}
        ></input>
        <input
<<<<<<< HEAD
          className="inputField"
=======
>>>>>>> a09bda56b3c6089f0bfd7f58bfe491178757e00e
          type="password"
          value={password}
          placeholder="Your Password"
          onChange={updatePassword}
        ></input>
        <button
          type="submit"
          onClick={console.log("need submission button here")}
          key={userLogin}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Login;

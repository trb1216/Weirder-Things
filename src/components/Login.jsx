import React, { useEffect, useState } from "react";
import "./Page.css";

// Placeholder function to work with onChnage in buttons//

const Login = () => {
  const [ body, setBody ] = useState([]);
  const [ username, setUsername ] = useState([]);
  const [ password, setPassword ] = useState([]);

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
},[]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log("Testing Form Submission")
    };

  //Login field, which will have to revisited with forms//
  const updateUsername = (event) => setUsername(event.target.value);
  const updatePassword = (event) => setPassword(event.target.value);

  return (
    <div className="inputContainer">
      <form onSubmit={onFormSubmit}>
      <label>User ID:</label>
      <input
        type="text"
        value={username}
        placeholder="Your ID Here"
        onChange={updateUsername}
      ></input>
      <input
        type="password"
        value={password}
        placeholder="Your Password"
        onChange={updatePassword}
      ></input>
      <button
        type="submit"
        onClick={console.log("need submission button here")}
        key={userLogin}
      >SUBMIT
      </button>
      </form>
    </div>
  );
};

export default Login;
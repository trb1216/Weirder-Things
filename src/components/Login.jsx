import React, { useEffect, useState } from "react";
import "../App.css";
import { userLogin } from "../api/index";
// Placeholder function to work with onChnage in buttons//

const Login = () => {
  // what are we using this for? : const [body, setBody] = useState([]);
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);

  useEffect(() => {
    userLogin();
  }, []);

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log("Testing Form Submission");
  };

  //Login field, which will have to revisited with forms//
  const updateUsername = (event) => setUsername(event.target.value);
  const updatePassword = (event) => setPassword(event.target.value);

  return (
    <div>
      <form onSubmit={onFormSubmit} className="inputContainer">
        <label>User ID:</label>
        <input
          className="inputField"
          type="text"
          value={username}
          placeholder="Your ID Here"
          onChange={updateUsername}
        ></input>
        <input
          className="inputField"
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

import React, { useState } from "react";
import "../App.css";
import { userLogin } from "../api/index";
// Placeholder function to work with onChnage in buttons//

const Login = () => {
  const [body, setBody] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onFormSubmit = async (event) => {
    event.preventDefault();
    let json = await userLogin(username, password);
    setBody(json.data);
    console.log(json);
    localStorage.setItem("userToken", json.data.token);
    console.log(body);
  };

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
        <button type="submit" key={userLogin}>
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Login;

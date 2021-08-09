import React, { useState } from "react";
import { useHistory } from "react-router";
import "../App.css";
import { userLogin } from "../api/index";

const Login = () => {
  const [body, setBody] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  const onFormSubmit = async (event) => {
    event.preventDefault();
    let json = await userLogin(username, password);
    setBody(json.data);
    console.log(json);
    localStorage.setItem("userToken", json.data.token);
    console.log(body);
    history.push("/home");
    window.location.href = "/home";
  };

  const updateUsername = (event) => setUsername(event.target.value);
  const updatePassword = (event) => setPassword(event.target.value);

  return (
    <div>
      <form onSubmit={onFormSubmit} className="inputContainer">
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

        <button type="submit" key={userLogin}>
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Login;

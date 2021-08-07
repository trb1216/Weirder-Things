import React, { useEffect, useState } from "react";
import "./Page.css";
import { userLogin } from "../api/index";
import { useHistory, } from 'react-router-dom'
// Placeholder function to work with onChnage in buttons//

const Login = () => {
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
  let history = useHistory()
  return (
    <div className="inputContainer">
      <form>
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
        <button onSubmit={onFormSubmit}
          type="submit"
          onClick={() => { history.push('../Home') }}
          key={userLogin}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Login;

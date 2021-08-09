import React, { useState } from "react";
import { createUser } from "../api/index";

const Register = () => {
  const [body, setBody] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onFormSubmit = async (event) => {
    event.preventDefault();
    let json = await createUser(username, password);
    setBody(json.data);
    console.log(body);
  };

  //Login field, which will have to revisited with forms//
  const updateUsername = (event) => setUsername(event.target.value);
  const updatePassword = (event) => setPassword(event.target.value);

  return (
    <div>
      <form onSubmit={onFormSubmit} className="inputContainer">
        <label>Register:</label>
        <input
          id="username"
          type="text"
          value={username}
          placeholder="Choose your ID"
          onChange={updateUsername}
        ></input>
        <input
          id="password"
          type="password"
          value={password}
          placeholder="Set Your Password"
          onChange={updatePassword}
        ></input>
        <button type="submit">REGISTER</button>
      </form>
    </div>
  );
};

export default Register;

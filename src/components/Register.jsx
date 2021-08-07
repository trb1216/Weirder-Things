import React, { useState, useEffect } from "react";
import { createUser } from "../api/index";

const Register = () => {
  const [body, setBody] = useState([]);
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);

  const onFormSubmit = async (event) => {
    event.preventDefault();
    console.log("Testing Form Submission");
    let json = await createUser(username, password);
    setBody(json.data);
  };

  //Login field, which will have to revisited with forms//
  const updateUsername = (event) => setUsername(event.target.value);
  const updatePassword = (event) => setPassword(event.target.value);

  return (
    <div className="inputContainer">
      <form onSubmit={onFormSubmit}>
        <label>REGISTER:</label>
        <input
          type="text"
          value={username}
          placeholder="Choose your ID"
          onChange={updateUsername}
        ></input>
        <input
          type="password"
          value={password}
          placeholder="Set Your Password"
          onChange={updatePassword}
        ></input>
        <button
          type="submit"
          onClick={console.log("need submission button here")}
        >
          REGISTER
        </button>
      </form>
    </div>
  );
};

export default Register;

// //const stopOutOfControlMessages = async () => {
//   const res = await fetch(LOGIN_URL, userLogin);
//   const json = await res.json();

//   console.log(json);
//   setBody(json);
// };
// useEffect(() => {
// haltMessages();
// },[]);
// const passwordInput = (e) => {
//   console.log(e.target.value);
// }; //

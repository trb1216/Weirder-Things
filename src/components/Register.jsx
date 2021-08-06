import React, { useState, useEffect } from "react";
<<<<<<< Updated upstream
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
=======

const Register = ({ authorized }) => {
  const [body, setBody] = useState([]);
  const REG_URL =
    "https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-PT/users/register";

  const userRegister = {
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
  const haltMessages = async () => {
    fetch(REG_URL, userRegister);
    const res = await fetch(REG_URL, userRegister);
    const json = await res.json();

    console.log(json);
    setBody(json);
  };
  useEffect(() => {
    haltMessages();
  }, []);

  return (
    <div>
      <button type="button">register</button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setBody(body);
        }}
      ></form>
>>>>>>> Stashed changes
    </div>
  );
};

export default Register;
<<<<<<< Updated upstream

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
=======
>>>>>>> Stashed changes

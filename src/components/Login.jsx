import React, { useEffect, useState } from "react";

// Placeholder function to work with onChnage in buttons//

const Login = () => {
  const [body, setBody] = useState([]);
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
  const passwordInput = (e) => {
    console.log(e.target.value);
  };

  //Login field, which will have to revisited with forms//

  return (
    <div>
      <input
        type="text"
        value=""
        placeholder="Your Login ID"
        name="loginInput"
      ></input>
      <input
        type="password"
        value={body}
        placeholder="Your Password"
        onChange={passwordInput}
      ></input>
      <button
        type="button"
        onClick={console.log("need submission button here")}
        key={userLogin}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
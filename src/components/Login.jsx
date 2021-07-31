import React from "react";
import "../api/api";
import { userLogin } from "../api/api";

const Login = () => {
  const onLoginClick = () => {
    var username = "test";
    var password = "test";

    userLogin(username, password)
  };
  
  return <button type="button" onClick={userLogin}
  
  >Login</button>;
};

export default Login;

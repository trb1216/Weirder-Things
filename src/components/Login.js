import React from "react";
import "../api/api";
import { userLogin } from "../api/api";

const Login = () => {
  return <button type="button" onClick={Login} key={userLogin}
  >Login</button>;
};

export default Login;

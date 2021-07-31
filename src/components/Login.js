import React from "react";
import "../api/api";
import { userLogin } from "../api/api";
import Home from "./Home";

const Login = () => {
  return (<div><input type="text" value="" placeholder="Your Login ID"></input>
  <input type="password" value="" placeholder="Your Password"></input>
  <button type="button" onClick={Home} key={userLogin}
  >Login</button></div>);
};

export default Login;

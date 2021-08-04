import React from "react";
import "../api/PostAPI";
import "../api/MeAPI"
import { userLogin } from "../api/LoginAPI";

// Placeholder function to work with onChnage in buttons//

const passwordInput = (e) => {
    console.log(e.target.value);
  };

//Login field, which will have to revisited with forms//  
const Login = () => {

  return (<div><input type="text" value="" placeholder="Your Login ID" name="loginInput"></input>
  <input type="password" value="" placeholder="Your Password" onChange={passwordInput}></input>
  <button type="button" onClick={console.log("need submission button here")} /*key={userLogin}*/
  >Login</button></div>);
};

export default Login;

import React from "react";
import "../api/api";
import { userRegister } from "../api/api";

const Register = () => {
  const onRegisterClick = () => {
    var username = "test";
    var password = "test";

    userRegister(username, password)
  };
  return (
    <button type="button" onClick={userRegister}>
      register
    </button>
  );
};

export default Register;

import React from "react";
import "../api/api";
import { userRegister } from "../api/api";

const Register = () => {
  return (
    <button type="button" onClick={Register}key={userRegister}>
      register
    </button>
  );
};

export default Register;

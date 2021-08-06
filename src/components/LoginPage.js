import React from "react";
import { Link } from "react-router-dom";
import Register from "./Register";

const LoginPage = () => {
  return (
    <div>
      <Link to="/"></Link>
      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  );
};

export default LoginPage;

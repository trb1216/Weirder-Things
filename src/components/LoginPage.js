import React from "react";
import { Link } from "react-router-dom";
<<<<<<< Updated upstream
import Register from "./Register";
=======
import Login from "./Login.jsx";
import Register from "./Register.jsx";
>>>>>>> Stashed changes

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

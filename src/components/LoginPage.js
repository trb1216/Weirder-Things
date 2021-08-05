import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login.jsx";
import Register from "./Register.jsx";

const LoginPage = () => {
    return (<div>
        <Link to="/home">
        <Login />
        </Link>
        <Link to="/register">
        <Register />
        </Link>
        </div>);
}

export default LoginPage;
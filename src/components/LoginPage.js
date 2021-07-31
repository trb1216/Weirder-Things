import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

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
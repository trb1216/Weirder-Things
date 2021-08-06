import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login.jsx";
import Register from "./Register.jsx";

const LoginPage = () => {
    return (<div>
        <Link to="/"><button>Login</button>
        </Link>
        <Link to="/register"><button>Register</button>
        </Link>
        </div>);
}

export default LoginPage;
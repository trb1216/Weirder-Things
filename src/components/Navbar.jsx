import React from "react";
import { Link } from "react-router-dom";
import LoginPage from "./LoginPage";

const Navbar = () => {
  const logOut = () => {
    localStorage.removeItem("userToken");
    window.location.href = LoginPage;
  };

  return (
    <div className="navbar">
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/posts">
        <button>Posts</button>
      </Link>
      <Link to="/profile">
        <button>Profile</button>
      </Link>
      <Link to="/">
        <button onClick={logOut}>Log Out</button>
      </Link>
    </div>
  );
};

export default Navbar;

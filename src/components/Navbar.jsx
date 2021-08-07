import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const logOut = () => {
    localStorage.removeItem("user");
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

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const logOut = () => {
    localStorage.removeItem("userToken");
    window.location.href = "/";
  };

  return (
    <div>
      <h1 className="header">
        What <span className="yellowgreenNeon"> weird </span> things will you
        find today?
      </h1>
      <div className="navbar">
        <Link to="/listings">
          <button>Listings</button>
        </Link>
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
    </div>
  );
};

export default Navbar;

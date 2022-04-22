import React from "react";
import { Link } from "react-router-dom";
import { RiHeartPulseFill } from "react-icons/ri";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Header=()=> {
  return (
    <div className="navbar">
      <div className="nav-brand">
        <Link to="/" className="nav-logo">
          <RiHeartPulseFill className="logo" />
          <p>COVID TRACKER 🔴</p>
        </Link>
      </div>
      <div className="navlinks">
        <div className="navlink">
          <Link to="/about">
            <p>ABOUT US</p>
          </Link>
        </div>
        <div className="navlink">
          <p>HELP</p>
        </div>
      </div>
    </div>
  );
}

export default Header;

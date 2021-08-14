import React from "react";
import "./style.css";
// import Search from "../../assets/Search";
import search from "../../assets/search.png";
import { NavLink } from "react-router-dom";

/**
 * @author
 * @function Navbar
 **/

const Navbar = (props) => {
  return (
    <div className="navbar">
      <ul className="navbarmenu">
        <li>
          <NavLink to="Home">Home</NavLink>
        </li>
        <li>
          <NavLink to="About">About</NavLink>
        </li>
        <li>
          <NavLink to="Post">Posts</NavLink>
        </li>
        <li>
          <NavLink to="Contact">Contact</NavLink>
        </li>
      </ul>
      <div className="search">
        <input type="text" placeholder="Search" />
        {/* <img src={search} width="22px" height="25px" /> */}
      </div>
    </div>
  );
};

export default Navbar;

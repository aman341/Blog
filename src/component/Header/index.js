import React from "react";
import "./style.css";
/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  return (
    <header className="header">
      <nav className="headerMenu">
        <a href="Home">Home</a>
        <a href="About">About</a>
        <a href="Contact">Contact</a>
      </nav>
      Social Media Links
      <div></div>
    </header>
  );
};

export default Header;

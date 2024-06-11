import React from "react";
import menu from "../../assets/images/menu.svg";
import closeMenu from "../../assets/images/close-menu.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header class="nav_header">
      {/* <img class="logo" src={logo} alt="" /> */}
      <input type="checkbox" id="check" />
      <label for="check" class="icons">
        <img src={menu} alt="" id="menu-icon" className="w-6 text-white" />
        <img
          src={closeMenu}
          alt=""
          id="close-icon"
          className="w-6 text-white"
        />
      </label>

      <nav class="navbar">
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/services"}>Services</Link>
        <Link to={"/cart"}>Cart</Link>
        <Link to={"/contacts"}>Contact us</Link>
      </nav>
    </header>
  );
}

export default Navbar;

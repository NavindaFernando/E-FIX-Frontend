import React from "react";
import menu from "../../assets/images/menu.svg";
import closeMenu from "../../assets/images/close-menu.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header class="header">
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
        {/* <a href="#">Home</a> */}
        <Link to={"/"}>Home</Link>
        <a href="#">Services</a>
        {/* <a href="/products">Products</a> */}
        <Link to={"/products"}>Products</Link>
        <a href="#">Testimonials</a>
        <a href="#">Contact us</a>
      </nav>
    </header>
  );
}

export default Navbar;

import React from "react";
import menu from "../../assets/images/menu.svg";
import closeMenu from "../../assets/images/close-menu.svg";
import "./Navbar.css";

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
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Top Products</a>
        <a href="#">Testimonials</a>
        <a href="#">Contact us</a>
      </nav>
    </header>
  );
}

export default Navbar;

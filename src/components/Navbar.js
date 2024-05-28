import React from "react";
import "./Navbar.css";

function NavBar() {
  return (
    <nav>
      <div id="nav-row">
        <a href="#home">
          <div className="nav-item">Home</div>
        </a>
        <a href="#about">
          <div class="nav-item">About</div>
        </a>
        <a href="#education-skills">
          <div class="nav-item">Education/Skills</div>
        </a>
        <a href="#experience">
          <div class="nav-item">Experience</div>
        </a>
        <a href="#projects">
          <div class="nav-item">Projects</div>
        </a>
        <a href="#footer">
          <div class="nav-item">Contact</div>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;

import React from "react";
import "./Navbar.css";

function NavBar() {
  return (
    <nav>
      <div id="nav-row">
        <div class="nav-item">
          <a href="#about">About</a>
        </div>
        <div class="nav-item">
          <a href="#education-skills">Education/Skills</a>
        </div>
        <div class="nav-item">
          <a href="#experience">Experience</a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

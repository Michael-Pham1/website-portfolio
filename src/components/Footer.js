import React from "react";
import "./Footer.css";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import email from "../images/gmail.png";

export default function Footer() {
  return (
    <>
      <h3 className="footer">Contact Me</h3>
      <div className="footer">
        <a href="https://www.linkedin.com/in/michael-pham-87476b194/" target="_blank">
          <img src={linkedin}></img>
        </a>
        <a href="https://github.com/Michael-Pham1" target="_blank">
          <img id="github" src={github}></img>
        </a>
        <a href="mailto:miekolpham20@gmail.com?">
          <img src={email}></img>
        </a>
      </div>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "../style/Footer.css";

const Footer = () => {
  return (
    <div className="f-container">
      <div className="f-row">
        <div className="f-col">
          <Link to="/">INSTAGRAM</Link>
        </div>
        <div className="f-col">
          <Link to="/">INSTAGRAM</Link>
        </div>
        <div className="f-col">
          <Link to="/">INSTAGRAM</Link>
        </div>
        <div className="f-col">
          <Link to="/">INSTAGRAM</Link>
        </div>
      </div>
      <div className="f-row">
        <div className="f-copyright">
          <span>&copy; 2022. All Right Reserved. Powered By MHD.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faRightToBracket,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-row">
        <div className="header-col">
          <div className="header-logo">
            <Link to="/" className="logo">
              e | <span>Commerce</span>
            </Link>
          </div>
          <div className="header-menu">
            <ul className="menu-item">
              <li>
                <Link to="/" className="menu-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="menu-link">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/blog" className="menu-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/account" className="menu-link">
                  Account
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-col">
          <div className="header-anotherMenu">
            <ul className="menu-anotherItem">
              <li>
                <Link to="/login" className="menu-anotherLink">
                  <div className="menu-div">
                    <FontAwesomeIcon icon={faRightToBracket} />{" "}
                    <span>Login</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/wish" className="menu-anotherLink">
                  <div className="menu-div">
                    <FontAwesomeIcon icon={faHeart} />
                    <span className="menu-badge">0</span>
                  </div>
                  <span>Wishlist</span>
                </Link>
              </li>
              <li>
                <Link to="/cart" className="menu-anotherLink">
                  <div className="menu-div">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span className="menu-badge">0</span>
                  </div>
                  <span>Cart</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

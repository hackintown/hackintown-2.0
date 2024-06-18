import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  //to change the burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="left-content">
          <Link className="header-logo" to="/">
            Hackintown
          </Link>
          <div className="brand-logo hide-show">
            <span className="header-text">
            Over 100+ delighted clients globally to Fortune 100 companies.
            </span>
            <div className="brands-slider">
              <figure>
                <img src="./images/logo-01.png" />
              </figure>
              <figure>
                <img src="./images/logo-02.png" />
              </figure>
              <figure>
                <img src="./images/logo-03.png" />
              </figure>
              <figure>
                <img src="./images/logo-04.png" />
              </figure>
              <figure>
                <img src="./images/logo-05.png" />
              </figure>
              <figure>
                <img src="./images/logo-06.png" />
              </figure>
              <figure>
                <img src="./images/logo-07.png" />
              </figure>
              <figure>
                <img src="./images/logo-08.png" />
              </figure>
              <figure>
                <img src="./images/logo-09.png" />
              </figure>
              <figure>
                <img src="./images/logo-10.png" />
              </figure>
            </div>
          </div>
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
        </div>
        <div className="right-content">
          <nav className={menu_class}>
            <ul className="menu-listing">
              <li className="menu-list">
                <Link to="/">Services</Link>
              </li>
              <li className="menu-list">
                <Link to="/">Industries</Link>
              </li>
              <li className="menu-list">
                <Link to="/">Who we are</Link>
              </li>
              <li className="menu-list">
                <Link to="/">Blog</Link>
              </li>
              <li className="menu-list">
                <Link to="/">Contact Us</Link>
              </li>
              <li className="menu-list">
              <Link className="influencer-btn" to="/influencer">Influencer Marketing</Link>
              </li>
            </ul>
            <div className="brand-logo">
              <span className="header-text">
              Over 100+ delighted clients globally to Fortune 100 companies.
              </span>
              <div className="brands-slider">
                <figure>
                  <img src="./images/logo-01.png" />
                </figure>
                <figure>
                  <img src="./images/logo-02.png" />
                </figure>
                <figure>
                  <img src="./images/logo-03.png" />
                </figure>
                <figure>
                  <img src="./images/logo-04.png" />
                </figure>
                <figure>
                  <img src="./images/logo-05.png" />
                </figure>
                <figure>
                  <img src="./images/logo-06.png" />
                </figure>
                <figure>
                  <img src="./images/logo-07.png" />
                </figure>
                <figure>
                  <img src="./images/logo-08.png" />
                </figure>
                <figure>
                  <img src="./images/logo-09.png" />
                </figure>
                <figure>
                  <img src="./images/logo-10.png" />
                </figure>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

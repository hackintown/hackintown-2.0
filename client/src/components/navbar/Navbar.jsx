import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa6";
import PropTypes from "prop-types";

const Navbar = ({ cart, setShow }) => {
  //to change the burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const location = useLocation();

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
  // Close the menu when a menu item is clicked
  const closeMenu = () => {
    if (isMenuClicked) {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
      setIsMenuClicked(false);
    }
  };
  const goToCart = () => {
    setShow(false);
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
              {Array.from({ length: 10 }, (_, i) => (
                <figure key={i}>
                  <img
                    src={`/images/logo-0${i + 1}.webp`}
                    alt={`Brand Logo ${i + 1}`}
                  />
                </figure>
              ))}
            </div>
          </div>
          <div className="mbl-right-content">
            <ul className="mbl-cart">
              {location.pathname !== "/" && (
                <Link to="/services/cart">
                  <button className="icon-cart" onClick={goToCart}>
                    <FaCartPlus size={25} fill="#fff" />
                  </button>
                  <span className="item-count">{cart}</span>
                </Link>
              )}
            </ul>
            <div className="burger-menu" onClick={updateMenu}>
              <div className={burger_class}></div>
              <div className={burger_class}></div>
              <div className={burger_class}></div>
            </div>
          </div>
        </div>
        <div className="right-content">
          <nav className={menu_class}>
            <ul className="menu-listing">
              <li className="menu-list">
                <Link
                  to="/digital-products"
                  onClick={() => {
                    closeMenu();
                    setShow(true);
                  }}
                >
                  Digital Products
                </Link>
              </li>
              <li className="menu-list">
                <Link to="/" onClick={closeMenu}>
                  Services
                </Link>
              </li>
              <li className="menu-list">
                <Link to="/" onClick={closeMenu}>
                  Who we are
                </Link>
              </li>
              <li className="menu-list">
                <Link to="/" onClick={closeMenu}>
                  Blog
                </Link>
              </li>
              <li className="menu-list">
                <Link to="/" onClick={closeMenu}>
                  Contact Us
                </Link>
              </li>
              <li className="menu-list">
                <Link
                  className="influencer-btn"
                  to="/influencer"
                  onClick={closeMenu}
                >
                  Influencer Marketing
                </Link>
              </li>
              {location.pathname !== "/" && (
                <li className="menu-list desktop-cart">
                  <Link to="/services/cart">
                    <button className="icon-cart" onClick={goToCart}>
                      <FaCartPlus size={25} fill="#fff" />
                    </button>
                    <span className="item-count">{cart}</span>
                  </Link>
                </li>
              )}
            </ul>
            <div className="brand-logo">
              <span className="header-text">
                Over 100+ delighted clients globally to Fortune 100 companies.
              </span>
              <div className="brands-slider">
                <figure>
                  <img src="/images/logo-01.webp" />
                </figure>
                <figure>
                  <img src="/images/logo-02.webp" />
                </figure>
                <figure>
                  <img src="/images/logo-03.webp" />
                </figure>
                <figure>
                  <img src="/images/logo-04.webp" />
                </figure>
                <figure>
                  <img src="/images/logo-05.webp" />
                </figure>
                <figure>
                  <img src="/images/logo-06.webp" />
                </figure>
                <figure>
                  <img src="/images/logo-07.webp" />
                </figure>
                <figure>
                  <img src="/images/logo-08.webp" />
                </figure>
                <figure>
                  <img src="/images/logo-09.webp" />
                </figure>
                <figure>
                  <img src="/images/logo-10.webp" />
                </figure>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  cart: PropTypes.number.isRequired,
  setShow: PropTypes.func.isRequired,
};

export default Navbar;

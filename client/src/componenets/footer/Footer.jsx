import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta pb-5">
          <div className="row">
            <div className="primary-info col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <FontAwesomeIcon className="fa-icon" icon={faLocationDot} />
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>
                    Block-B, 1st Floor, New Ashok Nagar, New Delhi, 110096
                  </span>
                </div>
              </div>
            </div>
            <div className="primary-info col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <FontAwesomeIcon className="fa-icon" icon={faPhone} />
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>+918851967714</span>
                </div>
              </div>
            </div>
            <div className="primary-info col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <FontAwesomeIcon className="fa-icon" icon={faEnvelope} />
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>info@hackintown.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5">
          <div className=" container-fluid row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo logo-content">
                  <Link className="header-logo" to="/">
                    Hackintown
                  </Link>
                </div>
                <div className="footer-text logo-content">
                  <p>Transforming Complexity into Simplicity</p>
                </div>
                <div className="footer-social-icon logo-content">
                  <span>Follow us</span>
                  <Link to="https://www.instagram.com/hackin.town">
                    <i className="fab fa-instagram instagram-bg"></i>
                  </Link>
                  <Link to="https://www.linkedin.com/company/hackintown/">
                    <i className="fa-brands fa-linkedin linkedin-bg"></i>
                  </Link>
                  <Link to="/">
                    <i className="fab fa-facebook-f facebook-bg"></i>
                  </Link>
                  <Link to="/">
                    <i className="fab fa-twitter twitter-bg"></i>
                  </Link>
                  <Link to="/">
                    <i className="fab fa-google-plus-g google-bg"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <Link to="/terms-of-use">Terms of Use</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/cookie-policy">Cookies Policy</Link>
                  </li>
                  <li>
                    <Link to="/terms-and-conditions">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div className="subscribe-form">
                  <form>
                    <input type="text" placeholder="Email Address" />
                    <button>
                      <FontAwesomeIcon
                        className="fa-telegram"
                        icon={faEnvelope}
                      />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2023, All Right Reserved{" "}
                  <Link to="/">Hackintown</Link>
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/">Book Now</Link>
                  </li>
                  <li>
                    <Link to="/">Pricing</Link>
                  </li>
                  <li>
                    <Link to="/">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

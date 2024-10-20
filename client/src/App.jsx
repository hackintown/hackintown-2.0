import { useState } from "react";
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Influencer from "./pages/Influencer";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import BrandContact from "./pages/BrandContact";
import DigitalProductPage from "./pages/DigitalProducts/DigitalProductPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermOfUsePage from "./pages/TermOfUsePage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import TermsAndConditionPage from "./pages/TermsAndConditionPage";
import CartPage from "./pages/DigitalProducts/CartPage";
import PropTypes from "prop-types";

function App() {
  // State to manage items in the cart
  const [cart, setCart] = useState([]);
  // State to manage the visibility of the warning message
  const [warning, setWarning] = useState(false);
  // State to toggle between Shop and Cart view
  const [show, setShow] = useState(true);

  const handleClick = (item) => {
    const isPresent = cart.some((product) => product.id === item.id);

    // If item is already in the cart, show warning
    if (isPresent) {
      setWarning(true);
      // Hide warning after 2 seconds
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    // Add item to the cart
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    // Find the index of the item in the cart
    const updatedCart = cart.map((data) =>
      data.id === item.id
        ? { ...data, amount: Math.max(1, data.amount + d) }
        : data
    );
    // Update the cart state with the new quantity
    setCart(updatedCart);
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Home - Hackintown</title>
          <meta
            name="description"
            content="Welcome to Hackintown. We offer website development, app development, SEO, and influencer marketing services."
          />
          <meta
            name="keywords"
            content="home, software, IT company, website development, app development, SEO, influencer marketing"
          />
          <meta property="og:title" content="Home - Hackintown" />
          <meta
            property="og:description"
            content="Welcome to Hackintown. We offer website development, app development, SEO, and influencer marketing services."
          />
          <meta property="og:image" content="URL-to-your-home-page-image" />
          <meta property="og:url" content="URL-to-your-home-page" />
        </Helmet>
        <BrowserRouter>
          <Navbar cart={cart.length} setShow={setShow} />
          {warning && (
            <div className={`warning-message ${!warning ? "hidden" : ""}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
                style={{ color: "#721c24" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 9v2m0 4h.01M21 12.3a9.97 9.97 0 00-1.577-5.41L12.9 12.9a9.97 9.97 0 00-5.41-1.577M12.3 3a9.97 9.97 0 00-5.41 1.577L12.3 12.3a9.97 9.97 0 001.577-5.41"
                />
              </svg>
              <span>Item is already in the cart!</span>
            </div>
          )}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/influencer" element={<Influencer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact-us" element={<BrandContact />} />
            <Route
              path="/digital-products"
              element={<DigitalProductPage handleClick={handleClick} />}
            />
            <Route
              path="/services/cart"
              element={
                <CartPage
                  cart={cart}
                  setCart={setCart}
                  handleChange={handleChange}
                />
              }
            />
            {show ? (
              <Route
                path="/digital-products"
                element={<DigitalProductPage handleClick={handleClick} />}
              />
            ) : (
              <Route
                path="/digital-products/cart"
                element={
                  <CartPage
                    cart={cart}
                    setCart={setCart}
                    handleChange={handleChange}
                  />
                }
              />
            )}

            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-use" element={<TermOfUsePage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditionPage />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}
App.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func,
};
export default App;

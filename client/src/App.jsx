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
import Services from "./pages/Services";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermOfUsePage from "./pages/TermOfUsePage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import TermsAndConditionPage from "./pages/TermsAndConditionPage";
import CartPage from "./pages/DigitalProductsPage/CartPage";
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/influencer" element={<Influencer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact-us" element={<BrandContact />} />
            {show ? (
              <Route
                path="/services"
                element={<Services handleClick={handleClick} />}
              />
            ) : (
              <Route
                path="*"
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

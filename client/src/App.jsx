import { useState } from "react";
import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Helmet } from "react-helmet";
import "./App.css";
import Navbar from "./componenets/navbar/Navbar";
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Influencer from "./pages/Influencer";
import Footer from "./componenets/footer/Footer";
import Login from "./componenets/login/Login";
import Register from "./componenets/register/Register";
import BrandContact from "./pages/BrandContact";
import Services from "./pages/Services";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermOfUsePage from "./pages/TermOfUsePage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import TermsAndConditionPage from "./pages/TermsAndConditionPage";

function App() {
  return (
    <>
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
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/influencer" element={<Influencer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact-us" element={<BrandContact />} />
          <Route path="/services" element={<Services />} />
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
    </>
  );
}

export default App;

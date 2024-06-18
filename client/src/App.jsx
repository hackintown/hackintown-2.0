import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./componenets/navbar/Navbar";
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Influencer from "./pages/Influencer";
import Footer from "./componenets/footer/Footer";
import Login from "./componenets/login/Login";
import Register from "./componenets/register/Register";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/influencer" element={<Influencer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

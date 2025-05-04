import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import SingleService from "./pages/SingleService";

import UserProfile from "./pages/UserProfile";
import Charity from "./pages/Charity";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import PackageDetail from "./pages/ServiceDetail.tsx";
import LogIn from "./pages/LogIn.tsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:category" element={<SingleService />} />
        <Route path="/services/:category/:id" element={<PackageDetail />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<UserProfile id="user001"/>} />
        <Route path="/charity" element={<Charity />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

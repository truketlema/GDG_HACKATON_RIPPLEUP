import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import SingleService from "./pages/SingleService";
import LogIn from "./pages/LogIn";
import UserProfile from "./pages/UserProfile";
import Charity from "./pages/Charity";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<SingleService />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/charity" element={<Charity />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

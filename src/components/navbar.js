import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Blogs from "../pages/blogs";
import ContactUs from "../pages/contactUs";
import Home from "../pages/home";

const Navbar = () => {
  return (
    <>
      <Router>
        <div className="App">
          <ul className="flex justify-center space-x-10 text-2xl p-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/blogs" element={<Blogs />}></Route>
          <Route exact path="/contact" element={<ContactUs />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default Navbar;

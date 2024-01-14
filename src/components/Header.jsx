// Header.jsx

// Importing necessary dependencies and styles
import React, { useState, useEffect } from "react";
import "./../styles/header.css";
import { Link, NavLink } from "react-router-dom";
import logo from "./../assets/logo.jpg";

// Functional component definition for the Header
const Header = () => {
  // State to track whether the header should be sticky or not
  const [isSticky, setSticky] = useState(false);

  // Function to handle scroll events and update the sticky state
  const handleScroll = () => {
    setSticky(window.scrollY > 0);
  };

  // Effect hook to add and remove scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Rendering the Header component
  return (
    <>
      {/* Sticky header container with conditional class */}
      <div className={`container-fluid mynav ${isSticky ? "sticky" : ""}`}>
        <div className="row">
          <div className="col-10 mx-auto">
            {/* Navigation bar */}
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                {/* Logo linking to the home page */}
                <Link className="navbar-brand" to="/">
                  <img src={logo} alt="Logo" height="70px" className="ml-3" />
                </Link>
                {/* Toggle button for responsive design */}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                {/* Navigation links */}
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    {/* Home link with active styling */}
                    <li className="nav-item">
                      <NavLink
                        className="nav-link mx-4"
                        activeClassName="active"
                        to={"/"}
                        style={{ fontSize: "18px" }}
                      >
                        Home
                      </NavLink>
                    </li>
                    {/* About link with active styling */}
                    <li className="nav-item">
                      <NavLink
                        className="nav-link mx-4"
                        activeClassName="active"
                        to="/about"
                        style={{ fontSize: "18px" }}
                      >
                        About
                      </NavLink>
                    </li>
                    {/* Identify link with active styling */}
                    <li className="nav-item">
                      <NavLink
                        className="nav-link mx-4"
                        activeClassName="active"
                        to="/identify"
                        style={{ fontSize: "18px" }}
                      >
                        Identify
                      </NavLink>
                    </li>
                    {/* Blogs link with active styling */}
                    <li className="nav-item">
                      <NavLink
                        className="nav-link mx-4"
                        activeClassName="active"
                        to="/blogs"
                        style={{ fontSize: "18px" }}
                      >
                        Blogs
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

// Exporting the Header component as the default export
export default Header;

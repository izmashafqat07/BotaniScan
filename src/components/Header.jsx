import React, { useState, useEffect } from 'react';
import './../styles/header.css';
import logo from './../assets/logo.jpg';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`App ${isSticky ? 'sticky' : ''}`}>
      <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
        <div className="logo">
          <Link to={""}><img src={logo} alt="Logo" /></Link>
        </div>
        <div className={`menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <NavLink to={""}>Home</NavLink>
          <NavLink to={"about"}>About</NavLink>
          <NavLink to={"identify"}>Identify</NavLink>
          <NavLink to={"blogs"}>Blogs</NavLink>
        </div>
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        </div>
      </nav>

      {/* Add your content here */}
    </div>
  );
}

export default Header;
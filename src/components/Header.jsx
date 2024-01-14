// Header.jsx
import React, { useState, useEffect } from 'react';
import './../styles/header.css';
import { Link, NavLink } from 'react-router-dom';
import logo from './../assets/logo.jpg';

const Header = () => {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
   <div className={`container-fluid mynav ${isSticky ? 'sticky' : ''}`}>
  <div className="row">
    <div className="col-10 mx-auto">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" height="70px" className='ml-3'/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item" >
                <NavLink className="nav-link mx-4" activeClassName="active" to={"/"} style={{ fontSize: '18px' }}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mx-4" activeClassName="active" to="/about" style={{ fontSize: '18px' }}>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mx-4" activeClassName="active" to="/identify" style={{ fontSize: '18px' }}>Identify</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mx-4" activeClassName="active" to="/blogs" style={{ fontSize: '18px' }}>Blogs</NavLink>
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

export default Header;

import React from 'react';
import './../styles/header.css';
import { Link, NavLink } from 'react-router-dom';
import logo from './../assets/logo.jpg'

const Header = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-11 mx-auto ">
            <nav className="navbar navbar-expand-lg mynav">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                  <img src={logo} alt="Logo" height="70px" className='ml-3'/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className="nav-link mx-4" activeClassName="active" to={"/"}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link mx-4" activeClassName="active" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link mx-4" activeClassName="active" to="/identify">Identify</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link mx-4" activeClassName="active" to="/blogs">Blogs</NavLink>
                    </li>
                    {/* Add more NavLink items as needed */}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

// Footer.js

import React from 'react';
import './../styles/footer.css';
import logo from "./../assets/logo.jpg";
import facebookIcon from "./../assets/facebook-icon.webp";
import twitterIcon from "./../assets/twitter-icon.png";
import instagramIcon from "./../assets/instagram-icon.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
    <hr />
       <footer className="footer">
    
    <div className="footer__left">
      <img src={logo} alt="Logo" className="footer__logo" />
      <p className='footer-text'>&copy; {currentYear} BotaniScan, All rights reserved</p>
    </div>
    <div className="footer__right">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img src={facebookIcon} alt="Facebook" className="social-icon" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <img src={twitterIcon} alt="Twitter" className="social-icon twitter-icon" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img src={instagramIcon} alt="Instagram" className="social-icon" />
      </a>
    </div>
  </footer>
    </>
   
  );
};

export default Footer;

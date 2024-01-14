// Footer.js

// Importing necessary dependencies and styles
import React from "react";
import "./../styles/footer.css";
import logo from "./../assets/logo.jpg";
import facebookIcon from "./../assets/facebook-icon.webp";
import twitterIcon from "./../assets/twitter-icon.png";
import instagramIcon from "./../assets/instagram-icon.webp";

// Functional component definition for the Footer
const Footer = () => {
  // Getting the current year for the copyright notice
  const currentYear = new Date().getFullYear();

  // Rendering the Footer component
  return (
    <>
      {/* Horizontal line for visual separation */}
      <hr />
      {/* Footer section */}
      <footer className="footer">
        {/* Left section of the footer */}
        <div className="footer__left">
          {/* Displaying the logo */}
          <img src={logo} alt="Logo" className="footer__logo" />
          {/* Displaying the copyright notice */}
          <p className="footer-text">
            &copy; {currentYear} BotaniScan, All rights reserved
          </p>
        </div>
        {/* Right section of the footer with social media icons */}
        <div className="footer__right">
          {/* Facebook icon with a link to the Facebook page */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookIcon} alt="Facebook" className="social-icon" />
          </a>
          {/* Twitter icon with a link to the Twitter page */}
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={twitterIcon}
              alt="Twitter"
              className="social-icon twitter-icon"
            />
          </a>
          {/* Instagram icon with a link to the Instagram page */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </a>
        </div>
      </footer>
    </>
  );
};

// Exporting the Footer component as the default export
export default Footer;

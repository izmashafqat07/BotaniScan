// Layout.jsx

// Importing necessary dependencies
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

// Functional component definition for the Layout
const Layout = () => {
  // Rendering the Layout component
  return (
    <>
      {/* Header component for the top section of the layout */}
      <Header />
      {/* Outlet component to render nested route content */}
      <Outlet />
      {/* Footer component for the bottom section of the layout */}
      <Footer />
    </>
  );
};

// Exporting the Layout component as the default export
export default Layout;

import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Identify from './pages/Identify.jsx';
import Blogs from './pages/Blogs.jsx';
import BlogDetail from './components/BlogDetail.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import
import { BlogProvider } from './context/BlogContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BlogProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="identify" element={<Identify />} />
            <Route path="Blogs" element={<Blogs />} />
            <Route path="Blogs/:id" element={<BlogDetail />} />
          </Route>
        </Routes>
      </Router>
    </BlogProvider>
  </React.StrictMode>,
);

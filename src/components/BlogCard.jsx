// BlogCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useBlogContext } from '../context/BlogContext';
import './../styles/blogcard.css';

const BlogCard = () => {
  const blogData = useBlogContext();

  return (
    <div>
      <div className="row">
        {/* Featured Blog */}
        <div className="col-md-6 mb-4">
          {blogData.slice(0, 1).map((blog) => (
            <div key={blog.id} className="card" style={{ width: '100%', margin: '10px' }}>
              <img src={blog.image} className="card-img-top" alt={blog.title} style={{ height: '300px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/Blogs/${blog.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {blog.title}
                  </Link>
                </h5>
                <p className="card-text">{blog.content.substring(0, 150)}...</p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Blogs List */}
        <div className="col-md-6">
          <h3>Featured Blogs</h3>
          {blogData.slice(1, 5).map((blog) => (
            <div key={blog.id} className="mb-3 featured-list-blog">
              <Link to={`/Blogs/${blog.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="featured-list-blog-content">
                  <img src={blog.image} alt={blog.title} className="featured-list-blog-image" />
                  <div>
                    <h6 className='featured-list-blog-title'>{blog.title}</h6>
                    <p>{blog.content.substring(0, 100)}...</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Row with Four Columns */}
      <div className="container remaining-blogs">
        <div className="row">
          {blogData.slice(5).map((blog) => (
            <div key={blog.id} className="col-md-3 mb-4">
              <div className="card" style={{ width: '100%' }}>
                {/* Assuming the image takes the full width */}
                <img src={blog.image} className="card-img-top" alt={blog.title} style={{ height: '150px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="remaining-card-title">
                    <Link to={`/Blogs/${blog.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      {blog.title}
                    </Link>
                  </h5>
                  <p className="remaining-card-text">{blog.content.substring(0, 50)}...</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

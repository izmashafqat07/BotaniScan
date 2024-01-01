// BlogDetail.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import { useBlogContext } from './../context/BlogContext';
import Breadcrumbs from './BreadCrumbs';
import './../styles/blogdetail.css'; // Import the external styles

const BlogDetail = () => {
  const { id } = useParams();
  const blogData = useBlogContext();
  const blog = blogData.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return (
      <>
        <Breadcrumbs />
        <div>Blog post not found!</div>
      </>
    );
  }

  return (
    <>
      <Breadcrumbs />
      <div className="container">
        <div className="blog-title">
          <h1>{blog.title}</h1>
        </div>
        {/* <img src={blog.image} alt={blog.title} className="blog-image" /> */}
        <div className="blog-content">
          <p>{blog.content}</p>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;

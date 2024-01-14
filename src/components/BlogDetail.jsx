// BlogDetail.jsx

// Importing necessary dependencies and styles
import React from "react";
import { useParams } from "react-router-dom";
import { useBlogContext } from "./../context/BlogContext";
import Breadcrumbs from "./BreadCrumbs";
import "./../styles/blogdetail.css";

// Functional component definition for the BlogDetail
const BlogDetail = () => {
  // Extracting the 'id' parameter from the URL
  const { id } = useParams();

  // Fetching blog data using the useBlogContext hook
  const blogData = useBlogContext();

  // Finding the blog with the specified 'id'
  const blog = blogData.find((blog) => blog.id === parseInt(id));

  // Handling the case where the blog with the specified 'id' is not found
  if (!blog) {
    return (
      <>
        {/* Displaying breadcrumbs */}
        <Breadcrumbs />
        {/* Displaying a message when the blog post is not found */}
        <div>Blog post not found!</div>
      </>
    );
  }

  // Rendering the BlogDetail component for the found blog
  return (
    <>
      {/* Displaying breadcrumbs */}
      <Breadcrumbs />
      {/* Container for the blog details */}
      <div className="container">
        {/* Displaying the title of the blog */}
        <div className="blog-title">
          <h1>{blog.title}</h1>
        </div>
        {/* Displaying the content of the blog */}
        <div className="blog-content">
          <p>{blog.content}</p>
        </div>
      </div>
    </>
  );
};

// Exporting the BlogDetail component as the default export
export default BlogDetail;

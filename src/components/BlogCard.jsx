// BlogCard.jsx

// Importing necessary dependencies and styles
import React from "react";
import { Link } from "react-router-dom";
import { useBlogContext } from "../context/BlogContext";
import "./../styles/blogcard.css";

// Functional component definition for the BlogCard
const BlogCard = () => {
  // Fetching blog data using the useBlogContext hook
  const blogData = useBlogContext();

  // Rendering the BlogCard component
  return (
    <div>
      {/* Main row containing featured and additional blogs */}
      <div className="row">
        {/* Featured Blog */}
        <div className="col-md-6 col-sm-12 main-feature-blog">
          {/* Displaying the first blog as the main featured blog */}
          {blogData.slice(0, 1).map((blog) => (
            <div
              key={blog.id}
              className="card"
              style={{ width: "630px", height: "50px", margin: "10px" }}
            >
              {/* Displaying the featured blog's image */}
              <img
                src={blog.image}
                className="card-img-top col-sm-12"
                alt={blog.title}
                style={{ height: "300px", width: "100%" }}
              />
              <div className="card-body">
                {/* Displaying the featured blog's title with a link to its details */}
                <h5 className="card-title text-left">
                  <Link
                    to={`/Blogs/${blog.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {blog.title}
                  </Link>
                </h5>
                {/* Displaying the featured blog's main content */}
                <p className="card-text" style={{ textAlign: "justify" }}>
                  {blog.mainBlog}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Blogs List */}
        <div className="col-md-6 col-sm-12">
          {/* Displaying a list of additional featured blogs */}
          <h3>Featured Blogs</h3>
          {blogData.slice(1, 5).map((blog) => (
            <div key={blog.id} className="mb-3 featured-list-blog">
              {/* Linking to the details page of each featured blog */}
              <Link
                to={`/Blogs/${blog.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="featured-list-blog-content">
                  {/* Displaying the image and title of each featured blog */}
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="featured-list-blog-image"
                  />
                  <div>
                    <h6 className="featured-list-blog-title">{blog.title}</h6>
                    <p>{blog.mainBlog}</p>
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
          {/* Displaying the remaining blogs in four columns */}
          {blogData.slice(5).map((blog) => (
            <div key={blog.id} className="col-md-3 mb-4">
              <div className="card" style={{ width: "100%" }}>
                {/* Displaying the image of each remaining blog */}
                <img
                  src={blog.image}
                  className="card-img-top"
                  alt={blog.title}
                  style={{ height: "150px", objectFit: "cover" }}
                />
                <div className="card-body">
                  {/* Displaying the title of each remaining blog with a link to its details */}
                  <h5 className="remaining-card-title">
                    <Link
                      to={`/Blogs/${blog.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {blog.title}
                    </Link>
                  </h5>
                  {/* Displaying the main content of each remaining blog */}
                  <p className="remaining-card-text">{blog.mainBlog}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Exporting the BlogCard component as the default export
export default BlogCard;

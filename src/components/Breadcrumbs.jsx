// Breadcrumbs.jsx

// Importing necessary dependencies
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useBlogContext } from "../context/BlogContext";

// Functional component definition for the Breadcrumbs
const Breadcrumbs = () => {
  // Retrieving the current location
  const location = useLocation();
  // Extracting path segments from the current pathname
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment !== "");
  // Fetching blog data using the useBlogContext hook
  const blogData = useBlogContext();

  // Logging path segments and blog data for debugging purposes
  console.log("pathSegments:", pathSegments);
  console.log("blogData:", blogData);

  // Rendering the breadcrumb navigation
  return (
    <nav
      aria-label="breadcrumb"
      style={{ marginLeft: "60px", marginTop: "30px" }}
    >
      <ol className="breadcrumb">
        {/* Home link in breadcrumbs */}
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {/* Mapping through path segments to generate breadcrumb links */}
        {pathSegments.map((segment, index) => (
          <li key={index} className="breadcrumb-item">
            {/* Checking if it's the last segment to determine link or plain text */}
            {index === pathSegments.length - 1 ? (
              getTitleFromSegment(segment, blogData)
            ) : (
              <Link
                to={`/${buildPath(pathSegments.slice(0, index + 1), blogData)}`}
              >
                {getTitleFromSegment(segment, blogData)}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

// Function to extract title from a segment and update it if a corresponding blog is found
const getTitleFromSegment = (segment, blogData) => {
  // Finding the blog with the specified id matching the segment
  const blog = blogData.find((blog) => blog.id.toString() === segment);

  // Updating the title if a matching blog is found
  if (blog) {
    const titleWithoutBlog = blog.title.replace("blog ", "");
    return titleWithoutBlog;
  }

  // Returning the segment as is if no matching blog is found
  return segment;
};

// Function to build the correct path for the breadcrumb link
const buildPath = (segments, blogData) => {
  // Extracting the blog id from the last segment
  const blogId = segments[segments.length - 1];
  // Finding the blog with the specified id
  const blog = blogData.find((blog) => blog.id.toString() === blogId);

  // Building the path with the updated title if a matching blog is found
  if (blog) {
    const titleWithoutBlog = blog.title.replace("blog ", "");
    return `Blogs/${titleWithoutBlog}`;
  }

  // Returning the joined segments as is if no matching blog is found
  return segments.join("/");
};

// Exporting the Breadcrumbs component as the default export
export default Breadcrumbs;

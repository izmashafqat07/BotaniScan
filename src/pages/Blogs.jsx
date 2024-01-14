// Import React library
import React from 'react';

// Import custom hook to access blog context
import { useBlogContext } from '../context/BlogContext';

// Import components used in the Blogs component
import BlogCard from '../components/BlogCard';
import Breadcrumbs from '../components/BreadCrumbs';

// Functional component representing the Blogs page
const Blogs = () => {
  // Access blog data using the custom hook
  const blogData = useBlogContext();

  // Render the Blogs component
  return (
    <>
      {/* Display Breadcrumbs component for navigation */}
      <Breadcrumbs />

      {/* Display BlogCard component to show the list of blogs */}
      <BlogCard />
    </>
  );
};

// Export the Blogs component to be used in other parts of the application
export default Blogs;

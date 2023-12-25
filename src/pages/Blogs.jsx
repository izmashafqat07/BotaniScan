import React from 'react';
import { useBlogContext } from '../context/BlogContext';
import BlogCard from '../components/BlogCard';
import Breadcrumbs from '../components/BreadCrumbs';

const Blogs = () => {
  const blogData = useBlogContext();

  return (
    <>
      <Breadcrumbs />
      <BlogCard />
    </>
  );
};

export default Blogs;

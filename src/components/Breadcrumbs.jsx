import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useBlogContext } from '../context/BlogContext';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter((segment) => segment !== '');
  const blogData = useBlogContext();
  console.log('pathSegments:', pathSegments);
  console.log('blogData:', blogData);
  return (
    <nav aria-label="breadcrumb" style={{marginLeft:"60px" , marginTop:"30px"}}>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {pathSegments.map((segment, index) => (
          <li key={index} className="breadcrumb-item">
            {index === pathSegments.length - 1 ? (
              getTitleFromSegment(segment, blogData)
            ) : (
              <Link to={`/${buildPath(pathSegments.slice(0, index + 1), blogData)}`}>
                {getTitleFromSegment(segment, blogData)}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

const getTitleFromSegment = (segment, blogData) => {
  
    const blog = blogData.find((blog) => blog.id.toString() === segment);
  
    if (blog) {
      const titleWithoutBlog = blog.title.replace('blog ', ''); 
      return titleWithoutBlog;
    }
  
    return segment;
  };
  
  const buildPath = (segments, blogData) => {
 
    const blogId = segments[segments.length - 1];
    const blog = blogData.find((blog) => blog.id.toString() === blogId);
    
    if (blog) {
      const titleWithoutBlog = blog.title.replace('blog ', ''); 
      return `Blogs/${titleWithoutBlog}`;
    }
  
    return segments.join('/');
  };
  

export default Breadcrumbs;

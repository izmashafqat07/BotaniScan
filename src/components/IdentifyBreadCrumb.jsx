// IdentifyBreadCrumb.jsx

// Importing necessary dependencies
import React from "react";
import { Link, useLocation } from "react-router-dom";

// Functional component definition for the IdentifyBreadCrumb
const IdentifyBreadCrumb = () => {
  // Getting the current location
  const location = useLocation();
  // Extracting pathnames from the current pathname
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Rendering the IdentifyBreadCrumb component
  return (
    <div>
      {/* Container for breadcrumb navigation */}
      <div className="container-fluid mt-4">
        <div className="row">
          <div
            className="col d-flex align-items-center ml-4 "
            style={{ marginLeft: "40px", marginTop: "10px" }}
          >
            {/* Breadcrumb navigation */}
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb ml-2">
                {/* Home link in breadcrumbs */}
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                {/* Mapping through pathnames to generate breadcrumb links */}
                {pathnames.map((name, index) => {
                  // Building the route for each breadcrumb link
                  const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                  // Checking if it's the last breadcrumb to determine styling
                  const isLast = index === pathnames.length - 1;

                  // Rendering each breadcrumb item with link or plain text
                  return (
                    <li
                      key={name}
                      className={`breadcrumb-item ${isLast ? "active" : ""}`}
                      aria-current={isLast ? "page" : ""}
                    >
                      {isLast ? name : <Link to={routeTo}>{name}</Link>}
                    </li>
                  );
                })}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting the IdentifyBreadCrumb component as the default export
export default IdentifyBreadCrumb;

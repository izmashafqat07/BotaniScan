import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const IdentifyBreadCrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
  return (
    <div>
        <div className="container-fluid mt-4">
        <div className="row">
          <div className="col d-flex align-items-center ml-4 " style={{ marginLeft: '40px',marginTop:"10px" }}>
           
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb ml-2">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                {pathnames.map((name, index) => {
                  const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                  const isLast = index === pathnames.length - 1;
                  return (
                    <li key={name} className={`breadcrumb-item ${isLast ? 'active' : ''}`} aria-current={isLast ? 'page' : ''}>
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
  )
}

export default IdentifyBreadCrumb

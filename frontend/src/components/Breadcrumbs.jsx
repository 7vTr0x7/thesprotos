import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  let breadcrumbPath = "";

  return (
    <div className="text-gray-50 text-lg">
      {pathnames.length > 0 && <Link to="/">Home</Link>}

      {pathnames &&
        pathnames.map((path, index) => {
          breadcrumbPath += `/${path}`;

          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <span key={breadcrumbPath}>
              {" "}
              /{" "}
              <span className="font-semibold">
                {`${path.charAt(0).toUpperCase()}${path.slice(1)}`}
              </span>
            </span>
          ) : (
            <span key={breadcrumbPath}>
              <Link to={breadcrumbPath}>{path}</Link>
            </span>
          );
        })}
    </div>
  );
};

export default Breadcrumbs;

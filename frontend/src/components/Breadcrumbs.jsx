import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  let breadcrumbPath = "";

  return (
    <div className="text-gray-50 text-sm sm:text-lg">
      {pathnames.length > 0 && <Link to="/">Home</Link>}
      {pathnames.map((path, index) => {
        breadcrumbPath += `/${path}`;
        const isLast = index === pathnames.length - 1;

        const formattedPath = path.replace(/-/g, " ");

        return isLast ? (
          <span key={breadcrumbPath}>
            {" "}
            /{" "}
            <span className="font-semibold">{`${formattedPath
              .charAt(0)
              .toUpperCase()}${formattedPath.slice(1)}`}</span>
          </span>
        ) : (
          <span key={breadcrumbPath}>
            {" "}
            / <Link to={breadcrumbPath}>{formattedPath}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;

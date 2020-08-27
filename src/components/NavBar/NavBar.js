import './NavBar.css';

import { HEADERS } from "../../constants/header_constants";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="header">
      <h1 className="logo-text" onClick={() => history.push("/")}>
        Takes the Cake
      </h1>
      <div className="page-names">
        {HEADERS.map((page, index) => (
          <h2
            className={pathname === page.route ? "selected-header" : ""}
            key={index}
            onClick={() => history.push(page.route)}
          >
            {page.text}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
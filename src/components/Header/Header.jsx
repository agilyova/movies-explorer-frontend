import "./Header.css";
import logo from "../../images/logo.svg";

import React from "react";
import PageContent from "../PageContent/PageContent";
import { Link, Route, Switch, useLocation } from "react-router-dom";

import Navigation from "../Navigation/Navigation";

function Header({ loggedIn }) {
  const location = useLocation();

  const headerCLassName = `header${
    location.pathname === "/" ? " header_theme_dark" : ""
  }`;

  if (loggedIn === null) {
    return null;
  }

  return (
    <header className={headerCLassName}>
      <PageContent name="header__content">
        <Link to="/" className="header__logo-link">
          <img src={logo} alt="Логотоип" className="header__logo" />
        </Link>
        <Navigation loggedIn={loggedIn} />
      </PageContent>
    </header>
  );
}

export default Header;

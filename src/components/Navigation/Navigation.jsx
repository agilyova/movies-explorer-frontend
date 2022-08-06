import "./Navigation.css";
import React, { useState } from "react";
import { Link, NavLink, Route } from "react-router-dom";
import profileIcon from "../../images/profile-icon.svg";
import menuIcon from "../../images/burger-menu.svg";
import closeIcon from "../../images/close-button.svg";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseMenu();
    }
  };

  return (
    <>
      <Route exact path="/">
        <div className="header__links">
          <Link className="link header__reg-link" to="/signup">
            Регистрация
          </Link>
          <Link className="button header__login-button" to="/signin">
            Войти
          </Link>
        </div>
      </Route>

      <Route exact path={["/movies", "/saved-movies", "/profile"]}>
        <button
          className="button header__nav-button header__nav-button_type_menu"
          type="button"
          onClick={handleMenuClick}
        >
          <img src={menuIcon} className="header__nav-icon"></img>
        </button>
        <nav
          className={`header__nav ${isMenuOpen ? " header__nav_open" : ""}`}
          onClick={handleOverlayClick}
        >
          <button
            className="button header__nav-button header__nav-button_type_close"
            type="button"
            onClick={handleCloseMenu}
          >
            <img src={closeIcon} className="header__nav-icon"></img>
          </button>
          <ul className="header__nav-links" id="nav-links">
            <li className="header__nav-link-item header__nav-link-item_type_main">
              <Link
                className="link header__nav-link"
                to="/"
                onClick={handleCloseMenu}
              >
                Главная
              </Link>
            </li>
            <li className="header__nav-link-item header__nav-link-item_type_movies">
              <NavLink
                className="link header__nav-link"
                activeClassName="header__nav-link_active"
                to="/movies"
                onClick={handleCloseMenu}
              >
                Фильмы
              </NavLink>
            </li>
            <li className="header__nav-link-item header__nav-link-item_type_saved-movies">
              <NavLink
                className="link header__nav-link"
                activeClassName="header__nav-link_active"
                to="/saved-movies"
                onClick={handleCloseMenu}
              >
                Сохранённые фильмы
              </NavLink>
            </li>
            <li className="header__nav-link-item header__nav-link-item_type_profile">
              <Link
                className="link header__profile-link"
                to="/profile"
                onClick={handleCloseMenu}
              >
                <img
                  src={profileIcon}
                  alt="Иконка профиля"
                  className="header__profile-link-icon"
                />
                Аккаунт
              </Link>
            </li>
          </ul>
        </nav>

        {/*        <nav className="header__nav-links">
          <NavLink
            className="header__nav-link"
            activeClassName="header__nav-link_active"
            to="/movies"
          >
            Фильмы
          </NavLink>
          <NavLink
            className="header__nav-link"
            activeClassName="header__nav-link_active"
            to="/saved-movies"
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        <Link className="header__profile-link" to="/profile">
          <img
            src={profileIcon}
            alt="Иконка профиля"
            className="header__profile-link-icon"
          />
          Аккаунт
        </Link>*/}
      </Route>
    </>
  );
}

export default Navigation;

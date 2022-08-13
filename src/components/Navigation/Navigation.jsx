import "./Navigation.css";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import closeIcon from "../../images/close-button.svg";

function Navigation({ loggedIn }) {
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
      {!loggedIn ? (
        <div className="header__links">
          <Link className="link header__reg-link" to="/signup">
            Регистрация
          </Link>
          <Link className="button header__login-button" to="/signin">
            Войти
          </Link>
        </div>
      ) : (
        <>
          <button
            className="button header__nav-button header__nav-button_type_menu"
            type="button"
            onClick={handleMenuClick}
          >
            <svg
              className="header__nav-icon"
              width="44"
              height="38"
              viewBox="0 0 44 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" d="M36 11L8 11V8L36 8V11Z" />
              <path fillRule="evenodd" d="M36 21L8 21V18L36 18V21Z" />
              <path fillRule="evenodd" d="M36 31L8 31V28L36 28V31Z" />
            </svg>
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
                  <svg
                    alt="Иконка профиля"
                    className="header__profile-link-icon"
                    width="12"
                    height="14"
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4C8 5.10457 7.10457 6 6 6C4.89543 6 4 5.10457 4 4C4 2.89543 4.89543 2 6 2C7.10457 2 8 2.89543 8 4ZM10 4C10 6.20914 8.20914 8 6 8C3.79086 8 2 6.20914 2 4C2 1.79086 3.79086 0 6 0C8.20914 0 10 1.79086 10 4ZM4 9C1.79086 9 0 10.7909 0 13V14H2V13C2 11.8954 2.89543 11 4 11H8C9.10457 11 10 11.8954 10 13V14H12V13C12 10.7909 10.2091 9 8 9H4Z"
                    />
                  </svg>
                  Аккаунт
                </Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </>
  );
}

export default Navigation;

import "./Footer.css";
import React from "react";
import PageContent from "../PageContent/PageContent";
import { Route, Switch } from "react-router-dom";

function Footer() {
  return (
    <Switch>
      <Route exact path={["/movies", "/saved-movies", "/"]}>
        <footer className="footer">
          <PageContent name="footer__content">
            <h2 className="footer__title">
              Учебный проект Яндекс.Практикум х BeatFilm.
            </h2>
            <div className="footer__info">
              <p className="footer__copyright">
                &copy; {new Date().getFullYear()}
              </p>
              <nav className="footer__nav">
                <ul className="footer__links">
                  <li className="footer__link-item">
                    <a
                      href="https://practicum.yandex.ru"
                      className="link footer__link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Яндекс.Практикум
                    </a>
                  </li>
                  <li className="footer__link-item">
                    <a
                      href="https://github.com/agilyova"
                      className="link footer__link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </li>
                  <li className="footer__link-item">
                    <a
                      href="https://ru-ru.facebook.com/"
                      className="link footer__link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Facebook
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </PageContent>
        </footer>
      </Route>
    </Switch>
  );
}

export default Footer;

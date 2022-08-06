import "./Portfolio.css";
import React from "react";

function Portfolio() {
  return (
    <>
      <h4 className="portfolio-title">Портфолио</h4>
      <ul className="portfolio-links">
        <li className="portfolio-link-item">
          <a
            href="https://agilyova.github.io/how-to-learn"
            className="link portfolio-link"
          >
            Статичный сайт
          </a>
          <p className="portfolio-link-icon">&#8599;</p>
        </li>
        <li className="portfolio-link-item">
          <a
            href="https://agilyova.github.io/russian-travel/"
            className="link portfolio-link"
          >
            Адаптивный сайт
          </a>
          <p className="portfolio-link-icon">&#8599;</p>
        </li>
        <li className="portfolio-link-item">
          <a
            href="https://mesto.gilyova.nomorepartiesxyz.ru/"
            className="link portfolio-link"
          >
            Одностраничное приложение
          </a>
          <p className="portfolio-link-icon">&#8599;</p>
        </li>
      </ul>
    </>
  );
}

export default Portfolio;

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
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт
            <p className="portfolio-link-icon">&#8599;</p>
          </a>
        </li>
        <li className="portfolio-link-item">
          <a
            href="https://agilyova.github.io/russian-travel/"
            className="link portfolio-link"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт
            <p className="portfolio-link-icon">&#8599;</p>
          </a>
        </li>
        <li className="portfolio-link-item">
          <a
            href="https://mesto.gilyova.nomorepartiesxyz.ru/"
            className="link portfolio-link"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение
            <p className="portfolio-link-icon">&#8599;</p>
          </a>
        </li>
      </ul>
    </>
  );
}

export default Portfolio;

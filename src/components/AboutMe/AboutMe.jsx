import "./AboutMe.css";
import React from "react";
import PageSection from "../PageSection/PageSection";
import SectionTitle from "../SectionTitle/SectionTitle";
import Portfolio from "../Portfolio/Portfolio";
import photo from "../../images/photo.png";

function AboutMe() {
  return (
    <PageSection type="main" name="about-me">
      <SectionTitle name="Студент" />
      <div className="about-me__content">
        <div className="about-me__info">
          <div className="about-me__description">
            <h3 className="about-me__name">Виталий</h3>
            <p className="about-me__caption">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__full-info">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и&nbsp;дочь. Я люблю слушать музыку, а ещё
              увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в
              компании «СКБ Контур». После того, как прошёл курс по
              веб&#8209;разработке, начал заниматься фриланс&#8209;заказами и
              ушёл с постоянной работы.
            </p>
          </div>
          <ul className="about-me__social-links">
            <li className="about-me__social-link-item">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="link about-me__social-link"
              >
                Facebook
              </a>
            </li>
            <li className="about-me__social-link-item">
              <a
                href="https://github.com/agilyova"
                target="_blank"
                rel="noreferrer"
                className="link about-me__social-link"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <img src={photo} alt="Фотография" className="about-me__photo" />
      </div>
      <Portfolio />
    </PageSection>
  );
}

export default AboutMe;

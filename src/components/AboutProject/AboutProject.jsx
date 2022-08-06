import "./AboutProject.css";

import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import PageSection from "../PageSection/PageSection";

function AboutProject() {
  return (
    <PageSection name="about-project" type="main">
      <SectionTitle name="О проекте" />
      <div className="about-project__description description">
        <h3 className="description__title">
          Дипломный проект включал 5 этапов
        </h3>
        <p className="description__text">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <h3 className="description__title">
          На выполнение диплома ушло 5 недель
        </h3>
        <p className="description__text">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className="about-project__timeline">
        <p className="timeline timeline_type_backend">1 неделя</p>
        <p className="timeline timeline_type_frontend">4 недели</p>
        <p className="timeline__caption">Back-end</p>
        <p className="timeline__caption">Front-end</p>
      </div>
    </PageSection>
  );
}

export default AboutProject;

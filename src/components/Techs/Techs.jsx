import "./Techs.css";
import React from "react";
import PageSection from "../PageSection/PageSection";
import SectionTitle from "../SectionTitle/SectionTitle";

function Techs() {
  return (
    <PageSection type="main" name="techs">
      <SectionTitle name="Технологии" />
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__caption">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__technologies-list">
        <li className="techs__technology-item">HTML</li>
        <li className="techs__technology-item">CSS</li>
        <li className="techs__technology-item">JS</li>
        <li className="techs__technology-item">React</li>
        <li className="techs__technology-item">Git</li>
        <li className="techs__technology-item">Express.js</li>
        <li className="techs__technology-item">mongoDB</li>
      </ul>
    </PageSection>
  );
}

export default Techs;

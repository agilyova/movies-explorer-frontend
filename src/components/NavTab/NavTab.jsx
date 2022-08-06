import "./NavTab.css";

import React from "react";
import PageSection from "../PageSection/PageSection";

function NavTab() {
  return (
    <PageSection name="nav-tab" type="nav">
      <nav className="nav-tab__navigation">
        <ul className="nav-tab__links">
          <li className="nav-tab__link-item">
            <a href={"#about-project"} className="link nav-tab__link">
              О проекте
            </a>
          </li>
          <li className="nav-tab__link-item">
            <a href={"#techs"} className="link nav-tab__link">
              Технологии
            </a>
          </li>
          <li className="nav-tab__link-item">
            <a href={"#about-me"} className="link nav-tab__link">
              Студент
            </a>
          </li>
        </ul>
      </nav>
    </PageSection>
  );
}

export default NavTab;

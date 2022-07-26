import "./Main.css";
import React from "react";

import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";

function Main() {
  return (
    <>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
    </>
  );
}

export default Main;

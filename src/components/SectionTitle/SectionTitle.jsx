import "./SectionTitle.css";

import React from "react";

function SectionTitle(props) {
  return <h2 className="section__title">{props.name}</h2>;
}

export default SectionTitle;

import "./PageSection.css";

import React from "react";
import PageContent from "../PageContent/PageContent";

function PageSection({ name, children }) {
  const sectionClassName = `page__section page__section_type_${name} section`;

  return (
    <section className={sectionClassName} id={name}>
      <PageContent name={name} children={children} />
    </section>
  );
}

export default PageSection;

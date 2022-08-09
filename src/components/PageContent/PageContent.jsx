import "./PageContent.css";
import React from "react";

function PageContent(props) {
  const pageContentClassName = `page__content ${props.name}`;

  return <div className={pageContentClassName}>{props.children}</div>;
}

export default PageContent;

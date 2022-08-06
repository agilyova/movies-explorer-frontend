import "./PageWithForm.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function PageWithForm({
  name,
  children,
  title,
  captionText,
  linkText,
  linkPath,
}) {
  const pageWithFormClassName = `page-with-form ${name}`;

  return (
    <section className={pageWithFormClassName}>
      <Link className="page-with-form__logo-link" to="/">
        <img className="page-with-form__logo" src={logo} alt="" />
      </Link>
      <h2 className="page-with-form__title">{title}</h2>
      {children}
      <p className="page-with-form__caption">
        {captionText}
        <Link className="link page-with-form__link" to={linkPath}>
          {" "}
          {linkText}
        </Link>
      </p>
    </section>
  );
}

export default PageWithForm;

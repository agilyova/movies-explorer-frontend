import "./PageNotFound.css";
import React from "react";
import { useHistory } from "react-router-dom";

function PageNotFound() {
  const history = useHistory();

  return (
    <section className="page-not-found">
      <h2 className="page-not-found__title">404</h2>
      <p className="page-not-found__caption"> Страница не найдена</p>
      <button
        className="link page-not-found__link-back"
        onClick={history.goBack}
      >
        Назад
      </button>
    </section>
  );
}

export default PageNotFound;

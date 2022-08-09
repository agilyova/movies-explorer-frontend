import "./MoviesCardList.css";
import React, { useState } from "react";
import PageSection from "../PageSection/PageSection";

function MoviesCardList(props) {
  const [loadMore, setLoadMore] = useState(props.pagination);

  return (
    <PageSection name={props.name}>
      <ul className="movies__list">{props.children}</ul>
      {loadMore && (
        <button className="button movies__load-more-button">Ещё</button>
      )}
    </PageSection>
  );
}

export default MoviesCardList;

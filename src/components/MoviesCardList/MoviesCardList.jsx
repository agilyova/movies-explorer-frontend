import "./MoviesCardList.css";
import React from "react";
import PageSection from "../PageSection/PageSection";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";

function MoviesCardList(props) {
  return (
    <PageSection name={props.name}>
      <ul className="movies__list">{props.children}</ul>
      {props.pagination && <LoadMoreButton onLoadMore={props.onLoadMore} />}
    </PageSection>
  );
}

export default MoviesCardList;

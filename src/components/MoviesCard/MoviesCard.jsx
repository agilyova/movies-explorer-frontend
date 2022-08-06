import "./MoviesCard.css";
import React, { useState } from "react";

import iconSaved from "../../images/card-check.svg";
import iconDelete from "../../images/card-cross.svg";
import { reformatTime } from "../../utils/helper";

function MoviesCard(props) {
  const [isSaved, setIsSaved] = useState(props.isSaved); /*для верстки*/

  const handleSaveMovie = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    setIsSaved(true);
  };

  const handleDeleteMovieFromSaved = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    setIsSaved(false);
  };

  return (
    <li className="movies__list-item">
      <a className="movie-card" href={props.trailerLink} target="_blank">
        <div className="movie-card__image-wrapper">
          <img
            className="movie-card__image"
            src={`https://api.nomoreparties.co${props.preview}`}
            alt="Описание"
          />
        </div>
        <div className="movie-card__info">
          <h2 className="movie-card__name">{props.name}</h2>
          <p className="movie-card__duration">{reformatTime(props.duration)}</p>
        </div>

        {!isSaved ? (
          <button
            className="movie-card__button movie-card__button_type_save"
            onClick={handleSaveMovie}
          >
            Сохранить
          </button>
        ) : (
          <button
            className="movie-card__button movie-card__button_type_delete"
            onClick={handleDeleteMovieFromSaved}
          >
            {props.type === "movies" ? (
              <img src={iconSaved} alt="Галка" />
            ) : (
              <img src={iconDelete} alt="Крест" />
            )}
          </button>
        )}
      </a>
    </li>
  );
}

export default MoviesCard;

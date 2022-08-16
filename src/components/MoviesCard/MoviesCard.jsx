import "./MoviesCard.css";
import React from "react";

import iconSaved from "../../images/card-check.svg";
import iconDelete from "../../images/card-cross.svg";
import { reformatTime } from "../../utils/helper";

const MoviesCard = React.memo(
  ({
    savedMovies,
    type,
    movie,
    addMoviesToSaved,
    deleteMovieFromSaved,
    preview,
  }) => {
    const isSaved =
      type === "movies"
        ? savedMovies.some((savedMovie) => {
            return savedMovie.movieId === movie.id
              ? (movie._id = savedMovie._id)
              : "";
          })
        : true;

    const handleSaveMovie = (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      addMoviesToSaved(movie);
    };

    const handleDeleteMovieFromSaved = (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      deleteMovieFromSaved(movie._id);
    };

    return (
      <li className="movies__list-item">
        <a className="movie-card" href={movie.trailerLink} target="_blank">
          <div className="movie-card__image-wrapper">
            <img className="movie-card__image" src={preview} alt="Описание" />
          </div>
          <div className="movie-card__info">
            <h2 className="movie-card__name">{movie.nameRU}</h2>
            <p className="movie-card__duration">
              {reformatTime(movie.duration)}
            </p>
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
              {type === "movies" ? (
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
);

export default MoviesCard;

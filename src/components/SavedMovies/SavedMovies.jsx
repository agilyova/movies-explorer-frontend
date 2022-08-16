import "./SavedMovies.css";
import React, { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

function SavedMovies({ savedMovies, deleteMovieFromSaved, onSearch }) {
  const [searchResultsSavedMovies, setSearchResultsSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  /*Прямой переход на роут*/
  useEffect(() => {
    if (searchResultsSavedMovies.length === 0) {
      setSearchResultsSavedMovies(savedMovies);
    }
  }, [savedMovies]);

  const handleSearch = (query) => {
    setIsLoading(true);
    const result = onSearch(query, savedMovies);
    setSearchResultsSavedMovies(result);
    setIsLoading(false);
  };

  const handleDelete = (savedMovieId) => {
    deleteMovieFromSaved(savedMovieId);
    /*Поиск - Удалить, чтоб не перерисовывались из savedMovies*/
    setSearchResultsSavedMovies((prevState) =>
      prevState.filter((item) => item._id !== savedMovieId)
    );
  };

  return (
    <>
      <SearchForm
        onSearch={handleSearch}
        setSearchResult={setSearchResultsSavedMovies}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          name="saved-movies"
          cardType="saved-movies"
          pagination={false}
        >
          {searchResultsSavedMovies.length !== 0 ? (
            searchResultsSavedMovies.map((movie) => {
              return (
                <MoviesCard
                  key={movie._id}
                  type="saved-movies"
                  isSaved={true}
                  movie={movie}
                  preview={movie.thumbnail}
                  deleteMovieFromSaved={handleDelete}
                />
              );
            })
          ) : (
            <p>Ничего не найдено</p>
          )}
        </MoviesCardList>
      )}
    </>
  );
}

export default SavedMovies;
